"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { useDispatch } from "react-redux";
import { dispatchType } from "@/store";
import { Menu } from "lucide-react";
import { openMobileMenu } from "@/store/slices/opemMobileMenuSlice";

export default function Header() {
  const pathName = usePathname();
  const dispatch = useDispatch<dispatchType>();

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
            href="/training"
            className="text-white Hero text-sm hover:text-gray-300 transition-colors duration-500"
          >
            Training
          </Link>
          {/* <Link
            href="#ratecard"
            className="text-white Hero text-sm hover:text-white/80 transition-colors"
          >
            Products
          </Link> */}
          <Link
            href="/recruitment"
            className="text-white Hero text-sm hover:text-gray-300 transition-colors duration-500"
          >
            Recruitment
          </Link>
          <Link
            href="/team-bonding"
            className="text-white Hero text-sm hover:text-gray-300 transition-colors duration-500"
          >
            Team Bonding
          </Link>
          <Link
            href="/about"
            className="text-white Hero text-sm hover:text-gray-300 transition-colors duration-500"
          >
            About
          </Link>
        </nav>

        <aside className="flex justify-between items-center gap-x-2">
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
          <Button
            onClick={() => dispatch(openMobileMenu())}
            className="md:hidden bg-white text-black hover:text-primary hover:bg-gray-300"
          >
            <Menu />
          </Button>
        </aside>
        {/* <Link href="/blog">
          <Button className="bg-primary  text-white Hero rounded-full px-6 text-sm cursor-pointer hover:bg-white hover:text-primary transition duration-300 ">
            Blog
          </Button>
        </Link> */}
      </div>
    </header>
  );
}
