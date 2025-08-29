"use client";

import Link from "next/link";
import Image from "next/image";
import { Download } from "lucide-react";
import CountUp from "react-countup";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

import {
  RiBriefcase4Fill,
  RiTeamFill,
  RiTodoFill,
  RiArrowDownSLine,
  RiLinkedinFill,
  RiGithubFill,
  RiInstagramFill,
  RiTelegramFill,
  RiCloseLine,
  RiSendPlaneFill,
} from "react-icons/ri";
import Galaxy from "@/src/blocks/Backgrounds/Galaxy/Galaxy";

const socialIcons = [
  { path: "https://linkedin.com/in/mohamed-eddahby", name: <RiLinkedinFill /> },
  { path: "https://github.com/mohamededdahby", name: <RiGithubFill /> },
  { path: "https://instagram.com", name: <RiInstagramFill /> },
  { path: "https://telegram.org", name: <RiTelegramFill /> },
];

const Hero = () => {
  const statsRef = useRef(null);
  const isInView = useInView(statsRef, { once: true, amount: 0.3 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleImageClick = () => {
    setIsClicked(true);

    // Reset the click animation after it completes
    setTimeout(() => {
      setIsClicked(false);
      setIsExpanded(true);
    }, 800);
  };

  const closeExpandedView = () => {
    setIsExpanded(false);
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Layer */}
      <div className="absolute inset-0 -z-10">
        {/* Gradient for light/dark */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#f0f0ff] to-[#e0fff0] dark:from-[#0a0a20] dark:to-[#1a1a40] pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#fafafa] to-[#ffffff] opacity-50 dark:from-[#0a0a20] dark:to-[#1a1a40] pointer-events-none" />
        {/* Galaxy Animation */}
        <Galaxy
          mouseRepulsion={true}
          mouseInteraction={true}
          density={2}
          glowIntensity={0.2}
          saturation={0.8}
          hueShift={340}
        />
      </div>
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex justify-between gap-x-8">
          {/* Left side content */}
          <div className="flex max-w-[630px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-2xl uppercase font-semibold mb-4 text-[#ff6b6b] dark:text-[#ff6b6b] tracking-[4px]"
            >
              WEB DEVELOPER
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-[#1a1a40] dark:text-white"
            >
              Hello, my name is Mohamed EDDAHBY
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-[#4a4a80] dark:text-gray-300 mb-8 max-w-[490px] mx-auto xl:mx-0 font-serif font-bold"
            >
              Brief description with insights into myself, my vocational
              journey, and what I engage in professionally.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12"
            >
              {/* Contact Me Button - Styled to match the image */}
              <Link href="/contacts">
                <button className="flex items-center justify-center gap-2 bg-[#FF7B5F] hover:bg-[#ff6a4a] text-white py-3 px-6 rounded-full w-full md:w-auto transition-all">
                  <RiSendPlaneFill className="text-lg" />
                  <span>Contact me</span>
                </button>
              </Link>

              {/* Download CV Button - Updated to link to CV page */}
              <Link href="/cv" target="_blank">
                <button className="flex items-center justify-center gap-2 bg-[#1E1A2F] hover:bg-[#2a2640] text-white py-3 px-6 rounded-full w-full md:w-auto transition-all">
                  <span>Download CV</span>
                  <Download size={18} />
                </button>
              </Link>
            </motion.div>

            {/* Social icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex gap-x-6 mx-auto xl:mx-0 mt-2 justify-center xl:justify-start"
            >
              {socialIcons.map((icon, index) => {
                return (
                  <Link href={icon.path} key={index}>
                    <motion.div
                      className="text-[#1a1a40] dark:text-white text-[32px] hover:text-[#ff6b6b] dark:hover:text-[#ff6b6b] transition-all"
                      whileHover={{
                        scale: 1.2,
                        rotate: [0, 10, -10, 0],
                        transition: { duration: 0.5 },
                      }}
                    >
                      {icon.name}
                    </motion.div>
                  </Link>
                );
              })}
            </motion.div>
          </div>

          {/* Right side with blob, image and stats - Styled to match About section */}
          <div
            ref={statsRef}
            className="hidden lg:flex items-center justify-center relative w-[600px]"
          >
            {/* Container to center everything */}
            <div className="relative flex items-center justify-center w-[380px] h-[380px]">
              {/* Main blob with image - Matching the About section styling */}
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
                className="w-[380px] h-[380px] relative overflow-hidden shadow-lg bg-gradient-to-br from-[#ffcdb2] to-[#ff8a9d] dark:from-[#2d2d5b] dark:to-[#3d2d4b]"
                style={{
                  borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
                }}
              >
                {/* Image container */}
                <div
                  className="absolute inset-0 w-full h-full z-[100] cursor-pointer"
                  onClick={handleImageClick}
                >
                  <Image
                    src="/images/hero-image.jpeg"
                    alt="Mohamed Eddahby"
                    fill
                    className="object-cover object-center scale-[1.15]"
                  />

                  {/* Click hint overlay */}
                </div>

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#ff6b6b]/10 to-transparent mix-blend-normal"></div>

                {/* Inner decorative elements - Matching About section */}
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

              {/* Decorative outer rings - Matching About section */}
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

              {/* 1. Left State - Years of Experience */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={
                  isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                }
                transition={{ duration: 0.5 }}
                className="absolute left-[-80px] top-1/2 transform -translate-y-1/2 z-[100]"
              >
                <div className="bg-white dark:bg-white/90 rounded-xl shadow-md p-3 flex items-center gap-2 w-[130px]">
                  <div className="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center">
                    <RiBriefcase4Fill className="text-[#ff6b6b] text-lg" />
                  </div>
                  <div>
                    <div className="font-bold text-[#1a1a40] text-xl leading-tight">
                      {isInView ? (
                        <CountUp end={4} duration={2} start={0} />
                      ) : (
                        "0"
                      )}
                    </div>
                    <div className="text-[#6b6b9f] text-xs leading-tight">
                      Years Exp.
                    </div>
                  </div>
                </div>
                {/* Connecting line */}
                <div className="absolute top-1/2 right-0 w-12 h-[2px] bg-gradient-to-r from-transparent to-pink-300 dark:to-pink-500/70 transform translate-x-[5px] -translate-y-1/2"></div>
              </motion.div>

              {/* 2. Right State - Projects Completed */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={
                  isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }
                }
                transition={{ duration: 0.5, delay: 0.1 }}
                className="absolute right-[-80px] top-1/2 transform -translate-y-1/2 z-[100]"
              >
                <div className="bg-white dark:bg-white/90 rounded-xl shadow-md p-3 flex items-center gap-2 w-[130px]">
                  <div className="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center">
                    <RiTodoFill className="text-[#ff6b6b] text-lg" />
                  </div>
                  <div>
                    <div className="font-bold text-[#1a1a40] text-xl leading-tight">
                      {isInView ? (
                        <CountUp end={38} duration={2.5} start={0} />
                      ) : (
                        "0"
                      )}
                    </div>
                    <div className="text-[#6b6b9f] text-xs leading-tight">
                      Projects
                    </div>
                  </div>
                </div>
                {/* Connecting line */}
                <div className="absolute top-1/2 left-0 w-12 h-[2px] bg-gradient-to-l from-transparent to-pink-300 dark:to-pink-500/70 transform translate-x-[-5px] -translate-y-1/2"></div>
              </motion.div>

              {/* 3. Top State - Happy Customers */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }
                }
                transition={{ duration: 0.5, delay: 0.2 }}
                className="absolute top-[-60px] left-1/2 transform -translate-x-1/2 z-[100]"
              >
                <div className="bg-white dark:bg-white/90 rounded-xl shadow-md p-3 flex items-center gap-2 w-[130px]">
                  <div className="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center">
                    <RiTeamFill className="text-[#ff6b6b] text-lg" />
                  </div>
                  <div>
                    <div className="font-bold text-[#1a1a40] text-xl leading-tight">
                      {isInView ? (
                        <CountUp end={9} duration={3} start={0} />
                      ) : (
                        "0"
                      )}
                    </div>
                    <div className="text-[#6b6b9f] text-xs leading-tight">
                      Customers
                    </div>
                  </div>
                </div>
                {/* Connecting line */}
                <div className="absolute bottom-0 left-1/2 w-[2px] h-12 bg-gradient-to-t from-transparent to-pink-300 dark:to-pink-500/70 transform -translate-x-1/2 translate-y-[5px]"></div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="hidden md:flex absolute left-1/2 bottom-8 animate-bounce -translate-x-1/2">
          <RiArrowDownSLine className="text-3xl text-[#ff6b6b]" />
        </div>
      </div>

      {/* Expanded image view */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4"
            onClick={closeExpandedView}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
              className="relative max-w-4xl w-full bg-white/10 backdrop-blur-md rounded-[20px] overflow-hidden "
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-[3/4] md:aspect-[16/9] w-full z-[1000]">
                <Image
                  src="/images/hero-image.jpeg"
                  alt="Mohamed Eddahby"
                  fill
                  sizes="(max-width: 768px) 100vw, 800px"
                  className="object-cover"
                  style={{
                    objectPosition: "center",
                  }}
                />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Mohamed Eddahby
                </h3>
                <p className="text-gray-200">Web Developer</p>
              </div>

              <button
                onClick={closeExpandedView}
                className="absolute top-4 right-4 bg-black/30 text-white p-2 rounded-full hover:bg-black/50 transition-colors"
              >
                <RiCloseLine size={24} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Hero;
