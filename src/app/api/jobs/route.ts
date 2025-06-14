import { connectDatabase } from "@/database/databse-connect"
import Job from "@/models/Job";
import { NextResponse } from "next/server";

export const GET = async()=>{

    const dbCheck = await connectDatabase()
if (!dbCheck.success) {
    
    console.log("cant connect to db");
    throw new Error("Something went wrong")
}
console.log("yea from db");

try {
    const getAllJobs = await Job.find({})
    if (!getAllJobs) {
        return NextResponse.json({success:false,data:null})
    }

    return NextResponse.json({success:true,data:getAllJobs})
} catch (error) {
    
    console.log(error)
    return NextResponse.json({success:false,data:null})
    
}

}