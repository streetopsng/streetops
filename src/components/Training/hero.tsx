"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Hero() {
  const [name, setName] = useState("");

  return (
    <section className="relative w-full left-1/2 -translate-x-1/2 bg-gradient-to-b from-[#FA2120] to-[#941413] pt-20 ">
      {/* Background city pattern */}
      <div
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage: `url('/bric.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      />

      {/* Main Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto text-center px-6 ">
        <h1 className="text-4xl Hero md:text-5xl lg:text-[54px] font-bold text-white mb-5 font-serif leading-[1.15]">
          Productivity training
          <br />
          built on your values
        </h1>

        <p className="text-white/90 text-base md:text-sm mb-8 max-w-xl mx-auto leading-relaxed">
          Transform your team's productivity through culturally aligned
          trainings that honour Nigerian work values and drives results.
        </p>

        {/* Input Field Area */}
        {/* <div className="flex items-center justify-center max-w-md mx-auto">
          <div className="flex w-full bg-white/20 backdrop-blur-sm rounded-full p-1.5 border border-white/20 shadow-lg">
            <Input
              type="text"
              placeholder="Enter full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-transparent border-none text-white text-base placeholder:text-white/70 focus-visible:ring-0 focus-visible:ring-offset-0 h-11 px-5"
            />
            <Button className="bg-[#2d1f1f] hover:bg-[#3d2f2f] text-white rounded-full px-7 h-11 text-sm font-medium transition-all">
              Join waitlist
            </Button>
          </div>
        </div> */}

        {/* Bottom Image */}
        <div className="flex justify-center w-full mt-16">
          <img
            src="/people.png"
            alt="People collaboration"
            className="max-w-[90%] md:max-w-full h-auto object-contain select-none"
          />
        </div>
      </div>
    </section>
  );
}
