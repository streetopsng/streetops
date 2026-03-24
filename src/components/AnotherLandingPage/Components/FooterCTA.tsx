import Link from "next/link";

const FooterCTA = () => {
  return (
    <div
      className="py-25 px-20 text-center relative overflow-hidden"
      style={{ backgroundColor: "#1A0F00" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 80% at 50% 100%, rgba(102,0,0,0.3), transparent)",
        }}
      />
      <h2
        className="font-serif text-[clamp(28px,4.5vw,52px)] font-[200] leading-[1.12] mb-[18px] tracking-[-1px] relative z-10"
        style={{ color: "#FFF8EE" }}
      >
        Your team has a problem.
        <br />
        <em className="not-italic">We can name it.</em>
      </h2>
      <p
        className="text-base mb-9 font-light relative z-10"
        style={{ color: "rgba(255,248,238,0.42)" }}
      >
        Most organisations feel the problem before they name it. We name it with
        precision — then fix it.
      </p>
      <Link
        href="/contact"
        className="inline-block px-8.5 py-3.5 text-[14.5px] font-semibold rounded transition-all relative z-10"
        style={{ backgroundColor: "#660000", color: "#FFFFFF" }}
      >
        Work With Us →
      </Link>
    </div>
  );
};

export default FooterCTA;
