const Stats = () => {
  const stats = [
    { number: "40", suffix: "+", label: "Organisations Served" },
    { number: "6", suffix: "+", label: "Industries Covered" },
    { number: "500", suffix: "+", label: "Employees Reached" },
    { number: "5", suffix: "", label: "Service Lines" },
  ];

  return (
    <div className="py-[88px] px-20 rv" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="flex items-center gap-2.5 mb-[18px]">
        <div className="w-5.5 h-px" style={{ backgroundColor: "#660000" }} />
        <span
          className="text-[10px] font-bold tracking-[2.5px] uppercase"
          style={{ color: "#660000" }}
        >
          Our Impact
        </span>
      </div>
      <h2 className="font-serif text-[clamp(28px,3.8vw,46px)] font-light leading-[1.1] tracking-[-0.7px] mb-[18px]">
        Results that
        <br />
        <em className="not-italic" style={{ color: "#C4512A" }}>
          speak for themselves.
        </em>
      </h2>
      <div
        className="grid grid-cols-4 gap-0 border rounded overflow-hidden mt-13"
        style={{ borderColor: "rgba(26, 15, 0, 0.08)" }}
      >
        {stats.map((stat, index) => (
          <div
            key={index}
            className="py-12 px-9 text-center border-r last:border-r-0 transition-all hover:bg-red-50 dark:hover:bg-red-900/10"
            style={{ borderRightColor: "rgba(26, 15, 0, 0.08)" }}
          >
            <div
              className="font-serif text-[52px] font-[200] leading-none mb-2 tracking-[-2px] flex items-baseline justify-center gap-0.5"
              style={{ color: "#1A0F00" }}
            >
              {stat.number}
              <span
                style={{ color: "#660000", fontSize: "28px", fontWeight: 400 }}
              >
                {stat.suffix}
              </span>
            </div>
            <div
              className="text-xs font-medium"
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
