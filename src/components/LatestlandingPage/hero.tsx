"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Hero() {
  const [name, setName] = useState("")

  return (
    <section className="relative w-screen left-1/2 -translate-x-1/2 min-h-[700px] md:min-h-[800px] bg-gradient-to-b from-[#FA2120] to-[#941413] pt-24 pb-0 overflow-hidden">
      {/* Background city pattern - red tinted city buildings */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url('/bric.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      />

      {/* Main Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-serif leading-tight">
          Social Productivity For 
          <br />
          All Teams
        </h1>

        <p className="text-white/90 text-lg mb-8 max-w-xl mx-auto">
          Personalized energy that creates energy,
          <br />
          connection, and productivity
        </p>

        {/* Input Field Area */}
        <div className="flex items-center justify-center max-w-md mx-auto">
          <div className="flex w-full bg-white/20 backdrop-blur-sm rounded-full p-1">
            <Input
              type="text"
              placeholder="Enter full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-transparent border-none text-white placeholder:text-white/70 focus-visible:ring-0 focus-visible:ring-offset-0 flex-1 px-4"
            />
            <Button className="bg-[#2d1f1f] hover:bg-[#3d2f2f] text-white rounded-full px-6 text-sm">
              Join waitlist
            </Button>
          </div>
        </div>

        {/* Bottom Image */}
        <div className="flex justify-center w-full">
          <img 
            src="/people.png" 
            alt="People collaboration" 
            className="mt-20 max-w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  )
}