import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ReactMarkdown from "react-markdown";
import {getBlog} from "@/utils/helper";

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
