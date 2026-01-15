"use client";
import { useWindowWidth } from "@/custom-hooks/useScreenWidth";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const features = [
  {
    title: "The Platform",
    description:
      "Tracks engagement, connection, and contribution. Generates personalized onboarding journeys.",
    icon: "/new-assets/vector.svg",
  },
  {
    title: "The services",
    description:
      "Expert vectors facilitate onboarding, training, and team bonding. Cluture transfer, not information transfer.",
    icon: "/new-assets/vector.svg",
  },
  {
    title: "The System",
    description:
      "Full lifecycle: Staﬀ Mapping 'n Recruitment 'n Onboarding 'n Team Bonding.",
    icon: "/new-assets/vector.svg",
  },
];
export default function Approach() {
  const width: number = useWindowWidth();
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    setIsMobile(width <= 650);
  }, []);

  return (
    <section id="about" className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto  overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 mb-12">
          <motion.div
            variants={{
              // hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 0 },
            }}
            initial={{ opacity: 0, x: -100 }}
            whileInView="visible"
            transition={{ duration: 2, ease: "easeIn", delay: 0.3 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div>
              <p className=" font-medium md:text-2xl text-md  gradient-text-one ">
                About us
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-thirdPrimary tracking-wide Hero">
                OUR APPROACH
              </h2>
            </div>
          </motion.div>
          <div className="flex items-center gap-3 max-w-md">
            <motion.img
              variants={{
                // hidden: { opacity: 0, height: 0 },
                visible: { opacity: 1, height: "max-content" },
              }}
              initial={{ opacity: 0, height: 0 }}
              whileInView="visible"
              transition={{ duration: 2, ease: "easeInOut", delay: 0.3 }}
              viewport={{ once: true, amount: 0.3 }}
              src="/new-assets/about-us-frame.svg"
              alt="about us frame"
            />
            <motion.p
              variants={{
                // hidden: { opacity: 0, x: 100 },
                visible: { opacity: 1, x: 0 },
              }}
              initial={{ opacity: 0, x: 100 }}
              whileInView="visible"
              transition={{ duration: 2, ease: "easeInOut", delay: 0.3 }}
              viewport={{ once: true, amount: 0.3 }}
              className=" text-sm  Hero leading-6"
            >
              Our model delivers holistic team performance by combining
              behavioural technology, human delivery, and proven methodology.
            </motion.p>
          </div>
        </div>

        <section className="relative py-12 bg-white overflow-hidden">
          {/* Reduced height of patterns */}
          <div className="absolute top-0 left-0 w-full h-16 opacity-10 pointer-events-none bg-[url('/pattern.png')] bg-repeat-x bg-contain" />

          <div className="max-w-6xl mx-auto md:px-6 px-2 ">
            {/* Scaled Down Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {features.map((feature, index) => (
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
                  className="bg-[#FFF8F7] rounded-3xl p-6 flex flex-col items-center text-center border border-[#FAD9D9]/30"
                >
                  {/* Smaller Icon Circle */}
                  <div className="w-12 h-12 bg-[#FAD9D9] rounded-full flex items-center justify-center mb-4">
                    <img src={feature.icon} alt="vector" />
                  </div>

                  <h3 className="text-lg font-bold text-[#433838] Hero mb-2">
                    {feature.title}
                  </h3>

                  <p className="text-[#2d1f1f]/70 leading-relaxed text-sm">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* <div className="absolute bottom-0 left-0 w-full h-16 opacity-10 pointer-events-none bg-[url('/pattern.png')] bg-repeat-x bg-contain rotate-180" />
          <img src="dash.png" alt="" /> */}
        </section>

        {/* check below this compoent for the component */}
        {/* <SectionSection /> */}
      </div>
    </section>
  );
}

const SectionSection = () => {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      <div className="p-8 rounded-2xl text-center bg-[#fff5f5] border border-[#ffe5e5]">
        <div className="mx-auto mb-4 text-[#ff6b6b]">
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="mx-auto"
          >
            <path d="M24 8L8 16v8c0 11.1 6.8 21.5 16 24 9.2-2.5 16-12.9 16-24v-8L24 8z" />
            <path d="M16 24l6 6 10-12" />
          </svg>
        </div>
        <h3 className="text-lg Hero font-semibold mb-3 text-[#2d1f1f]">
          The Platform
        </h3>
        <p className="text-sm text-[#2d1f1f]/70 leading-relaxed">
          Personalizes team journeys, tracks engagement, build relationships and
          boost productivity
        </p>
      </div>

      {/* The services - red card */}
      <div className="p-8 rounded-2xl text-center bg-[#FA2120] border border-[#c41e3a]">
        <div className="mx-auto mb-4 text-white">
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="mx-auto"
          >
            <path d="M24 8L8 16v8c0 11.1 6.8 21.5 16 24 9.2-2.5 16-12.9 16-24v-8L24 8z" />
            <path d="M16 24l6 6 10-12" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold mb-3 Hero text-white">
          The services
        </h3>
        <p className="text-sm text-white/90 leading-relaxed">
          Expert vectors facilitate onboarding, training, and team bonding.
          Culture transfer, not information transfer.
        </p>
      </div>

      <div className="p-8 rounded-2xl text-center Hero bg-[#fff5f5] border border-[#ffe5e5]">
        <div className="mx-auto mb-4 text-[#ff6b6b]">
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="mx-auto"
          >
            <path d="M24 8L8 16v8c0 11.1 6.8 21.5 16 24 9.2-2.5 16-12.9 16-24v-8L24 8z" />
            <path d="M16 24l6 6 10-12" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold mb-3 text-[#2d1f1f]">
          The System
        </h3>
        <p className="text-sm text-[#2d1f1f]/70 leading-relaxed">
          Full lifecycle: Staff Mapping 'n Recruitment 'n Onboarding 'n Team
          Bonding.
        </p>
      </div>
    </div>
  );
};
