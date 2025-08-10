"use client"

import { motion } from "framer-motion"
import { Clapperboard, Film, Briefcase, Mic, Instagram, Youtube } from "lucide-react"

const styles = [
  { name: "CINEMATIC TRAVEL EDIT", icon: Clapperboard },
  { name: "YOUTUBE VLOG SERIES", icon: Youtube },
  { name: "SHORT FILM SCENE", icon: Film },
  { name: "INSTAGRAM REEL PACK", icon: Instagram },
  { name: "CORPORATE PROMO VIDEO", icon: Briefcase },
  { name: "PODCAST", icon: Mic },
]

export default function EditingStyles() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section id="editing-styles" className="relative py-16 bg-black/50">
      <div className="section-container">
        <motion.h2
          className="section-title font-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          EDITING STYLES
        </motion.h2>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 sm:gap-4 max-w-5xl mx-auto px-4 sm:px-0"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {styles.map((style, index) => {
            const IconComponent = style.icon
            return (
              <motion.div
                key={index}
                variants={item}
                className="bg-gradient-to-br from-purple-900/20 to-black/20 backdrop-blur-sm p-3 sm:p-4 rounded-sm border border-purple-500/10 flex flex-col items-center justify-center text-center group min-h-[80px] sm:min-h-[100px] touch-manipulation"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 15px rgba(236, 72, 153, 0.3)",
                }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="mb-2 sm:mb-3">
                  <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-pink-500 group-hover:text-purple-300 transition-colors duration-300" />
                </div>
                <h3 className="font-heading text-xs sm:text-sm font-medium tracking-normal leading-tight px-1">{style.name}</h3>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
