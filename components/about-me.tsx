"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  GraduationCap,
  User,
  Phone,
  Mail,
  MapPin,
  Award,
  Database,
  Code,
  Terminal,
  GitBranch,
  Printer,
  Download,
} from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function AboutMe() {
  const [activeTab, setActiveTab] = useState("personal");
  const [isPrintView, setIsPrintView] = useState(false);
  const printableRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef(null);

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 1, y: 0 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  const tabVariants = {
    inactive: { scale: 1 },
    active: { scale: 1.02 },
    hover: { scale: 1.05 },
  };

  const blobVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  // Skill categories data
  const skillCategories = [
    {
      name: "Databases",
      icon: <Database className="text-[#ff6b6b]" size={20} />,
      skills: ["MongoDB", "MySQL", "PostgreSQL", "Convex"],
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
      name: "Styling",
      icon: <Terminal className="text-[#ff6b6b]" size={20} />,
      skills: ["Css", "Tailwinds", "shadcnUI", "Bootstrap", "Material UI"],
    },
    {
      name: "Tools",
      icon: <GitBranch className="text-[#ff6b6b]" size={20} />,
      skills: ["Git", "GitHub", "GitLab", "Prisma", "Postman", "Figma"],
    },
  ];

  const educationData = [
    {
      school: "School of Technology of Essaouira",
      degree:
        "Professional Bachelor’s Degree in Computer Systems and Software Engineering",
      year: "2023 - 2024",
    },
    {
      school: "School of Technology of Essaouira",
      degree: "University Diploma of Technology (DUT) in Computer Engineering",
      year: "2021 - 2023",
    },
    {
      school: "Molay Baamran High School, Kalaat M’gouna",
      degree: "Baccalaureate in Physical and Chemical Sciences",
      year: "2020 - 2021",
    },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-[#fafafa] to-[#ffffff] dark:from-[#0a0a20] dark:to-[#1a1a40] px-4 md:px-8 lg:px-16 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-20 left-[10%] w-16 h-16 bg-purple-300/20 dark:bg-purple-500/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-[10%] w-24 h-24 bg-blue-300/20 dark:bg-blue-500/10 rounded-full blur-xl"></div>

      <div className="max-w-7xl mx-auto">
        <div className="flex justify-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-6 py-2 bg-gradient-to-r from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/10 rounded-lg"
          >
            <div className="w-3 h-3 rounded-full bg-[#ff6b6b] shadow-sm shadow-[#ff6b6b]/30"></div>
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
              About me
            </h2>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Modified blob shape with image */}
          <motion.div
            variants={blobVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative flex justify-center"
          >
            {/* Main blob with image */}
            <motion.div
              animate={{
                borderRadius: [
                  "60% 40% 30% 70% / 60% 30% 70% 40%",
                  "30% 60% 70% 40% / 50% 60% 30% 60%",
                  "60% 40% 30% 70% / 60% 30% 70% 40%",
                ],
              }}
              transition={{
                duration: 8,
                ease: "easeInOut",
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
              className="w-[380px] h-[380px] relative overflow-hidden shadow-lg"
              style={{
                borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
              }}
            >
              {/* Image container */}
              <div className="absolute inset-0 w-full h-full z-[100]">
                <Image
                  src="/images/about-image.jpeg"
                  alt="About Mohamed Eddahby"
                  fill
                  className="object-cover object-center scale-[1.15]"
                />
              </div>

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#ff6b6b]/10 to-transparent mix-blend-normal"></div>

              {/* Inner decorative elements */}
              <motion.div
                animate={{
                  rotate: 360,
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 20,
                  ease: "linear",
                  repeat: Number.POSITIVE_INFINITY,
                }}
                className="absolute top-[20%] left-[30%] w-20 h-20 bg-white/10 rounded-[40%_60%_60%_40%/60%_30%_70%_40%] backdrop-blur-[2px]"
              />
              <motion.div
                animate={{
                  rotate: -360,
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 15,
                  ease: "linear",
                  repeat: Number.POSITIVE_INFINITY,
                }}
                className="absolute bottom-[25%] right-[20%] w-16 h-16 bg-white/5 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] backdrop-blur-[2px]"
              />
            </motion.div>

            {/* Decorative outer rings */}
            <motion.div
              animate={{
                rotate: [0, 360],
                borderRadius: [
                  "40% 60% 70% 30% / 40% 40% 60% 60%",
                  "60% 40% 30% 70% / 60% 30% 70% 40%",
                  "40% 60% 70% 30% / 40% 40% 60% 60%",
                ],
              }}
              transition={{
                duration: 20,
                ease: "linear",
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
              }}
              className="absolute w-[420px] h-[420px] border-2 border-dashed border-pink-300/40 dark:border-pink-500/20 backdrop-blur-sm"
            />
          </motion.div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white/80 dark:bg-white/5 backdrop-blur-sm rounded-[20px] p-1.5 inline-flex mb-8 w-full max-w-md shadow-lg shadow-pink-200/20 dark:shadow-pink-900/10"
            >
              <motion.button
                variants={tabVariants}
                initial="inactive"
                animate={activeTab === "personal" ? "active" : "inactive"}
                whileHover="hover"
                onClick={() => setActiveTab("personal")}
                className={cn(
                  "flex-1 px-6 py-3 rounded-[16px] text-sm font-medium transition-all",
                  activeTab === "personal"
                    ? "bg-gradient-to-r from-[#ff6b6b] to-[#ff8a9d] text-white shadow-md"
                    : "text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white"
                )}
              >
                Personal info
              </motion.button>
              <motion.button
                variants={tabVariants}
                initial="inactive"
                animate={activeTab === "qualifications" ? "active" : "inactive"}
                whileHover="hover"
                onClick={() => setActiveTab("qualifications")}
                className={cn(
                  "flex-1 px-6 py-3 rounded-[16px] text-sm font-medium transition-all",
                  activeTab === "qualifications"
                    ? "bg-gradient-to-r from-[#ff6b6b] to-[#ff8a9d] text-white shadow-md"
                    : "text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white"
                )}
              >
                Educations
              </motion.button>
              <motion.button
                variants={tabVariants}
                initial="inactive"
                animate={activeTab === "skills" ? "active" : "inactive"}
                whileHover="hover"
                onClick={() => setActiveTab("skills")}
                className={cn(
                  "flex-1 px-6 py-3 rounded-[16px] text-sm font-medium transition-all",
                  activeTab === "skills"
                    ? "bg-gradient-to-r from-[#ff6b6b] to-[#ff8a9d] text-white shadow-md"
                    : "text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white"
                )}
              >
                Skills
              </motion.button>
            </motion.div>

            <AnimatePresence mode="wait">
              {activeTab === "personal" && (
                <motion.div
                  key="personal"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-6"
                >
                  <motion.h2
                    custom={0}
                    variants={fadeIn}
                    initial="hidden"
                    animate="visible"
                    className="text-3xl font-bold text-gray-800 dark:text-white mb-4"
                  >
                    Unmatched Service Quality for Over 3 Years
                  </motion.h2>

                  <motion.p
                    custom={1}
                    variants={fadeIn}
                    initial="hidden"
                    animate="visible"
                    className="text-gray-600 dark:text-gray-300 mb-6"
                  >
                    I specialize in crafting intuitive websites with a focus on
                    user experience and user interface design, delivering a
                    seamless experience for your customers.
                  </motion.p>

                  <div className="space-y-4">
                    <motion.div
                      custom={2}
                      variants={fadeIn}
                      initial="hidden"
                      animate="visible"
                      className="flex items-center gap-4"
                      whileHover={{ x: 5, transition: { duration: 0.2 } }}
                    >
                      <div className="w-10 h-10 rounded-[30%_70%_70%_30%/30%_30%_70%_70%] bg-pink-100 dark:bg-pink-900/30 flex items-center justify-center shadow-sm">
                        <User className="text-[#ff6b6b]" size={18} />
                      </div>
                      <span className="text-gray-800 dark:text-white">
                        Mohamed EDDAHBY
                      </span>
                    </motion.div>

                    <motion.div
                      custom={3}
                      variants={fadeIn}
                      initial="hidden"
                      animate="visible"
                      className="flex items-center gap-4"
                      whileHover={{ x: 5, transition: { duration: 0.2 } }}
                    >
                      <div className="w-10 h-10 rounded-[30%_70%_70%_30%/30%_30%_70%_70%] bg-pink-100 dark:bg-pink-900/30 flex items-center justify-center shadow-sm rotate-12">
                        <Phone className="text-[#ff6b6b]" size={18} />
                      </div>
                      <span className="text-gray-800 dark:text-white">
                        +212 653 7604 74
                      </span>
                    </motion.div>

                    <motion.div
                      custom={4}
                      variants={fadeIn}
                      initial="hidden"
                      animate="visible"
                      className="flex items-center gap-4"
                      whileHover={{ x: 5, transition: { duration: 0.2 } }}
                    >
                      <div className="w-10 h-10 rounded-[30%_70%_70%_30%/30%_30%_70%_70%] bg-pink-100 dark:bg-pink-900/30 flex items-center justify-center shadow-sm -rotate-12">
                        <Mail className="text-[#ff6b6b]" size={18} />
                      </div>
                      <span className="text-gray-800 dark:text-white">
                        eddahby.contact@gmail.com
                      </span>
                    </motion.div>

                    <motion.div
                      custom={5}
                      variants={fadeIn}
                      initial="hidden"
                      animate="visible"
                      className="flex items-center gap-4"
                      whileHover={{ x: 5, transition: { duration: 0.2 } }}
                    >
                      <div className="w-10 h-10 rounded-[30%_70%_70%_30%/30%_30%_70%_70%] bg-pink-100 dark:bg-pink-900/30 flex items-center justify-center shadow-sm rotate-6">
                        <Award className="text-[#ff6b6b]" size={18} />
                      </div>
                      <span className="text-gray-800 dark:text-white">
                        Bachelor in Computer Systems and Software Engineering
                      </span>
                    </motion.div>

                    <motion.div
                      custom={6}
                      variants={fadeIn}
                      initial="hidden"
                      animate="visible"
                      className="flex items-center gap-4"
                      whileHover={{ x: 5, transition: { duration: 0.2 } }}
                    >
                      <div className="w-10 h-10 rounded-[30%_70%_70%_30%/30%_30%_70%_70%] bg-pink-100 dark:bg-pink-900/30 flex items-center justify-center shadow-sm -rotate-6">
                        <MapPin className="text-[#ff6b6b]" size={18} />
                      </div>
                      <span className="text-gray-800 dark:text-white">
                        Kelaat M'Gouna, Tinghir, morocco
                      </span>
                    </motion.div>
                  </div>

                  <motion.div
                    custom={7}
                    variants={fadeIn}
                    initial="hidden"
                    animate="visible"
                    className="mt-8"
                  >
                    <h3 className="text-[#ff6b6b] font-medium mb-2">
                      Language Skill
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {["Arabic", "English", "French", "Tamazight"].map(
                        (lang, index) => (
                          <motion.span
                            key={lang}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.7 + index * 0.1 }}
                            className="px-3 py-1 bg-pink-100 dark:bg-pink-900/20 text-gray-800 dark:text-white rounded-[10px_20px_20px_10px] text-sm"
                          >
                            {lang}
                          </motion.span>
                        )
                      )}
                    </div>
                  </motion.div>
                </motion.div>
              )}

              {activeTab === "qualifications" && (
                <motion.div
                  key="qualifications"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl font-bold text-gray-800 dark:text-white mb-6"
                  >
                    My Awesome Journey
                  </motion.h2>

                  <div className="relative pl-6 border-l-2 border-gradient-to-b from-[#ff6b6b] to-[#ff8a9d]/30">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className="flex items-start gap-2 mb-6"
                    >
                      {/* <div className="w-10 h-10 rounded-[30%_70%_70%_30%/30%_30%_70%_70%] bg-pink-100 dark:bg-pink-900/30 flex items-center justify-center shadow-sm rotate-12">
                        <GraduationCap className="text-[#ff6b6b]" size={18} />
                      </div> */}
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                          Education
                        </h3>
                      </div>
                    </motion.div>

                    <div>
                      {educationData.map((item, index) => (
                        <motion.div
                          key={index}
                          custom={index}
                          variants={listItemVariants}
                          initial="hidden"
                          animate="visible"
                          className="mb-8 relative pl-6"
                          whileHover={{ x: 5, transition: { duration: 0.2 } }}
                        >
                          {/* Blob Icon */}
                          <motion.div
                            className="absolute left-[-12px] top-2 w-5 h-5 bg-gradient-to-br from-[#ff6b6b] to-[#ff8a9d]"
                            style={{
                              borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
                              rotate: `${index * 15}deg`,
                            }}
                            whileHover={{
                              scale: 1.2,
                              rotate: `${index * 15 + 180}deg`,
                              transition: { duration: 0.3 },
                            }}
                          />

                          {/* Content */}
                          <h4 className="text-lg font-medium text-gray-800 dark:text-white">
                            {item.degree}
                          </h4>
                          <p className="text-gray-600 dark:text-gray-300">
                            {item.school}
                          </p>
                          <p className="text-gray-500 dark:text-gray-400 mt-1">
                            {item.year}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === "skills" && (
                <motion.div
                  key="skills"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-6"
                >
                  <div className="flex justify-between items-center mb-6">
                    <motion.h2
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className="text-3xl font-bold text-gray-800 dark:text-white"
                    >
                      My Skills
                    </motion.h2>

                    {/* <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex items-center gap-1 text-xs border-[#ff6b6b] text-[#ff6b6b] hover:bg-[#ff6b6b] hover:text-white"
                        onClick={handlePrint}
                      >
                        <Printer size={14} />
                        <span>Print</span>
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex items-center gap-1 text-xs border-[#ff6b6b] text-[#ff6b6b] hover:bg-[#ff6b6b] hover:text-white"
                        onClick={handleDownloadPDF}
                      >
                        <Download size={14} />
                        <span>PDF</span>
                      </Button>
                    </div> */}
                  </div>

                  <div className="space-y-8">
                    {skillCategories.map((category, categoryIndex) => (
                      <motion.div
                        key={category.name}
                        custom={categoryIndex}
                        variants={fadeIn}
                        initial="hidden"
                        animate="visible"
                        className="space-y-4"
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className="w-8 h-8 rounded-[30%_70%_70%_30%/30%_30%_70%_70%] bg-pink-100 dark:bg-pink-900/30 flex items-center justify-center shadow-sm"
                            style={{
                              transform: `rotate(${categoryIndex * 10}deg)`,
                            }}
                          >
                            {category.icon}
                          </div>
                          <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                            {category.name}
                          </h3>
                        </div>

                        <div className="flex flex-wrap gap-2 ml-4">
                          {category.skills.map((skill, skillIndex) => (
                            <motion.div
                              key={skill}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 0.2 + skillIndex * 0.05 }}
                              whileHover={{
                                scale: 1.05,
                                backgroundColor: "rgba(255, 107, 107, 0.2)",
                                transition: { duration: 0.2 },
                              }}
                              className="px-4 py-2 bg-white dark:bg-gray-800/50 rounded-lg shadow-sm text-gray-800 dark:text-white text-sm font-medium"
                            >
                              {skill}
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Hidden printable version */}
      <div id="printable-skills" className="hidden">
        <div className="skills-container">
          {skillCategories.map((category) => (
            <div key={category.name}>
              <h2>{category.name}</h2>
              <div className="skills-list">
                {category.skills.map((skill) => (
                  <div key={skill} className="skill-item">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
