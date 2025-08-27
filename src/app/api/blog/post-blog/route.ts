import { connectDatabase } from "@/database/databse-connect";
import Blog from "@/models/BlogModel";
import { NextRequest, NextResponse } from "next/server";


export const POST = async(req:NextRequest)=>{

    const formDetails = await req.json()
    console.log(formDetails);
    const dbCheck = await connectDatabase()
if (!dbCheck.success) {
    
    console.log("cant connect to db");
    throw new Error("Something went wrong") 
}
try {
    const postBlog = await Blog.create(formDetails)
    if (!postBlog) {
        console.log("something went wrong cant post blog");
        return NextResponse.json({success:false})
    }
    return NextResponse.json({success:true,info:postBlog})
} catch (error) {
    console.log("something went wrong");
    
    return NextResponse.json({success:false})
}



    // return NextResponse.json({...formDetails})
    


}