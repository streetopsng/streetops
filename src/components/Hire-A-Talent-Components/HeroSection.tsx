
import { dispatchType } from '@/store'
import { closeSubmenu } from '@/store/slices/desktopSubmenuLinksSlice'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'


const listOfSkills = [
    "Data scientists",
    "Talent manager",
    "Legal Manager",
    "Frontend Developer",
    "Banker",
    "Data analyst"
    
]
const HeroSection = () => {
    const [words,setWords] =useState<string[]>(listOfSkills)
    const [currentWord,setCurrentWord] = useState<string>("")
    const [wordIndex,setWordIndex] = useState<number>(0)
    const [index,setIndex] = useState<number>(0)
    const [letterCompleted,setLetterCompleted] =useState<boolean>(false)
    const [reverse,setReverse] = useState<boolean>(false)
    const [countFromBack,setCountFromBack] = useState<boolean>(false)
    const [intervelSeconds,setIntervalSeconds] = useState<number>(100)
    const dispatch = useDispatch<dispatchType>()
    


    

useEffect(()=>{
    
 

  

    if (!reverse && index == words[wordIndex]?.length) {
        // console.log("completed");
        // console.log(index);
        setIntervalSeconds(1500)
        setReverse(true)
        return
    }

    if (reverse && index == 0) {
        if (wordIndex + 1 == words.length) {
            
            setWordIndex(prev => prev - 1)
            setIndex(0)
            setReverse(false)
            setCountFromBack(true)
            return
        }
        else{
            
            setWordIndex(prev => prev + 1)
        }
    
        setReverse(false)
    }

const intervalID =  setInterval(()=>{
    if (reverse) {
        
        setIndex(prev => prev - 1 )
    }
    else{
        setIndex(prev => prev + 1 )
    }
    setIntervalSeconds(50)
},intervelSeconds || 50)

return ()=> clearInterval(intervalID)

},[index,reverse])

  return (
    <div 
    onMouseOver={()=> dispatch(closeSubmenu())}
    className='text-grayOne xl:px-10 md:px-8 px-4 flex pb-4  md:flex-row flex-col '>
{/* First Section */}
        <section className=' flex flex-col items-end justify-between my-8'>
<div className='flex flex-col justify-center h-full  gap-6 '>
<div className='lg:text-[3.1rem] md:text-[2rem] text-[1.7rem] font-semibold lg:leading-[2.9rem] '>
<h1 className=''>Pursue Your Career as a</h1>
<h1 className='text-primary'>{words[wordIndex].slice(0,index)}|</h1>
</div>


<p className='lg:w-[70%]'>We are partners with Rekrut Consulting, working together to bring you exclusive job opportunities.We have various opportunities in industries like; FMCGs, Banking, Manufacturing, Human management, Tech, and so on.</p>
            </div>
        </section>

        {/* second section */}
    <section className='md:w-[45%] w-full flex justify-end  '>
                
    
    
    
            
    <div className='relative lg:w-[420px] lg:h-[390px]  md:w-[390px] md:h-[360px] w-full min-h-[350px]'>
        <Image alt='paige' src={"/talent.svg"}  fill className=' absolute object-contain '/>
        </div>      
            </section>
    </div>
  )
}

export default HeroSection