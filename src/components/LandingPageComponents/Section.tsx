"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

const Section = () => {
  return (
    <div className="flex flex-col justify-center items-center px-4 lg:px-20 py-12 space-y-10">
      {/* Header Section */}
      <div className="text-center space-y-4 max-w-3xl">
        <h1 className="font-semibold text-2xl sm:text-3xl lg:text-[2.7rem]">
          Enabling Millions of African <br className="hidden sm:block" /> SMEs Get Financing
        </h1>
        <p className="text-base sm:text-lg">
          We offer a range of benefits that make it the perfect choice for businesses <br className="hidden sm:block" />
          looking to optimize their cash flow and reduce supply chain risk.
        </p>
      </div>

      {/* Buyers Section */}
      <div className="flex flex-col lg:flex-row items-center bg-purple-300 p-6 rounded-lg gap-6 w-full max-w-6xl">
        <div className="flex-1 space-y-4">
          <h2 className="font-semibold text-2xl lg:text-[2.2rem]">Solutions For Buyers</h2>
          <p>
            We help businesses free up working capital by accelerating <br className='hidden sm:block' />
            payments to suppliers. This type of financing is also known as <br className='hidden sm:block' />
            supply chain financing and provides businesses with an <br className='hidden sm:block'/>
            efficient solution.
          </p>
          <Link href="/#" className="text-primary flex items-center gap-2">
            Get Started <FaArrowRight />
          </Link>
        </div>
        <Image alt="paige" src="/solution-1.png" width={500} height={300} />
      </div>

      {/* Suppliers & Financiers Section */}
      <div className="flex flex-col lg:flex-row gap-6 w-full max-w-6xl">
        {/* Suppliers */}
        <div className="flex-1 bg-orange-200 p-6 rounded-lg flex flex-col items-center">
          <h2 className="font-semibold text-xl lg:text-2xl text-center">Solutions For Suppliers</h2>
          <p className="text-base pt-4 text-center">
            We help suppliers get paid faster by providing them <br className='hidden sm:block md:block' />
            with access to financing options that allow them to <br className='hidden sm:block md:block' />
            receive payment for their invoices before they are due. <br className='hidden sm:block md:block' />
            This type of financing is also known as invoice financing <br className='hidden sm:block md:block' />
            and provides suppliers with an efficient solution.
          </p>
          <Image alt="paige" src="/graph.png" width={400} height={250} className="mt-4 rounded-lg" />
        </div>

        {/* Financiers */}
        <div className="flex-1 bg-blue-100 p-6 rounded-lg flex flex-col items-center ">
          <h2 className="font-semibold text-xl lg:text-2xl text-center">Solutions For Financiers</h2>
          <p className="text-base pt-4 text-center">
            We help suppliers get paid faster by providing them <br className='hidden sm:block md:block' />
            with access to financing options that allow them to <br className='hidden sm:block md:block' />
            receive payment for their invoices before they are due. <br className='hidden sm:block md:block'/>
            This type of financing is also known as invoice financing <br className='hidden sm:block md:block' />
            and provides suppliers with an efficient solution.
          </p>
          <Image alt="paige" src="/stat.png" width={300} height={200} className="mt-4 rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default Section;
