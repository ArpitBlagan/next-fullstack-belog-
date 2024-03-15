"use server";
import { revalidatePath } from "next/cache";
import prisma from "@/db";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import sharp from "sharp";
import bcrypt from "bcryptjs";
const s3Client = new S3Client({
  region: process.env.NEXT_AWS_S3_REGION as string,
  credentials: {
    accessKeyId: process.env.NEXT_AWs_S3_ACCESS_KEY_ID as string,
    secretAccessKey: process.env.NEXT_AWS_S3_SECRET_KEY as string,
  },
});

async function uploadFileToS3(file: any, fileName: any) {
  const fileBuffer = await sharp(file)
    // .jpeg({quality: 50})
    .resize(800, 400)
    .toBuffer();
  //const fileBuffer = file;
  const params = {
    Bucket: process.env.NEXT_AWS_S3_BUCKET_NAME as string,
    Key: `${fileName}`,
    Body: fileBuffer,
    ContentType: ["image/jpg", "image/png", "image/svg"],
  };

  const command = new PutObjectCommand(params as any);
  try {
    const response = await s3Client.send(command);
    console.log("File uploaded successfully:", response);
    return response;
  } catch (error) {
    throw error;
  }
}

export async function uploadFile(formData: any) {
  try {
    console.log("Cool", formData);
    const file = formData.get("file");
    if (!file || file.size === 0) {
      return { status: "error", message: "Please select a file." };
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const data = await uploadFileToS3(buffer, file.name);
    const imageUrl = `https://${process.env.NEXT_AWS_S3_BUCKET_NAME}.s3.amazonaws.com/${file.name}`;
    console.log(data, imageUrl);
    const val = {
      title: formData.get("title"),
      description: formData.get("description"),
    };
    const res = await prisma.post.create({
      data: {
        ...val,
        image: imageUrl,
        upvote: 0,
        downvote: 0,
        user_id: "aa817ea9-f69a-4a04-a038-ef88e9a2e3e7",
      },
    });
    console.log(res);
    //revalidatePath("/");
    return { status: "success", message: "File has been upload." };
  } catch (error) {
    console.log(error);
    return { status: "error", message: "Failed to upload file." };
  }
}

export async function createUser(formData: any) {
  console.log(formData);
  const password = formData.password;
  const hash = await bcrypt.hash(password, 10);
  const data = {
    name: formData.firstName + formData.lastName,
    email: formData.email,
    password: hash,
  };
  try {
    const res = await prisma.user.create({
      data: {
        ...data,
      },
    });
    console.log(res);
    return { status: "success", message: "user created successfully" };
  } catch (err) {
    console.log(err);
    return { status: "error", message: "failed to register user" };
  }
}
