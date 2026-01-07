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
// import Approach from "@/components/LatestlandingPage/approach";
import CtaSection from "@/components/LatestlandingPage/cta-section";
import HowItWorks from "@/components/LatestlandingPage/how-it-works";
import Services from "@/components/LatestlandingPage/services";
import WhoWereBuilding from "@/components/LatestlandingPage/who-were-building";
import Footer from "@/components/LatestlandingPage/footer";
import dayjs from "dayjs";

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
    <div className="">
      <div className="md:px-8  px-4">
        {<Header />}
        {/* {<Hero />} */}
      </div>
      {<TrainingSection />}
      {<TrainingFormats />}
      {<TrainingTopics />}
      {<TrainingCalendar />}
      {<Customization />}
      {<TestimonialSection />}
      {<FAQSection />}
      {<ChoiceSection />}
      {<TrainingCta />}
      {/* {<Approach/>} */}
      {/* {<Services/>} */}

      {/* {<WhoWereBuilding/>} */}
      {/* {<HowItWorks/>} */}
      {/* {<CtaSection/>} */}
      <Footer />
      {/* <SlideContent/> */}
    </div>
  );
};

export default page;
