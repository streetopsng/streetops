"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

const Section = () => {
  return (
    <div className="flex flex-col justify-start items-center min-h-screen px-4 sm:px-6 lg:px-20 py-10 space-y-10">
      {/* Header Section */}
      <div className="text-center space-y-4 max-w-2xl">
        <h1 className="font-semibold text-2xl sm:text-3xl lg:text-[2.7rem] leading-tight">
          Enabling Millions of African
          <br className="block sm:hidden" />
          SMEs Get Financing
        </h1>
        <p className="text-base sm:text-lg">
          We offer a range of benefits that makes it the
          <span className="hidden sm:inline"> the </span>
          <span className="sm:hidden block"> </span>
          perfect choice for businesses <></>
          <br className="hidden sm:block" />
          looking to optimize their cash flow and reduce supply chain risk.
        </p>
      </div>

      {/* Buyers Section */}
      <div className="flex flex-col lg:flex-row items-center bg-purple-300 p-6 rounded-lg gap-6 w-full max-w-6xl">
        <div className="flex-1 space-y-4">
          <h2 className="font-semibold text-2xl lg:text-[2.2rem] leading-snug">
            Solutions For
            <br className="block sm:hidden" />
            Buyers
          </h2>
          <p>
            We help businesses free up working capital by accelerating <></>
            <br className="hidden sm:block" />
            payments to suppliers. This type of financing is also known as <></>
            <br className="hidden sm:block" />
            supply chain financing and provides businesses with an <></>
            <br className="hidden sm:block" />
            efficient solution.
          </p>
          <Link href="/#" className="text-primary flex items-center gap-2">
            Get Started <FaArrowRight />
          </Link>
        </div>
        <Image alt="paige" src="/solution-1.png" width={300} height={300} />
      </div>

      {/* Suppliers & Financiers Section */}
      <div className="flex flex-col lg:flex-row gap-6 w-full max-w-6xl">
        {/* Suppliers */}
        <div className="flex-1 bg-orange-200 p-6 rounded-lg flex flex-col items-center">
          <h2 className="font-semibold text-xl lg:text-2xl text-center">
            Solutions For
            <br className="block sm:hidden" />
            Suppliers
          </h2>
          <p className="text-base pt-4 text-center">
            We help suppliers get paid faster by providing them <></>
            <br className="hidden sm:block" />
            with access to financing options that allow them to <></>
            <br className="hidden sm:block" />
            receive payment for their invoices before they are due.<></>
            <br className="hidden sm:block" />
            This type of financing is also known as invoice financing <></>
            <br className="hidden sm:block" /> <></>
            and provides suppliers with an efficient
          </p>
          <Image
            alt="paige"
            src="/graph.png"
            width={250}
            height={250}
            className="mt-4 rounded-lg"
          />
        </div>

        {/* Financiers */}
        <div className="flex-1 bg-blue-100 p-6 rounded-lg flex flex-col items-center">
          <h2 className="font-semibold text-xl lg:text-2xl text-center">
            Solutions For
            <br className="block sm:hidden" />
            Financiers
          </h2>
          <p className="text-base pt-4 text-center">
            We help suppliers get paid faster by providing them <></>
            <br className="hidden sm:block" /><></>
            with access to financing options that allow them to <></>
            <br className="hidden sm:block" /><></>
            receive payment for their invoices before they are due.
            <br className="hidden sm:block" /><></>
            This type of financing is also known as invoice financing <></>
            <br className="hidden sm:block" /><></>
            and provides suppliers with an efficient
          </p>
          <Image
            alt="paige"
            src="/stat.png"
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
      Get many advantages when 
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
