"use client"

import { motion } from "framer-motion"
import { ChevronDown, HelpCircle } from "lucide-react"
import { useState } from "react"

const faqs = [
  {
    question: "How long does video editing typically take?",
    answer: "Delivery times vary by package: Basic Pack (72 hours), Super Pack (48 hours), and Premium Pack (24-48 hours). We also offer express same-day delivery as an add-on service for urgent projects."
  },
  {
    question: "What file formats do you accept for editing?",
    answer: "We accept all major video formats including MP4, MOV, AVI, and more. We can work with footage from any camera, phone, or recording device. For best results, we recommend sending the highest quality source files available."
  },
  {
    question: "How many revisions are included?",
    answer: "Revision limits vary by package: Basic Pack (2 revisions), Super Pack (3 revisions), and Premium Pack (unlimited revisions). We want you to be completely satisfied with the final result."
  },
  {
    question: "Do you provide music and sound effects?",
    answer: "Yes! We include trending audio and copyright-free music in all packages. For Premium Pack clients, we also offer custom sound design for long-form videos. We ensure all music is properly licensed and safe for commercial use."
  },
  {
    question: "Can you match my brand's visual style?",
    answer: "Absolutely! We create custom templates, color schemes, and typography that perfectly match your brand identity. This is included in Super and Premium packages, ensuring consistent branding across all your content."
  },
  {
    question: "What if I need changes after delivery?",
    answer: "Minor adjustments are included in your revision allowance. For significant changes beyond the scope of your package, we offer additional editing services at competitive rates. We're committed to your satisfaction."
  },
  {
    question: "Do you handle YouTube uploads and optimization?",
    answer: "Yes! We offer YouTube SEO + Upload Support as an add-on service. This includes thumbnail design, title optimization, description writing, tags, and uploading to your channel with proper optimization for maximum reach."
  },
  {
    question: "Can I switch between packages month to month?",
    answer: "Yes, our packages are flexible and you can upgrade, downgrade, or cancel at any time. We also offer custom solutions for clients with specific needs that don't fit our standard packages."
  }
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="section-container">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title font-heading">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <p className="text-base text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about working with Moon Films
          </p>
        </motion.div>

        {/* FAQ Grid */}
        <motion.div
          className="space-y-3"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={item}
              className="relative group"
            >
              <div className="relative bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm rounded-lg border border-purple-500/20 group-hover:border-opacity-40 transition-all duration-300">
                {/* Question - Mobile Optimized */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-4 sm:px-5 py-3 sm:py-4 text-left flex items-center justify-between group-hover:bg-purple-500/5 transition-colors duration-200 min-h-[48px] sm:min-h-[52px] touch-manipulation"
                >
                  <div className="flex items-center gap-2 sm:gap-3">
                    <HelpCircle className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400 flex-shrink-0" />
                    <span className="text-white font-medium text-left text-xs sm:text-sm leading-tight">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown 
                    className={`w-4 h-4 sm:w-5 sm:h-5 text-purple-400 transition-transform duration-200 flex-shrink-0 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {/* Answer - Mobile Optimized */}
                <div className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="px-4 sm:px-5 pb-3 sm:pb-4">
                    <div className="border-t border-purple-500/20 pt-3 sm:pt-4">
                      <p className="text-gray-300 leading-relaxed text-xs sm:text-sm">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-gray-400 mb-3 text-sm">
            Still have questions? Let's talk!
          </p>
          <motion.button
            className="btn btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get in Touch
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
} 