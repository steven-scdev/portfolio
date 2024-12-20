import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { Writing } from "@/models/Writing";

export async function POST(req: Request) {
  try {
    await connectDB();
    const body = await req.json();

    const writing = await Writing.create({
      title: body.title,
      description: body.description,
      content: body.content,
      topics: body.topics,
    });

    return NextResponse.json(writing);
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Error creating writing" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await connectDB();
    const writings = await Writing.find().sort({ date: -1 });
    return NextResponse.json(writings);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Error fetching writings" },
      { status: 500 }
    );
  }
}
