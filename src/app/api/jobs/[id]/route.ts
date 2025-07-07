import Job from "@/models/Job";
import { NextRequest, NextResponse } from "next/server";




export const DELETE = async(req:NextRequest,{params}:{params:{id:string}})=>{

const id =  params.id

try {
    const deletedJob =await Job.findByIdAndDelete(id)
if (deletedJob) {
    return NextResponse.json({success:true,message:"successfully deleted the job",data:deletedJob})
}

else{
    return NextResponse.json({success:false,message:"error, this job doesn't exist in the database",data:deletedJob})

}

} catch (error) {
    return NextResponse.json({
        success:false,
        data:null,
        message:"an error occured"
    })
}


}