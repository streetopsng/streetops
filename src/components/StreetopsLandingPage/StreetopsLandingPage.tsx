import React, { useState, useEffect } from "react";
import "./StreetopsLandingPage.css";

import Nav from "./Nav";
import Hero from "./Hero";
import Features from "./Features";
import Physical from "./Physical";
import IdentityFoundation from "./IdentityFoundation";
import WhyStreetOps from "./WhyStreetOps";
import DemoCTA from "./DemoCTA";
import BlogSection from "./BlogSection";
import Footer from "./Footer";
import ReadyToBuild from "../AboutUsComponents/ready-to-build";
import { Loader2 } from "lucide-react";
import toast from "react-hot-toast";

const StreetopsLandingPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("on");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.07, rootMargin: "0px 0px -20px 0px" },
    );

    document.querySelectorAll(".rv").forEach((el) => obs.observe(el));

    return () => {
      obs.disconnect();
    };
  }, []);

  return (
    <div className="streetops-landing">
      <Nav onOpenModal={() => setIsModalOpen(true)} />
      <Hero onOpenModal={() => setIsModalOpen(true)} />
      <Features />
      <Physical />
      <IdentityFoundation />
      <WhyStreetOps />
      {/* <DemoCTA /> */}
      {/* <BlogSection /> */}
      <ReadyToBuild />
      <Footer />

      {/* Early Access Modal */}
    </div>
  );
};

export default StreetopsLandingPage;
