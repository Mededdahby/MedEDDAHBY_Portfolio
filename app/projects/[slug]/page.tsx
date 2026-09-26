import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, ExternalLink, Github } from "lucide-react";
import { caseStudies, getCaseStudy } from "@/lib/case-studies";

type CaseStudyPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return caseStudies.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const study = getCaseStudy((await params).slug);
  if (!study) return {};
  return { title: `${study.title} Case Study | Mohamed Eddahby`, description: study.summary };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const study = getCaseStudy((await params).slug);
  if (!study) notFound();

  return (
    <main className="min-h-screen bg-[#FAF7F2] pb-24 pt-28 text-[#111111] dark:bg-[#0C1014] dark:text-white">
      <article>
        <header className="px-4 md:px-8 lg:px-16">
          <div className="mx-auto max-w-7xl">
            <Link href="/projects" className="inline-flex min-h-11 items-center gap-2 text-sm text-[#334155] transition hover:text-[#B45309] dark:text-slate-300 dark:hover:text-[#D97706]">
              <ArrowLeft className="h-4 w-4" /> Project archive
            </Link>

            <div className="mt-12 grid gap-10 lg:grid-cols-[1.15fr,0.85fr] lg:items-end">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em]" style={{ color: study.accent }}>{study.eyebrow}</p>
                <h1 className="mt-5 max-w-5xl font-display text-5xl font-semibold leading-[0.96] tracking-[-0.06em] sm:text-7xl lg:text-[6.4rem]">{study.title}</h1>
              </div>
              <div className="border-l border-[#111111]/15 pl-6 dark:border-white/15">
                <p className="text-sm uppercase tracking-[0.2em] text-[#334155] dark:text-slate-400">My role</p>
                <p className="mt-3 text-lg leading-8">{study.role}</p>
                <p className="mt-5 text-sm text-[#334155] dark:text-slate-400">{study.year}</p>
              </div>
            </div>

            <p className="mt-10 max-w-3xl text-lg leading-9 text-[#334155] dark:text-slate-300">{study.summary}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              {study.liveUrl && <Link href={study.liveUrl} target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center gap-2 bg-[#111111] px-5 text-sm text-white transition hover:bg-[#B45309] dark:bg-white dark:text-black dark:hover:bg-[#D97706] dark:hover:text-white"><ExternalLink className="h-4 w-4" />Live product</Link>}
              {study.sourceUrl && <Link href={study.sourceUrl} target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center gap-2 border border-[#111111]/15 px-5 text-sm transition hover:border-[#B45309] hover:text-[#B45309] dark:border-white/15 dark:hover:border-[#D97706] dark:hover:text-[#D97706]"><Github className="h-4 w-4" />View source</Link>}
            </div>
          </div>
        </header>

        <section className="mt-16 px-4 md:px-8 lg:px-16">
          <div className="mx-auto max-w-7xl">
            {study.image ? (
              <div className="relative aspect-[16/9] overflow-hidden border border-[#111111]/10 bg-[#111111] dark:border-white/10">
                <Image src={study.image} alt={study.imageAlt ?? study.title} fill priority placeholder="blur" sizes="100vw" className="object-cover object-top" />
              </div>
            ) : (
              <div className="relative flex aspect-[16/8] items-end overflow-hidden bg-[#111111] p-8 text-white sm:p-12">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(180,83,9,0.48),transparent_35%),linear-gradient(135deg,#111827,#030712)]" />
                <p className="relative max-w-3xl font-display text-4xl leading-tight tracking-[-0.04em] sm:text-6xl">Architecture before acceleration.</p>
              </div>
            )}
          </div>
        </section>

        <section className="px-4 py-20 md:px-8 lg:px-16">
          <div className="mx-auto grid max-w-7xl gap-px bg-[#111111]/10 dark:bg-white/10 lg:grid-cols-3">
            {study.outcomes.map((outcome) => (
              <div key={outcome.label} className="bg-[#FAF7F2] p-8 dark:bg-[#0C1014]">
                <div className="font-display text-5xl font-semibold tracking-[-0.06em]" style={{ color: study.accent }}>{outcome.value}</div>
                <p className="mt-3 text-sm uppercase tracking-[0.16em] text-[#334155] dark:text-slate-400">{outcome.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="px-4 md:px-8 lg:px-16">
          <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em]" style={{ color: study.accent }}>01 · The problem</p>
              <h2 className="mt-5 font-display text-4xl font-semibold tracking-[-0.05em]">What needed to change</h2>
              <p className="mt-6 text-base leading-8 text-[#334155] dark:text-slate-300">{study.problem}</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em]" style={{ color: study.accent }}>02 · The constraint</p>
              <h2 className="mt-5 font-display text-4xl font-semibold tracking-[-0.05em]">The hard part</h2>
              <p className="mt-6 text-base leading-8 text-[#334155] dark:text-slate-300">{study.challenge}</p>
            </div>
          </div>
        </section>

        <section className="mt-20 bg-[#111111] px-4 py-20 text-white dark:bg-[#141A1F] md:px-8 lg:px-16">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.7fr,1.3fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em]" style={{ color: study.accent }}>03 · Decisions</p>
              <h2 className="mt-5 font-display text-4xl font-semibold tracking-[-0.05em]">How I approached it</h2>
            </div>
            <ol className="divide-y divide-white/15 border-t border-white/15">
              {study.decisions.map((decision, index) => (
                <li key={decision} className="grid gap-4 py-6 sm:grid-cols-[3rem,1fr]">
                  <span className="text-sm text-white/45">0{index + 1}</span>
                  <p className="text-base leading-8 text-white/80">{decision}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="px-4 py-20 md:px-8 lg:px-16">
          <div className="mx-auto flex max-w-7xl flex-col gap-8 border-b border-[#111111]/10 pb-16 dark:border-white/10 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em]" style={{ color: study.accent }}>Technology</p>
              <div className="mt-5 flex max-w-3xl flex-wrap gap-2">{study.technologies.map((technology) => <span key={technology} className="border border-[#111111]/12 bg-white/70 px-4 py-2 text-sm dark:border-white/10 dark:bg-white/5">{technology}</span>)}</div>
            </div>
            <Link href="/projects" className="inline-flex min-h-12 items-center gap-2 text-sm font-medium transition hover:text-[#B45309] dark:hover:text-[#D97706]">Explore all projects <ArrowUpRight className="h-4 w-4" /></Link>
          </div>
        </section>
      </article>
    </main>
  );
}
