"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

const Section = () => {
  return (
    <div className="lg:px-32 md:px-8 px-4 flex flex-col justify-start items-center min-h-screen px-4  lg:px-20 py-10 space-y-10">
      {/* Header Section */}
      {/* <div className="text-center space-y-4 max-w-2xl">
        <h1 className="font-semibold text-2xl sm:text-3xl lg:text-[2.7rem] leading-tight">
          Expertise
          <br className="block sm:hidden" />
          
        </h1>
        <p className="text-base sm:text-lg">
          We offer a range of benefits that makes it the
          <span className="hidden sm:inline"> the </span>
          <span className="sm:hidden block"> </span>
          perfect choice for businesses <></>
          <br className="hidden sm:block" />
          looking to optimize their cash flow and reduce supply chain risk.
        </p>
      </div> */}

      {/* work life balance */}
      <div className="flex flex-col lg:flex-row  items-center bg-[#e0dcfa] p-6 rounded-lg gap-6 w-full max-w-6xl">
        <div className="flex-1 space-y-4">
          <h2 className="font-semibold text-2xl lg:text-[2.2rem] leading-snug  lg:text-start text-center">
          The Future of <span> </span>
            <br className="block sm:hidden" />
            Balanced Workforces.
          </h2>
          <p>
          We are championing workforce evolution, offering innovative operational strategies that drive business transformation. By integrating specialized recruitment, smart automations and workflow optimization, we empower organizations to thrive. Our focus is on delivering 'The Future of Balanced Workforces' - where talent blends with technology. <></>
            {/* <br className="hidden sm:block" />
            payments to suppliers. This type of financing is also known as <></>
            <br className="hidden sm:block" />
            supply chain financing and provides businesses with an <></>
            <br className="hidden sm:block" />
            efficient solution. */}
          </p>
          <Link href="/#" className="text-primary flex items-center gap-2">
            Get Started <FaArrowRight />
          </Link>
        </div>
        <Image alt="paige" src="/connect.png" width={300} height={300} />
      </div>

      {/* Suppliers & Financiers Section */}
      <div className="flex flex-col lg:flex-row gap-6 w-full max-w-6xl">
        {/* People */}
        <div className="flex-1 bg-purple-100 p-6 rounded-lg flex flex-col items-center">
          <h2 className="font-semibold text-xl lg:text-2xl text-center">
          People
          </h2>
          <p className="text-base pt-4 text-justify">
        We believe that people are the core of every successful organization. Our People section provides strategic solutions to maximize your human capital investment. We offer:

        Strategic Recruitment: Identifying and placing the right talent to achieve your business objectives.
        Transformative Training: Equipping your workforce with the skills and knowledge needed to excel.
        Human Capital Leadership (Africa): Actively contributing to the development of human capital across the African continent through webinars, training programs, and a dynamic blog, fostering a community of growth and innovation.
          </p>
          <Image
            alt="paige"
            src="/people.png"
            width={250}
            height={250}
            className="mt-4 rounded-lg"
          />
        </div>

        {/* Processes */}
        <div className="flex-1 bg-purple-200 p-6 rounded-lg flex flex-col items-center">
          <h2 className="font-semibold text-xl lg:text-2xl text-center">
           Processes
          </h2>
          <p className="text-base pt-4 text-justify">
          We partner with organizations to transform their operations and achieve peak performance. Our Processes section delivers strategic consulting services, including:

          Operational Consulting: Providing expert guidance to optimize workflows, reduce costs, and improve overall operational effectiveness.
          Process Automation: Leveraging automation technologies to drive efficiency, accuracy, and scalability.
          Comprehensive Consulting Solutions: Offering a suite of consulting services to support organizational change, improve project delivery, and enhance overall business performance.
          </p>
          <Image
            alt="paige"
            src="/processes.png"
            width={250}
            height={200}
            className="mt-4 rounded-lg"
          />
        </div>
      </div>
      {/* Get many advanatages section */}
      <div className="flex flex-col-reverse lg:flex-row items-center mt-10 pt-10 p-6 rounded-lg gap-6 w-full max-w-6xl">
  {/* Text Section */}
  <div className="flex-1 space-y-4">
    <h2 className="font-semibold text-2xl lg:text-[2.2rem] leading-snug">
      Get many advantages when <></>
      <br className="block sm:hidden" /><></>
       you use our application
    </h2>
    <p>
      We help businesses free up working capital by accelerating
      <br className="hidden sm:block" /> <></>
      payments to suppliers. This type of financing is also known as
      <br className="hidden sm:block" /> <></>
      supply chain financing and provides businesses with an
      <br className="hidden sm:block" /> <></>
      efficient solution.
    </p>
    <button type="submit" className="bg-primary text-white p-2 rounded-lg hover:bg-wht border-primary transition-all duration-500 hover:text-primary cursor-pointer">
      Read More
    </button>
  </div>

  {/* Image Section */}
  <Image alt="paige" src="/solution-1.png" width={300} height={300} />
</div>

    </div>
  );
};

export default Section;
