"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { usePathname } from "next/navigation";

export default function ReportBanner() {
  const pathname = usePathname();

  // Optionally hide on the reports page itself if desired,
  // but the user said "visible on all pages".

  return (
    <a
      href="https://ask.streetops.ng/"
      target="_blank"
      className="block w-full bg-[#FFCC00] hover:bg-[#FFD700] transition-colors py-3 px-4 sm:px-6 lg:px-20 text-center relative group overflow-hidden"
    >
      <div className="flex items-center justify-center gap-3 max-w-7xl mx-auto">
        <p className="text-[12px] sm:text-[13px] md:text-[14px] font-medium text-[#4A0000] leading-tight text-center">
          Our May edition of the StreetAsk Survey is live:
          <em className="italic">
            {" "}
            The Paycheck Edition — Are Nigerians Actually Paid Well?{" "}
          </em>{" "}
          Share your experience by taking the survey here
          {/* The report on <em className="italic">The State of SME Productivity about Romance & Relationships at Work</em> is ready, click here to download the report */}
        </p>
        <div className="flex-shrink-0 bg-[#4A0000] p-1 rounded-full transform group-hover:translate-x-1 transition-transform duration-300">
          <ArrowRight className="w-3.5 h-3.5 text-[#FFCC00]" />
        </div>
      </div>
    </a>
  );
}
