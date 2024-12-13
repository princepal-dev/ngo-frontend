"use client";

import { ColumnDef } from "@tanstack/react-table";

export type Blog = {
    id: string;
    title: string;
    author: string;
    publishDate: string;
};

export const columns: ColumnDef<Blog>[] = [
    {
        accessorKey: "title",
        header: "Title",
    },
    {
        accessorKey: "author",
        header: "Author",
    },
    {
        accessorKey: "publishDate",
        header: "Publish Date",
    },
];
