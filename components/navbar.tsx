"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import SiteLogo from "@/components/site-logo";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "WORK", href: "/projects" },
  { name: "ABOUT", href: "/#about" },
  { name: "CONTACT", href: "/#contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-[1000] bg-[#FAF7F2]/96 px-4 py-5 backdrop-blur-sm dark:bg-[#0C1014]/92 md:px-8 md:py-6 lg:px-16">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <SiteLogo compact />

        <div className="hidden items-center gap-4 md:flex">
          <nav className="flex items-center gap-8 lg:gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm tracking-[0.12em] text-[#334155] transition-colors hover:text-[#B45309] dark:text-slate-300 dark:hover:text-[#D97706]"
              >
                {link.name}
              </Link>
            ))}
          </nav>
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen((current) => !current)}
            className="rounded-none text-[#111111] hover:bg-transparent hover:text-[#B45309] dark:text-white dark:hover:text-[#D97706]"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      <div
        className={cn(
          "mx-auto max-w-7xl overflow-hidden transition-all duration-300 md:hidden",
          isMenuOpen ? "max-h-48 pt-4" : "max-h-0"
        )}
      >
        <div className="flex flex-col gap-4 border-t border-[#111111]/10 pt-4 dark:border-white/10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="py-1 text-sm tracking-[0.12em] text-[#334155] transition-colors hover:text-[#B45309] dark:text-slate-300 dark:hover:text-[#D97706]"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
