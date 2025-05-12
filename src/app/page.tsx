
import { Header } from "@/components/LandingPageComponents/Header";
import { HeroSection } from "@/components/LandingPageComponents/HeroSection";
import Section from "@/components/LandingPageComponents/Section";

const page = () => {
  return (
    <div className="my-4">
      <Header/>
      <HeroSection/>
      <Section/>
    </div>
  );
}

export default page
