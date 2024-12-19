"use client";

import { ColumnDef } from "@tanstack/react-table";

export type VolunteerForm = {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  state: string;
  country: string;
  zipCode: string;
  message: string;
  createdAt: Date;
};

export const columns: ColumnDef<VolunteerForm>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "phone",
    header: "Phone",
  },
  {
    accessorKey: "address",
    header: "Address",
  },
  {
    accessorKey: "state",
    header: "State",
  },
  {
    accessorKey: "country",
    header: "Country",
  },
  {
    accessorKey: "zipCode",
    header: "Zip Code",
  },
  {
    accessorKey: "message",
    header: "Message",
  },
  {
    accessorKey: "createdAt",
    header: "Submission Date",
  },
];
