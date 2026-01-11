"use client";
import { Target, Brain, Presentation } from "lucide-react";

const features = [
  {
    title: "Values-Aligned Learning",
    description:
      "We design learning experiences that honour your organization's unique culture and values, ensuring every session resonates authentically.",
    icon: <Target className="w-5 h-5 text-[#F28C8C]" />,
  },
  {
    title: "Behavioural Science Foundation",
    description:
      "Our programs are grounded in proven behavioural sciences principles, using evidence-based techniques that drive real change.",
    icon: <Brain className="w-5 h-5 text-[#F28C8C]" />,
  },
  {
    title: "Expert-Led Facilitation",
    description:
      "Led by seasoned facilitators who blend deep expertise with genuine human connection, creating safe spaces where participants feel empowered to learn, grow and transform.",
    icon: <Presentation className="w-5 h-5 text-[#F28C8C]" />,
  },
];

export default function TrainingSection() {
  return (
    <section className="relative py-12 bg-white overflow-hidden">
      {/* Reduced height of patterns */}
      <div className="absolute top-0 left-0 w-full h-16 opacity-10 pointer-events-none bg-[url('/pattern.png')] bg-repeat-x bg-contain" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Compact Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-thirdPrimary Hero mb-3 tracking-tight">
            Training That Sticks
          </h2>
          <p className="text-[#2d1f1f]/80 text-base max-w-xl mx-auto">
            Evidence-based learning experiences that create lasting change.
          </p>
        </div>

        {/* Scaled Down Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#FFF8F7] rounded-3xl p-6 flex flex-col items-center text-center transition-transform hover:scale-[1.01] duration-300 border border-[#FAD9D9]/30"
            >
              {/* Smaller Icon Circle */}
              <div className="w-12 h-12 bg-[#FAD9D9] rounded-full flex items-center justify-center mb-4">
                {feature.icon}
              </div>

              <h3
                className={`${
                  feature.title.length > 25 ? "text-md " : "text-lg"
                }font-semibold text-[#433838] Hero mb-2`}
              >
                {feature.title}
              </h3>

              <p className="text-[#2d1f1f]/70 leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-16 opacity-10 pointer-events-none bg-[url('/pattern.png')] bg-repeat-x bg-contain rotate-180" />
      <img src="dash.png" alt="" />
    </section>
  );
}
