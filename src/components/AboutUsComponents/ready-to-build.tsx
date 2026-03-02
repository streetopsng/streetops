import { Button } from "@react-email/components";
import { link } from "fs";
import { Clock } from "lucide-react";

import React from "react";
import { BsWhatsapp } from "react-icons/bs";
const contactInfo = [
  {
    id: 1,
    title: "Email Us",
    link: "mailto:info@streetops.ng",
    value: "info@streetops.ng",
    icon: "/new-assets/email-us.svg",
  },
  {
    id: 2,
    title: "Call Us",
    link: "tel:+2347026782510",
    value: "+234 702 6782 510",
    icon: "/new-assets/call-us.svg",
  },
  {
    id: 3,
    title: "Visit Us",
    link: "",
    value: "Mayfair Gardens, Ibeju lekki, lagos, Nigeria",
    icon: "/new-assets/visit-us.svg",
  },
];

const ReadyToBuild = () => {
  return (
    <section className="py-4  px-4 " id="ready-to-build">
      <style>{`
        .force-montserrat {
          font-family: "Montserrat", sans-serif !important;
        }
      `}</style>
      <div className="md:w-[90%] w-full h-full  mx-auto ">
        <div
          className="relative rounded-3xl overflow-hidden h-full w-full py-12"
          style={{
            backgroundImage: `url('/new-assets/build.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h1 className="font-bold text-4xl text-white text-center my-6" style={{ color: "white" }}>
            Ready to optimize your team engagement?
          </h1>
          <section className="flex flex-wrap justify-center lg:px-16 md:px-8 px-4 gap-6 mt-10">
            {contactInfo.map((item, index) => {
              return (
                <a
                  href={item.link}
                  rel="noopener noreferrer"
                  target="_blank"
                  key={index}
                  className="w-full md:w-[30%] rounded-2xl flex flex-col items-center justify-center py-6 transition-all duration-300 hover:-translate-y-1"
                  style={{
                    fontFamily: "sans-serif",
                    background: "rgba(255, 255, 255, 0.1)",
                    backdropFilter: "blur(12px)",
                    WebkitBackdropFilter: "blur(12px)",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(255, 255, 255, 0.15)";
                    e.currentTarget.style.border = "1px solid rgba(255, 255, 255, 0.4)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(255, 255, 255, 0.1)";
                    e.currentTarget.style.border = "1px solid rgba(255, 255, 255, 0.2)";
                  }}
                >
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4 p-2 shadow-inner">
                    <img src={item.icon} alt="icon" style={{ width: '20px', height: '20px', filter: 'brightness(0) invert(1)' }} />
                  </div>
                  <h1 className="font-semibold text-white" style={{ fontSize: '15px', letterSpacing: '0.02em' }}>{item.title}</h1>
                  <p className="mt-1 force-montserrat" style={{ fontSize: '14px', color: 'rgba(255,255,255,0.85)' }}>
                    {item.value}
                  </p>
                </a>
              );
            })}
          </section>

          <aside className="flex md:justify-around md:flex-row flex-col md:items-center   justify-center text-white font-medium my-4">
            <p className="flex items-center p-2 gap-x-2 ">
              <span className="bg-white p-1 rounded-full">
                <Clock className="text-red-500" />
              </span>{" "}
              <span>We respond within <span className="force-montserrat">12</span> hours</span>
            </p>
            <a
              href="https://wa.me/2347026782510"
              target="_blank"
              className="flex  items-center p-2 gap-x-2 "
            >
              <span className="bg-white p-2 rounded-full">
                <BsWhatsapp className="text-green-600" />
              </span>{" "}
              <span>Chat on WhatsApp</span>
            </a>
          </aside>
        </div>
      </div>
      <img src="dash.png" alt="" />
    </section>
  );
};

export default ReadyToBuild;
