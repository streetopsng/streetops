import Link from "next/link";

const ProblemSection = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[auto] lg:min-h-[520px]">
      <div
        className="relative overflow-hidden h-[300px] sm:h-[400px] lg:h-auto order-2 lg:order-1"
        style={{ backgroundColor: "#1A0F00" }}
      >
        <img
          src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=900&q=80"
          alt="African team meeting"
          className="absolute inset-0 w-full h-full object-cover opacity-80"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(26,15,0,0.3), transparent)",
          }}
        />
      </div>
      <div
        className="py-12 sm:py-16 md:py-[72px] px-4 sm:px-6 md:px-10 lg:px-15 flex flex-col justify-center order-1 lg:order-2"
        style={{ backgroundColor: "#FFFFFF" }}
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
            The Problem We Solve
          </span>
        </div>
        <h2
          className="font-serif text-[clamp(24px,6vw,30px)] sm:text-[clamp(28px,5vw,40px)] md:text-[clamp(30px,3.8vw,50px)] font-light leading-[1.2] sm:leading-[1.1] md:leading-[1.08] tracking-[-0.5px] sm:tracking-[-0.8px] mb-4 sm:mb-[18px] rv rv1"
          style={{ color: "#1A0F00" }}
        >
          African teams are wired differently.
          <br />
          <em className="not-italic" style={{ color: "#C4512A" }}>
            Most tools don't know that.
          </em>
        </h2>
        <p
          className="text-[14px] sm:text-[15px] md:text-[15.5px] leading-[1.6] sm:leading-[1.7] md:leading-[1.72] font-light max-w-full lg:max-w-[540px] mb-5 sm:mb-6 md:mb-7 rv rv2"
          style={{ color: "rgba(26, 15, 0, 0.45)" }}
        >
          The tools, frameworks, and training programmes that dominate the
          market were built for somewhere else — individualistic, low-context,
          flat. They get shipped here as if the people in Lagos and Nairobi work
          the same way.
        </p>
        <div className="flex flex-col rv rv2">
          {[
            {
              num: "01",
              text: "Deeply relational.",
              desc: "The quality of relationships at work determines almost everything about how a person performs.",
            },
            {
              num: "02",
              text: "High-context.",
              desc: "What is not said is often more important than what is. Flat-culture tools don't account for this.",
            },
            {
              num: "03",
              text: "Feel before name.",
              desc: "Most organisations can feel the problem before they name it. We name it — then fix it.",
            },
          ].map((item) => (
            <div
              key={item.num}
              className="py-3 sm:py-4 md:py-5 border-b first:border-t"
              style={{
                borderBottomColor: "rgba(26, 15, 0, 0.08)",
                borderTopColor: "rgba(26, 15, 0, 0.08)",
              }}
            >
              <div className="flex gap-3 sm:gap-4 md:gap-[18px]">
                <span
                  className="font-serif text-[10px] sm:text-[11px] italic w-[18px] flex-shrink-0 mt-px"
                  style={{ color: "rgba(26, 15, 0, 0.25)" }}
                >
                  {item.num}
                </span>
                <p
                  className="text-[13px] sm:text-[14px] md:text-[14.5px] leading-[1.5] sm:leading-[1.6] md:leading-[1.65] font-light"
                  style={{ color: "rgba(26, 15, 0, 0.55)" }}
                >
                  <strong className="font-medium" style={{ color: "#1A0F00" }}>
                    {item.text}
                  </strong>{" "}
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProblemSection;
