import NextAuth from "next-auth";
import { Role, PrismaClient } from "@prisma/client";
import authConfig from "@/auth.config";

const prisma = new PrismaClient();

const ADMIN_EMAILS = [
  "ujjawal8076@gmail.com",
  "rishabpal2000@gmail.com",
  "anjali8129@gmail.com",
  "arthbhardwaj1234@gmail.com",
  "bhardwaj.avni20396@gmail.com",
];

export const { auth, handlers, signIn, signOut } = NextAuth({
  pages: {
    signIn: "join-us",
  },
  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider !== "credentials") return true;

      const existingUser = await prisma.user.findUnique({
        where: {
          id: user.id,
        },
      });

      if (existingUser && ADMIN_EMAILS.includes(existingUser.email)) {
        await prisma.user.update({
          where: { email: existingUser.email },
          data: { role: Role.ADMIN as Role },
        });
      }

      return true;
    },
    async session({ session, token }) {
      const currentUser = await prisma.user.findUnique({
        where: { email: session.user.email as string },
      });
      if (session.user) {
        session.user.id = token.sub as string;
        session.user.name = token.name as string;
        session.user.role = token.role as Role;
        session.user.isOAuth = token.isOAuth as boolean;
      }
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        const email = user.email ?? "";

        const dbUser = await prisma.user.findUnique({
          where: { email },
        });

        if (dbUser) {
          token.role = dbUser.role;
        }

        if (ADMIN_EMAILS.includes(email)) {
          token.role = "ADMIN" as Role;
        }
      }
      return token;
    },
  },
  session: { strategy: "jwt" },
  ...authConfig,
});
