"use client"

import { useRef } from "react"
import ParticleBackground from "@/components/particle-background"
import Hero from "@/components/hero"
import About from "@/components/about"
import EditingStyles from "@/components/editing-styles"
import EnhancedWork from "@/components/enhanced-work"
import Skills from "@/components/skills"
import Pricing from "@/components/pricing"
import Testimonials from "@/components/testimonials"
import FAQ from "@/components/faq"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import MouseSpotlight from "@/components/mouse-spotlight"
import SmoothScroll from "@/components/smooth-scroll"
import PageLoader from "@/components/page-loader"
import ScrollProgress from "@/components/scroll-progress"
import MoonPhaseIndicator from "@/components/moon-phase-indicator"
import ScheduleCallButton from "@/components/schedule-call-button"

export default function Home() {
  const containerRef = useRef(null)

  return (
    <>
      <PageLoader />
      <SmoothScroll />
      <ScrollProgress />
      <MoonPhaseIndicator />
      <ScheduleCallButton />

      <main ref={containerRef} className="relative min-h-screen overflow-hidden">
        <ParticleBackground />
        <MouseSpotlight />

        <div className="relative z-10">
          <Hero />
          <About />
          <EditingStyles />
          <EnhancedWork />
          <Skills />
          <Testimonials />
          <FAQ />
          <Pricing />
          <Contact />
          <Footer />
        </div>
      </main>
    </>
  )
}
