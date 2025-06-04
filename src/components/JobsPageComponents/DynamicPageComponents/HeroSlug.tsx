"use client"
import { useParams } from 'next/navigation';
import React from 'react'
import { jobsList } from '../JobsListComponent';
import { closeSubmenu } from '@/store/slices/desktopSubmenuLinksSlice';
import { useDispatch } from 'react-redux';
import { dispatchType } from '@/store';
import { CiLocationOn } from "react-icons/ci";
import Link from 'next/link';

const HeroSlug = () => {
    const dispatch = useDispatch<dispatchType>()
 const param = useParams()

  
  const findJob = jobsList.find(item => item.id == Number(param.slug))
  return (
    <div
      onMouseOver={()=> dispatch(closeSubmenu())}
    className='  '>
        <div className='lg:h-[300px] md:h-[250px] h-[200px] bg-primary flex flex-col justify-center items-center'>

        <h1 className='text-wht md:text-[3rem] text-[1.8rem]  md:px-16 px-4 text-center'>{findJob?.jobTitle}</h1>
       
        <p className='flex items-center'><span><CiLocationOn/></span> <span>{findJob?.location}</span></p>
        <div className='my-6 flex justify-center'>

<Link className='bg-primary rounded-lg px-4 py-2 text-grayOne hover:opacity-50 border-1 border-grayOne ' href={`/jobs/${findJob?.id}/apply`}>Apply for Position</Link>

</div>
        </div>
    </div>
    )
}

export default HeroSlug