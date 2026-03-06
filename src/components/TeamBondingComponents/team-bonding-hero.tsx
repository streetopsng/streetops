"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import SplitText from "gsap/src/SplitText";
import { motion } from "framer-motion";
gsap.registerPlugin(SplitText);

export default function TeamBondingHero() {
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
    gsapCtx.current = gsap.context(() => { });
  }, []);
  return (
    <section className="flex flex-col md:flex-row items-center justify-between min-h-[90vh] pt-10 max-w-6xl mx-auto px-6 gap-8">
      {/* Left Content Container */}
      <aside className="md:w-1/2 w-full text-left">
        <h1 className="text-4xl Hero hero-text md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-[1.15]">
          Build Teams That
          <br />
          Work Together
        </h1>

        <div className="overflow-y-hidden">
          <motion.p
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, ease: "easeOut", delay: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-white/90 md:text-xl text-lg mb-4 leading-relaxed z-10"
          >
            Team bonding designed for productivity. We create{" "}
            <span className="font-bold">
              {" "}
              connection, strengthen culture, and boost performance
            </span>{" "}
            - not just fun activities that fade by Monday.
          </motion.p>
        </div>
      </aside>

      {/* Right Image */}
      <div className="md:w-1/2 w-full flex justify-center">
        <img
          src="/new-assets/team-bonding-hero.png"
          alt="People collaboration"
          className="w-full h-auto object-contain select-none"
        />
      </div>
    </section>
  );
}
