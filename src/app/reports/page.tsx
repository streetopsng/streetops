"use client";

import Footer from "@/components/AnotherLandingPage/Components/Footer";
import Link from "next/link";
import { useEffect } from "react";

export default function ReportsPage() {
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
              "url(https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=1400&q=80)",
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
              Resources · Research & Reports
            </span>
          </div>
          <h1
            className="font-serif text-[clamp(32px,4.5vw,56px)] font-light leading-[1.06] tracking-[-1.2px] max-w-[680px] mb-5"
            style={{ color: "#FFF8EE" }}
          >
            The data behind
            <br />
            <em
              className="not-italic"
              style={{ color: "rgba(255,248,238,0.32)" }}
            >
              African team performance.
            </em>
          </h1>
          <p
            className="text-base leading-[1.68] font-light max-w-[520px]"
            style={{ color: "rgba(255,248,238,0.48)" }}
          >
            Original research built from real data, real engagements, and Street
            Ask surveys.
          </p>
        </div>
      </div>

      {/* Reports */}
      <div className="py-[88px] px-20 rv">
        <div className="border border-[rgba(26,15,0,0.08)] dark:border-[rgba(255,248,238,0.08)] p-10 rounded-lg flex gap-9 items-center mb-3.5 bg-white dark:bg-[#1C1200]">
          <div className="flex-1">
            <div className="text-[9.5px] font-bold tracking-[2px] uppercase mb-2.5 text-red-600">
              Flagship Report · Coming 2026
            </div>
            <h3 className="font-serif text-[22px] font-normal mb-2.5 tracking-[-0.2px] leading-[1.2] text-char dark:text-cream">
              The State of SME Productivity in Nigeria
            </h3>
            <p className="text-[13.5px] leading-[1.65] font-light mb-[18px] text-ink3 dark:text-[rgba(255,248,238,0.42)]">
              The first comprehensive report on productivity in Nigerian SMEs —
              built from Street Ask data and real worker voices across
              industries.
            </p>
            <Link
              href="/ask"
              className="inline-flex items-center gap-1.5 text-[12.5px] font-semibold transition-all hover:gap-2.5 text-red-600"
            >
              Contribute to the Survey →
            </Link>
          </div>
          <div className="w-[280px] p-5.5 text-center border border-[rgba(26,15,0,0.08)] dark:border-[rgba(255,248,238,0.08)] rounded-lg bg-[#FFF2E0] dark:bg-[#241800]">
            <div className="text-[10px] font-bold tracking-[1.5px] uppercase mb-1.5 text-red-600">
              Coming 2026
            </div>
            <p className="text-xs mb-2.5 text-ink3 dark:text-[rgba(255,248,238,0.42)]">
              Be notified when it drops.
            </p>
            <input
              type="email"
              placeholder="your@email.com"
              className="w-full px-3.5 py-2.5 border border-[rgba(26,15,0,0.08)] dark:border-[rgba(255,248,238,0.08)] bg-white dark:bg-[#1C1200] text-[13px] text-char dark:text-cream rounded outline-none focus:border-red-600 mb-2.5"
            />
            <button className="w-full py-2.5 text-[13px] font-semibold rounded transition-all bg-red-600 text-white">
              Notify Me
            </button>
          </div>
        </div>

        <div className="mt-3.5 p-8 border border-dashed border-[rgba(26,15,0,0.08)] dark:border-[rgba(255,248,238,0.08)] rounded-lg text-center rv rv2">
          <div className="text-[10px] font-bold tracking-[2px] uppercase mb-1.5 text-ink4 dark:text-[rgba(255,248,238,0.22)]">
            More Reports In Development
          </div>
          <p className="text-[13.5px] text-ink4 dark:text-[rgba(255,248,238,0.22)] font-light">
            Each Street Ask survey feeds a future report.
            <Link
              href="/ask"
              className="inline-flex items-center gap-1.5 text-[12.5px] font-semibold transition-all hover:gap-2.5 text-red-600 ml-1"
            >
              Participate →
            </Link>
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
}
