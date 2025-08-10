"use client"

import { motion } from "framer-motion"
import { Check, Star, Zap, Crown, Clock, Users, Target, TrendingUp, Image, Youtube, Zap as ZapIcon } from "lucide-react"
import { useState } from "react"

const pricingPacks = [
  {
    name: "Basic Pack",
    price: "₹4,000",
    period: "/ month",
    perVideo: "(~₹1,000 per video)",
    description: "Perfect for new creators, solopreneurs, small businesses just starting out with content.",
    features: [
      "4 short-form videos (Reels/Shorts/TikToks) — up to 60 seconds each",
      "Basic editing: clean cuts, jump cuts, smooth transitions",
      "Music sync using trending audio or copyright-free tracks",
      "Auto-captions (stylized), minimal effects",
      "Standard delivery: within 72 hours per video",
      "2 free revisions per video"
    ],
    perfectFor: "New creators, solopreneurs, small businesses just starting out with content.",
    highlight: "A great starting point for consistent content without breaking the bank.",
    icon: Target,
    color: "from-blue-500 to-cyan-400",
    borderColor: "border-blue-500/20",
    glowColor: "rgba(59, 130, 246, 0.3)"
  },
  {
    name: "Standard Pack",
    price: "₹12,000",
    period: "/ month",
    perVideo: "(~₹1,200–₹3,000 per video)",
    description: "Perfect for intermediate creators, vloggers, coaches, or educators building their content strategy.",
    features: [
      "8–10 short-form videos or 2 long-form YouTube videos (5–10 mins)",
      "Professional color correction, stylized overlays & filters",
      "Animated text & titles that match your brand identity",
      "Simple motion graphics and transitions",
      "Hook optimization — to retain viewer attention in first 3–5 seconds",
      "Fast delivery: 48 hours per video",
      "Up to 3 revisions per video"
    ],
    perfectFor: "Intermediate creators, vloggers, coaches, or educators building their content strategy.",
    highlight: "A perfect fit for creators who are scaling up and need more polish & speed.",
    icon: Zap,
    color: "from-purple-500 to-pink-500",
    borderColor: "border-purple-500/20",
    glowColor: "rgba(168, 85, 247, 0.3)"
  },
  {
    name: "Premium Pack",
    price: "₹25,000+",
    period: "/ month",
    perVideo: "(Custom quote based on volume & complexity)",
    description: "Perfect for brands, influencers, agencies, or content-heavy creators with higher demands.",
    features: [
      "15+ videos per month (Flexible mix of Shorts, Reels, Long-form, YouTube edits)",
      "Advanced motion graphics & dynamic transitions",
      "Thumbnail design (custom, clickable)",
      "Hook scripting assistance for virality",
      "Branding integration — consistent templates, colors, fonts",
      "Sound design for long-form edits",
      "Priority delivery: within 24–48 hours",
      "Dedicated project manager for coordination & feedback",
      "Unlimited revisions",
      "Monthly performance report (view count, retention, suggestions)"
    ],
    perfectFor: "Brands, influencers, agencies, or content-heavy creators with higher demands.",
    highlight: "Designed for full-service, hands-free video content production at scale.",
    icon: Crown,
    color: "from-yellow-500 to-orange-500",
    borderColor: "border-yellow-500/20",
    glowColor: "rgba(245, 158, 11, 0.3)"
  }
]

export default function Pricing() {
  const [activeTab, setActiveTab] = useState(0)

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section id="pricing" className="relative py-16 bg-black/50">
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title font-heading">
            VIDEO EDITING PACKS
          </h2>
          <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
            Flexible monthly packages tailored for creators, coaches, influencers & brands.
          </p>
        </motion.div>

        {/* Mobile-Optimized Tabbed Pricing Card */}
        <motion.div
          className="max-w-4xl mx-auto px-4 sm:px-0"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <div className="relative bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm rounded-lg border border-purple-500/20 overflow-hidden">
            {/* Mobile-Optimized Tab Navigation */}
            <div className="flex border-b border-purple-500/20">
              {pricingPacks.map((pack, index) => {
                return (
                  <button
                    key={index}
                    onClick={() => setActiveTab(index)}
                    className={`flex-1 px-3 sm:px-6 py-3 sm:py-4 text-center transition-all duration-300 min-h-[48px] sm:min-h-[52px] touch-manipulation ${
                      activeTab === index
                        ? 'text-white border-b-2 border-white'
                        : 'text-gray-400 hover:text-gray-300'
                    }`}
                  >
                    <span className="font-medium text-sm sm:text-base">{pack.name.split(' ')[0]}</span>
                  </button>
                )
              })}
            </div>

            {/* Tab Content - Mobile Optimized */}
            <div className="p-4 sm:p-6 lg:p-8">
              {(() => {
                const pack = pricingPacks[activeTab]
                const IconComponent = pack.icon
                return (
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-center"
                  >
                    {/* Header */}
                    <div className="mb-4 sm:mb-6">
                      <h3 className="text-xl sm:text-2xl font-heading font-bold text-white mb-2">{pack.name}</h3>
                      <div className="mb-2">
                        <span className="text-3xl sm:text-4xl font-bold text-white">{pack.price}</span>
                        <span className="text-lg sm:text-xl text-gray-400">{pack.period}</span>
                      </div>
                      <p className="text-xs sm:text-sm text-gray-400">{pack.perVideo}</p>
                    </div>

                    {/* Description */}
                    <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6 max-w-2xl mx-auto leading-relaxed px-2">
                      {pack.description}
                    </p>

                    {/* Perfect For */}
                    <div className="mb-4 sm:mb-6">
                      <h4 className="text-xs sm:text-sm font-semibold text-gray-300 mb-2 sm:mb-3 flex items-center justify-center gap-2">
                        <Users className="w-4 h-4 text-pink-500" />
                        Perfect For:
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-400 leading-relaxed px-2">{pack.perfectFor}</p>
                    </div>

                    {/* What's Included */}
                    <div className="mb-4 sm:mb-6">
                      <h4 className="text-xs sm:text-sm font-semibold text-gray-300 mb-2 sm:mb-3 flex items-center justify-center gap-2">
                        <Check className="w-4 h-4 text-green-500" />
                        What's Included:
                      </h4>
                      <ul className="space-y-2 max-w-lg mx-auto text-left">
                        {pack.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="text-xs sm:text-sm text-gray-400 flex items-start gap-2 sm:gap-3 px-2">
                            <Check className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="leading-relaxed">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Highlight */}
                    <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded border border-gray-700/30">
                      <p className="text-xs sm:text-sm text-gray-300 italic leading-relaxed">{pack.highlight}</p>
                    </div>

                    {/* Action Button */}
                    <motion.button
                      onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                      className="btn btn-primary w-full sm:w-auto min-h-[48px] sm:min-h-[52px] text-sm sm:text-base px-6 sm:px-8 py-3"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Get Started
                    </motion.button>
                  </motion.div>
                )
              })()}
            </div>
          </div>
        </motion.div>

        {/* Add-Ons Section */}
        <motion.div
          className="mt-8 sm:mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="text-center mb-6 sm:mb-8">
            <h3 className="text-lg sm:text-xl font-heading font-semibold text-white mb-2 sm:mb-3">
              ADD-ONS
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 max-w-2xl mx-auto leading-relaxed px-4">
              Optional services to enhance your video content and workflow
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto mb-8 sm:mb-10">
            <motion.div
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-3 sm:p-5 rounded-lg border border-gray-700/30 hover:border-blue-500/30 transition-all duration-300 group hover:scale-105"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="text-center">
                <h4 className="text-sm sm:text-base font-heading font-semibold text-white mb-1 sm:mb-2">Thumbnail Design</h4>
                <div className="text-lg sm:text-xl font-bold text-white mb-1">₹500</div>
                <p className="text-xs text-gray-400 mb-2 sm:mb-3">per image</p>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Custom, eye-catching thumbnails designed to increase click-through rates and engagement
                </p>
              </div>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-3 sm:p-5 rounded-lg border border-gray-700/30 hover:border-purple-500/30 transition-all duration-300 group hover:scale-105"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="text-center">
                <h4 className="text-sm sm:text-base font-heading font-semibold text-white mb-1 sm:mb-2">YouTube SEO + Upload Support</h4>
                <div className="text-lg sm:text-xl font-bold text-white mb-1">₹2,000</div>
                <p className="text-xs text-gray-400 mb-2 sm:mb-3">per video</p>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Complete YouTube optimization including titles, descriptions, tags, and upload assistance
                </p>
              </div>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-3 sm:p-5 rounded-lg border border-gray-700/30 hover:border-yellow-500/30 transition-all duration-300 group hover:scale-105"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className="text-center">
                <h4 className="text-sm sm:text-base font-heading font-semibold text-white mb-1 sm:mb-2">Express Same-Day Delivery</h4>
                <div className="text-lg sm:text-xl font-bold text-white mb-1">₹1,000–₹3,000</div>
                <p className="text-xs text-gray-400 mb-2 sm:mb-3">per video</p>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Rush delivery service for urgent projects with priority processing and expedited turnaround
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="text-center p-4 sm:p-6 bg-gradient-to-r from-gray-900/50 to-black/50 rounded-lg border border-gray-700/30 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <h3 className="text-base sm:text-lg font-heading font-semibold text-white mb-2 sm:mb-3">
              Need a Custom Solution?
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 mb-3 sm:mb-4 max-w-2xl mx-auto leading-relaxed px-4">
              Have specific requirements or need a package that fits your unique needs? 
              Let's create a custom solution that works perfectly for your content strategy.
            </p>
            <motion.button
              className="btn btn-primary text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Contact for Custom Quote
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 