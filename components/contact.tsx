"use client";

import type React from "react";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
  Loader2,
} from "lucide-react";
import { submitContactForm } from "@/app/actions/contact";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<{
    success?: boolean;
    message?: string;
  } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    setIsSubmitting(true);
    setSubmitResult(null);

    try {
      const result = await submitContactForm(formData);
      setSubmitResult(result);

      // Reset form if successful
      if (result.success) {
        const form = document.getElementById("contact-form") as HTMLFormElement;
        if (form) {
          form.reset();
        }
      }
    } catch (error) {
      setSubmitResult({
        success: false,
        message: "An unexpected error occurred. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-[#0a0a20] to-[#1a1a40] text-white px-4 md:px-8 lg:px-16"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4 px-6 py-2 bg-gradient-to-r from-purple-900/30 to-purple-800/20 rounded-lg mx-auto">
            <div className="w-3 h-3 rounded-full bg-[#ff6b6b] shadow-sm shadow-[#ff6b6b]/30"></div>
            <h2 className="text-3xl font-bold text-white">Get In Touch</h2>
          </div>
          <p className="text-gray-300 max-w-2xl mx-auto mt-4">
            Have a project in mind or want to collaborate? Feel free to reach
            out to me using the form below.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-[#ff6b6b] p-3 rounded-lg">
                  <Mail className="text-white" size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-lg">Email</h4>
                  <p className="text-gray-300">eddahby.contact@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-[#ff6b6b] p-3 rounded-lg">
                  <Phone className="text-white" size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-lg">Phone</h4>
                  <p className="text-gray-300">+212 653 7604 74</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-[#ff6b6b] p-3 rounded-lg">
                  <MapPin className="text-white" size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-lg">Location</h4>
                  <p className="text-gray-300">
                    Kelaat M'Gouna, Tinghir, Morocco
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <form
              id="contact-form"
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium"
                  >
                    Your Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    required
                    disabled={isSubmitting}
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-[#ff6b6b] focus:ring-[#ff6b6b]"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium"
                  >
                    Your Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    required
                    disabled={isSubmitting}
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-[#ff6b6b] focus:ring-[#ff6b6b]"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block mb-2 text-sm font-medium"
                >
                  Subject *
                </label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="Project Inquiry"
                  required
                  disabled={isSubmitting}
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-[#ff6b6b] focus:ring-[#ff6b6b]"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium"
                >
                  Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project..."
                  rows={5}
                  required
                  disabled={isSubmitting}
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-[#ff6b6b] focus:ring-[#ff6b6b] resize-none"
                />
              </div>

              {/* Feedback message */}
              {submitResult && (
                <div
                  className={`text-sm flex items-start gap-2 p-3 rounded-lg ${
                    submitResult.success
                      ? "bg-green-500/20 text-green-200 border border-green-500/30"
                      : "bg-red-500/20 text-red-200 border border-red-500/30"
                  }`}
                  role="alert"
                >
                  {submitResult.success ? (
                    <CheckCircle size={16} className="mt-0.5 flex-shrink-0" />
                  ) : (
                    <AlertCircle size={16} className="mt-0.5 flex-shrink-0" />
                  )}
                  <span>{submitResult.message}</span>
                </div>
              )}

              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-[#ff6b6b] hover:bg-[#ff5252] text-white w-full disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={16} className="animate-spin mr-2" />
                    Sending Message...
                  </>
                ) : (
                  <>
                    <Send size={16} className="mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
