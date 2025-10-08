import { connectDatabase } from "@/database/databse-connect";
import { Waitlist } from "@/models/Waitlist";
import { NextRequest, NextResponse } from "next/server";



export const POST = async(req:NextRequest,res:NextResponse)=>{


    const formDetails = await req.json()
        const dbCheck = await connectDatabase()
    if (!dbCheck.success) {
        
        console.log("cant connect to db");
        return NextResponse.json({success:true,message:"an error occured, please try again "})
        // throw new Error("Something went wrong") 
    }

    try {
        const postWaitlist = await Waitlist.create(formDetails)
        if (!postWaitlist) {
            console.log("something went wrong cant post blog");
            return NextResponse.json({success:false,message:"unable to process request, please try again later"})
        }
        return NextResponse.json({success:true,info:postWaitlist,message:"your email has been added to the wailist successfully"})
    } catch (error) {
        console.log("something went wrong");
        
        return NextResponse.json({success:false,message:"something went wrong, while trying to process your request"})
    }
}