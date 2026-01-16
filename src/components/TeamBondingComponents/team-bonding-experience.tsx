import React from "react";
import { Button } from "../ui/button";

export const teamBondingExperienceData = [
  {
    title: "Pre-Event Culture Assessment",
    description: "We understand your team before we design your experience.",
    icon: "/new-assets/document-validation.svg",
  },
  {
    title: "Behavioural Science Design",
    description:
      "Activities built for real connection, not just entertainment.",
    icon: "/new-assets/ai-brain.svg",
  },
  {
    title: "Professional Facilitation",
    description: "Expert coordinators and game masters who keep energy high.",
    icon: "/new-assets/user-star.svg",
  },
  {
    title: "Productivity-Focused Activities",
    description:
      "Trust-building, collaboration, communication - not just games.",
    icon: "/new-assets/rocket.svg",
  },
  {
    title: "Post-Event Insights Report",
    description: "We show you what we learned about your team dynamics.",
    icon: "/new-assets/chart-up.svg",
  },
  {
    title: "Integration Support",
    description:
      "We help you maintain the energy and momentum after the event.",
    icon: "/new-assets/customer-service.svg",
  },
];

const TeamBondingExperience = () => {
  return (
    <section className="bg-white py-12  font-sans lg:px-20 md:px-20 px-4">
      <img src="dash.png" alt="" className="pb-10" />
      <div className="max-w-4xl mx-auto text-center mb-10">
        <h2 className="text-2xl md:text-[50px] font-bold bizmo-font text-thirdPrimary my-2 leading-tight">
          Every StreetOps Team Bonding Experience Includes:
        </h2>
        <p className="text-gray-500 max-w-lg mx-auto text-sm leading-relaxed">
          A comprehensive approach to building stronger, more productive teams
          through science-backed methodology.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {teamBondingExperienceData.map((item, index) => (
          <div
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
          </div>
        ))}
      </div>

      <div className=" lg:mt-8 mt-4">
        <p className="text-center my-2">
          Ready to transform your team dynamics?
        </p>
        <div className="flex justify-center">
          <Button className="bg-thirdPrimary rounded-full lg:w-2/5 md:w2/5 w-4/5 py-2">
            Schedule a Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TeamBondingExperience;
