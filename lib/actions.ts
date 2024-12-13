"use server";

import { signOut } from "@/auth";
import { revalidatePath } from "next/cache";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function signOutAction() {
    await signOut({ redirectTo: "/" });
}

export async function createBlog(formData: FormData) {
    const title = formData.get("title") as string;
    const content = formData.get("content") as string;
    const imageUrls = formData.getAll("imageUrls") as string[];

    try {
        await prisma.blog.create({
            data: {
                title,
                content,
                authorId: "ADMIN",
                images: {
                    create: imageUrls.map((url) => ({ url })),
                },
            },
        });
        revalidatePath("/admin/blogs");
        return { success: true, message: "Blog created successfully" };
    } catch (error) {
        console.error("Failed to create blog:", error);
        return { success: false, message: "Failed to create blog" };
    }
}

export async function deleteBlog(blogId: string) {
    try {
        await prisma.blog.delete({
            where: { id: blogId },
        });
        revalidatePath("/admin/blogs");
        return { success: true, message: "Blog deleted successfully" };
    } catch (error) {
        console.error("Failed to delete blog:", error);
        return { success: false, message: "Failed to delete blog" };
    }
}
