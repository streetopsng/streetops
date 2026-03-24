"use client";

import { useEffect } from "react";
import Link from "next/link";
import Footer from "@/components/AnotherLandingPage/Components/Footer";

export default function ContactPage() {
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
              "url(https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1400&q=80)",
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
              Work With Us
            </span>
          </div>
          <h1
            className="font-serif text-[clamp(32px,4.5vw,56px)] font-light leading-[1.06] tracking-[-1.2px] max-w-[680px] mb-5"
            style={{ color: "#FFF8EE" }}
          >
            Let's talk about
            <br />
            <em
              className="not-italic"
              style={{ color: "rgba(255,248,238,0.32)" }}
            >
              your team.
            </em>
          </h1>
          <p
            className="text-base leading-[1.68] font-light max-w-[520px]"
            style={{ color: "rgba(255,248,238,0.48)" }}
          >
            Tell us what you're dealing with. We'll tell you exactly where to
            start. We respond within 48 hours.
          </p>
        </div>
      </div>

      {/* Contact Options */}
      <div className="py-[88px] px-20 rv">
        <div className="flex items-center gap-2.5 mb-[18px]">
          <div className="w-5.5 h-px bg-red-600" />
          <span className="text-[10px] font-bold tracking-[2.5px] uppercase text-red-600">
            How Can We Help?
          </span>
        </div>
        <h2 className="font-serif text-[clamp(28px,3.8vw,46px)] font-light leading-[1.1] tracking-[-0.7px] mb-[18px] text-char dark:text-cream">
          Three ways to
          <br />
          <em className="not-italic text-terra">start a conversation.</em>
        </h2>

        <div className="grid grid-cols-3 gap-2.5 mt-12">
          {[
            {
              path: "01",
              title: "I want a consulting engagement",
              desc: "You have a team problem — turnover, performance, culture, onboarding. You want a diagnosis-led intervention.",
            },
            {
              path: "02",
              title: "I want to learn about Paige",
              desc: "You want the technology platform — continuous engagement data, formation tools, dashboards for HR and managers.",
            },
            {
              path: "03",
              title: "I want to partner or collaborate",
              desc: "Research partnership, programme collaboration, media, speaking, or something else.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="p-9 border border-[rgba(26,15,0,0.08)] dark:border-[rgba(255,248,238,0.08)] rounded-lg transition-all hover:border-red-600 hover:-translate-y-0.5 hover:shadow-md bg-white dark:bg-[#1C1200]"
            >
              <div className="text-[10px] font-bold tracking-[2px] uppercase mb-3 text-red-600">
                Path {item.path}
              </div>
              <h3 className="font-serif text-[20px] font-normal mb-2.5 leading-[1.2] tracking-[-0.2px] text-char dark:text-cream">
                {item.title}
              </h3>
              <p className="text-[13.5px] leading-[1.65] font-light mb-5 text-ink3 dark:text-[rgba(255,248,238,0.42)]">
                {item.desc}
              </p>
              <button className="inline-flex items-center gap-1.5 text-[12.5px] font-semibold transition-all hover:gap-2.5 text-red-600">
                {index === 1 ? "See Paige →" : "Start Here →"}
              </button>
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <div className="grid grid-cols-2 gap-20 mt-[72px] items-start rv rv2">
          <div>
            <div className="flex items-center gap-2.5 mb-6">
              <div className="w-5.5 h-px bg-red-600" />
              <span className="text-[10px] font-bold tracking-[2.5px] uppercase text-red-600">
                Send Us a Message
              </span>
            </div>
            <div className="grid grid-cols-2 gap-3.5 mb-3.5">
              <div>
                <label className="text-[10.5px] font-bold uppercase tracking-[1.5px] mb-1.5 block text-char dark:text-cream">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="Your first name"
                  className="w-full px-3.5 py-3 border border-[rgba(26,15,0,0.08)] dark:border-[rgba(255,248,238,0.08)] bg-white dark:bg-[#1C1200] text-[13.5px] text-char dark:text-cream rounded outline-none focus:border-red-600"
                />
              </div>
              <div>
                <label className="text-[10.5px] font-bold uppercase tracking-[1.5px] mb-1.5 block text-char dark:text-cream">
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Your last name"
                  className="w-full px-3.5 py-3 border border-[rgba(26,15,0,0.08)] dark:border-[rgba(255,248,238,0.08)] bg-white dark:bg-[#1C1200] text-[13.5px] text-char dark:text-cream rounded outline-none focus:border-red-600"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3.5 mb-3.5">
              <div>
                <label className="text-[10.5px] font-bold uppercase tracking-[1.5px] mb-1.5 block text-char dark:text-cream">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-3.5 py-3 border border-[rgba(26,15,0,0.08)] dark:border-[rgba(255,248,238,0.08)] bg-white dark:bg-[#1C1200] text-[13.5px] text-char dark:text-cream rounded outline-none focus:border-red-600"
                />
              </div>
              <div>
                <label className="text-[10.5px] font-bold uppercase tracking-[1.5px] mb-1.5 block text-char dark:text-cream">
                  Company
                </label>
                <input
                  type="text"
                  placeholder="Company name"
                  className="w-full px-3.5 py-3 border border-[rgba(26,15,0,0.08)] dark:border-[rgba(255,248,238,0.08)] bg-white dark:bg-[#1C1200] text-[13.5px] text-char dark:text-cream rounded outline-none focus:border-red-600"
                />
              </div>
            </div>
            <div className="mb-3.5">
              <label className="text-[10.5px] font-bold uppercase tracking-[1.5px] mb-1.5 block text-char dark:text-cream">
                What are you dealing with?
              </label>
              <textarea
                rows={4}
                placeholder="Tell us about your team situation. The more specific, the better."
                className="w-full px-3.5 py-3 border border-[rgba(26,15,0,0.08)] dark:border-[rgba(255,248,238,0.08)] bg-white dark:bg-[#1C1200] text-[13.5px] text-char dark:text-cream rounded outline-none focus:border-red-600 resize-vertical"
              />
            </div>
            <button className="px-9 py-3.5 text-[14.5px] font-semibold rounded transition-all bg-red-600 text-white">
              Send Message →
            </button>
            <p className="text-xs mt-3.5 text-ink4 dark:text-[rgba(255,248,238,0.22)]">
              We respond within 48 hours · Lagos, Nigeria · info@streetops.ng
            </p>
          </div>

          <div>
            <div className="h-[360px] rounded overflow-hidden mb-6">
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=700&q=80"
                alt="StreetOps team"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-7 rounded-lg border border-[rgba(26,15,0,0.08)] dark:border-[rgba(255,248,238,0.08)] bg-[#FFF2E0] dark:bg-[#241800]">
              <div className="flex items-center gap-2.5 mb-3">
                <div className="w-5.5 h-px bg-red-600" />
                <span className="text-[10px] font-bold tracking-[2.5px] uppercase text-red-600">
                  Get in Touch
                </span>
              </div>
              <p className="text-[13.5px] leading-[1.68] font-light mb-1 text-ink3 dark:text-[rgba(255,248,238,0.42)]">
                📧 info@streetops.ng
              </p>
              <p className="text-[13.5px] leading-[1.68] font-light text-ink3 dark:text-[rgba(255,248,238,0.42)]">
                📍 Lagos, Nigeria
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
