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
      className="py-20 bg-gradient-to-br from-[#f0f0ff] to-[#934790] dark:from-[#0a0a20] dark:to-[#1a1a40] px-4 md:px-8 lg:px-16"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4 px-6 py-2 bg-gradient-to-r from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/10 rounded-lg mx-auto">
            <div className="w-3 h-3 rounded-full bg-[#BBDCE5] shadow-sm shadow-[#ff6b6b]/30"></div>
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
              Services
            </h2>
          </div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mt-4">
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
                "relative bg-white dark:bg-gray-800/50 rounded-xl p-8 shadow-lg transition-all duration-300 overflow-hidden",
                hoveredCard === index ? "shadow-xl" : "shadow-lg"
              )}
            >
              {/* Background gradient animation */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-pink-50 to-purple-50 dark:from-pink-900/10 dark:to-purple-900/5 opacity-0"
                animate={{
                  opacity: hoveredCard === index ? 1 : 0,
                }}
                transition={{ duration: 0.5 }}
              />

              {/* Floating particles */}
              {hoveredCard === index && (
                <>
                  <motion.div
                    className="absolute w-12 h-12 rounded-full bg-pink-100/30 dark:bg-pink-900/10"
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
                    className="absolute right-10 bottom-10 w-8 h-8 rounded-full bg-purple-100/30 dark:bg-purple-900/10"
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
                className="text-[#ff6b6b] mb-6 inline-block relative z-10"
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
                className="text-xl font-bold text-gray-800 dark:text-white mb-4 relative z-10"
                animate={
                  hoveredCard === index ? { color: "#ff6b6b" } : { color: "" }
                }
                transition={{ duration: 0.3 }}
              >
                {service.title}
              </motion.h3>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-300 relative z-10">
                {service.description}
              </p>

              {/* Bottom decoration line */}
              <motion.div
                className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#ff6b6b] to-[#ff8a9d]"
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
