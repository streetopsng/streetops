// import { connectDatabase } from "@/database/databse-connect";
// import { Waitlist } from "@/models/Waitlist";
// import { NextRequest, NextResponse } from "next/server";

// export const POST = async(req:NextRequest)=>{

//     const formDetails = await req.json()
//         const dbCheck = await connectDatabase()
//     if (!dbCheck.success) {

//         console.log("cant connect to db");
//         return NextResponse.json({success:false,message:"an error occured, please try again "})
//         // throw new Error("Something went wrong")
//     }

//     try {
//         const postWaitlist = await Waitlist.create(formDetails)
//         if (!postWaitlist) {
//             console.log("something went wrong cant post blog");
//             return NextResponse.json({success:false,message:"unable to process request, please try again later"})
//         }
//         return NextResponse.json({success:true,info:postWaitlist,message:"your email has been successfully added to the waitlist "})
//     } catch (error) {
//         console.log("something went wrong");

//         return NextResponse.json({success:false,message:"something went wrong, while trying to process your request"})
//     }
// }

import { NextResponse } from "next/server";

import { connectDatabase } from "@/database/databse-connect";
import { EarlyAccessWaitlist } from "@/models/Waitlist";

export async function POST(req: Request) {
  const body = await req.json();
  const { name, companyName, role, email } = body;

  if (!name || !role || !email) {
    return NextResponse.json(
      { message: "Missing required fields" },
      { status: 400 },
    );
  }

  const dbCheck = await connectDatabase();
  if (!dbCheck.success) {
    console.log("cant connect to db");
    throw new Error("Something went wrong");
  }
  try {
    // Check if email already exists
    const existing = await EarlyAccessWaitlist.findOne({ email });

    if (existing) {
      return NextResponse.json(
        { message: "You are already on the waitlist." },
        { status: 409 },
      );
    }

    await EarlyAccessWaitlist.create({
      name,
      companyName,
      role,
      email,
    });

    return NextResponse.json(
      { message: "Successfully joined waitlist 🎉" },
      { status: 201 },
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
