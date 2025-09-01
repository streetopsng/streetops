"use client";
import React from "react";
import Link from "next/link";
import { FaTwitter, FaLinkedin, FaFacebookF } from "react-icons/fa";
import AnimatedParticles from "../AnimatedParticles";


const linkClass = "hover:text-grayOne"
const Footer = () => {
  return (
    <footer className=" text-grayOne mt-2 py-4 relative bg-bgcolorTwo">
      <AnimatedParticles value={30}/>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h2 className="text-xl font-semibold text-primary mb-3">About Us</h2>
            <p className="text-sm text-grayTwo ">
              We drive the future of work by integrating people, processes, and performance. Our solutions empower organizations to adapt, scale, and succeed in a dynamic market.
            </p>
          </div>

          {/* Help Section */}
          <div>
            <h2 className="text-xl font-semibold text-primary mb-3">Questions</h2>
            <ul className="space-y-2 text-sm text-grayTwo">
              <li>
                <Link href="/help"  className={linkClass}>Help</Link>
              </li>
              <li>
                <Link href="/faq"  className={linkClass}>FAQs</Link>
              </li>
            </ul>
          </div>

          {/* Team/Services Links */}
          <div>
            <h2 className="text-xl font-semibold text-primary mb-3">Explore</h2>
            <ul className="space-y-2 text-sm text-grayTwo ">
              <li>
                <Link href="/" className={linkClass}>Team</Link>
              </li>
              <li>
                <Link href="/" className={linkClass}>Services</Link>
              </li>
              <li>
                <Link href="/" className={linkClass}>Contact</Link>
              </li>
              <li>
                <Link href="/" className={linkClass}>Blog</Link>
              </li>
            </ul>
          </div>

          {/* Social Media & Copyright */}
          <div>
            <h2 className="text-xl font-semibold text-primary mb-3">Connect With Us</h2>
            <div className="flex space-x-4 mb-4 ">
              <Link href="https://twitter.com" className={linkClass} target="_blank">
                <FaTwitter className="text-lg text-grayTwo hover:text-grayOne" />
              </Link>
              <Link href="https://www.linkedin.com/company/paigeautos/" className={linkClass} target="_blank" >
                <FaLinkedin className="text-lg text-grayTwo hover:text-grayOne" />
              </Link>
              <Link href="https://facebook.com" className={linkClass} target="_blank" >
                <FaFacebookF className="hover:text-grayOne text-grayTwo text-lg" />
              </Link>
            </div>
            
          </div>
        </div>
      </div>
      {/* copyright */}
      <div
      className="flex items-center justify-center mt-6"
      ><p className="text-sm">
              © {new Date().getFullYear()} Paige. All rights reserved.
            </p></div>
    </footer>
  );
};

export default Footer;
