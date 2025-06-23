"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion"
import { ExternalLink, Github, Search, Filter, X, ArrowLeft } from "lucide-react"
import SectionTitle from "@/components/section-title"

// Project data based on your GitHub repositories
const allProjects = [
  {
    id: 1,
    title: "Postepea",
    category: "Web Development",
    image: "/modern-blog-interface.png",
    description: "A vibrant world of posts and articles built with Next.js and Tailwind CSS, secured by NextAuth.",
    liveUrl: "https://postepea.vercel.app",
    sourceUrl: "https://github.com/mohamededdahby/Postepea",
    technologies: ["Next.js", "Tailwind CSS", "NextAuth", "JavaScript"],
    date: "2024-02-24",
  },
  {
    id: 2,
    title: "Expense Tracker",
    category: "Web Development",
    image: "/mobile-expense-dashboard.png",
    description:
      "React-based application with Redux state management for tracking expenses with a user-friendly interface.",
    liveUrl: "https://expense-tracker-demo.vercel.app",
    sourceUrl: "https://github.com/mohamededdahby/expense-tracker",
    technologies: ["React", "Redux", "JavaScript"],
    date: "2024-02-01",
  },
  {
    id: 3,
    title: "Islamic Learning Hub",
    category: "Web Development",
    image: "/islamic-learning-hub.png",
    description:
      "A passion project fostering Islamic knowledge through Quranic wisdom, Hadith insights, and a Mosque Finder.",
    liveUrl: "https://islamic-learning-hub.vercel.app",
    sourceUrl: "https://github.com/mohamededdahby/islamic-learning-hub",
    technologies: ["ASP.NET Core", "C#", ".NET Core", "CSS"],
    date: "2024-02-01",
  },
  {
    id: 4,
    title: "Virtual Mouse",
    category: "Desktop Application",
    image: "/gesture-controlled-interface.png",
    description:
      "A Python desktop tool for laptop users, enabling camera-based control with features like mouse movement, clicks, and screenshots.",
    liveUrl: "https://github.com/mohamededdahby/virtual-mouse",
    sourceUrl: "https://github.com/mohamededdahby/virtual-mouse",
    technologies: ["Python", "OpenCV", "NumPy"],
    date: "2024-02-01",
  },
  {
    id: 5,
    title: "Covid Statistics Chart",
    category: "Web Development",
    image: "/covid-dashboard-charts.png",
    description: "Interactive dashboard displaying COVID-19 statistics with charts and data visualization.",
    liveUrl: "https://covid-stats-chart.vercel.app",
    sourceUrl: "https://github.com/mohamededdahby/Covid-statics-chart",
    technologies: ["JavaScript", "Chart.js", "REST API"],
    date: "2024-01-30",
  },
  {
    id: 6,
    title: "Processor Simulation",
    category: "System Programming",
    image: "/digital-heart.png",
    description: "A simulation of processor operations and architecture implemented in C.",
    liveUrl: "https://github.com/mohamededdahby/processor-simulation",
    sourceUrl: "https://github.com/mohamededdahby/processor-simulation",
    technologies: ["C", "System Programming"],
    date: "2024-01-30",
  },
  {
    id: 7,
    title: "Mail Box",
    category: "Desktop Application",
    image: "/modern-mail-interface.png",
    description:
      "Secure, user-friendly Java app with Socket communication, Swing GUI, and MySQL database for mail management.",
    liveUrl: "https://github.com/mohamededdahby/Mail-box",
    sourceUrl: "https://github.com/mohamededdahby/Mail-box",
    technologies: ["Java", "Swing GUI", "MySQL", "Socket Programming"],
    date: "2024-01-29",
  },
  {
    id: 8,
    title: "Java Calculator",
    category: "Desktop Application",
    image: "/simple-calculator-app.png",
    description:
      "A Java Swing-based calculator with socket communication for performing calculations through client-server architecture.",
    liveUrl: "https://github.com/mohamededdahby/java_Calcutor",
    sourceUrl: "https://github.com/mohamededdahby/java_Calcutor",
    technologies: ["Java", "Swing", "Socket Programming"],
    date: "2024-01-29",
  },
  {
    id: 9,
    title: "Medical Center App",
    category: "Desktop Application",
    image: "/digital-medical-records.png",
    description:
      "Java application designed to manage and facilitate tasks within a medical center, utilizing a MySQL database for data storage.",
    liveUrl: "https://github.com/mohamededdahby/Medicale-Center-App",
    sourceUrl: "https://github.com/mohamededdahby/Medicale-Center-App",
    technologies: ["Java", "Swing", "MySQL"],
    date: "2024-01-28",
  },
  {
    id: 10,
    title: "Dice Game",
    category: "Web Development",
    image: "/virtual-dice-score.png",
    description:
      "Roll the virtual die, accumulate scores, and aim to surpass 10 for victory with this interactive game.",
    liveUrl: "https://dice-game-fun.vercel.app",
    sourceUrl: "https://github.com/mohamededdahby/diceGame",
    technologies: ["JavaScript", "HTML", "CSS"],
    date: "2024-01-26",
  },
  {
    id: 11,
    title: "Quiz Platform",
    category: "Web Development",
    image: "/digital-quiz-interface.png",
    description: "An interactive quiz platform built with React and Express.js for creating and taking quizzes.",
    liveUrl: "https://quiz-platform-demo.vercel.app",
    sourceUrl: "https://github.com/mohamededdahby/quizPlatforme",
    technologies: ["React", "Express.js", "JavaScript"],
    date: "2024-01-26",
  },
  {
    id: 12,
    title: "Fitness Explorer",
    category: "Web Development",
    image: "/fitness-app-demo.png",
    description:
      "A React web app helping users discover and learn exercises for every body part with detailed info and videos.",
    liveUrl: "https://fitness-explorer.vercel.app",
    sourceUrl: "https://github.com/mohamededdahby/fitness_App",
    technologies: ["React", "JavaScript", "API Integration"],
    date: "2024-01-26",
  },
  {
    id: 13,
    title: "Mosque Admin System",
    category: "Web Development",
    image: "/mosque-management-dashboard.png",
    description:
      "A digital hub for mosques, powered by ASP.NET Core MVC, streamlining contributor management, event scheduling, and financial tracking.",
    liveUrl: "https://mosque-admin.azurewebsites.net",
    sourceUrl: "https://github.com/mohamededdahby/Mosque_App",
    technologies: ["ASP.NET Core", "C#", "MVC"],
    date: "2024-01-26",
  },
  {
    id: 14,
    title: "Article Writer",
    category: "Web Development",
    image: "/collaborative-blogging-space.png",
    description:
      "A small blog that helps users write, edit, and delete articles and get ratings from readers, with admin functionality.",
    liveUrl: "https://article-writer-blog.vercel.app",
    sourceUrl: "https://github.com/mohamededdahby/Article_wirter",
    technologies: ["PHP", "MySQL", "HTML", "CSS"],
    date: "2022-12-02",
  },
]

// Get unique categories, technologies, and years for filters
const categories = [...new Set(allProjects.map((project) => project.category))]
const technologies = [...new Set(allProjects.flatMap((project) => project.technologies))]
const years = [...new Set(allProjects.map((project) => new Date(project.date).getFullYear()))].sort((a, b) => b - a)

// Project Card component with 3D effect
function ProjectCard3D({ project, index }) {
  const cardRef = useRef(null)
  const [isHovered, setIsHovered] = useState(false)

  // Mouse position values for 3D effect
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  // Transform mouse position into rotation values
  const rotateX = useTransform(y, [-100, 100], [10, -10])
  const rotateY = useTransform(x, [-100, 100], [-10, 10])

  const floatingX = useTransform(x, [-100, 100], [-10, 30])
  const floatingY = useTransform(y, [-100, 100], [-30, 10])

  const floatingX2 = useTransform(x, [-100, 100], [10, -20])
  const floatingY2 = useTransform(y, [-100, 100], [20, -20])

  // Handle mouse move for 3D effect
  const handleMouseMove = (e) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    x.set(e.clientX - centerX)
    y.set(e.clientY - centerY)
  }

  // Reset position when mouse leaves
  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
    setIsHovered(false)
  }

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="h-full"
      style={{ perspective: 1000 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        transition={{
          type: "spring",
          damping: 20,
          stiffness: 300,
        }}
        className="bg-white dark:bg-gray-800/50 rounded-xl overflow-hidden shadow-lg h-full transform-gpu"
      >
        <div className="p-6 flex flex-col h-full">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-xl font-bold text-gray-800 dark:text-white">{project.title}</h3>
            <span className="text-sm bg-[#ff6b6b]/10 text-[#ff6b6b] px-3 py-1 rounded-full">{project.category}</span>
          </div>

          <div className="relative aspect-video mb-4 overflow-hidden rounded-lg group">
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              width={500}
              height={300}
              className="object-cover w-full h-full transition-transform duration-700 ease-in-out group-hover:scale-110"
            />

            {/* Overlay that appears on hover */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex gap-3">
                <Button size="sm" className="bg-white text-gray-800 hover:bg-gray-100 rounded-full" asChild>
                  <Link href={project.liveUrl} target="_blank" className="flex items-center gap-1">
                    <ExternalLink size={14} />
                    <span>Live Demo</span>
                  </Link>
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="bg-transparent border-white text-white hover:bg-white/20 rounded-full"
                  asChild
                >
                  <Link href={project.sourceUrl} target="_blank" className="flex items-center gap-1">
                    <Github size={14} />
                    <span>Source</span>
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>

          <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">{project.description}</p>

          <div className="flex flex-wrap gap-2 mt-auto">
            {project.technologies.map((tech, techIndex) => (
              <span
                key={techIndex}
                className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700/50 text-gray-600 dark:text-gray-300 rounded-md"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="text-sm text-gray-500 dark:text-gray-400 mt-4">
            {new Date(project.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
            })}
          </div>
        </div>

        {/* 3D effect elements */}
        <motion.div
          className="absolute inset-0 opacity-0 bg-gradient-to-tr from-white/0 via-white/30 to-white/0 pointer-events-none"
          animate={{
            opacity: isHovered ? 0.5 : 0,
            left: isHovered ? "100%" : "-100%",
          }}
          transition={{
            duration: 1.5,
            ease: "easeInOut",
          }}
        />

        {/* 3D floating elements */}
        {isHovered && (
          <>
            <motion.div
              className="absolute w-20 h-20 rounded-full bg-[#ff6b6b]/5 dark:bg-[#ff6b6b]/10 pointer-events-none"
              style={{
                x: floatingX,
                y: floatingY,
                top: "20%",
                right: "10%",
                transformStyle: "preserve-3d",
                translateZ: "40px",
              }}
            />
            <motion.div
              className="absolute w-16 h-16 rounded-full bg-blue-500/5 dark:bg-blue-500/10 pointer-events-none"
              style={{
                x: floatingX2,
                y: floatingY2,
                bottom: "20%",
                left: "10%",
                transformStyle: "preserve-3d",
                translateZ: "30px",
              }}
            />
          </>
        )}
      </motion.div>
    </motion.div>
  )
}

export default function ProjectsPage() {
  const [filteredProjects, setFilteredProjects] = useState(allProjects)
  const [searchTerm, setSearchTerm] = useState("")
  const [filters, setFilters] = useState({
    category: "",
    technology: "",
    year: "",
  })
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  // Apply filters when they change
  useEffect(() => {
    let result = allProjects

    // Apply search term
    if (searchTerm) {
      const term = searchTerm.toLowerCase()
      result = result.filter(
        (project) =>
          project.title.toLowerCase().includes(term) ||
          project.description.toLowerCase().includes(term) ||
          project.technologies.some((tech) => tech.toLowerCase().includes(term)),
      )
    }

    // Apply category filter
    if (filters.category) {
      result = result.filter((project) => project.category === filters.category)
    }

    // Apply technology filter
    if (filters.technology) {
      result = result.filter((project) => project.technologies.includes(filters.technology))
    }

    // Apply year filter
    if (filters.year) {
      const year = Number.parseInt(filters.year)
      result = result.filter((project) => new Date(project.date).getFullYear() === year)
    }

    setFilteredProjects(result)
  }, [searchTerm, filters])

  // Clear all filters
  const clearFilters = () => {
    setSearchTerm("")
    setFilters({
      category: "",
      technology: "",
      year: "",
    })
  }

  return (
    <main className="pt-24 pb-20 bg-gradient-to-br from-[#f0f0ff] to-[#ffe0f0] dark:from-[#0a0a20] dark:to-[#1a1a40] min-h-screen px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <Button
            variant="ghost"
            size="sm"
            className="text-gray-600 dark:text-gray-300 hover:text-[#ff6b6b] dark:hover:text-[#ff6b6b]"
            asChild
          >
            <Link href="/" className="flex items-center gap-2">
              <ArrowLeft size={16} />
              <span>Back to Home</span>
            </Link>
          </Button>
        </div>

        <SectionTitle
          title="My Projects"
          subtitle="Explore my portfolio of web development, mobile app, and design projects. Each project represents my commitment to quality and innovation."
        />

        {/* Search and filter section */}
        <div className="mb-12 bg-white/80 dark:bg-gray-800/50 rounded-xl p-6 shadow-md">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search input */}
            <div className="relative w-full md:w-auto md:flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#ff6b6b]"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
                >
                  <X size={16} />
                </button>
              )}
            </div>

            {/* Filter toggle button (mobile) */}
            <Button
              variant="outline"
              size="sm"
              className="md:hidden w-full"
              onClick={() => setIsFilterOpen(!isFilterOpen)}
            >
              <Filter size={16} className="mr-2" />
              {isFilterOpen ? "Hide Filters" : "Show Filters"}
            </Button>

            {/* Desktop filters */}
            <div className="hidden md:flex items-center gap-4">
              {/* Category filter */}
              <select
                value={filters.category}
                onChange={(e) => setFilters({ ...filters, category: e.target.value })}
                className="px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#ff6b6b]"
              >
                <option value="">All Categories</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>

              {/* Technology filter */}
              <select
                value={filters.technology}
                onChange={(e) => setFilters({ ...filters, technology: e.target.value })}
                className="px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#ff6b6b]"
              >
                <option value="">All Technologies</option>
                {technologies.map((tech) => (
                  <option key={tech} value={tech}>
                    {tech}
                  </option>
                ))}
              </select>

              {/* Year filter */}
              <select
                value={filters.year}
                onChange={(e) => setFilters({ ...filters, year: e.target.value })}
                className="px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#ff6b6b]"
              >
                <option value="">All Years</option>
                {years.map((year) => (
                  <option key={year} value={year.toString()}>
                    {year}
                  </option>
                ))}
              </select>

              {/* Clear filters button */}
              {(filters.category || filters.technology || filters.year || searchTerm) && (
                <Button variant="ghost" size="sm" onClick={clearFilters} className="text-[#ff6b6b]">
                  <X size={16} className="mr-1" />
                  Clear
                </Button>
              )}
            </div>
          </div>

          {/* Mobile filters (collapsible) */}
          <AnimatePresence>
            {isFilterOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden overflow-hidden mt-4 space-y-3"
              >
                {/* Category filter */}
                <select
                  value={filters.category}
                  onChange={(e) => setFilters({ ...filters, category: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#ff6b6b]"
                >
                  <option value="">All Categories</option>
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>

                {/* Technology filter */}
                <select
                  value={filters.technology}
                  onChange={(e) => setFilters({ ...filters, technology: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#ff6b6b]"
                >
                  <option value="">All Technologies</option>
                  {technologies.map((tech) => (
                    <option key={tech} value={tech}>
                      {tech}
                    </option>
                  ))}
                </select>

                {/* Year filter */}
                <select
                  value={filters.year}
                  onChange={(e) => setFilters({ ...filters, year: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#ff6b6b]"
                >
                  <option value="">All Years</option>
                  {years.map((year) => (
                    <option key={year} value={year.toString()}>
                      {year}
                    </option>
                  ))}
                </select>

                {/* Clear filters button */}
                {(filters.category || filters.technology || filters.year || searchTerm) && (
                  <Button variant="ghost" size="sm" onClick={clearFilters} className="w-full text-[#ff6b6b]">
                    <X size={16} className="mr-1" />
                    Clear All Filters
                  </Button>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Results count */}
        <div className="mb-6 text-gray-600 dark:text-gray-300">
          Showing {filteredProjects.length} of {allProjects.length} projects
        </div>

        {/* Projects grid with 3D cards */}
        {filteredProjects.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <ProjectCard3D key={project.id} project={project} index={index} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">No projects found</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Try adjusting your filters or search term to find more projects.
              </p>
              <Button variant="outline" onClick={clearFilters} className="text-[#ff6b6b] border-[#ff6b6b]">
                Clear All Filters
              </Button>
            </motion.div>
          </div>
        )}
      </div>
    </main>
  )
}
