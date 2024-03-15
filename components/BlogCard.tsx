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
    <Card
      isFooterBlurred
      radius="lg"
      className="border-none flex flex-col gap-4"
    >
      <div className="flex justify-center p-3">
        <Image
          alt="Woman listing to music"
          className="object-cover rounded-xl"
          height={300}
          src={img}
          width={300}
        />
      </div>
      <CardFooter
        className="justify-center flex-col items-center before:bg-white/10 gap-2
      border-white/20 border-1 overflow-hidden py-1 before:rounded-xl 
      rounded-large bottom-1 shadow-small "
      >
        <p className="text">{title}</p>
        <Link
          className=" bg-black hover:bg-black/20 py-1 px-3 rounded-3xl"
          href={`/post/${id}`}
        >
          Detail...
        </Link>
      </CardFooter>
    </Card>
  );
}
