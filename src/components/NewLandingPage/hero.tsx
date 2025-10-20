"use client"
import type React from "react"
import { useState } from "react"
import ImageGallery from "./image-gallery"
import {motion,useInView} from "motion/react"
import { useMutation } from "@tanstack/react-query"
import { Loader } from "lucide-react"




const postData = async(formData:any)=>{
  const res = await fetch("/api/waitlist",{
      method:'POST',
      body:JSON.stringify(formData)
  })

  if (!res.ok) {
      console.log("something went wrong");
      return
      
  }
  const response = await res.json()
  return response
  
}


export default function Hero() {
  const [email, setEmail] = useState("")
const [form,setForm] = useState({
  email:""
})

  const mutation = useMutation({
    mutationFn:postData,
    onSuccess:(data)=>{
        console.log(data);
        if (data.success) {
            alert(data.message)
            setForm({email:""})
            
        }
        else{
            alert("unable to sumbit email")
        }
       
        
    },
    onError:(error)=>{
  console.log(error);
  alert("an error occured")
  
    }
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

mutation.mutate(form)
  }

  return (
    <>
   <section
  className="flex  flex-col items-center justify-center py-6 md:flex-row md:py-12 lg:pb-24 overflow-x-hidden "
>
  <motion.div
  initial={{opacity:0,x:-50}}
  animate={{opacity:1,x:0}}
  transition={{duration:1.4,ease:"linear"}}
  className="w-full text-center md:w-4/5 md:pr-12 md:text-left">
    <h1
      className=" text-5xl tracking-tighter Hero font-bold  text-red-600 md:text-6xl"
    >
      THE BACKBONE FOR
      <br />
     YOUR GRIND.
    </h1>
  </motion.div>

  <div
    className="overflow-y-hidden mt-12 w-full max-w-md flex-col items-center text-center md:mt-0 md:w-2/5 md:items-start md:text-left sm:mt-2"
  >

    <motion.p
    initial={{opacity:0,y:-50}} 
    animate={{opacity:1,y:0}}
    transition={{duration:2,ease:"easeInOut"}}

    className=" max-w-2xl two text-base  text-muted-foreground text-[#525151] md:text-sm">
      From sales and inventory to AI-powered strategy,<br /> StreetOps handles the
      backend so you can focus on <br /> building your legacy.
    </motion.p>

    <form onSubmit={handleSubmit} className="flex w-full flex-col items-center pt-2 md:pt-6 sm:mt-4 px-2">
      <motion.div
        initial={{opacity:0,y:50}} 
        animate={{opacity:1,y:0}}
        transition={{duration:2,ease:"easeInOut"}}
      className="flex w-full flex-col gap-3 sm:flex-row">
        <section className="bg-[#F9F8F8] rounded-full py-1 px-2 w-full">
  <input 
  type="email"
  onChange={(e)=> setForm({email:e.target.value})}
  value={form.email}
  className="rounded-lg border-none outline-none  h-[90%] pl-4 py-2 w-[65%]"
  placeholder="enter your email"
  />
  <button
  onClick={handleSubmit}
  className="text-primary rounded-full text-white bg-primary w-[35%] py-2 cursor-pointer hover:opacity-60">
{
  mutation.isPending ? <Loader/> : "Join waitlist "
}
  </button>
</section>
        
        {/* <div className="relative flex-1">
          <div
            className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4"
          >
            <svg
              className="h-5 w-5 text-[#525151]"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>
          </div>
          <input
            type="email"
            placeholder="Enter your email"
            onChange={(e)=> setForm({email:e.target.value})}
  value={form.email}
            className="w-full rounded-full  bg-gray-100 py-3 pl-12 pr-6 text-foreground placeholder:text-[#525151] text-sm transition-shadow focus:outline-none focus:ring-1 focus:ring-primary"
            required
          />
        </div>

        <button
          type="submit"
          className="whitespace-nowrap rounded-full bg-primary cursor-pointer px-7 py-3 font-semibold text-white shadow-lg  transition-colors hover:bg-red-700 "
        >
        {
          mutation.isPending ? "loading..." : "Join waitlist "
        }
        </button> */}

      </motion.div>
    </form>
  </div>
</section>
    {/* <section >
    <ImageGallery/>
    </section> */}
</>
  )
}