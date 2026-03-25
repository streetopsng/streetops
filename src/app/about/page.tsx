// "use client";
// import AboutUsHero from "@/components/AboutUsComponents/about-us-hero";
// import OurBrandStory from "@/components/AboutUsComponents/our-brand-story";
// import OurCoreMission from "@/components/AboutUsComponents/our-core-mission";
// import OurKeyApproach from "@/components/AboutUsComponents/our-key-approach";
// import OurVisionForward from "@/components/AboutUsComponents/our-vision-forward";
// import ReadyToBuild from "@/components/AboutUsComponents/ready-to-build";
// import Footer from "@/components/StreetopsLandingPage/Footer";
// // import Footer from "@/components/LatestlandingPage/footer";
// import Nav from "@/components/StreetopsLandingPage/Nav";
// import TeamMembers from "@/components/team-members";

// const Page = () => {
//   return (
//     <>
//       <div className="">
//         {/* <div className="relative ">
//           <>
//             <div className="absolute h-full -z-1 w-full bg-linear-to-b from-[#FA2120] to-[#941413] " />
//             <div
//               className="absolute inset-0 opacity-25 -z-1"
//               style={{
//                 backgroundImage: `url('/bric.png')`,
//                 backgroundSize: "cover",
//                 backgroundPosition: "center top",
//               }}
//             />
//           </>
//           {<Header />}
//           {<AboutUsHero />}
//         </div> */}
//         <Nav />
//         <br />
//         <br />
//         <br />

//         {/*  */}
//         <TeamMembers />
//         <OurBrandStory />
//         <OurCoreMission />
//         <OurKeyApproach />
//         <OurVisionForward />
//         <ReadyToBuild />
//         <Footer />
//       </div>
//     </>
//   );
// };

// export default Page;

// app/about/page.tsx
"use client";

import { useEffect } from "react";
import Link from "next/link";
import Footer from "@/components/AnotherLandingPage/Components/Footer";

export default function AboutPage() {
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

  return (
    <>
      {/* Hero */}
      <div className="relative min-h-[400px] sm:min-h-[440px] md:min-h-[480px] overflow-hidden flex items-end">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1400&q=80)",
          }}
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
          <div className="flex items-center gap-2.5 mb-4 sm:mb-5">
            <div
              className="w-4 sm:w-5.5 h-px"
              style={{ backgroundColor: "rgba(255,248,238,0.2)" }}
            />
            <span
              className="text-[8px] sm:text-[9px] md:text-[10px] font-semibold tracking-[1.5px] sm:tracking-[2px] uppercase"
              style={{ color: "rgba(255,248,238,0.35)" }}
            >
              About StreetOps
            </span>
          </div>
          <h1
            className="font-serif text-[clamp(28px,8vw,32px)] sm:text-[clamp(32px,6vw,42px)] md:text-[clamp(32px,4.5vw,56px)] font-light leading-[1.2] sm:leading-[1.1] md:leading-[1.06] tracking-[-0.8px] sm:tracking-[-1px] md:tracking-[-1.2px] max-w-full sm:max-w-[90%] md:max-w-[680px] mb-4 sm:mb-5"
            style={{ color: "#FFF8EE" }}
          >
            We were built for here.
            <br />
            <em
              className="not-italic"
              style={{ color: "rgba(255,248,238,0.32)" }}
            >
              Not adapted from somewhere else.
            </em>
          </h1>
          <p
            className="text-[13px] sm:text-[14px] md:text-base leading-[1.5] sm:leading-[1.6] md:leading-[1.68] font-light max-w-full sm:max-w-[90%] md:max-w-[520px]"
            style={{ color: "rgba(255,248,238,0.48)" }}
          >
            Africa's team performance company. Built on behavioural science.
            Designed for the relational, high-context workplaces that actually
            exist here.
          </p>
        </div>
      </div>

      {/* Story Section */}
      <div className="py-12 sm:py-16 md:py-20 lg:py-[88px] px-4 sm:px-6 md:px-10 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 lg:gap-20 items-start">
          <div className="rv">
            <div className="flex items-center gap-2.5 mb-3 sm:mb-4 md:mb-[18px]">
              <div
                className="w-5 h-px sm:w-5.5"
                style={{ backgroundColor: "#660000" }}
              />
              <span
                className="text-[9px] sm:text-[10px] font-bold tracking-[2px] sm:tracking-[2.5px] uppercase"
                style={{ color: "#660000" }}
              >
                The Story
              </span>
            </div>
            <h2 className="font-serif text-[clamp(24px,6vw,28px)] sm:text-[clamp(28px,5vw,38px)] md:text-[clamp(28px,3.8vw,46px)] font-light leading-[1.2] sm:leading-[1.1] tracking-[-0.5px] sm:tracking-[-0.7px] mb-4 sm:mb-[18px]">
              Why StreetOps{" "}
              <em className="not-italic" style={{ color: "#C4512A" }}>
                exists.
              </em>
            </h2>
            <p
              className="text-[14px] sm:text-[15px] md:text-[15.5px] leading-[1.6] sm:leading-[1.7] md:leading-[1.72] font-light mb-3 sm:mb-4 md:mb-[18px]"
              style={{ color: "rgba(26, 15, 0, 0.45)" }}
            >
              Most people and team tools were built for somewhere else —
              designed for Western workplaces and shipped to African markets as
              if the people here work the same way. They do not.
            </p>
            <p
              className="text-[14px] sm:text-[15px] md:text-[15.5px] leading-[1.6] sm:leading-[1.7] md:leading-[1.72] font-light mb-3 sm:mb-4 md:mb-[18px]"
              style={{ color: "rgba(26, 15, 0, 0.45)" }}
            >
              For the Lagos startup that works hard but never quite gels. For
              the Abuja firm where good people keep leaving without anyone
              understanding why. For the manager who was brilliant at their job
              and now has no tools for the people side of it.
            </p>
            <p
              className="text-[14px] sm:text-[15px] md:text-[15.5px] leading-[1.6] sm:leading-[1.7] md:leading-[1.72] font-light"
              style={{ color: "rgba(26, 15, 0, 0.45)" }}
            >
              StreetOps was built for all of them.
            </p>
          </div>
          <div className="rv rv2">
            <div
              className="mb-3.5 p-6 sm:p-8 md:p-11 rounded"
              style={{ backgroundColor: "#660000" }}
            >
              <div
                className="text-[8px] sm:text-[9px] md:text-[9.5px] font-bold tracking-[2px] sm:tracking-[2.5px] uppercase mb-2 sm:mb-3"
                style={{ color: "rgba(255,248,238,0.35)" }}
              >
                The North Star Concept
              </div>
              <p
                className="font-serif text-[16px] sm:text-[18px] md:text-[20px] font-light leading-[1.4] sm:leading-[1.45] italic tracking-[-0.2px]"
                style={{ color: "#FFFFFF" }}
              >
                "How a team relates to one another directly determines how well
                they produce together. Fix the social infrastructure and the
                productivity follows."
              </p>
            </div>
            <div
              className="p-5 sm:p-6 md:p-7 border border-t-0 rounded-b"
              style={{
                backgroundColor: "#FFFFFF",
                borderColor: "rgba(26, 15, 0, 0.08)",
              }}
            >
              <div
                className="text-[9px] sm:text-[10px] font-bold tracking-[1.5px] sm:tracking-[2px] uppercase mb-1.5"
                style={{ color: "#660000" }}
              >
                Social Productivity
              </div>
              <p
                className="text-[14px] sm:text-[15px] md:text-[15.5px] leading-[1.6] sm:leading-[1.7] md:leading-[1.72] font-light max-w-full"
                style={{ color: "rgba(26, 15, 0, 0.45)" }}
              >
                The quality of relationships, communication, belonging, and
                leadership in a team is the foundation of performance — not
                separate from it.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        className="h-px mx-4 sm:mx-6 md:mx-10 lg:mx-20"
        style={{ backgroundColor: "rgba(26, 15, 0, 0.08)" }}
      />

      {/* Beliefs Section */}
      <div className="py-12 sm:py-16 md:py-20 lg:py-[88px] px-4 sm:px-6 md:px-10 lg:px-20 rv">
        <div className="flex items-center gap-2.5 mb-4 sm:mb-[18px]">
          <div
            className="w-5 h-px sm:w-5.5"
            style={{ backgroundColor: "#660000" }}
          />
          <span
            className="text-[9px] sm:text-[10px] font-bold tracking-[2px] sm:tracking-[2.5px] uppercase"
            style={{ color: "#660000" }}
          >
            What We Believe
          </span>
        </div>
        <h2 className="font-serif text-[clamp(24px,6vw,28px)] sm:text-[clamp(28px,5vw,38px)] md:text-[clamp(28px,3.8vw,46px)] font-light leading-[1.2] sm:leading-[1.1] tracking-[-0.5px] sm:tracking-[-0.7px] mb-4 sm:mb-[18px]">
          The convictions behind
          <br />
          <em className="not-italic" style={{ color: "#C4512A" }}>
            every engagement.
          </em>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 mt-8 sm:mt-10 md:mt-12">
          {[
            "A team that knows who they are, understands their roles, feels seen, and communicates well will always outperform a team that does not.",
            "Engagement without performance is still a problem. We diagnose both.",
            "Culture is not what you say you believe. It is what your systems and rituals consistently reinforce.",
            "The manager is the multiplier. Every dimension of team health can be built or destroyed by one person.",
            "Diagnosis before intervention. You cannot fix what you have not named.",
            "Africa-first is not a limitation. It is a competitive advantage.",
          ].map((belief, index) => (
            <div
              key={index}
              className={`py-4 sm:py-5 md:py-5.5 px-0 ${index % 2 === 0 ? "md:pr-10 md:border-r" : "md:pl-10"} border-b ${index % 2 === 0 && index !== 0 ? "border-t-0" : ""}`}
              style={{ borderColor: "rgba(26, 15, 0, 0.08)" }}
            >
              <div className="flex gap-3 sm:gap-3.5">
                <span
                  className="font-bold flex-shrink-0 mt-px"
                  style={{ color: "#660000" }}
                >
                  →
                </span>
                <span
                  className="text-[13px] sm:text-[14px] md:text-[14.5px] leading-[1.5] sm:leading-[1.6] md:leading-[1.65] font-light"
                  style={{ color: "rgba(26, 15, 0, 0.65)" }}
                >
                  {belief}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        className="h-px mx-4 sm:mx-6 md:mx-10 lg:mx-20"
        style={{ backgroundColor: "rgba(26, 15, 0, 0.08)" }}
      />

      {/* Values Section */}
      <div className="py-12 sm:py-16 md:py-20 lg:py-[88px] px-4 sm:px-6 md:px-10 lg:px-20 rv">
        <div className="flex items-center gap-2.5 mb-4 sm:mb-[18px]">
          <div
            className="w-5 h-px sm:w-5.5"
            style={{ backgroundColor: "#660000" }}
          />
          <span
            className="text-[9px] sm:text-[10px] font-bold tracking-[2px] sm:tracking-[2.5px] uppercase"
            style={{ color: "#660000" }}
          >
            The STREET Values
          </span>
        </div>
        <h2 className="font-serif text-[clamp(24px,6vw,28px)] sm:text-[clamp(28px,5vw,38px)] md:text-[clamp(28px,3.8vw,46px)] font-light leading-[1.2] sm:leading-[1.1] tracking-[-0.5px] sm:tracking-[-0.7px] mb-4 sm:mb-[18px]">
          Not aspirations on a poster.
          <br />
          <em className="not-italic" style={{ color: "#C4512A" }}>
            Behaviours we demonstrate.
          </em>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 mt-8 sm:mt-10 md:mt-11">
          {[
            {
              letter: "S",
              name: "Sharp",
              desc: "Precise. Vague recommendations are not StreetOps.",
            },
            {
              letter: "T",
              name: "Tenacious",
              desc: "We stay through the hard parts. Culture change is slow.",
            },
            {
              letter: "R",
              name: "Reflective & Resourceful",
              desc: "We think before we act. We build from what is available.",
            },
            {
              letter: "E",
              name: "Energetic",
              desc: "We bring genuine energy. Flat facilitators produce flat teams.",
            },
            {
              letter: "E",
              name: "Entrepreneurial",
              desc: "Builders, not bureaucrats. We move fast and ship again.",
            },
            {
              letter: "T",
              name: "Team-First",
              desc: "StreetOps is itself a Social Productivity experiment.",
            },
          ].map((value, index) => (
            <div
              key={index}
              className="p-5 sm:p-6 md:p-[30px_26px] border rounded transition-all hover:border-red"
              style={{
                backgroundColor: "#FFFFFF",
                borderColor: "rgba(26, 15, 0, 0.08)",
              }}
            >
              <div
                className="font-serif text-[32px] sm:text-[38px] md:text-[44px] font-[200] leading-none mb-2 sm:mb-2.5"
                style={{ color: "rgba(196,81,42,0.2)" }}
              >
                {value.letter}
              </div>
              <div
                className="text-[12px] sm:text-[13px] md:text-[13.5px] font-semibold mb-1 sm:mb-1.5"
                style={{ color: "#1A0F00" }}
              >
                {value.name}
              </div>
              <div
                className="text-[12px] sm:text-[12.5px] md:text-[13px] leading-[1.5] sm:leading-[1.6] font-light"
                style={{ color: "rgba(26, 15, 0, 0.45)" }}
              >
                {value.desc}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        className="h-px mx-4 sm:mx-6 md:mx-10 lg:mx-20"
        style={{ backgroundColor: "rgba(26, 15, 0, 0.08)" }}
      />

      {/* Team Section */}
      <div className="py-12 sm:py-16 md:py-20 lg:py-[88px] px-4 sm:px-6 md:px-10 lg:px-20 rv">
        <div className="flex items-center gap-2.5 mb-4 sm:mb-[18px]">
          <div
            className="w-5 h-px sm:w-5.5"
            style={{ backgroundColor: "#660000" }}
          />
          <span
            className="text-[9px] sm:text-[10px] font-bold tracking-[2px] sm:tracking-[2.5px] uppercase"
            style={{ color: "#660000" }}
          >
            The Team
          </span>
        </div>
        <h2 className="font-serif text-[clamp(24px,6vw,28px)] sm:text-[clamp(28px,5vw,38px)] md:text-[clamp(28px,3.8vw,46px)] font-light leading-[1.2] sm:leading-[1.1] tracking-[-0.5px] sm:tracking-[-0.7px] mb-4 sm:mb-[18px]">
          The people behind
          <br />
          <em className="not-italic" style={{ color: "#C4512A" }}>
            the methodology.
          </em>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-4 mt-8 sm:mt-10 md:mt-11">
          {[
            {
              name: "[Name]",
              role: "Founder & Lead",
              image:
                "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
            },
            {
              name: "[Name]",
              role: "Consultant",
              image:
                "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&q=80",
            },
            {
              name: "[Name]",
              role: "Experience Designer",
              image:
                "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&q=80",
            },
            {
              name: "[Name]",
              role: "Diagnostics Lead",
              image:
                "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
            },
          ].map((member, index) => (
            <div key={index} className="cursor-pointer">
              <div
                className="h-[300px] sm:h-[350px] md:h-[280px] rounded mb-3 overflow-hidden border transition-all hover:border-red"
                style={{
                  backgroundColor: "#FFF2E0",
                  borderColor: "rgba(26, 15, 0, 0.08)",
                }}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div
                className="text-[13px] sm:text-[14px] font-semibold mb-0.5"
                style={{ color: "#1A0F00" }}
              >
                {member.name}
              </div>
              <div
                className="text-[11px] sm:text-xs font-medium"
                style={{ color: "#660000" }}
              >
                {member.role}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div
        className="py-16 sm:py-20 md:py-25 px-4 sm:px-6 md:px-10 lg:px-20 text-center relative overflow-hidden"
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
          className="font-serif text-[clamp(24px,6vw,28px)] sm:text-[clamp(28px,5vw,38px)] md:text-[clamp(28px,4.5vw,52px)] font-[200] leading-[1.2] sm:leading-[1.12] mb-4 sm:mb-[18px] tracking-[-0.5px] sm:tracking-[-1px] relative z-10"
          style={{ color: "#FFF8EE" }}
        >
          Ready to see how we work?
        </h2>
        <Link
          href="/services"
          className="inline-block px-6 sm:px-7 md:px-8.5 py-2.5 sm:py-3 md:py-3.5 text-[13px] sm:text-[14px] md:text-[14.5px] font-semibold rounded transition-all relative z-10"
          style={{ backgroundColor: "#660000", color: "#FFFFFF" }}
        >
          Explore Services →
        </Link>
      </div>

      <Footer />
    </>
  );
}
