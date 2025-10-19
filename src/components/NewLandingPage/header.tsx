"use client"

import { useState } from "react"
import { GraduationCap,NotebookPen } from 'lucide-react';
import { FaInstagram } from "react-icons/fa6";
import { RiTwitterXFill } from "react-icons/ri";
import { RiTiktokLine } from "react-icons/ri";
import { RxLinkedinLogo } from "react-icons/rx";
import Image from "next/image";
export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    
    <header className="relative flex items-center justify-between   py-4">
<div className="relative w-[130px] h-[35px]">
<Image
src={"/red-logo-two.png"}
alt="logo"
className="absolute w-full h-full object-cover"
fill
/>
</div>

      
      {/* <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-foreground hover:text-muted-foreground transition-colors"
        aria-label="Toggle menu"
      >

        
        {isOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button> */}

      {/* Desktop Navigation */}
      <nav className="flex items-center md:gap-x-3 gap-x-2">
        {/* <a href="#" className="text-foreground hover:text-muted-foreground flex text-red-600 transition-colors ">
        <GraduationCap className="mr-1"/>Academy
        </a> */}
          <aside className="flex items-center md:gap-x-3 gap-x-1">
            <a target="_blank" href="https://www.instagram.com/street_opsng/"><FaInstagram className="text-primary hover:text-grayOne" size={20}/></a>
            <a target="_blank" href="https://x.com/StreetOpsng"><RiTwitterXFill className="text-primary hover:text-grayOne" size={20}/></a>
            <a target="_blank" href="https://www.tiktok.com/@streetops.ng"><RiTiktokLine className="text-primary hover:text-grayOne" size={20}/></a>
            <a target="_blank" href="https://www.linkedin.com/company/streetopsng"><RxLinkedinLogo className="text-primary hover:text-grayOne" size={20}/></a>
          </aside>
        <a href="/blog" className="hover:text-grayOne text-primary flex hover:text-muted-foreground transition-colors text-red-600 font-medium md:border-0 border-1 rounded-md border-primary px-2">
        BLOG  <NotebookPen className="mr-1 md:block hidden"/> 
        </a>
      </nav>

      
      <nav
        className={`${
          isOpen ? 'flex' : 'hidden'
        } md:hidden flex-col gap-4 absolute top-full left-0 w-full bg-white shadow-md py-4 px-6 mt-[-100px]`}
      >
        {/* <a href="#" className="text-foreground hover:text-muted-foreground text-red-600 transition-colors">
        <GraduationCap className="mr-1 inline"/>Academy
        </a> */}
        <a href="#" className="text-foreground hover:text-muted-foreground text-red-600 transition-colors">
        <NotebookPen className="mr-1 inline"/> Blog
        </a>
        
      </nav>
    </header>
  )
}