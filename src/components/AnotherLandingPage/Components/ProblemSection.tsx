import Link from "next/link";

const ProblemSection = () => {
  return (
    <div className="grid grid-cols-2 min-h-[520px]">
      <div
        className="relative overflow-hidden"
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
        className="py-[72px] px-15 flex flex-col justify-center"
        style={{ backgroundColor: "#FFFFFF" }}
      >
        <div className="flex items-center gap-2.5 mb-[18px] rv">
          <div className="w-5.5 h-px" style={{ backgroundColor: "#660000" }} />
          <span
            className="text-[10px] font-bold tracking-[2.5px] uppercase"
            style={{ color: "#660000" }}
          >
            The Problem We Solve
          </span>
        </div>
        <h2
          className="font-serif text-[clamp(30px,3.8vw,50px)] font-light leading-[1.08] tracking-[-0.8px] mb-[18px] rv rv1"
          style={{ color: "#1A0F00" }}
        >
          African teams are wired differently.
          <br />
          <em className="not-italic" style={{ color: "#C4512A" }}>
            Most tools don't know that.
          </em>
        </h2>
        <p
          className="text-[15.5px] leading-[1.72] font-light max-w-[540px] mb-7 rv rv2"
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
              className="py-5 border-b first:border-t"
              style={{
                borderBottomColor: "rgba(26, 15, 0, 0.08)",
                borderTopColor: "rgba(26, 15, 0, 0.08)",
              }}
            >
              <div className="flex gap-[18px]">
                <span
                  className="font-serif text-[11px] italic w-[18px] flex-shrink-0 mt-px"
                  style={{ color: "rgba(26, 15, 0, 0.25)" }}
                >
                  {item.num}
                </span>
                <p
                  className="text-[14.5px] leading-[1.65] font-light"
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
