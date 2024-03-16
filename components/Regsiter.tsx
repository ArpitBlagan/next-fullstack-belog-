"use client";
import { useState, useEffect } from "react";
import { Link, Button, Input } from "@nextui-org/react";
import { SubmitHandler, useForm } from "react-hook-form";
import { passwordStrength } from "check-password-strength";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerdata, registerSchema } from "@/schemas";
import PasswordStrength from "@/components/PasswordStrength";
import { createUser } from "@/actions";
import { useRouter } from "next/navigation";
import {
  UserIcon,
  PhoneIcon,
  KeyIcon,
  EnvelopeIcon,
} from "@heroicons/react/20/solid";
import { Router } from "express";
const Register = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    watch,
  } = useForm<registerdata>({
    resolver: zodResolver(registerSchema),
  });
  const [state, setS] = useState<{ message: string; status: string } | null>(
    null
  );
  const [passStrength, setPassStrength] = useState(0);
  const [pending, setP] = useState(false);
  useEffect(() => {
    setPassStrength(passwordStrength(watch().password).id);
  }, [watch().password]);
  const submit: SubmitHandler<registerdata> = async (data) => {
    //console.log(data);
    setP(true);
    const res = await createUser(data);
    setS(res);
    setP(false);
    if (res.status == "success") {
      router.push("/login");
    }
  };
  return (
    <div className="flex flex-col max-md:gap-5 gap-10  justify-center items-center my-3 max-md:px-5 px-12 min-h-screen">
      <h1>
        Already have an account <Link href="/login">SignIn</Link>
      </h1>
      <form
        onSubmit={handleSubmit(submit)}
        className="flex flex-col max-lg:w-full w-2/5 justify-center gap-5"
      >
        <div className="flex gap-2">
          <Input
            label="First Name"
            errorMessage={errors.firstName?.message}
            placeholder="Arpit"
            type="text"
            {...register("firstName")}
            startContent={<UserIcon className="w-4" />}
          />
          <Input
            label="Last Name"
            errorMessage={errors.lastName?.message}
            placeholder="Blagan"
            type="text"
            {...register("lastName")}
            startContent={<UserIcon className="w-4" />}
          />
        </div>
        <Input
          label="Email"
          errorMessage={errors.email?.message}
          placeholder="arpit@gmail.com"
          {...register("email")}
          startContent={<EnvelopeIcon className="w-4" />}
        />
        <Input
          label="Mobile Number"
          errorMessage={errors.phoneNumber?.message}
          placeholder="7231294923"
          {...register("phoneNumber")}
          startContent={<PhoneIcon className="w-4" />}
        />
        <div className="flex gap-2">
          <Input
            label="Password"
            type="password"
            errorMessage={errors.password?.message}
            placeholder="7D23sdf"
            {...register("password")}
            startContent={<KeyIcon className="w-4" />}
          />
          <Input
            label="Confirm Password"
            errorMessage={errors.confirmPassword?.message}
            placeholder="7D23sdf"
            type="password"
            {...register("confirmPassword")}
            startContent={<KeyIcon className="w-4" />}
          />
        </div>
        <PasswordStrength passStrength={passStrength} />
        <div className="flex justify-center">
          {state && (
            <p
              className={`${
                state?.status == "error" ? "text-red-400" : "text-green-400"
              }`}
            >
              {state?.message}
            </p>
          )}
        </div>
        <div className="flex  justify-center">
          <Button
            type="submit"
            color="primary"
            className="w-1/2"
            disabled={pending}
          >
            {pending ? "Registering..." : "Register"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Register;
