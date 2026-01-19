import AboutUsHero from "@/components/AboutUsComponents/about-us-hero";
import OurBrandStory from "@/components/AboutUsComponents/our-brand-story";
import OurCoreMission from "@/components/AboutUsComponents/our-core-mission";
import OurKeyApproach from "@/components/AboutUsComponents/our-key-approach";
import OurVisionForward from "@/components/AboutUsComponents/our-vision-forward";
import ReadyToBuild from "@/components/AboutUsComponents/ready-to-build";
import Footer from "@/components/LatestlandingPage/footer";
import Header from "@/components/Training/header";
import React from "react";

const Page = () => {
  return (
    <>
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
          {<Header />}
          {<AboutUsHero />}
        </div>

        {/*  */}
        <OurBrandStory />
        <OurCoreMission />
        <OurKeyApproach />
        <OurVisionForward />
        <ReadyToBuild />
        <Footer />
      </div>
    </>
  );
};

export default Page;
