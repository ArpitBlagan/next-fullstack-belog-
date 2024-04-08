import { NextRequest, NextResponse } from "next/server";
import prisma from "@/db";
export const GET = async (req: NextRequest) => {
  const url = new URL(req.url);
  const searchParams = new URLSearchParams(url.search);
  const user_id = searchParams.get("user_id");
  //@ts-ignore
  let page = parseInt(searchParams.get("page") || 0);
  //@ts-ignore
  let limit = parseInt(searchParams.get("limit") || 10);
  try {
    console.log(page, limit);
    let skip = 0;
    if (page > 0) {
      skip = (page - 1) * limit;
    }
    console.log(url);
    let res;
    if (user_id) {
      res = await prisma.post.findMany({
        where: {
          user_id: user_id as string,
        },
        orderBy: {
          upvote: "desc",
        },
        take: limit,
        skip: skip,
        include: {
          comment: {
            select: {
              user: true,
              text: true,
            },
          },
        },
      });
    } else {
      res = await prisma.post.findMany({
        orderBy: {
          upvote: "desc",
        },
        take: limit,
        skip: skip,
        include: {
          comment: {
            select: {
              user: true,
              text: true,
            },
          },
        },
      });
    }
    console.log(res);
    return NextResponse.json({ status: 200, res, pageNo: page, limit });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ status: 500 });
  }
};
