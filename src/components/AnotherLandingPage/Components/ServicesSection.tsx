import Link from "next/link";

const services = [
  {
    id: "diagnostic",
    number: "01",
    title: "Team Diagnostic",
    description:
      "You can feel the problem. We name it — with evidence, priority, and a plan.",
    tags: ["Assessment", "Culture Baseline", "Blind Spots"],
    featured: true,
  },
  {
    id: "manager",
    number: "02",
    title: "Manager Effectiveness Training",
    description:
      "Managers account for 70% of engagement variance. We close the gap.",
    tags: ["New Managers", "Coaching"],
    featured: false,
  },
  {
    id: "talent",
    number: "03",
    title: "Talent Integration Advisory",
    description:
      "Good hires leave by month four. We build the infrastructure that keeps them.",
    tags: ["Onboarding", "Integration"],
    featured: false,
  },
  {
    id: "culture",
    number: "04",
    title: "Culture & Process Transformation",
    description:
      "Culture is not what you claim. It is what your systems reinforce.",
    tags: ["Values", "Identity"],
    featured: false,
  },
  {
    id: "experience",
    number: "05",
    title: "Team Engagement & Experience Design",
    description:
      "Every experience tied to a diagnosis. Every outcome measured.",
    tags: ["Bonding", "Events"],
    featured: false,
  },
];

const ServicesSection = () => {
  return (
    <div className="py-[88px] px-20 rv">
      <div className="grid grid-cols-2 gap-13 items-end mb-11">
        <div>
          <div className="flex items-center gap-2.5 mb-[18px]">
            <div
              className="w-5.5 h-px"
              style={{ backgroundColor: "#660000" }}
            />
            <span
              className="text-[10px] font-bold tracking-[2.5px] uppercase"
              style={{ color: "#660000" }}
            >
              Our Services
            </span>
          </div>
          <h2 className="font-serif text-[clamp(28px,3.8vw,46px)] font-light leading-[1.1] tracking-[-0.7px]">
            Five services.
            <br />
            <em className="not-italic" style={{ color: "#C4512A" }}>
              One methodology.
            </em>
          </h2>
        </div>
        <div>
          <p
            className="text-[15.5px] leading-[1.72] font-light max-w-[380px]"
            style={{ color: "rgba(26, 15, 0, 0.45)" }}
          >
            Diagnosis-led. Outcome-measured. In person or virtually.
          </p>
          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 text-[12.5px] font-semibold transition-all hover:gap-2.5 mt-[18px]"
            style={{ color: "#660000" }}
          >
            All Services →
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-3 auto-rows-auto gap-3 rv rv1">
        {services.map((service) => (
          <Link
            key={service.id}
            href={`/services/${service.id}`}
            className={`p-8 border rounded transition-all cursor-pointer hover:-translate-y-0.5 hover:shadow-md flex flex-col ${
              service.featured ? "row-span-2" : ""
            }`}
            style={{
              backgroundColor: service.featured ? "#660000" : "#FFFFFF",
              borderColor: "rgba(26, 15, 0, 0.08)",
            }}
          >
            <span
              className="text-[9.5px] font-bold tracking-[2.5px] uppercase mb-4"
              style={{
                color: service.featured
                  ? "rgba(255,248,238,0.45)"
                  : "rgba(26, 15, 0, 0.28)",
              }}
            >
              {service.number}
            </span>
            <h3
              className={`font-serif text-[18px] font-normal mb-2.5 tracking-[-0.1px] leading-[1.2] ${service.featured ? "text-white" : ""}`}
            >
              {service.title}
            </h3>
            <p
              className={`text-[13px] leading-[1.62] font-light flex-1 mb-4 ${service.featured ? "text-white/60" : "text-[rgba(26,15,0,0.45)]"}`}
            >
              {service.description}
            </p>
            <div className="flex flex-wrap gap-1.5 mt-auto">
              {service.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] font-medium px-2 py-0.5 rounded-full border"
                  style={{
                    backgroundColor: service.featured
                      ? "rgba(255,248,238,0.12)"
                      : "rgba(196,81,42,0.08)",
                    color: service.featured
                      ? "rgba(255,248,238,0.8)"
                      : "#C4512A",
                    borderColor: service.featured
                      ? "rgba(255,248,238,0.2)"
                      : "rgba(196,81,42,0.2)",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
            {service.featured && (
              <div className="mt-6 pt-6">
                <span
                  className="inline-flex items-center gap-1.5 text-[12.5px] font-semibold transition-all hover:gap-2.5"
                  style={{ color: "rgba(255,248,238,0.65)" }}
                >
                  Learn More →
                </span>
              </div>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
