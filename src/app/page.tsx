
import Footer from "@/components/LandingPageComponents/Footer";
import { Header } from "@/components/LandingPageComponents/Header";
import { HeroSection } from "@/components/LandingPageComponents/HeroSection";
import Section from "@/components/LandingPageComponents/Section";
import Sponsors from "@/components/LandingPageComponents/Sponsors";

const page = () => {
  return (
    <div className="my-4">
      <Header/>
      <HeroSection/>
      <Sponsors/>
      <Section/>
      <Footer/>
    </div>
  );
}

export default page
