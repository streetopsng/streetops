"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

type SlideProps = {
  image: string;
  title: string;
  description: string;
};

const slides: SlideProps[] = [
  {
    image: "/img-one.jpg",
    title: "Transforming Lives One Person at a Time",
    description: "From chaos to clarity: Paige helps African businesses run smarter, faster, stronge",
  },
  {
    image: "/img-two.jpg",
    title: "Transforming Lives One Person at a Time",
    description: "We are impacting learners through resources and community where they can thrive.",
  },
  {
    image: "/img-three.jpg",
    title: "Transforming Lives One Person at a Time",
    description: "We are committed to leverage on technology to provide easy access to quality education. ",
  },
];

const ImageSlider= () => {
const [curr,setCurr] = useState(0)
const [completed,setCompleted] = useState(true)

useEffect(() => {
  const intervalId = setInterval(() => {

      if (curr == slides.length - 1) {
        setCompleted(true)
          setCurr(prev => prev - 1)
          return

      }
      if (completed) {
        if (curr == 0) {
          setCompleted(false)
          setCurr(prev => prev + 1)
          return
        }
        setCurr(prev => prev - 1)
        return
        
      }
      setCurr(prev => prev + 1)
  }, 5000)

  return () => clearInterval(intervalId)

}, [curr])

  return (
    <div className="w-full md:h-[80vh] h-[70vh] relative overflow-hidden">
   <div className="w-full h-full flex transition-all ease-in-out duration-300"
   style={{
    transform:`translateX(-${curr * 100}%)`
   }}
   >

{slides.map((item,index)=>{

  return <aside key={index + 1} className="min-w-full h-full flex flex-col justify-center items-center px-8"
  style={{
    backgroundImage:`url(${item.image})`,
    backgroundSize:"cover",
    backgroundPosition:"center"
    
  }}

  >
<h1 className={`lg:text-7xl md:text-3xl text-4xl font-semibold animated-gradient-slide-text md:w-[60%] text-center   ${index == curr ? "fade-in-top" :""}`}>{item.title}</h1>    
<h1 className={`text-xl text-white text-center ${index == curr ? "fade-in-bottom" :""} `} 

style={{
  whiteSpace:"pre-line"
}}>{item.description}</h1>    

  </aside>
})}
   </div>

    </div>
  );
};

export default ImageSlider;

