"use client"
import React from 'react'
import { FaStarOfLife } from "react-icons/fa";
interface formItemsType<S,N>{
    id:N,
    title:S,
    type:S
}
const formItems: formItemsType<string,number>[] =[
    {
        id:1,
        title:"Name",
        type:"text"
    },
    {
        id:2,
        title:"Surname",
        type:"text"
    },
    {
        id:3,
        title:"Phone number",
        type:"number"
    },
    {
        id:4,
        title:"Work Email Address",
        type:"email"
    },
    {
        id:5,
        title:"Company name",
        type:"text"
    },
    {
        id:6,
        title:"Company website",
        type:"text"
    },
    {
        id:6,
        title:"Your position at the company",
        type:"text"
    },

]
const GrowYourTeam = () => {
  return (
    <div className='text-grayTwo flex flex-col lg:flex-row xl:px-8 md:px-8 px-4 gap-y-6 lg:gap-y-0 my-6' >
{/* First Section */}
<section className='lg:w-[50%] '>
<h1 className='text-[2rem]  font-semibold text-wht'>Looking To Grow
Your Team?</h1>
<p>If you're looking for your next software engineer, product manager, or to build your entire leadership team with our assistance - we specialise in helping FinTech companies like yours uncover the talent necessary to optimise growth.</p>
</section>

<form action="" className='border-grayTwo rounded-md lg:border-1 lg:w-[50%] lg:px-4'>
    {
        formItems.map((item,index)=>{

            return <div key={index} className='flex flex-col my-4'>
                
        <label htmlFor={item.title} className='flex items-center gap-x-4 text-wht'><span>{item.title}</span><span><FaStarOfLife size={10} className='text-[red]'/></span></label>
        <input
        type={item.type}
        name={item.title}
        placeholder={item.title}
        className='border-b-1 border-grayTwo h-[50px] outline-none'
        id={item.title} />
            </div>
        })
    }
    {/* radio  */}
    <div className='my-4'>
       <label htmlFor="" className='text-wht'> Do you have job description?</label>
       <div className='flex gap-x-4 my-2'>
        <section className='flex gap-2'>
            
        <label htmlFor="">Yes</label>
        <input
        className='accent-primary'
        type="radio" name="desc" id="Yes" />
        </section>
        <section className='flex gap-2'>
            
            <label htmlFor="no">No</label>
            <input 
            className='accent-primary'
            type="radio" name="desc" id="no" />
            </section>
       </div>
    </div>


    {/* Check box */}

    <div>
        <label htmlFor="" className='my-4 text-wht'  >Request a call back</label>
        <div className='flex items-center gap-x-2 my-2'>
            <input 
            className='accent-primary'
            type="checkbox" name="" id="" />
            <label htmlFor="">Yes please</label>
        </div>
    </div>
    <div className='flex justify-end py-2'>
        <button className='bg-primary text-wht px-4 py-2 rounded-md'>Submit</button>
    </div>
</form>
    </div>
  )
}

export default GrowYourTeam