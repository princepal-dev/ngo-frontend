import React from "react";
import { auth } from "@/auth";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/HungerToHope.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FaHome, FaRegUserCircle } from "react-icons/fa";
import SignOutButton from "@/components/signOutButton";

export default async function BigNav() {
  const session = await auth();

  return (
    <nav className="hidden md:flex justify-center px-4 shadow-xl py-6">
      <div className="max-w-screen-2xl w-full">
        <div className="flex justify-between">
          <Link href="/">
            <Image src={logo} height={50} width={50} alt="logo" />
          </Link>

          <div className=" md:flex-row hidden md:flex h-96 md:h-16 flex-col items-center gap-10">
            <ul className="md:flex-row flex flex-col gap-10 md:mt-0 mt-6 text-md md:text-sm md:gap-12 text-zinc-800  font-medium items-center transition-all duration-500 ">
              <li>
                <Link className="hover:text-emerald-400 " href="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="hover:text-emerald-400 " href="/about-us">
                  About us
                </Link>
              </li>
              <li>
                <Link className="hover:text-emerald-400 " href="/our-works">
                  Our Works
                </Link>
              </li>
              <li>
                <Link className="hover:text-emerald-400 " href="/get-involved">
                  Get Involved
                </Link>
              </li>
              <li>
                <Link className="hover:text-emerald-400 " href="/contact-us">
                  Contact Us
                </Link>
              </li>
            </ul>

            {session ? (
              <div className="flex gap-6 items-center flex-row-reverse">
                <DropdownMenu modal={false}>
                  <DropdownMenuTrigger asChild>
                    {session.user.image ? (
                      <Image
                        src={session?.user?.image}
                        className="rounded-full border-2 border-zinc-900"
                        alt="user-img"
                        height={50}
                        width={50}
                      />
                    ) : (
                      <FaRegUserCircle className="text-2xl" />
                    )}
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    align="end"
                    className="dark:bg-[#16161a] font-normal border border-gray-200 rounded-lg shadow-lg mt-2 w-60 space-y-2 px-4 py-4 z-10"
                  >
                    <DropdownMenuLabel className="text-gray-800 dark:text-[#FFFCF2] font-bold px-4 py-2">
                      Hii,{" "}
                      {session.user.role === "ADMIN"
                        ? session.user.name + " (ADMIN)"
                        : session.user.name || "User"}
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator className="border-t border-[#CCC5B9] dark:border-gray-200" />

                    <DropdownMenuItem className="text-gray-800 dark:text-[#FFFCF2] hover:outline-none hover:bg-[#E0DACF]  dark:hover:bg-[#33312E] rounded-md px-4 py-2 flex items-center gap-2">
                      <Link
                        href="/dashboard"
                        className="flex items-center gap-2"
                      >
                        <FaHome className="text-2xl" /> Dashboard
                      </Link>
                    </DropdownMenuItem>
                    <div className=" bg-[#2D6A4F] text-[#FFFCF2] dark:text-[#FFFCF2] dark:bg-[#7f5af0] dark:hover:dark:bg-[#8a69ec] rounded-md  px-4 py-2 flex items-center gap-2">
                      <SignOutButton />
                    </div>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            ) : (
              <div className="flex  justify-center items-center space-x-4">
                <Link
                  href="/join-us"
                  className="bg-white border-2  border-emerald-400 px-10 py-2  rounded-full hover:bg-emerald-500   text-md hover:text-white text-emerald-500 transition-all font-semibold"
                >
                  Join Us
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
