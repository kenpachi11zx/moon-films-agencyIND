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

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

export default function Testimonials() {
  return (
    <section className="section-container">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title font-heading">
            WHAT CLIENTS SAY
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Real feedback from creators and brands who've experienced our video editing magic
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={item}
              className="relative group"
            >
              <div className="relative h-full bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm p-6 rounded-lg border border-purple-500/20 group-hover:border-opacity-40 transition-all duration-300">
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 opacity-20">
                  <Quote className="w-8 h-8 text-purple-400" />
                </div>

                {/* Client Info & Image */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-purple-500/30">
                    <Image 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-heading font-semibold text-white">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-gray-400">
                      {testimonial.title}
                    </p>
                                         {/* Rating Stars */}
                     <div className="flex items-center gap-1 mt-1">
                       {[...Array(testimonial.rating)].map((_, i) => (
                         <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                       ))}
                     </div>
                     
                     {/* Social Media Stats */}
                     {testimonial.stats && (
                       <div className="flex items-center gap-3 mt-2">
                         <div className="flex items-center gap-1 text-xs text-gray-400">
                           <Youtube className="w-3 h-3 text-red-500" />
                           <span>{testimonial.stats.youtube}</span>
                         </div>
                         <div className="flex items-center gap-1 text-xs text-gray-400">
                           <Instagram className="w-3 h-3 text-pink-500" />
                           <span>{testimonial.stats.instagram}</span>
                         </div>
                       </div>
                     )}
                  </div>
                </div>

                {/* Testimonial Content */}
                <div className="relative">
                  <p className="text-sm text-gray-300 leading-relaxed italic">
                    "{testimonial.content}"
                  </p>
                </div>

                {/* Bottom Accent */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-b-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-gray-400 mb-4">
            Ready to join our satisfied clients?
          </p>
          <motion.button
            className="btn btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Start Your Project
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
} 