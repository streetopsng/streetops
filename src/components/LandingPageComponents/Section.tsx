"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa';

const Section = () => {
  return (
     <div className="justify-center items-center h-screen"> {/* Centers content vertically and horizontally */}
      <h1 className="font-semibold lg:text-[2.7rem] text-center">
        Enabling Millions of African <br /> SMEs Get Financing
      </h1>
    
      <p className="text-center">
        We offer a range of benefits that makes it perfect choice for businesses <br />
        looking to optimize their cash flow and reduce supply chain risk
      </p>
      <div className='px-55'>
      <div className="mt-10 bg-purple-300 p-3 rounded-lg flex justify-center items-center gap-x-8">
        <div>
          <h1 className="font-semibold lg:text-[2.7rem]">
            Solutions For <br /> Buyers
          </h1>
          <p>
            We help businesses free up working capital by accelerating <br />
            payments to suppliers. This type of financing is also known as <br />
            supply chain financing and provides businesses with an <br />
            efficient solution.
          </p>
         <Link href='/#' className='text-primary  '>Get Started <FaArrowRight/>  </Link>
        </div>
        <Image alt="paige" src="/solution-1.png" width={300} height={300} />
      </div>
    </div>
    </div>
    
  )
}

export default Section