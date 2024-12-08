import { DataTable } from "@/components/ui/data-table";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { columns } from "./columns";

async function getBlogs() {
  return [
    {
      id: "1",
      title: "Getting Started with Next.js",
      author: "John Doe",
      publishDate: "2023-05-15",
      status: "Published",
    },
    {
      id: "2",
      title: "Advanced React Patterns",
      author: "Jane Smith",
      publishDate: "2023-05-20",
      status: "Draft",
    },
  ];
}

export default async function BlogsPage() {
  const blogs = await getBlogs();

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold">Blogs</h1>
        <Button asChild>
          <Link href="/dashboard/blogs/add">Add New Blog</Link>
        </Button>
      </div>
      <DataTable columns={columns} data={blogs} />
    </div>
  );
}
