

import LookingToHire from "@/components/JobsPageComponents/LookingToHire";
import Footer from "@/components/LandingPageComponents/Footer";
import { Header } from "@/components/LandingPageComponents/Header";
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
    info:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus ab sequi totam odit culpa atque officia voluptate dolorum tenetur deleniti, voluptates aliquid rerum nobis minima nesciunt eos est repudiandae, veniam inventore neque impedit necessitatibus non. Atque, commodi temporibus unde debitis ratione sunt repudiandae laboriosam placeat aliquid ut inventore enim suscipit!"
  },
  {
    id:3,
    heading:"Company Values",
    info:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus ab sequi totam odit culpa atque officia voluptate dolorum tenetur deleniti, voluptates aliquid rerum nobis minima nesciunt eos est repudiandae, veniam inventore neque impedit necessitatibus non. Atque, commodi temporibus unde debitis ratione sunt repudiandae laboriosam placeat aliquid ut inventore enim suscipit!"
  },
]

const page = () => {
  return (
    <div className="">
      {/* <WhatsApp/> */}
  <div className="p-0">
{/* 
      <Header/> */}
      <TempHeader/>
      <SlideContent/>
      <Sponsors/>
      <JoinWaitlist/>
      {/* <HeroSection/>  */}
      
  </div>
      {/* <Section/> */}
      {/* Image */}
     {/* <Services/> */}
     {/* About */}
     {/* <div className="text-grayOne  xl:px-8 md:px-8 my-8 px-4 leading-[1.8rem]" id="about"  >

<aside className="" >
<h1 className='text-xl lg:text-[2.2rem] uppercase animated-gradient-text-two text-[1.5rem] text-center font-semibold'>About Us</h1>
<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim assumenda veniam consectetur blanditiis minus aut non delectus est beatae sequi, eum ex? Ab, animi excepturi hic delectus amet, maxime saepe nobis ipsum nesciunt fugit adipisci labore similique ad natus vitae accusamus harum distinctio cum consequatur aliquam. Doloremque assumenda laborum quasi fugit ipsam nisi corporis molestias. Unde, fugiat voluptatem? Sit, ex illo molestiae minima laborum nemo sequi, aspernatur voluptas ratione praesentium corporis amet blanditiis temporibus perspiciatis quasi ullam id modi fugit dolore deleniti consectetur adipisci expedita voluptates? Officia, magnam quas. Incidunt, saepe repudiandae quidem et placeat, eaque beatae nisi minima excepturi modi quas laboriosam dolore maiores consequuntur tempore porro ipsa, ducimus officiis maxime molestiae libero laborum reprehenderit dolor illum. Vitae at error doloribus, qui harum neque dolores quidem eius quam sequi tempora hic architecto ullam sint ipsa laboriosam maiores. Numquam possimus doloribus adipisci! Quam ex nemo nostrum impedit enim, officia minus culpa! Sint odit vero veniam laborum quidem dolore itaque ducimus? Rerum possimus obcaecati nobis debitis quaerat. Dicta doloremque magnam, placeat atque culpa fuga odio facere quisquam nostrum quam labore natus saepe reiciendis ipsum eum soluta maxime vero autem dolorum aliquam provident delectus vitae ipsam? Perferendis rerum necessitatibus autem temporibus totam!.</p>
</aside>

<aside>
<h1>Our Story</h1>

<aside className="flex flex-wrap items-center justify-between ">
  {ourStoryData.map((item,index)=>{

    return <div key={index + 1} className="md:w-[30%] w-[90%] mx-auto md:my-2 my-4">
     <h1 className="text-xl font-semibold text-center "> {item.heading}</h1>
     <p>{item.info}</p>

    </div>
  })}
</aside>

</aside>


     </div> */}
     {/* <LookingToHire/> */}
     {/* Rekrut */}
      {/* <div className="relative w-full lg:h-[500px] min-h-[300px] mt-4 mb-2">
        <Image
        className="absolute top-0 w-full h-full object-cover"
        fill 
        src={"/rekrut-paige.jpg"} 
        alt="rekrut-paige" />
      </div> */}
      {/* <Footer/> */}
    
    </div>
  );
}

export default page
