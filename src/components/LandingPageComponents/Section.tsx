"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { FaComments, FaTimes } from 'react-icons/fa';
import { GiCheckMark } from "react-icons/gi";
import { RiCheckboxFill } from "react-icons/ri";
import AnimatedParticles from '../AnimatedParticles';
const checkList = ["Creative Processes","Efficient Workforces","Tech-Enabled Systems"]

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
    <div className="xl:px-8 md:px-8  flex flex-col  justify-start items-center   space-y-10 text-grayOne">
      {/* work life balance */}
      <div className=" flex flex-col lg:flex-row  lg:rounded-lg w-full gap-y-16  lg:border-grayTwo lg:border-2 overflow-hidden lg:items-center ">
        {/* first */}
        <div className="flex-1 space-y-4 lg:max-w-[70%] px-6 ">
          <h2 className="font-semibold text-2xl lg:text-[2.2rem] leading-snug lg:text-start text-center animated-gradient-text-two uppercase font-semibold">
            The Future of <br className="block sm:hidden" />
            Balanced Workforces.
          </h2>
          {/* <p className='text-grayTwo lg:text-[0.9rem] '>
            We are championing workforce evolution, offering innovative operational strategies that drive business transformation. By integrating specialized recruitment, smart automations and workflow optimization, we empower organizations to thrive. Our focus is on delivering <q>The Future of Balanced Workforces</q> - where talent blends with technology.
          </p> */}
        </div>
{/* second */}
        <div className='lg:bg-gradient-to-r bg-gradient-to-b from-[rgba(0,0,0,0.3)] to-[#9f1203] lg:w-[30%] lg:px-0 px-4 lg:py-16'>
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
      <div
      onMouseLeave={()=>{
        setFlip({
          processFlip:false,
          peopleFlip:false
        })
      }}
      className="flex flex-col  lg:flex-row gap-6 w-full max-w-6xl relative ">
          <AnimatedParticles value={15}/>
        {/* People */}
        
        <div className={`relative w-full min-h-[500px] text-grayTwo  leading-8 flip-class  ${flip.peopleFlip ? '[transform:rotateY(180deg)]' : ''} group-hover:[transform:rotateY(180deg)]`}  
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
          {/* text */}
        <div className='absolute  h-full  backface-hidden  px-4 cursor-pointer my-4'>
        <h2 className=" uppercase font-semibold text-xl lg:text-2xl text-center text-wht child">People</h2>
          <p className=" pt-4 italic">
            We believe that people are the core of every successful organization. Our People section provides strategic solutions to maximize your human capital investment. We offer:
            <br />
            <strong className='text-wht not-italic'>Strategic Recruitment</strong> : Identifying and placing the right talent to achieve your business objectives.
            <br />
            <strong className='text-wht not-italic'>Transformative Training</strong> : Equipping your workforce with the skills and knowledge needed to excel.
            <br />
            <strong className='text-wht not-italic'>Human Capital Leadership (Africa)</strong> : Actively contributing to the development of human capital across the African continent through webinars, training programs, and a dynamic blog, fostering a community of growth and innovation.
          </p>
        </div>
     

       
        {/* Image */}
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


        {/* Processes */}
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
        className={`relative my-4 w-full min-h-[500px] text-grayTwo rounded-lg  leading-8 flip-class ${flip.processFlip ? '[transform:rotateY(180deg)]' : ''}`}>
     
        {/* text */}
         <div className='absolute  h-full  backface-hidden  px-4' >
         <h2 className="uppercase font-semibold text-xl lg:text-2xl text-center text-wht">Processes</h2>
          <p className=" pt-4  italic">
            We partner with organizations to transform their operations and achieve peak performance. Our Processes section delivers strategic consulting services, including:
            <br />
            <strong className='text-wht not-italic'>Operational Consulting</strong> :  Providing expert guidance to optimize workflows, reduce costs, and improve overall operational effectiveness.
            
            <br />
            <strong className='text-wht not-italic'>Process Automation</strong> : Leveraging automation technologies to drive efficiency, accuracy, and scalability.
            <br />
            <strong className='text-wht not-italic'>Comprehensive Consulting Solutions</strong> : Offering a suite of consulting services to support organizational change, improve project delivery, and enhance overall business performance.
          </p>
         </div>
{/* Images */}
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




      </div>

      
    </div>
  );
};

export default Section;