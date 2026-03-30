// Stats.tsx
const Stats = () => {
  const stats = [
    { number: "40", suffix: "+", label: "Organisations Served" },
    { number: "6", suffix: "+", label: "Industries Covered" },
    { number: "500", suffix: "+", label: "Employees Reached" },
    { number: "5", suffix: "", label: "Service Lines" },
  ];

  return (
    <div
      className="py-12 sm:py-16 md:py-20 lg:py-[88px] px-4 sm:px-6 md:px-10 lg:px-20 rv"
      style={{ backgroundColor: "#FFFFFF" }}
    >
      <div className="flex items-center gap-2.5 mb-4 sm:mb-[18px]">
        <div
          className="w-5 h-px sm:w-5.5"
          style={{ backgroundColor: "#660000" }}
        />
        <span
          className="text-[9px] sm:text-[10px] font-bold tracking-[2px] sm:tracking-[2.5px] uppercase"
          style={{ color: "#660000" }}
        >
          Our Impact
        </span>
      </div>
      <h2 className="font-serif text-[clamp(24px,6vw,28px)] sm:text-[clamp(28px,5vw,38px)] md:text-[clamp(28px,3.8vw,46px)] font-light leading-[1.2] sm:leading-[1.1] tracking-[-0.5px] sm:tracking-[-0.7px] mb-4 sm:mb-[18px]">
        Results that
        <br />
        <em className="not-italic" style={{ color: "#C4512A" }}>
          speak for themselves.
        </em>
      </h2>
      <div
        className="grid grid-cols-2 lg:grid-cols-4 gap-0 border rounded overflow-hidden mt-8 sm:mt-10 md:mt-13"
        style={{ borderColor: "rgba(26, 15, 0, 0.08)" }}
      >
        {stats.map((stat, index) => (
          <div
            key={index}
            className="py-8 sm:py-10 md:py-12 px-4 sm:px-6 md:px-9 text-center border-r  last:border-r-0 border-b sm:border-b-0 transition-all hover:bg-red-50 dark:hover:bg-red-900/10"
            style={{
              borderRightColor: "rgba(26, 15, 0, 0.08)",
              borderBottomColor: "rgba(26, 15, 0, 0.08)",
            }}
          >
            <div
              className="font-serif text-[36px] sm:text-[44px] md:text-[52px] font-[200] leading-none mb-1 sm:mb-2 tracking-[-1px] sm:tracking-[-2px] flex items-baseline justify-center gap-0.5"
              style={{ color: "#1A0F00" }}
            >
              {stat.number}
              <span
                style={{ color: "#660000", fontSize: "20px", fontWeight: 400 }}
              >
                {stat.suffix}
              </span>
            </div>
            <div
              className="text-[10px] sm:text-xs font-medium"
              style={{ color: "rgba(26, 15, 0, 0.28)" }}
            >
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
