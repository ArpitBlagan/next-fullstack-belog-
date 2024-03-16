"use client";
import { Suspense, useEffect, useState } from "react";
import CreateComment from "./CreateComment";
import { useSession } from "next-auth/react";
import { Spinner } from "@nextui-org/react";
const Comment = ({ data, id }: { data: any; id: any }) => {
  const { data: session } = useSession();
  console.log("Cool", session?.user);
  const [comment, setC] = useState([]);
  useEffect(() => {
    setC(data);
  }, []);
  return (
    <div className="  flex flex-col  gap-2">
      {session && session.user && (
        <Suspense fallback={<Spinner />}>
          <CreateComment setD={setC} post_id={id} user_id={session.user.id} />
        </Suspense>
      )}
      <h1 className="text-xl font-semibold">Comments</h1>
      {comment.map((ele: any, index: any) => {
        return (
          <div
            className="p-2 w-full rounded-xl border boder-gray-300 "
            key={index}
          >
            <h1 className="font-semibold">
              {ele.user.name}{" "}
              <span className="text-sm font-thin">{ele.user.email}</span>
            </h1>
            <p className="pl-4">{ele.text}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Comment;
