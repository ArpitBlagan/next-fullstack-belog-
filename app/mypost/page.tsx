import { Spinner } from "@nextui-org/react";
import BlogCard from "@/components/BlogCard";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { userPost } from "@/actions/post";
export default async function () {
  const session = await getServerSession(authOptions);
  if (!session) {
    return (
      <div className="min-h-screen max-container mt-5 flex justify-center items-center">
        <h1 className="text-center">404 Not Found</h1>
      </div>
    );
  }
  const res = await userPost(session.user.id);
  if (res.message == "error") {
    return (
      <div className="min-h-screen max-container mt-5 flex justify-center items-center">
        <h1 className="text-center">500 Internal server error</h1>
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
                <BlogCard
                  title={ele.title}
                  img={ele.image}
                  id={ele.id}
                  key={index}
                />
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
