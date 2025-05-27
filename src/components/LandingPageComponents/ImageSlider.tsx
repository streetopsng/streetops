

'use client';

import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const images = [
    '/img-one.jpg',
    '/img-two.jpg',
    '/img-three.jpg',
  ];
  

export default function ImageSlider() {
  const slidesRef = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => {
        let next = prev + direction;

        if (next >= images.length) {
          setDirection(-1);
          next = prev - 1;
        } else if (next < 0) {
          setDirection(1);
          next = prev + 1;
        }

        return next;
      });
    }, 4000); 

    return () => clearInterval(interval);
  }, [direction]);

  useEffect(() => {
    if (slidesRef.current) {
      gsap.to(slidesRef.current, {
        x: `-${current * 100}%`,
        duration: 1.2,
        ease: 'power3.inOut',
      });
    }
  }, [current]);

  return (
    <div className="absolute inset-0 z-[-50] overflow-hidden play-color">
      <div
        ref={slidesRef}
        className="flex h-full max-w-screen "
        style={{ width: `${images.length * 100}%` }}
      >
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Slide ${i + 1}`}
            className="min-w-full h-full object-cover "
          />
        ))}
      </div>
    </div>
  );
}



















// former
// 'use client';

// import React, { useEffect, useRef, useState } from 'react';
// import { gsap } from 'gsap';
// import Image from 'next/image';

// const images = [
//   '/img-one.jpg',
//   '/img-two.jpg',
//   '/img-three.jpg',
// ];

// export default function ImageSlider() {
//   const slidesRef = useRef<HTMLDivElement>(null);
//   const [current, setCurrent] = useState(0);
//   const [direction, setDirection] = useState(1); 

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrent(prev => {
//         let next = prev + direction;
//         if (next >= images.length) {
//           setDirection(-1);
//           next = prev - 1;
//         } else if (next < 0) {
//           setDirection(1);
//           next = prev + 1;
//         }
//         return next;
//       });
//     }, 3000);

//     return () => clearInterval(interval);
//   }, [direction]);

//   useEffect(() => {
//     if (slidesRef.current) {
//       gsap.to(slidesRef.current, {
//         x: `-${current * 100}%`,
//         duration: 1,
//         ease: 'power2.inOut',
//       });
//     }
//   }, [current]);

//   return (
 
//       <div
//         ref={slidesRef}
//         className="flex  absolute top-0 left-0 w-full h-full "
//         style={{ width: `${images.length * 100}%` }}
//       >
//         {images.map((src, i) => (
//           <img
//             key={i}
//             src={src}
//             alt={`Slide ${i + 1}`}
//             className="w-full  h-[400px] object-cover flex-shrink-0"
//           />
//         ))}
//       </div>
   
//   );
// }
