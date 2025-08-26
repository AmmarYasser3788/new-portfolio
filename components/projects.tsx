import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

export function Projects() {
  const projects = [
    {
      title: "Mobile Repair Service App with AI Chatbot",
      description:

        ` Collaborated in a team to build a Flutter mobile application with Firebase for real-time database 
        integration, instant synchronization, and an admin dashboard to manage users, service requests, and 
        operations.
        Developed a multilingual, AI-powered chatbot for user support, and integrated embedded video tutorials 
        to provide step-by-step repair and maintenance guidance`,

      image: "/Picture1.png",
      technologies: ["Flutter", "Dart", "Firebase", "GeminiAPI"],
      liveUrl: "#",
      githubUrl: "https://github.com/AmmarYasser3788",
    },
    {
      title: "E-Commerce Store Web App",
      description:
        `
         Developed Online StoreFlow, a React-based web application for managing products and users, including 
         CRUD operations, pagination, and category-based filtering.
         Implemented a clean architecture with separate API, logic, and UI layers, using React Router DOM for 
        navigation and Tailwind CSS for responsive design.`,
      image: "/store.png",
      technologies: ["React", "JavaScript", "FakeStoreAPI", "TailwindCSS"],
      liveUrl: "#",
      githubUrl: "https://github.com/AmmarYasser3788/store1",
    },
    {
      title: "Weather Dashboard",
      description:
        `
         Built a React-based weather application that integrates the OpenWeatherMap API to fetch real-time 
         weather data by location (temperature, humidity, and conditions).
         Designed a responsive UI with clean layouts for seamless use across devices.`,
      image: "/wethear-app.jpeg",
      technologies: ["React.js", "OpenWeather API", "Tailwind"],
      liveUrl: "",
      githubUrl: "https://github.com/AmmarYasser3788/Weather-App",
    },
    {
      title: " CV Generator Web App",
      description:
        `Developed a dynamic CV generator web app using React with modular form components, an expandable 
 sidebar, and Tailwind CSS for responsive, clean UI/UX.
 Implemented PDF export functionality with jsPDF, enabling users to download their generated CVs easily.`,
      image: "/cv-generator.png",
      technologies: ["React.js", "JsPDF", "JavaScript", "inline styling"],
      liveUrl: "#",
      githubUrl: "https://github.com/AmmarYasser3788/CV-Generator",
    },

    // {
    //   title: "Portfolio Website",
    //   description:
    //     "A modern, responsive portfolio website showcasing projects and skills with smooth animations and optimized performance.",
    //   image: "/placeholder.svg?height=300&width=500&text=Portfolio+Website",
    //   technologies: ["Next.js", "Framer Motion", "Tailwind CSS", "Vercel"],
    //   liveUrl: "#",
    //   githubUrl: "",
    // },
  ]

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Featured Projects</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">A showcase of my recent work and personal projects</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-slate-800/50 border-slate-700 overflow-hidden group hover:bg-slate-800/70 transition-all duration-300"
            >
              <div className="relative overflow-hidden w-full aspect-[16/9] group">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>


              <CardHeader>
                <CardTitle className="text-white text-xl">{project.title}</CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-gray-400">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded text-sm">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 pt-4">
                  {/*                   
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-gray-600 text-gray-300 hover:bg-gray-800 bg-transparent"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Button> */}


                  <a href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-gray-600 text-gray-300 hover:bg-gray-800 bg-transparent"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
