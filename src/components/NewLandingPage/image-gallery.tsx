"use client"
import { useRef } from "react"
import ClientLogos from "./client-logo"
import {motion,useInView}  from "motion/react"
export default function ImageGallery() {
 const images = [
    
 {
 id: 1,
 src: "rect-one.png",
 alt: "Street market scene",
//       rotation:1,
 },
 {
 id: 2,
 src: "rect-two.png",
 alt: "Street photography",
//       rotation: 0,
 },
 {
 id: 3,
 src: "rect-three.png",
 alt: "Inventory management",
//       rotation: -1,
 },
 ]

 return (
 <section className="relative  ">
 <div className="absolute inset-x-0 bottom-0 h-3/4 bg-[#1D0101]"></div>
 <div className="relative flex justify-center items-center gap-4 md:gap-8 md:gap-x-12 flex-wrap gap-y-12  md:px-0 px-4 py-8">
 {images.map((image, index) => {
const ref = useRef(null);
const isInView = useInView(ref, { once: true });

return   <motion.div

ref={ref}
initial={{opacity:0,y:50}}
animate={isInView ?{ opacity:1,y:0} : {}}
transition={{delay:index * 0.2,duration:1}}

        key={image.id}
        className={`${index == 0 ? "rotate-8 md:-translate-y-8" : index == 2 ? "rotate-[-8deg] md:-translate-y-8" : ""}  relative  w-[90%] md:mx-0 mx-auto md:w-[28%]   rounded-lg  rounded-xl overflow-hidden`}
        // style={{
        // transform: `translateY(${index === 1 ? "20px" : "0"})`,
        // }}
 >
 <img

 src={image.src} alt={image.alt} className=" object-fit w-full h-full  focus:scale-105  hover:scale-105   transition-all duration-500 ease-in-out" />
 </motion.div>
 }


)}
 </div>
<div>
    <ClientLogos/>
</div>
 </section>
 )
}