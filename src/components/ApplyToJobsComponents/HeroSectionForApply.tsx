import React from 'react'
import { jobsList } from '../JobsPageComponents/JobsListComponent';
import { useParams } from 'next/navigation';
import { CiLocationOn } from "react-icons/ci";
import { dispatchType } from '@/store';
import { useDispatch } from 'react-redux';
import { closeSubmenu } from '@/store/slices/desktopSubmenuLinksSlice';

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

        <h1 className='text-wht md:text-[3rem] text-[1.8rem]'>{findJob?.jobTitle}</h1>
       
        <p className='flex items-center'><span><CiLocationOn/></span> <span>{findJob?.location}</span></p>
        </div>
    </div>
  )
}

export default HeroSectionForApply