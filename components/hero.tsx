"use client";

import Link from "next/link";
import Image from "next/image";
import CountUp from "react-countup";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Download, Github, Linkedin, Mail } from "lucide-react";

const stats = [
  { label: "Years building", value: 4, suffix: "+" },
  { label: "Projects shipped", value: 38, suffix: "+" },
  { label: "Clients served", value: 9, suffix: "+" },
];

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/Mededdahby",
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/mohamed-eddahby-b10721231",
    icon: Linkedin,
  },
  {
    label: "Email",
    href: "mailto:eddahby.contact@gmail.com",
    icon: Mail,
  },
];

export default function Hero() {
  const statsRef = useRef<HTMLDivElement>(null);
  const inView = useInView(statsRef, { once: true, amount: 0.35 });

  return (
    <section className="bg-[#FAF7F2] px-4 pb-16 pt-28 text-[#111111] dark:bg-[#0C1014] dark:text-white md:px-8 md:pb-24 md:pt-32 lg:px-16">
      <div className="mx-auto grid min-h-[85vh] max-w-7xl gap-14 xl:grid-cols-[1.05fr,0.95fr] xl:items-center">
        <div className="max-w-3xl">
          <p className="text-[11px] tracking-[0.28em] text-[#334155] dark:text-slate-300 sm:text-sm">
            FULL-STACK DEVELOPER
          </p>

          <h1 className="mt-6 font-display text-[3.35rem] leading-[0.94] tracking-[-0.06em] sm:mt-8 sm:text-[5rem] lg:text-[6.4rem]">
            Building products
            <span className="block text-[#B45309] italic">with intent.</span>
          </h1>

          <p className="mt-8 max-w-2xl text-[1.02rem] leading-8 text-[#334155] dark:text-slate-300 sm:mt-10 sm:text-[1.15rem] sm:leading-9">
            I design and engineer software that solves real problems with clean
            code, thoughtful interfaces, and a bias toward shipping.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:mt-12 sm:flex-row sm:items-center">
            <a
              href="/cv/mededdahby.pdf"
              download
              className="inline-flex min-h-14 items-center justify-center gap-2 bg-[#111111] px-6 py-4 text-sm tracking-[0.12em] text-white transition hover:bg-[#B45309] dark:bg-white dark:text-[#111111] dark:hover:bg-[#D97706] dark:hover:text-white"
            >
              DOWNLOAD CV
              <Download className="h-4 w-4" />
            </a>

            <Link
              href="/projects"
              className="inline-flex min-h-14 items-center justify-center border border-[#111111]/15 px-6 py-4 text-sm tracking-[0.12em] text-[#334155] transition hover:border-[#B45309] hover:text-[#B45309] dark:border-white/10 dark:text-slate-300 dark:hover:border-[#D97706] dark:hover:text-[#D97706]"
            >
              VIEW WORK
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4 sm:mt-10">
            {socials.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                className="inline-flex items-center gap-3 text-sm tracking-[0.12em] text-[#334155] transition hover:text-[#B45309] dark:text-slate-300 dark:hover:text-[#D97706]"
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div ref={statsRef} className="relative">
          <div className="relative mx-auto max-w-[500px] xl:ml-auto xl:mr-0">
            <div className="relative overflow-hidden border border-[#111111]/10 bg-[#F3EEE6] dark:border-white/10 dark:bg-[#141a1f]">
              <div className="relative aspect-[4/5]">
                <Image
                  src="/images/hero-image.jpeg"
                  alt="Mohamed Eddahby portrait"
                  fill
                  priority
                  sizes="(max-width: 1280px) 100vw, 500px"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3 md:hidden">
              <div className="border border-[#111111]/10 bg-white px-4 py-4 shadow-[0_18px_40px_-28px_rgba(17,17,17,0.35)] dark:border-white/10 dark:bg-[#141a1f] dark:text-white">
                <p className="text-[11px] tracking-[0.24em] text-[#334155] dark:text-slate-400">
                  BASED IN
                </p>
                <p className="mt-2 font-display text-xl dark:text-white">Morocco</p>
              </div>
              <div className="border border-[#111111]/10 bg-[#111111] px-4 py-4 text-white shadow-[0_22px_44px_-30px_rgba(17,17,17,0.7)]">
                <p className="text-[11px] tracking-[0.24em] text-white/70">
                  FOCUS
                </p>
                <p className="mt-2 font-display text-xl">Full stack</p>
              </div>
            </div>

            <div className="absolute -left-6 top-8 hidden border border-[#111111]/10 bg-white px-5 py-4 shadow-[0_18px_40px_-28px_rgba(17,17,17,0.35)] dark:border-white/10 dark:bg-[#141a1f] dark:text-white md:block">
              <p className="text-[11px] tracking-[0.24em] text-[#334155] dark:text-slate-400">
                BASED IN
              </p>
              <p className="mt-2 font-display text-2xl dark:text-white">Morocco</p>
            </div>

            <div className="absolute -right-6 bottom-10 hidden border border-[#111111]/10 bg-[#111111] px-5 py-4 text-white shadow-[0_22px_44px_-30px_rgba(17,17,17,0.7)] md:block">
              <p className="text-[11px] tracking-[0.24em] text-white/70">
                FOCUS
              </p>
              <p className="mt-2 font-display text-2xl">Full stack</p>
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="border border-[#111111]/10 bg-white px-5 py-5 dark:border-white/10 dark:bg-[#141a1f]"
              >
                <div className="font-display text-4xl leading-none dark:text-white">
                  {inView ? (
                    <>
                      <CountUp end={stat.value} duration={2} />
                      {stat.suffix}
                    </>
                  ) : (
                    `0${stat.suffix}`
                  )}
                </div>
                <p className="mt-3 text-sm tracking-[0.08em] text-[#334155] dark:text-slate-400">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
