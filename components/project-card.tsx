"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { Project } from "@/lib/projects";

interface ProjectCardProps {
  project: Project;
  index?: number;
  priority?: boolean;
  className?: string;
}

export default function ProjectCard({
  project,
  index = 0,
  priority = false,
  className,
}: ProjectCardProps) {
  const hasActions = Boolean(project.liveUrl || project.sourceUrl);

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      whileHover={{ y: -6 }}
      className={cn(
        "group relative overflow-hidden rounded-[32px] border border-white/50 bg-white/70 p-5 shadow-[0_30px_80px_-36px_rgba(15,23,42,0.4)] backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/70 dark:shadow-[0_30px_90px_-40px_rgba(2,6,23,0.92)]",
        className
      )}
    >
      <div
        className="absolute inset-x-6 top-5 h-28 rounded-full blur-3xl transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `linear-gradient(135deg, ${project.accent.from}, ${project.accent.to})`,
          opacity: 0.2,
        }}
      />

      <div className="relative z-10 flex h-full flex-col gap-5">
        <div className="flex flex-wrap items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500 dark:text-slate-300/80">
          <span
            className="rounded-full px-3 py-1 text-slate-900 dark:text-slate-950"
            style={{
              background: `linear-gradient(135deg, ${project.accent.from}, ${project.accent.to})`,
            }}
          >
            {project.status}
          </span>
          <span>{project.category}</span>
          <span className="h-1 w-1 rounded-full bg-current/40" />
          <span>{project.year}</span>
        </div>

        <div className="relative overflow-hidden rounded-[26px] border border-black/5 bg-slate-950/95 dark:border-white/10">
          {project.image ? (
            <div className="relative aspect-[16/10]">
              <Image
                src={project.image}
                alt={project.title}
                fill
                priority={priority}
                className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/15 to-transparent" />
            </div>
          ) : (
            <div
              className="flex aspect-[16/10] items-end justify-between p-6"
              style={{
                background: `linear-gradient(135deg, ${project.accent.from}, ${project.accent.to})`,
              }}
            >
              <div className="rounded-full border border-white/35 bg-white/20 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-white backdrop-blur">
                {project.category}
              </div>
              <div className="text-right text-white">
                <div className="font-display text-5xl font-semibold leading-none">
                  {project.title
                    .split(" ")
                    .map((word) => word[0])
                    .join("")
                    .slice(0, 3)}
                </div>
                <div className="mt-2 text-sm text-white/80">{project.year}</div>
              </div>
            </div>
          )}

          <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="font-display text-[1.65rem] font-semibold tracking-[-0.04em] text-slate-950 dark:text-white">
                {project.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300/80">
                {project.summary}
              </p>
            </div>
            <div
              className="hidden rounded-full p-3 text-slate-900 shadow-sm md:block"
              style={{
                background: `linear-gradient(135deg, ${project.accent.from}, ${project.accent.to})`,
                boxShadow: `0 18px 40px -26px ${project.accent.glow}`,
              }}
            >
              <ArrowUpRight className="h-4 w-4" />
            </div>
          </div>

          <p className="text-sm leading-6 text-slate-600 dark:text-slate-400">
            {project.description}
          </p>
        </div>

        <div className="mt-auto flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={`${project.slug}-${tech}`}
              className="rounded-full border border-slate-200/80 bg-white/80 px-3 py-1 text-xs font-medium text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
            >
              {tech}
            </span>
          ))}
        </div>

        {hasActions && (
          <div className="flex flex-wrap gap-3 pt-1">
            {project.liveUrl && (
              <Button
                asChild
                className="rounded-full bg-slate-950 px-5 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-100"
              >
                <Link
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2"
                >
                  <ExternalLink className="h-4 w-4" />
                  Live demo
                </Link>
              </Button>
            )}

            {project.sourceUrl && (
              <Button
                asChild
                variant="outline"
                className="rounded-full border-slate-300/90 bg-white/70 px-5 text-slate-900 hover:bg-white dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
              >
                <Link
                  href={project.sourceUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2"
                >
                  <Github className="h-4 w-4" />
                  Source
                </Link>
              </Button>
            )}
          </div>
        )}
      </div>
    </motion.article>
  );
}
