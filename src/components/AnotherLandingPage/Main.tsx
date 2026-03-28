"use client";

import { useEffect, useRef, useState } from "react";
import AnotherHero from "./Components/Hero";
import Marquee from "./Components/Marquee";
import ProblemSection from "./Components/ProblemSection";
import WhatWeDo from "./Components/WhatWeDo";
import Methodology from "./Components/Methodology";
import ServicesSection from "./Components/ServicesSection";
import Industries from "./Components/Industries";
import PaigeSection from "./Components/PaigeSection";
import Stats from "./Components/Stats";
import Testimonials from "./Components/Testimonials";
import LatestInsights from "./Components/LatestInsights";
import FooterCTA from "./Components/FooterCTA";
import Footer from "./Components/Footer";

// import Hero from "@/components/Hero";
// import Marquee from "@/components/Marquee";
// import ProblemSection from "@/components/ProblemSection";
// import WhatWeDo from "@/components/WhatWeDo";
// import Methodology from "@/components/Methodology";
// import ServicesSection from "@/components/ServicesSection";
// import Industries from "@/components/Industries";
// import PaigeSection from "@/components/PaigeSection";
// import Stats from "@/components/Stats";
// import Testimonials from "@/components/Testimonials";
// import LatestInsights from "@/components/LatestInsights";
// import FooterCTA from "@/components/FooterCTA";
// import Footer from "@/components/Footer";

export default function Main() {
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
      <AnotherHero />
      <Marquee />
      <ProblemSection />
      {/* <WhatWeDo /> */}
      <Methodology />
      <ServicesSection />
      <Industries />
      <PaigeSection />
      {/* <Stats /> */}
      <Testimonials />
      <LatestInsights />
      <FooterCTA />
      <Footer />
    </>
  );
}
