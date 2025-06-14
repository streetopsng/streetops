import { connectDatabase } from "@/database/databse-connect";
import Application from "@/models/ApplicationsModel";
import { NextResponse } from "next/server";


export const POST = async(req:Request,res:Response)=>{
const details =await req.json()
const dbCheck = await connectDatabase()
if (!dbCheck.success) {
    
    console.log("cant connect to db");
    throw new Error("Something went wrong")
}

try {
    const postDetails =await Application.create(details)
    if (!postDetails) {
        console.log("something went wrong cant submit application");
        return NextResponse.json({success:false})
    }
    
    return NextResponse.json({success:true,info:postDetails})
} catch (error) {
    console.log("something wrong");
    
 return NextResponse.json({success:false})   
}

// // console.log(details);

// return NextResponse.json(details)


}