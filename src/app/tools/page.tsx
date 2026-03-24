"use client";

import Footer from "@/components/AnotherLandingPage/Components/Footer";
import { useEffect } from "react";

const tools = [
  {
    number: "01",
    title: "Team Health Self-Assessment",
    description:
      "A lite version of the Paige diagnostic. Measure your team across key dimensions in under 15 minutes.",
  },
  {
    number: "02",
    title: "Manager Blind Spot Checklist",
    description:
      "An anonymous team rating framework managers can run on themselves — or HR can run on them.",
  },
  {
    number: "03",
    title: "Culture vs. Claimed Values Audit",
    description:
      "The gap between what an organisation says it believes and what it actually does.",
  },
  {
    number: "04",
    title: "Onboarding Infrastructure Checklist",
    description: "Everything you need to stop losing good hires by month four.",
  },
];

export default function ToolsPage() {
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
      <div className="relative min-h-[360px] overflow-hidden flex items-end">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1400&q=80)",
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
        <div className="relative z-10 px-20 py-25">
          <div className="flex items-center gap-2.5 mb-5">
            <div
              className="w-5.5 h-px"
              style={{ backgroundColor: "rgba(255,248,238,0.2)" }}
            />
            <span
              className="text-[10px] font-semibold tracking-[2px] uppercase"
              style={{ color: "rgba(255,248,238,0.35)" }}
            >
              Resources · Tools & Frameworks
            </span>
          </div>
          <h1
            className="font-serif text-[clamp(32px,4.5vw,56px)] font-light leading-[1.06] tracking-[-1.2px] max-w-[680px] mb-5"
            style={{ color: "#FFF8EE" }}
          >
            Practical tools.
            <br />
            <em
              className="not-italic"
              style={{ color: "rgba(255,248,238,0.32)" }}
            >
              Real value. Free.
            </em>
          </h1>
          <p
            className="text-base leading-[1.68] font-light max-w-[520px]"
            style={{ color: "rgba(255,248,238,0.48)" }}
          >
            Downloadable frameworks built from our consulting methodology. Enter
            your email to download.
          </p>
        </div>
      </div>

      {/* Tools Grid */}
      <div className="py-[88px] px-20 rv">
        <div className="grid grid-cols-2 gap-3">
          {tools.map((tool) => (
            <div
              key={tool.number}
              className="p-8 border border-[rgba(26,15,0,0.08)] dark:border-[rgba(255,248,238,0.08)] rounded-lg flex flex-col bg-white dark:bg-[#1C1200]"
            >
              <span className="text-[9.5px] font-bold tracking-[2.5px] uppercase mb-4 text-ink4 dark:text-[rgba(255,248,238,0.28)]">
                Tool {tool.number}
              </span>
              <h3 className="font-serif text-[18px] font-normal mb-2.5 tracking-[-0.1px] leading-[1.2] text-char dark:text-cream">
                {tool.title}
              </h3>
              <p className="text-[13px] leading-[1.62] font-light mb-6 text-ink3 dark:text-[rgba(255,248,238,0.42)] flex-1">
                {tool.description}
              </p>
              <button className="self-start px-5 py-2 text-[12.5px] font-semibold rounded transition-all bg-red-600 text-white">
                Download Free →
              </button>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}
