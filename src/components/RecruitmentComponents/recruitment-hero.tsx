"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import SplitText from "gsap/src/SplitText";
import { motion } from "framer-motion";
gsap.registerPlugin(SplitText);

export default function RecruitmentHero() {
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
        <h1 className="text-4xl Hero hero-text md:text-6xl lg:text-7xl font-bold  text-white mb-3  leading-[1.15] ">
          We Don't Just Fill Roles.
          <br />
          We Build Productive Teams.
        </h1>

        <div className="overflow-y-hidden ">
          <motion.p
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, ease: "easeOut", delay: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-white/90 text-lg mb-4 max-w-xl mx-auto leading-relaxed  z-10"
          >
            Behavioural science-based recruitment for Nigerian businesses. We
            match talent to culture, not just skills to job description.
          </motion.p>
        </div>
      </aside>

      {/* Bottom Image */}
      <div className="flex justify-center w-full">
        <img
          src="/new-assets/recruitment-hero-image.png"
          alt="People collaboration"
          className="md:w-[50%] w-[90%] h-75 object-contain select-none"
        />
      </div>
    </section>
  );
}
