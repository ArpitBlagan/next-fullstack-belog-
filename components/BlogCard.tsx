import React from "react";
import { Card, CardFooter, Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
//import img from "@/images/image-2.png";
export default function BlogCard({
  id,
  title,
  img,
}: {
  id: string;
  title: string;
  img: string;
}) {
  return (
    <Card isFooterBlurred radius="lg" className="border-none ">
      <div className="flex justify-center">
        <Image
          alt="Woman listing to music"
          className="object-cover rounded-xl"
          height={300}
          src={img}
          width={300}
        />
      </div>
      <CardFooter
        className="justify-center flex-col before:bg-white/10 
      border-white/20 border-1 overflow-hidden py-1 before:rounded-xl 
      rounded-large bottom-1 shadow-small "
      >
        <p className="text-xl text-blue-400">{title}</p>
        <Link
          className="text-md text-red-400 bg-black/20 p-3 rouned-xl"
          href={`/post/${id}`}
        >
          Detail...
        </Link>
      </CardFooter>
    </Card>
  );
}
