import Header from "@/components/Training/header";
import Hero from "@/components/Training/hero";
import TrainingSection from "@/components/Training/training-section";
import TrainingFormats from "@/components/Training/training-format";
import TrainingTopics from "@/components/Training/training-topics";
import TrainingCalendar from "@/components/Training/training-calendar";
import Customization from "@/components/Training/training-customization";
import TestimonialSection from "@/components/Training/testimonial";
import FAQSection from "@/components/Training/faq";
import ChoiceSection from "@/components/Training/choice";
import TrainingCta from "@/components/Training/training-cta";
import Footer from "@/components/LatestlandingPage/footer";
import React from "react";
import Approach from "@/components/LatestlandingPage/approach";

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
        {<Header />}
        {<Hero />}
      </div>
      {<Approach />}
      {<TrainingSection />}
      {<TrainingFormats />}
      {<TrainingTopics />}
      {<TrainingCalendar />}
      {<Customization />}
      {<TestimonialSection />}
      {<FAQSection />}
      {<ChoiceSection />}
      {<TrainingCta />}
      {/* {<Services/>} */}

      {/* {<WhoWereBuilding/>} */}
      {/* {<HowItWorks/>} */}
      {/* {<CtaSection/>} */}
      <Footer />
      {/* <SlideContent/> */}
    </div>
  );
};

export default Page;
