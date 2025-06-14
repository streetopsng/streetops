import React from 'react'

const sectionClass = "w-[90%] lg:w-[30%] my-4"
const headerClass = 'font-semibold text-grayOne text-lg text-[1.2rem]  '
const Services = () => {
  return (
    <div className='text-grayTwo xl:px-8 md:px-8'>
       <h1 className='text-2xl lg:text-[2.2rem] uppercase animated-gradient-text-two text-[1.5rem] text-center font-semibold'>Services</h1>
       {/* Workflow */}
      <div className='flex flex-wrap  gap-4 justify-center  '>
      <section className={sectionClass}>
<h1 className={headerClass}>Workflow Automation</h1>
<p className=''><strong className='text-wht italic'>Automate</strong>  for peak performance.</p>
<ul className='list-disc leading-10 px-4'>
    <li>Work faster, smarter. </li>
    <li>Boost operational flow. </li>
    <li>Scale with ease. </li>
</ul>
       </section>
       {/* Recruitment */}
       <section className={sectionClass}>
<h1 className={headerClass}>Recruitment </h1>
<p className=''><strong className='text-wht italic'>Hire</strong>   the best talent, <strong className='text-wht'>fast.</strong></p>
<ul className='list-disc leading-10 px-4'>
    <li>Attract top talent </li>
    <li>Accelerate hiring </li>
    <li>Build strong teams </li>
</ul>
       </section>
       {/* Training and Development */}
       <section className={sectionClass}>
<h1 className={headerClass}>Training and Development </h1>
<p className=''><strong className='text-wht italic'>Unleash</strong>  your team's potential. </p>
<ul className='list-disc leading-10 px-4'>
    <li>Cultivate vital skills. </li>
    <li>Foster professional growth.</li>
    <li>Boost team performance.  </li>
</ul>
       </section>
       {/* Worklife Integration Consulting */}
       <section className={sectionClass}>
<h1 className={headerClass}>Worklife Integration Consulting </h1>
<p className=''><strong className='text-wht italic'>Cultivate</strong>   sustainable well-being.</p>
<ul className='list-disc leading-10 px-4'>
    <li>Design supportive cultures. </li>
    <li>Enhance employee well-being. </li>
    <li>Maximize long-term productivity. </li>
</ul>
       </section>
      </div>
    </div>
  )
}

export default Services