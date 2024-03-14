import prisma from "@/db";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  const url = new URL(req.url);
  const id = url.pathname.split("/").pop();
  try {
    const res = await prisma.post.findFirst({ where: { id: id as string } });
    console.log(res);
    return NextResponse.json({ status: 201, res });
  } catch (err) {
    return NextResponse.json({
      status: 500,
      message: "server error please try again later",
    });
  }
};

export const PATCH = async (req: NextRequest) => {
  const body = await req.json();
  const url = new URL(req.url);
  const id = url.pathname.split("/").pop();
  try {
    const res = await prisma.post.update({
      where: {
        id: id,
      },
      data: {
        ...body,
      },
    });
    console.log(res);
    return NextResponse.json({
      message: "post updated successfully",
      status: 201,
    });
  } catch (err) {
    console.log(err);
    return NextResponse.json({
      message: "server error please try again later",
      status: 500,
    });
  }
};

export const DELETE = async (req: NextRequest) => {
  const url = new URL(req.url);
  const id = url.pathname.split("/").pop();
  try {
    const res = await prisma.post.delete({ where: { id: id as string } });
    return NextResponse.json({
      status: 201,
      message: "post deleted successfully",
    });
  } catch (err) {
    console.log(err);
    return NextResponse.json({
      status: 500,
      message: "server error please try again later",
    });
  }
};
