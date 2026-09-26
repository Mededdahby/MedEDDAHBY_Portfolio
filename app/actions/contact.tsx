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
  website: z.string().max(0).optional(),
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
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      subject: String(formData.get("subject") ?? ""),
      message: String(formData.get("message") ?? ""),
      website: String(formData.get("website") ?? ""),
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

    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.CONTACT_TO_EMAIL ?? "eddahby.contact@gmail.com";
    const from = process.env.CONTACT_FROM_EMAIL ?? "Portfolio <contact@eddahby.tech>";

    if (!apiKey) {
      console.error("Contact form is missing RESEND_API_KEY.");
      return {
        success: false,
        message: `Email delivery is temporarily unavailable. Please email ${to} directly.`,
      };
    }

    const escapeHtml = (value: string) =>
      value.replace(/[&<>'"]/g, (character) => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        "'": "&#39;",
        '"': "&quot;",
      })[character] ?? character);

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 8000);
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: result.data.email,
        subject: `[Portfolio] ${result.data.subject}`,
        text: `Name: ${result.data.name}\nEmail: ${result.data.email}\n\n${result.data.message}`,
        html: `<h2>New portfolio enquiry</h2><p><strong>Name:</strong> ${escapeHtml(result.data.name)}</p><p><strong>Email:</strong> ${escapeHtml(result.data.email)}</p><p><strong>Subject:</strong> ${escapeHtml(result.data.subject)}</p><p><strong>Message:</strong></p><p>${escapeHtml(result.data.message).replace(/\n/g, "<br>")}</p>`,
      }),
      signal: controller.signal,
    }).finally(() => clearTimeout(timeout));

    if (!response.ok) {
      console.error("Resend contact delivery failed:", response.status, await response.text());
      return {
        success: false,
        message: `Your message could not be sent. Please email ${to} directly.`,
      };
    }

    return {
      success: true,
      message: "Message sent. I’ll get back to you as soon as possible.",
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
