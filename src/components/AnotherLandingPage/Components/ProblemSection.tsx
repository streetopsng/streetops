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
          className="font-serif lg:text-[2.6rem] md:text-[2.8rem] text-[1.5rem] font-light leading-[1.2] sm:leading-[1.1] md:leading-[1.08] tracking-[-0.5px] sm:tracking-[-0.8px] mb-4 sm:mb-[18px] rv rv1"
          style={{ color: "#1A0F00" }}
        >
          Most team issues go unnamed for too long.
          <br />
          <em className="not-italic" style={{ color: "#C4512A" }}>
            Which grow into wicked problems
          </em>
        </h2>
        <p
          className="text-[14px] sm:text-[15px] md:text-[15.5px] leading-[1.6] sm:leading-[1.7] md:leading-[1.72] font-light max-w-full lg:max-w-[540px] mb-5 sm:mb-6 md:mb-7 rv rv2"
          style={{ color: "rgba(26, 15, 0, 0.45)" }}
        >
          Organisations feel when something is off long before they can describe
          it. How people communicate. How decisions get made. How a team that
          used to work well together stops working well.
        </p>
        <div
          // style={{ color: "rgba(26, 15, 0, 0.45)" }}
          className="flex flex-col rv rv2 text-burnt-brown"
        >
          We give that feeling a name. Then we fix what it describes.
          <br />
          Our work is specific to how African teams are wired. The depth of
          relationships, the role of hierarchy, the way trust forms here. Other
          tools and frameworks have their place. We fill the gap they leave in
          this context.
        </div>
      </div>
    </div>
  );
};

export default ProblemSection;
