"use client"

import { useState, useRef } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Heart, Loader2, CheckCircle, AlertCircle } from "lucide-react"
import { RiLinkedinFill, RiGithubFill, RiInstagramFill, RiTelegramFill } from "react-icons/ri"
import { subscribeToNewsletter } from "@/app/actions/newsletter"

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [subscriptionResult, setSubscriptionResult] = useState<{
    success?: boolean
    message?: string
  } | null>(null)
  const formRef = useRef<HTMLFormElement>(null)

  const handleSubscribe = async (formData: FormData) => {
    setIsSubmitting(true)
    setSubscriptionResult(null)

    try {
      const result = await subscribeToNewsletter(formData)
      setSubscriptionResult(result)

      // Reset form if successful
      if (result.success && formRef.current) {
        formRef.current.reset()
      }
    } catch (error) {
      setSubscriptionResult({
        success: false,
        message: "An unexpected error occurred. Please try again.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <footer className="bg-gradient-to-br from-[#0a0a20] to-[#1a1a40] text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h2 className="text-2xl font-bold">Mohamed Eddahby</h2>
            <p className="text-gray-300 text-sm">
              Crafting intuitive digital experiences with a focus on user experience and clean code.
            </p>
            <div className="flex space-x-4 pt-4">
              <Link href="https://linkedin.com/in/mohamed-eddahby" target="_blank" aria-label="LinkedIn">
                <div className="bg-white/10 hover:bg-[#ff6b6b] p-2 rounded-full transition-colors duration-300">
                  <RiLinkedinFill size={18} />
                </div>
              </Link>
              <Link href="https://github.com/mohamededdahby" target="_blank" aria-label="GitHub">
                <div className="bg-white/10 hover:bg-[#ff6b6b] p-2 rounded-full transition-colors duration-300">
                  <RiGithubFill size={18} />
                </div>
              </Link>
              <Link href="https://instagram.com" target="_blank" aria-label="Instagram">
                <div className="bg-white/10 hover:bg-[#ff6b6b] p-2 rounded-full transition-colors duration-300">
                  <RiInstagramFill size={18} />
                </div>
              </Link>
              <Link href="https://telegram.org" target="_blank" aria-label="Telegram">
                <div className="bg-white/10 hover:bg-[#ff6b6b] p-2 rounded-full transition-colors duration-300">
                  <RiTelegramFill size={18} />
                </div>
              </Link>
            </div>
          </motion.div>

          {/* Quick links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-[#ff6b6b] transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#about" className="text-gray-300 hover:text-[#ff6b6b] transition-colors duration-300">
                  About
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-gray-300 hover:text-[#ff6b6b] transition-colors duration-300">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-gray-300 hover:text-[#ff6b6b] transition-colors duration-300">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="text-gray-300 hover:text-[#ff6b6b] transition-colors duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <div className="bg-[#ff6b6b]/20 p-2 rounded-full">
                  <Mail size={16} className="text-[#ff6b6b]" />
                </div>
                <span className="text-gray-300 text-sm">eddahby.contact@gmail.com</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="bg-[#ff6b6b]/20 p-2 rounded-full">
                  <Phone size={16} className="text-[#ff6b6b]" />
                </div>
                <span className="text-gray-300 text-sm">+212 653 7604 74</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="bg-[#ff6b6b]/20 p-2 rounded-full">
                  <MapPin size={16} className="text-[#ff6b6b]" />
                </div>
                <span className="text-gray-300 text-sm">Kelaat M'Gouna, Tinhgir, Morocco</span>
              </li>
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-300 text-sm mb-4">Subscribe to receive updates on new projects and articles.</p>

            <form ref={formRef} action={handleSubscribe} className="space-y-3">
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  placeholder="Your email address"
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-[#ff6b6b] text-white placeholder:text-gray-400 disabled:opacity-70"
                  aria-label="Email for newsletter"
                  aria-describedby="newsletter-result"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#ff6b6b] hover:bg-[#ff5252] text-white py-2 px-4 rounded-lg transition-colors duration-300 disabled:opacity-70 flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={16} className="animate-spin mr-2" />
                    Subscribing...
                  </>
                ) : (
                  "Subscribe"
                )}
              </button>

              {/* Feedback message */}
              {subscriptionResult && (
                <div
                  id="newsletter-result"
                  className={`text-sm flex items-start gap-2 p-2 rounded ${
                    subscriptionResult.success ? "bg-green-500/20 text-green-200" : "bg-red-500/20 text-red-200"
                  }`}
                  role="alert"
                >
                  {subscriptionResult.success ? (
                    <CheckCircle size={16} className="mt-0.5 flex-shrink-0" />
                  ) : (
                    <AlertCircle size={16} className="mt-0.5 flex-shrink-0" />
                  )}
                  <span>{subscriptionResult.message}</span>
                </div>
              )}
            </form>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-8"></div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">&copy; {currentYear} Mohamed Eddahby. All rights reserved.</p>
          <p className="text-gray-400 text-sm flex items-center">
            Made with <Heart size={14} className="text-[#ff6b6b] mx-1" /> using Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}
