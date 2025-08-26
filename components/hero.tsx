"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Download } from "lucide-react"
import { useEffect, useState } from "react"

export function Hero() {
  const [text, setText] = useState("")
  const fullText = "Software Developer"

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      setText(fullText.slice(0, index))
      index++
      if (index > fullText.length) {
        clearInterval(timer)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Ammar Yasser
            </span>
          </h1>
          <div className="text-2xl md:text-3xl text-gray-300 mb-6 h-12">
            {text}
            <span className="animate-pulse">|</span>
          </div>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
            I craft beautiful, responsive, and user-friendly web experiences using modern technologies. Passionate about
            clean code, innovative design, and creating digital solutions that make a difference.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <a href="mailto:ammar.abassery@gmail.com">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
            >
              <Mail className="mr-2 h-4 w-4" />
              Get In Touch
            </Button>
          </a>


          <a href="/Ammar-Yasser-CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="outline"
              size="lg"
              className="border-gray-600 text-gray-300 hover:bg-gray-800 bg-transparent"
            >
              <Download className="mr-2 h-4 w-4" />
              Download CV
            </Button>
          </a>

        </div>

        <div className="flex justify-center space-x-6">
          <a href="https://github.com/AmmarYasser3788" 
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition-colors duration-200">
            <Github className="h-6 w-6" />
          </a>
          <a href="https://www.linkedin.com/in/ammar-yasser-682132282/" 
          target="_blank"
            rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition-colors duration-200">
            <Linkedin className="h-6 w-6" />
          </a>
          <a href="mailto:ammar.abassery@gmail.com" className="text-gray-400 hover:text-white transition-colors duration-200">
            <Mail className="h-6 w-6" />
          </a>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-purple-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-32 h-32 bg-pink-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-blue-500/20 rounded-full blur-xl animate-pulse delay-500"></div>
      </div>
    </section>
  )
}
