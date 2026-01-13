import Footer from "@/components/LatestlandingPage/footer";
import BuildDreamTeam from "@/components/RecruitmentComponents/build-dream-team";
import HowRecruitmentWorks from "@/components/RecruitmentComponents/how-recruitment-works";
import LetUsBuildYourTeam from "@/components/RecruitmentComponents/let-us-build-your-team";
import RecruitmentContact from "@/components/RecruitmentComponents/recruitment-contact";
import RecruitmentHero from "@/components/RecruitmentComponents/recruitment-hero";
import RecruitmentSolutions from "@/components/RecruitmentComponents/recruitment-solutions";
import RecuitmentProcess from "@/components/RecruitmentComponents/recuitment-process";
import Header from "@/components/Training/header";
import React from "react";

const Page = () => {
  return (
    <div>
      {/* header and hero section */}
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
        <RecruitmentHero />
      </div>

      <HowRecruitmentWorks />
      <RecruitmentSolutions />
      <RecuitmentProcess />
      <LetUsBuildYourTeam />
      <RecruitmentContact />
      <BuildDreamTeam />
      <Footer />
    </div>
  );
};

export default Page;
