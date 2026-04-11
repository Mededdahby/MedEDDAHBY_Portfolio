"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Layers3, Sparkles, Workflow } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProjectCard from "@/components/project-card";
import { featuredProjects, projectStats } from "@/lib/projects";

const previewProjects = featuredProjects.slice(0, 6);

const highlights = [
  {
    icon: Layers3,
    label: "Curated projects",
    value: `${projectStats.total}+`,
  },
  {
    icon: Workflow,
    label: "Project categories",
    value: `${projectStats.categories}`,
  },
  {
    icon: Sparkles,
    label: "Technologies in use",
    value: `${projectStats.technologies}+`,
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#FAF7F2] px-4 py-24 dark:bg-[#0C1014] md:px-8 lg:px-16"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(180,83,9,0.10),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(17,17,17,0.04),_transparent_30%),linear-gradient(180deg,_rgba(250,247,242,0.94),_rgba(250,247,242,1))] dark:bg-[radial-gradient(circle_at_top_left,_rgba(217,119,6,0.14),_transparent_24%),radial-gradient(circle_at_bottom_right,_rgba(255,255,255,0.04),_transparent_28%),linear-gradient(180deg,_rgba(12,16,20,0.96),_rgba(12,16,20,1))]" />

      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.95fr,1.05fr] lg:items-end">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="eyebrow"
            >
              Selected Work
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.05 }}
              className="mt-5 font-display text-4xl font-semibold tracking-[-0.05em] text-[#111111] dark:text-white sm:text-5xl"
            >
              Practical builds with motion, structure, and room to scale.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.1 }}
              className="mt-6 max-w-xl text-base leading-8 text-[#334155] dark:text-slate-300"
            >
              I focus on shipping interfaces that feel deliberate: strong
              information hierarchy, sharp motion, and full-stack decisions that
              keep the product useful after the first demo.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.12 }}
            className="grid gap-4 sm:grid-cols-3"
          >
            {highlights.map((item) => (
              <div
                key={item.label}
                className="rounded-[26px] border border-[#111111]/10 bg-white/82 p-5 shadow-[0_20px_60px_-32px_rgba(17,17,17,0.14)] backdrop-blur-xl dark:border-white/10 dark:bg-[#141a1f]/80 dark:shadow-[0_20px_60px_-32px_rgba(0,0,0,0.7)]"
              >
                <item.icon className="h-5 w-5 text-[#B45309]" />
                <div className="mt-5 font-display text-3xl font-semibold tracking-[-0.05em] text-[#111111] dark:text-white">
                  {item.value}
                </div>
                <div className="mt-1 text-sm text-[#334155] dark:text-slate-400">
                  {item.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {previewProjects.map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              index={index}
              priority={index < 2}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.16 }}
          className="mt-12 flex flex-col items-start justify-between gap-4 rounded-[28px] border border-white/50 bg-slate-950 px-6 py-6 text-white shadow-[0_34px_80px_-38px_rgba(2,6,23,0.9)] md:flex-row md:items-center dark:border-white/10"
        >
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-white/60">
              Portfolio archive
            </p>
            <p className="mt-2 max-w-2xl text-sm leading-7 text-white/80">
              The full archive includes desktop applications, systems projects,
              data visualizations, and smaller frontend experiments.
            </p>
          </div>

          <Button
            asChild
            className="rounded-full bg-white px-6 text-slate-950 hover:bg-white/90"
          >
            <Link href="/projects" className="flex items-center gap-2">
              Explore all projects
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
