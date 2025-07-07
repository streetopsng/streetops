"use client"
import { CiLocationOn } from "react-icons/ci";
import { MdAccessTime } from "react-icons/md";
import React, { useEffect, useState } from 'react'
import { useMutation, useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { jobsList } from "@/utils/jobs";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { dispatchType, RootStateType } from "@/store";
import { getFetchedJobs } from "@/store/slices/allJobsSlice";
import { allJobsType } from "@/utils/types";
import PagePreloader from "@/utils/PagePreloader";

//   const address = process.env.NEXT_PUBLIC_ADDRESS
  const inputClass = "border-grayTwotext-grayTwo border-1 rounded-md py-2 pl-2 md:w-[32%] "

  const fetJobsList = async()=> {
    const res = await fetch(`/api/jobs`)
    const response = await res.json()
    return response
  }


  const deleteJob = async(id:string | number)=>{
    const res = await fetch(`/api/jobs/${id}`,{
        method:'DELETE'
    })
if (!res.ok) {
    alert("an error occured")

    return
}
    const response = await res.json()
    return response
  }
const JobsListAdmin = () => {
    // const [jobs] = useState<any[]>(jobsList)
    const dispatch = useDispatch<dispatchType>()
    const allJobs = useSelector((store:RootStateType)=>{
        return store.alljobsReducer
      })
    const [currJobClicked,setCurrJobClicked] = useState<string>("")



const {data:res,isLoading,error} = useQuery({
    queryKey:["jobs"],
    queryFn:fetJobsList
})
const mutation = useMutation({
    mutationFn:deleteJob,
    onSuccess:(data)=>{
console.log(data);
if (data.success) {
    window.location.reload()
    
}
else{
    // alert(data.message)
    throw new Error(data.message)
}

    },
    onError:(data)=>{

        alert("something went wrong, can't delete jobs now")
        console.log("something went wrong, can't delete jobs now",data);
        
    }

})
const router = useRouter()
// DELETE JOBS
const handleDelete = (id:string | number)=>{

    if (mutation.isPending) {
        return
    }
    mutation.mutate(id)

}

    const [itemsToDiplay,setItemsToDisplay] = useState<allJobsType[]>([])
    const [currentPage,setCurrentPage] = useState<number>(0)
    const [totalPages,setTotalPages] = useState<number>(0)

    const itemsPerPage = 5
    useEffect(()=>{
const startIndex = currentPage * itemsPerPage
const endIndex = startIndex + itemsPerPage

setTotalPages(Math.ceil(allJobs.length / itemsPerPage))
console.log(Math.ceil(allJobs.length / itemsPerPage));

setItemsToDisplay(allJobs.slice(startIndex,endIndex))
    },[currentPage,allJobs])


    useEffect(()=>{
      console.log(error ,"error");
      console.log(res ,"data");
      console.log(isLoading ,"laodin");
      
if (!isLoading) {
  dispatch(getFetchedJobs(res.data))
}

    },[isLoading])

useEffect(()=>{

    console.log(res,isLoading);
},[isLoading])


// LOADING COMPONENT
if (isLoading) {
    return <div className="xl:px-10 md:px-8 px-4 text-grayOne w-full h-[60vh] flex items-center justify-center flex-col my-8">
    <PagePreloader/>
    <h1 className="italic my-2 ">Loading Available Jobs...</h1>
  </div>
}


// Error

if (error) {
    return <div className="xl:px-10 md:px-8 px-4 text-grayOne">
<h1 className="text-center my-8">
    something went wrong,please roload the page
</h1>
    </div>
}
// EMPTY ARRAY RETURNED FROM DATABASE
if (!isLoading && allJobs.length == 0) {
    return <div className="xl:px-10 md:px-8 px-4 text-grayOne flex flex-col items-center">
    <h1 className="text-center my-8">
    No Jobs Available at the moment,
    </h1>
    <button onClick={()=> router.push("/admin/post-job")}  className="bg-primary  text-center w-[100px] py-2 rounded-lg cursor-pointer hover:opacity-90 border-primary border-2">Post Jobs</button>
        </div>
}

  return (
    <div className="xl:px-10 md:px-8 px-4 text-grayOne">
      <h1 className="lg:text-[2rem] text-[1.5rem] text-white text-center font-semibold">Posted Jobs</h1>

<section>
    {
        itemsToDiplay && itemsToDiplay.map((job:any)=>{

            return <div key={job._id} className="border-[2px]  border-grayTwo  rounded-md my-4 py-4 px-2 md:flex justify-between">
                <aside className="md:w-[80%] flex flex-col justify-center ">
<h1 className="font-bold">{job.jobTitle}</h1>
{/* <div className="flex items-center gap-x-2 my-2 text-grayTwo"><span><CiLocationOn/> </span> <span>{job.location}</span></div> */}
<div className="flex items-center gap-x-2 my-2 text-grayTwo"><span><MdAccessTime/></span> <span>{job.workPlace} </span></div>
                </aside>

<aside className="flex flex-col gap-y-2 md:items-center ">
    <button className="bg-black  text-center w-[100px] py-2 rounded-lg cursor-pointer hover:opacity-90 border-primary border-2" onClick={()=> router.push(`/jobs/${job._id}`)}>Job Info</button>
    <button
    onClick={()=> {
        handleDelete(job._id)
        setCurrJobClicked(job._id)

    }}
    disabled= {mutation.isPending ? true : false}
    className="bg-primary  text-center w-[100px] py-2 rounded-lg cursor-pointer hover:opacity-90 border-primary border-2">{currJobClicked == job._id ? "deleting..":"Delete Job"}</button>
    {/* <Link href={`/jobs/${job._id}`} className="bg-primary  text-center w-[150px] py-2 rounded-lg cursor-pointer hover:opacity-90">See Applicants</Link> */}
</aside>
            </div>
        })
    }
</section>
{/* Total jobs */}
<p className="text-center">{currentPage + 1} of {totalPages}</p>
<div className="flex justify-between">
<button className="bg-primary  w-[100px] py-2 rounded-lg cursor-pointer hover:opacity-500" onClick={()=> {
      if (currentPage + 1 === 1) {
        return
      }
      setCurrentPage(prev => prev - 1)
    }}>Prev</button>
    <button className="bg-primary  w-[100px] py-2 rounded-lg cursor-pointer hover:opacity-500" onClick={()=> {
      if (currentPage + 1 === totalPages) {
        return
      }
      setCurrentPage(prev => prev + 1)
    }}>Next</button>
</div>
    </div>
  )
}

export default JobsListAdmin