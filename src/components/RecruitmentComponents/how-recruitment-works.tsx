import { Target } from "lucide-react";
import React from "react";
const recruitmentData = [
  {
    title: "Discovery & Mapping",
    description:
      "Understanding the client's business, culture, team dynamics, and productivity definition before sourcing talent.",
    icon: "/new-assets/search-icon.svg",
  },
  {
    title: "Behavioural Science Assessment",
    description:
      "Assess candidates for values alignment, team chemistry, and productivity potential, not just technical skills.",
    icon: "/new-assets/ai-brain.svg",
  },
  {
    title: "Integration Support",
    description:
      "Post-placement onboarding and culture integration to ensure long-term success.",
    icon: "/new-assets/puzzle.svg",
  },
];

const HowRecruitmentWorks = () => {
  return (
    <section className="bg-white py-12  font-sans lg:px-20 md:px-20 px-4">
      <img src="dash.png" alt="" className="pb-10" />
      <div className="max-w-4xl mx-auto text-center mb-10">
        <span className="uppercase tracking-widest bizmo-font text-[9px] font-bold bg-[#EFF6FF] text-[#2578F0] px-3 py-1 rounded-full">
          PROFESSIONAL DEVELOPMENT
        </span>
        <h2 className="text-2xl md:text-4xl font-bold bizmo-font text-thirdPrimary my-2 leading-tight">
          How StreetOps Recruitment Works
        </h2>
        <p className="text-gray-500 max-w-lg mx-auto text-sm leading-relaxed">
          Our unique three-step approach ensures the perfect match between
          talent and culture.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {recruitmentData.map((item, index) => (
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
    </section>
  );
};

export default HowRecruitmentWorks;
