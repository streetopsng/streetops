"use client";

import { useEffect } from "react";
import Link from "next/link";
import Footer from "@/components/AnotherLandingPage/Components/Footer";

export default function ProductsPage() {
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
      <div className="relative min-h-[420px] overflow-hidden flex items-end">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1400&q=80)",
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
              Products
            </span>
          </div>
          <h1
            className="font-serif text-[clamp(32px,4.5vw,56px)] font-light leading-[1.06] tracking-[-1.2px] max-w-[680px] mb-5"
            style={{ color: "#FFF8EE" }}
          >
            Built on behavioural science.
            <br />
            <em
              className="not-italic"
              style={{ color: "rgba(255,248,238,0.32)" }}
            >
              Designed for African teams.
            </em>
          </h1>
          <p
            className="text-base leading-[1.68] font-light max-w-[520px]"
            style={{ color: "rgba(255,248,238,0.48)" }}
          >
            Technology that sustains what consulting initiates.
          </p>
        </div>
      </div>

      {/* Paige Section */}
      <div className="py-[88px] px-20 rv">
        <div className="border border-[rgba(26,15,0,0.08)] dark:border-[rgba(255,248,238,0.08)] p-13 rounded-lg flex gap-13 items-center">
          <div className="flex-1">
            <div className="text-[9.5px] font-bold tracking-[2.5px] uppercase mb-3.5 text-red-600">
              SaaS Platform · Live Now
            </div>
            <h2 className="font-serif text-[46px] font-[200] leading-none mb-3 tracking-[-2px] text-char dark:text-cream">
              Paige
            </h2>
            <p className="text-[15px] leading-[1.7] font-light mb-6 text-ink3 dark:text-[rgba(255,248,238,0.42)]">
              Team engagement platform built on behavioural science. Continuous
              diagnosis, pulse surveys, recognition channels, formation tools,
              and a three-layer dashboard for HR, managers, and teams.
            </p>
            <div className="flex gap-3 flex-wrap">
              <a
                href="https://www.usepaige.io"
                target="_blank"
                className="px-6 py-3 text-[13px] font-semibold rounded transition-all inline-flex items-center gap-1.5 bg-red-600 text-white"
              >
                Visit usepaige.io →
              </a>
              <Link
                href="/contact"
                className="px-6 py-3 text-[13px] font-semibold rounded transition-all border border-red-600 text-red-600"
              >
                Ask About Paige
              </Link>
            </div>
          </div>
          <div className="w-[280px] p-9 text-center rounded-lg border border-[rgba(255,248,238,0.07)] bg-char dark:bg-[#0A0600]">
            <div className="text-[9.5px] font-bold tracking-[2px] uppercase mb-2 text-cream/20">
              Live at
            </div>
            <div className="font-serif text-[20px] mb-5 text-cream tracking-[-0.3px]">
              usepaige.io
            </div>
            <a
              href="https://www.usepaige.io"
              target="_blank"
              className="block px-6 py-3 text-[13px] font-semibold rounded transition-all text-center bg-red-600 text-white"
            >
              Go to Paige →
            </a>
          </div>
        </div>

        <div className="max-w-[480px] mt-3.5 p-8 border border-dashed border-[rgba(26,15,0,0.08)] dark:border-[rgba(255,248,238,0.08)] rounded-lg text-center rv rv2">
          <div className="text-[10px] font-bold tracking-[2px] uppercase mb-1.5 text-ink4 dark:text-[rgba(255,248,238,0.22)]">
            More Products Coming
          </div>
          <p className="text-[13.5px] text-ink4 dark:text-[rgba(255,248,238,0.22)] font-light">
            Paige is the first product. It will not be the last.
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
          Consulting initiates. Paige sustains.
        </h2>
        <div className="flex gap-3 justify-center mt-2 flex-wrap relative z-10">
          <Link
            href="/services"
            className="px-6 py-3 text-[13.5px] font-semibold rounded transition-all bg-red-600 text-white"
          >
            Explore Consulting
          </Link>
          <a
            href="https://www.usepaige.io"
            target="_blank"
            className="px-6 py-3 text-[13px] font-medium rounded transition-all border border-cream/25 text-cream/65"
          >
            Go to Paige →
          </a>
        </div>
      </div>

      <Footer />
    </>
  );
}
