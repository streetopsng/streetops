import React from 'react'

import { useParams } from 'next/navigation';
import { CiLocationOn } from "react-icons/ci";
import { dispatchType } from '@/store';
import { useDispatch } from 'react-redux';
import { closeSubmenu } from '@/store/slices/desktopSubmenuLinksSlice';
import { jobsList } from '@/utils/jobs';

const HeroSectionForApply = () => {
  const dispatch = useDispatch<dispatchType>()
  const param = useParams()
  console.log(param);
  
  const findJob = jobsList.find(item => item.id == Number(param.slug))
  return (
    <div
      onMouseOver={()=> dispatch(closeSubmenu())}
    className='  '>
        <div className='lg:h-[300px] h-[200px] bg-primary flex flex-col justify-center items-center'>

        <h1 className='text-wht md:text-[3rem] text-[1.8rem]  md:px-16 px-4 text-center'>{findJob?.jobTitle}</h1>
       
        <p className='flex items-center'><span><CiLocationOn/></span> <span>{findJob?.location}</span></p>
        </div>
    </div>
  )
}

export default HeroSectionForApply