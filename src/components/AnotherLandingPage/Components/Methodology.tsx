const Methodology = () => {
  return (
    <div className="py-[88px] px-20" style={{ backgroundColor: "#FFF2E0" }}>
      <div className="flex items-center gap-2.5 mb-[18px] rv">
        <div className="w-5.5 h-px" style={{ backgroundColor: "#660000" }} />
        <span
          className="text-[10px] font-bold tracking-[2.5px] uppercase"
          style={{ color: "#660000" }}
        >
          How We Work
        </span>
      </div>
      <h2 className="font-serif text-[clamp(28px,3.8vw,46px)] font-light leading-[1.1] tracking-[-0.7px] mb-[18px] rv rv1">
        One methodology.
        <br />
        <em className="not-italic" style={{ color: "#C4512A" }}>
          Every engagement.
        </em>
      </h2>
      <div
        className="grid grid-cols-4 gap-0 border rounded overflow-hidden mt-12 rv rv2"
        style={{ borderColor: "rgba(26, 15, 0, 0.08)" }}
      >
        {[
          {
            title: "Diagnose",
            subtitle: "Name what is broken",
            desc: "Evidence-based assessment across all dimensions. No guessing.",
          },
          {
            title: "Design",
            subtitle: "Build the right fix",
            desc: "The intervention designed around specific gaps found — not pulled off a shelf.",
          },
          {
            title: "Deploy",
            subtitle: "Execute with precision",
            desc: "Human facilitation built for African workplace culture.",
          },
          {
            title: "Measure",
            subtitle: "Prove it worked",
            desc: "Re-diagnosis after every engagement. We do not deliver and disappear.",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="p-9 border-r last:border-r-0 transition-all hover:bg-red-50 dark:hover:bg-red-900/15"
            style={{ borderRightColor: "rgba(26, 15, 0, 0.08)" }}
          >
            <div
              className="font-serif text-[11px] italic mb-3.5 flex items-center gap-2"
              style={{ color: "#C4512A" }}
            >
              <span
                className="w-[18px] h-px"
                style={{ backgroundColor: "#C4512A" }}
              />
              {item.title}
            </div>
            <h3
              className="font-serif text-[19px] font-normal mb-2 tracking-[-0.2px]"
              style={{ color: "#1A0F00" }}
            >
              {item.subtitle}
            </h3>
            <p
              className="text-[13px] leading-[1.62] font-light"
              style={{ color: "rgba(26, 15, 0, 0.45)" }}
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
