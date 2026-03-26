// Methodology.tsx
const Methodology = () => {
  return (
    <div
      className="py-12 sm:py-16 md:py-20 lg:py-[88px] px-4 sm:px-6 md:px-10 lg:px-20"
      style={{ backgroundColor: "#FFF2E0" }}
    >
      <div className="flex items-center gap-2.5 mb-4 sm:mb-[18px] rv">
        <div
          className="w-5 h-px sm:w-5.5"
          style={{ backgroundColor: "#660000" }}
        />
        <span
          className="text-[9px] sm:text-[10px] font-bold tracking-[2px] sm:tracking-[2.5px] uppercase"
          style={{ color: "#660000" }}
        >
          Our Methodology
        </span>
      </div>
      <h2 className="font-serif text-[clamp(24px,6vw,28px)] sm:text-[clamp(28px,5vw,38px)] md:text-[clamp(28px,3.8vw,46px)] font-light leading-[1.2] sm:leading-[1.1] tracking-[-0.5px] sm:tracking-[-0.7px] mb-4 sm:mb-[18px] rv rv1">
        One framework.
        <br />
        <em className="not-italic" style={{ color: "#C4512A" }}>
          Every engagement.
        </em>
      </h2>
      <p className="lg:w-3/5 md:w-4/5 w-full text-black/60">
        Every StreetOps engagement is anchored in the Social Health Index, our
        framework for assessing team health across the dimensions that matter
        most in African workplace contexts. It measures the relational and the
        productive together. How a team connects and how that shows up in how
        they work.
      </p>
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border rounded overflow-hidden mt-8 sm:mt-10 md:mt-12 rv rv2"
        style={{ borderColor: "rgba(26, 15, 0, 0.08)" }}
      >
        {[
          {
            title: "Diagnose",
            subtitle: "Name what is broken",
            desc: "Diagnose  Evidence-based assessment across all dimensions. No assumptions.",
          },
          {
            title: "Design",
            subtitle: "Build the right fix",
            desc: "Design  The intervention built around what the diagnosis surfaces.",
          },
          {
            title: "Deploy",
            subtitle: "Execute with precision",
            desc: "Deploy  Facilitation built for how African teams communicate and respond.",
          },
          {
            title: "Measure",
            subtitle: "Prove it worked",
            desc: " Measure  Re-assessment after every engagement.",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="p-6 sm:p-7 md:p-8 lg:p-9 border-b text-burnt-brown sm:border-b-0 sm:border-r last:border-r-0 transition-all hover:bg-red-50 dark:hover:bg-red-900/15"
            style={{
              borderRightColor: "rgba(26, 15, 0, 0.08)",
              borderBottomColor: "rgba(26, 15, 0, 0.08)",
            }}
          >
            {/* <div
              className="font-serif text-[10px] sm:text-[11px] italic mb-3 sm:mb-3.5 flex items-center gap-2"
              style={{ color: "#C4512A" }}
            >
              <span
                className="w-4 sm:w-[18px] h-px"
                style={{ backgroundColor: "#C4512A" }}
              />
              {item.title}
            </div>
            <h3
              className="font-serif text-[17px] sm:text-[18px] md:text-[19px] font-normal mb-1.5 sm:mb-2 tracking-[-0.2px]"
              style={{ color: "#1A0F00" }}
            >
              {item.subtitle}
            </h3> */}
            <p
              className="text-[12px] sm:text-[12.5px] md:text-[13px] leading-[1.5] sm:leading-[1.6] md:leading-[1.62] font-light"
              // style={{ color: "rgba(26, 15, 0, 0.45)" }}
            >
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Methodology;
