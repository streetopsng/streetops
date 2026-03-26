"use client";

import { useEffect } from "react";
import Link from "next/link";
import Footer from "@/components/AnotherLandingPage/Components/Footer";

const services = [
  {
    id: "diagnostic",
    number: "01",
    title: "Team Diagnostic",
    description:
      "You can feel the problem. We name it — with evidence, priority, and a plan.",
    tags: ["Assessment", "Culture Baseline", "Blind Spots"],
    featured: true,
  },
  {
    id: "manager",
    number: "02",
    title: "Manager Effectiveness Training",
    description: "70% of engagement variance. We close the gap.",
    tags: ["Managers", "Coaching"],
    featured: false,
  },
  {
    id: "talent",
    number: "03",
    title: "Talent Integration Advisory",
    description: "Good hires leave by month four. We stop that.",
    tags: ["Onboarding"],
    featured: false,
  },
  {
    id: "culture",
    number: "04",
    title: "Culture & Process Transformation",
    description: "Culture is what your systems reinforce.",
    tags: ["Values", "Identity"],
    featured: false,
  },
  {
    id: "experience",
    number: "05",
    title: "Team Engagement & Experience Design",
    description: "Every experience tied to a diagnosis.",
    tags: ["Bonding", "Events"],
    featured: false,
  },
];

export default function ServicesPage() {
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
      <div className="relative min-h-[360px] sm:min-h-[380px] md:min-h-[420px] overflow-hidden flex items-end">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1400&q=80)",
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
              Consulting Services
            </span>
          </div>
          <h1
            className="font-serif text-[clamp(28px,8vw,32px)] sm:text-[clamp(32px,6vw,42px)] md:text-[clamp(32px,4.5vw,56px)] font-light leading-[1.2] sm:leading-[1.1] md:leading-[1.06] tracking-[-0.8px] sm:tracking-[-1px] md:tracking-[-1.2px] max-w-full sm:max-w-[90%] md:max-w-[680px] mb-4 sm:mb-5"
            style={{ color: "#FFF8EE" }}
          >
            Diagnosis-led.
            <br />
            <em
              className="not-italic"
              style={{ color: "rgba(255,248,238,0.32)" }}
            >
              Outcome-measured.
            </em>
          </h1>
          <p
            className="text-[13px] sm:text-[14px] md:text-base leading-[1.5] sm:leading-[1.6] md:leading-[1.68] font-light max-w-full sm:max-w-[90%] md:max-w-[520px]"
            style={{ color: "rgba(255,248,238,0.48)" }}
          >
            Not a workshop business. We diagnose what is actually wrong, design
            the right intervention, deploy it, and measure whether it worked.
          </p>
        </div>
      </div>

      {/* Methodology */}
      <div className="py-12 sm:py-16 md:py-20 lg:py-[88px] px-4 sm:px-6 md:px-10 lg:px-20 bg-[#FFF2E0] dark:bg-[#241800]">
        <div className="flex items-center gap-2.5 mb-4 sm:mb-[18px] rv">
          <div className="w-5 h-px sm:w-5.5 bg-red-600" />
          <span className="text-[9px] sm:text-[10px] font-bold tracking-[2px] sm:tracking-[2.5px] uppercase text-red-600">
            How We Work
          </span>
        </div>
        <h2 className="font-serif text-[clamp(24px,6vw,28px)] sm:text-[clamp(28px,5vw,38px)] md:text-[clamp(28px,3.8vw,46px)] font-light leading-[1.2] sm:leading-[1.1] tracking-[-0.5px] sm:tracking-[-0.7px] mb-4 sm:mb-[18px] rv rv1 text-char dark:text-cream">
          The methodology behind
          <br />
          <em className="not-italic text-terra">every engagement.</em>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border border-[rgba(26,15,0,0.08)] dark:border-[rgba(255,248,238,0.08)] rounded overflow-hidden mt-8 sm:mt-10 md:mt-12 rv rv2">
          {[
            {
              title: "Diagnose",
              subtitle: "Name what is broken",
              desc: "Evidence-based assessment. No guessing.",
            },
            {
              title: "Design",
              subtitle: "Build the right fix",
              desc: "Specific to the gap found.",
            },
            {
              title: "Deploy",
              subtitle: "Execute with precision",
              desc: "Built for African workplace culture.",
            },
            {
              title: "Measure",
              subtitle: "Prove it worked",
              desc: "Re-diagnosis after every engagement.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="p-5 sm:p-6 md:p-7 lg:p-9 border-b sm:border-b-0 sm:border-r last:border-r-0 border-[rgba(26,15,0,0.08)] dark:border-[rgba(255,248,238,0.08)] transition-all hover:bg-red-50 dark:hover:bg-red-900/15"
            >
              <div className="font-serif text-[10px] sm:text-[11px] italic mb-2.5 sm:mb-3.5 flex items-center gap-2 text-terra">
                <div className="w-4 sm:w-[18px] h-px bg-terra" />
                {item.title}
              </div>
              <h3 className="font-serif text-[17px] sm:text-[18px] md:text-[19px] font-normal mb-1.5 sm:mb-2 tracking-[-0.2px] text-char dark:text-cream">
                {item.subtitle}
              </h3>
              <p className="text-[12px] sm:text-[12.5px] md:text-[13px] leading-[1.5] sm:leading-[1.6] md:leading-[1.62] font-light text-ink3 dark:text-[rgba(255,248,238,0.42)]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-12 sm:py-16 md:py-20 lg:py-[88px] px-4 sm:px-6 md:px-10 lg:px-20 rv">
        <div className="flex items-center gap-2.5 mb-4 sm:mb-[18px]">
          <div className="w-5 h-px sm:w-5.5 bg-red-600" />
          <span className="text-[9px] sm:text-[10px] font-bold tracking-[2px] sm:tracking-[2.5px] uppercase text-red-600">
            Five Services
          </span>
        </div>
        <h2 className="font-serif text-[clamp(24px,6vw,28px)] sm:text-[clamp(28px,5vw,38px)] md:text-[clamp(28px,3.8vw,46px)] font-light leading-[1.2] sm:leading-[1.1] tracking-[-0.5px] sm:tracking-[-0.7px] mb-4 sm:mb-[18px] text-char dark:text-cream">
          One methodology.
          <br />
          <em className="not-italic text-terra">Five entry points.</em>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-auto gap-3 mt-8 sm:mt-10 md:mt-12 rv rv1">
          {services.map((service) => (
            <Link
              key={service.id}
              href={`/services/${service.id}`}
              className={`p-5 sm:p-6 md:p-8 border rounded transition-all cursor-pointer hover:-translate-y-0.5 hover:shadow-md flex flex-col ${
                service.featured ? "sm:row-span-2" : ""
              }`}
              style={{
                backgroundColor: service.featured ? "#660000" : "#FFFFFF",
                borderColor: "rgba(26, 15, 0, 0.08)",
              }}
            >
              <span
                className="text-[8px] sm:text-[9px] md:text-[9.5px] font-bold tracking-[2px] sm:tracking-[2.5px] uppercase mb-3 sm:mb-4"
                style={{
                  color: service.featured
                    ? "rgba(255,248,238,0.45)"
                    : "rgba(26, 15, 0, 0.28)",
                }}
              >
                {service.number}
              </span>
              <h3
                className={`font-serif text-[16px] sm:text-[17px] md:text-[18px] font-normal mb-2 sm:mb-2.5 tracking-[-0.1px] leading-[1.3] sm:leading-[1.2] ${service.featured ? "text-white" : "text-char"}`}
              >
                {service.title}
              </h3>
              <p
                className={`text-[12px] sm:text-[12.5px] md:text-[13px] leading-[1.5] sm:leading-[1.6] md:leading-[1.62] font-light flex-1 mb-3 sm:mb-4 ${service.featured ? "text-white/60" : "text-ink3"}`}
              >
                {service.description}
              </p>
              <div className="flex flex-wrap gap-1 sm:gap-1.5 mt-auto">
                {service.tags.slice(0, 2).map((tag) => (
                  <span
                    key={tag}
                    className="text-[8px] sm:text-[9px] md:text-[10px] font-medium px-1.5 sm:px-2 py-0.5 rounded-full border"
                    style={{
                      backgroundColor: service.featured
                        ? "rgba(255,248,238,0.12)"
                        : "rgba(196,81,42,0.08)",
                      color: service.featured
                        ? "rgba(255,248,238,0.8)"
                        : "#C4512A",
                      borderColor: service.featured
                        ? "rgba(255,248,238,0.2)"
                        : "rgba(196,81,42,0.2)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {service.featured && (
                <div className="mt-4 sm:mt-5 md:mt-6 pt-4 sm:pt-5 md:pt-6">
                  <span
                    className="inline-flex items-center gap-1.5 text-[11px] sm:text-[12px] md:text-[12.5px] font-semibold transition-all hover:gap-2.5"
                    style={{ color: "rgba(255,248,238,0.65)" }}
                  >
                    Learn More →
                  </span>
                </div>
              )}
            </Link>
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
          Not sure which service you need?
        </h2>
        <p className="text-sm sm:text-base mb-6 sm:mb-8 md:mb-9 font-light relative z-10 text-cream/40">
          Start with a conversation. We'll tell you exactly where to begin.
        </p>
        <Link
          href="/contact"
          className="inline-block px-6 sm:px-7 md:px-8.5 py-2.5 sm:py-3 md:py-3.5 text-[13px] sm:text-[14px] md:text-[14.5px] font-semibold rounded transition-all relative z-10 bg-red-600 text-white"
        >
          Work With Us →
        </Link>
      </div>

      <Footer />
    </>
  );
}
