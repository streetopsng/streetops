"use client";
import { motion } from "framer-motion";

const services = [
  // {
  //   id: "01",
  //   title: "Staff mapping",
  //   description:
  //     "Strategic role planning before hire. Know what you need and how it fits together",
  //   img: "/new-assets/staff-mapping.svg",
  // },
  {
    id: "01",
    title: "Recruitment & Onboarding",
    description:
      "Seamless talent acquisition to Integration. Ready to contribute in 30 days",
    img: "/new-assets/recruit.svg",
  },
  {
    id: "02",
    title: "People Strategy & Consulting",
    description: "Transform your people functions into a competitive advantage",
    img: "/new-assets/onboarding.svg",
  },
  {
    id: "03",
    title: "Training and Development",
    description:
      "High-engagement skills training. Collaborative learning that actually sticks. ",
    img: "/new-assets/training.svg",
  },
  {
    id: "04",
    title: "Team Bonding (Fun Street)",
    description:
      "Monthly experiences that strengthen connections and show up in productivity.",
    img: "/new-assets/bonding.svg",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-thirdPrimary Hero md:mb-6 mb-2 tracking-tight">
            The Streetops <br className="md:hidden" /> Service
          </h2>
          <p className="text-[#2d1f1f]/80 md:text-lg text-sm max-w-2xl mx-auto leading-relaxed">
            StreetOps creates solutions for building stronger, cultured, and
            connected teams.
          </p>
        </div>
        {/* Services Container */}
        <div className="relative w-full">
          {/* <SwiperSlider /> */}

          {services.map((item, index) => {
            return (
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: -100 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial={{ opacity: 0, y: -100 }}
                whileInView="visible"
                transition={{ duration: 1, ease: "easeIn" }}
                viewport={{ once: true, amount: 0.3 }}
                key={index}
                className="lg:w-4/5 md:w-[95%] w-full mx-auto rounded-lg shadow-xl mt-8 border border-red-300"
              >
                <img src="/dash.png" alt="pattern" />
                <aside className="md:w-2/5 md:pl-8 px-4  md:text-start text-center">
                  <h1 className="font-bold text-xl">{item.title}</h1>
                  <p className="md:text-md text-sm">{item.description}</p>
                </aside>
                <aside className="flex md:flex-row flex-col justify-between items-end overflow-hidden">
                  <h1 className="text-[12rem] text-primary font-medium  h-60 md:-translate-x-10 md:translate-y-12 md:block hidden">
                    {item.id}
                  </h1>
                  <img
                    src={item.img}
                    alt="img"
                    className="h-60 md:translate-x-10 md:translate-y-12"
                  />
                </aside>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
