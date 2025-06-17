"use client"
import { CiLocationOn } from "react-icons/ci";
import { MdAccessTime } from "react-icons/md";
import React, { useEffect, useState } from 'react'
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { jobsList } from "@/utils/jobs";

  const address = process.env.NEXT_PUBLIC_ADDRESS
  const inputClass = "border-grayTwotext-grayTwo border-1 rounded-md py-2 pl-2 md:w-[32%] "

  const fetJobsList = async()=> {
    const res = await fetch(`${address}/api/jobs`)
    const response = await res.json()
    return response
  }
const JobsListAdmin = () => {
    const [jobs] = useState<any[]>(jobsList)
const {data:res,isLoading,error} = useQuery({
    queryKey:["jobs"],
    queryFn:fetJobsList
})

useEffect(()=>{

    console.log(res,isLoading);
},[isLoading])
if (isLoading) {
    return <div className="xl:px-10 md:px-8 px-4 text-grayOne">
<h1>Loading</h1>
    </div>
}
// Error
if (error) {
    return <div className="xl:px-10 md:px-8 px-4 text-grayOne">
<h1>
    something went wrong,please roload the page
</h1>
    </div>
}

// Data
  return (
    <div className="xl:px-10 md:px-8 px-4 text-grayOne">
      <h1 className="lg:text-[2rem] text-[1.5rem] text-white text-center font-semibold">Posted Jobs</h1>

<section>
    {
        res && res.data.length > 0 && res.data.map((job:any)=>{

            return <div key={job._id} className="border-[2px]  border-grayTwo  rounded-md my-4 py-4 px-2 md:flex justify-between">
                <aside className="md:w-[80%]">
<h1 className="font-bold">{job.jobTitle}</h1>
{/* <div className="flex items-center gap-x-2 my-2 text-grayTwo"><span><CiLocationOn/> </span> <span>{job.location}</span></div> */}
<div className="flex items-center gap-x-2 my-2 text-grayTwo"><span><MdAccessTime/></span> <span>{job.workPlace} </span></div>
                </aside>

<aside className="flex justify-end md:items-center ">
    <Link href={`/jobs/${job.id}`} className="bg-primary  text-center w-[150px] py-2 rounded-lg cursor-pointer hover:opacity-90">See Applicants</Link>
</aside>
            </div>
        })
    }
</section>
{/* Total jobs */}
<p className="text-center">1 of 241</p>
<div className="flex justify-end">
    <button className="bg-primary  w-[100px] py-2 rounded-lg">Next</button>
</div>
    </div>
  )
}

export default JobsListAdmin