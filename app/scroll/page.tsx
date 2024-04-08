"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import Image from "next/image";
import { Spinner } from "@nextui-org/react";
export default function page() {
  const { data: session } = useSession();
  if (!session) {
    redirect("/");
  }
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const fetchData = async () => {
    if (!hasMore || loading) {
      return;
    }
    setLoading(true);
    // Example URL structure for fetching data
    const response = await axios.get(
      `/api/mypost?user_id=${session?.user.id}&page=${page}`
    );
    console.log(response.data);
    //@ts-ignore
    setItems((prevItems) => [...prevItems, ...response.data.res]);
    setLoading(false);
    setPage((prevPage) => prevPage + 1);
    // Example condition to check if there's more data to load
    if (response.data.res.length === 0) {
      setHasMore(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    // Add event listener for scrolling
    const handleScroll = () => {
      console.log("scrolling working");
      console.log(loading);
      if (
        window.innerHeight + document.documentElement.scrollTop >=
          document.documentElement.offsetHeight - 1000 &&
        !loading
      ) {
        // Scroll reached bottom, load more data
        fetchData();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading]);
  return (
    <div className="min-h-screen grid grid-cols-3 gap-5 mx-3">
      {items &&
        items.map((ele: any, index) => {
          return (
            <div key={index}>
              <Image src={ele?.image} alt="image" width={300} height={300} />
              <h1>{ele.title}</h1>
            </div>
          );
        })}
      <div className="col-span-3 flex justify-center items-center">
        {loading ? <Spinner /> : ""}
        {!hasMore ? <h1>That's it..</h1> : ""}
      </div>
    </div>
  );
}
