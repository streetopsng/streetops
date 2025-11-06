"use client"

import Header from '@/components/NewLandingPage/header'
import { RootStateType } from '@/store'
import PagePreloader from '@/utils/PagePreloader'
import { useMutation } from '@tanstack/react-query'

import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'


type contentType = {
content:string,
createdAt:string,
date:string,
imageUrl:string,
title:string,
updatedAt:string,
__v:number,
_id:string
}

async function fetchBlog(id:string) {
    const res = await fetch(`/api/blog/${id}`)
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
    const {slug} = useParams()
    const [content,setContent] = useState<Partial<contentType>>({})
    // const blogs = useSelector((store:RootStateType)=>{
    //     return store.blogsReducer
    //         })
    const value = slug as string

    const mutation = useMutation({
        mutationFn:fetchBlog,
        onSuccess:(data)=>{
console.log(data);
setContent(data.data)

        },
        onError:(data)=>{
alert("cant fetch blog at the moment,please reload the site")
        }
    })

    console.log(value.split("---")[1]);
    

    useEffect(()=>{

mutation.mutate(value.split("---")[1])
        
    },[])
    if (!slug) {
        return <div>
            blog not available
        </div>
    }
// const getLastValue = value.split("-")[value.split("-").length - 1]
 
//     const content = blogs.find(item => item._id.toString() == getLastValue)
    
    
    // // console.log(content);
    // if (!content) {
    //     return <div>
    //         content unavailable
    //     </div>
    // }
    
  return (
    <div className='text-grayOne xl:px-10 md:px-8 px-4'>
 <Header/>

 {mutation.isPending && (
    <div className=" text-grayOne w-full h-[60vh] flex items-center justify-center flex-col">
    <PagePreloader/>
    <h1 className="italic my-2 ">Loading blog content</h1>
  </div>
 )}
 
 {mutation.isError && (

<div className=" text-grayOne w-full h-[60vh] flex items-center justify-center flex-col">

<h1 className="italic my-2 ">An error occured while trying to fetch blog post.</h1>
</div>
 )}

 {mutation.isSuccess && (
   <article className='lg:px-16 md:px-8 px-4 my-8'>

   <section className=''>
       <span className='text-sm'>{content?.date}</span>
   </section>
   <section className='my-8'>
       <h1 className='font-semibold lg:text-3xl text-lg'>{content?.title}</h1>
   </section>
       <div
   
   className='text-grayOne md:text-[1rem] leading-8'
   dangerouslySetInnerHTML={{ __html: content.content  as string}}
   >
   </div>

</article>
 )}
{/* <article className='lg:px-16 md:px-8 px-4 my-8'>

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
 
</article> */}

{/* <Footer/> */}
    </div>
  )
}

export default page