"use client"
import { TfiBag } from "react-icons/tfi";
import { CiFileOn } from "react-icons/ci";
import { MdOutlineGroups3 } from "react-icons/md"
const itemList = [
    {
        id:1,
        header:"Looking to Hire?",
        desc:"Submit a job description",
        button:"Contact Us",
        icon:MdOutlineGroups3,
    },
    {
        id:2,
        header:"Find a Job",
        desc:"Find your next role",
        button:"Apply now",
        icon:TfiBag,
    },
    {
        id:3,
        header:"Submit your CV",
        desc:"Send us your latest CV",
        button:"Upload now",
        icon:CiFileOn,
    },
] 
const LookingToHire = () => {
  return <div className="flex md:justify-between md:flex-row  flex-col items-center my-32">


{
    itemList.map((item,index)=>{
        return <div className="w-[80%] xs:w-[50%] md:w-[30%]  flex flex-col items-center md:my-0 my-8 ">
            <span ><item.icon  className={`text-[7rem] ${item.id == 1 ? "mb-[-24] md:mb-[0px]" : ""}`}/></span>
            <span  className="font-bold">{item.header}</span>
            <span className="my-4">{item.desc}</span>
            <button className="bg-primary text-wht px-4 py-2 rounded-md font-medium">{item.button}</button>
        </div>
    })
}
  </div>
}

export default LookingToHire