"use client";
import { NextUIProvider } from "@nextui-org/react";
import { SessionProvider } from "next-auth/react";
import React from "react";

const Provider = ({
  children,
  session,
}: {
  children: React.ReactNode;
  session: any;
}) => {
  return (
    <NextUIProvider>
      <SessionProvider session={session}>{children}</SessionProvider>
    </NextUIProvider>
  );
};

export default Provider;
