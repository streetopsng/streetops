import { connectDatabase } from "@/database/databse-connect";
import Blog from "@/models/BlogModel";
import { NextRequest, NextResponse } from "next/server";


export const GET = async()=>{
    const dbCheck = await connectDatabase()
if (!dbCheck.success) {
    
    console.log("cant connect to db");
    throw new Error("Something went wrong")

}

try {
    const getAllBlogs = await Blog.find({})
    if (!getAllBlogs) {
        return NextResponse.json({message:"there was a problem",success:false,data:null})
    }

    return NextResponse.json({success:true,data:getAllBlogs})
} catch (error) {
    
    console.log(error)
    return NextResponse.json({message:"something went wrong",success:false,data:null})
    
}

}