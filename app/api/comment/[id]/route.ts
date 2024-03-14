import prisma from "@/db";
import { NextRequest, NextResponse } from "next/server";

export const DELETE = async (req: NextRequest) => {
  const url = new URL(req.url);
  const id = url.pathname.split("/").pop();
  console.log(id);
  try {
    const res = await prisma.comment.delete({ where: { id: id as string } });
    console.log(res);
    return NextResponse.json({
      status: 201,
      message: "comment deleted successfully",
    });
  } catch (err) {
    console.log(err);
    return NextResponse.json({
      status: 500,
      message: "server error please try again later",
    });
  }
};
