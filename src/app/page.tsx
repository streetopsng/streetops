

import Footer from "@/components/LandingPageComponents/Footer";
import { Header } from "@/components/LandingPageComponents/Header";
import { HeroSection } from "@/components/LandingPageComponents/HeroSection";
import Section from "@/components/LandingPageComponents/Section";
import Sponsors from "@/components/LandingPageComponents/Sponsors";

import SubLinksComponent from "@/components/SubLinksComponent";
import Image from "next/image";

const page = () => {
  return (
    <div className="">
      <SubLinksComponent/>
  <div className="rad-gradient pb-4">

      <Header/>
      <HeroSection/> 
      
      {/* <Sponsors/> */}
  </div>
      <Section/>
      {/* Image */}
     
      <div className="relative w-full lg:h-[500px] min-h-[300px] mt-4 mb-2">
        <Image
        className="absolute top-0 w-full h-full object-cover"
        fill 
        src={"/rekrut-paige.jpg"} 
        alt="rekrut-paige" />
      </div>
      <Footer/>
    
    </div>
  );
}

export default page
