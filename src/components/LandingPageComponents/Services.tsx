"use client"
import { dispatchType } from '@/store'
import { updateTop } from '@/store/slices/ServicesTopSlice'
import React, { useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';


const swiperClass = " w-full "
const headerClass = 'font-semibold text-grayOne text-lg text-[1.2rem]   '
const sectionClass = "my-4 md:pl-4 p-8 w-[90%]  mx-auto shadow-sm shadow-primary inset-box"
const Services = () => {
const dispatch = useDispatch<dispatchType>()
  const workflowAutomationRef = useRef<HTMLElement>(null)
  const recruitmentRef = useRef<HTMLElement>(null)
  const  trainingAndDevelopmentRef = useRef<HTMLElement>(null)
  const  worklifeIntegrationConsultingtRef = useRef<HTMLElement>(null)

useEffect(()=>{
  // window.addEventListener("scroll",()=>{
  //   console.log(workflowAutomationRef.current.getBoundingClientRect().top,"services");
  // })



 const timeoutId = setTimeout(()=>{
  console.log("from services timeout");
//   if (!workflowAutomationRef.current || !recruitmentRef.current ||!trainingAndDevelopmentRef.current || !worklifeIntegrationConsultingtRef.current) {
//   return
// }
const workflowEl = workflowAutomationRef.current as HTMLElement
const recruitmentEl = recruitmentRef.current as HTMLElement
const trainingEl = trainingAndDevelopmentRef.current as HTMLElement
const workLifeEl = worklifeIntegrationConsultingtRef.current as HTMLElement

console.log({
  workflowAutomation:workflowEl.getBoundingClientRect().top,
  recruitment:recruitmentEl.getBoundingClientRect().top,
  trainingAndDevelopment:trainingEl.getBoundingClientRect().top,
  worklifeIntegrationConsulting:workLifeEl.getBoundingClientRect().top
});

  dispatch(updateTop({
    workflowAutomation:workflowEl.getBoundingClientRect().top,
    recruitment:recruitmentEl.getBoundingClientRect().top,
    trainingAndDevelopment:trainingEl.getBoundingClientRect().top,
    worklifeIntegrationConsulting:workLifeEl.getBoundingClientRect().top
  }))
 },5000)

 

 return ()=> clearTimeout(timeoutId)
},[])

useEffect(()=>{
console.log("from services");

},[])

  return (
    <div className='text-grayTwo xl:px-8 md:px-8'>
       <h1 className='text-2xl lg:text-[2.2rem] uppercase animated-gradient-text-two text-[1.5rem] text-center font-semibold'>Services</h1>
      <div className='flex flex-wrap  gap-4 justify-center   '>
       {/* Workflow */}
       <Swiper
    modules={[Autoplay]}
      spaceBetween={5}
      loop={true}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      breakpoints={{
          0: {
              slidesPerView: 1,
            },
        768: {
            slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
    }}
    >
      <SwiperSlide className={swiperClass}>

      <section id='workflow' className={sectionClass} >
<h1 className={headerClass}>Workflow Automation</h1>
<p className=''><strong className='text-wht italic'>Automate</strong>  for peak performance.</p>
<ul className='list-disc leading-10 pl-4'>
    <li>Work faster, smarter. </li>
    <li>Boost operational flow. </li>
    <li>Scale with ease. </li>
</ul>
       </section>
      </SwiperSlide>
       {/* Recruitment */}
       <SwiperSlide className={swiperClass}>

       <section id='recruitment' className={sectionClass}>
<h1 className={headerClass}>Recruitment </h1>
<p className=''><strong className='text-wht italic'>Hire</strong>   the best talent, <strong className='text-wht'>fast.</strong></p>
<ul className='list-disc leading-10 pl-4'>
    <li>Attract top talent </li>
    <li>Accelerate hiring </li>
    <li>Build strong teams </li>
</ul>
       </section>
       </SwiperSlide>
       {/* Training and Development */}
       <SwiperSlide className={swiperClass}>

       <section id='training' className={sectionClass}>
<h1 className={headerClass}>Training and Development </h1>
<p className=''><strong className='text-wht italic'>Unleash</strong>  your team's potential. </p>
<ul className='list-disc leading-10 pl-4'>
    <li>Cultivate vital skills. </li>
    <li>Foster professional growth.</li>
    <li>Boost team performance.  </li>
</ul>
       </section>
       </SwiperSlide>
       {/* Worklife Integration Consulting */}
       <SwiperSlide className={swiperClass}>

       <section id='worklife'  className={sectionClass}>
<h1 className={headerClass}>Worklife Integration Consulting </h1>
<p className=''><strong className='text-wht italic'>Cultivate</strong>   sustainable well-being.</p>
<ul className='list-disc leading-10 pl-4'>
    <li>Design supportive cultures. </li>
    <li>Enhance employee well-being. </li>
    <li>Maximize long-term productivity. </li>
</ul>
       </section>
       </SwiperSlide>
       </Swiper>
      </div>
    </div>
  )
}

export default Services