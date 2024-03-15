"use server";
import prisma from "@/db";
export const getTopPost = async (take: number) => {
  try {
    const res = await prisma.post.findMany({
      skip: 0,
      take: take,
      orderBy: {
        upvote: "desc",
      },
    });
    return { message: "success", data: res };
  } catch (err) {
    console.log(err);
    return { message: "error", data: [] };
  }
};

export const getPostId = async (id: string) => {
  try {
    const res = await prisma.post.findFirst({
      where: { id: id },
      include: {
        user: true,
        comment: {
          select: {
            text: true,
            user: true,
          },
        },
      },
    });
    return { status: 201, res };
  } catch (err) {
    console.log(err);
  }
  return { status: 500, message: "internal server error" };
};

export const addComment = async (data: any) => {
  try {
    const res = await prisma.comment.create({
      data: {
        post_id: data.post_id,
        text: data.text,
        user_id: data.user_id,
        upvote: 0,
        downvote: 0,
      },
      include: {
        user: true,
      },
    });
    console.log(res);
    return {
      status: 201,
      message: "created comment successfully",
      comment: res,
    };
  } catch (err) {
    console.log(err);
  }
  return { status: 500, message: "internal server error" };
};

export const userPost = async (id: any) => {
  try {
    const res = await prisma.post.findMany({ where: { user_id: id } });
    console.log(res);
    return { data: res, message: "success" };
  } catch (err) {
    console.log(err);
  }
  return { status: "error", message: "internal server error" };
};
