'use server'

import { z } from 'zod'

const MAX_FILE_SIZE = 5 * 1024 * 1024 // 5MB

const volunteerSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  address: z.string().min(5, "Address must be at least 5 characters"),
  state: z.string().min(2, "State must be at least 2 characters"),
  country: z.string().min(2, "Country must be at least 2 characters"),
  zipCode: z.string().min(5, "Zip code must be at least 5 characters"),
  interests: z.array(z.string()).min(1, "Please select at least one area of interest"),
  message: z.string().optional(),
  photo: z.any()
    .refine((file) => file?.size <= MAX_FILE_SIZE, `Max file size is 5MB.`)
    .refine(
      (file) => ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'].includes(file?.type),
      "Only .jpg, .jpeg, .png and .webp formats are supported."
    ).optional(),
  identityCard: z.any()
    .refine((file) => file?.size <= MAX_FILE_SIZE, `Max file size is 5MB.`)
    .refine(
      (file) => ['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'application/pdf'].includes(file?.type),
      "Only .jpg, .jpeg, .png, .webp and .pdf formats are supported."
    ).optional(),
})

export async function submitVolunteerForm(formData: FormData) {
  const validatedFields = volunteerSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    address: formData.get('address'),
    state: formData.get('state'),
    country: formData.get('country'),
    zipCode: formData.get('zipCode'),
    interests: formData.getAll('interests'),
    message: formData.get('message'),
    photo: formData.get('photo'),
    identityCard: formData.get('identityCard'),
  })

  if (!validatedFields.success) {
    return { success: false, errors: validatedFields.error.flatten().fieldErrors }
  }

  // Here you would typically save the data to a database and handle file uploads
  // For this example, we'll just simulate a successful submission
  await new Promise(resolve => setTimeout(resolve, 1000))

  return { 
    success: true, 
    message: "Thank you for your interest in volunteering! We'll be in touch soon." 
  }
}

