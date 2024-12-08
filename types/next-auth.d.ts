import { type DefaultSession } from "next-auth";
import { Role } from "@prisma/client";

declare module "next-auth" {
  interface Session {
    user: {
      id?: number;
      role: Role;
      name?: string;
      email?: string;
      image?: string;
      isOAuth?: boolean;
      createdAt?: Date;
    } & DefaultSession["user"];
  }

  interface User {
    id?: number;
    role?: string;
    password?: string;
  }
}
