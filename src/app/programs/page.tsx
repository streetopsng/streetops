"use client";

import { useEffect } from "react";
import Link from "next/link";
import Footer from "@/components/AnotherLandingPage/Components/Footer";

export default function ProgramsPage() {
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
      <div className="relative min-h-[400px] overflow-hidden flex items-end">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=1400&q=80)",
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
              Programs
            </span>
          </div>
          <h1
            className="font-serif text-[clamp(32px,4.5vw,56px)] font-light leading-[1.06] tracking-[-1.2px] max-w-[680px] mb-5"
            style={{ color: "#FFF8EE" }}
          >
            Structured experiences.
            <br />
            <em
              className="not-italic"
              style={{ color: "rgba(255,248,238,0.32)" }}
            >
              Specific outcomes.
            </em>
          </h1>
          <p
            className="text-base leading-[1.68] font-light max-w-[520px]"
            style={{ color: "rgba(255,248,238,0.48)" }}
          >
            Cohort-based bootcamps with a clear result at the end — built on the
            same methodology as our consulting work.
          </p>
        </div>
      </div>

      {/* Programs */}
      <div className="py-[88px] px-20 rv">
        <div className="flex items-center gap-2.5 mb-[18px]">
          <div className="w-5.5 h-px bg-red-600" />
          <span className="text-[10px] font-bold tracking-[2.5px] uppercase text-red-600">
            Current Programs
          </span>
        </div>
        <h2 className="font-serif text-[clamp(28px,3.8vw,46px)] font-light leading-[1.1] tracking-[-0.7px] mb-[18px] text-char dark:text-cream">
          Built from our own
          <br />
          <em className="not-italic text-terra">experience first.</em>
        </h2>

        <div className="max-w-[580px] mt-10">
          <Link
            href="/programs/vector"
            className="block p-8 border rounded transition-all cursor-pointer hover:-translate-y-0.5 hover:shadow-md bg-red-600"
          >
            <span className="text-[9.5px] font-bold tracking-[2.5px] uppercase mb-4 block text-cream/45">
              Program 01
            </span>
            <h3 className="font-serif text-[18px] font-normal mb-2.5 tracking-[-0.1px] leading-[1.2] text-white">
              Vector Training Program
            </h3>
            <p className="text-[13px] leading-[1.62] font-light mb-4 text-white/60">
              Build your team's identity before it builds itself badly. The
              programme StreetOps used to build its own culture.
            </p>
            <div className="flex flex-wrap gap-1.5 mb-5">
              {["Team Identity", "Values Creation", "Engagement Engine"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-medium px-2 py-0.5 rounded-full border border-white/20 text-cream/80 bg-white/10"
                  >
                    {tag}
                  </span>
                ),
              )}
            </div>
            <div className="mt-5 pt-5">
              <span className="inline-flex items-center gap-1.5 text-[12.5px] font-semibold transition-all hover:gap-2.5 text-cream/65">
                Learn More →
              </span>
            </div>
          </Link>
        </div>

        <div className="max-w-[580px] mt-3 p-8 border border-dashed border-[rgba(26,15,0,0.08)] dark:border-[rgba(255,248,238,0.08)] rounded-lg text-center rv rv2">
          <div className="text-[10px] font-bold tracking-[2px] uppercase mb-1.5 text-ink4 dark:text-[rgba(255,248,238,0.22)]">
            More Programs Coming
          </div>
          <p className="text-[13.5px] text-ink4 dark:text-[rgba(255,248,238,0.22)] font-light">
            The Manager Reset, Social Productivity Bootcamp, State of the Team
            Summit — and more.
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="py-25 px-20 text-center relative overflow-hidden bg-char dark:bg-[#0A0600]">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 80% at 50% 100%, rgba(102,0,0,0.3), transparent)",
          }}
        />
        <h2 className="font-serif text-[clamp(28px,4.5vw,52px)] font-[200] leading-[1.12] mb-[18px] tracking-[-1px] relative z-10 text-cream">
          Want to be notified when new programs launch?
        </h2>
        <Link
          href="/contact"
          className="inline-block px-8.5 py-3.5 text-[14.5px] font-semibold rounded transition-all relative z-10 bg-red-600 text-white"
        >
          Register Interest →
        </Link>
      </div>

      <Footer />
    </>
  );
}
