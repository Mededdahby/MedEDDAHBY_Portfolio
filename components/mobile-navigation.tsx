"use client";

import Link from "next/link";
import { useState } from "react";
import { ThemeToggle } from "@/components/theme-toggle";

interface MobileNavigationProps {
  links: ReadonlyArray<{ name: string; href: string }>;
}

export default function MobileNavigation({ links }: MobileNavigationProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex items-center gap-2 md:hidden">
      <ThemeToggle />
      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        aria-label={open ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={open}
        aria-controls="mobile-navigation"
        className="grid h-11 w-11 place-items-center text-[#111111] transition-colors hover:text-[#B45309] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B45309] dark:text-white dark:hover:text-[#D97706]"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
        </svg>
      </button>

      <nav
        id="mobile-navigation"
        aria-label="Mobile navigation"
        hidden={!open}
        className="absolute inset-x-0 top-full border-b border-[#111111]/10 bg-[#FAF7F2] px-4 pb-5 dark:border-white/10 dark:bg-[#0C1014]"
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-3 border-t border-[#111111]/10 pt-4 dark:border-white/10">
          {links.map((link) => (
            <Link key={link.name} href={link.href} onClick={() => setOpen(false)} className="py-2 text-sm tracking-[0.12em] text-[#334155] hover:text-[#B45309] dark:text-slate-300 dark:hover:text-[#D97706]">
              {link.name}
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
}
