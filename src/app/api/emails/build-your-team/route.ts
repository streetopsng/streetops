import BuildYourTeam from "@/emails/build-your-team";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const {
      fullName,
      email,
      companyName,
      phone,
      package: selectedPackage,
      description,
    } = body;

    if (
      !fullName ||
      !email ||
      !companyName ||
      !phone ||
      !selectedPackage ||
      !description
    ) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "streetopsng@gmail.com",
      subject: "New Build Your Team Request",
      react: BuildYourTeam({
        fullName,
        email,
        companyName,
        phone,
        package: selectedPackage,
        description,
      }),
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, data });
  } catch (err) {
    console.error("Server error:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
