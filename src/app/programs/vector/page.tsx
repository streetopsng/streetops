"use client";

import { useEffect } from "react";
import Link from "next/link";
import Footer from "@/components/AnotherLandingPage/Components/Footer";

export default function VectorPage() {
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
      <div className="relative min-h-[380px] sm:min-h-[400px] md:min-h-[420px] overflow-hidden flex items-end">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=1400&q=80)",
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
          <Link
            href="/programs"
            className="inline-flex items-center gap-1.5 text-[10px] sm:text-[11px] md:text-[11.5px] font-semibold mb-4 sm:mb-5 md:mb-6 transition-colors hover:text-cream/75"
            style={{ color: "rgba(255,248,238,0.35)" }}
          >
            ← All Programs
          </Link>
          <div className="flex items-center gap-2.5 mb-4 sm:mb-5">
            <div
              className="w-4 sm:w-5.5 h-px"
              style={{ backgroundColor: "rgba(255,248,238,0.2)" }}
            />
            <span
              className="text-[8px] sm:text-[9px] md:text-[10px] font-semibold tracking-[1.5px] sm:tracking-[2px] uppercase"
              style={{ color: "rgba(255,248,238,0.35)" }}
            >
              Vector Training Program
            </span>
          </div>
          <h1
            className="font-serif text-[clamp(28px,8vw,32px)] sm:text-[clamp(32px,6vw,42px)] md:text-[clamp(32px,4.5vw,56px)] font-light leading-[1.2] sm:leading-[1.1] md:leading-[1.06] tracking-[-0.8px] sm:tracking-[-1px] md:tracking-[-1.2px] max-w-full sm:max-w-[90%] md:max-w-[680px] mb-4 sm:mb-5"
            style={{ color: "#FFF8EE" }}
          >
            Build your team's identity
            <br />
            <em
              className="not-italic"
              style={{ color: "rgba(255,248,238,0.32)" }}
            >
              before it builds itself badly.
            </em>
          </h1>
          <p
            className="text-[13px] sm:text-[14px] md:text-base leading-[1.5] sm:leading-[1.6] md:leading-[1.68] font-light max-w-full sm:max-w-[90%] md:max-w-[520px]"
            style={{ color: "rgba(255,248,238,0.48)" }}
          >
            The programme StreetOps used to build its own culture. We created
            our values, built our identity system, hired from it. Now we run it
            for other teams.
          </p>
        </div>
      </div>

      {/* Program Details */}
      <div className="py-12 sm:py-16 md:py-20 lg:py-[88px] px-4 sm:px-6 md:px-10 lg:px-20">
        <div className="bg-char dark:bg-[#0A0600] border border-[rgba(255,248,238,0.07)] border-l-4 border-l-red-600 p-6 sm:p-8 md:p-10 lg:p-13 rounded-lg flex flex-col lg:flex-row gap-8 sm:gap-10 md:gap-13 items-center rv">
          <div className="flex-1">
            <div className="flex items-center gap-2.5 mb-4 sm:mb-[18px]">
              <div
                className="w-4 sm:w-5.5 h-px"
                style={{ backgroundColor: "rgba(255,248,238,0.2)" }}
              />
              <span
                className="text-[8px] sm:text-[9px] md:text-[10px] font-bold tracking-[2px] sm:tracking-[2.5px] uppercase"
                style={{ color: "rgba(255,248,238,0.35)" }}
              >
                What Vector Is
              </span>
            </div>
            <h2 className="font-serif text-[clamp(24px,6vw,28px)] sm:text-[clamp(26px,5vw,30px)] md:text-[30px] font-light leading-[1.2] sm:leading-[1.1] mb-2.5 sm:mb-3.5 tracking-[-0.5px] sm:tracking-[-0.6px] text-cream">
              A cohort that builds your culture from the inside out.
            </h2>
            <p className="text-[13px] sm:text-[14px] md:text-[14.5px] leading-[1.5] sm:leading-[1.6] md:leading-[1.68] font-light mb-5 sm:mb-6 text-cream/50">
              Takes a team through the full process of building their identity
              system — values creation, team identity, engagement engine, and
              adoption infrastructure.
            </p>
            <Link
              href="/contact"
              className="inline-block px-5 sm:px-6 py-2 sm:py-2.5 md:py-3 text-[12px] sm:text-[12.5px] md:text-[13px] font-semibold rounded transition-all bg-red-600 text-white"
            >
              Apply for Next Cohort →
            </Link>
          </div>
          <div className="w-full lg:w-[300px]">
            {[
              {
                label: "Format",
                value: "Cohort-based · In-person and virtual",
              },
              { label: "Duration", value: "To be confirmed per cohort" },
              { label: "Size", value: "Small groups — intentional, not mass" },
              { label: "Next", value: "Upcoming cohort date" },
            ].map((item, index) => (
              <div
                key={index}
                className="py-2.5 sm:py-3 border-b border-[rgba(255,248,238,0.07)] flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-0"
              >
                <span className="text-[8px] sm:text-[9px] md:text-[9.5px] font-bold tracking-[1.5px] sm:tracking-[2px] uppercase w-full sm:w-[72px] flex-shrink-0 pt-px text-cream/20">
                  {item.label}
                </span>
                <span className="text-[12px] sm:text-[13px] font-light text-cream/55">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Outcomes */}
      <div className="py-12 sm:py-16 md:py-20 lg:py-[88px] px-4 sm:px-6 md:px-10 lg:px-20 bg-[#FFF2E0] dark:bg-[#241800]">
        <div className="flex items-center gap-2.5 mb-4 sm:mb-[18px] rv">
          <div className="w-5 h-px sm:w-5.5 bg-red-600" />
          <span className="text-[9px] sm:text-[10px] font-bold tracking-[2px] sm:tracking-[2.5px] uppercase text-red-600">
            What You Leave With
          </span>
        </div>
        <h2 className="font-serif text-[clamp(24px,6vw,28px)] sm:text-[clamp(28px,5vw,38px)] md:text-[clamp(28px,3.8vw,46px)] font-light leading-[1.2] sm:leading-[1.1] tracking-[-0.5px] sm:tracking-[-0.7px] mb-4 sm:mb-[18px] rv rv1 text-char dark:text-cream">
          Four outcomes.
          <br />
          <em className="not-italic text-terra">All of them real.</em>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-8 sm:mt-10 md:mt-11 rv rv2">
          {[
            {
              icon: "🎯",
              title: "A Defined Values System",
              desc: "Not values on a wall. Values with behavioural anchors.",
            },
            {
              icon: "🏗️",
              title: "A Team Identity Framework",
              desc: "Shared language, shared identity, shared story.",
            },
            {
              icon: "⚙️",
              title: "An Engagement Engine",
              desc: "The rituals and touchpoints that sustain identity over time.",
            },
            {
              icon: "📈",
              title: "Adoption Infrastructure",
              desc: "The tools to keep it alive after the cohort ends.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="p-5 sm:p-6 md:p-7 border border-[rgba(26,15,0,0.08)] dark:border-[rgba(255,248,238,0.08)] rounded-lg transition-all hover:border-red-600 bg-white dark:bg-[#1C1200]"
            >
              <span className="text-xl sm:text-2xl mb-2 sm:mb-3 block">
                {item.icon}
              </span>
              <div className="text-[13px] sm:text-[14px] font-semibold mb-1 sm:mb-1.5 text-char dark:text-cream">
                {item.title}
              </div>
              <div className="text-[12px] sm:text-[13px] leading-[1.5] sm:leading-[1.6] md:leading-[1.62] font-light text-ink3 dark:text-[rgba(255,248,238,0.42)]">
                {item.desc}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="py-16 sm:py-20 md:py-25 px-4 sm:px-6 md:px-10 lg:px-20 text-center relative overflow-hidden bg-char dark:bg-[#0A0600]">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 80% at 50% 100%, rgba(102,0,0,0.3), transparent)",
          }}
        />
        <h2 className="font-serif text-[clamp(24px,6vw,28px)] sm:text-[clamp(28px,5vw,38px)] md:text-[clamp(28px,4.5vw,52px)] font-[200] leading-[1.2] sm:leading-[1.12] mb-4 sm:mb-[18px] tracking-[-0.5px] sm:tracking-[-1px] relative z-10 text-cream">
          Ready to build your team's identity?
        </h2>
        <Link
          href="/contact"
          className="inline-block px-6 sm:px-7 md:px-8.5 py-2.5 sm:py-3 md:py-3.5 text-[13px] sm:text-[14px] md:text-[14.5px] font-semibold rounded transition-all relative z-10 bg-red-600 text-white"
        >
          Apply for Next Cohort →
        </Link>
      </div>

      <Footer />
    </>
  );
}
