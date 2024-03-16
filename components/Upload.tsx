"use client";
import { uploadFile } from "@/actions";
import { Input, Textarea } from "@nextui-org/react";
import Buttonn from "./Buttonn";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
export default function Upload() {
  const router = useRouter();
  const { data: session } = useSession();
  if (!session || !session.user) {
    router.push("/login");
  }
  const [state, setS] = useState<{ message: string; status: string } | null>(
    null
  );
  const [imageUrl, setImageUrl] = useState("");
  const handleChange = async (e: any) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result as string;
        setImageUrl(result);
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <div className="flex flex-col max-md:gap-5 w-full gap-10  justify-center items-center my-3 max-md:px-5 px-12 min-h-screen">
      <form
        action={async (data) => {
          const val = await uploadFile(data, session?.user.id);
          console.log(val);
          if (val.status == "success") {
            router.push("/mypost");
          }
          setS(val);
        }}
        className="flex flex-col max-lg:w-full w-1/2 justify-center gap-5"
      >
        <Input label="Title" name="title" placeholder="What is Typescript" />
        <Input label="Image" name="file" type="file" onChange={handleChange} />
        <div className="flex flex-col justify-center items-center">
          <h1>Image Preview</h1>
          <Image src={imageUrl} alt="preview" width={100} height={100} />
        </div>
        <Textarea
          minRows={4}
          label="Description"
          name="description"
          placeholder="A wrapper on javascript to make it more type secure"
        />
        <div className="flex justify-center">
          {state && (
            <p
              className={`${
                state?.status == "error" ? "text-red-400" : "text-green-400"
              }`}
            >
              {state?.message}
            </p>
          )}
        </div>
        <Buttonn normal="Post" normalS="Posting..." />
      </form>
    </div>
  );
}
