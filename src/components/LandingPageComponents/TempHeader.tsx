"use client"
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

import { FaInstagram } from "react-icons/fa6";
import { RiTwitterXFill } from "react-icons/ri";
import { RiTiktokLine } from "react-icons/ri";
import { RxLinkedinLogo } from "react-icons/rx";



const linkClass = "hover:text-grayOne"
const TempHeader = () => {
    const router = useRouter()
  return (
    <div   className=" min-h-[20px] w-full bg-gray-500   z-50 ">

{/* <div className="absolute left-0 w-full h-full bg-black opacity-70">

</div> */}
    <div  className=" xl:mx-6 md:mx-4 py-4  lg:mx-4 mx-2 mdlg:static relative text-grayOne ">
        
        <div className="lg:py-0  flex justify-between items-center  ">

<section className="lg:pl-4 flex items-center gap-x-2">
<div className="relative lg:w-[30px] lg:h-[40px] h-[30px] min-w-[130px] bg-">
<Image 
className="absolute w-full h-full "
fill
src={"/streetopslogo.png"} 
alt="logo"/>
</div>
{/* <h1 className="text-primary font-semibold  md:text-2xl text-xl">StreetOps</h1> */}
</section>

      <section className='flex items-center gap-x-2'>
<aside className='flex lg:gap-x-3 gap-x-2 items-center'>
<a target="_blank" href="https://www.instagram.com/street_opsng/"><FaInstagram className="text-wht hover:text-primary" size={20}/></a>
      <a target="_blank" href="https://x.com/StreetOpsng"><RiTwitterXFill className="text-wht hover:text-primary" size={20}/></a>
      <a target="_blank" href="https://www.tiktok.com/@streetops.ng"><RiTiktokLine className="text-wht hover:text-primary" size={20}/></a>
      <a target="_blank" href="https://www.linkedin.com/company/streetopsng"><RxLinkedinLogo className="text-wht hover:text-primary" size={20}/></a>
</aside>
        {/* blog page btn */}
      {/* <button

onClick={()=>{
  router.push("/blogs")
}}
className=' inline  text-wht rounded-md lg:h-[40px] h-[30px] lg:px-4 px-2  cursor-pointer   border-[2px] border-primary relative overflow-hidden group ' >
<span className="relative  z-10  text-primary">
Blogs
</span>
<span className="absolute inset-0  transform translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out z-0" />
</button>  */}
{/* Social Btn */}


      </section>
    </div>




         </div>
         </div>



  )
}

export default TempHeader