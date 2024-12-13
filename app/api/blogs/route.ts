import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
    try {
        // Parse the JSON body
        const body = await req.json();
        console.log("Request Body:", body); // Log the parsed body for debugging

        // Extract data from the body
        const { title, content, images } = body;

        // Validate body presence
        if (!body) {
            return NextResponse.json(
                { error: "Payload is required." },
                { status: 400 }
            );
        }

        // Validate required fields
        if (!title?.trim() || !content?.trim()) {
            return NextResponse.json(
                { error: "Title and Content are required." },
                { status: 400 }
            );
        }

        // Validate images array
        if (!Array.isArray(images) || images.length === 0) {
            return NextResponse.json(
                { error: "At least one image is required." },
                { status: 400 }
            );
        }

        // Prepare image data for Prisma
        const imageData = images.map((file: { name: string }) => ({
            url: file.name, // Replace this with actual image URLs
        }));

        // Create a new blog with Prisma
        const newBlog = await prisma.blog.create({
            data: {
                title,
                content,
                authorId: "ADMIN", // Replace with dynamic user ID as needed
                images: {
                    create: imageData,
                },
            },
        });

        // Respond with success
        return NextResponse.json(
            { message: "Blog created successfully.", blog: newBlog },
            { status: 201 }
        );
    } catch (error) {
        console.error("Error in POST /api/blogs:", error); // Log the error for debugging
        return NextResponse.json(
            { error: "Internal server error." },
            { status: 500 }
        );
    }
}
