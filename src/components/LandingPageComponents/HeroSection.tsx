import Image from 'next/image'
import React from 'react'
import { CiPlay1 } from "react-icons/ci";
import { FaPlay } from "react-icons/fa";
const imageWidth = "mdlg:w-[330px] mdlg:h-[300px] w-[290px] h-[270px]"
export const HeroSection = () => {


  return (
    <div className='-z-30 lg:px-16 md:px-8 px-4 flex py-8 md:flex-row flex-col'>
        {/* First Sectioon */}
        <section className='px-2 md:w-[55%] w-full '>
<span className='bg-[#2ABFD538] text-[#662AD5] inline-block px-4 rounded-xl text-[0.8rem] '>Powerful Platform</span>
<h1 className='font-semibold lg:text-[2.7rem] text-[2rem]'>
Unlock Growth with Our
<br />
 Digital Supply Chain
 <br />
  Financing Solution
</h1>
<p className='text-[0.8rem] leading-6 my-8'>Enable growth and service delivery with our digital supply chain financing solution where vendors and corporates can assess alternative funding from multiple financiers simultaneously.</p>

<aside className='my-6 flex gap-x-8'>
    <button className='bg-primary text-wht px-4 py-2 rounded-md'>Find A Job</button> 
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
