"use client";

import type React from "react";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
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
            <form id="contact-form" className="space-y-6">
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
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-[#ff6b6b] focus:ring-[#ff6b6b] resize-none"
                />
              </div>

              <Button
                type="submit"
                className="bg-[#ff6b6b] hover:bg-[#ff5252] text-white w-full disabled:opacity-70 disabled:cursor-not-allowed"
              ></Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
