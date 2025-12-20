"use client"

import { motion } from "framer-motion"
import { MapPin, Globe } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="relative py-12 sm:py-16">
      <div className="section-container">
        <motion.h2
          className="section-title font-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          ABOUT
        </motion.h2>

        <div className="max-w-4xl mx-auto">
          {/* Logo Section - Mobile Optimized */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8 sm:mb-12 text-center"
          >
            <div className="relative mx-auto w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 mb-6 sm:mb-8">
              <div className="absolute inset-0 rounded-lg sm:rounded-sm bg-gradient-to-r from-pink-500 to-purple-600 blur-lg opacity-70"></div>
              <div className="relative w-full h-full rounded-lg sm:rounded-sm overflow-hidden border border-pink-500/50 glow-border">
                <img
                  src="/images/moon-films-logo.png"
                  alt="Moon Films Logo"
                  className="w-full h-full object-contain p-3 sm:p-4"
                />
              </div>
            </div>
          </motion.div>

          {/* Content Section - Mobile Optimized */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center px-4 sm:px-0"
          >
            <p className="text-base sm:text-lg mb-8 sm:mb-10 text-gray-300 font-normal leading-relaxed tracking-normal max-w-3xl mx-auto">
              Moonfilms Creative is a visual storytelling studio turning raw footage into cinematic narratives.
              We craft rhythm-driven edits that capture attention, spark emotion, and elevate brands.
            </p>

            {/* Info Cards - Mobile Optimized */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
              <div className="bg-gradient-to-br from-purple-900/20 to-black/20 rounded-lg sm:rounded-sm border border-purple-500/20 p-4 sm:p-6 max-w-sm sm:max-w-md">
                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4 justify-center">
                  <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-pink-500 flex-shrink-0" />
                  <span className="font-medium tracking-normal text-center text-xs sm:text-sm">ENGLISH, HINDI, ASSAMESE</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-3 justify-center">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-pink-500 flex-shrink-0" />
                  <span className="font-medium tracking-normal text-center text-xs sm:text-sm">GUWAHATI</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
