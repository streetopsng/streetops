"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import SplitText from "gsap/src/SplitText";
import { motion } from "framer-motion";
gsap.registerPlugin(SplitText);
export default function Hero() {
  const [name, setName] = useState("");
  const gsapCtx = useRef<gsap.Context | null>(null);

  useEffect(() => {
    gsapCtx.current = gsap.context(() => {
      const split = new SplitText(".hero-text", {
        type: "words",
        wordsClass: "Hero",
      });

      gsap.from(split.words, {
        duration: 2.5,
        autoAlpha: 0,
        yPercent: "random([-100,100])",
        stagger: {
          amount: 1,
          from: "random",
        },
        ease: "power3.out",
      });
    });

    return () => gsapCtx.current?.revert();
  }, []);

  useEffect(() => {
    gsapCtx.current = gsap.context(() => {});
  }, []);
  return (
    <section className="flex flex-col md:justify-between justify-end min-h-[90vh]  pt-10 max-w-4xl mx-auto text-center px-6  ">
      {/* Main Content Container */}

      <aside className="">
        <h1 className="text-4xl Hero hero-text md:text-6xl lg:text-7xl font-bold  text-white mb-5  leading-[1.15] ">
          Productive Teams
          <br />
          Achieving Business Goals
        </h1>

        <div className="overflow-y-hidden ">
          <motion.p
            // initial={{ opacity: 0, y: 100 }}
            // whileInView={{ opacity: 1, y: 0 }}
            // transition={{ duration: 2, ease: "easeIn" }}
            // viewport={{ once: true }}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, ease: "easeOut", delay: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-white/90 text-lg mb-8 max-w-xl mx-auto leading-relaxed  z-10"
          >
            Transform your team's productivity through culturally aligned
            trainings that honour Nigerian work values and drives results.
          </motion.p>
        </div>
      </aside>
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
    </section>
  );
}
