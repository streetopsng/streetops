import { NextResponse } from "next/server"
import Job from "@/models/Job"
import { connectDatabase } from "@/database/databse-connect"


export const POST = async(req:Request,res:Response)=>{
const details = await req.json()
const dbCheck = await connectDatabase()
if (!dbCheck.success) {
    
    console.log("cant connect to db");
    throw new Error("Something went wrong")
}


try {
    const postJobs = await Job.create(details)
    if (!postJobs) {
        console.log("something went wrong cant post job");
        return NextResponse.json({success:false})
    }
    return NextResponse.json({success:true,info:postJobs})
} catch (error) {
    console.log("something went wrong");
    
    return NextResponse.json({success:false})
}

// return NextResponse.json({success:true,info:details})

// // try {
    

// // } catch (error) {
    
// // }

}