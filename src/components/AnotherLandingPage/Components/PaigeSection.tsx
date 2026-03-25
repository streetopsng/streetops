// PaigeSection.tsx
import Link from "next/link";

const PaigeSection = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[auto] lg:min-h-[520px]">
      <div
        className="py-12 sm:py-16 md:py-[72px] px-4 sm:px-6 md:px-10 lg:px-15 flex flex-col justify-center order-2 lg:order-2"
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
            Behavioural Technology
          </span>
        </div>
        <h2 className="font-serif text-[clamp(24px,6vw,28px)] sm:text-[clamp(28px,5vw,38px)] md:text-[clamp(28px,3.8vw,46px)] font-light leading-[1.2] sm:leading-[1.1] tracking-[-0.5px] sm:tracking-[-0.7px] mb-4 sm:mb-[18px] rv rv1">
          Powered by science.
          <br />
          <em className="not-italic" style={{ color: "#C4512A" }}>
            Sustained by technology.
          </em>
        </h2>
        <p
          className="text-[14px] sm:text-[15px] md:text-[15.5px] leading-[1.6] sm:leading-[1.7] md:leading-[1.72] font-light max-w-full lg:max-w-[540px] mb-5 sm:mb-6 md:mb-7 rv rv2"
          style={{ color: "rgba(26, 15, 0, 0.45)" }}
        >
          Every StreetOps engagement is grounded in behavioural science. Our
          platform Paige sustains the work at scale — continuous diagnosis,
          formation tools, and engagement data for every team.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 flex-wrap rv rv3">
          <Link
            href="/products"
            className="px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 text-[12px] sm:text-[12.5px] md:text-[13px] font-semibold rounded transition-all inline-flex items-center justify-center gap-1.5"
            style={{ backgroundColor: "#660000", color: "#FFFFFF" }}
          >
            See Paige →
          </Link>
          <Link
            href="/contact"
            className="px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 text-[12px] sm:text-[12.5px] md:text-[13px] font-semibold rounded transition-all border inline-flex items-center justify-center gap-1.5"
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
        className="relative overflow-hidden h-[300px] sm:h-[400px] lg:h-auto order-1 lg:order-1"
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
