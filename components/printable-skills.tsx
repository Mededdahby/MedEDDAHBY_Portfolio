"use client"

import { Database, Code, Terminal, GitBranch } from "lucide-react"

export default function PrintableSkills() {
  // Skill categories data
  const skillCategories = [
    {
      name: "Databases",
      icon: <Database className="text-[#ff6b6b]" size={20} />,
      skills: ["MongoDB", "MySQL", "PostgreSQL", "Firebase"],
    },
    {
      name: "Frameworks",
      icon: <Code className="text-[#ff6b6b]" size={20} />,
      skills: ["Next.js", "React", "React Native", "JEE", "Express.js"],
    },
    {
      name: "Programming Languages",
      icon: <Terminal className="text-[#ff6b6b]" size={20} />,
      skills: ["JavaScript", "TypeScript", "Java", "C", "C++", "Python"],
    },
    {
      name: "Others",
      icon: <GitBranch className="text-[#ff6b6b]" size={20} />,
      skills: ["Git", "GitHub", "GitLab", "Prisma", "Docker", "AWS"],
    },
  ]

  return (
    <div className="print-only p-8 max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#ff6b6b] mb-2">Mohamed Eddahby - Skills Summary</h1>
        <p className="text-gray-600">
          Full-stack web developer with expertise in modern web technologies and frameworks.
        </p>
      </div>

      <div className="space-y-8">
        {skillCategories.map((category) => (
          <div key={category.name} className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <div className="text-[#ff6b6b]">{category.icon}</div>
              <h2 className="text-xl font-bold text-gray-800">{category.name}</h2>
            </div>
            <div className="flex flex-wrap gap-2 ml-8">
              {category.skills.map((skill) => (
                <div key={skill} className="px-3 py-1 bg-gray-100 rounded-md text-gray-800 text-sm">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 pt-6 border-t border-gray-200">
        <div className="grid grid-cols-3 gap-4 text-sm text-gray-600">
          <div>
            <p className="font-semibold">Email:</p>
            <p>eddahby.contact@gmail.com</p>
          </div>
          <div>
            <p className="font-semibold">Phone:</p>
            <p>+212 653 7604 74</p>
          </div>
          <div>
            <p className="font-semibold">Location:</p>
            <p>Kelaat M'Gouna, Tinhgir, Morocco</p>
          </div>
        </div>
      </div>

      <div className="mt-12 text-center text-xs text-gray-400">
        <p>Generated from Mohamed Eddahby's portfolio website on {new Date().toLocaleDateString()}</p>
      </div>
    </div>
  )
}
