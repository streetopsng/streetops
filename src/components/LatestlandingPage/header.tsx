"use client"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 px-6 py-4 mt-[-40] lg:mt-0">
      <div className="max-w-7xl mx-auto flex items-center justify-between lg:mt-[-50]">
       <div className="relative lg:w-[150px] lg:h-[150px] h-[125px] w-[125px]  bg-">
         <Image 
               className="absolute w-full h-full object-contain"
               fill
               src={"/image.png"} 
               alt="logo"
               
        />
        </div>

        <nav className="hidden md:flex items-center gap-8 ">
          <Link href="#" className="text-white Hero text-sm hover:text-white/80 transition-colors">
            About
          </Link>
          <Link href="#" className="text-white Hero text-sm hover:text-white/80 transition-colors">
            Products
          </Link>
          <Link href="#" className="text-white Hero text-sm hover:text-white/80 transition-colors">
            Services
          </Link>
          <Link href="#" className="text-white Hero text-sm hover:text-white/80 transition-colors">
            How it works
          </Link>
        </nav>

        <Button className="bg-[#c41e3a] hover:bg-[#a01830] text-white Hero rounded-full px-6 text-sm">Get started</Button>
      </div>
    </header>
  )
}
