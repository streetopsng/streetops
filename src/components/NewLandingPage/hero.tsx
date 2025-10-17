"use client"
import type React from "react"
import { useState } from "react"
import ImageGallery from "./image-gallery"
export default function Hero() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Email submitted:", email)
    // You can add your form submission logic here (e.g., API call)
    setEmail("")
  }

  return (
    <>
   <section
  className="flex  flex-col items-center justify-center p-6 md:flex-row md:p-12 lg:p-24 md:mt-[-130px] sm:mt-[-90px]"
>
  <div className="w-full text-center md:w-4/5 md:pr-12 md:text-left">
    <h1
      className=" text-5xl tracking-tighter Hero font-bold  text-red-600 md:text-6xl"
    >
      THE BACKBONE FOR
      <br />
     YOUR GRIND.
    </h1>
  </div>

  <div
    className="mt-12 w-full max-w-md flex-col items-center text-center md:mt-0 md:w-2/5 md:items-start md:text-left sm:mt-2"
  >
    <p className=" max-w-2xl two text-base  text-muted-foreground text-[#525151] md:text-sm">
      From sales and inventory to AI-powered strategy,<br /> StreetOps handles the
      backend so you can focus on <br /> building your legacy.
    </p>

    <form onSubmit={handleSubmit} className="flex w-full flex-col items-center pt-2 md:pt-6 sm:mt-4">
      <div className="flex w-full flex-col gap-3 sm:flex-row">
        
        <div className="relative flex-1">
          <div
            className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4"
          >
            <svg
              className="h-5 w-5 text-[#525151]"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>
          </div>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-full  bg-gray-100 py-3 pl-12 pr-6 text-foreground placeholder:text-[#525151] text-sm transition-shadow focus:outline-none focus:ring-2 focus:ring-red-600"
            required
          />
        </div>

        <button
          type="submit"
          className="whitespace-nowrap rounded-full bg-red-600 px-7 py-3 font-semibold text-white shadow-lg  transition-colors hover:bg-red-700 "
        >
          Join waitlist
        </button>

      </div>
    </form>
  </div>
</section>
    {/* <section >
    <ImageGallery/>
    </section> */}
</>
  )
}