import { Card, CardContent } from "@/components/ui/card"
import { Code, Palette, Zap } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">About Me</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Passionate frontend developer with experience creating exceptional digital experiences
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm a frontend developer who loves turning complex problems into simple, beautiful designs. My journey in
              web development , and I've been passionate about creating user-centered experiences
              ever since.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or
              sharing knowledge with the developer community through blog posts and mentoring.
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">Problem Solver</span>
              <span className="px-3 py-1 bg-pink-500/20 text-pink-300 rounded-full text-sm">Creative Thinker</span>
              <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">Team Player</span>
            </div>
          </div>

          <div className="grid gap-6">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Code className="h-8 w-8 text-purple-400 mr-3" />
                  <h3 className="text-xl font-semibold text-white">Clean Code</h3>
                </div>
                <p className="text-gray-400">
                  Writing maintainable, scalable, and efficient code that follows best practices and industry standards.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Palette className="h-8 w-8 text-pink-400 mr-3" />
                  <h3 className="text-xl font-semibold text-white">UI/UX Focus</h3>
                </div>
                <p className="text-gray-400">
                  Creating intuitive and visually appealing interfaces that provide exceptional user experiences.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Zap className="h-8 w-8 text-yellow-400 mr-3" />
                  <h3 className="text-xl font-semibold text-white">Performance</h3>
                </div>
                <p className="text-gray-400">
                  Optimizing applications for speed, accessibility, and seamless performance across all devices.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
