"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { X } from "lucide-react"

const videos = [
  {
    url: "https://youtu.be/L2I2QvAK54E",
    embedUrl: "https://www.youtube.com/embed/L2I2QvAK54E",
    thumbnail: "https://img.youtube.com/vi/L2I2QvAK54E/maxresdefault.jpg",
  },
  {
    url: "https://www.youtube.com/watch?v=PHPdOiyTW4o",
    embedUrl: "https://www.youtube.com/embed/PHPdOiyTW4o",
    thumbnail: "https://img.youtube.com/vi/PHPdOiyTW4o/maxresdefault.jpg",
  },
  {
    url: "https://youtu.be/lb2nQow3S98",
    embedUrl: "https://www.youtube.com/embed/lb2nQow3S98",
    thumbnail: "https://img.youtube.com/vi/lb2nQow3S98/maxresdefault.jpg",
  },
  {
    url: "https://youtu.be/EqL9PeK1k9I",
    embedUrl: "https://www.youtube.com/embed/EqL9PeK1k9I",
    thumbnail: "https://img.youtube.com/vi/EqL9PeK1k9I/maxresdefault.jpg",
  },
  {
    url: "https://youtube.com/shorts/EBnQITCMN3Q",
    embedUrl: "https://www.youtube.com/embed/EBnQITCMN3Q",
    thumbnail: "https://img.youtube.com/vi/EBnQITCMN3Q/maxresdefault.jpg",
  },
  {
    url: "https://youtu.be/Lkrep-XuCK0",
    embedUrl: "https://www.youtube.com/embed/Lkrep-XuCK0",
    thumbnail: "https://img.youtube.com/vi/Lkrep-XuCK0/maxresdefault.jpg",
  },
  {
    url: "https://youtu.be/eo1W28JDkD4",
    embedUrl: "https://www.youtube.com/embed/eo1W28JDkD4",
    thumbnail: "https://img.youtube.com/vi/eo1W28JDkD4/maxresdefault.jpg",
  },
  {
    url: "https://youtube.com/shorts/ZdlPHcTI6e0",
    embedUrl: "https://www.youtube.com/embed/ZdlPHcTI6e0",
    thumbnail: "https://img.youtube.com/vi/ZdlPHcTI6e0/maxresdefault.jpg",
  },
]

export default function Work() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null)

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
    <section id="work" className="relative py-12 sm:py-16">
      <div className="section-container">
        <motion.h2
          className="section-title font-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          MY WORK
        </motion.h2>

        {/* Mobile-Optimized Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 max-w-7xl mx-auto"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {videos.map((video, index) => (
            <motion.div
              key={index}
              variants={item}
              className="relative aspect-video rounded-lg sm:rounded-sm overflow-hidden group cursor-pointer bg-gradient-to-br from-purple-900/30 to-black/30 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
              onClick={() => setActiveVideo(video.embedUrl)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <img
                src={video.thumbnail || "/placeholder.svg"}
                alt="Video thumbnail"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.src = "/placeholder.svg"
                }}
              />
              
              {/* Play Button Overlay - Mobile Optimized */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/30 transition-all duration-300">
                  <svg
                    className="w-6 h-6 sm:w-8 sm:h-8 text-white ml-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile-Optimized Video Modal */}
        {activeVideo && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveVideo(null)}
          >
            <div className="relative w-full max-w-4xl mx-auto">
              {/* Close Button - Mobile Optimized */}
              <button
                onClick={() => setActiveVideo(null)}
                className="absolute -top-12 sm:-top-16 right-0 z-10 p-2 sm:p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-200 touch-manipulation"
                aria-label="Close video"
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </button>
              
              {/* Video Container - Mobile Responsive */}
              <div className="relative w-full aspect-video rounded-lg sm:rounded-sm overflow-hidden">
                <iframe
                  src={activeVideo}
                  title="Video player"
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}
