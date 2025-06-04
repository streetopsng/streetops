"use client"
import { CiLocationOn } from "react-icons/ci";
import { MdAccessTime } from "react-icons/md";
import React, { useState } from 'react'
import Link from "next/link";
export const jobsList = [
    {
      id: 1,
      jobTitle: "Law Enforcement Liaison Officer (Payments/Fintech/Law Enforcement)",
      location: "San Francisco, CA",
      about:{
        title:"About the job Relocate to Malta D365 CE Lead Functional Consultant (Consulting/Big 4)",
        info:"Our client's Microsoft Business Solutions team is a Microsoft Gold Partner and leader in Microsoft software implementations for medium to large organisations, providing their clients with the ability to keep up with the ever-changing digital world by implementing Microsoft's M365, Azure, Microsoft's Enterprise Resource Planning (ERP) and Customer Engagement (CE) software from the Microsoft Dynamics 365 (D365) software line.",

      },
      roleOverview:"This role is kingpin to our client's customer delivery of Microsoft Dynamics 365 solutions. It is a dynamic and exciting opportunity to join a rapidly developing business area within an established and market-leading global firm.",
      jobType:"full time",
      workPlace:"Onsite",
      relocation:"VISA & Relocation Package Included",
      requirements:[
        "Confident in abilities and can demonstrate this in front of the client",
        "Works independently as well as in a team environment",
        "Acts with professional demeanour",
        "Manages time and multiple tasks accordingly",
        "Thinks clearly and calmly under pressure",
        "Solves complex problems with creative solutions",
        "Minimum 12+ years hands-on proven functional experience in CRM configuration, standard workflows, dashboards, forms, views and standard reports development is a must;",
        "At least 5-6 end to end large scale implementations with D365 CE (or lower versions); Proven experience designing applications using various modules of D365 CE like Sales, Marketing, Customer Service & Field Service;"
      ],
      responsibilites:[
        "Organise, manage and document workshops, meetings and requirements sessions with the client representatives, project stakeholders and teams;",
        "Interface effectively with other members of the team and the Solution Architect to ensure that the CRM solution continues to meet client's requirements"
      ]
    },
    {
      id: 2,
      jobTitle: "Mid-Level Frontend Engineer (Sports Technology)",
      location: "New York, NY",
      about:{
        title:"About the job Relocate to Malta D365 CE Lead Functional Consultant (Consulting/Big 4)",
        info:"Our client's Microsoft Business Solutions team is a Microsoft Gold Partner and leader in Microsoft software implementations for medium to large organisations, providing their clients with the ability to keep up with the ever-changing digital world by implementing Microsoft's M365, Azure, Microsoft's Enterprise Resource Planning (ERP) and Customer Engagement (CE) software from the Microsoft Dynamics 365 (D365) software line.",

      },
      roleOverview:"This role is kingpin to our client's customer delivery of Microsoft Dynamics 365 solutions. It is a dynamic and exciting opportunity to join a rapidly developing business area within an established and market-leading global firm.",
      jobType:"full time",
      workPlace:"Onsite",
      relocation:"VISA & Relocation Package Included",
      requirements:[
        "Confident in abilities and can demonstrate this in front of the client",
        "Works independently as well as in a team environment",
        "Acts with professional demeanour",
        "Manages time and multiple tasks accordingly",
        "Thinks clearly and calmly under pressure",
        "Solves complex problems with creative solutions",
        "Minimum 12+ years hands-on proven functional experience in CRM configuration, standard workflows, dashboards, forms, views and standard reports development is a must;",
        "At least 5-6 end to end large scale implementations with D365 CE (or lower versions); Proven experience designing applications using various modules of D365 CE like Sales, Marketing, Customer Service & Field Service;"
      ],
      responsibilites:[
        "Organise, manage and document workshops, meetings and requirements sessions with the client representatives, project stakeholders and teams;",
        "Interface effectively with other members of the team and the Solution Architect to ensure that the CRM solution continues to meet client's requirements"
      ]
    },
    {
      id: 3,
      jobTitle: "German Speaking Coordinator (Information Technology)",
      location: "Austin, TX",
      about:{
        title:"About the job Relocate to Malta D365 CE Lead Functional Consultant (Consulting/Big 4)",
        info:"Our client's Microsoft Business Solutions team is a Microsoft Gold Partner and leader in Microsoft software implementations for medium to large organisations, providing their clients with the ability to keep up with the ever-changing digital world by implementing Microsoft's M365, Azure, Microsoft's Enterprise Resource Planning (ERP) and Customer Engagement (CE) software from the Microsoft Dynamics 365 (D365) software line.",

      },
      roleOverview:"This role is kingpin to our client's customer delivery of Microsoft Dynamics 365 solutions. It is a dynamic and exciting opportunity to join a rapidly developing business area within an established and market-leading global firm.",
      jobType:"full time",
      workPlace:"Onsite",
      relocation:"VISA & Relocation Package Included",
      requirements:[
        "Confident in abilities and can demonstrate this in front of the client",
        "Works independently as well as in a team environment",
        "Acts with professional demeanour",
        "Manages time and multiple tasks accordingly",
        "Thinks clearly and calmly under pressure",
        "Solves complex problems with creative solutions",
        "Minimum 12+ years hands-on proven functional experience in CRM configuration, standard workflows, dashboards, forms, views and standard reports development is a must;",
        "At least 5-6 end to end large scale implementations with D365 CE (or lower versions); Proven experience designing applications using various modules of D365 CE like Sales, Marketing, Customer Service & Field Service;"
      ],
      responsibilites:[
        "Organise, manage and document workshops, meetings and requirements sessions with the client representatives, project stakeholders and teams;",
        "Interface effectively with other members of the team and the Solution Architect to ensure that the CRM solution continues to meet client's requirements"
      ]
    },
    {
      id: 4,
      jobTitle: "Relocate to Malta .NET Full Stack Developer",
      location: "Chicago, IL",
      about:{
        title:"About the job Relocate to Malta D365 CE Lead Functional Consultant (Consulting/Big 4)",
        info:"Our client's Microsoft Business Solutions team is a Microsoft Gold Partner and leader in Microsoft software implementations for medium to large organisations, providing their clients with the ability to keep up with the ever-changing digital world by implementing Microsoft's M365, Azure, Microsoft's Enterprise Resource Planning (ERP) and Customer Engagement (CE) software from the Microsoft Dynamics 365 (D365) software line.",

      },
      roleOverview:"This role is kingpin to our client's customer delivery of Microsoft Dynamics 365 solutions. It is a dynamic and exciting opportunity to join a rapidly developing business area within an established and market-leading global firm.",
      jobType:"full time",
      workPlace:"Onsite",
      relocation:"VISA & Relocation Package Included",
      requirements:[
        "Confident in abilities and can demonstrate this in front of the client",
        "Works independently as well as in a team environment",
        "Acts with professional demeanour",
        "Manages time and multiple tasks accordingly",
        "Thinks clearly and calmly under pressure",
        "Solves complex problems with creative solutions",
        "Minimum 12+ years hands-on proven functional experience in CRM configuration, standard workflows, dashboards, forms, views and standard reports development is a must;",
        "At least 5-6 end to end large scale implementations with D365 CE (or lower versions); Proven experience designing applications using various modules of D365 CE like Sales, Marketing, Customer Service & Field Service;"
      ],
      responsibilites:[
        "Organise, manage and document workshops, meetings and requirements sessions with the client representatives, project stakeholders and teams;",
        "Interface effectively with other members of the team and the Solution Architect to ensure that the CRM solution continues to meet client's requirements"
      ]
    },
    {
      id: 5,
      jobTitle: "Relocate to Malta .NET Full Stack Developer",
      location: "Seattle, WA",
      about:{
        title:"About the job Relocate to Malta D365 CE Lead Functional Consultant (Consulting/Big 4)",
        info:"Our client's Microsoft Business Solutions team is a Microsoft Gold Partner and leader in Microsoft software implementations for medium to large organisations, providing their clients with the ability to keep up with the ever-changing digital world by implementing Microsoft's M365, Azure, Microsoft's Enterprise Resource Planning (ERP) and Customer Engagement (CE) software from the Microsoft Dynamics 365 (D365) software line.",

      },
      roleOverview:"This role is kingpin to our client's customer delivery of Microsoft Dynamics 365 solutions. It is a dynamic and exciting opportunity to join a rapidly developing business area within an established and market-leading global firm.",
      jobType:"full time",
      workPlace:"Onsite",
      relocation:"VISA & Relocation Package Included",
      requirements:[
        "Confident in abilities and can demonstrate this in front of the client",
        "Works independently as well as in a team environment",
        "Acts with professional demeanour",
        "Manages time and multiple tasks accordingly",
        "Thinks clearly and calmly under pressure",
        "Solves complex problems with creative solutions",
        "Minimum 12+ years hands-on proven functional experience in CRM configuration, standard workflows, dashboards, forms, views and standard reports development is a must;",
        "At least 5-6 end to end large scale implementations with D365 CE (or lower versions); Proven experience designing applications using various modules of D365 CE like Sales, Marketing, Customer Service & Field Service;"
      ],
      responsibilites:[
        "Organise, manage and document workshops, meetings and requirements sessions with the client representatives, project stakeholders and teams;",
        "Interface effectively with other members of the team and the Solution Architect to ensure that the CRM solution continues to meet client's requirements"
      ]
    },
    {
      id: 6,
      jobTitle: "Full Stack Developer",
      location: "Denver, CO",
      about:{
        title:"About the job Relocate to Malta D365 CE Lead Functional Consultant (Consulting/Big 4)",
        info:"Our client's Microsoft Business Solutions team is a Microsoft Gold Partner and leader in Microsoft software implementations for medium to large organisations, providing their clients with the ability to keep up with the ever-changing digital world by implementing Microsoft's M365, Azure, Microsoft's Enterprise Resource Planning (ERP) and Customer Engagement (CE) software from the Microsoft Dynamics 365 (D365) software line.",

      },
      roleOverview:"This role is kingpin to our client's customer delivery of Microsoft Dynamics 365 solutions. It is a dynamic and exciting opportunity to join a rapidly developing business area within an established and market-leading global firm.",
      jobType:"full time",
      workPlace:"Onsite",
      relocation:"VISA & Relocation Package Included",
      requirements:[
        "Confident in abilities and can demonstrate this in front of the client",
        "Works independently as well as in a team environment",
        "Acts with professional demeanour",
        "Manages time and multiple tasks accordingly",
        "Thinks clearly and calmly under pressure",
        "Solves complex problems with creative solutions",
        "Minimum 12+ years hands-on proven functional experience in CRM configuration, standard workflows, dashboards, forms, views and standard reports development is a must;",
        "At least 5-6 end to end large scale implementations with D365 CE (or lower versions); Proven experience designing applications using various modules of D365 CE like Sales, Marketing, Customer Service & Field Service;"
      ],
      responsibilites:[
        "Organise, manage and document workshops, meetings and requirements sessions with the client representatives, project stakeholders and teams;",
        "Interface effectively with other members of the team and the Solution Architect to ensure that the CRM solution continues to meet client's requirements"
      ]
    },
    {
      id: 7,
      jobTitle: "Mobile App Developer",
      location: "Atlanta, GA",
      about:{
        title:"About the job Relocate to Malta D365 CE Lead Functional Consultant (Consulting/Big 4)",
        info:"Our client's Microsoft Business Solutions team is a Microsoft Gold Partner and leader in Microsoft software implementations for medium to large organisations, providing their clients with the ability to keep up with the ever-changing digital world by implementing Microsoft's M365, Azure, Microsoft's Enterprise Resource Planning (ERP) and Customer Engagement (CE) software from the Microsoft Dynamics 365 (D365) software line.",

      },
      roleOverview:"This role is kingpin to our client's customer delivery of Microsoft Dynamics 365 solutions. It is a dynamic and exciting opportunity to join a rapidly developing business area within an established and market-leading global firm.",
      jobType:"full time",
      workPlace:"Onsite",
      relocation:"VISA & Relocation Package Included",
      requirements:[
        "Confident in abilities and can demonstrate this in front of the client",
        "Works independently as well as in a team environment",
        "Acts with professional demeanour",
        "Manages time and multiple tasks accordingly",
        "Thinks clearly and calmly under pressure",
        "Solves complex problems with creative solutions",
        "Minimum 12+ years hands-on proven functional experience in CRM configuration, standard workflows, dashboards, forms, views and standard reports development is a must;",
        "At least 5-6 end to end large scale implementations with D365 CE (or lower versions); Proven experience designing applications using various modules of D365 CE like Sales, Marketing, Customer Service & Field Service;"
      ],
      responsibilites:[
        "Organise, manage and document workshops, meetings and requirements sessions with the client representatives, project stakeholders and teams;",
        "Interface effectively with other members of the team and the Solution Architect to ensure that the CRM solution continues to meet client's requirements"
      ]
    },
    {
      id: 8,
      jobTitle: "Product Manager",
      location: "Boston, MA",
      about:{
        title:"About the job Relocate to Malta D365 CE Lead Functional Consultant (Consulting/Big 4)",
        info:"Our client's Microsoft Business Solutions team is a Microsoft Gold Partner and leader in Microsoft software implementations for medium to large organisations, providing their clients with the ability to keep up with the ever-changing digital world by implementing Microsoft's M365, Azure, Microsoft's Enterprise Resource Planning (ERP) and Customer Engagement (CE) software from the Microsoft Dynamics 365 (D365) software line.",

      },
      roleOverview:"This role is kingpin to our client's customer delivery of Microsoft Dynamics 365 solutions. It is a dynamic and exciting opportunity to join a rapidly developing business area within an established and market-leading global firm.",
      jobType:"full time",
      workPlace:"Onsite",
      relocation:"VISA & Relocation Package Included",
      requirements:[
        "Confident in abilities and can demonstrate this in front of the client",
        "Works independently as well as in a team environment",
        "Acts with professional demeanour",
        "Manages time and multiple tasks accordingly",
        "Thinks clearly and calmly under pressure",
        "Solves complex problems with creative solutions",
        "Minimum 12+ years hands-on proven functional experience in CRM configuration, standard workflows, dashboards, forms, views and standard reports development is a must;",
        "At least 5-6 end to end large scale implementations with D365 CE (or lower versions); Proven experience designing applications using various modules of D365 CE like Sales, Marketing, Customer Service & Field Service;"
      ],
      responsibilites:[
        "Organise, manage and document workshops, meetings and requirements sessions with the client representatives, project stakeholders and teams;",
        "Interface effectively with other members of the team and the Solution Architect to ensure that the CRM solution continues to meet client's requirements"
      ]
    },
    {
      id: 9,
      jobTitle: "Software Engineer",
      location: "Los Angeles, CA",
      about:{
        title:"About the job Relocate to Malta D365 CE Lead Functional Consultant (Consulting/Big 4)",
        info:"Our client's Microsoft Business Solutions team is a Microsoft Gold Partner and leader in Microsoft software implementations for medium to large organisations, providing their clients with the ability to keep up with the ever-changing digital world by implementing Microsoft's M365, Azure, Microsoft's Enterprise Resource Planning (ERP) and Customer Engagement (CE) software from the Microsoft Dynamics 365 (D365) software line.",

      },
      roleOverview:"This role is kingpin to our client's customer delivery of Microsoft Dynamics 365 solutions. It is a dynamic and exciting opportunity to join a rapidly developing business area within an established and market-leading global firm.",
      jobType:"full time",
      workPlace:"Onsite",
      relocation:"VISA & Relocation Package Included",
      requirements:[
        "Confident in abilities and can demonstrate this in front of the client",
        "Works independently as well as in a team environment",
        "Acts with professional demeanour",
        "Manages time and multiple tasks accordingly",
        "Thinks clearly and calmly under pressure",
        "Solves complex problems with creative solutions",
        "Minimum 12+ years hands-on proven functional experience in CRM configuration, standard workflows, dashboards, forms, views and standard reports development is a must;",
        "At least 5-6 end to end large scale implementations with D365 CE (or lower versions); Proven experience designing applications using various modules of D365 CE like Sales, Marketing, Customer Service & Field Service;"
      ],
      responsibilites:[
        "Organise, manage and document workshops, meetings and requirements sessions with the client representatives, project stakeholders and teams;",
        "Interface effectively with other members of the team and the Solution Architect to ensure that the CRM solution continues to meet client's requirements"
      ]
    },
    {
      id: 10,
      jobTitle: "Cybersecurity Specialist",
      location: "Miami, FL",
      about:{
        title:"About the job Relocate to Malta D365 CE Lead Functional Consultant (Consulting/Big 4)",
        info:"Our client's Microsoft Business Solutions team is a Microsoft Gold Partner and leader in Microsoft software implementations for medium to large organisations, providing their clients with the ability to keep up with the ever-changing digital world by implementing Microsoft's M365, Azure, Microsoft's Enterprise Resource Planning (ERP) and Customer Engagement (CE) software from the Microsoft Dynamics 365 (D365) software line.",

      },
      roleOverview:"This role is kingpin to our client's customer delivery of Microsoft Dynamics 365 solutions. It is a dynamic and exciting opportunity to join a rapidly developing business area within an established and market-leading global firm.",
      jobType:"full time",
      workPlace:"Onsite",
      relocation:"VISA & Relocation Package Included",
      requirements:[
        "Confident in abilities and can demonstrate this in front of the client",
        "Works independently as well as in a team environment",
        "Acts with professional demeanour",
        "Manages time and multiple tasks accordingly",
        "Thinks clearly and calmly under pressure",
        "Solves complex problems with creative solutions",
        "Minimum 12+ years hands-on proven functional experience in CRM configuration, standard workflows, dashboards, forms, views and standard reports development is a must;",
        "At least 5-6 end to end large scale implementations with D365 CE (or lower versions); Proven experience designing applications using various modules of D365 CE like Sales, Marketing, Customer Service & Field Service;"
      ],
      responsibilites:[
        "Organise, manage and document workshops, meetings and requirements sessions with the client representatives, project stakeholders and teams;",
        "Interface effectively with other members of the team and the Solution Architect to ensure that the CRM solution continues to meet client's requirements"
      ]
    }
  ];
  
  const inputClass = "border-grayTwotext-grayTwo border-1 rounded-md py-2 pl-2 md:w-[32%] "
const JobsListComponent = () => {
    const [jobs] = useState<any[]>(jobsList)
  return (
    <div className="xl:px-10 md:px-8 px-4 text-grayOne">
      <h1 className="lg:text-[2rem] text-[1.5rem] text-white text-center font-semibold">Available Jobs</h1>
{/* form section */}
{/* <section className="md:flex justify-between items-center">
    
    <div className="flex  flex-col md:flex-row md:justify-between gap-y-4 my-4 md:w-[80%] ">
    <input 
    type="text"
    placeholder='search keyword'
    className={inputClass}
     />
    <input 
    type="text"
    placeholder='search country'
    className={inputClass}
    />
    <input 
    type="text"
    placeholder='search city'
    className={inputClass}
    />
    </div>
    <div className="flex justify-center">
    <button className="bg-primary text-wht w-[100px] py-2 rounded-lg md:min-h-[50px]">Search Jobs</button>
    </div>
</section> */}


{/* Jobs Section */}
<section>
    {
        jobs.map((job,index)=>{

            return <div key={job.id} className="border-[2px]  border-grayTwo  rounded-md my-4 py-4 px-2 md:flex justify-between">
                <aside className="md:w-[80%]">
<h1 className="font-bold">{job.jobTitle}</h1>
<div className="flex items-center gap-x-2 my-2 text-grayTwo"><span><CiLocationOn/> </span> <span>{job.location}</span></div>
<div className="flex items-center gap-x-2 my-2 text-grayTwo"><span><MdAccessTime/></span> <span>Full time | On-site </span></div>
                </aside>

<aside className="flex justify-end md:items-center ">
    <Link href={`/jobs/${job.id}`} className="bg-primary  text-center w-[100px] py-2 rounded-lg cursor-pointer hover:opacity-90">Apply</Link>
</aside>
            </div>
        })
    }
</section>
{/* Total jobs */}
<p className="text-center">1 of 241</p>
<div className="flex justify-end">
    <button className="bg-primary  w-[100px] py-2 rounded-lg">Next</button>
</div>
    </div>
  )
}

export default JobsListComponent