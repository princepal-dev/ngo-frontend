import bcrypt from "bcryptjs";
import { LoginSchema } from "@/schemas";
import { PrismaClient } from "@prisma/client";
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { NextAuthConfig } from "next-auth";

const prisma = new PrismaClient();

export default {
    providers: [
        Google({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
        Credentials({
            async authorize(credentials) {
                const validatedFields = LoginSchema.safeParse(credentials);

                if (validatedFields.success) {
                    const { email, password } = validatedFields.data;

                    const user = await prisma.user.findUnique({
                        where: { email },
                    });

                    if (!user || !user.password) return null;

                    const passwordsMatch = await bcrypt.compare(
                        password,
                        user.password
                    );

                    if (passwordsMatch)
                        return {
                            id: user.id,
                            name: user.name ?? null,
                            email: user.email,
                            image: user.image ?? null,
                            role: user.role,
                        };
                }

                return null;
            },
        }),
    ],
} satisfies NextAuthConfig;
