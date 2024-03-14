"use client";
import { addComment } from "@/actions/post";
import { Button, Input } from "@nextui-org/react";
import { Dispatch, useRef } from "react";
import { SetStateAction } from "react";
import { useState } from "react";
import toast from "react-hot-toast";
export default async function CreateComment({
  setD,
  post_id,
  user_id,
}: {
  setD: Dispatch<SetStateAction<never[]>>;
  post_id: any;
  user_id: any;
}) {
  const textRef = useRef(null);
  const [pending, setP] = useState(false);
  const handleClick = async (event: any) => {
    event.preventDefault();
    if (!textRef.current) {
      return;
    }
    setP(true);
    ("user server");
    const res = await addComment({
      user_id: user_id,
      post_id: post_id,
      //@ts-ignore
      text: textRef.current?.value,
    });
    if (res.status == 500) {
      toast.error("something went wrong please try again later");
    } else {
      //@ts-ignore
      setD((prev) => {
        return [
          {
            text: res.comment?.text,
            user: {
              emal: res.comment?.user.email,
              name: res.comment?.user.name,
            },
          },
          ...prev,
        ];
      });
      toast.success("comment posted");
    }
    setP(false);
  };
  return (
    <div className="flex gap-4">
      <Input
        id="cooll"
        ref={textRef}
        label="add comment"
        title="comment"
        type="text"
        className="flex-1"
        placeholder="nice work keep it up..."
      />
      <Button onClick={handleClick} color="primary" disabled={pending}>
        {pending ? "Posting..." : "Comment"}
      </Button>
    </div>
  );
}
