"use client";
import { Loader } from "@/utils/Loader";
import { useMutation } from "@tanstack/react-query";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

import { IoIosMenu } from "react-icons/io";

type SlideProps = {
  image: string;
  title: string;
  description: React.ReactNode;
};


const trustedBy = [
  "Stableblocks",
  "flick",
]
const slides: SlideProps[] = [
  {
    image: "/model.jpg",
    title: "Streeting out your Brand",
    description: (
      <p>
      We strip inefficiencies from
      <br />
      your <span className="text-primary">business</span> and replace
      <br />
      them with <span className="text-primary">systems</span> that <span className="text-primary">work</span>

      <br />
      while you sleep.
      </p>
    ),
  },
  {
    image: "/model.jpg",
    title: "Streeting out your Brand",
    description: (
      <p>
        Because African <span className="text-primary">SMEs</span>
        <br />
         deserve more than survival.
         <br />
          They <span className="text-primary">deserve systems.</span>
      </p>
    ),
  },
  {
    image: "/model.jpg",
    title: "Streeting out your Brand",
    description:(
<p>
<span className="text-primary" >StreetOps</span>
: Where <span className="text-primary">business</span>
<br />
chaos meets <span className="text-primary">clarity.</span> 
</p>
    ),
  },
];

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


const ImageSlider= () => {
const [curr,setCurr] = useState(0)
const [completed,setCompleted] = useState(true)
const [form,setForm] = useState({
  email:""
})
const router = useRouter()

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


useEffect(() => {
  const intervalId = setInterval(() => {

      if (curr == slides.length - 1) {
        setCompleted(true)
          setCurr(prev => prev - 1)
          return

      }
      if (completed) {
        if (curr == 0) {
          setCompleted(false)
          setCurr(prev => prev + 1)
          return
        }
        setCurr(prev => prev - 1)
        return
        

      }
      setCurr(prev => prev + 1)
  }, 5000)

  return () => clearInterval(intervalId)

}, [curr])

const handleSubmit =()=>{
if (!form.email) {
  alert("empty field")
  return
}
  mutation.mutate(form)

}

  return (
    <div className="w-full md:h-[100vh] h-screen relative overflow-hidden bg-[red]">
      {/* nav */}
      <nav className="lg:px-8 px-4 bg-transparent flex justify-between absolute top-[1%] left-[0%] z-10 w-full my-4">
        <div className="relative w-[130px] h-[40px]">
<Image
src={"/streetopslogo.png"}
alt="logo"
className="absolute w-full h-full"
fill
/>
        </div>

        <button
onClick={()=> router.push("/blog")}
className='mdlg:inline   text-wht rounded-md lg:h-[35px] h-[30px] lg:px-4 px-2 cursor-pointer   border-[2px] border-primary relative overflow-hidden group' >
<span className="relative  z-10  duration-300 hover:text-primary text-primary">
Blog
</span>
<span className="absolute inset-0 bg-white  opacity-80 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out z-0" />
</button> 
        {/* <button className="cursor-pointer"><IoIosMenu
        className="text-white"
        size={25}/></button> */}
      </nav>



      {/* input and sponsors */}

      <div className="absolute bottom-[8%] z-10 px-8 lg:w-[30%] md:w-[50%] w-full">
<section className="bg-white rounded-full py-1 px-2 w-full">
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

<section className="text-white text-sm my-4 flex flex-col justify-between gap-4">
  <h1 className="text-sm">Trusted By</h1>
  <div className="flex justify-between ">
    {[...trustedBy,...trustedBy].map((item,index)=>{

      return <span key={index + 1} className={index % 2 == 0 ? "font-semibold" :  ""}>{item}</span>
    })}
  </div>

</section>
      </div>
   <div className="w-full h-full flex transition-all ease-in-out duration-300"
   style={{
    transform:`translateX(-${curr * 100}%)`
   }}
   >


{slides.map((item,index)=>{

  return <aside key={index + 1} className="min-w-full min-h-full  relative z-0"
  >
    <div 
    className={`lg:bg-left-top w-full min-h-screen pl-8 px-4 flex flex-col justify-center md:bg-[length:100%] bg-cover `}
      style={{
        backgroundImage:`url(${item.image})`,
        // backgroundSize:"cover",
        backgroundRepeat:"no-repeat",
        
        backgroundPosition:"center"
        
      }}
    >

{/* <div className="w-full min-h-screen">
  <Image
  src={item.image}
  alt={item.title}
  className="absolute w-full object-cover"
  fill
  />
</div> */}
 

 <div className="absolute left-0 w-full h-full bg-black opacity-70">

</div>

{/* <h1 className={`lg:text-7xl md:text-6xl text-5xl font-semibold text-white md:w-[60%] text-center animated-gradient-text    ${index == curr ? "fade-in-top" :""}`}>{item.title}</h1> */}
<h1 className={`md:text-5xl text-2xl   text-white lg:w-[50%] md:w-[60%]   ${index == curr ? "fade-in-bottom" :""} `} 

style={{
  // whiteSpace:"pre-line"
}}>{item.description}</h1>    

</div>
  </aside>
})}
   </div>

</div>
);
};

export default ImageSlider;

