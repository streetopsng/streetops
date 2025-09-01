"use client"
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

const TempHeader = () => {
    // const router = useRouter()
  return (
    <div   className=" min-h-[20px] w-full bg-bgcolorTwo z-50 ">

    <div  className=" xl:mx-6 md:mx-4 py-4  mx-4 mdlg:static relative text-grayOne ">
        
        <div className="lg:py-0  flex justify-between items-center  ">

<section className="lg:pl-4 flex items-center gap-x-2">
<div className="relative lg:w-[30px] lg:h-[50px] h-[30px] w-[20px] bg-">
<Image 
className="absolute w-full h-full object-contain"
fill
src={"/logo.png"} 
alt="logo"/>
</div>
<h1 className="text-primary font-semibold">streetOps</h1>
</section>

        <button
onClick={()=> {
    const formElement = document.querySelector(".formsection") as HTMLElement | null;
console.log(formElement);

    if (formElement) {
      formElement.scrollIntoView({
        behavior: "smooth",
      });
    } else {
      console.error("Element with class .formsection not found");
    }

}}
className=' inline  text-wht rounded-md lg:h-[40px] h-[40px] lg:px-4 px-2  cursor-pointer   border-[2px] border-primary relative overflow-hidden group ' >
<span className="relative  z-10  text-primary">
Join Waitlist
</span>
<span className="absolute inset-0  transform translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out z-0" />
</button> 
    </div>




         </div>
         </div>



  )
}

export default TempHeader