import prisma from "@/db";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  const body = await req.json();
  try {
    const res = await prisma.comment.create({
      data: {
        ...body,
        upvote: 0,
        downvote: 0,
      },
    });
    console.log(res);
    return NextResponse.json({ status: 200, message: "comment posted" });
  } catch (err) {
    console.log(err);
    return NextResponse.json({
      status: 500,
      message: "sever error please try again later",
    });
  }
};
