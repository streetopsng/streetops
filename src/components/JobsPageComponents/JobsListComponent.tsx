"use client"
import { CiLocationOn } from "react-icons/ci";
import { MdAccessTime } from "react-icons/md";
import React, { useEffect, useState } from 'react'
import Link from "next/link";
import { jobsList } from "@/utils/jobs";

  
  const inputClass = "border-grayTwo text-grayTwo border-1 rounded-md py-2 pl-2 md:w-[32%] "
const JobsListComponent = () => {
    const [jobs] = useState<any[]>(jobsList)
    const [itemsToDiplay,setItemsToDisplay] = useState<any[]>([])
    const [currentPage,setCurrentPage] = useState<number>(0)
    const [totalPages,setTotalPages] = useState<number>(0)

    const itemsPerPage = 5
    useEffect(()=>{
const startIndex = currentPage * itemsPerPage
const endIndex = startIndex + itemsPerPage

setTotalPages(Math.ceil(jobs.length / itemsPerPage))
console.log(Math.ceil(jobs.length / itemsPerPage));

setItemsToDisplay(jobs.slice(startIndex,endIndex))
    },[currentPage])
  return (
    <div className="xl:px-10 md:px-8 px-4 text-grayOne">
      <h1 className="lg:text-[2rem] text-[1.5rem] text-white text-center font-semibold">Available Jobs</h1>
{/* form section */}
{/* <section className="md:flex justify-between items-center">
    
    <div className="flex  flex-col md:flex-row md:justify-between gap-y-4 my-4 md:w-[80%] ">
    <input 
    type="text"
    placeholder='search keyword'
    className={inputClass}
     />
    <input 
    type="text"
    placeholder='search country'
    className={inputClass}
    />
    <input 
    type="text"
    placeholder='search city'
    className={inputClass}
    />
    </div>
    <div className="flex justify-center">
    <button className="bg-primary text-wht w-[100px] py-2 rounded-lg md:min-h-[50px]">Search Jobs</button>
    </div>
</section> */}


{/* Jobs Section */}
<section>
    {
        itemsToDiplay && itemsToDiplay.map((job,index)=>{

            return <div key={job.id} className="border-[2px]  border-grayTwo  rounded-md my-4 py-4 px-2 md:flex justify-between">
                <aside className="md:w-[80%]">
<h1 className="font-bold">{job.jobTitle}</h1>
<div className="flex items-center gap-x-2 my-2 text-grayTwo"><span><CiLocationOn/> </span> <span>{job.location}</span></div>
<div className="flex items-center gap-x-2 my-2 text-grayTwo"><span><MdAccessTime/></span> <span>Full time | On-site </span></div>
                </aside>

<aside className="flex justify-end md:items-center ">
    <Link href={`/jobs/${job.id}`} className="bg-primary  text-center w-[100px] py-2 rounded-lg cursor-pointer hover:opacity-90">Apply</Link>
</aside>
            </div>
        })
    }
</section>
{/* Total jobs */}
<p className="text-center">{currentPage + 1} of {totalPages}</p>
<div className="flex justify-end">
    <button className="bg-primary  w-[100px] py-2 rounded-lg" onClick={()=> {
      if (currentPage + 1 === totalPages) {
        return
      }
      setCurrentPage(prev => prev + 1)
    }}>Next</button>
</div>
    </div>
  )
}

export default JobsListComponent