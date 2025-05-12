"use client"
import Image from "next/image";
import Link from "next/link";
import { IoLogoNpm } from "react-icons/io";

const desktopLinkClass = "hover:text-primary border-b-[3px] border-transparent  hover:border-primary duration-500  w-[20%] transition-all py-2  text-center"
export const Header = () => {
  return (
    <div className="flex justify-between items-center py-2 px-4">
        <section>
        <div className="relative w-[50px] h-[50px]">
        <Image alt="paige-logo" className="absolute top-0 left-0" src={"/paige-logo.jpg"} fill/>
        </div>
        </section>
<section className="mdlg:flex hidden mdlg:w-[30%] justify-between">
    <Link className={`${desktopLinkClass}`} href={"/"}>Home</Link>
    <Link className={`${desktopLinkClass}`} href={"/"}>About</Link>
    <Link className={`${desktopLinkClass}`} href={"/"}>Expertise</Link>
</section>
<section>
<button className="bg-primary text-wht rounded-md py-[7px] px-4 cursor-pointer hover:bg-wht hover:text-primary border-[2px] transition-all duration-500">Find a Job</button>
</section>
    </div>
  )
}
