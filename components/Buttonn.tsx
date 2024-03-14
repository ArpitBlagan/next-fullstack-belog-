"use client";
import { useFormStatus } from "react-dom";
import { Button } from "@nextui-org/react";
const Buttonn = ({ normal, normalS }: any) => {
  const { pending } = useFormStatus();
  return (
    <div className="flex  justify-center">
      <Button
        type="submit"
        color="primary"
        className="w-1/2"
        disabled={pending}
      >
        {pending ? normalS : normal}
      </Button>
    </div>
  );
};

export default Buttonn;
