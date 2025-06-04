"use client"
import { dispatchType } from '@/store';
import { closeSubmenu } from '@/store/slices/desktopSubmenuLinksSlice';
import gsap from 'gsap';
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import React, { useEffect, useRef } from 'react'
import { CiPlay1 } from "react-icons/ci";
import { FaPlay } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import ImageSlider from './ImageSlider';
const imageWidth = "mdlg:w-[330px] mdlg:h-[300px] w-[290px] h-[270px]"
export const HeroSection = () => {
    const headerEl = useRef<HTMLHeadingElement | null >(null)
    const imageDiv = useRef<HTMLDivElement | null>(null)
    const dispatch = useDispatch<dispatchType>()

    const router = useRouter()

    useEffect(() => {
        if (!imageDiv.current) return;
    
        gsap.to(imageDiv.current, {
          y: -20,             
          duration: 3,        
          repeat: -1,         
          yoyo: true,         
          ease: "power1.inOut", 
        });
      }, []);

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
    <div
    onMouseOver={()=> dispatch(closeSubmenu())}
    className='relative xl:px-8 md:px-8 px-2 flex py-8 md:flex-row flex-col overflow-hidden play-color '>
      <ImageSlider/>

        {/* First Section */}
        <section className='px-2 md:w-[55%] w-full '>
{/* <span className='bg-[#2ABFD538] text-[#662AD5] inline-block px-4 rounded-xl text-[0.8rem] '>Powerful Platform</span> */}
<h1 ref={headerEl} className='font-semibold lg:text-[2.7rem] text-[2rem] opacity-0 animated-gradient-text'>
<strong>
PAIGE:
</strong>
<br />
Smart Talent, 
<br />
Seamless Operations.
</h1>
<p className='mdlg:text-[1rem] text-[0.9] leading-6 my-8 text-black'>your partner for top talent  and transformative automation consulting.</p>

{/* Slide */}



<aside className='my-6 flex gap-x-8'>
    <button
    onClick={()=> router.push("/jobs")}
    className='mdlg:inline   text-wht rounded-md h-[40px] px-4 cursor-pointer   border-[2px] border-primary relative overflow-hidden group' >
          <span className="relative text-semibold z-10 transition-colors duration-300 group-hover:text-wht text-primary">
          Paige-Auto
        </span>
        <span className="absolute inset-0 bg-primary transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out z-0" />
     </button> 
    {/* <button className='flex items-center'> <span className='bg-[#342AD51C] rounded-full w-[30px] h-[30px] flex items-center justify-center mr-2'><FaPlay  color='#100B59' size={10}/></span> How it works</button> */}
</aside>
        </section>


        {/* Second Sectioon */}
        <section className='md:w-[45%] w-full flex justify-end '>
            




        

        </section>
    </div>
  )
}


             