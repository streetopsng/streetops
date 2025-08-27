import cloudinary from "@/lib/cloudinary";
import { NextResponse } from "next/server";

import { v4 as uuidv4 } from "uuid";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File;

    if (!file) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const result = await new Promise((resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream(
        {
          folder: "nextjs_uploads",
          public_id: uuidv4(), 
        },
        (error, result) => {
          if (error) reject(error);
          else resolve(result);
        }
      );
      stream.end(buffer);
    });

    return NextResponse.json({ success: true, result });
  } catch (err) {
    console.error("Upload error:", err);
    return NextResponse.json({ error: "Upload failed" }, { status: 500 });
  }
}
