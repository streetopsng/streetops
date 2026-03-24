"use client";

import Link from "next/link";

const Footer = () => {
  const handleServiceClick = (serviceId: string) => {
    window.location.href = `/services/${serviceId}`;
  };

  return (
    <footer
      className="pt-[72px] pb-9 px-20 border-t"
      style={{
        backgroundColor: "#0D0800",
        borderTopColor: "rgba(255,248,238,0.05)",
      }}
    >
      <div className="grid grid-cols-[2fr_1fr_1fr_1.2fr_1fr] gap-11 mb-14">
        <div>
          <div
            className="font-serif text-[19px] font-semibold mb-2.5 tracking-[-0.2px]"
            style={{ color: "#FFF8EE" }}
          >
            StreetOps
          </div>
          <p
            className="text-xs leading-[1.72] font-light mb-5.5"
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
                className="w-[30px] h-[30px] border rounded flex items-center justify-center text-[9.5px] font-bold transition-all hover:-translate-y-0.5"
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

        <div>
          <div
            className="text-[10px] font-bold uppercase tracking-[2px] mb-4"
            style={{ color: "rgba(255,248,238,0.22)" }}
          >
            Company
          </div>
          <Link
            href="/about"
            className="block text-xs mb-2.5 transition-colors hover:text-cream"
            style={{ color: "rgba(255,248,238,0.42)" }}
          >
            Our Story
          </Link>
          <Link
            href="/about#team"
            className="block text-xs mb-2.5 transition-colors hover:text-cream"
            style={{ color: "rgba(255,248,238,0.42)" }}
          >
            The Team
          </Link>
          <Link
            href="/cases"
            className="block text-xs mb-2.5 transition-colors hover:text-cream"
            style={{ color: "rgba(255,248,238,0.42)" }}
          >
            Case Studies
          </Link>
        </div>

        <div>
          <div
            className="text-[10px] font-bold uppercase tracking-[2px] mb-4"
            style={{ color: "rgba(255,248,238,0.22)" }}
          >
            Services
          </div>
          <button
            onClick={() => handleServiceClick("diagnostic")}
            className="block text-xs mb-2.5 transition-colors hover:text-cream w-full text-left"
            style={{ color: "rgba(255,248,238,0.42)" }}
          >
            Team Diagnostic
          </button>
          <button
            onClick={() => handleServiceClick("manager")}
            className="block text-xs mb-2.5 transition-colors hover:text-cream w-full text-left"
            style={{ color: "rgba(255,248,238,0.42)" }}
          >
            Manager Effectiveness
          </button>
          <button
            onClick={() => handleServiceClick("talent")}
            className="block text-xs mb-2.5 transition-colors hover:text-cream w-full text-left"
            style={{ color: "rgba(255,248,238,0.42)" }}
          >
            Talent Integration
          </button>
          <button
            onClick={() => handleServiceClick("culture")}
            className="block text-xs mb-2.5 transition-colors hover:text-cream w-full text-left"
            style={{ color: "rgba(255,248,238,0.42)" }}
          >
            Culture Transformation
          </button>
          <button
            onClick={() => handleServiceClick("experience")}
            className="block text-xs mb-2.5 transition-colors hover:text-cream w-full text-left"
            style={{ color: "rgba(255,248,238,0.42)" }}
          >
            Engagement Design
          </button>
        </div>

        <div>
          <div
            className="text-[10px] font-bold uppercase tracking-[2px] mb-4"
            style={{ color: "rgba(255,248,238,0.22)" }}
          >
            Programs & Products
          </div>
          <Link
            href="/programs/vector"
            className="block text-xs mb-2.5 transition-colors hover:text-cream"
            style={{ color: "rgba(255,248,238,0.42)" }}
          >
            Vector Training Program
          </Link>
          <Link
            href="/products"
            className="block text-xs mb-2.5 transition-colors hover:text-cream"
            style={{ color: "rgba(255,248,238,0.42)" }}
          >
            Paige → usepaige.io
          </Link>
          <div
            className="text-[10px] font-bold uppercase tracking-[2px] mt-5 mb-4"
            style={{ color: "rgba(255,248,238,0.22)" }}
          >
            Street Ask
          </div>
          <Link
            href="/ask"
            className="block text-xs mb-2.5 transition-colors hover:text-cream"
            style={{ color: "rgba(255,248,238,0.42)" }}
          >
            Active Survey
          </Link>
          <Link
            href="/reports"
            className="block text-xs mb-2.5 transition-colors hover:text-cream"
            style={{ color: "rgba(255,248,238,0.42)" }}
          >
            Research & Reports
          </Link>
        </div>

        <div>
          <div
            className="text-[10px] font-bold uppercase tracking-[2px] mb-4"
            style={{ color: "rgba(255,248,238,0.22)" }}
          >
            Resources
          </div>
          <Link
            href="/insights"
            className="block text-xs mb-2.5 transition-colors hover:text-cream"
            style={{ color: "rgba(255,248,238,0.42)" }}
          >
            Insights
          </Link>
          <Link
            href="/reports"
            className="block text-xs mb-2.5 transition-colors hover:text-cream"
            style={{ color: "rgba(255,248,238,0.42)" }}
          >
            Research & Reports
          </Link>
          <Link
            href="/tools"
            className="block text-xs mb-2.5 transition-colors hover:text-cream"
            style={{ color: "rgba(255,248,238,0.42)" }}
          >
            Tools & Frameworks
          </Link>
          <Link
            href="/cases"
            className="block text-xs mb-2.5 transition-colors hover:text-cream"
            style={{ color: "rgba(255,248,238,0.42)" }}
          >
            Case Studies
          </Link>
          <div
            className="text-[10px] font-bold uppercase tracking-[2px] mt-5 mb-4"
            style={{ color: "rgba(255,248,238,0.22)" }}
          >
            Contact
          </div>
          <div
            className="text-xs mb-2.5 cursor-default"
            style={{ color: "rgba(255,248,238,0.42)" }}
          >
            info@streetops.ng
          </div>
          <div
            className="text-xs mb-2.5 cursor-default"
            style={{ color: "rgba(255,248,238,0.42)" }}
          >
            Lagos, Nigeria
          </div>
        </div>
      </div>

      <div
        className="border-t pt-6 flex justify-between items-center"
        style={{ borderTopColor: "rgba(255,248,238,0.06)" }}
      >
        <span
          className="text-[11.5px]"
          style={{ color: "rgba(255,248,238,0.18)" }}
        >
          © 2026 StreetOps · Lagos, Nigeria · All Rights Reserved
        </span>
        <span
          className="text-[11.5px]"
          style={{ color: "rgba(255,248,238,0.18)" }}
        >
          Privacy Policy · Terms
        </span>
      </div>
    </footer>
  );
};

export default Footer;
