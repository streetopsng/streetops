"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

/* ------------------ Schema ------------------ */
const formSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  email: z.string().email("Enter a valid email address"),
  companyName: z.string().min(2, "Company name is required"),
  phone: z.string().min(7, "Enter a valid phone number"),
  package: z.string().min(1, "Please select a package"),
  description: z
    .string()
    .min(10, "Description is required")
    .max(500, "Maximum of 500 characters"),
});

type FormValues = z.infer<typeof formSchema>;

export default function RecruitmentForm() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      companyName: "",
      phone: "",
      package: "",
      description: "",
    },
  });

  const descriptionValue = form.watch("description") || "";

  function onSubmit(values: FormValues) {
    console.log(values);
    // send to API / email service here
  }

  return (
    <div className="w-full  mx-auto lg:px-16 bg-white rounded-2xl p-6 sm:p-8 shadow-2xl">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {/* Grid Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name *</FormLabel>
                  <FormControl>
                    <Input
                      className="bg-[#F9F9F9] text-black  border-none focus-visible:ring-2 focus-visible:ring-white/40"
                      placeholder="John Doe"
                      {...field}
                    />
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
                  <FormLabel>Email Address *</FormLabel>
                  <FormControl>
                    <Input
                      className="bg-[#F9F9F9] text-black  border-none focus-visible:ring-2 focus-visible:ring-white/40"
                      placeholder="john@company.com"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="companyName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Company Name *</FormLabel>
                  <FormControl>
                    <Input
                      className="bg-[#F9F9F9] text-black  border-none focus-visible:ring-2 focus-visible:ring-white/40"
                      placeholder="Your company"
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
                  <FormLabel>Phone Number *</FormLabel>
                  <FormControl>
                    <Input
                      className="bg-[#F9F9F9] text-black  border-none focus-visible:ring-2 focus-visible:ring-white/40"
                      placeholder="+234 800 000 0000"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Package */}
          <FormField
            control={form.control}
            name="package"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Choose Package *</FormLabel>
                <Select onValueChange={field.onChange}>
                  <FormControl>
                    <SelectTrigger className="bg-[#F9F9F9] text-black border-none focus:ring-2 focus:ring-white/40 w-full">
                      <SelectValue placeholder="Select a package" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="fast-hire">Fast Hire</SelectItem>
                    <SelectItem value="graduate-talent">
                      Graduate Talent Hunt
                    </SelectItem>
                    <SelectItem value="volume-recruitment">
                      Volume Recruitment
                    </SelectItem>
                    <SelectItem value="executive-search">
                      Executive Search
                    </SelectItem>
                    <SelectItem value="specialist-technical">
                      Specialist / Technical
                    </SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Description */}
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description *</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="What roles are you looking to fill? What challenges are you facing with recruitment?"
                    className="min-h-35 bg-[#F9F9F9]"
                    {...field}
                  />
                </FormControl>
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>{descriptionValue.length}/500 characters</span>
                  <span />
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Submit */}
          <div className="flex justify-center pt-4">
            <Button
              type="submit"
              className="px-10 rounded-full bg-secondPrimary hover:bg-[#4a0c0c] w-2/4"
            >
              Send
              <Send className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
