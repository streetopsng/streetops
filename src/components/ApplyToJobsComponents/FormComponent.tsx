"use client"
import React from 'react'
import { FaStarOfLife } from "react-icons/fa";

interface formItemsType<S,N>{
    id:N,
    title:S,
    type:S
}
const formItems: formItemsType<string,number>[] =[
    {
        id:1,
        title:"Full name",
        type:"text"
    },
    {
        id:2,
        title:"Email",
        type:"text"
    },
    {
        id:3,
        title:"Phone",
        type:"string"
    },
    {
        id:4,
        title:"Resume",
        type:"file"
    },
    {
        id:5,
        title:"How many years of experience do you have in Dynamics 365 Common Data Model?",
        type:"text"
    },
    {
        id:6,
        title:"How many years of experience do you have in Power Platform: Power Apps, Automate, Virtual Agents, Power BI? please specify: ",
        type:"text"
    },
    {
        id:6,
        title:"How many years of experience do you have in Microsoft Dynamics CRM Accelerators?",
        type:"text"
    },

]
const FormComponent = () => {
  return (
    <div className='text-grayTwo flex flex-col  xl:px-8 md:px-8 px-4 gap-y-6 lg:gap-y-0 my-6' >
{/* First Section */}
<section className=' '>
<h1 className='text-[2rem]  font-semibold text-wht'>Enter your details</h1>

</section>

<form action="" onSubmit={(e:React.SyntheticEvent)=>{
    // e.preventDefault()
}} className=' rounded-md   '>
    {
        formItems.map((item,index)=>{
            if (item.type == "file") {
                return (
                <div key={index} className='flex flex-col my-4 lg:w-[20%] w-[50%]'>
                
        <label htmlFor={item.title} className='flex items-center gap-x-4 text-wht'><span>{item.title}</span><span><FaStarOfLife size={10} className='text-[red]'/></span></label>
        <input
        type={item.type}
        name={item.title}
        placeholder={item.title}
        className='border-1 border-grayTwo  h-[40px] pl-2'
        id={item.title} />
            </div>)
                // <>
                
         
                // <label htmlFor={item.title} className='flex items-center gap-x-4 text-wht'><span>{item.title}</span><span><FaStarOfLife size={10} className='text-[red]'/></span></label>
                // <input
                // type={"file"}
                // name={item.title}
                // placeholder={item.title}
                // className='border-1 border-grayTwo  h-[40px] pl-2'
                // id={item.title} />
                // </>
                    
            }


            return <div key={index} className='flex flex-col my-4'>
                
        <label htmlFor={item.title} className='flex items-center gap-x-4 text-wht'><span>{item.title}</span><span><FaStarOfLife size={10} className='text-[red]'/></span></label>
        <input
        type={item.type}
        name={item.title}
        placeholder={item.title}
        className='border-1 border-grayTwo  h-[40px] pl-2'
        id={item.title} />
            </div>
        })
    }


    {/* Check box */}


    <div className='flex  py-2'>
        <button className='bg-primary text-wht px-4 py-2 rounded-md'>Apply</button>
    </div>
</form>



    </div>
  )
}

export default FormComponent