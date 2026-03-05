import { connectDatabase } from "@/database/databse-connect";
import Blog from "@/models/BlogModel";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const dbCheck = await connectDatabase();
  if (!dbCheck.success) {
    console.log("cant connect to db");
    return NextResponse.json({
      success: false,
      message: "an error occured, please try again ",
    });
    // throw new Error("Something went wrong")
  }
  try {
    const blog = await Blog.findById(id);
    if (!blog)
      return NextResponse.json({
        success: false,
        message: "blog post can't be found",
      });

    return NextResponse.json({
      success: true,
      data: blog,
      message: "blog fetched successfully",
    });
  } catch (err) {
    return NextResponse.json({
      message: "something went wrong while trying to fetch blog content",
      success: false,
      data: null,
    });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  console.log(id, "server");

  const dbCheck = await connectDatabase();

  if (!dbCheck.success) {
    console.log("cant connect to db");
    return NextResponse.json({
      success: false,
      message: "Database connection failed",
    });
  }

  try {
    const result = await Blog.deleteOne({ _id: id });

    if (result.deletedCount === 0) {
      return NextResponse.json({
        success: false,
        message: "Blog post not found",
      });
    }

    return NextResponse.json({
      success: true,
      message: "Blog deleted successfully",
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "Something went wrong while deleting the blog",
    });
  }
}
