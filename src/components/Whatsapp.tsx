"use client";

import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";


const PHONE   = "2347052043453";   
const MESSAGE = "text Paige"; 

const href    = `https://wa.me/${PHONE}?text=${encodeURIComponent(MESSAGE)}`;

const WhatsApp = ()=> {
  return (
    <Link
      href={href}
      target="_blank"
    //   aria-label="Chat on WhatsApp"
      className={`fixed bottom-4 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg  hover:bg-green-400  `}
    >
      <FaWhatsapp className="h-7 w-7" />
    </Link>
  );
}

export default WhatsApp