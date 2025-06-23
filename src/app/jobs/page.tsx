"use client"
import GrowYourTeam from '@/components/JobsPageComponents/GrowYourTeam';
import HeroSection from '@/components/JobsPageComponents/HeroSection';
import JobsListComponent from '@/components/JobsPageComponents/JobsListComponent';
import LookingToHire from '@/components/JobsPageComponents/LookingToHire';
import Testimonies from '@/components/JobsPageComponents/Testimonies';
import Footer from '@/components/LandingPageComponents/Footer';
import { Header } from '@/components/LandingPageComponents/Header';
import { dispatchType } from '@/store';
import { closeSubmenu } from '@/store/slices/desktopSubmenuLinksSlice';
import { jobs } from '@/utils/jobs'
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import { GrFormNext } from "react-icons/gr";
import { GrFormPrevious } from "react-icons/gr";
import { useDispatch } from 'react-redux';

// const address = process.env.NEXT_PUBLIC_ADDRESS

const spanClass = "w-[25%] text-start  "
const page = () => {
    const [currentPage,setCurrentPage] = useState<number>(1)

    const itemsPerPage  = 10
    const totalPages = Math.ceil(jobs.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentPosts = jobs.slice(startIndex, startIndex + itemsPerPage);
    const dispatch = useDispatch<dispatchType>()
  return (
    <div>
        <Header/>
        {/* Image Hero section */}
        {/* <div>
            <div
             onMouseOver={()=> dispatch(closeSubmenu())}
             className="relative w-full lg:h-[500px] min-h-[300px] ">
                <Image
                className="absolute top-0 w-full h-full object-cover"
                fill 
                src={"/rekrut-paige.jpg"} 
                alt="rekrut-paige" />
              </div>
                </div> */}
        <HeroSection/>
        <JobsListComponent/>
        {/* <LookingToHire/> */}
        {/* <Testimonies/> */}
        {/* <GrowYourTeam/> */}
        <Footer/>
        {/* this page is currently undergoing maintenance,please check back later */}
    </div>

  )
}

export default page