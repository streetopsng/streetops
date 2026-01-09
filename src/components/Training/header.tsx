"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="lg:py-8 py-2 px-4 z-30">
      <div className="max-w-7xl mx-auto flex items-center justify-between ">
        <div className="relative lg:w-[150px] lg:h-[50px] h-[50px] w-[125px]">
          <Link href="/">
            <Image
              className="absolute w-full h-full object-contain cursor-pointer"
              fill
              src={"/image-crop.png"}
              alt="logo"
            />
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-8 ">
          <Link
            href="#about"
            className="text-white Hero text-sm hover:bg-white hover:text-primary transition duration-300 px-1 rounded-full"
          >
            About
          </Link>
          {/* <Link
            href="#ratecard"
            className="text-white Hero text-sm hover:text-white/80 transition-colors"
          >
            Products
          </Link> */}
          <Link
            href="#services"
            className="text-white  Hero text-sm  hover:bg-white hover:text-primary transition duration-300 px-1 rounded-full"
          >
            Services
          </Link>
          {/* <Link
            href="#how-it-works"
            className="text-white Hero text-sm hover:text-white/80 transition-colors"
          >
            How it works
          </Link> */}
        </nav>

        <Link href="/blog">
          <Button className="bg-primary  text-white Hero rounded-full px-6 text-sm cursor-pointer hover:bg-white hover:text-primary transition duration-300 ">
            Blog
          </Button>
        </Link>
      </div>
    </header>
  );
}
