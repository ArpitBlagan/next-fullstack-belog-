import { getPostId } from "@/actions/post";
import Comment from "./Comment";
import React from "react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import { Suspense } from "react";
const PostDetail = async ({ id }: { id: string }) => {
  const get = await getPostId(id);
  if (get.status == 500) {
    return <div>Internal server error!</div>;
  }
  return (
    <div className="flex flex-col gap-5 w-full">
      <Card className="py-4 flex flex-col justify-center items-center w-full">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
          <Image
            alt="Card background"
            className="rounded-xl"
            src={get.res?.image as string}
            width={400}
            height={400}
          />
        </CardHeader>
        <CardBody className="py-2 w-8/12">
          <h3 className=" font-semibold max-md:text-lg text-[50px] text-center">
            {get.res?.title}
          </h3>
          <p className="text-start text-gray-500 text-[30px]">
            {get.res?.description}
          </p>
        </CardBody>
        <div className="flex ">
          <p className="text-bold font-thin">By: {get.res?.user.name}</p>
        </div>
      </Card>
      <div className="">
        <Suspense fallback="">
          <Comment data={get.res?.comment} id={id} />
        </Suspense>
        <h1 className="my-2 text-center font-semibold text-lg">that's it...</h1>
      </div>
    </div>
  );
};

export default PostDetail;
