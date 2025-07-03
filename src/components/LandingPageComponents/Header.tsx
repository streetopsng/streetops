"use client"
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";

import { useDispatch, useSelector } from "react-redux";
import { dispatchType, RootStateType } from "@/store";
import { closeSubmenu, openSubmenu } from "@/store/slices/desktopSubmenuLinksSlice";
interface menuLinksTypes {
    id:number,
    name:string,
    subLinks?:{display:string,id:string}[],
}

const subLinksClass = "h-[50px] text-wht flex items-center transition-all duration-700 hover:bg-wht hover:text-primary pl-8 border-primary border-[2px] hover:font-semibold hover:pl-4 "
const desktopLinkClass = "hover:text-primary border-b-[3px] border-transparent  hover:border-primary duration-500  min-w-[20%] transition-all py-[3px]  text-center"
const mobileLinkClass = "h-[50px] text-wht flex items-center transition-all duration-700 hover:bg-wht hover:text-primary px-4 border-primary border-[2px] hover:font-semibold hover:pl-2 "

const menuLinks:menuLinksTypes[] = [
    {
        id:1,
        name:"Home",
        
    },
    {
        id:2,
        name:"About",
    },
    {
        id:3,
        name:"Services",
        // subLinks:[{display:"Workflow Automation",id:"workflowAutomation"},{display:"Recruitment",id:"recruitment"},{display:"Train and Development",id:"trainingAndDevelopment"},{display:"Worklife Integration Consulting",id:"worklifeIntegrationConsulting"}]
    },
    {
id:4,
name:"Jobs"
    },
    // {
    //     id:4,
    //     name:"Packages",
        
    // },
    // {
    //     id:5,
    //     name:"Resources",
    // },

]
export const Header = () => {

    const [showNav,setShowNav] = useState<boolean>(false)
const mobileMenuRef = useRef<HTMLElement | null>(null)
const [accordion,setAccodion] = useState<string[]>([""])

const headerContainerRef = useRef<HTMLDivElement | null>(null)



const servicesTop = useSelector((store:RootStateType)=>{

    return store.servicesTopReducer
})


useEffect(()=>{
if (!headerContainerRef.current) {
    return
}

const element: HTMLDivElement = headerContainerRef.current 
const getHeight = window.innerHeight + element.getBoundingClientRect().height
 



const scrollFunction = ()=>{
    if (window.scrollY >= element.getBoundingClientRect().height ) {
        element.style.position = "fixed"
        element.style.top = "0"
        element.style.width = "100%"


    }
    else if (window.scrollY <= element.getBoundingClientRect().height ) {
        element.style.position = "static"
        // element.style.top = "0"
        element.style.width = "100%"
    }
    
    
    // console.log("nav screen hight",getHeight);
    // console.log("scroll",window.scrollY);
// console.log(window.screenY + element.getBoundingClientRect().height);



}
    window.addEventListener("scroll",scrollFunction)

    return ()=> window.removeEventListener("scroll",scrollFunction)
},[])
const dispatch = useDispatch<dispatchType>()



const router =useRouter()


useEffect(()=>{


},[accordion])
useEffect(()=>{

    if (showNav) {
        
        gsap.to(mobileMenuRef.current,{
            left:0,
            opacity:1,
            duration:1,
           
            
        })
    }
    else{
        gsap.to(mobileMenuRef.current,{
            left:"-100%",
            opacity:0,
            duration:1,
        })
    }
},[showNav])


  return (
    // bg-[#000000ed]
    <div ref={headerContainerRef}  className=" min-h-[20px] w-full bg-[#000000ed] z-50  ">

    <div  className=" xl:mx-6 md:mx-4 lg:mt-2 mx-4 mdlg:static relative text-grayOne ">
        
        <div style={{zIndex:10}} className="lg:py-0 py-4 flex justify-between items-center  ">

        <section className="lg:pl-4 flex items-center gap-x-2">
       
<div className="relative lg:w-[30px] lg:h-[50px] h-[30px] w-[20px] bg-">
        <Image 
        className="absolute w-full h-full object-contain"
        fill
        src={"/logo.png"} 
        alt="logo"/>
        </div>
        <h1 className="text-primary font-semibold">PAIGE</h1>
        </section>

{/* Menu bar  for desktop*/}
<section className="mdlg:flex hidden lg:w-[30%] mdlg:w-[60%] justify-between ">
    {
        menuLinks.map((item,index)=>{
return <Link
href={`/${item.subLinks && item.subLinks.length > 0 ? "" : item.name == "Home" ? "" : item.name.toLocaleLowerCase()}`}
key={index}
onMouseOver={(e)=>{
    const el = e.target as HTMLButtonElement | HTMLLinkElement
    // console.log(el.getBoundingClientRect());
    const element = el.getBoundingClientRect()
    const getCenter = (element.left + element.right) / 2 ;
    if (item.subLinks && item.subLinks.length > 0) {
        dispatch(openSubmenu({left:getCenter,subLinkList:item.subLinks}))
    }
}}
className={`${desktopLinkClass} flex items-center justify-center text-[0.9rem]`}>
    <span>{item.name}</span> <span className="ml-2">{item.subLinks && item.subLinks?.length > 0 ? <FaAngleDown size={13}/> : "" }</span>
    </Link>
        })
    }
   
</section>

<section className=" space-x-2">
    {/* Start Automating */}
<button
// onClick={()=> router.push("/jobs")}
className='mdlg:inline hidden  text-wht rounded-md lg:h-[40px] h-[30px] lg:px-4 px-2 cursor-pointer   border-[2px] border-primary relative overflow-hidden group' >
<span className="relative  z-10 transition-colors duration-300 group-hover:text-wht text-primary">
Start Automating
</span>
<span className="absolute inset-0 bg-primary transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out z-0" />
</button> 
{/* Hire A talent */}
<button
onClick={()=> router.push("/hire-a-talent")}
className='mdlg:inline hidden  text-wht rounded-md lg:h-[40px] h-[30px] lg:px-4 px-2 cursor-pointer   border-[2px] border-grayOne relative overflow-hidden group' >
<span className="relative  z-10 transition-colors duration-300 group-hover:text-primary text-wht">
Hire a Talent
</span>
<span className="absolute inset-0 bg-grayOne transform translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out z-0" />
</button> 
{/* Mobile Nav */}
<button className="mdlg:hidden inline bg-primary text-wht rounded-md h-[35px] px-[3px] cursor-pointer hover:bg-wht hover:text-primary border-[2px] border-primary  transition-all duration-500 " onClick={()=> {
    setShowNav(!showNav)
    // console.log(showNav);
    
}}> {showNav ? <IoMdClose size={30}/>: <IoIosMenu size={30}/>}</button>
</section>
        </div>
        
{/* Menu bar  for mobile*/}
    <section className="bg-primary fixed w-[50%] h-screen top-0 left-0 py-18 opacity-0" 
    ref={mobileMenuRef} 
    style={{zIndex:100}}
    >
        <div className="flex flex-col" >
            {
                menuLinks.map((item,index)=>{

                    if (item.subLinks && item.subLinks.length > 0 ) {
                        return <div className="w-full " key={index}>
                            <button onClick={()=>{
                                if (accordion.some(acc => acc == item.name)) {
                                    const copyAcc = [...accordion]
                                    const remove = copyAcc.filter(acc => acc !== item.name)
                                    setAccodion(remove)
                                }
                                else{
                                    const copyAcc = [...accordion]
                                    copyAcc.push(item.name)
                                    setAccodion(copyAcc)

                                }
                                
                            }} className={`${mobileLinkClass} w-full justify-between`} >
                                <span>{item.name}</span>
                                <span><FaAngleDown size={13}/></span>
                            </button>
                           {accordion.some(acc => acc == item.name) && <aside>
                            {
                                    item.subLinks.map((link,ind)=>{

                                        return <button key={ind} 
                                        onClick={()=>{
                                            const getKeys = Object.keys(servicesTop)
                                            console.log(getKeys);
                                            const curr = link.id
                                            console.log(servicesTop);
                                            const currHeaderHeight = 220
                                            const value: "workflowAutomation" | "recruitment" | "trainingAndDevelopment" | "worklifeIntegrationConsulting" = link.id as "workflowAutomation" | "recruitment" | "trainingAndDevelopment" | "worklifeIntegrationConsulting"
                                               window.scrollTo({
                                                   top:window.scrollY + servicesTop[value] - currHeaderHeight,
                                                   behavior:"smooth"
                                               })

                                            setShowNav(false)   
                                        }}
                                        className={`${subLinksClass}text-start w-full`}
                                        //  href={`/${link.display.toLocaleLowerCase()}`}
                                        >{link.display}</button>
                                    })
                                }
                            </aside>}
                        </div>
                    }
                    return  <Link className={`${mobileLinkClass}`} href={`/${item.subLinks && item.subLinks.length > 0 ? "" : item.name == "Home" ? "" : item.name.toLocaleLowerCase()}`} key={index}>{item.name}</Link>
                })
            }

        </div>
    </section>
    </div>

    <div className="flex justify-between py-3 px-2">
    <button
// onClick={()=> router.push("/jobs")}
className='mdlg:hidden inline  text-wht rounded-md lg:h-[40px] h-[30px] lg:px-4 px-2 cursor-pointer   border-[2px] border-primary relative overflow-hidden group bg-primary' >
<span className="relative  z-10 transition-colors duration-300 group-hover:text-wht text-wht">
Start Automating
</span>
<span className="absolute inset-0 bg-primary transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out z-0" />
</button> 
{/* Find a Jobs */}
<button
onClick={()=> router.push("/hire-a-talent")}
className='mdlg:hidden inline  text-wht rounded-md lg:h-[40px] h-[30px] lg:px-4 px-2 cursor-pointer   border-[2px] border-grayOne relative overflow-hidden group bg-wht' >
<span className="relative  z-10 transition-colors duration-300 group-hover:text-primary text-primary">
Hire a Talent
</span>
<span className="absolute inset-0 bg-grayOne transform translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out z-0" />
</button> 
    </div>
         </div>

  )
}
