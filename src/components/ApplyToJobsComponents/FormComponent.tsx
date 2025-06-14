"use client"
import React, { FormEvent, useEffect, useState } from 'react'
import { FaStarOfLife } from "react-icons/fa";
import { useMutation } from '@tanstack/react-query';
import { Loader } from '@/utils/Loader';

interface formItemsType<S,N>{
    id:N,
    title:S,
    type:S,
    name:S
}
const formItems: formItemsType<string,number>[] =[
    {
        id:1,
        title:"Full name",
        type:"text",
        name:"name"
    },
    {
        id:2,
        title:"Email",
        type:"text",
        name:"email",
    },
    {
        id:3,
        title:"Phone",
        type:"number",
        name:"phoneNumber"
    },
    // {
    //     id:4,
    //     title:"Resume",
    //     type:"file"
    // },


]

interface formDetailsType<S,N>  {
    name:S,
    email:S,
    phoneNumber:N,
    resumeLink?:S

}

const postData = async(formDetails:formDetailsType<string,number>)=>{
    const res = await fetch("http://localhost:3000/api/apply",{
        method:"POST",
        headers: {
            "Content-Type":"application/json"
        },
        body:JSON.stringify(formDetails)  
    })
    if (!res.ok) {
            console.log("something went wrong");
            return
    }
    
    const response = await res.json()
    console.log(response);
    return response
}



const FormComponent = () => {
    const [formDetails,setFormDetails] = useState<formDetailsType<string,number>>({
    name:"",
    email:"",
    phoneNumber:0,
    })
const mutation = useMutation({
    mutationFn:postData,
    onSuccess:(data)=>{
        console.log("you have successfully applied for this role",data);
        
    },
    onError:()=>{
        console.log("something went wrong,please try again later");
        
    }
})
    

const handleSubmit = async (e:React.SyntheticEvent)=>{
e.preventDefault()
if (!formDetails.email || !formDetails.name || !formDetails.phoneNumber) {
alert("empty field ")
return
}
mutation.mutate(formDetails)
}

    useEffect(()=>{
console.log(formDetails);
    },[formDetails])


  return (
    <div className='text-grayTwo flex flex-col  xl:px-8 md:px-8 px-4 gap-y-6 lg:gap-y-0 my-6' >
{/* First Section */}
<section className=' '>
<h1 className='text-[2rem]  font-semibold text-wht'>Enter your details</h1>

</section>

<form action="" onSubmit={handleSubmit} className=' rounded-md'>
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
      
                    
            }


            return <div key={index} className='flex flex-col my-4'>
                
        <label htmlFor={item.title} className='flex items-center gap-x-4 text-wht'><span>{item.title}</span><span><FaStarOfLife size={10} className='text-[red]'/></span></label>
        <input
        type={item.type}
        name={item.name}
        placeholder={item.title}
        onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{
setFormDetails({...formDetails,[e.target.name]:e.target.value})
        }}
        className='border-1 border-grayTwo  h-[40px] pl-2'
        id={item.title} />
            </div>
        })
    }


    {/* Check box */}


    <div className='flex  py-2'>
    <button className='w-[80px] h-[40px] bg-primary text-wht rounded-md cursor-pointer flex items-center justify-center'>{mutation.isPending? <Loader/> : "Apply"}</button>
    </div>
</form>



    </div>
  )
}

export default FormComponent