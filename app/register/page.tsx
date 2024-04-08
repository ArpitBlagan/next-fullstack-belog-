import Register from "@/components/Regsiter";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
export default async function page() {
  const session = await getServerSession(authOptions);
  console.log(session);
  console.log("letsgoooo");
  if (session?.user) {
    redirect("/");
  }
  return <Register />;
}
