"use client";

import { useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Footer from "@/components/AnotherLandingPage/Components/Footer";

const servicesData: Record<string, any> = {
  diagnostic: {
    label: "Service 01",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1400&q=80",
    title: "Team Diagnostic",
    sub: "You can feel the problem. We can name it — with evidence, priority, and a plan.",
    intro:
      "Most organisations know something is off before they can describe it. Engagement drops, collaboration becomes difficult, a team that worked well together stops working well. We assess across all dimensions of the Social Health Index and deliver a clear picture of what is happening, why it matters, and what to do next.",
    offs: [
      {
        n: "A full Social Health Index assessment. ",
        d: "Full diagnostic across all 11 engagement and productivity dimensions.",
      },
      {
        n: "A written findings report with evidence and priority order. ",
        d: "Findings with dimension scores, risk interpretation, and recommended priorities.",
      },
      {
        n: "A debrief with your leadership team. ",
        d: "Anonymous team rating of manager behaviour across key leadership dimensions.",
      },
      {
        n: "A recommended path forward tied to the findings.",
        d: "Periodic re-diagnosis to track movement and prove ROI.",
      },
    ],
    for: "Any organisation that can feel something is wrong but cannot name what it is. The right first step for almost every engagement.",
    out: "A specific, evidence-based picture of what is working, what is not, and what to fix first — with evidence, priority, and a plan.",
    rel: ["Manager Effectiveness Training", "Culture & Process Transformation"],
  },
  manager: {
    label: "Service 02",
    img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=1400&q=80",
    title: "Manager Effectiveness Training",
    sub: "Managers account for 70% of team engagement variance. We close the gap.",
    intro:
      "We design and deliver training programmes that fit what your specific team needs. The content is practical. The delivery is human. The goal is change that lasts beyond the training room. Programmes cover team health, manager effectiveness, communication, and culture. We build custom learning journeys where standard programmes are not enough.",
    offs: [
      {
        n: "A training programme designed around your team's specific needs. ",
        d: "For people recently promoted — the tools, language, and frameworks for leading people.",
      },
      {
        n: "Manager effectiveness programmes for new and developing managers.",
        d: "For established managers who need a specific reset. Grounded in anonymous team feedback.",
      },
      {
        n: "Measurement of outcomes before and after.",
        d: "One-on-one for senior leaders struggling with the people side of leadership.",
      },
      // {
      //   n: "People Management Masterclass",
      //   d: "Group training format. Built for African workplace context.",
      // },
    ],
    for: "Newly promoted managers. Established managers receiving negative team feedback. Senior leaders who want to sharpen their people capability.",
    out: "Managers who lead deliberately — with the tools and frameworks to build trust, clarity, and accountability.",
    rel: ["Team Diagnostic", "Culture & Process Transformation"],
  },
  talent: {
    label: "Service 03",
    img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1400&q=80",
    title: "Talent Integration Advisory",
    sub: "Good hires leave by month four. We build the infrastructure that keeps them.",
    intro:
      "We implement the processes, the touchpoints, the manager relationships, and the culture signals that help a new hire integrate and contribute.",
    offs: [
      {
        n: "An audit of your current onboarding process. ",
        d: "Assessing candidates for culture fit before hiring decisions.",
      },
      {
        n: "A redesigned integration infrastructure built for your culture and roles. ",
        d: "Building the company's onboarding infrastructure from scratch. A system, not an orientation deck.",
      },
      {
        n: "Manager guidance on leading new hires through their first ninety days.",
        d: "Running a specific new hire's cultural integration deliberately.",
      },
      // {
      //   n: "Buddy System Design",
      //   d: "Designing the peer support structure for new joiners.",
      // },
      // {
      //   n: "Embedding Programme",
      //   d: "Sustaining new hire integration beyond the first month.",
      // },
    ],
    for: "Organisations experiencing early attrition. Companies scaling quickly who need an onboarding system that doesn't rely on managers to improvise.",
    out: "New hires who are genuinely part of the team by day 90. Reduced early attrition. Faster time to full contribution.",
    rel: ["Team Diagnostic", "Culture & Process Transformation"],
  },
  culture: {
    label: "Service 04",
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1400&q=80",
    title: "Culture & Process Transformation",
    sub: "Culture is not what you claim. It is what your systems consistently reinforce.",
    intro:
      "Most organisations have stated values that have no connection to how decisions are actually made, how people are treated, or how work actually flows. StreetOps bridges that gap — designing the formation response that builds the culture the organisation actually needs.",
    offs: [
      {
        n: "Culture Design Consultation",
        d: "Translating diagnosis findings into a specific formation plan.",
      },
      {
        n: "Values Architecture",
        d: "Defining and anchoring core values to observable team behaviour.",
      },
      {
        n: "Identity System Design",
        d: "Building the team's shared identity — the language, rituals, and symbols that make a group feel like a team.",
      },
      {
        n: "Role Clarity Design",
        d: "Designing the ownership structures that make execution reliable.",
      },
      {
        n: "Working Norms Framework",
        d: "Building the behavioural standards that make culture real day-to-day.",
      },
    ],
    for: "Organisations whose culture has drifted from stated values. Companies that have grown fast and lost their identity. Founding teams who want to design culture deliberately.",
    out: "A culture visible in systems and behaviour — not just language. Clarity structures that make execution reliable.",
    rel: ["Team Diagnostic", "Team Engagement & Experience Design"],
  },
  experience: {
    label: "Service 05",
    img: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1400&q=80",
    title: "Team Engagement & Experience Design",
    sub: "Every experience tied to a diagnosis. Every outcome measured.",
    intro:
      "StreetOps designs and delivers team experiences across three categories: Team Bonding, Learning Experiences, and Team Events. Every experience is grounded in behavioural science, designed for African workplace culture, and built to produce a specific outcome — not just a good day.",
    offs: [
      {
        n: "Team Bonding",
        d: "Physical and online bonding sessions using games, challenges, rituals, and creative experiences.",
      },
      {
        n: "Learning Experiences",
        d: "Hackathons, simulations, values dilemma sessions, cross-functional challenges.",
      },
      {
        n: "Team Events",
        d: "Retreats, kickoff events, milestone celebrations, annual team resets.",
      },
    ],
    for: "Organisations that want to build team connection deliberately — grounded in a diagnostic, not guesswork.",
    out: "Experiences that close specific gaps. Stronger relationships, clearer culture, shared language.",
    rel: ["Team Diagnostic", "Culture & Process Transformation"],
  },
};

export default function ServiceDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const service = servicesData[slug];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("on");
          }
        });
      },
      { threshold: 0.1 },
    );

    document.querySelectorAll(".rv").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif mb-4">
            Service not found
          </h1>
          <Link href="/services" className="text-red-600">
            Back to Services
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Hero */}
      <div className="relative min-h-[350px] sm:min-h-[380px] md:min-h-[400px] overflow-hidden flex items-end">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${service.img}')` }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(26,15,0,0.88) 0%, rgba(26,15,0,0.55) 60%, rgba(102,0,0,0.2) 100%)",
          }}
        />
        <div
          className="absolute left-0 top-0 bottom-0 w-1"
          style={{
            background:
              "linear-gradient(to bottom, transparent, #660000 30%, #E8571A 70%, transparent)",
          }}
        />
        <div className="relative z-10 px-4 sm:px-6 md:px-10 lg:px-20 py-16 sm:py-20 md:py-25">
          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 text-[10px] sm:text-[11px] md:text-[11.5px] font-semibold mb-4 sm:mb-5 md:mb-6 transition-colors hover:text-cream/75"
            style={{ color: "rgba(255,248,238,0.35)" }}
          >
            ← All Services
          </Link>
          <div className="flex items-center gap-2.5 mb-4 sm:mb-5">
            <div
              className="w-4 sm:w-5.5 h-px"
              style={{ backgroundColor: "rgba(255,248,238,0.2)" }}
            />
            <span
              className="text-[8px] sm:text-[9px] md:text-[10px] font-semibold tracking-[1.5px] sm:tracking-[2px] uppercase"
              style={{ color: "rgba(255,248,238,0.35)" }}
            >
              {service.label}
            </span>
          </div>
          <h1
            className="font-serif text-[clamp(28px,8vw,32px)] sm:text-[clamp(32px,6vw,42px)] md:text-[clamp(32px,4.5vw,56px)] font-light leading-[1.2] sm:leading-[1.1] md:leading-[1.06] tracking-[-0.8px] sm:tracking-[-1px] md:tracking-[-1.2px] max-w-full sm:max-w-[90%] md:max-w-[680px] mb-4 sm:mb-5"
            style={{ color: "#FFF8EE" }}
          >
            {service.title}
          </h1>
          <p
            className="text-[13px] sm:text-[14px] md:text-base leading-[1.5] sm:leading-[1.6] md:leading-[1.68] font-light max-w-full sm:max-w-[90%] md:max-w-[520px]"
            style={{ color: "rgba(255,248,238,0.48)" }}
          >
            {service.sub}
          </p>
        </div>
      </div>

      {/* Service Details */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-14 py-12 sm:py-16 md:py-[72px] px-4 sm:px-6 md:px-10 lg:px-20">
        <div className="lg:col-span-2">
          <p
            className="text-[15px] sm:text-[16px] md:text-[17px] leading-[1.6] sm:leading-[1.7] md:leading-[1.72] font-light mb-8 sm:mb-10 md:mb-11 pl-4 sm:pl-5 md:pl-6 border-l-2 sm:border-l-3 border-l-red-600"
            style={{ color: "rgba(26, 15, 0, 0.65)" }}
          >
            {service.intro}
          </p>

          <div className="flex items-center gap-2.5 mb-4 sm:mb-[18px]">
            <div className="w-5 h-px sm:w-5.5 bg-red-600" />
            <span className="text-[9px] sm:text-[10px] font-bold tracking-[2px] sm:tracking-[2.5px] uppercase text-red-600">
              WHAT YOU GET
            </span>
          </div>

          <div>
            {service.offs.map((off: any, index: number) => (
              <div
                key={index}
                className="py-3 sm:py-4 md:py-[18px] border-b border-[rgba(26,15,0,0.08)] dark:border-[rgba(255,248,238,0.08)] flex gap-3 sm:gap-4 transition-all hover:pl-1"
              >
                <span className="text-red-600 font-bold flex-shrink-0 mt-px">
                  →
                </span>
                <div>
                  <div className="text-[13px] sm:text-[13.5px] md:text-[14px] font-semibold mb-0.5 text-char dark:text-cream">
                    {off.n}
                  </div>
                  {/* <div className="text-[12px] sm:text-[12.5px] md:text-[13px] leading-[1.5] sm:leading-[1.55] md:leading-[1.58] font-light text-ink3 dark:text-[rgba(255,248,238,0.42)]">
                    {off.d}
                  </div> */}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 sm:mt-10 md:mt-12">
            <div className="flex items-center gap-2.5 mb-3 sm:mb-3.5">
              <div className="w-5 h-px sm:w-5.5 bg-red-600" />
              <span className="text-[9px] sm:text-[10px] font-bold tracking-[2px] sm:tracking-[2.5px] uppercase text-red-600">
                Who This Is For
              </span>
            </div>
            <p className="text-[14px] sm:text-[14.5px] md:text-[15.5px] leading-[1.6] sm:leading-[1.7] md:leading-[1.72] font-light text-ink3 dark:text-[rgba(255,248,238,0.42)]">
              {service.for}
            </p>
          </div>
        </div>

        <div>
          <div className="p-4 sm:p-5 md:p-6 border border-[rgba(26,15,0,0.08)] dark:border-[rgba(255,248,238,0.08)] rounded-lg mb-3.5 bg-[#FFF2E0] dark:bg-[#241800]">
            <div className="text-[9px] sm:text-[10px] font-bold tracking-[1.5px] sm:tracking-[2px] uppercase mb-2 sm:mb-3 text-red-600">
              What Changes
            </div>
            <p className="text-[12px] sm:text-[12.5px] md:text-[13px] leading-[1.5] sm:leading-[1.6] md:leading-[1.65] font-light text-ink3 dark:text-[rgba(255,248,238,0.42)]">
              {service.out}
            </p>
          </div>

          <div className="p-4 sm:p-5 md:p-6 border border-[rgba(26,15,0,0.08)] dark:border-[rgba(255,248,238,0.08)] rounded-lg mb-3.5 bg-[#FFF2E0] dark:bg-[#241800]">
            <div className="text-[9px] sm:text-[10px] font-bold tracking-[1.5px] sm:tracking-[2px] uppercase mb-2 sm:mb-3 text-red-600">
              Related Services
            </div>
            {service.rel.map((r: string, index: number) => (
              <div
                key={index}
                className="py-1.5 sm:py-2 border-b border-[rgba(26,15,0,0.08)] dark:border-[rgba(255,248,238,0.08)] text-[11px] sm:text-xs font-medium text-red-600 cursor-pointer transition-all hover:gap-2.5 flex items-center gap-1.5"
              >
                → {r}
              </div>
            ))}
          </div>

          <Link
            href="/contact"
            className="block w-full py-2.5 sm:py-3 text-center text-[12px] sm:text-[13px] font-semibold rounded transition-all bg-red-600 text-white"
          >
            Work With Us →
          </Link>
        </div>
      </div>

      <Footer />
    </>
  );
}
