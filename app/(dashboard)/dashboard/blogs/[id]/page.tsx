import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ReactMarkdown from "react-markdown";

async function getBlog(id: string) {
  // Fetch blog data from your API here
  return {
    id,
    title: "Sample Blog Post",
    content: `
# Sample Blog Post

This is a sample blog post with Markdown support.

## Features

- Markdown rendering
- Image support

![Sample Image](/placeholder.svg?height=200&width=400)

### Code Block

\`\`\`javascript
console.log('Hello, World!');
\`\`\`

Enjoy writing your blog posts!
    `,
    author: "John Doe",
    publishDate: "2023-05-15",
    status: "Published",
  };
}

export default async function BlogPage({ params }: { params: { id: string } }) {
  const blog = await getBlog(params.id);

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">{blog.title}</h1>
      <Card>
        <CardHeader>
          <CardTitle>
            <div className="flex justify-between items-center">
              <span>{blog.author}</span>
              <span>{blog.publishDate}</span>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ReactMarkdown>{blog.content}</ReactMarkdown>
        </CardContent>
      </Card>
    </div>
  );
}
