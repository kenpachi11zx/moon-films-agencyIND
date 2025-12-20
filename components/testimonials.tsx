"use client"

import { motion } from "framer-motion"
import { Star, Quote, Youtube, Instagram } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    name: "Arunav [ TheBroThing ]",
    title: "Fitness Creator",
    content: "Moon Films killed it on our fitness videos! The editing was so smooth and the final result looked absolutely professional. Great communication and super fast turnaround. Definitely recommend!",
    rating: 5,
    image: "/images/arunav.png",
    stats: {
      youtube: "33.3K",
      instagram: "62.2K"
    }
  },
  {
    name: "EGA Wellness",
    title: "Wellness Brand",
    content: "Working with Moon Films transformed our wellness content! Their editing brought our meditation and fitness videos to life with perfect pacing, calming transitions, and professional polish. The team understood our brand's peaceful aesthetic perfectly.",
    rating: 5,
    image: "/images/ega.png",
    stats: {
      youtube: "1.01K",
      instagram: "12.2K"
    }
  },
  {
    name: "MyHealthBuddy",
    title: "Health & Fitness Platform",
    content: "Moon Films elevated our health content to the next level! Their editing skills transformed our workout videos with dynamic cuts, perfect timing, and engaging transitions. The team consistently delivers high-quality edits that keep our audience hooked.",
    rating: 5,
    image: "/images/mhb.png",
    stats: {
      youtube: "1.15M",
      instagram: "1.7M"
    }
  },
  {
    name: "MHB Academy",
    title: "Fitness Education Platform",
    content: "Moon Films has been instrumental in creating our educational fitness content! Their editing expertise brings clarity to complex workout tutorials, making them engaging and easy to follow. The team's attention to detail ensures our instructional videos are both professional and effective.",
    rating: 5,
    image: "/images/mhb-ac.png",
    stats: {
      youtube: "1.41K",
      instagram: "176K"
    }
  }
]

// Enhanced animations for better mobile performance
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  show: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: {
      duration: 0.6
    }
  }
}

const headerAnimation = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.8
    }
  }
}

const ctaAnimation = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  show: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: {
      duration: 0.6,
      delay: 0.4
    }
  }
}

export default function Testimonials() {
  return (
    <section className="section-container relative overflow-hidden">
      {/* Enhanced background effects for mobile */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black/50 to-pink-900/20 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Section Header with better mobile animations */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          variants={headerAnimation}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.h2 
            className="section-title font-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            WHAT CLIENTS SAY
          </motion.h2>
          <motion.p 
            className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed px-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Real feedback from creators and brands who've experienced our video editing magic
          </motion.p>
        </motion.div>

        {/* Enhanced Mobile-Optimized Testimonials Grid */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={item}
              className="group bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-sm rounded-lg sm:rounded-sm border border-purple-500/20 p-4 sm:p-6 hover:border-purple-500/40 transition-all duration-500 ease-out transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/20"
              whileHover={{ 
                y: -5,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Enhanced Header with smooth animations */}
              <motion.div 
                className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-5"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <motion.div 
                  className="relative w-12 h-12 sm:w-14 sm:h-14 flex-shrink-0"
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="rounded-full object-cover border-2 border-purple-500/30 group-hover:border-purple-500/60 transition-all duration-300"
                  />
                  {/* Enhanced glow effect */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
                <div className="flex-1 min-w-0">
                  <motion.h3 
                    className="font-heading text-sm sm:text-base font-semibold text-white mb-1 truncate"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 + 0.1 }}
                  >
                    {testimonial.name}
                  </motion.h3>
                  <motion.p 
                    className="text-xs sm:text-sm text-gray-400 mb-2"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                  >
                    {testimonial.title}
                  </motion.p>
                  
                  {/* Enhanced Rating with staggered animation */}
                  <motion.div 
                    className="flex items-center gap-1"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
                  >
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0, rotate: -180 }}
                        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ 
                          duration: 0.3, 
                          delay: index * 0.1 + 0.3 + i * 0.1,
                          type: "spring",
                          stiffness: 200
                        }}
                      >
                        <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-current" />
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </motion.div>

              {/* Enhanced Content with smooth reveal */}
              <motion.div 
                className="mb-4 sm:mb-5"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 + 0.5 }}
                >
                  <Quote className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400 mb-2 opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                  {testimonial.content}
                </p>
              </motion.div>

              {/* Enhanced Stats with hover effects */}
              <motion.div 
                className="flex items-center gap-4 sm:gap-6 text-xs sm:text-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.6 }}
              >
                <motion.div 
                  className="flex items-center gap-1 sm:gap-2 text-gray-400 hover:text-red-400 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Youtube className="w-3 h-3 sm:w-4 sm:h-4 text-red-500" />
                  <span>{testimonial.stats.youtube}</span>
                </motion.div>
                <motion.div 
                  className="flex items-center gap-1 sm:gap-2 text-gray-400 hover:text-pink-400 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Instagram className="w-3 h-3 sm:w-4 sm:h-4 text-pink-500" />
                  <span>{testimonial.stats.instagram}</span>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Call to Action with better mobile animations */}
        <motion.div
          className="text-center mt-12 sm:mt-16"
          variants={ctaAnimation}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.p 
            className="text-gray-400 mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Ready to join our satisfied clients?
          </motion.p>
          <motion.button
            className="btn btn-primary group relative overflow-hidden"
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.2, ease: "easeOut" }
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            {/* Enhanced button background effect */}
            <span className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative z-10">Start Your Project</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
} 