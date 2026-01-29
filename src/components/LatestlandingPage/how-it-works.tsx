"use client";

import { useState, useEffect } from "react";

const steps = [
  {
    title: "Step 1: Choose your plan",
    lines: [
      "choose your plan",
      "we personalize your onboarding we",
      "deliver it track progress and grow",
    ],
  },
  {
    title: "Step 2: We personalize your onboarding",
    lines: [
      "choose your plan",
      "we personalize your onboarding we",
      "deliver it track progress and grow",
    ],
  },
  {
    title: "Step 3: We deliver it",
    lines: [
      "choose your plan",
      "we personalize your onboarding we",
      "deliver it track progress and grow",
    ],
  },
  {
    title: "Step 4: Track progress and grow",
    lines: [
      "choose your plan",
      "we personalize your onboarding we",
      "deliver it track progress and grow",
    ],
  },
];

export default function HowItWorks() {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % steps.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="how-it-works"
      className="relative py-2 px-6 bg-[#fff8f8] overflow-hidden"
    >
      <div
        className="absolute left-0 top-0 bottom-0 w-24 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 5 L35 15 L45 15 L37 22 L40 32 L30 26 L20 32 L23 22 L15 15 L25 15 Z' fill='none' stroke='%23c41e3a' strokeWidth='1'/%3E%3Ccircle cx='30' cy='45' r='8' fill='none' stroke='%23c41e3a' strokeWidth='1'/%3E%3Cpath d='M10 50 Q30 40 50 50' fill='none' stroke='%23c41e3a' strokeWidth='1'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
        }}
      />
      <div
        className="absolute right-0 top-0 bottom-0 w-24 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 5 L35 15 L45 15 L37 22 L40 32 L30 26 L20 32 L23 22 L15 15 L25 15 Z' fill='none' stroke='%23c41e3a' strokeWidth='1'/%3E%3Ccircle cx='30' cy='45' r='8' fill='none' stroke='%23c41e3a' strokeWidth='1'/%3E%3Cpath d='M10 50 Q30 40 50 50' fill='none' stroke='%23c41e3a' strokeWidth='1'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
        }}
      />

      <div className="max-w-5xl mx-auto pt-8">
        <h2 className="text-3xl md:text-4xl font-bold Hero text-[#2d1f1f] font-serif text-center mb-16">
          How it works
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16 pl-0 lg:pl-16">
          <div className="relative shrink-0">
            <svg
              className="absolute -inset-3 w-[calc(100%+24px)] h-[calc(100%+24px)]"
              viewBox="0 0 340 420"
              preserveAspectRatio="none"
            >
              <path
                d="M20,10 Q30,0 40,10 T60,10 T80,10 T100,10 T120,10 T140,10 T160,10 T180,10 T200,10 T220,10 T240,10 T260,10 T280,10 T300,10 T320,10 Q330,10 330,20 Q340,30 330,40 T330,60 T330,80 T330,100 T330,120 T330,140 T330,160 T330,180 T330,200 T330,220 T330,240 T330,260 T330,280 T330,300 T330,320 T330,340 T330,360 T330,380 T330,400 Q330,410 320,410 Q310,420 300,410 T280,410 T260,410 T240,410 T220,410 T200,410 T180,410 T160,410 T140,410 T120,410 T100,410 T80,410 T60,410 T40,410 T20,410 Q10,410 10,400 Q0,390 10,380 T10,360 T10,340 T10,320 T10,300 T10,280 T10,260 T10,240 T10,220 T10,200 T10,180 T10,160 T10,140 T10,120 T10,100 T10,80 T10,60 T10,40 T10,20 Q10,10 20,10 Z"
                fill="none"
                stroke="#c41e3a"
                strokeWidth="4"
              />
            </svg>
            <div className="relative rounded-lg overflow-hidden">
              <img
                src="/woman.png"
                alt="Happy young woman"
                className="w-72 md:w-80 h-96 object-cover object-top"
              />
            </div>
          </div>

          <div className="flex-1 h-62.5 flex flex-col justify-center">
            <div
              key={currentStep}
              className="animate-in fade-in slide-in-from-bottom-4 duration-500"
            >
              <h3 className="text-2xl md:text-3xl font-bold  text-[#2d1f1f] mb-4">
                {steps[currentStep].title}
              </h3>

              <div className="text-[#2d1f1f]/70 mb-6 space-y-1">
                {steps[currentStep].lines.map((line, index) => (
                  <p key={index}>{line}</p>
                ))}
              </div>

              {/* <Button className="bg-[#c41e3a] hover:bg-[#a01830] text-white rounded-full px-8">
                Get started
              </Button> */}
            </div>

            {/* Optional: Slider Indicators (Dots) */}
            <div className="flex gap-2 mt-8">
              {steps.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentStep(index)}
                  className={`h-2 w-2 rounded-full transition-all ${
                    index === currentStep
                      ? "bg-[#c41e3a] w-6"
                      : "bg-[#c41e3a]/30"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
