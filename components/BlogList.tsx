import { deleteBlog } from "@/lib/actions";
import { Button } from "@/components/ui/button";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function BlogList() {
    const blogs = await prisma.blog.findMany({
        include: { images: true },
        orderBy: { createdAt: "desc" },
    });

    return (
        <div className="space-y-4">
            {blogs.length > 0 ? (
                blogs.map((blog) => (
                    <div key={blog.id} className="border p-4 rounded-md">
                        <h3 className="text-lg font-semibold">{blog.title}</h3>
                        <p className="text-sm text-gray-500">
                            Created at: {blog.createdAt.toLocaleString()}
                        </p>
                        <p className="mt-2">
                            {blog.content.substring(0, 100)}...
                        </p>
                        <div className="mt-2 space-x-2">
                            {blog.images.map((image) => (
                                <img
                                    key={image.id}
                                    src={image.url}
                                    alt="Blog image"
                                    className="inline-block h-20 w-20 object-cover rounded"
                                />
                            ))}
                        </div>
                        {/* @ts-ignore */}
                        <form action={deleteBlog.bind(null, blog.id)}>
                            <Button
                                type="submit"
                                variant="destructive"
                                className="mt-2"
                            >
                                Delete
                            </Button>
                        </form>
                    </div>
                ))
            ) : (
                <div>Time to create some fresh blogs...</div>
            )}
        </div>
    );
}
