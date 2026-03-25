// LatestInsights.tsx
import Link from "next/link";

const insights = [
  {
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&q=80",
    category: "Behavioural Science",
    title:
      "Why African teams are wired differently — and what that means for performance",
    href: "/insights",
  },
  {
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&q=80",
    category: "Leadership",
    title:
      "The manager multiplier: why one person determines everything about team health",
    href: "/insights",
  },
  {
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80",
    category: "Tools & Frameworks",
    title:
      "The Team Health Self-Assessment — a lite diagnostic for any team leader",
    href: "/tools",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80",
    category: "Street Ask",
    title: "The State of SME Productivity Survey is live — add your voice",
    href: "/ask",
  },
  {
    image:
      "https://images.unsplash.com/photo-1551135049-8a33b5883817?w=600&q=80",
    category: "Research",
    title: "State of SME Productivity in Nigeria — coming 2026",
    href: "/reports",
  },
];

const LatestInsights = () => {
  return (
    <div
      className="py-12 sm:py-16 md:py-20 lg:py-[88px] overflow-hidden"
      style={{ backgroundColor: "#FFF2E0" }}
    >
      <div className="px-4 sm:px-6 md:px-10 lg:px-20 mb-6 sm:mb-8 md:mb-10 rv">
        <div className="flex items-center gap-2.5 mb-3 sm:mb-4 md:mb-[18px]">
          <div
            className="w-5 h-px sm:w-5.5"
            style={{ backgroundColor: "#660000" }}
          />
          <span
            className="text-[9px] sm:text-[10px] font-bold tracking-[2px] sm:tracking-[2.5px] uppercase"
            style={{ color: "#660000" }}
          >
            Latest from StreetOps
          </span>
        </div>
        <h2 className="font-serif text-[clamp(24px,6vw,28px)] sm:text-[clamp(28px,5vw,38px)] md:text-[clamp(28px,3.8vw,46px)] font-light leading-[1.2] sm:leading-[1.1] tracking-[-0.5px] sm:tracking-[-0.7px]">
          Thinking out loud
          <br />
          on{" "}
          <em className="not-italic" style={{ color: "#C4512A" }}>
            African teams.
          </em>
        </h2>
      </div>
      <div
        className="flex gap-3 sm:gap-3.5 px-4 sm:px-6 md:px-10 lg:px-20 overflow-x-auto [&::-webkit-scrollbar]:hidden"
        style={{
          scrollSnapType: "x mandatory",
          msOverflowStyle: "none",
          scrollbarWidth: "none",
        }}
      >
        {insights.map((insight, index) => (
          <Link
            key={index}
            href={insight.href}
            className="flex-shrink-0 w-[260px] sm:w-[280px] md:w-[300px] border rounded overflow-hidden cursor-pointer transition-all hover:-translate-y-0.5 hover:shadow-md scroll-snap-start"
            style={{
              backgroundColor: "#FFFFFF",
              borderColor: "rgba(26, 15, 0, 0.08)",
              scrollSnapAlign: "start",
            }}
          >
            <div
              className="h-[150px] sm:h-[165px] md:h-[180px] overflow-hidden relative"
              style={{ backgroundColor: "#FFF2E0" }}
            >
              <img
                src={insight.image}
                alt=""
                className="w-full h-full object-cover transition-transform duration-400 group-hover:scale-105"
              />
            </div>
            <div className="p-4 sm:p-5 md:p-5.5">
              <div
                className="text-[8px] sm:text-[9px] md:text-[9.5px] font-bold tracking-[1.5px] sm:tracking-[2px] uppercase mb-1.5 sm:mb-2"
                style={{ color: "#C4512A" }}
              >
                {insight.category}
              </div>
              <h4
                className="font-serif text-[14px] sm:text-[15px] md:text-base font-normal leading-[1.3] sm:leading-[1.35] tracking-[-0.1px]"
                style={{ color: "#1A0F00" }}
              >
                {insight.title}
              </h4>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LatestInsights;
