import { getTopPost } from "@/actions/post";
import { Spinner } from "@nextui-org/react";
import BlogCard from "@/components/BlogCard";
export default async function page() {
  const res = await getTopPost(20);
  if (res.message == "error") {
    return (
      <div className="min-h-screen max-container mt-5">
        <h1 className="text-center">500 Internal Server Error</h1>
      </div>
    );
  }
  return (
    <div className="min-h-screen max-container mt-5">
      {res.data && res.data.length ? (
        <div className="grid md:grid-cols-3 gap-4">
          {res.data.map(
            (
              ele: {
                id: string;
                title: string;
                image: string;
                description: string;
              },
              index: number
            ) => {
              return (
                <div key={ele.title}>
                  <BlogCard title={ele.title} img={ele.image} id={ele.id} />
                </div>
              );
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
