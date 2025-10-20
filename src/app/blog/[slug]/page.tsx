"use client"

import Header from '@/components/NewLandingPage/header'
import { RootStateType } from '@/store'

import { useParams } from 'next/navigation'
import React from 'react'
import { useSelector } from 'react-redux'

const page = () => {
    const {slug} = useParams()
    const blogs = useSelector((store:RootStateType)=>{
        return store.blogsReducer
            })
    const value = slug as string
    if (!slug) {
        return <div>
            blog not available
        </div>
    }
const getLastValue = value.split("-")[value.split("-").length - 1]
 
    const content = blogs.find(item => item._id.toString() == getLastValue)
    
    // console.log(content);
    if (!content) {
        return <div>
            content unavailable
        </div>
    }
    
  return (
    <div className='text-grayOne xl:px-10 md:px-8 px-4'>
 <Header/>
<article className='lg:px-16 md:px-8 px-4 my-8'>

    <section className=''>
        <span className='text-sm'>{content?.date}</span>
    </section>
    <section className='my-8'>
        <h1 className='font-semibold lg:text-3xl text-lg'>{content?.title}</h1>
    </section>
        <div
    
    className='text-grayOne md:text-[1rem] leading-8'
    dangerouslySetInnerHTML={{ __html: content.content }}
    >
    </div>
    {/* <div>
        {content?.content}
    </div> */}
</article>

{/* <Footer/> */}
    </div>
  )
}

export default page