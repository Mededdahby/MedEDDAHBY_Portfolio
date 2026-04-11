"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  center?: boolean;
  className?: string;
}

export default function SectionTitle({
  title,
  subtitle,
  center = true,
  className = "",
}: SectionTitleProps) {
  return (
    <div className={cn(center && "text-center", "mb-16", className)}>
      <motion.span
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className={cn("eyebrow", center && "mx-auto")}
      >
        Portfolio Notes
      </motion.span>

      <motion.h2
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.05 }}
        className="mt-5 font-display text-4xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-5xl dark:text-white"
      >
        {title}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className={cn(
            "section-copy mt-5 max-w-2xl",
            center ? "mx-auto" : "mx-0"
          )}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
