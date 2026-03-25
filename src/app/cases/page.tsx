"use client";

import Footer from "@/components/AnotherLandingPage/Components/Footer";
import { useEffect } from "react";

const caseStudies = [
  {
    category: "Real Estate · Team Diagnostic",
    title: "[Case Study Title]",
    description:
      "[Problem, what StreetOps did, and the headline result. Replace with real content.]",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=500&q=80",
  },
  {
    category: "Fintech · Manager Effectiveness",
    title: "[Case Study Title]",
    description:
      "[Problem, what StreetOps did, and the headline result. Replace with real content.]",
    image:
      "https://images.unsplash.com/photo-1551135049-8a33b5883817?w=500&q=80",
  },
  {
    category: "NGO · Culture Transformation",
    title: "[Case Study Title]",
    description:
      "[Problem, what StreetOps did, and the headline result. Replace with real content.]",
    image:
      "https://images.unsplash.com/photo-1526041092449-209d556f8a32?w=500&q=80",
  },
];

export default function CasesPage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("on");
          }
        });
      },
      { threshold: 0.1 },
    );

    document.querySelectorAll(".rv").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Hero */}
      <div className="relative min-h-[320px] sm:min-h-[340px] md:min-h-[360px] overflow-hidden flex items-end">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1400&q=80)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(26,15,0,0.88) 0%, rgba(26,15,0,0.55) 60%, rgba(102,0,0,0.2) 100%)",
          }}
        />
        <div
          className="absolute left-0 top-0 bottom-0 w-1"
          style={{
            background:
              "linear-gradient(to bottom, transparent, #660000 30%, #E8571A 70%, transparent)",
          }}
        />
        <div className="relative z-10 px-4 sm:px-6 md:px-10 lg:px-20 py-16 sm:py-20 md:py-25">
          <div className="flex items-center gap-2.5 mb-4 sm:mb-5">
            <div
              className="w-4 sm:w-5.5 h-px"
              style={{ backgroundColor: "rgba(255,248,238,0.2)" }}
            />
            <span
              className="text-[8px] sm:text-[9px] md:text-[10px] font-semibold tracking-[1.5px] sm:tracking-[2px] uppercase"
              style={{ color: "rgba(255,248,238,0.35)" }}
            >
              Case Studies
            </span>
          </div>
          <h1
            className="font-serif text-[clamp(28px,8vw,32px)] sm:text-[clamp(32px,6vw,42px)] md:text-[clamp(32px,4.5vw,56px)] font-light leading-[1.2] sm:leading-[1.1] md:leading-[1.06] tracking-[-0.8px] sm:tracking-[-1px] md:tracking-[-1.2px] max-w-full sm:max-w-[90%] md:max-w-[680px] mb-4 sm:mb-5"
            style={{ color: "#FFF8EE" }}
          >
            Results, not promises.
            <br />
            <em
              className="not-italic"
              style={{ color: "rgba(255,248,238,0.32)" }}
            >
              Real teams. Real change.
            </em>
          </h1>
          <p
            className="text-[13px] sm:text-[14px] md:text-base leading-[1.5] sm:leading-[1.6] md:leading-[1.68] font-light max-w-full sm:max-w-[90%] md:max-w-[520px]"
            style={{ color: "rgba(255,248,238,0.48)" }}
          >
            How StreetOps diagnoses accurately and intervenes deliberately. PDFs
            gated with email.
          </p>
        </div>
      </div>

      {/* Case Studies Grid */}
      <div className="py-12 sm:py-16 md:py-20 lg:py-[88px] px-4 sm:px-6 md:px-10 lg:px-20 rv">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-4 items-start">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className={`p-5 sm:p-6 md:p-8 border border-[rgba(26,15,0,0.08)] dark:border-[rgba(255,248,238,0.08)] rounded-lg bg-white dark:bg-[#1C1200] ${
                index === 1 ? "md:mt-7" : ""
              }`}
            >
              <div className="text-[8px] sm:text-[9px] md:text-[9.5px] font-bold tracking-[1.5px] sm:tracking-[2px] uppercase mb-2 sm:mb-3 text-red-600">
                {study.category}
              </div>
              <div className="h-[140px] sm:h-[150px] md:h-[160px] rounded mb-4 sm:mb-[18px] overflow-hidden bg-[#FFF2E0] dark:bg-[#241800]">
                <img
                  src={study.image}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="font-serif text-[17px] sm:text-[18px] md:text-[19px] font-normal mb-2 sm:mb-2.5 leading-[1.3] text-char dark:text-cream">
                {study.title}
              </h4>
              <p className="text-[12.5px] sm:text-[13px] md:text-[13.5px] leading-[1.5] sm:leading-[1.6] md:leading-[1.65] font-light mb-4 sm:mb-[18px] text-ink3 dark:text-[rgba(255,248,238,0.42)]">
                {study.description}
              </p>
              <button className="inline-flex items-center gap-1.5 text-[11px] sm:text-[12px] md:text-[12.5px] font-semibold transition-all hover:gap-2.5 text-red-600">
                Download Full Case Study →
              </button>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}
