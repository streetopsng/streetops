// Footer.tsx
"use client";

import Link from "next/link";

const Footer = () => {
  const handleServiceClick = (serviceId: string) => {
    window.location.href = `/services/${serviceId}`;
  };

  return (
    <footer
      className="pt-12 sm:pt-16 md:pt-[72px] pb-6 sm:pb-8 md:pb-9 px-4 sm:px-6 md:px-10 lg:px-20 border-t"
      style={{
        backgroundColor: "#0D0800",
        borderTopColor: "rgba(255,248,238,0.05)",
      }}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 md:gap-11 mb-8 sm:mb-10 md:mb-14">
        {/* Brand Column */}
        <div className="sm:col-span-2 lg:col-span-1">
          <div
            className="font-serif text-[18px] sm:text-[19px] font-semibold mb-2 sm:mb-2.5 tracking-[-0.2px]"
            style={{ color: "#FFF8EE" }}
          >
            StreetOps
          </div>
          <p
            className="text-[11px] sm:text-xs leading-[1.6] sm:leading-[1.72] font-light mb-4 sm:mb-5.5 max-w-sm"
            style={{ color: "rgba(255,248,238,0.3)" }}
          >
            Africa's team performance company. Social Productivity — the idea
            that how a team relates to one another directly determines how well
            they produce together.
          </p>
          <div className="flex gap-1.5">
            {["in", "𝕏", "ig", "tk"].map((social, index) => (
              <button
                key={index}
                className="w-7 sm:w-[30px] h-7 sm:h-[30px] border rounded flex items-center justify-center text-[8px] sm:text-[9.5px] font-bold transition-all hover:-translate-y-0.5"
                style={{
                  backgroundColor: "rgba(255,248,238,0.05)",
                  borderColor: "rgba(255,248,238,0.08)",
                  color: "rgba(255,248,238,0.35)",
                }}
              >
                {social}
              </button>
            ))}
          </div>
        </div>

        {/* Company Column */}
        <div>
          <div
            className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[1.5px] sm:tracking-[2px] mb-3 sm:mb-4"
            style={{ color: "rgba(255,248,238,0.22)" }}
          >
            Company
          </div>
          <Link
            href="/about"
            className="block text-[11px] sm:text-xs mb-2 sm:mb-2.5 transition-colors hover:text-cream"
            style={{ color: "rgba(255,248,238,0.42)" }}
          >
            Our Story
          </Link>
          <Link
            href="/about#team"
            className="block text-[11px] sm:text-xs mb-2 sm:mb-2.5 transition-colors hover:text-cream"
            style={{ color: "rgba(255,248,238,0.42)" }}
          >
            The Team
          </Link>
          <Link
            href="/cases"
            className="block text-[11px] sm:text-xs mb-2 sm:mb-2.5 transition-colors hover:text-cream"
            style={{ color: "rgba(255,248,238,0.42)" }}
          >
            Case Studies
          </Link>
        </div>

        {/* Services Column */}
        <div>
          <div
            className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[1.5px] sm:tracking-[2px] mb-3 sm:mb-4"
            style={{ color: "rgba(255,248,238,0.22)" }}
          >
            Services
          </div>
          <button
            onClick={() => handleServiceClick("diagnostic")}
            className="block text-[11px] sm:text-xs mb-2 sm:mb-2.5 transition-colors hover:text-cream w-full text-left"
            style={{ color: "rgba(255,248,238,0.42)" }}
          >
            Team Diagnostic
          </button>
          <button
            onClick={() => handleServiceClick("manager")}
            className="block text-[11px] sm:text-xs mb-2 sm:mb-2.5 transition-colors hover:text-cream w-full text-left"
            style={{ color: "rgba(255,248,238,0.42)" }}
          >
            Manager Effectiveness
          </button>
          <button
            onClick={() => handleServiceClick("talent")}
            className="block text-[11px] sm:text-xs mb-2 sm:mb-2.5 transition-colors hover:text-cream w-full text-left"
            style={{ color: "rgba(255,248,238,0.42)" }}
          >
            Talent Integration
          </button>
          <button
            onClick={() => handleServiceClick("culture")}
            className="block text-[11px] sm:text-xs mb-2 sm:mb-2.5 transition-colors hover:text-cream w-full text-left"
            style={{ color: "rgba(255,248,238,0.42)" }}
          >
            Culture Transformation
          </button>
          <button
            onClick={() => handleServiceClick("experience")}
            className="block text-[11px] sm:text-xs mb-2 sm:mb-2.5 transition-colors hover:text-cream w-full text-left"
            style={{ color: "rgba(255,248,238,0.42)" }}
          >
            Engagement Design
          </button>
        </div>

        {/* Programs & Products Column */}
        <div>
          <div
            className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[1.5px] sm:tracking-[2px] mb-3 sm:mb-4"
            style={{ color: "rgba(255,248,238,0.22)" }}
          >
            Programs & Products
          </div>
          <Link
            href="/programs/vector"
            className="block text-[11px] sm:text-xs mb-2 sm:mb-2.5 transition-colors hover:text-cream"
            style={{ color: "rgba(255,248,238,0.42)" }}
          >
            Vector Training Program
          </Link>
          <Link
            href="/products"
            className="block text-[11px] sm:text-xs mb-2 sm:mb-2.5 transition-colors hover:text-cream"
            style={{ color: "rgba(255,248,238,0.42)" }}
          >
            Paige → usepaige.io
          </Link>
          <div
            className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[1.5px] sm:tracking-[2px] mt-4 sm:mt-5 mb-3 sm:mb-4"
            style={{ color: "rgba(255,248,238,0.22)" }}
          >
            Street Ask
          </div>
          <Link
            href="/ask"
            className="block text-[11px] sm:text-xs mb-2 sm:mb-2.5 transition-colors hover:text-cream"
            style={{ color: "rgba(255,248,238,0.42)" }}
          >
            Active Survey
          </Link>
          <Link
            href="/reports"
            className="block text-[11px] sm:text-xs mb-2 sm:mb-2.5 transition-colors hover:text-cream"
            style={{ color: "rgba(255,248,238,0.42)" }}
          >
            Research & Reports
          </Link>
        </div>

        {/* Resources & Contact Column */}
        <div>
          <div
            className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[1.5px] sm:tracking-[2px] mb-3 sm:mb-4"
            style={{ color: "rgba(255,248,238,0.22)" }}
          >
            Resources
          </div>
          <Link
            href="/insights"
            className="block text-[11px] sm:text-xs mb-2 sm:mb-2.5 transition-colors hover:text-cream"
            style={{ color: "rgba(255,248,238,0.42)" }}
          >
            Insights
          </Link>
          <Link
            href="/reports"
            className="block text-[11px] sm:text-xs mb-2 sm:mb-2.5 transition-colors hover:text-cream"
            style={{ color: "rgba(255,248,238,0.42)" }}
          >
            Research & Reports
          </Link>
          <Link
            href="/tools"
            className="block text-[11px] sm:text-xs mb-2 sm:mb-2.5 transition-colors hover:text-cream"
            style={{ color: "rgba(255,248,238,0.42)" }}
          >
            Tools & Frameworks
          </Link>
          <Link
            href="/cases"
            className="block text-[11px] sm:text-xs mb-2 sm:mb-2.5 transition-colors hover:text-cream"
            style={{ color: "rgba(255,248,238,0.42)" }}
          >
            Case Studies
          </Link>
          <div
            className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[1.5px] sm:tracking-[2px] mt-4 sm:mt-5 mb-3 sm:mb-4"
            style={{ color: "rgba(255,248,238,0.22)" }}
          >
            Contact
          </div>
          <div
            className="text-[11px] sm:text-xs mb-2 cursor-default"
            style={{ color: "rgba(255,248,238,0.42)" }}
          >
            info@streetops.ng
          </div>
          <div
            className="text-[11px] sm:text-xs mb-2 cursor-default"
            style={{ color: "rgba(255,248,238,0.42)" }}
          >
            Lagos, Nigeria
          </div>
        </div>
      </div>

      <div
        className="border-t pt-4 sm:pt-5 md:pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-0"
        style={{ borderTopColor: "rgba(255,248,238,0.06)" }}
      >
        <span
          className="text-[10px] sm:text-[11.5px] text-center sm:text-left"
          style={{ color: "rgba(255,248,238,0.18)" }}
        >
          © 2026 StreetOps · Lagos, Nigeria · All Rights Reserved
        </span>
        <span
          className="text-[10px] sm:text-[11.5px]"
          style={{ color: "rgba(255,248,238,0.18)" }}
        >
          Privacy Policy · Terms
        </span>
      </div>
    </footer>
  );
};

export default Footer;
