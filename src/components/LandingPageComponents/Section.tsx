"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

// Reusable InfoBlock Component
const InfoBlock = ({
  title,
  text,
  imgSrc,
  imgAlt,
  bgColor,
}: {
  title: string;
  text: string;
  imgSrc: string;
  imgAlt: string;
  bgColor: string;
}) => (
  <div className={`flex-1 ${bgColor} p-6 rounded-lg flex flex-col items-center`}>
    <h2 className="font-semibold text-xl lg:text-2xl text-center">{title}</h2>
    <p className="text-base pt-4 text-justify">{text}</p>
    <Image alt={imgAlt} src={imgSrc} width={250} height={250} className="mt-4 rounded-lg" />
  </div>
);

const Section = () => {
  return (
    <div className="lg:px-32 md:px-8 px-4 flex flex-col justify-start items-center min-h-screen py-10 space-y-10">
      {/* Work Life Balance Section */}
      <div className="flex flex-col lg:flex-row items-center bg-[#e0dcfa] p-6 rounded-lg gap-6 w-full max-w-6xl">
        <div className="flex-1 space-y-4">
          <h2 className="font-semibold text-2xl lg:text-[2.2rem] leading-snug lg:text-start text-center">
            The Future of <br className="block sm:hidden" />
            Balanced Workforces.
          </h2>
          <p>
            We are championing workforce evolution, offering innovative operational strategies that drive business transformation. By integrating specialized recruitment, smart automations and workflow optimization, we empower organizations to thrive. Our focus is on delivering 'The Future of Balanced Workforces' - where talent blends with technology.
          </p>
          <Link href="/#" className="text-primary flex items-center gap-2 font-medium hover:underline">
            Get Started <FaArrowRight />
          </Link>
        </div>
        <Image alt="Workforce Collaboration" src="/connect.png" width={300} height={300} />
      </div>

      {/* People & Processes Section */}
      <div className="flex flex-col lg:flex-row gap-6 w-full max-w-6xl">
        <InfoBlock
          title="People"
          text={`We believe that people are the core of every successful organization. Our People section provides strategic solutions to maximize your human capital investment. We offer:
- Strategic Recruitment: Identifying and placing the right talent to achieve your business objectives.
- Transformative Training: Equipping your workforce with the skills and knowledge needed to excel.
- Human Capital Leadership (Africa): Actively contributing to the development of human capital across the African continent through webinars, training programs, and a dynamic blog, fostering a community of growth and innovation.`}
          imgSrc="/people.png"
          imgAlt="Strategic People Solutions"
          bgColor="bg-purple-100"
        />

        <InfoBlock
          title="Processes"
          text={`We partner with organizations to transform their operations and achieve peak performance. Our Processes section delivers strategic consulting services, including: 
- Operational Consulting: Providing expert guidance to optimize workflows, reduce costs, and improve overall operational effectiveness.
- Process Automation: Leveraging automation technologies to drive efficiency, accuracy, and scalability.
- Comprehensive Consulting Solutions: Offering a suite of consulting services to support organizational change, improve project delivery, and enhance overall business performance.`}
          imgSrc="/processes.png"
          imgAlt="Process Optimization"
          bgColor="bg-purple-200"
        />
      </div>

      {/* Advantages Section */}
      <div className="flex flex-col-reverse lg:flex-row items-center mt-10 pt-10 p-6 rounded-lg gap-6 w-full max-w-6xl">
        {/* Text Section */}
        <div className="flex-1 space-y-4">
          <h2 className="font-semibold text-2xl lg:text-[2.2rem] leading-snug">
            Get many advantages when
            <br className="block sm:hidden" />
            you use our application
          </h2>
          <p>
            We help businesses free up working capital by accelerating
            <br className="hidden sm:block" />
            payments to suppliers. This type of financing is also known as
            <br className="hidden sm:block" />
            supply chain financing and provides businesses with an
            <br className="hidden sm:block" />
            efficient solution.
          </p>
          <button
            type="button"
            className="bg-primary text-white p-2 rounded-lg hover:bg-white border border-primary transition-all duration-500 hover:text-primary cursor-pointer"
          >
            Read More
          </button>
        </div>

        {/* Image Section */}
        <Image alt="Financial Solution Application" src="/solution-1.png" width={300} height={300} />
      </div>
    </div>
  );
};

export default Section;
