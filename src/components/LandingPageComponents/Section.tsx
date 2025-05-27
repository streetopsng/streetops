"use client";
import React from 'react';
import Image from 'next/image';
import { FaComments, FaTimes } from 'react-icons/fa';
import { GiCheckMark } from "react-icons/gi";
import { RiCheckboxFill } from "react-icons/ri";
const checkList = ["workforcess","process","process","people"]
const Section = () => {
  const [input, setInput] = React.useState('');
  const [messages, setMessages] = React.useState<{ role: 'user' | 'assistant'; content: string }[]>([]);
  const [isChatOpen, setIsChatOpen] = React.useState(false);


  return (
    <div className="xl:px-8 md:px-8  flex flex-col  justify-start items-center   space-y-10 text-grayOne">
      {/* work life balance */}
      <div className="flex flex-col lg:flex-row  rounded-lg w-full gap-y-16 rounded-lg lg:border-grayTwo lg:border-2 overflow-hidden lg:items-center ">
        {/* first */}
        <div className="flex-1 space-y-4 lg:max-w-[70%] px-6 ">
          <h2 className="font-semibold text-2xl lg:text-[2.2rem] leading-snug lg:text-start text-center animated-gradient-text-two uppercase font-semibold">
            The Future of <br className="block sm:hidden" />
            Balanced Workforces.
          </h2>
          <p className='text-grayTwo lg:text-[0.9rem] '>
            We are championing workforce evolution, offering innovative operational strategies that drive business transformation. By integrating specialized recruitment, smart automations and workflow optimization, we empower organizations to thrive. Our focus is on delivering <q>The Future of Balanced Workforces</q> - where talent blends with technology.
          </p>
        </div>
{/* second */}
        <div className='lg:bg-gradient-to-r bg-gradient-to-b from-[rgba(0,0,0,0.3)] to-[#9f1203] lg:w-[30%] lg:px-0 px-4'>
        {
  checkList.map((item,index)=>{

    return <div key={index} className='flex items-center  w-full py-4'>
<span><RiCheckboxFill className='text-primary text-[1.7em]'/> </span>
<span className='ml-4 font-semibold capitalize text-grayTwo italic'>{item}</span>
    </div>
  })
}
    
    </div>
      </div>



      {/* Suppliers & Financiers Section */}
      <div className="flex flex-col lg:flex-row gap-6 w-full max-w-6xl">
        {/* People */}
        <div className="flex-1 bg-purple-100 p-6 rounded-lg flex flex-col items-center">
          <h2 className="uppercase font-semibold text-xl lg:text-2xl text-center">People</h2>
          <p className="text-base pt-4">
            We believe that people are the core of every successful organization. Our People section provides strategic solutions to maximize your human capital investment. We offer:
            <br />
            <strong>Strategic Recruitment</strong>: Identifying and placing the right talent to achieve your business objectives.
            <br />
            <strong>Transformative Training</strong>: Equipping your workforce with the skills and knowledge needed to excel.
            <br />
            <strong>Human Capital Leadership (Africa)</strong>: Actively contributing to the development of human capital across the African continent through webinars, training programs, and a dynamic blog, fostering a community of growth and innovation.
          </p>
          <Image alt="paige" src="/people.png" width={250} height={250} className="mt-4 rounded-lg" />
        </div>

        {/* Processes */}
        <div className="flex-1 bg-purple-100 p-6 rounded-lg flex flex-col items-center">
          <h2 className="uppercase font-semibold text-xl lg:text-2xl text-center">Processes</h2>
          <p className="text-base pt-4">
            We partner with organizations to transform their operations and achieve peak performance. Our Processes section delivers strategic consulting services, including:
            <br />
            <strong>Operational Consulting</strong>: Providing expert guidance to optimize workflows, reduce costs, and improve overall operational effectiveness.
            <br />
            <strong>Process Automation</strong>: Leveraging automation technologies to drive efficiency, accuracy, and scalability.
            <br />
            <strong>Comprehensive Consulting Solutions</strong>: Offering a suite of consulting services to support organizational change, improve project delivery, and enhance overall business performance.
          </p>
          <Image alt="paige" src="/processes.png" width={250} height={200} className="mt-4 rounded-lg" />
        </div>
      </div>

      
    </div>
  );
};

export default Section;