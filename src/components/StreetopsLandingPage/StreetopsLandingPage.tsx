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

      {/* Floating WhatsApp Widget */}
      <a
        href="https://api.whatsapp.com/send/?phone=2347026782510&text&type=phone_number&app_absent=0"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: "fixed",
          bottom: "24px",
          right: "24px",
          backgroundColor: "#25D366",
          color: "white",
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          boxShadow: "0 4px 20px rgba(37, 211, 102, 0.4)",
          zIndex: 9999,
          transition: "transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.1) translateY(-4px)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1) translateY(0)";
        }}
      >
        <svg
          viewBox="0 0 24 24"
          width="32"
          height="32"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
        </svg>
      </a>

      {/* Early Access Modal */}
    </div>
  );
};

export default StreetopsLandingPage;
