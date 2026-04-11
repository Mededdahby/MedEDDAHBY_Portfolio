"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProjectCard from "@/components/project-card";
import SectionTitle from "@/components/section-title";
import {
  projectCategories,
  projects,
  projectStats,
  projectTechnologies,
  projectYears,
} from "@/lib/projects";

export default function ProjectsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({
    category: "",
    technology: "",
    year: "",
  });

  const filteredProjects = projects.filter((project) => {
    const term = searchTerm.trim().toLowerCase();
    const matchesTerm =
      !term ||
      project.title.toLowerCase().includes(term) ||
      project.summary.toLowerCase().includes(term) ||
      project.description.toLowerCase().includes(term) ||
      project.technologies.some((tech) => tech.toLowerCase().includes(term));

    const matchesCategory =
      !filters.category || project.category === filters.category;

    const matchesTechnology =
      !filters.technology || project.technologies.includes(filters.technology);

    const matchesYear = !filters.year || project.year === Number(filters.year);

    return matchesTerm && matchesCategory && matchesTechnology && matchesYear;
  });

  const clearFilters = () => {
    setSearchTerm("");
    setFilters({
      category: "",
      technology: "",
      year: "",
    });
  };

  const hasActiveFilters =
    Boolean(searchTerm) ||
    Boolean(filters.category) ||
    Boolean(filters.technology) ||
    Boolean(filters.year);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#FAF7F2] px-4 pb-24 pt-28 dark:bg-[#0C1014] md:px-8 lg:px-16">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(180,83,9,0.12),_transparent_26%),radial-gradient(circle_at_top_right,_rgba(17,17,17,0.04),_transparent_32%),linear-gradient(180deg,_rgba(250,247,242,0.96),_rgba(250,247,242,1))] dark:bg-[radial-gradient(circle_at_top_left,_rgba(217,119,6,0.14),_transparent_24%),radial-gradient(circle_at_top_right,_rgba(255,255,255,0.04),_transparent_32%),linear-gradient(180deg,_rgba(12,16,20,0.96),_rgba(12,16,20,1))]" />

      <div className="mx-auto max-w-7xl">
        <Button
          variant="ghost"
          size="sm"
          className="rounded-full px-0 text-[#334155] hover:bg-transparent hover:text-[#B45309] dark:text-slate-300 dark:hover:text-[#D97706]"
          asChild
        >
          <Link href="/" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to home
          </Link>
        </Button>

        <div className="mt-10 grid gap-10 lg:grid-cols-[0.88fr,1.12fr] lg:items-end">
          <SectionTitle
            title="Project Archive"
            subtitle="A broader look at the products, experiments, and desktop builds I have shipped across web, systems, and interface work."
            center={false}
            className="mb-0"
          />

          <div className="grid gap-4 sm:grid-cols-3">
            <div className="panel-surface rounded-[26px] p-5">
              <div className="text-sm uppercase tracking-[0.24em] text-[#334155] dark:text-slate-400">
                Total builds
              </div>
              <div className="mt-4 font-display text-4xl font-semibold tracking-[-0.05em] text-[#111111] dark:text-white">
                {projectStats.total}
              </div>
            </div>
            <div className="panel-surface rounded-[26px] p-5">
              <div className="text-sm uppercase tracking-[0.24em] text-[#334155] dark:text-slate-400">
                Categories
              </div>
              <div className="mt-4 font-display text-4xl font-semibold tracking-[-0.05em] text-[#111111] dark:text-white">
                {projectStats.categories}
              </div>
            </div>
            <div className="panel-surface rounded-[26px] p-5">
              <div className="text-sm uppercase tracking-[0.24em] text-[#334155] dark:text-slate-400">
                Technologies
              </div>
              <div className="mt-4 font-display text-4xl font-semibold tracking-[-0.05em] text-[#111111] dark:text-white">
                {projectStats.technologies}
              </div>
            </div>
          </div>
        </div>

        <div className="panel-surface mt-12 rounded-[32px] p-6 md:p-7">
          <div className="grid gap-4 lg:grid-cols-[1.2fr,0.8fr,0.8fr,0.6fr]">
            <label className="relative block">
              <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search by project, summary, or stack"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                className="w-full rounded-full border border-[#111111]/12 bg-white/88 px-12 py-3 text-sm text-[#111111] outline-none transition focus:border-[#B45309] dark:border-white/10 dark:bg-[#141a1f] dark:text-white dark:focus:border-[#D97706]"
              />
              {searchTerm && (
                <button
                  type="button"
                  onClick={() => setSearchTerm("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#334155]/70 transition hover:text-[#111111] dark:text-slate-400 dark:hover:text-white"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </label>

            <select
              value={filters.category}
              onChange={(event) =>
                setFilters((current) => ({
                  ...current,
                  category: event.target.value,
                }))
              }
              className="rounded-full border border-[#111111]/12 bg-white/88 px-4 py-3 text-sm text-[#111111] outline-none transition focus:border-[#B45309] dark:border-white/10 dark:bg-[#141a1f] dark:text-white dark:focus:border-[#D97706]"
            >
              <option value="">All categories</option>
              {projectCategories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>

            <select
              value={filters.technology}
              onChange={(event) =>
                setFilters((current) => ({
                  ...current,
                  technology: event.target.value,
                }))
              }
              className="rounded-full border border-[#111111]/12 bg-white/88 px-4 py-3 text-sm text-[#111111] outline-none transition focus:border-[#B45309] dark:border-white/10 dark:bg-[#141a1f] dark:text-white dark:focus:border-[#D97706]"
            >
              <option value="">All technologies</option>
              {projectTechnologies.map((tech) => (
                <option key={tech} value={tech}>
                  {tech}
                </option>
              ))}
            </select>

            <select
              value={filters.year}
              onChange={(event) =>
                setFilters((current) => ({
                  ...current,
                  year: event.target.value,
                }))
              }
              className="rounded-full border border-[#111111]/12 bg-white/88 px-4 py-3 text-sm text-[#111111] outline-none transition focus:border-[#B45309] dark:border-white/10 dark:bg-[#141a1f] dark:text-white dark:focus:border-[#D97706]"
            >
              <option value="">All years</option>
              {projectYears.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>

          <div className="mt-5 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-wrap gap-2">
              {projectCategories.slice(0, 6).map((category) => (
                <span
                  key={category}
                  className="rounded-full border border-[#111111]/10 bg-white/88 px-3 py-1 text-xs font-medium text-[#334155] dark:border-white/10 dark:bg-white/5 dark:text-slate-300"
                >
                  {category}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <p className="text-sm text-[#334155] dark:text-slate-400">
                Showing {filteredProjects.length} of {projects.length} projects
              </p>
              {hasActiveFilters && (
                <Button
                  variant="ghost"
                  onClick={clearFilters}
                  className="rounded-full px-4 text-[#B45309] hover:bg-[#B45309]/10 hover:text-[#B45309] dark:text-[#D97706] dark:hover:bg-[#D97706]/10 dark:hover:text-[#D97706]"
                >
                  Clear filters
                </Button>
              )}
            </div>
          </div>
        </div>

        {filteredProjects.length > 0 ? (
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.slug}
                project={project}
                index={index}
                priority={index < 2}
              />
            ))}
          </div>
        ) : (
          <div className="panel-surface mt-10 rounded-[32px] px-6 py-16 text-center">
            <h3 className="font-display text-3xl font-semibold tracking-[-0.05em] text-[#111111] dark:text-white">
              No matching projects
            </h3>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#334155] dark:text-slate-300">
              Try a broader search term or reset the filters to explore the full
              archive again.
            </p>
            <Button
              onClick={clearFilters}
              className="mt-6 rounded-full bg-[#111111] px-6 text-white hover:bg-[#B45309] dark:bg-white dark:text-[#111111] dark:hover:bg-[#D97706] dark:hover:text-white"
            >
              Reset project archive
            </Button>
          </div>
        )}
      </div>
    </main>
  );
}
