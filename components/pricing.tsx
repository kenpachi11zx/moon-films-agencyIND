"use client"

import { motion } from "framer-motion"
import { Check, Star, Zap, Crown, Clock, Users, Target, TrendingUp, Image, Youtube, Zap as ZapIcon } from "lucide-react"

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
    name: "Super Pack",
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
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title font-heading">
            VIDEO EDITING PACKS
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Flexible monthly packages tailored for creators, coaches, influencers & brands.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {pricingPacks.map((pack, index) => {
            const IconComponent = pack.icon
            return (
              <motion.div
                key={index}
                variants={item}
                className="relative group"
              >

                
                <div className={`relative h-full bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm p-6 rounded-lg border ${pack.borderColor} group-hover:border-opacity-40 transition-all duration-300`}>
                  {/* Header */}
                  <div className="text-center mb-5">
                    <div className={`inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r ${pack.color} mb-3`}>
                      <IconComponent className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-heading font-bold text-white mb-1">{pack.name}</h3>
                    <div className="mb-1">
                      <span className="text-3xl font-bold text-white">{pack.price}</span>
                      <span className="text-gray-400 text-base ml-1">{pack.period}</span>
                    </div>
                    <p className="text-xs text-gray-400">{pack.perVideo}</p>
                  </div>

                  {/* Perfect For */}
                  <div className="mb-4">
                    <h4 className="text-xs font-semibold text-gray-300 mb-2 flex items-center gap-2">
                      <Users className="w-3 h-3 text-pink-500" />
                      Perfect For:
                    </h4>
                    <p className="text-xs text-gray-400 leading-tight">{pack.perfectFor}</p>
                  </div>

                  {/* What's Included */}
                  <div className="mb-4">
                    <h4 className="text-xs font-semibold text-gray-300 mb-2 flex items-center gap-2">
                      <Check className="w-3 h-3 text-green-500" />
                      What's Included:
                    </h4>
                    <ul className="space-y-1.5">
                      {pack.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-xs text-gray-400 flex items-start gap-2">
                          <Check className="w-3 h-3 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="leading-tight">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Highlight */}
                  <div className="mb-4 p-3 bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded border border-gray-700/30">
                    <p className="text-xs text-gray-300 italic text-center leading-tight">{pack.highlight}</p>
                  </div>

                  <motion.button
                    className="w-full py-3 px-6 rounded font-medium transition-all duration-300 tracking-wide uppercase text-sm border border-pink-500 text-white hover:bg-pink-500/10 bg-transparent"
                    whileHover={{
                      boxShadow: `0 0 20px ${pack.glowColor}`,
                    }}
                  >
                    Get Started
                  </motion.button>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Add-Ons Section */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="text-center mb-10">
            <h3 className="text-xl font-heading font-semibold text-white mb-3">
              ADD-ONS
            </h3>
            <p className="text-base text-gray-300 max-w-2xl mx-auto">
              Optional services to enhance your video content and workflow
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <motion.div
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-5 rounded-lg border border-gray-700/30 hover:border-pink-500/30 transition-all duration-300 group"
              whileHover={{ scale: 1.02, y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="text-center mb-3">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                  <Image className="w-5 h-5 text-white" />
                </div>
                <h4 className="text-base font-heading font-semibold text-white mb-1">Thumbnail Design</h4>
                <div className="text-xl font-bold text-white mb-1">₹500</div>
                <p className="text-xs text-gray-400">per image</p>
              </div>
              <p className="text-xs text-gray-300 text-center leading-tight">
                Custom, eye-catching thumbnails designed to increase click-through rates and engagement
              </p>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-5 rounded-lg border border-gray-700/30 hover:border-purple-500/30 transition-all duration-300 group"
              whileHover={{ scale: 1.02, y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="text-center mb-3">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 mb-2 group-hover:scale-110 transition-transform duration-300">
                  <Youtube className="w-5 h-5 text-white" />
                </div>
                <h4 className="text-base font-heading font-semibold text-white mb-1">YouTube SEO + Upload Support</h4>
                <div className="text-xl font-bold text-white mb-1">₹2,000</div>
                <p className="text-xs text-gray-400">per video</p>
              </div>
              <p className="text-xs text-gray-300 text-center leading-tight">
                Complete YouTube optimization including titles, descriptions, tags, and upload assistance
              </p>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-5 rounded-lg border border-gray-700/30 hover:border-yellow-500/30 transition-all duration-300 group"
              whileHover={{ scale: 1.02, y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className="text-center mb-3">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 mb-2 group-hover:scale-110 transition-transform duration-300">
                  <ZapIcon className="w-5 h-5 text-white" />
                </div>
                <h4 className="text-base font-heading font-semibold text-white mb-1">Express Same-Day Delivery</h4>
                <div className="text-xl font-bold text-white mb-1">₹1,000–₹3,000</div>
                <p className="text-xs text-gray-400">per video</p>
              </div>
              <p className="text-xs text-gray-300 text-center leading-tight">
                Rush delivery service for urgent projects with priority processing and expedited turnaround
              </p>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className="text-center mt-12 p-6 bg-gradient-to-r from-gray-900/50 to-black/50 rounded-lg border border-gray-700/30"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <h3 className="text-lg font-heading font-semibold text-white mb-3">
            Need a Custom Solution?
          </h3>
          <p className="text-sm text-gray-300 mb-5 max-w-2xl mx-auto leading-tight">
            Have specific requirements or need a package that fits your unique needs? 
            Let's create a custom solution that works perfectly for your content strategy.
          </p>
          <motion.button
            className="btn btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact for Custom Quote
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
} 