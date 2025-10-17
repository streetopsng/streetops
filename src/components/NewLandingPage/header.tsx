"use client"

import { useState } from "react"
import { GraduationCap,NotebookPen } from 'lucide-react';
export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    
    <header className="relative flex items-center justify-between p-5 md:px-12 md:mt-0 sm:mt-[-80px]">
      <div className="md:mt-[-80px] ">
        <img src="logo.png" alt="StreetOps Logo" className="h-[200px]" />
      </div>

      
      <button
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
      </button>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-8 mt-[-80px]">
        {/* <a href="#" className="text-foreground hover:text-muted-foreground flex text-red-600 transition-colors ">
        <GraduationCap className="mr-1"/>Academy
        </a> */}
        <a href="#" className="text-foreground flex hover:text-muted-foreground transition-colors text-red-600">
         <NotebookPen className="mr-1"/> Blog
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