"use client";
import {
  Navbar as Nav,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from "@nextui-org/react";
import React, { useState } from "react";
import Image from "next/image";
import img from "@/images/4-small.png";
import { signOut, useSession } from "next-auth/react";
const Navbar = () => {
  const { data: session } = useSession();
  console.log(session);
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    ("use server");
    await signOut();
  };
  return (
    <Nav
      onMenuOpenChange={setIsOpen}
      isBordered
      className="text-4xl max-md:text-xl z-10 max-width"
    >
      <NavbarBrand>
        <Image src={img} alt="logo" width={50} height={30} />
      </NavbarBrand>
      <NavbarContent className="">
        <NavbarItem>
          <Link href="/">Piro</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/post">Posts</Link>
        </NavbarItem>
      </NavbarContent>
      {session && session.user && (
        <NavbarContent className="">
          <NavbarItem>
            <Link href="/upload">Add Post/Query</Link>
          </NavbarItem>
        </NavbarContent>
      )}
      {session && session.user ? (
        <NavbarContent className="max-md:hidden">
          <NavbarItem>
            <Link href="/mypost">My Post</Link>
          </NavbarItem>
          <NavbarItem>
            <button
              onClick={handleClick}
              className="bg-white text-black py-2 px-3 rounded-e-3xl"
            >
              LogOut
            </button>
          </NavbarItem>
        </NavbarContent>
      ) : (
        <NavbarContent className="max-md:hidden">
          <NavbarItem>
            <Link href="/login">SigIn</Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="/register">SigUp</Link>
          </NavbarItem>
        </NavbarContent>
      )}
      <NavbarMenuToggle
        aria-label={isOpen ? "Close menu" : "Open menu"}
        className="md:hidden"
      />
      {session && session.user ? (
        <NavbarMenu>
          <NavbarMenuItem>
            <Link href="/mypost">My Post</Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <button
              onClick={handleClick}
              className="bg-white text-black py-2 px-3 rounded-e-3xl"
            >
              LogOut
            </button>
          </NavbarMenuItem>
        </NavbarMenu>
      ) : (
        <NavbarMenu>
          <NavbarMenuItem>
            <Link href="/login">SigIn</Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link href="/register">SigUp</Link>
          </NavbarMenuItem>
        </NavbarMenu>
      )}
    </Nav>
  );
};

export default Navbar;
