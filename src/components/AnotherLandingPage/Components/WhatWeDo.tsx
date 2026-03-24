import Link from "next/link";

const WhatWeDo = () => {
  return (
    <div className="py-[88px] px-20 rv">
      <div className="flex items-center gap-2.5 mb-[18px]">
        <div className="w-5.5 h-px" style={{ backgroundColor: "#660000" }} />
        <span
          className="text-[10px] font-bold tracking-[2.5px] uppercase"
          style={{ color: "#660000" }}
        >
          What We Do
        </span>
      </div>
      <h2 className="font-serif text-[clamp(28px,3.8vw,46px)] font-light leading-[1.1] tracking-[-0.7px] mb-[18px]">
        Two ways to work
        <br />
        with{" "}
        <em className="not-italic" style={{ color: "#C4512A" }}>
          StreetOps.
        </em>
      </h2>
      <div className="grid grid-cols-2 gap-4 mt-12">
        <div
          className="p-11 border rounded transition-all cursor-pointer hover:-translate-y-0.5 hover:shadow-lg relative overflow-hidden group"
          style={{
            backgroundColor: "#FFFFFF",
            borderColor: "rgba(26, 15, 0, 0.08)",
          }}
        >
          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-red-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
          <div
            className="text-[10px] font-bold tracking-[2px] uppercase mb-3.5"
            style={{ color: "#660000" }}
          >
            01 · Consulting
          </div>
          <h3
            className="font-serif text-[23px] font-normal mb-3 tracking-[-0.2px] leading-[1.2]"
            style={{ color: "#1A0F00" }}
          >
            Human-delivered team performance
          </h3>
          <p
            className="text-[14px] leading-[1.68] font-light mb-6"
            style={{ color: "rgba(26, 15, 0, 0.45)" }}
          >
            Diagnosis-led consulting across five service lines. We diagnose,
            design, deploy, and measure.
          </p>
          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 text-[12.5px] font-semibold transition-all hover:gap-2.5"
            style={{ color: "#660000" }}
          >
            Explore Services →
          </Link>
        </div>
        <div
          className="p-11 border rounded transition-all cursor-pointer hover:-translate-y-0.5 hover:shadow-lg relative overflow-hidden group"
          style={{
            backgroundColor: "#FFFFFF",
            borderColor: "rgba(26, 15, 0, 0.08)",
          }}
        >
          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-red-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
          <div
            className="text-[10px] font-bold tracking-[2px] uppercase mb-3.5"
            style={{ color: "#660000" }}
          >
            02 · Products
          </div>
          <h3
            className="font-serif text-[23px] font-normal mb-3 tracking-[-0.2px] leading-[1.2]"
            style={{ color: "#1A0F00" }}
          >
            Technology built on behavioural science
          </h3>
          <p
            className="text-[14px] leading-[1.68] font-light mb-6"
            style={{ color: "rgba(26, 15, 0, 0.45)" }}
          >
            Paige sustains what consulting initiates — continuous diagnosis and
            formation tools at scale.
          </p>
          <Link
            href="/products"
            className="inline-flex items-center gap-1.5 text-[12.5px] font-semibold transition-all hover:gap-2.5"
            style={{ color: "#660000" }}
          >
            Explore Products →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
