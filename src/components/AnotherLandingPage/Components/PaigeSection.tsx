import Link from "next/link";

const PaigeSection = () => {
  return (
    <div className="grid grid-cols-2 min-h-[520px]">
      <div
        className="py-[72px] px-15 flex flex-col justify-center order-2"
        style={{ backgroundColor: "#FFFFFF" }}
      >
        <div className="flex items-center gap-2.5 mb-[18px] rv">
          <div className="w-5.5 h-px" style={{ backgroundColor: "#660000" }} />
          <span
            className="text-[10px] font-bold tracking-[2.5px] uppercase"
            style={{ color: "#660000" }}
          >
            Behavioural Technology
          </span>
        </div>
        <h2 className="font-serif text-[clamp(28px,3.8vw,46px)] font-light leading-[1.1] tracking-[-0.7px] mb-[18px] rv rv1">
          Powered by science.
          <br />
          <em className="not-italic" style={{ color: "#C4512A" }}>
            Sustained by technology.
          </em>
        </h2>
        <p
          className="text-[15.5px] leading-[1.72] font-light max-w-[540px] mb-7 rv rv2"
          style={{ color: "rgba(26, 15, 0, 0.45)" }}
        >
          Every StreetOps engagement is grounded in behavioural science. Our
          platform Paige sustains the work at scale — continuous diagnosis,
          formation tools, and engagement data for every team.
        </p>
        <div className="flex gap-3 flex-wrap rv rv3">
          <Link
            href="/products"
            className="px-6 py-3 text-[13px] font-semibold rounded transition-all inline-flex items-center gap-1.5"
            style={{ backgroundColor: "#660000", color: "#FFFFFF" }}
          >
            See Paige →
          </Link>
          <Link
            href="/contact"
            className="px-6 py-3 text-[13px] font-semibold rounded transition-all border inline-flex items-center gap-1.5"
            style={{
              backgroundColor: "transparent",
              color: "#660000",
              borderColor: "#660000",
            }}
          >
            Talk to Us
          </Link>
        </div>
      </div>
      <div
        className="relative overflow-hidden order-1"
        style={{ backgroundColor: "#1A0F00" }}
      >
        <img
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=80"
          alt="Technology dashboard"
          className="absolute inset-0 w-full h-full object-cover opacity-80"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to left, rgba(26,15,0,0.3), transparent)",
          }}
        />
      </div>
    </div>
  );
};

export default PaigeSection;
