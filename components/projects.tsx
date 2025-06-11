"use client"

import type React from "react"

import Image from "next/image"
import Link from "next/link"
import { motion, useMotionValue, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useState, useRef } from "react"
import { ExternalLink, Github, ArrowRight } from "lucide-react"

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  // Featured projects from your GitHub
  const featuredProjects = [
    {
      id: 1,
      title: "Postepea",
      category: "Web Development",
      image: "/modern-blog-interface.png",
      description: "A vibrant world of posts and articles built with Next.js and Tailwind CSS, secured by NextAuth.",
      liveUrl: "https://postepea.vercel.app",
      sourceUrl: "https://github.com/mohamededdahby/Postepea",
      technologies: ["Next.js", "Tailwind CSS", "NextAuth", "JavaScript"],
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
    },
    {
      id: 3,
      title: "Fitness Explorer",
      category: "Web Development",
      image: "/fitness-app-demo.png",
      description:
        "A React web app helping users discover and learn exercises for every body part with detailed info and videos.",
      liveUrl: "https://fitness-explorer.vercel.app",
      sourceUrl: "https://github.com/mohamededdahby/fitness_App",
      technologies: ["React", "JavaScript", "API Integration"],
    },
  ]

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-br from-[#f0f0ff] to-[#ffe0f0] dark:from-[#0a0a20] dark:to-[#1a1a40] px-4 md:px-8 lg:px-16"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-3 mb-4 px-6 py-2 bg-gradient-to-r from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/10 rounded-lg mx-auto">
            <div className="w-3 h-3 rounded-full bg-[#ff6b6b] shadow-sm shadow-[#ff6b6b]/30"></div>
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Latest Projects</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mt-4">
            Explore my recent work and see how I've helped clients achieve their goals through innovative web solutions.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {featuredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              isHovered={hoveredIndex === index}
              setHovered={(isHovered) => setHoveredIndex(isHovered ? index : null)}
            />
          ))}
        </motion.div>

        <div className="mt-16 text-center">
          <Button asChild className="bg-[#ff6b6b] hover:bg-[#ff5252] text-white rounded-full px-8 group">
            <Link href="/projects" className="flex items-center gap-2">
              View All Projects
              <motion.span initial={{ x: 0 }} whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400 }}>
                <ArrowRight size={18} />
              </motion.span>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

interface ProjectCardProps {
  project: {
    id: number
    title: string
    category: string
    image: string
    description: string
    liveUrl: string
    sourceUrl: string
    technologies: string[]
  }
  index: number
  isHovered: boolean
  setHovered: (isHovered: boolean) => void
}

function ProjectCard({ project, index, isHovered, setHovered }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)

  // Define the item variant inside the component
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  // Mouse position values for 3D effect
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  // Transform mouse position into rotation values
  const rotateX = useTransform(y, [-100, 100], [10, -10])
  const rotateY = useTransform(x, [-100, 100], [-10, 10])

  // Handle mouse move for 3D effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
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
  }

  return (
    <motion.div
      ref={cardRef}
      variants={item}
      style={{
        perspective: 1000,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => {
        setHovered(false)
        handleMouseLeave()
      }}
      onMouseMove={handleMouseMove}
      className="relative h-full"
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
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
              className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
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
        </div>

        {/* Shine effect */}
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
      </motion.div>
    </motion.div>
  )
}
