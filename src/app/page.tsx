
import Footer from "@/components/LandingPageComponents/Footer";
import { Header } from "@/components/LandingPageComponents/Header";
import { HeroSection } from "@/components/LandingPageComponents/HeroSection";
import Section from "@/components/LandingPageComponents/Section";
import Sponsors from "@/components/LandingPageComponents/Sponsors";
import SubLinksComponent from "@/components/SubLinksComponent";

const page = () => {
  return (
    <div className="">
      <SubLinksComponent/>
  <div className="rad-gradient py-4">

      <Header/>
      <HeroSection/> 
      <Sponsors/>
  </div>
      {/* <Section/>
      <Footer/> */}
    </div>
  );
}

export default page
