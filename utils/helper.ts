"use server";

export async function getUsers() {
  return [];
}

export async function getContactForms() {
  return [];
}

export async function getBlogs() {
  return [];
}

export async function getVolunteerForms() {
  return [];
}

export async function getBlog(id: string) {
  return {
    id: id,
    title: "",
    content: "",
    author: "",
    publishDate: ""
  };
}
