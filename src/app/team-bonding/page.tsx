"use client";
// import Footer from "@/components/StreetopsLandingPage/Footer";
import RecruitmentContact from "@/components/RecruitmentComponents/recruitment-contact";
import DesignedForTeamSize from "@/components/TeamBondingComponents/designed-for-team-size";
import LetUsBuildYourTeam from "@/components/TeamBondingComponents/let-us-build-your-team";
import Productivity from "@/components/TeamBondingComponents/productivity";
import TeamBondingExperience from "@/components/TeamBondingComponents/team-bonding-experience";
import TeamBondingHero from "@/components/TeamBondingComponents/team-bonding-hero";
import WaysToBuild from "@/components/TeamBondingComponents/ways-to-build";
import Nav from "@/components/StreetopsLandingPage/Nav";
import "@/components/StreetopsLandingPage/StreetopsLandingPage.css";
import React, { useState } from "react";
import Footer from "@/components/StreetopsLandingPage/Footer";

const Page = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="bizmo-with-mont-numbers">
      {/* <div className="relative ">
        <>
          <div className="absolute h-full -z-1 w-full bg-linear-to-b from-[#FA2120] to-[#941413] " />
          <div
            className="absolute inset-0 opacity-25 -z-1"
            style={{
              backgroundImage: `url('/bric.png')`,
              backgroundSize: "cover",
              backgroundPosition: "center top",
            }}
          />
        </>
        <div className="streetops-landing" style={{ paddingTop: '20px' }}>
          <Nav variant="team-bonding" />
        </div>
        <TeamBondingHero />
      </div> */}

      <Nav onOpenModal={() => setIsModalOpen(true)} />
      <br />
      <br />
      <br />
      <Productivity />
      {/* <WaysToBuild /> */}
      <DesignedForTeamSize />
      <TeamBondingExperience />
      <LetUsBuildYourTeam />
      {/* contact form from recruitment */}
      <RecruitmentContact />

      <div className="streetops-landing">
        <Footer />
      </div>
    </div>
  );
};

export default Page;
