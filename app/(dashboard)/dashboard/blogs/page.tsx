import { DataTable } from "@/components/ui/data-table";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { columns } from "./columns";
import { getBlogs } from "@/utils/helper";

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
      {blogs.length > 0 ? (
        <DataTable columns={columns} data={blogs} />
      ) : (
        <div>
          <h3 className="text-2xl font font-normal">
            Time to write some fresh blogs !
          </h3>
        </div>
      )}
    </div>
  );
}
