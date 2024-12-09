"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/hooks/use-toast";
import { submitVolunteerForm } from "./action";

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];
const ACCEPTED_ID_TYPES = [...ACCEPTED_IMAGE_TYPES];

const volunteerFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  address: z.string().min(5, "Address must be at least 5 characters"),
  state: z.string().min(2, "State must be at least 2 characters"),
  country: z.string().min(2, "Country must be at least 2 characters"),
  zipCode: z.string().min(5, "Zip code must be at least 5 characters"),
  message: z.string().optional(),
  identityCard: z
    .any()
    .refine((file) => file?.size <= MAX_FILE_SIZE, `Max file size is 5MB.`)
    .refine(
      (file) => ACCEPTED_ID_TYPES.includes(file?.type),
      "Only .jpg, .jpeg, .png, .webp and .pdf formats are supported.",
    )
    .optional(),
});

export default function GetInvolved() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof volunteerFormSchema>>({
    resolver: zodResolver(volunteerFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      address: "",
      state: "",
      country: "",
      zipCode: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof volunteerFormSchema>) {
    setIsSubmitting(true);
    const formData = new FormData();
    Object.entries(values).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        value.forEach((v) => formData.append(key, v));
      } else if (value instanceof File) {
        formData.append(key, value);
      } else {
        formData.append(key, value as string);
      }
    });

    const result = await submitVolunteerForm(formData);
    setIsSubmitting(false);

    if (result.success) {
      toast({
        title: "Form submitted",
        description: result.message,
      });
      form.reset();
    } else {
      toast({
        title: "Error",
        description:
          "There was a problem submitting your form. Please try again.",
        variant: "destructive",
      });
    }
  }

  return (
    <div className="min-h-screen bg-emerald-50">
      <header className="bg-emerald-600 text-white"></header>

      <main className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-emerald-800 text-center">
            Get Involved
          </h1>

          <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-emerald-700">
              Volunteer with Us
            </h2>
            <p className="mb-6 text-gray-600">
              Join our team of dedicated volunteers and make a real difference
              in the lives of children and our environment. Fill out the form
              below to get started!
            </p>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your full name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="Your email address"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone</FormLabel>
                      <FormControl>
                        <Input
                          type="tel"
                          placeholder="Your phone number"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Address</FormLabel>
                      <FormControl>
                        <Input placeholder="Your street address" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="state"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>State</FormLabel>
                        <FormControl>
                          <Input placeholder="Your state" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="country"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Country</FormLabel>
                        <FormControl>
                          <Input placeholder="Your country" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="zipCode"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Zip Code</FormLabel>
                      <FormControl>
                        <Input placeholder="Your zip code" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="identityCard"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Identity Card</FormLabel>
                      <FormControl>
                        <Input
                          type="file"
                          accept=".jpg,.jpeg,.png,.webp,.pdf"
                          onChange={(e) => field.onChange(e.target.files?.[0])}
                        />
                      </FormControl>
                      <FormDescription>
                        Upload a copy of your identity card. Max file size: 5MB.
                        Accepted formats: .jpg, .jpeg, .png
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message (Optional)</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell us why you're interested in volunteering"
                          className="resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  className="w-full bg-emerald-600 text-white hover:bg-emerald-700"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </main>

      <section className="bg-emerald-600 text-white py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Other Ways to Help
          </h2>
          <p className="text-lg mb-6">
            Can&apos;t volunteer right now? There are other ways you can support
            our cause!
          </p>
          <div className="space-x-4">
            <Button className="bg-white text-emerald-600 hover:bg-emerald-100">
              Donate
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-emerald-700"
            >
              Spread the Word
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
