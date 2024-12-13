"use client";

import React, { useState, useCallback, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import ReactMarkdown from "react-markdown";
import { Upload, X } from "lucide-react";
import { useDropzone } from "react-dropzone";
import axios from "axios";

export default function AddBlogPage() {
    const router = useRouter();
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [previewMode, setPreviewMode] = useState(false);
    const [images, setImages] = useState<{ file: File; preview: string }[]>([]);

    useEffect(() => {
        return () => {
            images.forEach((image) => URL.revokeObjectURL(image.preview));
        };
    }, [images]);

    const onDrop = useCallback((acceptedFiles: File[]) => {
        const validImages = acceptedFiles.filter((file) =>
            file.type.startsWith("image/")
        );

        setImages((prevImages) => [
            ...prevImages,
            ...validImages.map((file) => ({
                file,
                preview: URL.createObjectURL(file),
            })),
        ]);
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: { "image/*": [] },
        maxSize: 800 * 1024,
    });

    const removeImage = (index: number) => {
        setImages((prevImages) => {
            const imageToRemove = prevImages[index];
            URL.revokeObjectURL(imageToRemove.preview);
            return prevImages.filter((_, i) => i !== index);
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const files = images.map((image) => image.file);

        if (!title.trim() || !content.trim()) {
            alert("Title and Content are required.");
            return;
        }

        const imageData = files.map((file) => ({
            url: file.name,
        }));

        try {
            const response = await axios.post(
                "http://localhost:3000/api/blogs",
                {
                    title,
                    content,
                    images: imageData,
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
            console.log("Response:", response.data);
        } catch (error: any) {
            console.error("Error:", error.response?.data || error.message);
        }
    };

    return (
        <div className="space-y-8">
            <h1 className="text-3xl font-bold">Add New Blog Post</h1>
            <Card>
                <form onSubmit={handleSubmit}>
                    <CardHeader>
                        <CardTitle>Blog Post Details</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="title">Title</Label>
                            <Input
                                id="title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                placeholder="Enter the blog title"
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="content">Content</Label>
                            <div className="flex space-x-2 mb-2">
                                <Button
                                    type="button"
                                    onClick={() => setPreviewMode(false)}
                                    variant={
                                        previewMode ? "outline" : "default"
                                    }
                                >
                                    Edit
                                </Button>
                                <Button
                                    type="button"
                                    onClick={() => setPreviewMode(true)}
                                    variant={
                                        previewMode ? "default" : "outline"
                                    }
                                >
                                    Preview
                                </Button>
                            </div>
                            {previewMode ? (
                                <div className="border rounded-md p-4 min-h-[200px]">
                                    <ReactMarkdown>{content}</ReactMarkdown>
                                </div>
                            ) : (
                                <Textarea
                                    id="content"
                                    value={content}
                                    onChange={(e) => setContent(e.target.value)}
                                    placeholder="Write your blog content here..."
                                    required
                                    className="min-h-[200px]"
                                />
                            )}
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="images">Images</Label>
                            <div className="flex flex-wrap gap-2 mb-2">
                                {images.map((image, index) => (
                                    <div key={index} className="relative">
                                        <img
                                            src={image.preview}
                                            alt={`Uploaded ${index + 1}`}
                                            className="w-24 h-24 object-cover rounded"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => removeImage(index)}
                                            className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1"
                                            aria-label="Remove image"
                                        >
                                            <X size={16} />
                                        </button>
                                    </div>
                                ))}
                            </div>
                            <div
                                {...getRootProps()}
                                className={`flex items-center justify-center w-full p-4 border-2 border-dashed rounded-lg cursor-pointer ${
                                    isDragActive
                                        ? "border-primary bg-primary/10"
                                        : "border-gray-300 bg-gray-50"
                                }`}
                            >
                                <input {...getInputProps()} />
                                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                    <Upload className="w-8 h-8 mb-4 text-gray-500" />
                                    <p className="mb-2 text-sm text-gray-500">
                                        <span className="font-semibold">
                                            Click to upload
                                        </span>{" "}
                                        or drag and drop
                                    </p>
                                    <p className="text-xs text-gray-500">
                                        JPG, PNG, GIF (Max size: 800KB)
                                    </p>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button type="submit">Create Blog Post</Button>
                    </CardFooter>
                </form>
            </Card>
        </div>
    );
}
