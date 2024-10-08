import { NextRequest, NextResponse } from "next/server";
import prisma from "@/db";
export const GET = async (req: NextRequest) => {
  const searchParams = req.nextUrl.searchParams;
  const user_id = searchParams.get("user_id");
  //@ts-ignore
  let page = parseInt(searchParams.get("page") || 0);
  let limit = 2;
  try {
    console.log(user_id, page, limit);
    let skip = 0;
    if (page > 0) {
      skip = page * limit;
    }
    let res;
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
    console.log("my post", res);
    return NextResponse.json({ status: 200, res, pageNo: page, limit });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ status: 500 });
  }
};
