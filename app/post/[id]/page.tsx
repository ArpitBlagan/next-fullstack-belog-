import PostDetail from "@/components/PostDetail";

export default async function page({ params }: { params: any }) {
  return (
    <div className="max-container min-h-screen flex flex-col gap-4 m-3">
      <PostDetail id={params.id} />
    </div>
  );
}
