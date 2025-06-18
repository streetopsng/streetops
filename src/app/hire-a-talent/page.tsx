"use client"

import CompaniesForm from '@/components/Hire-A-Talent-Components/CompaniesForm'
import HeroSection from '@/components/Hire-A-Talent-Components/HeroSection'
import Footer from '@/components/LandingPageComponents/Footer'
import { Header } from '@/components/LandingPageComponents/Header'
import React from 'react'

const page = () => {
  return (
    <div>
      <Header/>
      <HeroSection/>
        <CompaniesForm/>
        <Footer/>
    </div>
  )
}

export default page