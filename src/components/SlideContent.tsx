"use client";
import React, { useEffect, useState } from "react";



type SlideProps = {
  image: string;
  title: string;
  description: string;
};

const slides: SlideProps[] = [
  {
    image: "/sme-img-one.jpg",
    title: "Streeting out your Brand",
    description: "Go-to-Market: Crafting the perfect launch strategy to capture best value",
  },
  {
    image: "/sme-img-two.jpg",
    title: "Streeting out your Brand",
    description: "Structuring & Ops: Building solid and efficient workflows that aids brand delivery",
  },
  {
    image: "/sme-img-three.jpg",
    title: "Streeting out your Brand",
    description: "Startup Consulting: Your startup playbook for success.",
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

  return <aside key={index + 1} className="min-w-full h-full flex flex-col justify-center items-center lg:px-8 px-4 bg-center lg:bg-left-top"
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

