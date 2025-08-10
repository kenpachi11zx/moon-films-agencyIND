"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, Calendar } from "lucide-react"
import emailjs from "@emailjs/browser"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [formStatus, setFormStatus] = useState<{
    type: "success" | "error" | "loading" | null
    message: string
  }>({
    type: null,
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        type: "error",
        message: "Please fill in all fields",
      })
      return
    }

    if (!formData.email.includes("@")) {
      setFormStatus({
        type: "error",
        message: "Please enter a valid email address",
      })
      return
    }

    // Set loading state
    setFormStatus({
      type: "loading",
      message: "Sending message...",
    })

    try {
      // EmailJS configuration with your credentials
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: "Moon Films",
      }

      // Send email using EmailJS with your credentials
      await emailjs.send(
        "service_09jykuv", // Your Service ID
        "template_sjo0o0g", // Your Template ID
        templateParams,
        "xdQV4RUShMMJtD2mL", // Your Public Key
      )

      // Success
      setFormStatus({
        type: "success",
        message: "Message sent successfully! I'll get back to you soon.",
      })

      // Reset form
      setFormData({
        name: "",
        email: "",
        message: "",
      })
    } catch (error) {
      console.error("EmailJS error:", error)
      setFormStatus({
        type: "error",
        message: "Failed to send message. Please try again or contact me directly.",
      })
    }
  }

  return (
    <section id="contact" className="relative py-12 sm:py-16">
      <div className="section-container">
        <motion.h2
          className="section-title font-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          GET IN TOUCH
        </motion.h2>

        <div className="max-w-4xl mx-auto">
          {/* Contact Info - Mobile Optimized */}
          <motion.div
            className="flex justify-center items-center gap-6 sm:gap-8 mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <motion.button
              className="flex flex-col items-center gap-3 sm:gap-4 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open('mailto:moonfilms07@gmail.com', '_blank')}
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:shadow-lg group-hover:shadow-pink-500/25 transition-all duration-300">
                <Mail className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>
            </motion.button>

            <motion.button
              className="flex flex-col items-center gap-3 sm:gap-4 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open('tel:+916003021379', '_blank')}
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center group-hover:shadow-lg group-hover:shadow-purple-500/25 transition-all duration-300">
                <Phone className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>
            </motion.button>

            <motion.button
              className="flex flex-col items-center gap-3 sm:gap-4 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open('https://calendly.com/moonfilms07/30min', '_blank')}
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:shadow-lg group-hover:shadow-pink-500/25 transition-all duration-300">
                <Calendar className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>
            </motion.button>
          </motion.div>

          {/* Contact Form - Mobile Optimized */}
          <motion.div
            className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm rounded-lg border border-purple-500/20 p-4 sm:p-6 lg:p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm sm:text-base font-medium text-white mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-3 sm:py-4 bg-gray-800/50 border border-gray-600/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-200 text-sm sm:text-base"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm sm:text-base font-medium text-white mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-3 sm:py-4 bg-gray-800/50 border border-gray-600/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-200 text-sm sm:text-base"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm sm:text-base font-medium text-white mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-3 sm:px-4 py-3 sm:py-4 bg-gray-800/50 border border-gray-600/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-200 resize-none text-sm sm:text-base"
                  placeholder="Tell me about your project..."
                />
              </div>

              {/* Form Status */}
              {formStatus.type && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-3 sm:p-4 rounded-lg text-sm sm:text-base ${
                    formStatus.type === "success"
                      ? "bg-green-500/20 border border-green-500/30 text-green-300"
                      : formStatus.type === "error"
                      ? "bg-red-500/20 border border-red-500/30 text-red-300"
                      : "bg-blue-500/20 border border-blue-500/30 text-blue-300"
                  }`}
                >
                  {formStatus.message}
                </motion.div>
              )}

              {/* Submit Button - Mobile Optimized */}
              <motion.button
                type="submit"
                disabled={formStatus.type === "loading"}
                className="btn btn-primary w-full min-h-[48px] sm:min-h-[52px] text-sm sm:text-base px-6 sm:px-8 py-3 disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {formStatus.type === "loading" ? "Sending..." : "Send Message"}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
