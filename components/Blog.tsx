import { getTopPost } from "@/actions/post";
import BlogCard from "./BlogCard";
export default async function Blog() {
  const data = await getTopPost(3);
  console.log(data);
  return (
    <div
      className="border border-gray-200 p-4 rounded-md 
    grid md:grid-cols-3 gap-4"
    >
      {data &&
        data.map(
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
