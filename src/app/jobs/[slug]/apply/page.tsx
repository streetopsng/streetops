"use client"
import FormComponent from '@/components/ApplyToJobsComponents/FormComponent'
import HeroSectionForApply from '@/components/ApplyToJobsComponents/HeroSectionForApply'
import { Header } from '@/components/LandingPageComponents/Header'
import { useParams } from 'next/navigation'
import React from 'react'

const page = () => {
    const param = useParams()
  
    
  return (
    <div className='text-wht'>
        <Header/>
        <HeroSectionForApply/>
        <FormComponent/>
        
        
        </div>
  )
}

export default page