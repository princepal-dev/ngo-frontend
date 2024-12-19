"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { createBlog } from "@/lib/actions";
import { X } from "lucide-react";
import { toast } from "@/hooks/use-toast";

export function BlogForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    imageUrls.forEach((url) => formData.append("imageUrls", url));

    const result = await createBlog(formData);
    const now = new Date().toLocaleString();

    if (result.success) {
      setTitle("");
      setContent("");
      setImageUrls([]);

      const form = event.currentTarget;
      if (form) {
        form.reset();
      }

      router.refresh();

      toast({
        title: "Blog added successfully",
        description: `Blog added at ${now}`,
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        name="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Blog Title"
        required
      />
      <Textarea
        name="content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Blog Content"
        required
      />
      {imageUrls.map((url, index) => (
        <div key={index} className="flex items-center space-x-2">
          <Input
            value={url}
            onChange={(e) => {
              const newUrls = [...imageUrls];
              newUrls[index] = e.target.value;
              setImageUrls(newUrls);
            }}
            placeholder="Image URL"
          />
          <Button
            type="button"
            variant="outline"
            size="icon"
            onClick={() => {
              const newUrls = imageUrls.filter((_, i) => i !== index);
              setImageUrls(newUrls);
            }}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      ))}

      <div className="flex space-x-4">
        <Button
          type="button"
          variant="outline"
          onClick={() => setImageUrls([...imageUrls, ""])}
        >
          Add Image URL
        </Button>
        <Button type="submit">Create Blog</Button>
      </div>
    </form>
  );
}
