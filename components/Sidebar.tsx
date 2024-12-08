"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Settings } from "lucide-react";
import { FaBloggerB } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { SiGoogleforms } from "react-icons/si";
import { IoIosContacts, IoMdExit } from "react-icons/io";
import Image from "next/image";
import logo from "@/public/HungerToHope.png";
import React from "react";
import SignOutButton from "@/components/signOutButton";

const Sidebar = () => {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path ? "bg-gray-200" : "";
  };

  return (
    <aside className="w-64 flex flex-col justify-between bg-white shadow-md">
      <nav className="flex flex-col space-y-10 p-4">
        <div className="flex items-center justify-center">
          <Link href="/">
            <Image src={logo} height={100} width={100} alt="logo" />
          </Link>
        </div>

        <ul className="space-y-2">
          <li>
            <Link
              href="/dashboard/"
              className={`flex items-center p-2 rounded-lg ${isActive("/dashboard")}`}
            >
              <Home className="mr-2" />
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/blogs"
              className={`flex items-center p-2 rounded-lg ${isActive("/dashboard/blogs")}`}
            >
              <FaBloggerB className="mr-2" />
              Blogs
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/users"
              className={`flex items-center p-2 rounded-lg ${isActive("/dashboard/users")}`}
            >
              <FaUser className="mr-2" />
              Users
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/volunteer-forms"
              className={`flex items-center p-2 rounded-lg ${isActive("/dashboard/volunteer-forms")}`}
            >
              <SiGoogleforms className="mr-2" />
              Volunteer Forms
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/contact-forms"
              className={`flex items-center p-2 rounded-lg ${isActive("/dashboard/contact-forms")}`}
            >
              <IoIosContacts className="mr-2" />
              Contact Forms
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/settings"
              className={`flex items-center p-2 rounded-lg ${isActive("/dashboard/settings")}`}
            >
              <Settings className="mr-2" />
              Settings
            </Link>
          </li>
        </ul>
      </nav>

      <div className="rounded-md py-2 flex items-center justify-center gap-2 mb-8">
        <IoMdExit className="text-2xl" />
        <SignOutButton />
      </div>
    </aside>
  );
};

export default Sidebar;
