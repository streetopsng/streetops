"use client"
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";


const desktopLinkClass = "hover:text-primary border-b-[3px] border-transparent  hover:border-primary duration-500  min-w-[20%] transition-all py-[3px]  text-center"
const mobileLinkClass = "h-[50px] text-wht flex items-center transition-all duration-700 hover:bg-wht hover:text-primary px-4 border-primary border-[2px] hover:font-semibold hover:pl-2 "
export const Header = () => {

    const [showNav,setShowNav] = useState<boolean>(false)
const mobileMenuRef = useRef<HTMLElement | null>(null)

useEffect(()=>{

    if (showNav) {
        
        gsap.to(mobileMenuRef.current,{
            top:"100%",
            opacity:1,
            duration:1,
            
        })
    }
    else{
        gsap.to(mobileMenuRef.current,{
            top:-200,
            opacity:0,
            duration:1,
        })
    }
},[showNav])


  return (
    <div  className=" lg:mx-24 md:mx-8 mx-4 mdlg:static relative">
        <div style={{zIndex:10}} className="py-4 flex justify-between items-center  ">

        <section>
        <div className="relative mdlg:w-[35px] mdlg:h-[50px] h-[45px] w-[35px]">
        <Image alt="paige-logo" className="absolute top-0 left-0" src={"/paige-logo.jpg"} fill/>
        </div>
        </section>

{/* Menu bar  for desktop*/}
<section className="mdlg:flex hidden mdlg:w-[30%] justify-between">
    <Link className={`${desktopLinkClass}`} href={"/"}>Home</Link>
    <Link className={`${desktopLinkClass}`} href={"/"}>About</Link>
    <Link className={`${desktopLinkClass}`} href={"/"}>Expertise</Link>
</section>

<section className=" ">
<button className="mdlg:inline hidden bg-primary text-wht rounded-md h-[40px] px-4 cursor-pointer hover:bg-wht hover:text-primary border-[2px] border-primary transition-all duration-500  ">Find a Job</button>
<button className="mdlg:hidden inline bg-primary text-wht rounded-md h-[35px] px-[3px] cursor-pointer hover:bg-wht hover:text-primary border-[2px] border-primary  transition-all duration-500 " onClick={()=> {
    setShowNav(!showNav)
    console.log(showNav);
    
}}> {showNav ? <IoMdClose size={30}/>: <IoIosMenu size={30}/>}</button>
</section>
        </div>
        
{/* Menu bar  for mobile*/}
    <section className="bg-primary mdlg:hidden block absolute w-[100%] top-[100%] left-[0%] opacity-0" ref={mobileMenuRef} style={{zIndex:5}} >
        <div className="flex flex-col " >
    <Link className={`${mobileLinkClass}`} href={"/"}>Home</Link>
    <Link className={`${mobileLinkClass}`} href={"/"}>About</Link>
    <Link className={`${mobileLinkClass}`} href={"/"}>Expertise</Link>
    <Link className={`${mobileLinkClass}`} href={"/"}>Find A Job</Link>
        </div>
    </section>
    </div>
  )
}
