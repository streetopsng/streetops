import HeroSlug from '@/components/JobsPageComponents/DynamicPageComponents/HeroSlug'
import JobsDescription from '@/components/JobsPageComponents/DynamicPageComponents/JobsDescription'
import { Header } from '@/components/LandingPageComponents/Header'
import React from 'react'

const page = () => {
  return (
    <div>
 <Header/>
 <HeroSlug/>
 <JobsDescription/>

    </div>
  )
}

export default page