"use client"
import React, { useState } from 'react'


const JoinWaitlist = () => {
    const [formInfo,setFormInfo] = useState()

    const handleSubmit =(e:React.FormEvent<HTMLInputElement>)=>{
e.preventDefault()
    }
  return (
    <div className='my-8 formsection'>

<form   action="https://formspree.io/f/xnnbzzgv"
  method="POST"
   className=''>
<h1 className='text-2xl lg:text-[1.8rem] uppercase animated-gradient-text-two text-[1.5rem] text-center font-semibold'>join our wailtist</h1>
<div className='flex justify-center item-center gap-x-8 w-full my-4'>
<input type="email" name="email"
placeholder='enter email '
    className='border-primary border-2 outline-primary  rounded-lg w-[80%] md:w-[50%] lg:w-[30%] px-4'
    />
    <button className='bg-primary rounded-lg rounded-lg px-4 py-2 text-bgcolor capitalize' type='submit'>join</button>
</div>
</form>

    </div>
  )
}

export default JoinWaitlist