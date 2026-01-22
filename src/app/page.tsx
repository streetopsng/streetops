"use client";
import Header from "@/components/Training/header";
import Hero from "@/components/Training/hero";
import TrainingSection from "@/components/Training/training-section";
import TrainingFormats from "@/components/Training/training-format";
import TrainingTopics from "@/components/Training/training-topics";
import TrainingCalendar from "@/components/Training/training-calendar";

import TestimonialSection from "@/components/Training/testimonial";
import FAQSection from "@/components/Training/faq";
import ChoiceSection from "@/components/Training/choice";
import TrainingCta from "@/components/Training/training-cta";
// import Approach from "@/components/LatestlandingPage/approach";
import CtaSection from "@/components/LatestlandingPage/cta-section";
import HowItWorks from "@/components/LatestlandingPage/how-it-works";
import Services from "@/components/LatestlandingPage/services";
import WhoWereBuilding from "@/components/LatestlandingPage/who-were-building";
import Footer from "@/components/LatestlandingPage/footer";
import dayjs from "dayjs";
import Approach from "@/components/LatestlandingPage/approach";
import Customization from "@/components/LatestlandingPage/customization";
import { useState } from "react";
import StreetOpsApp from "@/components/LatestlandingPage/streetops-app";

const ourStoryData = [
  {
    id: 1,
    heading: "History of the Company",
    info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus ab sequi totam odit culpa atque officia voluptate dolorum tenetur deleniti, voluptates aliquid rerum nobis minima nesciunt eos est repudiandae, veniam inventore neque impedit necessitatibus non. Atque, commodi temporibus unde debitis ratione sunt repudiandae laboriosam placeat aliquid ut inventore enim suscipit!",
  },
  {
    id: 2,
    heading: "Mission",
    info: (
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus ab sequi
        totam odit culpa atque officia voluptate dolorum tenetur deleniti,{" "}
        <span className="font-medium">voluptates aliquid </span>rerum nobis
        minima nesciunt eos est repudiandae, veniam inventore neque impedit
        necessitatibus non. Atque, commodi temporibus unde debitis ratione sunt
        repudiandae laboriosam placeat aliquid ut inventore enim suscipit!
      </p>
    ),
  },
  {
    id: 3,
    heading: "Company Values",
    info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus ab sequi totam odit culpa atque officia voluptate dolorum tenetur deleniti, voluptates aliquid rerum nobis minima nesciunt eos est repudiandae, veniam inventore neque impedit necessitatibus non. Atque, commodi temporibus unde debitis ratione sunt repudiandae laboriosam placeat aliquid ut inventore enim suscipit!",
  },
];

const page = () => {
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
          {<Hero />}
        </div>
        {<Approach />}
        {/* {<TrainingSection />}
      {<TrainingFormats />}
      {<TrainingTopics />}
      {<TrainingCalendar />} */}
        {/* <StreetOpsApp /> */}
        {<Services />}
        {<Customization />}
        {/* {<TestimonialSection />}
      {<FAQSection />}
      {<ChoiceSection />}
      {<TrainingCta />} */}

        {/* {<WhoWereBuilding/>} */}
        {<HowItWorks />}
        {/* {<CtaSection/>} */}
        <Footer />
        {/* <SlideContent/> */}
      </div>
    </>
  );
};

export default page;
