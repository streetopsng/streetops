

import LookingToHire from "@/components/JobsPageComponents/LookingToHire";
import Footer from "@/components/LandingPageComponents/Footer";
import  Header from "@/components/NewLandingPage/header";
import Hero from "@/components/NewLandingPage/hero";
import ImageGallery from "@/components/NewLandingPage/image-gallery";
import { HeroSection } from "@/components/LandingPageComponents/HeroSection";
import JoinWaitlist from "@/components/LandingPageComponents/JoinWaitlist";
import Section from "@/components/LandingPageComponents/Section";
import Services from "@/components/LandingPageComponents/Services";
import Sponsors from "@/components/LandingPageComponents/Sponsors";
import TempHeader from "@/components/LandingPageComponents/TempHeader";
import SlideContent from "@/components/SlideContent";

import SubLinksComponent from "@/components/SubLinksComponent";
import WhatsApp from "@/components/Whatsapp";
import Image from "next/image";

const ourStoryData = [
  {
    id:1,
    heading:"History of the Company",
    info:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus ab sequi totam odit culpa atque officia voluptate dolorum tenetur deleniti, voluptates aliquid rerum nobis minima nesciunt eos est repudiandae, veniam inventore neque impedit necessitatibus non. Atque, commodi temporibus unde debitis ratione sunt repudiandae laboriosam placeat aliquid ut inventore enim suscipit!"
  },
  {
    id:2,
    heading:"Mission",
    info:(
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus ab sequi totam odit culpa atque officia voluptate dolorum tenetur deleniti, <span className="font-medium">voluptates aliquid </span>rerum nobis minima nesciunt eos est repudiandae, veniam inventore neque impedit necessitatibus non. Atque, commodi temporibus unde debitis ratione sunt repudiandae laboriosam placeat aliquid ut inventore enim suscipit!</p>
  )
  },
  {
    id:3,
    heading:"Company Values",
    info:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus ab sequi totam odit culpa atque officia voluptate dolorum tenetur deleniti, voluptates aliquid rerum nobis minima nesciunt eos est repudiandae, veniam inventore neque impedit necessitatibus non. Atque, commodi temporibus unde debitis ratione sunt repudiandae laboriosam placeat aliquid ut inventore enim suscipit!"
  },
]

const page = () => {
  return (
  <div  className="">
    <div className="md:px-8  px-4">
      {<Header/> }
      {<Hero/>}
    </div>
      {<ImageGallery/>}
      {/* <TempHeader/> */}
      {/* <SlideContent/> */}    
  </div>
  );
}

export default page
