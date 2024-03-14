"use client";
import { Link, Button, Input } from "@nextui-org/react";
import { SubmitHandler, useForm } from "react-hook-form";
import { loginSchema, logindata } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { EnvelopeIcon, KeyIcon } from "@heroicons/react/20/solid";
import toast from "react-hot-toast";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
export default function SignIn() {
  const [pending, setP] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<logindata>({
    resolver: zodResolver(loginSchema),
  });
  const submit: SubmitHandler<logindata> = async (data) => {
    console.log(data);
    setP(true);
    const res = await signIn("credentials", {
      username: data.email,
      password: data.password,
      redirect: false,
    });
    console.log(res);
    if (!res?.error) {
      toast.success("successfully loggedIn");
      console.log("loggedIn");
      router.push("/");
    } else {
      setP(false);
      toast.error("Error Signing in");
    }
  };
  return (
    <div className="flex flex-col max-md:gap-5 gap-10  justify-center items-center my-3 max-md:px-5 px-12 min-h-screen">
      <h1>
        Don't have an account <Link href="/signin">SignUp</Link>
      </h1>
      <form
        onSubmit={handleSubmit(submit)}
        className="flex flex-col max-lg:w-full w-2/5 justify-center gap-5"
      >
        <Input
          label="Email"
          errorMessage={errors.email?.message}
          title="email"
          placeholder="arpit@gmail.com"
          {...register("email")}
          startContent={<EnvelopeIcon className="w-4" />}
        />
        <Input
          label="Password"
          type="password"
          title="password"
          errorMessage={errors.password?.message}
          placeholder="7D23sdf"
          {...register("password")}
          startContent={<KeyIcon className="w-4" />}
        />
        <div className="flex justify-center ">
          <Button
            color="primary"
            disabled={pending}
            type="submit"
            className="w-1/2"
          >
            {pending ? "LoggingIn..." : "LogIn"}
          </Button>
        </div>
      </form>
    </div>
  );
}
