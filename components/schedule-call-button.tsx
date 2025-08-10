"use client"

import { motion } from "framer-motion"
import { Calendar } from "lucide-react"

export default function ScheduleCallButton() {
  return (
    <motion.div
      className="fixed top-4 right-4 z-50 group cursor-pointer"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 1.2 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Button Container */}
      <div className="relative">
        {/* Outer glow */}
        <div className="absolute inset-0 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-lg" />

        {/* Button body */}
        <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 overflow-hidden border border-purple-500/30 shadow-lg">
          {/* Icon */}
          <div className="flex items-center justify-center w-full h-full">
            <Calendar className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
          </div>
        </div>

        {/* Hover effect */}
        <div className="absolute inset-0 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-r from-pink-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Tooltip */}
      <div className="absolute right-16 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="bg-gray-900/90 backdrop-blur-sm text-white px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap border border-gray-700/50">
          Schedule a Call
          <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-2 h-2 bg-gray-900/90 rotate-45 border-r border-b border-gray-700/50"></div>
        </div>
      </div>

      {/* Clickable link overlay */}
      <a
        href="https://calendly.com/moonfilms07/30min"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute inset-0 z-10"
        aria-label="Schedule a call"
      />
    </motion.div>
  )
} 