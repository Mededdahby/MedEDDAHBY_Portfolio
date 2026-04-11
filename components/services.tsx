"use client";

import { motion } from "framer-motion";
import { FileText, Smartphone, PenTool } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function Services() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  const services = [
    {
      icon: <FileText size={40} />,
      title: "Web Development",
      description:
        "We build websites using the latest technologies. Creating responsive and user-friendly interfaces that provide an excellent user experience.",
    },
    {
      icon: <Smartphone size={40} />,
      title: "Mobile Development",
      description:
        "We build mobile apps for iOS and Android. Creating native-like experiences with cross-platform technologies like React Native.",
    },
    {
      icon: <PenTool size={40} />,
      title: "Design",
      description:
        "We design beautiful and responsive websites. Creating visually appealing interfaces that engage users and drive conversions.",
    },
  ];

  return (
    <section
      id="services"
      className="bg-[#FAF7F2] px-4 py-20 dark:bg-[#0C1014] md:px-8 lg:px-16"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="mx-auto mb-4 inline-flex items-center gap-3 rounded-lg border border-[#111111]/10 bg-white/80 px-6 py-2 dark:border-white/10 dark:bg-white/5">
            <div className="h-3 w-3 rounded-full bg-[#B45309] shadow-sm shadow-[#B45309]/20"></div>
            <h2 className="text-3xl font-bold text-[#111111] dark:text-white">
              Services
            </h2>
          </div>
          <p className="mx-auto mt-4 max-w-2xl text-lg font-semibold text-[#334155] dark:text-slate-300">
            Providing high-quality development services to help businesses grow
            and succeed in the digital world.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{
                scale: 1.03,
                transition: { duration: 0.3 },
              }}
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
              className={cn(
                "relative overflow-hidden rounded-xl border border-[#111111]/10 bg-white/82 p-8 shadow-lg transition-all duration-300 dark:border-white/10 dark:bg-[#141a1f]/80",
                hoveredCard === index ? "shadow-xl" : "shadow-lg"
              )}
            >
              {/* Background gradient animation */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-[#F3EEE6] to-white opacity-0 dark:from-[#1a2026] dark:to-[#10151b]"
                animate={{
                  opacity: hoveredCard === index ? 1 : 0,
                }}
                transition={{ duration: 0.5 }}
              />

              {/* Floating particles */}
              {hoveredCard === index && (
                <>
                  <motion.div
                    className="absolute h-12 w-12 rounded-full bg-[#B45309]/8"
                    initial={{ x: -20, y: -20, opacity: 0 }}
                    animate={{
                      x: [-20, 20, -10],
                      y: [-20, -40, -20],
                      opacity: [0, 0.7, 0],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "loop",
                    }}
                  />
                  <motion.div
                    className="absolute right-10 bottom-10 h-8 w-8 rounded-full bg-[#111111]/5"
                    initial={{ x: 20, y: 20, opacity: 0 }}
                    animate={{
                      x: [20, -10, 20],
                      y: [20, 40, 20],
                      opacity: [0, 0.5, 0],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "loop",
                      delay: 0.5,
                    }}
                  />
                </>
              )}

              {/* Icon with animation */}
              <motion.div
                className="relative z-10 mb-6 inline-block text-[#B45309]"
                animate={
                  hoveredCard === index
                    ? {
                        y: [0, -8, 0],
                        rotate: [0, -5, 0, 5, 0],
                        scale: [1, 1.1, 1],
                      }
                    : {}
                }
                transition={{ duration: 1.5, ease: "easeInOut" }}
              >
                {service.icon}
              </motion.div>

              {/* Title with animation */}
              <motion.h3
                className="relative z-10 mb-4 text-xl font-bold text-[#111111] dark:text-white"
                animate={
                  hoveredCard === index ? { color: "#B45309" } : { color: "" }
                }
                transition={{ duration: 0.3 }}
              >
                {service.title}
              </motion.h3>

              {/* Description */}
              <p className="relative z-10 text-[#334155] dark:text-slate-300">
                {service.description}
              </p>

              {/* Bottom decoration line */}
              <motion.div
                className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#111111] to-[#B45309]"
                initial={{ width: "0%" }}
                animate={{
                  width: hoveredCard === index ? "100%" : "0%",
                }}
                transition={{ duration: 0.4 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
