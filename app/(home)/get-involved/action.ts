"use server";

import { z } from "zod";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const volunteerSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  address: z.string().min(5, "Address must be at least 5 characters"),
  state: z.string().min(2, "State must be at least 2 characters"),
  country: z.string().min(2, "Country must be at least 2 characters"),
  zipCode: z.string().min(5, "Zip code must be at least 5 characters"),
  message: z.string().optional(),
  identityCard: z.any().optional(),
});

export async function submitVolunteerForm(formData: FormData) {
  const validatedFields = volunteerSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    address: formData.get("address"),
    state: formData.get("state"),
    country: formData.get("country"),
    zipCode: formData.get("zipCode"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    return {
      success: false,
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  await prisma.volunteerForm.create({
    data: {
      name: validatedFields.data.name,
      email: validatedFields.data.email,
      phone: validatedFields.data.phone,
      address: validatedFields.data.address,
      state: validatedFields.data.state,
      country: validatedFields.data.country,
      zipCode: validatedFields.data.zipCode,
      message: validatedFields.data.message,
    },
  });

  return {
    success: true,
    message:
      "Thank you for your interest in volunteering! We'll be in touch soon.",
  };
}
