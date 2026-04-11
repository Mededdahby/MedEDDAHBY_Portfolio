import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import SiteLogo from "@/components/site-logo";

const socialLinks = [
  {
    href: "https://linkedin.com/in/mohamed-eddahby",
    label: "LinkedIn",
    icon: Linkedin,
  },
  {
    href: "https://github.com/Mededdahby",
    label: "GitHub",
    icon: Github,
  },
  {
    href: "mailto:eddahby.contact@gmail.com",
    label: "Email",
    icon: Mail,
  },
];

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Work" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#111111]/10 bg-[#FAF7F2] px-4 py-12 dark:border-white/10 dark:bg-[#0C1014] md:px-8 lg:px-16">
      <div className="mx-auto flex max-w-7xl flex-col gap-10">
        <div className="grid gap-10 md:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
          <div className="space-y-5">
            <SiteLogo compact />
            <p className="max-w-lg text-sm leading-7 text-[#334155] dark:text-slate-300">
              Full-stack developer building practical products with a focus on
              strong UX, maintainable code, and clear business value.
            </p>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map(({ href, label, icon: Icon }) => (
                <Link
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                  className="inline-flex items-center gap-2 border border-[#111111]/10 bg-white px-3 py-2 text-sm text-[#111111] transition-colors hover:border-[#B45309]/30 hover:text-[#B45309] dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:border-[#D97706]/40 dark:hover:text-[#D97706]"
                >
                  <Icon className="h-4 w-4" />
                  {label}
                </Link>
              ))}
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            <div className="space-y-4">
              <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-[#334155] dark:text-slate-400">
                Navigation
              </h2>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-[#111111] transition-colors hover:text-[#B45309] dark:text-white dark:hover:text-[#D97706]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-[#334155] dark:text-slate-400">
                Contact
              </h2>
              <div className="space-y-3 text-sm leading-7 text-[#111111] dark:text-white">
                <p>eddahby.contact@gmail.com</p>
                <p>+212 653 7604 74</p>
                <p>Kelaat M&apos;Gouna, Tinghir, Morocco</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-[#111111]/10 pt-6 text-sm text-[#334155] dark:border-white/10 dark:text-slate-400 md:flex-row md:items-center md:justify-between">
          <p>&copy; {currentYear} Mohamed Eddahby. All rights reserved.</p>
          <p>Built with Next.js and Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
}
