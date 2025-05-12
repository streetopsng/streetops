"use client"
import gsap from 'gsap';
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import { CiPlay1 } from "react-icons/ci";
import { FaPlay } from "react-icons/fa";
const imageWidth = "mdlg:w-[330px] mdlg:h-[300px] w-[290px] h-[270px]"
export const HeroSection = () => {
    const headerEl = useRef<HTMLHeadingElement | null >(null)


    useEffect(()=>{
gsap.fromTo(headerEl.current,{
    y:-50,
    opacity:0,
   
    },{
    y:0,
    opacity:1,
    duration:2
    })
    },[])
  return (
    <div style={{zIndex:2}} className='relative lg:px-24 md:px-8 px-4 flex py-8 md:flex-row flex-col'>
        {/* First Sectioon */}
        <section className='px-2 md:w-[55%] w-full '>
<span className='bg-[#2ABFD538] text-[#662AD5] inline-block px-4 rounded-xl text-[0.8rem] '>Powerful Platform</span>
<h1 ref={headerEl} className='font-semibold lg:text-[2.7rem] text-[2rem] opacity-0'>
<strong>
PAIGE:
</strong>
<br />
Smart Talent, 
<br />
Seamless Operations.
</h1>
<p className='text-[0.8rem] leading-6 my-8'>your partner for top talent  and transformative automation consulting.</p>

<aside className='my-6 flex gap-x-8'>
    <button className='bg-primary text-wht px-4 py-2 rounded-md border-[2px] hover:bg-wht border-primary transition-all duration-500 hover:text-primary cursor-pointer'>Find A Job</button> 
    <button className='flex items-center'> <span className='bg-[#342AD51C] rounded-full w-[30px] h-[30px] flex items-center justify-center mr-2'><FaPlay  color='#100B59' size={10}/></span> How it works</button>
</aside>
        </section>


        {/* Second Sectioon */}
        <section className='md:w-[45%] w-full flex justify-end '>
            



        
<div className='relative lg:w-[420px] lg:h-[390px]  md:w-[390px] md:h-[360px] w-full min-h-[350px]'>
    <Image alt='paige' src={"/man-shape.png"}  fill className=' absolute object-contain '/>
    </div>
{/* 
            <aside className='w-full h-full relative bg-[blue]'>

<article className={`${imageWidth} bg-wht p-4 rounded-lg border-[1px] border-primary absolute mdlg:top-[10%] top-[10%]  md:right-[6%] z-50`}>
<div className='relative w-full h-full '>
    <Image alt='paige' src={"/man.png"}  fill className='object-cover absolute'/>
</div>
</article>

<article className={`${imageWidth} bg-[#CBBCE8] p-4 rounded-lg border-[1px] border-primary absolute mdlg:top-[14%] top-[12%] md:right-[3%] z-40`}></article>
<article className={`${imageWidth} bg-primary p-4 rounded-lg border-[1px] border-primary absolute mdlg:top-[18%] top-[14%] md:right-[0%] right-`}></article>

            </aside>
           */}
  
        </section>
    </div>
  )
}
