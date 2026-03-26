// Industries.tsx
"use client";

import { useRef, useState } from "react";

const industries = [
  {
    icon: "🏢",
    name: "Real Estate",
    imagelink:
      "https://res.cloudinary.com/deylyllwd/image/upload/v1774484965/home_elvzve.png",
  },
  {
    icon: "💳",
    name: "Fintech",
    imagelink:
      "https://res.cloudinary.com/deylyllwd/image/upload/v1774485462/wallet_rlxdf1.png",
  },
  {
    icon: "🏦",
    name: "Financial Services",
    imagelink:
      "https://res.cloudinary.com/deylyllwd/image/upload/v1774484965/home_elvzve.png",
  },
  {
    icon: "🌍",
    name: "NGOs & Non-profits",
    imagelink:
      "https://res.cloudinary.com/deylyllwd/image/upload/v1774485462/world_kmugta.png",
  },
  {
    icon: "🏛️",
    name: "Government",
    imagelink:
      "https://res.cloudinary.com/deylyllwd/image/upload/v1774485463/gov_umbb0z.png",
  },
  {
    icon: "🛒",
    name: "FMCG",
    imagelink:
      "https://res.cloudinary.com/deylyllwd/image/upload/v1774485462/cart_yapgza.png",
  },
  {
    icon: "📦",
    name: "Logistics",
    imagelink:
      "https://res.cloudinary.com/deylyllwd/image/upload/v1774485461/Box_khkldd.png",
  },
  {
    icon: "🏥",
    name: "Healthcare",
    imagelink:
      "https://res.cloudinary.com/deylyllwd/image/upload/v1774485461/building_uyhpqh.png",
  },
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
      className="py-12 sm:py-16 md:py-[72px] overflow-hidden"
      style={{ backgroundColor: "#FFFFFF" }}
    >
      <div className="px-4 sm:px-6 md:px-10 lg:px-20 mb-6 sm:mb-7 md:mb-9 rv">
        <div className="flex items-center gap-2.5 mb-3 sm:mb-4 md:mb-[18px]">
          <div
            className="w-5 h-px sm:w-5.5"
            style={{ backgroundColor: "#660000" }}
          />
          <span
            className="text-[9px] sm:text-[10px] font-bold tracking-[2px] sm:tracking-[2.5px] uppercase"
            style={{ color: "#660000" }}
          >
            Industries We Serve
          </span>
        </div>
        <h2 className="font-serif text-[clamp(24px,6vw,28px)] sm:text-[clamp(28px,5vw,38px)] md:text-[clamp(28px,3.8vw,46px)] font-light leading-[1.2] sm:leading-[1.1] tracking-[-0.5px] sm:tracking-[-0.7px]">
          Built for here.
          <br />
          <em className="not-italic" style={{ color: "#C4512A" }}>
            Across sectors.
          </em>
        </h2>
      </div>
      <div className="relative overflow-hidden">
        <div
          className="absolute left-0 top-0 bottom-0 w-12 sm:w-16 md:w-20 z-10 pointer-events-none"
          style={{
            background: "linear-gradient(to right, #FFFFFF, transparent)",
          }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-12 sm:w-16 md:w-20 z-10 pointer-events-none"
          style={{
            background: "linear-gradient(to left, #FFFFFF, transparent)",
          }}
        />
        <div
          ref={scrollRef}
          className="flex gap-2 sm:gap-2.5 px-4 sm:px-6 md:px-10 lg:px-20 overflow-x-auto scroll-smooth cursor-grab active:cursor-grabbing [&::-webkit-scrollbar]:hidden"
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
              className="flex-shrink-0 w-[150px] sm:w-[165px] md:w-[175px] p-[20px_15px] sm:p-[25px_18px] md:p-[30px_20px] text-center border rounded transition-all cursor-pointer hover:-translate-y-0.5 hover:shadow-lg scroll-snap-start"
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
              {/* {industry.name == "Financial Services" && (
                <span className="text-xl sm:text-2xl mb-2 sm:mb-3 block">
                  {industry.icon}
                </span>
              )} */}
              {
                <div className="flex items-center justify-center">
                  <img
                    className="h-7 w-7 block"
                    src={industry.imagelink}
                    alt={industry.imagelink}
                  />
                </div>
              }
              <span
                className="industry-name text-[11px] sm:text-xs font-semibold transition-colors"
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
