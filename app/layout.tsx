import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Ammar Yasser - Frontend Developer Portfolio",
  description:
    "Experienced frontend developer specializing in React, Next.js, and modern web technologies. Creating beautiful, responsive, and user-friendly web experiences.",
  keywords: "frontend developer, react developer, next.js, web development, portfolio, javascript, typescript",
  authors: [{ name: "Ammar Yasser" }],
  openGraph: {
    title: "Ammar Yasser - Frontend Developer Portfolio",
    description: "Experienced frontend developer creating beautiful web experiences",
    type: "website",
  },
    
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
