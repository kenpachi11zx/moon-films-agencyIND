"use client"

import { useEffect } from "react"

export default function SmoothScroll() {
  useEffect(() => {
    // Enhanced smooth scrolling with momentum and easing
    const style = document.createElement("style")
    style.textContent = `
      html {
        scroll-behavior: smooth;
        scroll-snap-type: y mandatory;
        scroll-padding-top: 100px;
      }

      section {
        scroll-snap-align: start;
        scroll-snap-stop: always;
        min-height: 100vh;
      }

      /* Enhanced momentum scrolling */
      * {
        -webkit-overflow-scrolling: touch;
      }

      /* Smooth transitions for all elements */
      body {
        transition: background-color 0.3s ease;
      }

      /* Enhanced scrollbar with animated gradient */
      ::-webkit-scrollbar {
        width: 8px;
      }

      ::-webkit-scrollbar-track {
        background: rgba(0, 0, 0, 0.8);
        border-radius: 4px;
      }

      ::-webkit-scrollbar-thumb {
        background: linear-gradient(45deg, #ec4899, #a855f7, #ec4899);
        background-size: 200% 200%;
        border-radius: 4px;
        box-shadow: 0 0 10px rgba(236, 72, 153, 0.5);
        animation: scrollbarGlow 3s ease-in-out infinite;
      }

      ::-webkit-scrollbar-thumb:hover {
        background: linear-gradient(45deg, #f472b6, #c084fc, #f472b6);
        box-shadow: 0 0 15px rgba(236, 72, 153, 0.8);
      }

      @keyframes scrollbarGlow {
        0%, 100% {
          background-position: 0% 50%;
        }
        50% {
          background-position: 100% 50%;
        }
      }

      /* Mobile scrollbar */
      @media (max-width: 768px) {
        ::-webkit-scrollbar {
          width: 4px;
        }

        html {
          scroll-padding-top: 80px;
        }
      }

      /* Enhanced scroll snap for better section transitions */
      section:nth-child(even) {
        scroll-snap-align: center;
      }

      /* Smooth focus transitions */
      *:focus {
        scroll-behavior: smooth;
        scroll-margin-top: 100px;
      }
    `
    document.head.appendChild(style)

    // Add scroll event listener for enhanced effects
    let scrollTimeout: NodeJS.Timeout

    const handleScroll = () => {
      clearTimeout(scrollTimeout)
      document.body.classList.add('scrolling')

      scrollTimeout = setTimeout(() => {
        document.body.classList.remove('scrolling')
      }, 150)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      document.head.removeChild(style)
      window.removeEventListener('scroll', handleScroll)
      clearTimeout(scrollTimeout)
    }
  }, [])

  return null
}
