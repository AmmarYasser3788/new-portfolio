import { Card, CardContent } from "@/components/ui/card"
import { Calendar, MapPin } from "lucide-react"

export function Experience() {
  const experiences = [
    {
      title: "Frontend Developer Intern",
      company: "ITech Pro",
      location: "Giza",
      period: "7/2025 - Present",
      description:
        `
Gained hands-on experience in modern front-end development by learning and applying React.js, Next.js, and Tailwind CSS to build responsive and dynamic web applications. Strengthened skills in JavaScript (ES6+), component-based development, and version control using Git/GitHub.`,

      achievements: [
       "Built and styled reusable components with React and Tailwind CSS for responsive design.",
"Implemented client-side routing and navigation using Next.js.",
"Integrated APIs to display dynamic data and improve interactivity.",
"Applied Git/GitHub for collaboration, version control, and project management."
      ],
    },




    {
      title: "Frontend Developer Intern",
      company: "Elevvo pathways",
      location: "Remote",
      period: "7/2025 - 8/2025",
      description:
        "Developed responsive web applications in a remote setting using React.js, Next.js, TypeScript, and Tailwind CSS. Focused on building scalable front-end solutions with clean, maintainable code and modern design practices.",
      achievements: [
        "Built and optimized reusable React components for consistency and efficiency.",
        "Implemented robust form validation to improve usability and data accuracy",
        "Integrated external APIs to deliver dynamic, real-time features.",
      ],
    },
    {
      title: "Digital Transformation Intern",
      company: "Giza Systems",
      location: "New Cairo",
      period: "8/2023-9/2023",
      description:
        "Gained hands-on experience in business intelligence and process automation by developing interactive dashboards and reports with Power BI, automating workflows using UiPath, and managing data through SQL. Enhanced decision-making and efficiency through data-driven insights and streamlined processes.",
      achievements: [
        "Designed and deployed interactive Power BI dashboards and reports to improve data visualization and business insights.",
        "Automated repetitive business processes with UiPath, reducing manual effort and improving workflow efficiency.",
        "Executed SQL queries for data extraction, manipulation, and management, ensuring accuracy and reliability of datasets.",
      ],
    },
  ]

  return (
    <section id="experience" className="py-20 px-4 bg-slate-800/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Work Experience</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">My professional journey and key accomplishments</p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1">{exp.title}</h3>
                    <p className="text-purple-400 font-medium">{exp.company}</p>
                  </div>
                  <div className="flex flex-col md:items-end mt-2 md:mt-0">
                    <div className="flex items-center text-gray-400 mb-1">
                      <Calendar className="h-4 w-4 mr-1" />
                      {exp.period}
                    </div>
                    <div className="flex items-center text-gray-400">
                      <MapPin className="h-4 w-4 mr-1" />
                      {exp.location}
                    </div>
                  </div>
                </div>

                <p className="text-gray-300 mb-4">{exp.description}</p>

                <div className="space-y-2">
                  <h4 className="text-white font-medium">Key Achievements:</h4>
                  <ul className="space-y-1">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="text-gray-400 flex items-start">
                        <span className="text-purple-400 mr-2">•</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
