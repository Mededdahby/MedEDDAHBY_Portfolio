"use server"

import { z } from "zod"

// Email validation schema
const newsletterSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
})

type SubscribeResult = {
  success: boolean
  message: string
}

export async function subscribeToNewsletter(formData: FormData): Promise<SubscribeResult> {
  try {
    // Get email from form data
    const email = formData.get("email") as string

    // Validate email
    const result = newsletterSchema.safeParse({ email })

    if (!result.success) {
      return {
        success: false,
        message: result.error.errors[0].message,
      }
    }

    // Simulate a delay for the API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // In a real application, you would send this to your email service provider
    // like Mailchimp, SendGrid, ConvertKit, etc.
    console.log("Subscribing email:", email)

    // For demo purposes, we'll just return success
    // In production, you would check if the subscription was successful
    return {
      success: true,
      message: "Thank you for subscribing to our newsletter!",
    }
  } catch (error) {
    console.error("Newsletter subscription error:", error)
    return {
      success: false,
      message: "An error occurred. Please try again later.",
    }
  }
}
