const testimonials = [
  {
    quote:
      "[Client testimonial — specific, outcome-focused, from a real engagement. Replace with actual client words.]",
    name: "Client Name",
    role: "Role · Company",
  },
  {
    quote:
      "[Client testimonial — specific, outcome-focused, from a real engagement. Replace with actual client words.]",
    name: "Client Name",
    role: "Role · Company",
  },
  {
    quote:
      "[Client testimonial — specific, outcome-focused, from a real engagement. Replace with actual client words.]",
    name: "Client Name",
    role: "Role · Company",
  },
];

const Testimonials = () => {
  return (
    <div className="py-[88px] px-20 rv" style={{ backgroundColor: "#FFF2E0" }}>
      <div className="flex items-center gap-2.5 mb-[18px]">
        <div className="w-5.5 h-px" style={{ backgroundColor: "#660000" }} />
        <span
          className="text-[10px] font-bold tracking-[2.5px] uppercase"
          style={{ color: "#660000" }}
        >
          What Clients Say
        </span>
      </div>
      <h2 className="font-serif text-[clamp(28px,3.8vw,46px)] font-light leading-[1.1] tracking-[-0.7px] mb-[18px]">
        Results,
        <br />
        <em className="not-italic" style={{ color: "#C4512A" }}>
          not promises.
        </em>
      </h2>
      <div className="grid grid-cols-3 gap-4 mt-12 items-start">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`p-8 border rounded transition-all hover:border-terra hover:shadow-md ${
              index === 1 ? "mt-7" : ""
            }`}
            style={{
              backgroundColor: "#FFFFFF",
              borderColor: "rgba(26, 15, 0, 0.08)",
            }}
          >
            <span
              className="font-serif text-5xl leading-none block -mb-1.5 italic"
              style={{ color: "rgba(196,81,42,0.15)" }}
            >
              "
            </span>
            <p
              className="text-[14px] leading-[1.72] font-light italic mb-5"
              style={{ color: "rgba(26, 15, 0, 0.65)" }}
            >
              {testimonial.quote}
            </p>
            <div className="text-xs font-semibold" style={{ color: "#1A0F00" }}>
              {testimonial.name}
            </div>
            <div
              className="text-[11.5px] mt-0.5"
              style={{ color: "rgba(26, 15, 0, 0.28)" }}
            >
              {testimonial.role}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
