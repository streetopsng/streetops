"use client"
import { useParams } from 'next/navigation'
import React from 'react'

import Link from 'next/link'
// import { jobsList } from '@/utils/jobs'
import { useSelector } from 'react-redux'
import { RootStateType } from '@/store'

const JobsDescription = () => {
     const param = useParams()
    //   console.log(param);
    const allJobs = useSelector((store:RootStateType)=>{

        return store.alljobsReducer
      })
      
      const findJob = allJobs.find(item => item._id == param.slug)
      console.log(findJob);
      
  return (
    <div className=' text-grayTwo py-8 xl:px-8 md:px-8 px-4 '>
        {/* About Section */}
        <h1 className='text-center text-grayOne underline text-lg font-semibold italic'>Decsription</h1>
<section className='my-8'>
<h1 className='text-lg font-semibold text-grayOne'>{findJob?.jobTitle}</h1>
<p>{findJob?.aboutJob}</p>
</section>

{/* Role overview  */}
<section className='my-6'>
    <h1 className='text-lg font-semibold text-grayOne'>Role Overview</h1>
    <p>{findJob?.roleOverview}</p>
</section>

{/* job type, work place, location, relocation */}

<section className='my-4'>
    {/* Job type */}
    {/* <div><span  className='font-semibold text-grayOne'>Job Type</span> : <span>{findJob?.jobType}</span></div> */}
    {/* Work place */}
    <div><span className='font-semibold text-grayOne'>Work place</span> : <span> {findJob?.workPlace}</span></div>
    {/* Location */}
    <div><span className='font-semibold text-grayOne'>Salaray</span> : <span>{findJob?.salary}</span></div>
    {/* Relocation */}
    {/* <div><span className='font-semibold text-grayOne'>Relocation</span> : <span>{findJob?.relocation}</span></div> */}
</section>

{/* Requirements */}

<section className='my-4 px-4'>
    <h1 className='text-lg font-semibold text-grayOne'>Requirements</h1>
  <ul className='list-disc'>
    {
        findJob?.requirements?.map((item,index)=>{

            return <li key={index}>
                {item}
            </li>
        })
    }
  </ul>
</section>


{/* Responsibilities */}
<section className='my-4 px-4'>
<h1 className='text-lg font-semibold text-grayOne'>Responsibility</h1>

<ul className='list-disc'>
    {
        findJob?.responsibilities?.map((item,index)=>{

            return <li key={index}>
{item}
            </li>
        })
    }
</ul>
</section>

{/* button for apply for the position */}
<div className='my-6 flex justify-center'>

{/* this link will take you user to google form address for the particualr job for now */}
<Link className='bg-primary rounded-lg px-4 py-2 text-grayOne hover:opacity-50' href={`#`}>Apply for Position</Link>

</div>
    </div>
  )
}

export default JobsDescription