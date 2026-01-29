"use client";
import React from "react";
import { Button } from "../ui/button";
export type ExperienceMode = "onsite" | "remote" | "outdoor";

export interface TeamPackage {
  id: number;
  title: string;
  icon: string;
  sizeRange: string;
  desc: string;
  teamSize: string;
  whatYouGet: string[];
  modes: ExperienceMode[];
  bestFor: string;
  cta: string;
}

export const teamPackages: TeamPackage[] = [
  {
    id: 1,
    title: "Starter Squad",
    icon: "/new-assets/rocket.svg",
    sizeRange: "5 - 20",
    desc: "Intimate, personalized bonding",
    teamSize: "20",
    whatYouGet: [
      "Customized icebreakers and team challenges",
      "Flexible scheduling with personal attention",
      "Interactive workshops tailored to your goals",
      "Post-event feedback and engagement reports",
    ],
    modes: ["onsite", "remote", "outdoor"],
    bestFor: "Start-ups, small departments, or close-knit teams ",
    cta: "Explore Package",
  },
  {
    id: 2,
    title: "Power Team",
    icon: "/new-assets/volume.svg",
    teamSize: "20 - 40",
    sizeRange: "21 - 50",
    desc: "Structured activities with breakouts",
    whatYouGet: [
      "Multi-track activities with breakout sessions",
      "Professional facilitation and coordination",
      "Team-building games with competitive elements",
      "Comprehensive analytics and team insights",
    ],
    modes: ["onsite", "remote", "outdoor"],
    bestFor: "Growing companies and mid-size teams ",
    cta: "Explore Package",
  },
  {
    id: 3,
    title: "Full Force",
    icon: "/new-assets/customer-service.svg",
    sizeRange: "51+",
    teamSize: "40+",
    desc: "Large-scale event coordination",
    whatYouGet: [
      "Enterprise-level event planning and logistics",
      "Multiple facilitators and support staff",
      "Scalable activities for large groups",
      "Advanced tech integration and live dashboards",
    ],
    modes: ["onsite", "remote", "outdoor"],
    bestFor: "Large organizations and corporations ",
    cta: "Explore Package",
  },
];

const DesignedForTeamSize = () => {
  return (
    <section className="bg-[#FFF9F9] py-12  font-sans lg:px-20 md:px-20 px-4 text-[#333333]">
      <img src="dash.png" alt="" className="pb-10" />
      <div className="max-w-4xl mx-auto text-center mb-10">
        <h2 className="text-2xl md:text-2xl lg:text-4xl font-bold bizmo-font text-thirdPrimary my-2 leading-tight">
          Designed For Your Team Size
        </h2>
        <p className="text-gray-500 max-w-lg mx-auto text-sm leading-relaxed">
          Tailored experiences that scale with your organization.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
        {teamPackages.map((item, index) => (
          <div
            key={index}
            className="p-4 bg-white border-lightPink/50 border rounded-3xl "
          >
            <aside className="w-full flex justify-between">
              <div className="w-12 h-12 bg-[#FD8D8C] rounded-full flex items-center justify-center mb-4 p-2 ">
                <img src={item.icon} alt="icon" />
              </div>
              <div className="flex flex-col items-center">
                <span className="font-medium text-sm"> Team Size</span>
                <span className="text-[#FD8D8C] font-bold text-lg">
                  {item.teamSize}
                </span>
              </div>
            </aside>

            <header className="flex flex-col gap-y-2 pb-2 border-b border-b-gray-300">
              <h1 className="font-semibold text-lg">{item.title}</h1>
              <p className="italic">{item.desc}</p>
            </header>
            {/* what you get */}
            <section>
              <h1 className="font-semibold py-2">WHAT YOU GET</h1>
              <ul className="pl-4 list-disc flex flex-col gap-y-2">
                {item.whatYouGet.map((subItem, index) => {
                  return <li key={subItem}>{subItem}</li>;
                })}
              </ul>
            </section>
            {/* buttons */}
            <section className="flex gap-x-2 my-2">
              {item.modes.map((modeItem) => {
                return (
                  <Button
                    key={modeItem}
                    className={`rounded-full border border-gray-300 shadow-xl font-semibold capitalize ${
                      modeItem == "onsite"
                        ? "text-[#24D80C]"
                        : modeItem == "remote"
                          ? "text-[#0A66C2]"
                          : "text-[#F59E0B]"
                    }`}
                    variant={"outline"}
                  >
                    {modeItem}
                  </Button>
                );
              })}
            </section>

            {/* best for */}

            <section>
              <h1 className="font-semibold py-2">BEST FOR</h1>
              <p className="text-sm">{item.bestFor}</p>
            </section>

            <div className="w-full flex items-center justify-center pt-4">
              <Button
                onClick={() => {
                  const phone = "2347026782510";
                  const message = encodeURIComponent(`${item.title}`);

                  window.open(
                    `https://wa.me/${phone}?text=${message}`,
                    "_blank",
                  );
                }}
                className="bg-lightPink cursor-pointer hover:bg-lightPink rounded-full w-full"
              >
                Get A Quote
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DesignedForTeamSize;
