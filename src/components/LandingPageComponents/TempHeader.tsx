"use client"
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'
import { FaTwitter, FaLinkedin, FaFacebookF } from "react-icons/fa";


const linkClass = "hover:text-grayOne"
const TempHeader = () => {
    const router = useRouter()
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
<h1 className="text-primary font-semibold  md:text-2xl text-xl">StreetOps</h1>
</section>

      <section className='flex items-center gap-x-2'>
        {/* blog page btn */}
      <button
// onClick={()=> {
//     const formElement = document.querySelector(".formsection") as HTMLElement | null;
// console.log(formElement);

//     if (formElement) {
//       formElement.scrollIntoView({
//         behavior: "smooth",
//       });
//     } else {
//       console.error("Element with class .formsection not found");
//     }

// }}
onClick={()=>{
  router.push("/blog")
}}
className=' inline  text-wht rounded-md lg:h-[40px] h-[30px] lg:px-4 px-2  cursor-pointer   border-[2px] border-primary relative overflow-hidden group ' >
<span className="relative  z-10  text-primary">
Blog
</span>
<span className="absolute inset-0  transform translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out z-0" />
</button> 
{/* Social Btn */}

<aside className='flex gap-x-2 items-center'>
<Link href="https://twitter.com" className={linkClass} target="_blank">
                <FaTwitter className="text-lg text-grayTwo hover:text-grayOne" />
              </Link>
              <Link href="https://www.linkedin.com/company/paigeautos/" className={linkClass} target="_blank" >
                <FaLinkedin className="text-lg text-grayTwo hover:text-grayOne" />
              </Link>
              <Link href="https://facebook.com" className={linkClass} target="_blank" >
                <FaFacebookF className="hover:text-grayOne text-grayTwo text-lg" />
              </Link>
</aside>

      </section>
    </div>




         </div>
         </div>



  )
}

export default TempHeader