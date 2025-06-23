"use client"

import { useRef, useState } from "react"
import { Mail, Phone, MapPin, Github, Globe, Download, ArrowLeft, Loader2, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useToast } from "@/components/ui/use-toast"
import { jsPDF } from "jspdf"

export default function CVPage() {
  const { toast } = useToast()
  const cvRef = useRef<HTMLDivElement>(null)
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false)

  // Function to handle PDF download with improved quality
  const handleDownload = async () => {
    if (!cvRef.current) return

    setIsGeneratingPDF(true)
    toast({
      title: "Generating PDF",
      description: "Please wait while we prepare your CV...",
      duration: 3000,
    })

    try {
      // Create a direct PDF using jsPDF
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
      })

      // A4 dimensions
      const pageWidth = 210
      const pageHeight = 297
      const margin = 15
      const contentWidth = pageWidth - margin * 2

      // Function to add header to each page
      const addHeader = (pageNum) => {
        if (pageNum > 1) {
          // Only add name header to pages after the first
          pdf.setFont("helvetica", "bold")
          pdf.setFontSize(10)
          pdf.text("MOHAMED EDDAHBY - CV", margin, margin)
          pdf.setDrawColor(200, 200, 200)
          pdf.setLineWidth(0.3)
          pdf.line(margin, margin + 2, pageWidth - margin, margin + 2)
          return margin + 10 // Return starting Y position after header
        }
        return margin // Return starting Y position for first page
      }

      // Track current position and page
      let currentY = margin + 10
      let currentPage = 1

      // Function to check if we need a page break
      const checkPageBreak = (requiredSpace) => {
        if (currentY + requiredSpace > pageHeight - margin) {
          pdf.addPage()
          currentPage++
          currentY = addHeader(currentPage)
          return true
        }
        return false
      }

      // Set font styles for header
      pdf.setFont("helvetica", "bold")
      pdf.setFontSize(16)
      pdf.setTextColor(0, 0, 0)

      // Header
      pdf.text("MOHAMED EDDAHBY", margin, currentY)
      currentY += 8

      pdf.setFont("helvetica", "normal")
      pdf.setFontSize(12)
      pdf.text("Full Stack Web Developer", margin, currentY)
      currentY += 10

      // Contact information
      pdf.setFontSize(10)

      // Create two columns for contact info
      const leftColX = margin
      const rightColX = margin + contentWidth / 2 + 5

      pdf.text("Email:", leftColX, currentY)
      pdf.text("eddahby.contact@gmail.com", leftColX + 20, currentY)

      pdf.text("Phone:", rightColX, currentY)
      pdf.text("+212 653 7604 74", rightColX + 20, currentY)
      currentY += 6

      pdf.text("Location:", leftColX, currentY)
      pdf.text("Kelaat M'Gouna, Morocco", leftColX + 20, currentY)

      pdf.text("GitHub:", rightColX, currentY)
      pdf.text("github.com/mohamededdahby", rightColX + 20, currentY)
      currentY += 6

      pdf.text("LinkedIn:", leftColX, currentY)
      pdf.text("linkedin.com/in/mohamed-eddahby", leftColX + 20, currentY)

      pdf.text("Website:", rightColX, currentY)
      pdf.text("mohamededdahby.com", rightColX + 20, currentY)
      currentY += 12

      // Horizontal line
      pdf.setDrawColor(200, 200, 200)
      pdf.setLineWidth(0.5)
      pdf.line(margin, currentY, pageWidth - margin, currentY)
      currentY += 8

      // Professional Summary
      pdf.setFont("helvetica", "bold")
      pdf.setFontSize(12)
      pdf.text("PROFESSIONAL SUMMARY", margin, currentY)
      currentY += 6

      // Horizontal line
      pdf.setDrawColor(200, 200, 200)
      pdf.setLineWidth(0.3)
      pdf.line(margin, currentY, pageWidth - margin, currentY)
      currentY += 6

      // Summary text
      pdf.setFont("helvetica", "normal")
      pdf.setFontSize(10)
      const summaryText =
        "Full Stack Developer with 4+ years of experience building responsive web applications. Specialized in React, Next.js, and Node.js with strong focus on performance optimization and clean code. Passionate about creating intuitive user experiences and solving complex problems through innovative solutions. Proven track record of delivering high-quality projects on time and exceeding client expectations."

      // Split text into multiple lines
      const summaryLines = pdf.splitTextToSize(summaryText, contentWidth)
      pdf.text(summaryLines, margin, currentY)
      currentY += summaryLines.length * 5 + 8

      // Check for page break
      checkPageBreak(30)

      // Technical Skills
      pdf.setFont("helvetica", "bold")
      pdf.setFontSize(12)
      pdf.text("TECHNICAL SKILLS", margin, currentY)
      currentY += 6

      // Horizontal line
      pdf.setDrawColor(200, 200, 200)
      pdf.setLineWidth(0.3)
      pdf.line(margin, currentY, pageWidth - margin, currentY)
      currentY += 6

      // Skills
      pdf.setFont("helvetica", "bold")
      pdf.setFontSize(10)
      pdf.text("Frontend Development:", margin, currentY)
      pdf.setFont("helvetica", "normal")
      const frontendSkills = "React.js, Next.js, TypeScript, JavaScript, HTML5, CSS3, Tailwind CSS, Framer Motion"
      const frontendLines = pdf.splitTextToSize(frontendSkills, contentWidth - 45)
      pdf.text(frontendLines, margin + 45, currentY)
      currentY += frontendLines.length * 5 + 2

      pdf.setFont("helvetica", "bold")
      pdf.text("Backend Development:", margin, currentY)
      pdf.setFont("helvetica", "normal")
      const backendSkills = "Node.js, Express.js, RESTful APIs, GraphQL, Java, JEE"
      const backendLines = pdf.splitTextToSize(backendSkills, contentWidth - 45)
      pdf.text(backendLines, margin + 45, currentY)
      currentY += backendLines.length * 5 + 2

      pdf.setFont("helvetica", "bold")
      pdf.text("Databases:", margin, currentY)
      pdf.setFont("helvetica", "normal")
      const databaseSkills = "MongoDB, PostgreSQL, MySQL, Firebase"
      pdf.text(databaseSkills, margin + 45, currentY)
      currentY += 5 + 2

      pdf.setFont("helvetica", "bold")
      pdf.text("DevOps & Tools:", margin, currentY)
      pdf.setFont("helvetica", "normal")
      const devopsSkills = "Git, GitHub, GitLab, Docker, AWS, CI/CD, Jest, Prisma"
      const devopsLines = pdf.splitTextToSize(devopsSkills, contentWidth - 45)
      pdf.text(devopsLines, margin + 45, currentY)
      currentY += devopsLines.length * 5 + 2

      pdf.setFont("helvetica", "bold")
      pdf.text("Languages:", margin, currentY)
      pdf.setFont("helvetica", "normal")
      const languages = "Arabic (Native), English (Fluent), French (Advanced), Tamazight (Native)"
      const languageLines = pdf.splitTextToSize(languages, contentWidth - 45)
      pdf.text(languageLines, margin + 45, currentY)
      currentY += languageLines.length * 5 + 8

      // Check for page break
      checkPageBreak(40)

      // Professional Experience
      pdf.setFont("helvetica", "bold")
      pdf.setFontSize(12)
      pdf.text("PROFESSIONAL EXPERIENCE", margin, currentY)
      currentY += 6

      // Horizontal line
      pdf.setDrawColor(200, 200, 200)
      pdf.setLineWidth(0.3)
      pdf.line(margin, currentY, pageWidth - margin, currentY)
      currentY += 6

      // Job 1
      pdf.setFont("helvetica", "bold")
      pdf.setFontSize(10)
      pdf.text("Web Developer", margin, currentY)
      pdf.setFont("helvetica", "normal")
      pdf.text("2022 - Present", pageWidth - margin - 30, currentY)
      currentY += 5

      pdf.setFont("helvetica", "italic")
      pdf.text("Digital Innovations", margin, currentY)
      pdf.text("Essaouira, Morocco", pageWidth - margin - 35, currentY)
      currentY += 6

      // Achievements
      pdf.setFont("helvetica", "normal")
      const job1Achievements = [
        "Built 15+ client websites with modern technologies",
        "Integrated payment gateways and third-party APIs",
        "Improved website accessibility to meet WCAG standards",
        "Collaborated with designers to implement responsive UI components",
      ]

      job1Achievements.forEach((achievement) => {
        // Check for page break before each bullet point
        checkPageBreak(6)

        pdf.text("•", margin, currentY)
        const achievementLines = pdf.splitTextToSize(achievement, contentWidth - 10)
        pdf.text(achievementLines, margin + 5, currentY)
        currentY += achievementLines.length * 5
      })
      currentY += 5

      // Check for page break
      checkPageBreak(30)

      // Job 2
      pdf.setFont("helvetica", "bold")
      pdf.text("Freelance Web Developer", margin, currentY)
      pdf.setFont("helvetica", "normal")
      pdf.text("2020 - 2022", pageWidth - margin - 30, currentY)
      currentY += 5

      pdf.setFont("helvetica", "italic")
      pdf.text("Self-employed", margin, currentY)
      pdf.text("Morocco", pageWidth - margin - 20, currentY)
      currentY += 6

      // Achievements
      pdf.setFont("helvetica", "normal")
      const job2Achievements = [
        "Delivered projects on time and within budget for 10+ clients",
        "Achieved 95% client satisfaction rate",
        "Specialized in e-commerce solutions with payment integration",
        "Provided ongoing maintenance and support",
      ]

      job2Achievements.forEach((achievement) => {
        // Check for page break before each bullet point
        checkPageBreak(6)

        pdf.text("•", margin, currentY)
        const achievementLines = pdf.splitTextToSize(achievement, contentWidth - 10)
        pdf.text(achievementLines, margin + 5, currentY)
        currentY += achievementLines.length * 5
      })
      currentY += 8

      // Check for page break
      checkPageBreak(40)

      // Key Projects
      pdf.setFont("helvetica", "bold")
      pdf.setFontSize(12)
      pdf.text("KEY PROJECTS", margin, currentY)
      currentY += 6

      // Horizontal line
      pdf.setDrawColor(200, 200, 200)
      pdf.setLineWidth(0.3)
      pdf.line(margin, currentY, pageWidth - margin, currentY)
      currentY += 6

      // Project 1
      pdf.setFont("helvetica", "bold")
      pdf.setFontSize(10)
      pdf.text("Postepea", margin, currentY)
      currentY += 5

      pdf.setFont("helvetica", "italic")
      pdf.text("Technologies: Next.js, Tailwind CSS, NextAuth, JavaScript", margin, currentY)
      currentY += 5

      pdf.setFont("helvetica", "normal")
      const project1Desc =
        "A vibrant world of posts and articles built with Next.js and Tailwind CSS, secured by NextAuth."
      const project1Lines = pdf.splitTextToSize(project1Desc, contentWidth)
      pdf.text(project1Lines, margin, currentY)
      currentY += project1Lines.length * 5

      const project1Achievements = [
        "Implemented secure authentication system with NextAuth",
        "Created responsive design that works across all devices",
        "Built a robust content management system for articles",
      ]

      project1Achievements.forEach((achievement) => {
        // Check for page break before each bullet point
        checkPageBreak(6)

        pdf.text("•", margin, currentY)
        const achievementLines = pdf.splitTextToSize(achievement, contentWidth - 10)
        pdf.text(achievementLines, margin + 5, currentY)
        currentY += achievementLines.length * 5
      })
      currentY += 5

      // Check for page break
      checkPageBreak(30)

      // Project 2
      pdf.setFont("helvetica", "bold")
      pdf.text("Expense Tracker", margin, currentY)
      currentY += 5

      pdf.setFont("helvetica", "italic")
      pdf.text("Technologies: React, Redux, JavaScript", margin, currentY)
      currentY += 5

      pdf.setFont("helvetica", "normal")
      const project2Desc =
        "React-based application with Redux state management for tracking expenses with a user-friendly interface."
      const project2Lines = pdf.splitTextToSize(project2Desc, contentWidth)
      pdf.text(project2Lines, margin, currentY)
      currentY += project2Lines.length * 5

      const project2Achievements = [
        "Developed intuitive user interface for expense management",
        "Implemented state management with Redux for better data flow",
        "Created data visualization for expense analysis",
      ]

      project2Achievements.forEach((achievement) => {
        // Check for page break before each bullet point
        checkPageBreak(6)

        pdf.text("•", margin, currentY)
        const achievementLines = pdf.splitTextToSize(achievement, contentWidth - 10)
        pdf.text(achievementLines, margin + 5, currentY)
        currentY += achievementLines.length * 5
      })
      currentY += 5

      // Check for page break
      checkPageBreak(30)

      // Project 3
      pdf.setFont("helvetica", "bold")
      pdf.text("Fitness Explorer", margin, currentY)
      currentY += 5

      pdf.setFont("helvetica", "italic")
      pdf.text("Technologies: React, JavaScript, API Integration", margin, currentY)
      currentY += 5

      pdf.setFont("helvetica", "normal")
      const project3Desc =
        "A React web app helping users discover and learn exercises for every body part with detailed info and videos."
      const project3Lines = pdf.splitTextToSize(project3Desc, contentWidth)
      pdf.text(project3Lines, margin, currentY)
      currentY += project3Lines.length * 5

      const project3Achievements = [
        "Integrated with external APIs for exercise data",
        "Implemented search and filtering functionality",
        "Created responsive design for mobile and desktop users",
      ]

      project3Achievements.forEach((achievement) => {
        // Check for page break before each bullet point
        checkPageBreak(6)

        pdf.text("•", margin, currentY)
        const achievementLines = pdf.splitTextToSize(achievement, contentWidth - 10)
        pdf.text(achievementLines, margin + 5, currentY)
        currentY += achievementLines.length * 5
      })
      currentY += 8

      // Check for page break
      checkPageBreak(40)

      // Education
      pdf.setFont("helvetica", "bold")
      pdf.setFontSize(12)
      pdf.text("EDUCATION", margin, currentY)
      currentY += 6

      // Horizontal line
      pdf.setDrawColor(200, 200, 200)
      pdf.setLineWidth(0.3)
      pdf.line(margin, currentY, pageWidth - margin, currentY)
      currentY += 6

      pdf.setFont("helvetica", "bold")
      pdf.setFontSize(10)
      pdf.text("Bachelor of Computer Science", margin, currentY)
      pdf.setFont("helvetica", "normal")
      pdf.text("2020 - 2023", pageWidth - margin - 30, currentY)
      currentY += 5

      pdf.text("Height School of Technology Essaouira", margin, currentY)
      currentY += 5

      pdf.text("Specialized in web development and software engineering", margin, currentY)
      currentY += 5

      // Check for page break
      checkPageBreak(15)

      pdf.setFont("helvetica", "bold")
      pdf.text("Relevant coursework:", margin, currentY)
      pdf.setFont("helvetica", "normal")
      const coursework =
        "Data Structures & Algorithms, Database Systems, Web Development, Object-Oriented Programming, Software Engineering"
      const courseworkLines = pdf.splitTextToSize(coursework, contentWidth - 35)
      pdf.text(courseworkLines, margin + 35, currentY)
      currentY += courseworkLines.length * 5 + 8

      // Check for page break
      checkPageBreak(30)

      // Certifications
      pdf.setFont("helvetica", "bold")
      pdf.setFontSize(12)
      pdf.text("CERTIFICATIONS", margin, currentY)
      currentY += 6

      // Horizontal line
      pdf.setDrawColor(200, 200, 200)
      pdf.setLineWidth(0.3)
      pdf.line(margin, currentY, pageWidth - margin, currentY)
      currentY += 6

      pdf.setFont("helvetica", "normal")
      pdf.setFontSize(10)

      const certifications = [
        "AWS Certified Developer - Associate (2023)",
        "Meta Frontend Developer Professional Certificate (2022)",
        "MongoDB Certified Developer (2021)",
      ]

      certifications.forEach((cert) => {
        // Check for page break before each bullet point
        checkPageBreak(6)

        pdf.text("•", margin, currentY)
        const certLines = pdf.splitTextToSize(cert, contentWidth - 10)
        pdf.text(certLines, margin + 5, currentY)
        currentY += certLines.length * 5
      })

      // Add page numbers
      const totalPages = pdf.getNumberOfPages()
      for (let i = 1; i <= totalPages; i++) {
        pdf.setPage(i)
        pdf.setFont("helvetica", "normal")
        pdf.setFontSize(8)
        pdf.text(`Page ${i} of ${totalPages}`, pageWidth - margin - 20, pageHeight - 10)
      }

      // Save the PDF
      pdf.save("Mohamed_Eddahby_CV.pdf")

      toast({
        title: "Download Complete",
        description: "Your CV has been downloaded successfully!",
        duration: 3000,
      })
    } catch (error) {
      console.error("Error generating PDF:", error)
      toast({
        title: "Download Failed",
        description: "There was an error generating your PDF. Please try again.",
        variant: "destructive",
        duration: 5000,
      })
    } finally {
      setIsGeneratingPDF(false)
    }
  }

  // Real skills data from portfolio
  const skillCategories = [
    {
      name: "Frontend Development",
      skills: ["React.js", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Framer Motion"],
    },
    {
      name: "Backend Development",
      skills: ["Node.js", "Express.js", "RESTful APIs", "GraphQL", "Java", "JEE"],
    },
    {
      name: "Databases",
      skills: ["MongoDB", "PostgreSQL", "MySQL", "Firebase"],
    },
    {
      name: "DevOps & Tools",
      skills: ["Git", "GitHub", "GitLab", "Docker", "AWS", "CI/CD", "Jest", "Prisma"],
    },
  ]

  // Real projects data from portfolio
  const projects = [
    {
      title: "Postepea",
      description: "A vibrant world of posts and articles built with Next.js and Tailwind CSS, secured by NextAuth.",
      technologies: ["Next.js", "Tailwind CSS", "NextAuth", "JavaScript"],
      link: "https://github.com/mohamededdahby/Postepea",
      achievements: [
        "Implemented secure authentication system with NextAuth",
        "Created responsive design that works across all devices",
        "Built a robust content management system for articles",
      ],
    },
    {
      title: "Expense Tracker",
      description:
        "React-based application with Redux state management for tracking expenses with a user-friendly interface.",
      technologies: ["React", "Redux", "JavaScript"],
      link: "https://github.com/mohamededdahby/expense-tracker",
      achievements: [
        "Developed intuitive user interface for expense management",
        "Implemented state management with Redux for better data flow",
        "Created data visualization for expense analysis",
      ],
    },
    {
      title: "Fitness Explorer",
      description:
        "A React web app helping users discover and learn exercises for every body part with detailed info and videos.",
      technologies: ["React", "JavaScript", "API Integration"],
      link: "https://github.com/mohamededdahby/fitness_App",
      achievements: [
        "Integrated with external APIs for exercise data",
        "Implemented search and filtering functionality",
        "Created responsive design for mobile and desktop users",
      ],
    },
  ]

  // Real experience data from portfolio
  const experiences = [
    {
      title: "Web Developer",
      company: "Digital Innovations",
      location: "Essaouira, Morocco",
      period: "2022 - Present",
      description: "Developing and maintaining client websites using modern JavaScript frameworks.",
      achievements: [
        "Built 15+ client websites with modern technologies",
        "Integrated payment gateways and third-party APIs",
        "Improved website accessibility to meet WCAG standards",
        "Collaborated with designers to implement responsive UI components",
      ],
    },
    {
      title: "Freelance Web Developer",
      company: "Self-employed",
      location: "Morocco",
      period: "2020 - 2022",
      description: "Designed and developed websites for small businesses and startups.",
      achievements: [
        "Delivered projects on time and within budget for 10+ clients",
        "Achieved 95% client satisfaction rate",
        "Specialized in e-commerce solutions with payment integration",
        "Provided ongoing maintenance and support",
      ],
    },
  ]

  return (
    <div className="max-w-[800px] mx-auto my-8 p-8 bg-white text-black shadow-lg rounded-lg">
      {/* Controls - only visible on screen */}
      <div className="mb-6 flex flex-wrap gap-3 justify-between items-center button-container">
        <Link href="/">
          <Button variant="outline" size="sm" className="flex items-center gap-1">
            <ArrowLeft className="h-4 w-4" />
            Back to Portfolio
          </Button>
        </Link>
        <div className="flex gap-2">
          <Button onClick={handleDownload} className="bg-[#ff6b6b] hover:bg-[#ff5252]" disabled={isGeneratingPDF}>
            {isGeneratingPDF ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Generating...
              </>
            ) : (
              <>
                <Download className="mr-2 h-4 w-4" />
                Download PDF
              </>
            )}
          </Button>
        </div>
      </div>

      {/* CV Content - Using real data from portfolio */}
      <div ref={cvRef} className="space-y-6 cv-content">
        {/* Header - Simple and clear */}
        <header className="border-b-2 border-gray-300 pb-4">
          <h1 className="text-2xl font-bold">MOHAMED EDDAHBY</h1>
          <h2 className="text-lg font-medium text-gray-700">Full Stack Web Developer</h2>

          <div className="mt-3 text-sm space-y-1">
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-gray-600 flex-shrink-0" />
              <span>eddahby.contact@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-gray-600 flex-shrink-0" />
              <span>+212 653 7604 74</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-gray-600 flex-shrink-0" />
              <span>Kelaat M'Gouna, Tinghir, Morocco</span>
            </div>
            <div className="flex items-center gap-2">
              <Github className="h-4 w-4 text-gray-600 flex-shrink-0" />
              <span>github.com/mohamededdahby</span>
            </div>
            <div className="flex items-center gap-2">
              <Linkedin className="h-4 w-4 text-gray-600 flex-shrink-0" />
              <span>linkedin.com/in/mohamed-eddahby</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="h-4 w-4 text-gray-600 flex-shrink-0" />
              <span>mohamededdahby.com</span>
            </div>
          </div>
        </header>

        {/* Professional Summary - Concise and focused */}
        <section>
          <h3 className="text-lg font-bold uppercase mb-2 border-b-2 border-gray-300 pb-1">PROFESSIONAL SUMMARY</h3>
          <p className="text-sm">
            Full Stack Developer with 4+ years of experience building responsive web applications. Specialized in React,
            Next.js, and Node.js with strong focus on performance optimization and clean code. Passionate about creating
            intuitive user experiences and solving complex problems through innovative solutions. Proven track record of
            delivering high-quality projects on time and exceeding client expectations.
          </p>
        </section>

        {/* Skills - Organized in categories for easy scanning */}
        <section>
          <h3 className="text-lg font-bold uppercase mb-2 border-b-2 border-gray-300 pb-1">TECHNICAL SKILLS</h3>

          <div className="space-y-2 text-sm">
            {skillCategories.map((category, index) => (
              <div key={index}>
                <span className="font-semibold">{category.name}:</span> {category.skills.join(", ")}
              </div>
            ))}
            <div>
              <span className="font-semibold">Languages:</span> Arabic (Native), English (Fluent), French (Advanced),
              Tamazight (Native)
            </div>
          </div>
        </section>

        {/* Professional Experience - Clear and structured */}
        <section>
          <h3 className="text-lg font-bold uppercase mb-2 border-b-2 border-gray-300 pb-1">PROFESSIONAL EXPERIENCE</h3>

          <div className="space-y-4">
            {experiences.map((job, index) => (
              <div key={index}>
                <div className="flex justify-between items-baseline">
                  <h4 className="font-semibold">{job.title}</h4>
                  <span className="text-sm">{job.period}</span>
                </div>
                <div className="flex justify-between items-baseline">
                  <p className="text-sm italic">{job.company}</p>
                  <span className="text-sm">{job.location}</span>
                </div>
                <ul className="list-disc ml-5 mt-1 text-sm space-y-1">
                  {job.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Projects - Focused on key achievements */}
        <section>
          <h3 className="text-lg font-bold uppercase mb-2 border-b-2 border-gray-300 pb-1">KEY PROJECTS</h3>

          <div className="space-y-3">
            {projects.map((project, index) => (
              <div key={index}>
                <h4 className="font-semibold">{project.title}</h4>
                <p className="text-sm italic">Technologies: {project.technologies.join(", ")}</p>
                <p className="text-sm mt-1">{project.description}</p>
                <ul className="list-disc ml-5 mt-1 text-sm">
                  {project.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section>
          <h3 className="text-lg font-bold uppercase mb-2 border-b-2 border-gray-300 pb-1">EDUCATION</h3>

          <div>
            <div className="flex justify-between items-baseline">
              <h4 className="font-semibold">Bachelor of Computer Science</h4>
              <span className="text-sm">2020 - 2023</span>
            </div>
            <p className="text-sm">Height School of Technology Essaouira</p>
            <p className="text-sm mt-1">Specialized in web development and software engineering</p>
            <p className="text-sm mt-1">
              <span className="font-semibold">Relevant coursework:</span> Data Structures & Algorithms, Database
              Systems, Web Development, Object-Oriented Programming, Software Engineering
            </p>
          </div>
        </section>

        {/* Certifications - Simple list */}
        <section>
          <h3 className="text-lg font-bold uppercase mb-2 border-b-2 border-gray-300 pb-1">CERTIFICATIONS</h3>

          <ul className="list-disc ml-5 text-sm space-y-1">
            <li>AWS Certified Developer - Associate (2023)</li>
            <li>Meta Frontend Developer Professional Certificate (2022)</li>
            <li>MongoDB Certified Developer (2021)</li>
          </ul>
        </section>
      </div>
    </div>
  )
}
