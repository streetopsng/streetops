import Footer from "@/components/LatestlandingPage/footer";
import RecruitmentContact from "@/components/RecruitmentComponents/recruitment-contact";
import DesignedForTeamSize from "@/components/TeamBondingComponents/designed-for-team-size";
import LetUsBuildYourTeam from "@/components/TeamBondingComponents/let-us-build-your-team";
import Productivity from "@/components/TeamBondingComponents/productivity";
import TeamBondingExperience from "@/components/TeamBondingComponents/team-bonding-experience";
import TeamBondingHero from "@/components/TeamBondingComponents/team-bonding-hero";
import WaysToBuild from "@/components/TeamBondingComponents/ways-to-build";
import Header from "@/components/Training/header";
import React from "react";

const Page = () => {
  return (
    <div className="">
      <div className="relative ">
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
        <Header />
        <TeamBondingHero />
      </div>

      <Productivity />
      <WaysToBuild />
      <DesignedForTeamSize />
      <TeamBondingExperience />
      <LetUsBuildYourTeam />
      {/* contact form from recruitment */}
      <RecruitmentContact />

      <Footer />
    </div>
  );
};

export default Page;
