"use client"

import Image from "next/image"

export default function ClientLogos() {
  const logos = [
    { id: 1, name: "Slack", initials: "SLACK" },
    { id: 2, name: "TED", initials: "TED" },
    { id: 3, name: "CNN", initials: "CNN" },
    { id: 4, name: "Visa", initials: "VISA" },
    { id: 5, name: "GitHub", initials: "GitHub" },
    { id: 6, name: "LADSPA", initials: "LADSPA" },
  ]
  const trustedLogo = [
    {
      id:1,
      src:"/trusted-logo-one.png"
    },
    {
      id:2,
      src:"/trusted-logo-two.png"
    },
    {
      id:3,
      src:"/trusted-logo-three.png"
    },
    {
      id:4,
      src:"/trusted-logo-four.png"
    },
  ]


  return (
    <section className="py-16 md:py-24 px-6 ">

<div className="overflow-hidden py-2">
  <div className="flex justify-between  animate-marquee lg:space-x-64 md:space-x-32 space-x-16">
    {[...trustedLogo,...trustedLogo,...trustedLogo,].map((item,index)=>{
      
      return <div className="relative min-w-[40px] min-h-[40px] overflow-hidden rounded-full ">
        {/* <img src={item.src} alt={item.id.toString()} /> */}
        <Image src={item.src}
         alt={item.id.toString()}
         className="w-full h-full absolute inset-0 object-contain"
         fill />
       </div>
    })}
  </div>
    </div>


      {/* <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
        {logos.map((logo) => (
          <div
            key={logo.id}
            className="text-gray-600 text-lg md:text-xl font-semibold opacity-60 hover:opacity-100 transition-opacity"
          >
            {logo.initials}
          </div>
        ))}
      </div> */}
    </section>
  )
}
