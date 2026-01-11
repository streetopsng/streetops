"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathName = usePathname();

  console.log(pathName);

  return (
    <header className="lg:py-8 py-4 lg:px-8 px-4 z-30 p">
      <div className="max-w-7xl mx-auto flex items-center justify-between ">
        <div className="relative lg:w-37.5 h-10  w-31.25">
          <Link href="/">
            <Image
              className="absolute w-full h-full object-contain cursor-pointer"
              fill
              src={"/streetopslogo.png"}
              alt="logo"
            />
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-8 ">
          <Link
            href="/#about"
            className="text-white Hero text-sm hover:text-gray-300 transition-colors duration-500"
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
            href="/#services"
            className="text-white Hero text-sm hover:text-gray-300 transition-colors duration-500"
          >
            Services
          </Link>
          <Link
            href="#how-it-works"
            className="text-white Hero text-sm hover:text-gray-300 transition-colors duration-500"
          >
            How it works
          </Link>
        </nav>

        {pathName == "/blog" ? (
          <Link href="/">
            <Button className="bg-white  text-slate-700 Hero rounded-full px-6 text-sm cursor-pointer hover:bg-white hover:text-primary transition duration-300 ">
              Home
            </Button>
          </Link>
        ) : (
          <Link href="/blog">
            <Button className="bg-white  text-slate-700 Hero rounded-full px-6 text-sm cursor-pointer hover:bg-white hover:text-primary transition duration-300 ">
              Blog
            </Button>
          </Link>
        )}
        {/* <Link href="/blog">
          <Button className="bg-primary  text-white Hero rounded-full px-6 text-sm cursor-pointer hover:bg-white hover:text-primary transition duration-300 ">
            Blog
          </Button>
        </Link> */}
      </div>
    </header>
  );
}
