import React from "react";
import { signOutAction } from "@/lib/actions";
import { IoMdExit } from "react-icons/io";

export default function SignOutButton() {
  return (
    <form action={signOutAction}>
      <button className="flex space-x-2 justify-center items-center">
        <IoMdExit className="text-2xl" />
        <p>Sign Out</p>
      </button>
    </form>
  );
}
