"use client"

import { motion } from "framer-motion"

const workflowSteps = [
  {
    title: "30 min zoom call",
    description: "Initial consultation to understand your vision and requirements"
  },
  {
    title: "Client sends raw files",
    description: "You provide the raw footage and reference materials"
  },
  {
    title: "We edit and send sample",
    description: "We create a sample edit to establish the style and direction"
  },
  {
    title: "Finalize style & first draft",
    description: "Refine the editing style and complete the first full version"
  },
  {
    title: "Review & feedback",
    description: "You review and provide feedback for improvements"
  },
  {
    title: "Revisions & final delivery",
    description: "We make revisions and deliver your final polished video"
  }
]

export default function WorkflowTimeline() {
  // Enhanced animations for better mobile performance
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const item = {
    hidden: { 
      opacity: 0, 
      scale: 0.8, 
      y: 30
    },
    show: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.8
      }
    }
  }

  const headerAnimation = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8
      }
    }
  }

  const ctaAnimation = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
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

  return (
    <section id="workflow" className="relative py-16 sm:py-20 overflow-hidden">
      {/* Enhanced background effects for mobile */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-black/80 to-pink-900/30 pointer-events-none" />
      
      {/* Animated background network effect */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.1)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(236,72,153,0.1)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.1)_0%,transparent_50%)]" />
      </div>
      
      <div className="section-container relative z-10">
        {/* Enhanced Section Header */}
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
            HOW WE WORK
          </motion.h2>
          <motion.p 
            className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed px-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Our streamlined process ensures your vision comes to life efficiently with clear communication at every step
          </motion.p>
        </motion.div>

        {/* Enhanced Mobile-Optimized Process Grid */}
        <motion.div
          className="max-w-6xl mx-auto"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* Two-column grid for desktop, single column for mobile */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
            {workflowSteps.map((step, index) => (
              <motion.div
                key={index}
                variants={item}
                className="group relative"
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Enhanced Circular Node */}
                <motion.div 
                  className="relative mx-auto w-32 h-32 sm:w-36 sm:h-36 lg:w-40 lg:h-40 rounded-full border-2 border-purple-500/30 bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-sm flex items-center justify-center text-center p-4 transition-all duration-500 group-hover:border-purple-500/60 group-hover:shadow-2xl group-hover:shadow-purple-500/20"
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.3 }
                  }}
                >
                  {/* Glowing border effect */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Step number */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-base border-2 border-white/20">
                    {index + 1}
                  </div>
                  
                  {/* Step title */}
                  <div className="relative z-10">
                    <p className="text-sm sm:text-base lg:text-lg text-white font-semibold leading-tight tracking-wide">
                      {step.title}
                    </p>
                  </div>
                  
                  {/* Enhanced glow effect */}
                  <motion.div 
                    className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                    style={{
                      background: `radial-gradient(circle, rgba(168,85,247,0.15) 0%, transparent 70%)`
                    }}
                  />
                </motion.div>
                
                {/* Step description below circle */}
                <div className="text-center mt-4 sm:mt-5">
                  <p className="text-sm sm:text-base text-gray-300 font-medium leading-relaxed max-w-xs mx-auto">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Enhanced connection lines for desktop */}
          <motion.div 
            className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500/40 via-pink-500/60 to-purple-500/40 transform -translate-y-1/2 rounded-full"
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
            style={{ transformOrigin: "left center" }}
          />
        </motion.div>
        
        {/* Enhanced Call to Action */}
        <motion.div
          className="text-center mt-16 sm:mt-20"
          variants={ctaAnimation}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn btn-primary group relative overflow-hidden text-base sm:text-lg px-8 sm:px-10 py-4 sm:py-5 w-full sm:w-auto min-h-[56px] sm:min-h-[64px]"
            whileHover={{ 
              scale: 1.05,
              y: -2,
              transition: { duration: 0.2, ease: "easeOut" }
            }}
            whileTap={{ scale: 0.98 }}
          >
            {/* Enhanced button background effect */}
            <span className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative z-10">START YOUR PROJECT</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
} 