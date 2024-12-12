"use server";

import { auth } from "@/auth";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function submitContactForm(form: Record<string, any>) {
  const session = await auth();
  if (!session) throw new Error("You must be logged in");

  const { name, email, subject, message } = form;

  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof subject !== "string" ||
    typeof message !== "string"
  ) {
    throw new Error("Invalid form data");
  }

  await prisma.contactForm.create({
    data: {
      name,
      email,
      subject,
      message,
    },
  });
}

export async function getUsers() {
  const allUsers = await prisma.user.findMany({
    where: {
      role: "USER",
    },
  });

  return allUsers;
}

export async function getContactForms() {
  const contactForms = await prisma.contactForm.findMany({});

  return contactForms;
}

export async function getBlogs() {
  const allBlogs = await prisma.blog.findMany({});

  return allBlogs;
}

export async function getVolunteerForms() {
  const volunteerForms = await prisma.volunteerForm.findMany({});

  return volunteerForms;
}

export async function getBlog(id: string) {
  const blog = await prisma.blog.findUnique({
    where: {
      id,
    },
  });

  if (!blog) {
    throw new Error("No blog found.");
  }

  return blog;
}
