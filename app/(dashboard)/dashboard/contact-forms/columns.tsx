"use client";

import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export type ContactForm = {
  id: string;
  name: string;
  email: string;
  subject: string;
  createdAt: Date;
};

export const columns: ColumnDef<ContactForm>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "subject",
    header: "Subject",
  },
  {
    accessorKey: "createdAt",
    header: "Submission Date",
  },
];
