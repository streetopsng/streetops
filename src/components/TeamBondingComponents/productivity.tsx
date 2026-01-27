"use client";
import React, { useEffect, useState } from "react";

import { useWindowWidth } from "@/custom-hooks/useScreenWidth";
import { motion } from "framer-motion";
const recruitmentData = [
  {
    title: "Trust = Speed",
    description:
      "Teams that trust each other work faster, with less friction and better collaboration..",
    icon: "/new-assets/healthcare.svg",
  },
  {
    title: "Culture + Retention",
    description: "Strong bonds reduce turnover and keep teams productive.",
    icon: "/new-assets/volume.svg",
  },
  {
    title: "Energy = Output ",
    description: "Positive team energy drives momentum and performance.",
    icon: "/new-assets/flash.svg",
  },
];

const Productivity = () => {
  const width: number = useWindowWidth();
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    setIsMobile(width <= 650);
  }, []);
  return (
    <section className="bg-white py-12  font-sans lg:px-20 md:px-20 px-4">
      <img src="dash.png" alt="" className="pb-10" />
      <div className="max-w-4xl mx-auto text-center mb-10">
        <span className="uppercase tracking-widest bizmo-font text-[9px] font-bold bg-[#EFF6FF] text-[#2578F0] px-3 py-1 rounded-full">
          PROFESSIONAL DEVELOPMENT
        </span>
        <h2 className="text-2xl md:text-2xl lg:text-4xl font-bold bizmo-font text-thirdPrimary my-2 leading-tight">
          Why Productivity Starts With Connection
        </h2>
        <p className="text-gray-500 max-w-lg mx-auto text-sm leading-relaxed">
          Our unique three-step approach ensures the perfect match between
          talent and culture.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {recruitmentData.map((item, index) => (
          <motion.div
            variants={{
              visible: { opacity: 1, x: 0, y: 0 },
            }}
            initial={{
              opacity: 0,
              x: isMobile ? -60 : 0,
              y:
                !isMobile && index % 2 == 0
                  ? -60
                  : !isMobile && index % 2 !== 0
                    ? 60
                    : 0,
            }}
            whileInView="visible"
            transition={{
              duration: 1.5,
              ease: "easeInOut",
              delay: isMobile ? 0.3 : index + 0.5,
            }}
            viewport={{ once: true, amount: 0.3 }}
            key={index}
            className="bg-[#FFF8F7] rounded-3xl p-6 flex flex-col items-start transition-transform hover:scale-[1.01] duration-300 border border-[#FAD9D9]/30"
          >
            {/* Smaller Icon Circle */}
            <div className="w-12 h-12 bg-[#FD8D8C] rounded-full flex items-center justify-center mb-4 p-2">
              <img src={item.icon} alt="icon" />
            </div>

            <h3
              className={`${
                item.title.length > 25 ? "text-md " : "text-lg"
              }font-semibold text-[#433838] Hero mb-2`}
            >
              {item.title}
            </h3>

            <p className="text-[#2d1f1f]/70 leading-relaxed text-sm">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Productivity;
