// Testimonials.tsx
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
    <div
      className="py-12 sm:py-16 md:py-20 lg:py-[88px] px-4 sm:px-6 md:px-10 lg:px-20 rv"
      style={{ backgroundColor: "#FFF2E0" }}
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
          What Clients Say
        </span>
      </div>
      <h2 className="font-serif text-[clamp(24px,6vw,28px)] sm:text-[clamp(28px,5vw,38px)] md:text-[clamp(28px,3.8vw,46px)] font-light leading-[1.2] sm:leading-[1.1] tracking-[-0.5px] sm:tracking-[-0.7px] mb-4 sm:mb-[18px]">
        Results,
        <br />
        <em className="not-italic" style={{ color: "#C4512A" }}>
          not promises.
        </em>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 sm:mt-10 md:mt-12 items-start">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`p-5 sm:p-6 md:p-8 border rounded transition-all hover:border-terra hover:shadow-md ${
              index === 1 ? "md:mt-7" : ""
            }`}
            style={{
              backgroundColor: "#FFFFFF",
              borderColor: "rgba(26, 15, 0, 0.08)",
            }}
          >
            <span
              className="font-serif text-3xl sm:text-4xl md:text-5xl leading-none block -mb-1.5 italic"
              style={{ color: "rgba(196,81,42,0.15)" }}
            >
              "
            </span>
            <p
              className="text-[13px] sm:text-[13.5px] md:text-[14px] leading-[1.6] sm:leading-[1.7] md:leading-[1.72] font-light italic mb-4 sm:mb-5"
              style={{ color: "rgba(26, 15, 0, 0.65)" }}
            >
              {testimonial.quote}
            </p>
            <div
              className="text-[11px] sm:text-xs font-semibold"
              style={{ color: "#1A0F00" }}
            >
              {testimonial.name}
            </div>
            <div
              className="text-[10px] sm:text-[11.5px] mt-0.5"
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
