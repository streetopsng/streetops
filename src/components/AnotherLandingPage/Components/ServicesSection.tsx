// ServicesSection.tsx
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
    <div className="py-12 sm:py-16 md:py-20 lg:py-[88px] px-4 sm:px-6 md:px-10 lg:px-20 rv">
      <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 mb-8 sm:mb-10 md:mb-11">
        <div>
          <div className="flex items-center gap-2.5 mb-3 sm:mb-4 md:mb-[18px]">
            <div
              className="w-5 h-px sm:w-5.5"
              style={{ backgroundColor: "#660000" }}
            />
            <span
              className="text-[9px] sm:text-[10px] font-bold tracking-[2px] sm:tracking-[2.5px] uppercase"
              style={{ color: "#660000" }}
            >
              Our Services
            </span>
          </div>
          <h2 className="font-serif text-[clamp(24px,6vw,28px)] sm:text-[clamp(28px,5vw,38px)] md:text-[clamp(28px,3.8vw,46px)] font-light leading-[1.2] sm:leading-[1.1] tracking-[-0.5px] sm:tracking-[-0.7px]">
            Five services.
            <br />
            <em className="not-italic" style={{ color: "#C4512A" }}>
              One methodology.
            </em>
          </h2>
        </div>
        <div>
          <p
            className="text-[14px] sm:text-[15px] md:text-[15.5px] leading-[1.6] sm:leading-[1.7] md:leading-[1.72] font-light max-w-full md:max-w-[380px]"
            style={{ color: "rgba(26, 15, 0, 0.45)" }}
          >
            Diagnosis-led. Outcome-measured. In person or virtually.
          </p>
          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 text-[11px] sm:text-[12px] md:text-[12.5px] font-semibold transition-all hover:gap-2.5 mt-2 sm:mt-3 md:mt-[18px]"
            style={{ color: "#660000" }}
          >
            All Services →
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-auto gap-3 rv rv1">
        {services.map((service) => (
          <Link
            key={service.id}
            href={`/services/${service.id}`}
            className={`p-5 sm:p-6 md:p-8 border rounded transition-all cursor-pointer hover:-translate-y-0.5 hover:shadow-md flex flex-col ${
              service.featured ? "sm:row-span-2" : ""
            }`}
            style={{
              backgroundColor: service.featured ? "#660000" : "#FFFFFF",
              borderColor: "rgba(26, 15, 0, 0.08)",
            }}
          >
            <span
              className="text-[8px] sm:text-[9px] md:text-[9.5px] font-bold tracking-[2px] sm:tracking-[2.5px] uppercase mb-3 sm:mb-4"
              style={{
                color: service.featured
                  ? "rgba(255,248,238,0.45)"
                  : "rgba(26, 15, 0, 0.28)",
              }}
            >
              {service.number}
            </span>
            <h3
              className={`font-serif text-[16px] sm:text-[17px] md:text-[18px] font-normal mb-2 sm:mb-2.5 tracking-[-0.1px] leading-[1.3] sm:leading-[1.2] ${service.featured ? "text-white" : ""}`}
            >
              {service.title}
            </h3>
            <p
              className={`text-[12px] sm:text-[12.5px] md:text-[13px] leading-[1.5] sm:leading-[1.6] md:leading-[1.62] font-light flex-1 mb-3 sm:mb-4 ${service.featured ? "text-white/60" : "text-[rgba(26,15,0,0.45)]"}`}
            >
              {service.description}
            </p>
            <div className="flex flex-wrap gap-1 sm:gap-1.5 mt-auto">
              {service.tags.slice(0, 2).map((tag) => (
                <span
                  key={tag}
                  className="text-[8px] sm:text-[9px] md:text-[10px] font-medium px-1.5 sm:px-2 py-0.5 rounded-full border"
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
              <div className="mt-4 sm:mt-5 md:mt-6 pt-4 sm:pt-5 md:pt-6">
                <span
                  className="inline-flex items-center gap-1.5 text-[11px] sm:text-[12px] md:text-[12.5px] font-semibold transition-all hover:gap-2.5"
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
