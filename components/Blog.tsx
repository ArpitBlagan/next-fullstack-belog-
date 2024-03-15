import { getTopPost } from "@/actions/post";
import BlogCard from "./BlogCard";
export default async function Blog() {
  const res = await getTopPost(3);
  if (res.message == "error") {
    return (
      <div className="">
        <h1 className="text-center">500 Internal Server Error</h1>
      </div>
    );
  }
  console.log(res.data);
  return (
    <div
      className="border border-gray-200 p-4 rounded-md 
    grid md:grid-cols-3 gap-4"
    >
      {res.data &&
        res.data.map(
          (
            ele: { id: string; title: string; image: string },
            index: number
          ) => {
            return (
              <BlogCard
                id={ele.id}
                title={ele.title}
                img={ele.image}
                key={index}
              />
            );
          }
        )}
    </div>
  );
}
