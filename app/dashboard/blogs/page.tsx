import { BlogForm } from "@/components/BlogForm";
import { BlogList } from "@/components/BlogList";

export default function AdminBlogsPage() {
    return (
        <div className="container mx-auto py-8">
            <h1 className="text-2xl font-bold mb-4">Admin Blog Management</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <h2 className="text-xl font-semibold mb-4">
                        Create New Blog
                    </h2>
                    <BlogForm />
                </div>
                <div>
                    <h2 className="text-xl font-semibold mb-4">
                        Existing Blogs
                    </h2>
                    <BlogList />
                </div>
            </div>
        </div>
    );
}
