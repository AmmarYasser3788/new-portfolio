import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Ammar Yasser - Frontend Developer Portfolio",
  description:
    "Experienced frontend developer specializing in React, Next.js, and modern web technologies. Creating beautiful, responsive, and user-friendly web experiences.",
    icons: {
      icon: "/favicon.ico",      // normal favicon
      shortcut: "/favicon.ico",  // browser shortcut icon
      apple: "/favicon.png",   
    },
  keywords:
    "frontend developer, react developer, next.js, web development, portfolio, javascript, typescript",
  authors: [{ name: "Ammar Yasser" }],
  openGraph: {
    title: "Ammar Yasser - Frontend Developer Portfolio",
    description: "Experienced frontend developer creating beautiful web experiences",
    type: "website",
    url: "https://ammaryasserr.netlify.app/", // replace with your deployed URL
    images: [
      {
        url: "https://ammaryasserr.netlify.app/preview-image.png", // full absolute URL to your image
        width: 1200,
        height: 630,
        alt: "Ammar Yasser Portfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ammar Yasser - Frontend Developer Portfolio",
    description: "Experienced frontend developer creating beautiful web experiences",
    images: ["https://ammaryasserr.netlify.app/preview-image.png"], // must also be absolute URL
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
