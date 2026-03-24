"use client";

import { useRef, useState } from "react";

const industries = [
  { icon: "🏢", name: "Real Estate" },
  { icon: "💳", name: "Fintech" },
  { icon: "🏦", name: "Financial Services" },
  { icon: "🌍", name: "NGOs & Non-profits" },
  { icon: "🏛️", name: "Government" },
  { icon: "🛒", name: "FMCG" },
  { icon: "📦", name: "Logistics" },
  { icon: "🏥", name: "Healthcare" },
];

const Industries = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (scrollRef.current?.offsetLeft || 0));
    setScrollLeft(scrollRef.current?.scrollLeft || 0);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (scrollRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 1.4;
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  return (
    <div
      className="py-[72px] overflow-hidden"
      style={{ backgroundColor: "#FFFFFF" }}
    >
      <div className="px-20 mb-9 rv">
        <div className="flex items-center gap-2.5 mb-[18px]">
          <div className="w-5.5 h-px" style={{ backgroundColor: "#660000" }} />
          <span
            className="text-[10px] font-bold tracking-[2.5px] uppercase"
            style={{ color: "#660000" }}
          >
            Industries We Serve
          </span>
        </div>
        <h2 className="font-serif text-[clamp(28px,3.8vw,46px)] font-light leading-[1.1] tracking-[-0.7px]">
          Built for here.
          <br />
          <em className="not-italic" style={{ color: "#C4512A" }}>
            Across sectors.
          </em>
        </h2>
      </div>
      <div className="relative overflow-hidden">
        <div
          className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
          style={{
            background: "linear-gradient(to right, #FFFFFF, transparent)",
          }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
          style={{
            background: "linear-gradient(to left, #FFFFFF, transparent)",
          }}
        />
        <div
          ref={scrollRef}
          className="flex gap-2.5 px-20 overflow-x-auto scroll-smooth cursor-grab active:cursor-grabbing [&::-webkit-scrollbar]:hidden"
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          style={{
            scrollSnapType: "x mandatory",
            msOverflowStyle: "none",
            scrollbarWidth: "none",
          }}
        >
          {industries.map((industry) => (
            <div
              key={industry.name}
              className="flex-shrink-0 w-[175px] p-[30px_20px] text-center border rounded transition-all cursor-pointer hover:-translate-y-0.5 hover:shadow-lg scroll-snap-start"
              style={{
                backgroundColor: "#FFF2E0",
                borderColor: "rgba(26, 15, 0, 0.08)",
                scrollSnapAlign: "start",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#660000";
                e.currentTarget.style.borderColor = "#660000";
                const text = e.currentTarget.querySelector(
                  ".industry-name",
                ) as HTMLElement;
                if (text) text.style.color = "#FFFFFF";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#FFF2E0";
                e.currentTarget.style.borderColor = "rgba(26, 15, 0, 0.08)";
                const text = e.currentTarget.querySelector(
                  ".industry-name",
                ) as HTMLElement;
                if (text) text.style.color = "rgba(26, 15, 0, 0.65)";
              }}
            >
              <span className="text-2xl mb-3 block">{industry.icon}</span>
              <span
                className="industry-name text-xs font-semibold transition-colors"
                style={{ color: "rgba(26, 15, 0, 0.65)" }}
              >
                {industry.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Industries;
