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
    value: "Lagos, Nigeria",
    icon: "/new-assets/visit-us.svg",
  },
];

const ReadyToBuild = () => {
  return (
    <section className="py-16  px-4">
      <div className="md:w-[90%] w-full h-full  mx-auto ">
        <div
          className="relative rounded-3xl overflow-hidden h-full w-full py-12"
          style={{
            backgroundImage: `url('/new-assets/build.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h1 className="font-bold text-4xl text-white text-center my-6">
            Ready To Build Real Teams?
          </h1>
          <section className="flex flex-wrap justify-between lg:px-16 md:px-8 px-4   gap-y-4 ">
            {contactInfo.map((item, index) => {
              return (
                <a
                  href={item.link}
                  rel="noopener noreferrer"
                  target="_blank"
                  key={index}
                  className="bg-white shadow-2xl md:w-[30%] w-full rounded-2xl flex flex-col items-center justify-center py-4"
                >
                  <div className="w-12 h-12 bg-[#FD8D8C] rounded-full flex items-center justify-center mb-4 p-2">
                    <img src={item.icon} alt="icon" />
                  </div>
                  <h1 className="font-semibold">{item.title}</h1>
                  <p className="text-sm">{item.value}</p>
                </a>
              );
            })}
          </section>

          <aside className="flex md:justify-around md:flex-row flex-col md:items-center   justify-center text-white font-medium my-4">
            <p className="flex items-center p-2 gap-x-2 ">
              <span className="bg-white p-1 rounded-full">
                <Clock className="text-red-500" />
              </span>{" "}
              <span>We respond within 24 hours</span>
            </p>
            <a
              href="https://wa.me/2348012345678"
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
