"use client"

import { motion } from "framer-motion"
import { Play, Mail } from "lucide-react"
import InteractiveMoonLogo from "./interactive-moon-logo"

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="section-container text-center w-full">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Interactive Moon Logo - Mobile Optimized */}
          <div className="mb-6 sm:mb-8">
            <InteractiveMoonLogo />
          </div>

          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 glow tracking-wide text-center leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-300">
              MOONFILMS CREATIVE
            </span>
          </h1>
          
          <h2 className="font-heading text-base sm:text-lg md:text-xl lg:text-2xl mb-3 sm:mb-4 font-medium tracking-wide text-center leading-tight px-2">
            VIDEO EDITING & VISUAL STORYTELLING
          </h2>
          
          <p className="text-sm sm:text-base md:text-lg mb-8 sm:mb-10 max-w-2xl mx-auto text-gray-300 font-normal tracking-normal text-center leading-relaxed px-4">
            TURNING MOMENTS INTO MOTION
          </p>

          {/* Mobile-Optimized Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
            <motion.button
              onClick={() => scrollToSection("work")}
              className="btn btn-outline w-full sm:w-auto min-h-[48px] sm:min-h-[52px] text-sm sm:text-base px-4 sm:px-6 py-3 sm:py-3"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Play className="w-4 h-4 sm:w-5 sm:h-5 mr-2 flex-shrink-0" />
              <span className="whitespace-nowrap">FEATURED WORK</span>
            </motion.button>

            <motion.button
              onClick={() => scrollToSection("contact")}
              className="btn btn-primary w-full sm:w-auto min-h-[48px] sm:min-h-[52px] text-sm sm:text-base px-4 sm:px-6 py-3 sm:py-3"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-2 flex-shrink-0" />
              <span className="whitespace-nowrap">LET'S WORK TOGETHER</span>
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Mobile-Optimized Scroll Indicator */}
      <motion.div
        className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
      >
        <button 
          onClick={() => scrollToSection("about")} 
          className="cursor-pointer p-2 touch-manipulation"
          aria-label="Scroll to next section"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-purple-300 w-6 h-6 sm:w-6 sm:h-6"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </button>
      </motion.div>
    </section>
  )
}
