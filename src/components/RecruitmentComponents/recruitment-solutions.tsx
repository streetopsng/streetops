import React from "react";
import { CircleCheck } from "lucide-react";

const recruitmentSolutionsData = [
  {
    id: 1,
    title: "Fast Hire",
    desc: "Quick turnaround for urgent positions",
    // lucide icon suggestion: Zap
    icon: "/new-assets/flash.svg",
    points: [
      "Candidate securing within 48 hours",
      "Pre-screened shortlist of 5-8 candidates",
      "Culture-fit assessment included",
      "Behavioural science evaluation",
      "30-day replacement guarantee",
    ],
  },
  {
    id: 2,
    title: "Graduate Talent Hunt",
    desc: "Fresh talent for entry-level roles",
    // lucide icon suggestion: GraduationCap
    icon: "/new-assets/graduate.svg",
    points: [
      "Campus recruitment campaigns",
      "Graduate assessment centers",
      "Aptitude and skills testing",
      "Culture alignment screening",
      "Onboarding support materials",
    ],
  },
  {
    id: 3,
    title: "Volume Recruitment",
    desc: "Scale your team efficiently",

    icon: "/new-assets/volume.svg",
    points: [
      "Bulk hiring for 10+ positions",
      "Dedicated recruitment coordinator",
      "Multi-channel sourcing strategy",
      "Group assessment sessions",
      "Streamlined interview process",
    ],
  },
  {
    id: 4,
    title: "Executive Search",
    desc: "Scale your team efficiently",

    icon: "/new-assets/executive.svg",
    points: [
      "Confidential headhunting services",
      "Executive-level candidate mapping",
      "In-depth leadership assessment",
      "Psychometric profiling",
      "90-day performance guarantee",
    ],
  },
  {
    id: 5,
    title: "Specialist / Technical",
    desc: "Expert talent for niche roles",
    icon: "/new-assets/technical.svg",
    points: [
      "Technical skills verification",
      "Industry-specific candidate network",
      "Competence-based interviews",
      "Portfolio and project review",
      "Market salary benchmarking",
    ],
  },
];

const RecruitmentSolutions = () => {
  return (
    <section className="bg-white py-12  font-sans lg:px-20 md:px-20 px-4">
      <img src="dash.png" alt="" className="pb-10" />
      <div className="max-w-4xl mx-auto text-center mb-10">
        <span className="uppercase tracking-widest bizmo-font text-[9px] font-bold bg-[#FEEEE3] text-[#EB5819] px-2 py-0.5 rounded-full">
          PRICING
        </span>
        <h2 className="text-2xl md:text-4xl font-bold bizmo-font text-thirdPrimary my-2 leading-tight">
          <span className="font-serif">5</span> Recruitment Solutions For Every
          Hiring Need
        </h2>
        <p className="text-gray-500 max-w-lg mx-auto text-sm leading-relaxed">
          Every package includes culture fit assessment and behavioural science.
        </p>
        <p className="opacity-80 text-sm italic py-4">
          All pricing customized based on your needs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
        {recruitmentSolutionsData.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-2xl hover:border hover:border-secondPrimary  rounded-3xl p-6 flex flex-col items-start transition-transform hover:scale-[1.01] duration-300 border border-[#FAD9D9]/30 font-mont"
          >
            {/* Smaller Icon Circle */}
            <div className="w-12 h-12 bg-secondPrimary rounded-full flex items-center justify-center mb-4 p-2">
              <img src={item.icon} alt="icon" />
            </div>
            <h1 className="font-semibold text-lg">{item.title}</h1>
            <p className="py-2 opacity-80">{item.desc}</p>

            <aside className="flex flex-col gap-y-2 py-2 opacity-80">
              {item.points.map((point, index) => {
                return (
                  <div key={index} className="flex items-center gap-x-2">
                    <span>
                      <CircleCheck className="text-secondPrimary" />
                    </span>{" "}
                    <p>{point}</p>
                  </div>
                );
              })}
            </aside>

            <button className="w-full py-3 text-white rounded-full bg-secondPrimary my-2">
              Get A Quote
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecruitmentSolutions;
