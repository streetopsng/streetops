"use client"
import { useRef } from "react"
import ClientLogos from "./client-logo"
import {motion,useInView}  from "motion/react"
export default function ImageGallery() {
 const images = [
    
 {
 id: 1,
 src: "image-1.png",
 alt: "Street market scene",
//       rotation:1,
 },
 {
 id: 2,
 src: "image-2.png",
 alt: "Street photography",
//       rotation: 0,
 },
 {
 id: 3,
 src: "image-3.png",
 alt: "Inventory management",
//       rotation: -1,
 },
 ]

 return (
 <section className="relative  ">
 <div className="absolute inset-x-0 bottom-0 h-3/4 bg-[#1D0101]"></div>
 <div className="relative flex justify-center items-center gap-4 md:gap-4 md:gap-x-8 flex-wrap  md:px-0 px-4 py-8">
 {images.map((image, index) => {
const ref = useRef(null);
const isInView = useInView(ref, { once: true });

return   <motion.div

ref={ref}
initial={{opacity:0,y:50}}
animate={isInView ?{ opacity:1,y:0} : {}}
transition={{delay:index * 0.2,duration:1}}

        key={image.id}
        className="relative  md:w-90 md:h-90 rounded-lg"
        // style={{
        // transform: `translateY(${index === 1 ? "20px" : "0"})`,
        // }}
 >
 <img

 src={image.src} alt={image.alt} className=" object-contain   focus:scale-105  hover:scale-105   transition-all duration-500 ease-in-out" />
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