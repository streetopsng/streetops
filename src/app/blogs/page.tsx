"use client"
import { Header } from '@/components/LandingPageComponents/Header'
import React, { useEffect } from 'react'

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { dispatchType, RootStateType } from '@/store';
import { useQuery } from '@tanstack/react-query';
import { blogPostType, storeBlogs } from '@/store/slices/allBlogs';
import Footer from '@/components/LandingPageComponents/Footer';
import PagePreloader from '@/utils/PagePreloader';
import TempHeader from '@/components/LandingPageComponents/TempHeader';


async function fetchData() {
    const res = await fetch(`/api/blog/get-blogs`)
    if (!res.ok) {
        return {
            message:"something went wrong",
            success:false
        }
    }
    const response = await res.json()
  return response
  }
const page = () => {
    const blogs = useSelector((store:RootStateType)=>{
return store.blogsReducer
    })
    const dispatch = useDispatch<dispatchType>()
    const {data,isLoading,error} = useQuery({
        queryKey:["allblogs"],
        queryFn:fetchData
      })

      useEffect(()=>{
    console.log(data);
    if (data?.success) {
        dispatch(storeBlogs(data.data))
        localStorage.setItem("blogs",JSON.stringify(data.data))
    }
    
          },[isLoading])
          const router = useRouter()
  return (
    <div className=''>
 <TempHeader/>


 {/* <SlideContent/> */}
 <div className="w-full lg:h-[80vh] h-[50vh] relative flex flex-col justify-center items-center px-8 text-center">

 <h1 className={`lg:text-5xl md:text-3xl text-2xl font-semibold animated-gradient-slide-text lg:w-[60%] w-full`}>Explore Experts Insights and Practical Tips on StreetOps</h1>  
<p className={`md:text-xl text-lg lg:w-[60%] w-full `}>Stay informed and empowered with valuable articles, expert advice, and actionable tips to help you navigate your financial journey with confidence</p> 
 </div>

 {/* <p><u>kslsksjdsdslslfjsdfkjoesldkfsdjfdndmdklsaldisfslaofsl</u></p><p></p><p><strong><u>chris</u></strong></p><p></p><p><em>i dont play</em></p> */}
    {/* <div
    
    className='text-[red]'
    dangerouslySetInnerHTML={{ __html: "<p><u>kslsksjdsdslslfjsdfkjoesldkfsdjfdndmdklsaldisfslaofsl</u></p><p></p><p><strong><u>chris</u></strong></p><p></p><p><em>i dont play</em></p>" }}
    >
    </div> */}
    <div className='my-8 '>
<h1 className='text-center font-semibold md:text-[1.7rem] text-[1.4rem]  animated-gradient-text-two '>BLOGS</h1>
 {blogs.length < 1 && isLoading  ? (
     
<div className="xl:px-10 md:px-8 px-4 text-grayOne w-full h-[60vh] flex items-center justify-center flex-col">
        <PagePreloader/>
        <h1 className="italic my-2 ">Loading Available Blogs...</h1>
      </div>
): blogs.length < 1 ? (
    <div className='py-4'>
        <h1 className='text-center text-primary text-lg'>no blog available at the moment</h1>
    </div>
): ""}

    {blogs.length > 0 && <article 
    // flex  flex-wrap   my-4 py-4 bg-[red] gap-x-4
    className=' mx-auto w-[90%] grid-class  flex  flex-wrap   my-4 py-4  gap-[3%]'
    >
{/* mapp through blog */} 

{blogs.map((item:blogPostType,index:any)=>{

    return <div key={index} className='text-grayOne cursor-pointer lg:w-[30%] md:w-[45%] w-[95%]  ' onClick={()=> router.push(`/blogs/${item.title.replace(/ /g,"-").toLocaleLowerCase()}-${item._id}`)}>
        <div className='relative w-[100%] min-h-[250px]'>
            <Image
            src={item.imageUrl}  
            alt={item.date}
            fill
            className='absolute w-full h-full rounded-lg object-cover'
            />
        </div>
        <div>
            <span className='text-sm'>{item.date}</span>
        </div>
        <div>
            <h1 className='font-bold text-lg text-grayTwo'>{item.title}</h1>
        </div>
    </div>
})}

 </article>}
</div>

 <Footer/>
    </div>
  )
}

export default page