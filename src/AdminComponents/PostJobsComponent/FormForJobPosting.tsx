
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
 


]



interface formDetailsType<S>{
    jobTitle:S,
    aboutJob:S,
    roleOverview:S,
    workPlace:S,
    responsibilities:(S | null)[],
    requirements:(S | null)[]
}

const postData = async(formDetails:formDetailsType<string>)=>{
    const res = await fetch("http://localhost:3000/api/post-jobs/",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(formDetails)
    })
    
    if (!res.ok) {
        console.log("something went wrong when trying to fetch data");
        
    }
    const response = await res.json()
    console.log(response);
}

const FormForJobPosting = () => {
const [tempState,setTempState] = useState<string>("")
const [tempStateRes,setTempStateRes] = useState<string>("")
// form state
    const [formDetails,setFormDetails] = useState<formDetailsType<string>>({
        jobTitle:"",
        aboutJob:"",
        roleOverview:"",
        workPlace:"Remote",
        responsibilities:[],
        requirements:[]
    })

    // react query mutate
    const mutation = useMutation({
        mutationFn:postData,
        onSuccess:(data)=>{
            console.log("successfully posted the job",data);
            alert("Job successfully Posted")
            
        },
        onError:(error)=>{
            console.log("and error occured",error);
            
        }
    })


    useEffect(()=>{
        console.log(formDetails);
        
            },[formDetails])
        
//   handleSubmit for form
    const handleSubmit = async (e:React.SyntheticEvent)=>{
e.preventDefault()

mutation.mutate(formDetails)

    }


  return (
    <div className='text-grayTwo flex flex-col  xl:px-8 md:px-8 px-4 gap-y-6 lg:gap-y-0 my-6' >
{/* First Section */}
<section className=' '>
<h1 className='text-[2rem]  font-semibold text-wht'>Enter Job Info</h1>

</section>

<form action="" onSubmit={handleSubmit} className='rounded-md'>

<div className='flex flex-col my-4'>
                
                <label htmlFor={""} className='flex items-center gap-x-4 text-wht'><span>Job title</span><span><FaStarOfLife size={10} className='text-[red]'/></span></label>
                <input
                type="text"
                name={"jobTitle"}
                placeholder={"Enter Job title"}
                className='border-1 border-grayTwo  h-[40px] pl-2'
                onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{
        setFormDetails({...formDetails,jobTitle:e.target.value})
                }}
                 />
                    </div>
{/* ROLE OVERVIEW */}
<div className='flex flex-col my-4'>
<label htmlFor={""} className='flex items-center gap-x-4 text-wht'><span>Role Overview</span><span><FaStarOfLife size={10} className='text-[red]'/></span></label>
<textarea
 className='border-1 border-grayTwo  h-[80px] pl-2'
onChange={(e:React.ChangeEvent<HTMLTextAreaElement>)=>{

    setFormDetails({...formDetails,roleOverview:e.target.value})

}}
/>
</div>

                    {/* WORK PLACE */}
<div className='flex flex-col my-4'>
<label htmlFor={""} className='flex items-center gap-x-4 text-wht'><span>Work Place</span><span><FaStarOfLife size={10} className='text-[red]'/></span></label>
<select className='w-[20%] border-1 border-grayOne h-[40px]' onChange={(e:React.ChangeEvent<HTMLSelectElement>)=>{
setFormDetails({...formDetails,workPlace:e.target.value})
}}>
<option value="On-Site">On-Site</option>
<option value="Remote">Remote</option>
</select>
</div>

{/* REQUIREMENTS */}
<div className='flex flex-col my-4'>
<label htmlFor={""} className='flex items-center gap-x-4 text-wht'><span>Requirements</span><span><FaStarOfLife size={10} className='text-[red]'/></span></label>
{/* input addd */}
<aside className='w-full flex justify-between'>
<input
                type="text"
                name={""}
                placeholder={"enter job requirement"}
                className='border-1 border-grayTwo  h-[40px] pl-2 w-[90%]'
                onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{
               setTempState(e.target.value)
                }}
                value={tempState}
                 />
                 <button
                 type='button'
                 onClick={()=>{
                    if (!tempState) {
                        alert("empty field")
                        return
                    }
                    setFormDetails({...formDetails,requirements:[...formDetails.requirements,tempState]})
                    setTempState("")
                 }}
                 className='w-[5%] bg-grayOne text-black rounded-lg  font-semibold'>add</button>
</aside>
{/* List requirements */}


<ul className='list-disc pl-4 my-2'>
    {
       formDetails.requirements &&  formDetails.requirements.map((requirement,index)=>{
            return <li key={index}>
{requirement}
            </li>
        })
    }
</ul>
</div>



{/* RESPONSIBILITY */}
<div className='flex flex-col my-4'>
<label htmlFor={""} className='flex items-center gap-x-4 text-wht'><span>Responsibilities</span><span><FaStarOfLife size={10} className='text-[red]'/></span></label>
{/* input addd */}
<aside className='w-full flex justify-between'>
<input
                type="text"
                name={""}
                placeholder={"responsibility"}
                className='border-1 border-grayTwo  h-[40px] pl-2 w-[90%]'
                onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{
               setTempStateRes(e.target.value)
                }}
                value={tempStateRes}
                 />
                 <button
                  type='button'
                 onClick={()=>{
                    if (!tempStateRes) {
                        alert("empty field")
                        return
                    }
                    setFormDetails({...formDetails,responsibilities:[...formDetails.responsibilities,tempStateRes]})
                    setTempStateRes("")
                 }}
                 className='w-[5%] bg-grayOne text-black rounded-lg  font-semibold'>add</button>
</aside>
{/* List RESPONSIBILTY */}


<ul className='list-disc pl-4 my-2'>
    {
       formDetails.responsibilities &&  formDetails.responsibilities.map((requirement,index)=>{
            return <li key={index}>
{requirement}
            </li>
        })
    }
</ul>
</div>
   
   
    <div className='flex  py-2'>
        <button className='w-[80px] h-[40px] bg-primary text-wht rounded-md cursor-pointer flex items-center justify-center'>{mutation.isPending? <Loader/> : "Post"}</button>
    </div>
</form>


{/* Post */}
    </div>
  )
}

export default FormForJobPosting

