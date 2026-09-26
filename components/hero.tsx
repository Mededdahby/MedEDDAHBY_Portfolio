import Link from "next/link";
import { Download, Github, Linkedin, Mail } from "lucide-react";
import ProjectCube from "@/components/project-cube";

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

        <div className="relative py-4 xl:py-0">
          <ProjectCube />
        </div>
      </div>
    </section>
  );
}
