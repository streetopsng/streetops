"use client";

import Footer from "@/components/AnotherLandingPage/Components/Footer";
import { useEffect } from "react";

export default function AskPage() {
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
      <div className="relative min-h-[380px] overflow-hidden flex items-end">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1400&q=80)",
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
              Street Ask
            </span>
          </div>
          <h1
            className="font-serif text-[clamp(32px,4.5vw,56px)] font-light leading-[1.06] tracking-[-1.2px] max-w-[680px] mb-5"
            style={{ color: "#FFF8EE" }}
          >
            The questions nobody is
            <br />
            asking{" "}
            <em
              className="not-italic"
              style={{ color: "rgba(255,248,238,0.32)" }}
            >
              African workers.
            </em>
          </h1>
          <p
            className="text-base leading-[1.68] font-light max-w-[520px]"
            style={{ color: "rgba(255,248,238,0.48)" }}
          >
            We are asking them. Surveys and polls that feed our research and
            build the first credible body of data on Nigerian team productivity.
          </p>
        </div>
      </div>

      {/* Active Survey */}
      <div className="py-[88px] px-20 rv">
        <div className="flex items-center gap-2.5 mb-[18px]">
          <div className="w-5.5 h-px bg-red-600" />
          <span className="text-[10px] font-bold tracking-[2.5px] uppercase text-red-600">
            Active Survey
          </span>
        </div>
        <h2 className="font-serif text-[clamp(28px,3.8vw,46px)] font-light leading-[1.1] tracking-[-0.7px] mb-[18px] text-char dark:text-cream">
          The State of SME Productivity
          <br />
          <em className="not-italic text-terra">survey is live.</em>
        </h2>

        <div className="mt-11 p-12 border-2 border-red-600 rounded-lg bg-white dark:bg-[#1C1200] relative overflow-hidden">
          <div
            className="absolute top-0 right-0 w-[260px] h-[260px] pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(102,0,0,0.06) 0%, transparent 70%)",
            }}
          />
          <h3 className="font-serif text-[26px] font-normal mb-3 tracking-[-0.3px] text-char dark:text-cream">
            State of SME Productivity in Nigeria — 2026
          </h3>
          <p className="text-[14.5px] leading-[1.68] font-light mb-8 max-w-[540px] text-ink3 dark:text-[rgba(255,248,238,0.42)]">
            We want to understand how Nigerian SME workers experience
            productivity — processes, people dynamics, manager relationships,
            and clarity. Your anonymous responses directly shape this report.
          </p>
          <div className="text-[10.5px] font-bold tracking-[1px] uppercase mb-2 text-ink4 dark:text-[rgba(255,248,238,0.22)]">
            Responses collected
          </div>
          <div className="h-0.5 bg-[rgba(26,15,0,0.08)] dark:bg-[rgba(255,248,238,0.08)] rounded mb-1.5">
            <div className="h-full w-[34%] bg-red-600 rounded" />
          </div>
          <div className="text-xs mb-7 text-ink4 dark:text-[rgba(255,248,238,0.22)]">
            312 responses so far · Target: 1,000 · Under 5 minutes to complete
          </div>
          <button className="px-7.5 py-3 text-[14.5px] font-semibold rounded transition-all bg-red-600 text-white">
            Take the Survey →
          </button>
        </div>
      </div>

      {/* Why Participate */}
      <div className="py-[88px] px-20 bg-[#FFF2E0] dark:bg-[#241800] rv">
        <div className="flex items-center gap-2.5 mb-[18px]">
          <div className="w-5.5 h-px bg-red-600" />
          <span className="text-[10px] font-bold tracking-[2.5px] uppercase text-red-600">
            Why Participate
          </span>
        </div>
        <h2 className="font-serif text-[clamp(28px,3.8vw,46px)] font-light leading-[1.1] tracking-[-0.7px] mb-[18px] text-char dark:text-cream">
          Your data builds
          <br />
          <em className="not-italic text-terra">the industry's mirror.</em>
        </h2>

        <div className="grid grid-cols-3 gap-3 mt-9">
          {[
            {
              title: "100% Anonymous",
              desc: "Your responses are never tied to your name, company, or identity.",
            },
            {
              title: "Shapes Real Research",
              desc: "Your input feeds the State of SME Productivity Report — the first of its kind.",
            },
            {
              title: "You Get the Report",
              desc: "Participants get early access to the published report when it drops.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="p-8 border border-[rgba(26,15,0,0.08)] dark:border-[rgba(255,248,238,0.08)] rounded-lg bg-white dark:bg-[#1C1200]"
            >
              <h3 className="font-serif text-[17px] font-normal mb-2.5 text-char dark:text-cream">
                {item.title}
              </h3>
              <p className="text-[13px] leading-[1.62] font-light text-ink3 dark:text-[rgba(255,248,238,0.42)]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}
