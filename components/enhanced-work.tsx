"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Play, Filter } from "lucide-react"

const videos = [
  {
    url: "https://youtu.be/Zn2mY9Vxoc0",
    embedUrl: "https://www.youtube.com/embed/Zn2mY9Vxoc0",
    thumbnail: "https://img.youtube.com/vi/Zn2mY9Vxoc0/maxresdefault.jpg",
    category: "Brand Reel",
    title: "Brand Reel",
    description: "Captivating short-form video with professional transitions and effects",
    tools: ["DaVinci Resolve", "Color Grading", "Sound Design"],
  },
  {
    url: "https://youtu.be/DwcAi6--Hds",
    embedUrl: "https://www.youtube.com/embed/DwcAi6--Hds",
    thumbnail: "https://img.youtube.com/vi/DwcAi6--Hds/maxresdefault.jpg",
    category: "Brand Reel",
    title: "Brand Reel",
    description: "Creative short-form video with innovative editing techniques",
    tools: ["After Effects", "Motion Graphics", "Creative Transitions"],
  },
  {
    url: "https://youtu.be/2TQXkysbZeI",
    embedUrl: "https://www.youtube.com/embed/2TQXkysbZeI",
    thumbnail: "https://img.youtube.com/vi/2TQXkysbZeI/maxresdefault.jpg",
    category: "Brand Reel",
    title: "Brand Reel",
    description: "Engaging promotional short with dynamic editing and eye-catching visuals",
    tools: ["Premiere Pro", "Motion Graphics", "Brand Integration"],
  },
  {
    url: "https://youtu.be/A_pjZlCbjZY",
    embedUrl: "https://www.youtube.com/embed/A_pjZlCbjZY",
    thumbnail: "https://img.youtube.com/vi/A_pjZlCbjZY/maxresdefault.jpg",
    category: "Brand Reel",
    title: "Brand Reel",
    description: "Engaging short-form content with dynamic editing and effects",
    tools: ["Premiere Pro", "Dynamic Cuts", "Visual Enhancement"],
  },
  {
    url: "https://youtube.com/shorts/iU77IvkR4kg?si=16aRR1XqvoqqSpSf",
    embedUrl: "https://www.youtube.com/embed/iU77IvkR4kg",
    thumbnail: "https://img.youtube.com/vi/iU77IvkR4kg/maxresdefault.jpg",
    category: "Fitness",
    title: "Fitness",
    description: "Dynamic short-form content with engaging storytelling and effects",
    tools: ["Premiere Pro", "Quick Cuts", "Visual Effects"],
  },
  {
    url: "https://youtube.com/shorts/pmjQtbElYkA?si=y0atShH6Rxp_VPJ8",
    embedUrl: "https://www.youtube.com/embed/pmjQtbElYkA",
    thumbnail: "https://img.youtube.com/vi/pmjQtbElYkA/maxresdefault.jpg",
    category: "Fitness",
    title: "Fitness",
    description: "Creative short-form video with innovative editing techniques",
    tools: ["After Effects", "Motion Graphics", "Creative Transitions"],
  },
  {
    url: "https://youtube.com/shorts/b4qeBUIckK0?si=aFHGN-kCIN6PqgxB",
    embedUrl: "https://www.youtube.com/embed/b4qeBUIckK0",
    thumbnail: "https://img.youtube.com/vi/b4qeBUIckK0/maxresdefault.jpg",
    category: "Brand Reel",
    title: "Brand Reel",
    description: "Engaging short-form content with dynamic editing and effects",
    tools: ["Premiere Pro", "Dynamic Cuts", "Visual Enhancement"],
  },
  {
    url: "https://youtu.be/K_eIt2RIYNE",
    embedUrl: "https://www.youtube.com/embed/K_eIt2RIYNE",
    thumbnail: "https://img.youtube.com/vi/K_eIt2RIYNE/maxresdefault.jpg",
    category: "Velocity",
    title: "Velocity",
    description: "Dynamic short-form content with engaging storytelling and effects",
    tools: ["Premiere Pro", "Quick Cuts", "Visual Effects"],
  },
  {
    url: "https://youtu.be/PCDY9Vk4Jww",
    embedUrl: "https://www.youtube.com/embed/PCDY9Vk4Jww",
    thumbnail: "https://img.youtube.com/vi/PCDY9Vk4Jww/maxresdefault.jpg",
    category: "Velocity",
    title: "Velocity",
    description: "Latest video editing showcase with professional transitions and effects",
    tools: ["Premiere Pro", "After Effects", "Motion Graphics"],
  },
  {
    url: "https://youtu.be/L2I2QvAK54E",
    embedUrl: "https://www.youtube.com/embed/L2I2QvAK54E",
    thumbnail: "https://img.youtube.com/vi/L2I2QvAK54E/maxresdefault.jpg",
    category: "Fitness",
    title: "Fitness",
    description: "High-energy fitness motivation video with dynamic cuts and music sync",
    tools: ["Premiere Pro", "After Effects", "Color Grading"],
  },
  {
    url: "https://youtu.be/PHPdOiyTW4o",
    embedUrl: "https://www.youtube.com/embed/PHPdOiyTW4o",
    thumbnail: "https://img.youtube.com/vi/PHPdOiyTW4o/maxresdefault.jpg",
    category: "Vlog",
    title: "Vlog",
    description: "Cinematic travel storytelling with smooth transitions and color grading",
    tools: ["DaVinci Resolve", "Motion Graphics", "Sound Design"],
  },
  {
    url: "https://youtu.be/lb2nQow3S98",
    embedUrl: "https://www.youtube.com/embed/lb2nQow3S98",
    thumbnail: "https://img.youtube.com/vi/lb2nQow3S98/maxresdefault.jpg",
    category: "Podcast",
    title: "Podcast",
    description: "Engaging podcast clips with animated graphics and subtitles",
    tools: ["Premiere Pro", "Motion Graphics", "Audio Sync"],
  },
]

const categories = ["All", "Velocity", "Fitness", "Vlog", "Podcast", "Brand Reel"]

export default function EnhancedWork() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null)
  const [hoveredVideo, setHoveredVideo] = useState<number | null>(null)
  const [activeCategory, setActiveCategory] = useState("All")
  const [isMobile, setIsMobile] = useState(false)

  // Detect mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const filteredVideos = activeCategory === "All" ? videos : videos.filter((video) => video.category === activeCategory)

  // Generate enhanced video URL with autoplay for mobile
  const getVideoUrl = (baseUrl: string) => {
    if (isMobile) {
      // Add parameters for faster loading on mobile with sound
      return `${baseUrl}?autoplay=1&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&playsinline=1`
    }
    return `${baseUrl}?modestbranding=1&rel=0&showinfo=0&iv_load_policy=3`
  }

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
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        type: "spring",
        stiffness: 100,
      },
    },
  }

  return (
    <section id="work" className="relative py-16">
      <div className="section-container">
        <motion.h2
          className="section-title font-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          FEATURED WORK
        </motion.h2>

        {/* Category Filter - Mobile Optimized */}
        <motion.div
          className="mb-8 sm:mb-12 px-4 sm:px-0"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Filter Label - Mobile Optimized */}
          <div className="flex items-center justify-center gap-2 mb-4 sm:mb-6">
            <Filter className="w-4 h-4 sm:w-5 sm:h-5 text-pink-500 flex-shrink-0" />
            <span className="text-xs sm:text-sm font-medium tracking-wide uppercase text-gray-400">Filter by Category:</span>
          </div>
          
          {/* Filter Buttons - Mobile Optimized */}
          <div className="flex flex-wrap justify-center gap-1 sm:gap-3 sm:flex-nowrap sm:overflow-x-auto pb-2 sm:pb-0">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-2 sm:px-4 py-2 sm:py-3 rounded-sm text-xs sm:text-sm font-medium tracking-wide uppercase transition-all duration-300 border min-h-[36px] sm:min-h-[44px] touch-manipulation whitespace-nowrap ${
                  activeCategory === category
                    ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white border-transparent glow-border"
                    : "bg-black/30 text-gray-300 border-purple-500/20 hover:border-pink-500/50 hover:text-white"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                data-cursor-hover
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Video Grid - Mobile Optimized */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 max-w-7xl mx-auto px-4 sm:px-0"
            variants={container}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            {filteredVideos.map((video, index) => (
              <motion.div
                key={`${activeCategory}-${index}`}
                variants={item}
                className="relative group cursor-pointer"
                onHoverStart={() => setHoveredVideo(index)}
                onHoverEnd={() => setHoveredVideo(null)}
                onClick={() => setActiveVideo(video.embedUrl)}
                data-cursor-hover
              >
                {/* Glassmorphism Card */}
                <div className="relative aspect-video rounded-lg overflow-hidden glass-dark backdrop-blur-sm border border-purple-500/20 group-hover:border-pink-500/50 transition-all duration-500">
                  {/* Enhanced Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-pink-500/20 group-hover:via-purple-500/20 group-hover:to-pink-500/20 transition-all duration-500 rounded-lg" />

                  {/* Outer glow on hover */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-pink-500/0 to-purple-500/0 group-hover:from-pink-500/30 group-hover:to-purple-500/30 rounded-lg blur-sm transition-all duration-500 -z-10" />

                  {/* Thumbnail */}
                  <motion.img
                    src={video.thumbnail || "/placeholder.svg"}
                    alt={video.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                    onError={(e) => {
                      e.currentTarget.src = "/placeholder.svg?height=720&width=1280"
                    }}
                  />

                  {/* Play Button Overlay */}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center glow-border">
                      <Play className="w-6 h-6 text-white ml-1" />
                    </div>
                  </motion.div>

                  {/* Category Badge */}
                  <div className="absolute top-3 left-3 px-2 py-1 bg-black/70 backdrop-blur-sm rounded text-xs font-medium text-pink-400 border border-pink-500/30">
                    {video.category}
                  </div>
                </div>

                {/* Project Details - Hover Preview */}
                <AnimatePresence>
                  {hoveredVideo === index && (
                    <motion.div
                      className="absolute -bottom-2 left-0 right-0 glass-dark backdrop-blur-md rounded-lg p-4 border border-purple-500/30 z-10"
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                    >
                      <h3 className="font-heading text-sm font-semibold mb-2 text-white">{video.title}</h3>
                      <p className="text-xs text-gray-300 mb-3 leading-relaxed">{video.description}</p>

                      {/* Tools Used */}
                      <div className="flex flex-wrap gap-1">
                        {video.tools.map((tool, toolIndex) => (
                          <span
                            key={toolIndex}
                            className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded border border-purple-500/30"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* No Results Message */}
        {filteredVideos.length === 0 && (
          <motion.div
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-gray-400 text-lg">No videos found in this category.</p>
          </motion.div>
        )}
      </div>

      {/* Enhanced Video Modal */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            className={`fixed inset-0 bg-black/95 z-50 flex items-center justify-center ${isMobile ? 'p-4' : 'p-4'}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Modal Background Blur */}
            <div className="absolute inset-0 backdrop-blur-sm" />

            <motion.div
              className={`relative ${isMobile ? 'w-[80%] h-[80%]' : 'w-full max-w-6xl aspect-video'} z-10`}
              initial={{ scale: 0.8, opacity: 0, rotateX: -15 }}
              animate={{ scale: 1, opacity: 1, rotateX: 0 }}
              exit={{ scale: 0.8, opacity: 0, rotateX: 15 }}
              transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
            >
              {/* Enhanced Modal Glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-xl blur-xl" />

              <iframe
                src={getVideoUrl(activeVideo)}
                className="w-full h-full rounded-lg border-2 border-purple-500/30 glow-border shadow-2xl"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />

              <motion.button
                onClick={() => setActiveVideo(null)}
                className="absolute -top-12 right-0 text-white hover:text-pink-500 transition-colors p-2 bg-black/50 rounded-full backdrop-blur-sm border border-purple-500/30"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                data-cursor-hover
              >
                <X className="w-8 h-8" />
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
