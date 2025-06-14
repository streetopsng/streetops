"use client"
import React, { useEffect, useState } from 'react'

const people = [
    { id: 1, name: "Amaka" },
    { id: 2, name: "Chinedu" },
    { id: 3, name: "Bola" },
    { id: 4, name: "Tunde" },
    { id: 5, name: "Ngozi" },
    { id: 6, name: "Samuel" },
    { id: 7, name: "Aisha" },
    { id: 8, name: "John" },
    { id: 9, name: "Fatima" },
    { id: 10, name: "Michael" },
    { id: 11, name: "Grace" },
    { id: 12, name: "Ifeanyi" },
    { id: 13, name: "Zainab" },
    { id: 14, name: "David" },
    { id: 15, name: "Chioma" },
    { id: 16, name: "Kelechi" },
    { id: 17, name: "Lilian" },
    { id: 18, name: "Ahmed" },
    { id: 19, name: "Vivian" },
    { id: 20, name: "Emeka" },
  ];
  
const page = () => {
    const [currentItems,setCurrentItems] = useState<{
        id: number;
        name: string;
    }[]>([])

    const [currentPage,setCurrentPage] = useState(0)
    const [totalPages,setTotalPages] = useState(0)
const itemsPerPage = 5


useEffect(()=>{
    const startIndex = currentPage * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    setTotalPages(people.length / itemsPerPage)
    const curr: {
        id: number;
        name: string;
    }[]  = people.slice(startIndex,endIndex)
setCurrentItems(curr)

},[currentPage])

  return (
    <div className='text-white'>
       <section>
       {currentItems.map((item,_)=>{
            return <div key={item.name}>{item.name}</div>
        })}
       </section>
       <div>
        <div>
            {Array(totalPages).fill("").map((page,index)=>{
                return <button onClick={()=> {
                    setCurrentPage(index)
                }} className='text-white' key={index}>
                    {index + 1}
                </button>
            })}
        </div>
        <button className='bg-red-500 mx-2'  onClick={()=> setCurrentPage( prev => prev - 1) }>Prev</button>
        <button className='bg-red-500 mx-2' onClick={()=> setCurrentPage( prev => prev + 1) }>Next</button>
       </div>
    </div>
  )
}

export default page