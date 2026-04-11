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
      className="bg-[#FAF7F2] px-4 py-20 text-[#111111] dark:bg-[#0C1014] dark:text-white md:px-8 lg:px-16"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="mx-auto mb-4 inline-flex items-center gap-3 rounded-lg border border-[#111111]/10 bg-white/80 px-6 py-2 dark:border-white/10 dark:bg-white/5">
            <div className="h-3 w-3 rounded-full bg-[#B45309] shadow-sm shadow-[#B45309]/20"></div>
            <h2 className="text-3xl font-bold text-[#111111] dark:text-white">Get In Touch</h2>
          </div>
          <p className="mx-auto mt-4 max-w-3xl font-semibold text-[#334155] dark:text-slate-300">
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
            className="panel-surface rounded-[28px] p-8"
          >
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-[#111111] p-3">
                  <Mail className="text-white" size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-lg">Email</h4>
                  <p className="text-[#334155] dark:text-slate-300">eddahby.contact@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-[#111111] p-3">
                  <Phone className="text-white" size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-lg">Phone</h4>
                  <p className="text-[#334155] dark:text-slate-300">+212 653 7604 74</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-[#111111] p-3">
                  <MapPin className="text-white" size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-lg">Location</h4>
                  <p className="text-[#334155] dark:text-slate-300">
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
            className="panel-surface rounded-[28px] p-8"
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
                    className="border-[#111111]/12 bg-white text-[#111111] placeholder:text-[#334155]/70 focus:border-[#B45309] focus:ring-[#B45309] dark:border-white/10 dark:bg-[#10151b] dark:text-white dark:placeholder:text-slate-400 dark:focus:border-[#D97706]"
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
                    className="border-[#111111]/12 bg-white text-[#111111] placeholder:text-[#334155]/70 focus:border-[#B45309] focus:ring-[#B45309] dark:border-white/10 dark:bg-[#10151b] dark:text-white dark:placeholder:text-slate-400 dark:focus:border-[#D97706]"
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
                  className="border-[#111111]/12 bg-white text-[#111111] placeholder:text-[#334155]/70 focus:border-[#B45309] focus:ring-[#B45309] dark:border-white/10 dark:bg-[#10151b] dark:text-white dark:placeholder:text-slate-400 dark:focus:border-[#D97706]"
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
                  className="resize-none border-[#111111]/12 bg-white text-[#111111] placeholder:text-[#334155]/70 focus:border-[#B45309] focus:ring-[#B45309] dark:border-white/10 dark:bg-[#10151b] dark:text-white dark:placeholder:text-slate-400 dark:focus:border-[#D97706]"
                />
              </div>

              {/* Feedback message */}
              {submitResult && (
                <div
                  className={`text-sm flex items-start gap-2 p-3 rounded-lg ${
                    submitResult.success
                      ? "border border-green-500/30 bg-green-500/10 text-green-800"
                      : "border border-red-500/30 bg-red-500/10 text-red-700"
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
                className="w-full bg-[#111111] text-white hover:bg-[#B45309] disabled:cursor-not-allowed disabled:opacity-70 dark:bg-white dark:text-[#111111] dark:hover:bg-[#D97706] dark:hover:text-white"
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
