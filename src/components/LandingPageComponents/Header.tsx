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
import { it } from "node:test";
import { useDispatch, useSelector } from "react-redux";
import { dispatchType, RootStateType } from "@/store";
import { openSubmenu } from "@/store/slices/desktopSubmenuLinksSlice";
interface menuLinksTypes {
    id:number,
    name:string,
    subLinks?:string[],
}

const subLinksClass = "h-[50px] text-wht flex items-center transition-all duration-700 hover:bg-wht hover:text-primary pl-8 border-primary border-[2px] hover:font-semibold hover:pl-4 "
const desktopLinkClass = "hover:text-primary border-b-[3px] border-transparent  hover:border-primary duration-500  min-w-[20%] transition-all py-[3px]  text-center"
const mobileLinkClass = "h-[50px] text-wht flex items-center transition-all duration-700 hover:bg-wht hover:text-primary px-4 border-primary border-[2px] hover:font-semibold hover:pl-2 "

const menuLinks:menuLinksTypes[] = [
    {
        id:1,
        name:"Home",
        subLinks:["packages","Automations","Work-Life "]
    },
    {
        id:2,
        name:"About",
    },
    {
        id:3,
        name:"Services",
        subLinks:["Recruitment","Automations","Work-Life Integration Consulting"]
    },
    {
        id:4,
        name:"Packages",
        
    },
    {
        id:5,
        name:"Resources",
    },

]
export const Header = () => {

    const [showNav,setShowNav] = useState<boolean>(false)
const mobileMenuRef = useRef<HTMLElement | null>(null)
const [accordion,setAccodion] = useState<string[]>([""])


const dispatch = useDispatch<dispatchType>()

// const getState = useSelector((store:RootStateType)=>{

//     return store.submenuReducer
// })


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

    <div  className=" xl:mx-8 md:mx-8 mx-4 mdlg:static relative text-grayOne">
        
        <div style={{zIndex:10}} className="py-4 flex justify-between items-center ">

        <section className=" ">
        {/* <div 
        // className="relative mdlg:w-[80px] mdlg:h-[80px] h-[60px] w-[50px] "
        className="flex items-center pl-2 "
        >
        <Image alt="paige" 
        // className="absolute top-10 left-0 object-contain"
        className="object-contain"
         src={"/paige.png"}
         //  fill
         width={58}
         height={58}
         />
        </div> */}

        <h1 className="text-primary font-bold italic text-[1.5rem]">LOGO</h1>
        </section>

{/* Menu bar  for desktop*/}
<section className="mdlg:flex hidden lg:w-[40%] mdlg:w-[60%] justify-between">
    {
        menuLinks.map((item,index)=>{
return <button
key={index}
onMouseOver={(e)=>{
    const el = e.target as HTMLButtonElement | HTMLLinkElement
    console.log(el.getBoundingClientRect());
    const element = el.getBoundingClientRect()
    const getCenter = (element.left + element.right) / 2 ;
    if (item.subLinks && item.subLinks.length > 0) {
        dispatch(openSubmenu({left:getCenter,subLinkList:item.subLinks}))
    }
    
    
}}
className={`${desktopLinkClass} flex items-center justify-center text-[0.9rem]`}>
    <span>{item.name}</span> <span className="ml-2">{item.subLinks && item.subLinks?.length > 0 ? <FaAngleDown size={13}/> : "" }</span>
    </button>
        })
    }
   
</section>

<section className=" ">
<button
onClick={()=> router.push("/jobs")}
className='mdlg:inline hidden  text-wht rounded-md h-[40px] px-4 cursor-pointer   border-[2px] border-primary relative overflow-hidden group' >
<span className="relative  z-10 transition-colors duration-300 group-hover:text-wht text-primary">
Book a call
</span>
<span className="absolute inset-0 bg-primary transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out z-0" />
</button> 
<button className="mdlg:hidden inline bg-primary text-wht rounded-md h-[35px] px-[3px] cursor-pointer hover:bg-wht hover:text-primary border-[2px] border-primary  transition-all duration-500 " onClick={()=> {
    setShowNav(!showNav)
    console.log(showNav);
    
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

                                        return <Link key={ind} className={`${subLinksClass}`} href={`/${link.toLocaleLowerCase()}`}>{link}</Link>
                                    })
                                }
                            </aside>}
                        </div>
                    }
                    return  <Link className={`${mobileLinkClass}`} href={`/${item.name.toLocaleLowerCase()}`}>{item.name}</Link>
                })
            }

        </div>
    </section>
    </div>

  )
}
