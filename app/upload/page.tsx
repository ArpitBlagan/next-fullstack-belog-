import Upload from "@/components/Upload";

export default function page() {
  return (
    <div
      className="flex flex-col max-md:gap-5 gap-10  
    justify-center items-center my-3 max-md:px-5 px-12 min-h-screen w-full"
    >
      <Upload />
    </div>
  );
}
