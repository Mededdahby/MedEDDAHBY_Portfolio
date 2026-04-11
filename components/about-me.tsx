"use client";

import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  User,
  Phone,
  Mail,
  MapPin,
  Award,
  Database,
  Code,
  Terminal,
  GitBranch,
} from "lucide-react";
import Image from "next/image";

export default function AboutMe() {
  const [activeTab, setActiveTab] = useState<
    "personal" | "qualifications" | "skills"
  >("personal");
  const easeOut = [0.22, 1, 0.36, 1] as const;

  // Animation variants
  const fadeIn: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: easeOut,
      },
    }),
  };

  const tabVariants: Variants = {
    inactive: { scale: 1 },
    active: { scale: 1.02 },
    hover: { scale: 1.05 },
  };

  const blobVariants: Variants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: easeOut,
      },
    },
  };

  const listItemVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: easeOut,
      },
    }),
  };

  // Skill categories data
  const skillCategories = [
    {
      name: "Databases",
      icon: <Database className="text-[#B45309]" size={20} />,
      skills: ["MongoDB", "MySQL", "PostgreSQL", "Convex"],
    },
    {
      name: "Frameworks",
      icon: <Code className="text-[#B45309]" size={20} />,
      skills: ["Next.js", "React", "React Native", "JEE", "Express.js"],
    },
    {
      name: "Programming Languages",
      icon: <Terminal className="text-[#B45309]" size={20} />,
      skills: ["JavaScript", "TypeScript", "Java", "C", "C++", "Python"],
    },
    {
      name: "Styling",
      icon: <Terminal className="text-[#B45309]" size={20} />,
      skills: ["Css", "Tailwinds", "shadcnUI", "Bootstrap", "Material UI"],
    },
    {
      name: "Tools",
      icon: <GitBranch className="text-[#B45309]" size={20} />,
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
      className="relative overflow-hidden bg-[#FAF7F2] px-4 py-20 dark:bg-[#0C1014] md:px-8 lg:px-16"
    >
      {/* Background decorative elements */}
      <div className="absolute top-20 left-[10%] h-16 w-16 rounded-full bg-[#B45309]/8 blur-xl dark:bg-[#D97706]/14"></div>
      <div className="absolute bottom-20 right-[10%] h-24 w-24 rounded-full bg-[#111111]/4 blur-xl dark:bg-white/5"></div>

      <div className="max-w-7xl mx-auto">
        <div className="flex justify-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 rounded-lg border border-[#111111]/10 bg-white/80 px-6 py-2 dark:border-white/10 dark:bg-white/5"
          >
            <div className="h-3 w-3 rounded-full bg-[#B45309] shadow-sm shadow-[#B45309]/20"></div>
            <h2 className="text-3xl font-bold text-[#111111] dark:text-white">
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
              <div className="absolute inset-0 bg-gradient-to-br from-[#B45309]/10 to-transparent mix-blend-normal"></div>

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
                className="absolute top-[20%] left-[30%] w-20 h-20 rounded-[40%_60%_60%_40%/60%_30%_70%_40%] bg-white/10 backdrop-blur-[2px] dark:bg-white/5"
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
                className="absolute bottom-[25%] right-[20%] h-16 w-16 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] bg-white/5 backdrop-blur-[2px] dark:bg-white/10"
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
              className="absolute h-[420px] w-[420px] border-2 border-dashed border-[#B45309]/20 backdrop-blur-sm dark:border-[#D97706]/25"
            />
          </motion.div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-8 inline-flex w-full max-w-md rounded-[20px] border border-[#111111]/10 bg-white/80 p-1.5 backdrop-blur-sm shadow-lg shadow-black/5 dark:border-white/10 dark:bg-white/5 dark:shadow-black/40"
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
                    ? "bg-[#111111] text-white shadow-md dark:bg-white dark:text-[#111111]"
                    : "text-[#334155] hover:text-[#B45309] dark:text-slate-300 dark:hover:text-[#D97706]"
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
                    ? "bg-[#111111] text-white shadow-md dark:bg-white dark:text-[#111111]"
                    : "text-[#334155] hover:text-[#B45309] dark:text-slate-300 dark:hover:text-[#D97706]"
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
                    ? "bg-[#111111] text-white shadow-md dark:bg-white dark:text-[#111111]"
                    : "text-[#334155] hover:text-[#B45309] dark:text-slate-300 dark:hover:text-[#D97706]"
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
                    className="mb-4 text-3xl font-bold text-[#111111] dark:text-white"
                  >
                    Unmatched Service Quality for Over 3 Years
                  </motion.h2>

                  <motion.p
                    custom={1}
                    variants={fadeIn}
                    initial="hidden"
                    animate="visible"
                    className="mb-6 text-[#334155] dark:text-slate-300"
                  >
                    I specialize in crafting intuitive websites with a focus on
                    user experience, interface systems, and workflow
                    automation that turns repeated tasks into cleaner product
                    flows.
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
                      <div className="flex h-10 w-10 items-center justify-center rounded-[30%_70%_70%_30%/30%_30%_70%_70%] bg-[#F3EEE6] shadow-sm dark:bg-white/10">
                        <User className="text-[#B45309]" size={18} />
                      </div>
                      <span className="text-[#111111] dark:text-white">
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
                      <div className="flex h-10 w-10 rotate-12 items-center justify-center rounded-[30%_70%_70%_30%/30%_30%_70%_70%] bg-[#F3EEE6] shadow-sm dark:bg-white/10">
                        <Phone className="text-[#B45309]" size={18} />
                      </div>
                      <span className="text-[#111111] dark:text-white">
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
                      <div className="flex h-10 w-10 -rotate-12 items-center justify-center rounded-[30%_70%_70%_30%/30%_30%_70%_70%] bg-[#F3EEE6] shadow-sm dark:bg-white/10">
                        <Mail className="text-[#B45309]" size={18} />
                      </div>
                      <span className="text-[#111111] dark:text-white">
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
                      <div className="flex h-10 w-10 rotate-6 items-center justify-center rounded-[30%_70%_70%_30%/30%_30%_70%_70%] bg-[#F3EEE6] shadow-sm dark:bg-white/10">
                        <Award className="text-[#B45309]" size={18} />
                      </div>
                      <span className="text-[#111111] dark:text-white">
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
                      <div className="flex h-10 w-10 -rotate-6 items-center justify-center rounded-[30%_70%_70%_30%/30%_30%_70%_70%] bg-[#F3EEE6] shadow-sm dark:bg-white/10">
                        <MapPin className="text-[#B45309]" size={18} />
                      </div>
                      <span className="text-[#111111] dark:text-white">
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
                    <h3 className="mb-2 font-medium text-[#B45309]">
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
                            className="rounded-[10px_20px_20px_10px] bg-[#F3EEE6] px-3 py-1 text-sm text-[#111111] dark:bg-white/10 dark:text-white"
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
                    className="mb-6 text-3xl font-bold text-[#111111] dark:text-white"
                  >
                    My Awesome Journey
                  </motion.h2>

                  <div className="relative border-l-2 border-[#B45309]/30 pl-6 dark:border-[#D97706]/40">
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
                        <h3 className="text-xl font-semibold text-[#111111] dark:text-white">
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
                            className="absolute left-[-12px] top-2 h-5 w-5 bg-gradient-to-br from-[#111111] to-[#B45309]"
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
                          <h4 className="text-lg font-medium text-[#111111] dark:text-white">
                            {item.degree}
                          </h4>
                          <p className="text-[#334155] dark:text-slate-300">
                            {item.school}
                          </p>
                          <p className="mt-1 text-slate-500 dark:text-slate-400">
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
                      className="text-3xl font-bold text-[#111111] dark:text-white"
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
                            className="flex h-8 w-8 items-center justify-center rounded-[30%_70%_70%_30%/30%_30%_70%_70%] bg-[#F3EEE6] shadow-sm dark:bg-white/10"
                            style={{
                              transform: `rotate(${categoryIndex * 10}deg)`,
                            }}
                          >
                            {category.icon}
                          </div>
                          <h3 className="text-xl font-semibold text-[#111111] dark:text-white">
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
                                backgroundColor: "rgba(180, 83, 9, 0.14)",
                                transition: { duration: 0.2 },
                              }}
                              className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-[#111111] shadow-sm dark:bg-white/10 dark:text-white"
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
