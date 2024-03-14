"use client";
import { useEffect, useState } from "react";
import { Spinner } from "@nextui-org/react";
import axios from "axios";
import BlogCard from "@/components/BlogCard";
export default async function () {
  const [data, setD] = useState([]);
  const getData = async () => {
    const res = await axios.get("api/post?limit=20");
    console.log("data", res.data);
    setD(res.data.res);
  };
  useEffect(() => {
    getData();
  }, []);
  console.log(data);
  return (
    <div className="min-h-screen max-container mt-5">
      {data && data.length ? (
        <div className="grid md:grid-cols-3 gap-4">
          {data.map(
            (
              ele: {
                id: string;
                title: string;
                image: string;
                description: string;
              },
              index: number
            ) => {
              return <BlogCard title={ele.title} img={ele.image} id={ele.id} />;
            }
          )}
        </div>
      ) : (
        <div className="flex h-screen justify-center items-center">
          <Spinner />
        </div>
      )}
    </div>
  );
}
