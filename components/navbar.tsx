import Link from "next/link";
import MobileNavigation from "@/components/mobile-navigation";
import SiteLogo from "@/components/site-logo";
import { ThemeToggle } from "@/components/theme-toggle";

const navLinks = [
  { name: "WORK", href: "/projects" },
  { name: "ABOUT", href: "/#about" },
  { name: "CONTACT", href: "/#contact" },
];

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-[1000] border-b border-[#111111]/5 bg-[#FAF7F2] px-4 py-5 dark:border-white/5 dark:bg-[#0C1014] md:px-8 md:py-6 lg:px-16">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <SiteLogo compact />

        <div className="hidden items-center gap-4 md:flex">
          <nav className="flex items-center gap-8 lg:gap-10" aria-label="Primary navigation">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className="text-sm tracking-[0.12em] text-[#334155] transition-colors hover:text-[#B45309] dark:text-slate-300 dark:hover:text-[#D97706]">
                {link.name}
              </Link>
            ))}
          </nav>
          <ThemeToggle />
        </div>

        <MobileNavigation links={navLinks} />
      </div>
    </header>
  );
}
