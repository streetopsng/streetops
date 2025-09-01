"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { FaComments, FaTimes } from 'react-icons/fa';
import { GiCheckMark } from "react-icons/gi";
import { RiCheckboxFill } from "react-icons/ri";
import AnimatedParticles from '../AnimatedParticles';
const checkList = ["Operations Strategy: Turn scattered processes into structured systems","Automation Tools: Let tech do the heavy lifting.","Consulting for SMEs: Actionable solutions for real growth.","TPeople & Performance: Build teams that run with clarity, not chaos."]

interface typeFlip<T> {
processFlip:T,
peopleFlip:T
}
const Section = () => {
  const [flip,setFlip] = useState<typeFlip<boolean>>({
    processFlip:false,
    peopleFlip:false
  })

  


  return (
    <div className="my-4 xl:px-8 md:px-8  flex flex-col  justify-start items-center   space-y-10 text-grayOne">
      {/* work life balance */}
      <div className=" flex flex-col lg:flex-row  lg:rounded-lg w-full gap-y-16  lg:border-grayTwo lg:border-2 overflow-hidden lg:items-center ">
        {/* first */}
        <div className="flex-1 space-y-4 lg:max-w-[60%] px-6 ">
          <h2 className="font-semibold text-2xl lg:text-[2.2rem] leading-snug lg:text-center text-center animated-gradient-text-two uppercase font-semibold ">
            {/* The Future of <br className="block sm:hidden" />
            Balanced Workforces. */}
            what we do
          </h2>
          {/* <p className='text-grayTwo lg:text-[0.9rem] '>
            We are championing workforce evolution, offering innovative operational strategies that drive business transformation. By integrating specialized recruitment, smart automations and workflow optimization, we empower organizations to thrive. Our focus is on delivering <q>The Future of Balanced Workforces</q> - where talent blends with technology.
          </p> */}
        </div>
{/* second */}
        <div className='lg:bg-gradient-to-r bg-gradient-to-b from-bgcolor to-[#9f1203] lg:w-[40%] lg:px-2 px-4 lg:py-16'>
        {
  checkList.map((item,index)=>{

    return <div key={index} className='flex items-center  w-full py-4'>
<span><RiCheckboxFill className='text-primary text-[1.7em]'/> </span>
<span className='ml-4 font-semibold capitalize text-grayTwo italic'>{item}</span>
    </div>
  })
}
    
    </div>
      </div>



      {/* Suppliers & Financiers Section */}
      {/* <div
      onMouseLeave={()=>{
        setFlip({
          processFlip:false,
          peopleFlip:false
        })
      }}
      className="flex flex-col  lg:flex-row gap-6 w-full max-w-6xl relative ">
          <AnimatedParticles value={15}/>
    
        
        <div className={`relative w-full min-h-[500px] text-grayTwo   flip-class  ${flip.peopleFlip ? '[transform:rotateY(180deg)]' : ''} group-hover:[transform:rotateY(180deg)]`}  
  onMouseOver={()=>{
    setFlip({processFlip:false,peopleFlip:true})

  }}

        onClick={()=> {

          if (flip.peopleFlip) {
            setFlip({processFlip:false,peopleFlip:false})
          }
          else{
            setFlip({processFlip:false,peopleFlip:true})
          }
        }}  
        >
 
        <div className='absolute  h-full  backface-hidden  px-4 cursor-pointer my-4'>
        <h2 className=" uppercase font-semibold text-xl lg:text-2xl text-center text-wht child">Processes</h2>
          <p className=" pt-4 italic">
Automation powers modern business efficiency. Our "Processes" services offer specialized consulting and implement tailored automation solutions that advance your organization, regardless of its size.
<br />
<strong className='text-grayOne not-italic'>Tailored Automation Packages SMEs:</strong> Streamline operations, reduce manual work, and improve accuracy, including sales and digital automations.
<br />
<strong className='text-grayOne not-italic'>Enterprises:</strong>Integrate complex systems, automate large-scale processes, and achieve substantial savings and efficiency. This includes comprehensive sales and digital automation strategies.
<br />
<strong className='text-grayOne not-italic'>Startups:</strong>Establish scalable operations from day one, automate core functions, and accelerate growth. This package includes efficient sales pipelines and foundational digital automation.
    
          </p>
        </div>
     

       
        
        <div className='absolute w-full  h-full rotate-y-[180deg] backface-hidden flex items-center justify-center  px-4 cursor-pointer'>
          <div className='relative w-full h-full'>
          <Image 
            
            alt="paige" 
            src="/people-one.svg" 
            fill
            className="absolute w-full h-full inset-0" />
            </div>
        </div>
         
        </div>


<div className='lg:hidden'>
<br />
<br />
<br />
</div>

        <div 
          onMouseOver={()=>{
            setFlip({processFlip:true,peopleFlip:false})
        
          }}
 onClick={()=> {

  if (flip.processFlip) {
    setFlip({processFlip:false,peopleFlip:false})
  }
  else{
    setFlip({processFlip:true,peopleFlip:false})
  }
}}  
        className={`relative my-4 w-full min-h-[500px] text-grayTwo rounded-lg   flip-class ${flip.processFlip ? '[transform:rotateY(180deg)]' : ''}`}>
     
    
         <div className='absolute  h-full  backface-hidden  px-4' >
         <h2 className="uppercase font-semibold text-xl lg:text-2xl text-center text-wht">People</h2>
          <article className=" pt-4  italic">
While automation drives efficiency, we strengthen your human capital. Our "People" services support this by ensuring your teams focus on high-value contributions and continuous growth.

<h1 className='font-semibold text-center text-grayOne not-italic'>Our Talent Solutions</h1>
<strong className='text-grayOne not-italic'>Recruitment:</strong> We find and place the right talent to excel in efficient workplaces. We build strong teams that fit your systems.
<br />
<strong className='text-grayOne not-italic'>Training & Development:</strong> We give your teams the skills they need to thrive in an automated environment, building their critical thinking and adaptability.
<br />
<strong className='text-grayOne not-italic'>Work-Life Integration Consulting:</strong>We help create supportive cultures where employee well-being improves, leading to better long-term productivity.
         
          </article>
         </div>

<div  className='absolute w-full  h-full rotate-y-[180deg] backface-hidden flex items-center justify-center  px-4'>
  <div className='relative w-full h-full'>
  <Image 

  alt="paige" 
  src="/process-one.svg" 
  fill
  className="absolute w-full h-full inset-0" />
  </div>
</div>
        </div>

      </div> */}

      
    </div>
  );
};

export default Section;