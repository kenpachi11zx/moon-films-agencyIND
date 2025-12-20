"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Home, User, Briefcase, Star, MessageCircle, Phone, Menu, X } from "lucide-react"

const navItems = [
  { name: "Home", href: "#hero", icon: Home },
  { name: "About", href: "#about", icon: User },
  { name: "Work", href: "#work", icon: Briefcase },
  { name: "Skills", href: "#skills", icon: Star },
  { name: "Contact", href: "#contact", icon: Phone },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsOpen(false) // Close menu after navigation
  }

  return (
    <>
      {/* Desktop Navigation */}
<div className="hidden sm:block fixed top-6 left-1/2 -translate-x-1/2 z-50">
  <motion.nav
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.2 }}
  >
    <div className="backdrop-blur-lg bg-white/10 border border-white/25 rounded-full px-6 py-3 shadow-lg w-fit">
      <ul className="flex items-center space-x-6">
        {navItems.map((item) => (
          <li key={item.name}>
            <button
              onClick={() => scrollToSection(item.href.slice(1))}
              className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors duration-300 text-sm font-medium"
            >
              <item.icon size={16} />
              <span>{item.name}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  </motion.nav>
</div>


      {/* Mobile Hamburger Button */}
      <motion.button
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        onClick={() => setIsOpen(!isOpen)}
        className="sm:hidden fixed top-6 right-6 z-50 backdrop-blur-lg bg-white/10 border border-white/25 rounded-full p-3 shadow-lg"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={isOpen ? "close" : "menu"}
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {isOpen ? <X size={20} className="text-white" /> : <Menu size={20} className="text-white" />}
          </motion.div>
        </AnimatePresence>
      </motion.button>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="sm:hidden fixed inset-0 z-40"
          >
            {/* Backdrop with light blur */}
            <div className="absolute inset-0 backdrop-blur-sm bg-black/40" onClick={() => setIsOpen(false)} />
            
            {/* Drawer menu positioned below hamburger */}
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="absolute top-20 right-6 backdrop-blur-[9px] bg-[rgba(13,13,13,0.3)] border-0 rounded-[44px] p-[20px_15px] shadow-2xl min-w-[200px]"
            >
              <ul className="space-y-4">
                {navItems.map((item, index) => (
                  <motion.li
                    key={item.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <button
                      onClick={() => scrollToSection(item.href.slice(1))}
                      className="flex items-center space-x-3 text-white hover:text-white/80 transition-colors duration-300 text-base font-medium w-full text-left py-2 px-2 rounded-lg hover:bg-white/10"
                    >
                      <item.icon size={20} />
                      <span>{item.name}</span>
                    </button>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}