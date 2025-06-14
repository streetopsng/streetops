import { NextRequest, NextResponse } from "next/server";


export const GET = async ()=>{
    console.log("this looks like its working fr");
    
    return NextResponse.json({success:true})
}