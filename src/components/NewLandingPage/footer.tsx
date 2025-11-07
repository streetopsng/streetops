

import Link from "next/link";
import { Linkedin, Instagram, Twitter } from "lucide-react";


const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link href={href} className="text-sm text-gray-600 hover:text-gray-900 hover:underline">
    {children}
  </Link>
);


const Logo = () => (
  <img src="red-logo.png" alt=""  className="w-50"/>
);

export function Footer() {
  return (
    <footer className="relative  bg-gray-50 pt-20 pb-10 px-6 sm:px-8 overflow-hidden md:mb-10">
      
     
      <div 
        className="absolute inset-x-0 bottom-0 z-0 flex justify-center items-end" 
        aria-hidden="true"
      >
        <span className="text-[180px] lg:text-[260px]  font-extrabold text-gray-200/50 leading-none select-none">
          StreetOps
        </span>
      </div>

      {/* Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-6 gap-12">
        
        {/* Column 1: Brand */}
        <div className="md:col-span-2">
          <Logo />
          <p className="mt-4 text-gray-600 text-sm max-w-xs Hero">
            The essential backbone that supports and strengthens your daily grind.
          </p>
          <p className="mt-8 text-xs text-gray-400 ">
            © 2025 All Rights Reserved
          </p>
        </div>

        {/* Column 2: Contact */}
        <div>
          <h4 className="font-semibold text-gray-900 mb-4 Hero">Contact us</h4>
          <FooterLink href="mailto:info@streetops.com">
            info@streetops.com
          </FooterLink>
          <h4 className="font-semibold text-gray-900 mt-6 mb-4 Hero">Follow us</h4>
          <div className="flex space-x-4">
            <Link href="#" className="text-gray-500 hover:text-gray-900">
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-gray-500 hover:text-gray-900">
              <Instagram className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-gray-500 hover:text-gray-900">
              <Twitter className="h-5 w-5" />
            </Link>
           
          </div>
        </div>

        {/* Column 3: Company */}
        <div>
          <h4 className="font-semibold text-gray-900 mb-4 Hero">Company</h4>
          <ul className="space-y-3">
            <li><FooterLink href="/about">About us</FooterLink></li>
            <li><FooterLink href="/blog">Blog</FooterLink></li>
            <li><FooterLink href="/services">Services</FooterLink></li>
          </ul>
        </div>

        {/* Column 4: Services */}
        <div>
          <h4 className="font-semibold text-gray-900 mb-4 Hero">Services</h4>
          <ul className="space-y-3">
            <li><FooterLink href="/funstreet">FunStreet</FooterLink></li>
            <li><FooterLink href="/street-build">Street Build</FooterLink></li>
            <li><FooterLink href="/ideation-corner">Ideation Corner</FooterLink></li>
          </ul>
        </div>

        {/* Column 5: Legal */}
        <div>
          <h4 className="font-semibold text-gray-900 mb-4 Hero">Legal</h4>
          <ul className="space-y-3">
            <li><FooterLink href="/privacy">Privacy Policy</FooterLink></li>
            <li><FooterLink href="/terms">Terms of Service</FooterLink></li>
          </ul>
        </div>

      </div>
    </footer>
  );
}