import React from "react";
import { Button } from "../ui/button";

export type ExperienceType = "onsite" | "remote" | "outdoor";

export interface TeamExperience {
  id: number;
  type: ExperienceType;
  icon: string;
  title: string;
  subtitle: string;
  description: string;
  teamSizes: string;
  duration: string;
  bestFor: string;
  cta: string;
}
export const teamExperiences: TeamExperience[] = [
  {
    id: 1,
    type: "onsite",
    icon: "/new-assets/workplace.svg",
    title: "Team bonding at your workplace.",
    subtitle: "ONSITE",
    description:
      "We bring the experience to you for fast, effective culture boosts.",
    teamSizes: "Starter Squad (5-20), Power Team (21-50), Full Force (51+)",
    duration: "4-6 hours",
    bestFor: "Quick culture boost",
    cta: "Plan Onsite Experience",
  },
  {
    id: 2,
    type: "remote",
    icon: "/new-assets/computer-phone-sync.svg",
    title: "Virtual bonding for distributed teams.",
    subtitle: "REMOTE",
    description:
      "Interactive experiences that create real connection without Zoom fatigue.",
    teamSizes: "Starter Squad, Power Team, Full Force",
    duration: "1.5-6 hours",
    bestFor: "Remote and hybrid teams",
    cta: "Plan Remote Experience",
  },
  {
    id: 3,
    type: "outdoor",
    icon: "/new-assets/sun.svg",
    title: "Immersive experiences outside the office.",
    subtitle: "OUTDOOR",
    description: "Full-scale retreats at curated outdoor locations.",
    teamSizes: "Starter Squad, Power Team, Full Force",
    duration: "Day trips to multi-day retreats",
    bestFor: "Deep transformation and milestones",
    cta: "Plan Outdoor Experience",
  },
];

const WaysToBuild = () => {
  return (
    <section className="bg-white py-12  font-sans lg:px-20 md:px-20 px-4">
      <img src="dash.png" alt="" className="pb-10" />
      <div className="max-w-4xl mx-auto text-center mb-10">
        <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold bizmo-font text-thirdPrimary my-2 leading-tight">
          <span className="font-serif">3</span> Ways To Build Your Team
        </h2>
        <p className="text-gray-500 max-w-lg mx-auto text-sm leading-relaxed">
          Choose how you want to connect: at your office, online, or outdoors.
          Every experience is designed for your team size and goals.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
        {teamExperiences.map((item, index) => (
          <div
            key={index}
            className="bg-[#FFF9F9] shadow-2xl border-lightPink/50 rounded-3xl p-6 flex flex-col items-center justify-between gap-y-3 transition-transform hover:scale-[1.01] duration-300 border font-mont"
          >
            {/* Smaller Icon Circle */}
            <div className="w-12 h-12 bg-lightPink rounded-full flex items-center justify-center mb-4 p-2 ">
              <img src={item.icon} alt="icon" />
            </div>

            <span
              className={`${
                item.type == "onsite"
                  ? "text-[#24D80C] bg-[#E0F6DE]"
                  : item.type == "remote"
                  ? "text-[#0A66C2] bg-[#E4F2FF]"
                  : "text-[#F59E0B] bg-[#FDEFD9]"
              } font-bold px-4  rounded-full uppercase`}
            >
              {item.type}
            </span>

            <header className="text-center">
              <h1 className="text-xl font-semibold">{item.title}</h1>
              <p className="py-2">{item.description}</p>
            </header>

            <article className=" w-full bg-white rounded-2xl py-2 text-sm">
              {/* team sizes */}

              <section className="mt-2">
                <h1 className="font-semibold">Team Sizes</h1>
                <p>{item.teamSizes}</p>
              </section>
              <section className="mt-2">
                <h1 className="font-semibold">Duration</h1>
                <p>{item.duration}</p>
              </section>
              <section className="mt-2">
                <h1 className="font-semibold">Best For</h1>
                <p>{item.bestFor}</p>
              </section>
            </article>

            <div className="w-full flex items-center justify-center">
              <Button className="bg-lightPink cursor-pointer hover:bg-lightPink rounded-full w-[70%]">
                {item.cta}
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WaysToBuild;
