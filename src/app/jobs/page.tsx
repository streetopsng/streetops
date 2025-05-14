"use client"
import { jobs } from '@/utils/jobs'
import React, { useEffect, useState } from 'react'
import { GrFormNext } from "react-icons/gr";
import { GrFormPrevious } from "react-icons/gr";



const spanClass = "w-[25%] text-start  "
const page = () => {
    const [currentPage,setCurrentPage] = useState<number>(1)
    const itemsPerPage  = 10
    const totalPages = Math.ceil(jobs.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentPosts = jobs.slice(startIndex, startIndex + itemsPerPage);


    console.log("lol");
    
    

  return (
    <div>
        <h1 className=''>this page is currently undergoing maintenance,please check back later</h1>
    </div>
//     <div className='xl:mx-32 md:mx-8 mx-4 '>


//         <header>
//            <h1 className='text-center font-bold underline text-xl text-primary my-2'> Available jobs</h1>
//         </header>
        
//         {/* list of jobs */}

//         <section>
// <div className='overflow-x-scroll md:overflow-x-hidden rounded-lg'>
//     <header className='flex justify-between items-center gap-x-[10px] text-wht md:w-full w-[1200px] bg-primary pl-2'>
//         <span className={spanClass}>Title</span>
//         <span className={spanClass}>Company</span>
//         <span className={spanClass}>Category</span>
//         <div className={`w-[10%] flex justify-center py-2`}>
//         <button className={`text-start px-4`}>Action</button>
//         </div>
//     </header>
// {currentPosts.map((item,index)=>{

// return <div className={`flex justify-between items-center gap-x-[10px] border-gray-300 border-[1px]  md:w-full w-[1200px] pl-2 ${index % 2 == 0 ? "bg-bgcolor " : "bg-purple-300"}`} key={index}>
    
//     <span className={spanClass}>{item.title}</span>
//     <span className={spanClass}>{item.company}</span>
//     <span className={spanClass}>{item.category}</span>
//     <div className={`w-[10%] flex justify-center mdlg:py-2 py-[4px]`}>
        
//     <button className={`text-start bg-primary rounded-lg text-wht mdlg:px-4  px-[4px] cursor-pointer hover:bg-wht  hover:text-primary border-[2px] border-primary transition-all duration-500`}>Apply</button>
//     </div>
// </div>
// })}
// </div>
// <div className='flex justify-center my-4'>
//     {/* prev btn */}
//     <button className=' mdlg:py-2 py-[2px] mdlg:px-4 px-2' onClick={()=> {
//     if (currentPage == 1) {
//         console.log(currentPage,"cu");
//         console.log(totalPages,"total");
        
//         return
//     }
// setCurrentPage( currentPage - 1)
//     }}><GrFormPrevious className='mdlg:text-[2rem] text-[1.5rem]' /></button>
//     {Array(totalPages).fill("").map((item,index)=>{
        
//         return <button className={`text-lg mdlg:py-2 py-[2px] mdlg:px-4 px-2 rounded-lg cursor-pointer ${currentPage == index + 1 ? "bg-primary text-bgcolor " : "bg-bg-color"}`} onClick={(e)=>{
//             setCurrentPage(index + 1)
//         }} key={index}>
//             {index + 1} 
//         </button>
//     })}
//     {/* Next btn */}
//     <button className=' mdlg:py-2 py-[2px] mdlg:px-4 px-2 cursor-pointer' onClick={()=> 
//         {
//             if (currentPage == totalPages) {
//                 console.log(currentPage,"cu");
//                 console.log(totalPages,"total");
                
//                 return
//             }
//             setCurrentPage( currentPage + 1)

//         }}><GrFormNext className='mdlg:text-[2rem] text-[1.5rem] ' /></button>
// </div>
//         </section>
//     </div>
  )
}

export default page