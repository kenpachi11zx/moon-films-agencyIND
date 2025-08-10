import type React from "react"
import type { Metadata } from "next"
import { Sora, Urbanist } from "next/font/google"
import "./globals.css"

// Initialize the Sora font for headings
const sora = Sora({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sora",
})

// Initialize the Urbanist font for body text
const urbanist = Urbanist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-urbanist",
})

export const metadata: Metadata = {
  title: "Moon Films | Video Editing & Visual Storytelling",
  description: "Turning moments into motion. Professional video editing services by Moon Films.",
  generator: 'v0.dev',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
  themeColor: '#000000',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Moon Films',
  },
  formatDetection: {
    telephone: false,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${sora.variable} ${urbanist.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes" />
        <meta name="theme-color" content="#000000" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Moon Films" />
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body className="bg-black text-white antialiased font-sans overflow-x-hidden">{children}</body>
    </html>
  )
}
