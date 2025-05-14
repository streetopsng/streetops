import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const HeroSection = () => {
    const [words,setWords] =useState<string[]>(["manger","james"])
    const [currentWord,setCurrentWord] = useState<string>("")
    const [wordIndex,setWordIndex] = useState<number>(0)
    const [index,setIndex] = useState<number>(0)
    const [letterCompleted,setLetterCompleted] =useState<boolean>(false)



useEffect(()=>{

    setCurrentWord(words[wordIndex].slice(0,index))
    // console.log(wordIndex,"windex");
    // console.log(currentWord,"curr word");


console.log(currentWord);
// console.log(index);

if ( index == currentWord.length) {
    
    console.log(index);
    setIndex(prev => prev + 1)
    setLetterCompleted(true)
    
    
}
if (letterCompleted && !index ) {
    console.log("compl");
    setWordIndex(prev => prev + 1)
    setLetterCompleted(false)
}

const intervalID =  setInterval(()=>{
    if (letterCompleted) {
        // setIndex(prev => prev - 1)
        
    }
    else{
        setIndex(prev => prev + 1)
        // console.log(index);
        
    }
},500)

return ()=> clearInterval(intervalID)

},[index])

  return (
    <div className='bg-primary-200 xl:px-32 md:px-8 px-4 flex py-4 md:flex-row flex-col'>
{/* First Section */}
        <section className=''>
            <div className='flex bg-[red] flex-col justify-center h-full'>
                <div className='text-[2rem] font-semibold'>
<h1 className=''>Pursue Your Career as a</h1>
<h1>{currentWord}|</h1>
                </div>
<p className=''>We are championing workforce evolution, offering innovative operational strategies that drive business transformation. By integrating specialized recruitment, smart automations and workflow optimization, we empower organizations to thrive. Our focus is on delivering <q>The Future of Balanced Workforces</q> - where talent blends with technology.</p>
            </div>
        </section>

        {/* second section */}
    <section className='md:w-[45%] w-full flex justify-end  '>
                
    
    
    
            
    <div className='relative lg:w-[420px] lg:h-[390px]  md:w-[390px] md:h-[360px] w-full min-h-[350px]'>
        <Image alt='paige' src={"/job-hunt.svg"}  fill className=' absolute object-contain '/>
        </div>      
            </section>
    </div>
  )
}

export default HeroSection