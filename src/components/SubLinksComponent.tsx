"use client"
import { RootStateType } from '@/store'
import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import gsap from 'gsap'
import Link from 'next/link'

const SubLinksComponent = () => {
const container =  useRef<HTMLDivElement | null>(null)
const [width,setWidth ] = useState(0)
    const getSubLinksState = useSelector((store:RootStateType)=>{

        return store.submenuReducer
    })
    const servicesTop = useSelector((store:RootStateType)=>{

        return store.servicesTopReducer
    })




    useEffect(()=>{
setWidth(getSubLinksState.left)
    },[getSubLinksState])

    useEffect(()=>{
        // console.log("sublinks component",getSubLinksState);
        if (getSubLinksState.open) {
            gsap.to(container.current,{
                opacity:1,
                left:getSubLinksState.left - 50
            })
        }
        else{
            gsap.to(container.current,{
                opacity:0,
                
              
            })
        }
        
        
            },[getSubLinksState])
  return (
    <div
    ref={container}
    // style={{left:(getSubLinksState.left - 50)}}
    className={`absolute  py-2 top-[10%] z-100  flex flex-col min-w-[200px]  rounded-md sublink-container text-[0.9rem] opacity-0`}

    // style={{left: getSubLinksState.open ? width : "-200px",opacity:getSubLinksState.open ? 1 : 0}}
    >
        {
            getSubLinksState.subLinks && getSubLinksState.subLinks.map((item:{display:string,id:string},index)=>{
                return <button
                className=' py-2 text-start mx-2 px-4  hover:bg-grayOne hover:text-black text-grayOne hover:rounded-lg hover:font-semibold'
                key={item.id}
                onClick={()=>{

                    const getKeys = Object.keys(servicesTop)
                 console.log(getKeys);
                 const curr = item.id
                 console.log(servicesTop);
                 const currHeaderHeight = 220
                 const value: "workflowAutomation" | "recruitment" | "trainingAndDevelopment" | "worklifeIntegrationConsulting" = item.id as "workflowAutomation" | "recruitment" | "trainingAndDevelopment" | "worklifeIntegrationConsulting"
                    window.scrollTo({
                        top:window.scrollY + servicesTop[value] - currHeaderHeight,
                        behavior:"smooth"
                    })
                //  if (item.id == "workflowAutomation") {

                     
                //  }

                    // window.scrollTo(
                    //     {
                    //         top:window.screenY,
                    //         behavior:"smooth"
                    //     }
                    // )
                }}
                //  href={`#${item.id}`}
                 >
                    {item.display}
                </button>
            })
        }
    </div>
  )
}

export default SubLinksComponent