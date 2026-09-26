import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { caseStudies } from "@/lib/case-studies";

export default function CaseStudyGrid() {
  return (
    <section className="mt-14" aria-labelledby="case-studies-heading">
      <div className="flex flex-col gap-5 border-b border-[#111111]/10 pb-8 dark:border-white/10 md:flex-row md:items-end md:justify-between">
        <div className="max-w-3xl">
          <span className="eyebrow">Selected case studies</span>
          <h2 id="case-studies-heading" className="mt-5 font-display text-4xl font-semibold tracking-[-0.05em] text-[#111111] dark:text-white sm:text-5xl">
            The decisions behind the interface.
          </h2>
        </div>
        <p className="max-w-md text-sm leading-7 text-[#334155] dark:text-slate-300">
          {caseStudies.length} projects documented through the problem, constraints, engineering decisions, and verifiable outcomes.
        </p>
      </div>

      <div className="grid gap-px overflow-hidden border border-[#111111]/10 bg-[#111111]/10 dark:border-white/10 dark:bg-white/10 lg:grid-cols-2">
        {caseStudies.map((study, index) => (
          <Link
            key={study.slug}
            href={`/projects/${study.slug}`}
            className="group relative min-h-[410px] overflow-hidden bg-[#111111] p-7 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-[#D97706] sm:p-9"
          >
            {study.image ? (
              <Image
                src={study.image}
                alt=""
                fill
                priority={index < 2}
                placeholder="blur"
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover opacity-45 transition duration-700 group-hover:scale-[1.035] group-hover:opacity-55"
              />
            ) : (
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(180,83,9,0.42),transparent_35%),linear-gradient(135deg,#111827,#030712)]" />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-black/10" />
            <div className="relative flex h-full min-h-[342px] flex-col justify-between">
              <div className="flex items-start justify-between gap-6">
                <span className="text-xs font-semibold uppercase tracking-[0.24em] text-white/70">0{index + 1} · {study.year}</span>
                <span className="border border-white/25 p-3 transition group-hover:border-white group-hover:bg-white group-hover:text-black">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em]" style={{ color: study.accent }}>{study.eyebrow}</p>
                <h3 className="mt-4 max-w-xl font-display text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">{study.title}</h3>
                <p className="mt-4 max-w-xl text-sm leading-7 text-white/75">{study.summary}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
