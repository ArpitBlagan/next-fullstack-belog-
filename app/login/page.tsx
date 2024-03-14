import SignIn from "@/components/SignIn";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
export default async function page() {
  const session = await getServerSession(authOptions);
  console.log(session);
  if (session?.user) {
    redirect("/");
  }
  return <SignIn />;
}
