import Link from "next/link";
import { cn } from "@/lib/utils";

interface SiteLogoProps {
  compact?: boolean;
  className?: string;
}

export default function SiteLogo({
  compact = false,
  className,
}: SiteLogoProps) {
  return (
    <Link href="/" className={cn("flex items-center gap-3", className)}>
      <div className="flex h-11 min-w-[72px] items-center justify-center rounded-[16px] bg-black px-4 shadow-[0_18px_36px_-24px_rgba(0,0,0,0.9)]">
        <span className="font-roman text-[1.4rem] leading-none tracking-[0.06em] text-white">
          Med
        </span>
      </div>

      {!compact && (
        <div>
          <div className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">
            Mohamed Eddahby
          </div>
          <div className="font-display text-lg leading-none text-slate-950 dark:text-white">
            Full-stack developer
          </div>
        </div>
      )}
    </Link>
  );
}
