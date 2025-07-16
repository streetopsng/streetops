"use client"
import { TfiBag } from "react-icons/tfi";
import { CiFileOn } from "react-icons/ci";
import { MdOutlineGroups3 } from "react-icons/md"
const itemList = [
    {
        id:1,
        header:"Schedule Your Consultation",
        desc:"We will have a free consultation with you to understand what you are trying to achieve.",
        button:"Contact Us",
        icon:MdOutlineGroups3,
    },
    {
        id:2,
        header:"Develop a Custom Plan",
        desc:"We will co-create a fit-for-purpose solution that meets your business needs.",
        button:"Apply now",
        icon:TfiBag,
    },
    {
        id:3,
        header:"Improve Your Results",
        desc:"We implement the solution specifically designed for you and watch your company grow.",
        button:"Upload now",
        icon:CiFileOn,
    },
] 

const LookingToHire = () => {
    
    return <div className="px-6 my-4">
      <h1 className="text-center font-semibold text-grayOne font-bold text-2xl my-4 animated-gradient-text-two uppercase">Working with Us is Simple</h1>
  <div className="flex md:justify-between md:flex-row  flex-col items-center my-8 text-grayOne ">
{
    itemList.map((item,index)=>{
        return <div className="w-[80%]  md:w-[30%]  flex flex-col items-center md:my-0 my-8 " key={index}>
            <span ><item.icon  className={`text-[5rem] text-primary ${item.id == 1 ? "mb-[-24] md:mb-[0px]" : ""}`}/></span>
            <span className="font-bold text-3xl">Step {index + 1}</span>
            <span  className="font-bold">{item.header}</span>
            <p className="my-4 text-center lg:w-[80%] mx-auto">{item.desc}</p>
            {/* <button className="bg-primary text-wht px-4 py-2 rounded-md font-medium">{item.button}</button> */}
        </div>
    })
}
  </div>
  <div className="flex justify-center"> <button className="bg-primary text-grayOne p-4 rounded-lg">BECOME A CLIENT</button></div>
    </div>

}

export default LookingToHire