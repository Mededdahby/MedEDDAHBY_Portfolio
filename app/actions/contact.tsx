"use server";

import { z } from "zod";

// Contact form validation schema
const contactSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters long" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  subject: z
    .string()
    .min(5, { message: "Subject must be at least 5 characters long" }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters long" }),
});

type ContactResult = {
  success: boolean;
  message: string;
};

export async function submitContactForm(
  formData: FormData
): Promise<ContactResult> {
  try {
    // Extract form data
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      subject: formData.get("subject") as string,
      message: formData.get("message") as string,
    };

    // Validate the data
    const result = contactSchema.safeParse(data);

    if (!result.success) {
      const firstError = result.error.errors[0];
      return {
        success: false,
        message: firstError.message,
      };
    }

    return {
      success: false,
      message:
        "Online sending is not configured yet. Please email eddahby.contact@gmail.com directly.",
    };
  } catch (error) {
    console.error("Contact form submission error:", error);
    return {
      success: false,
      message:
        "Sorry, there was an error sending your message. Please try again or contact me directly via email.",
    };
  }
}
