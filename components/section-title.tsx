import { cn } from "@/lib/utils";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  center?: boolean;
  className?: string;
}

export default function SectionTitle({
  title,
  subtitle,
  center = true,
  className = "",
}: SectionTitleProps) {
  return (
    <div className={cn(center && "text-center", "mb-16", className)}>
      <span className={cn("eyebrow", center && "mx-auto")}>
        Portfolio Notes
      </span>

      <h2 className="mt-5 font-display text-4xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-5xl dark:text-white">
        {title}
      </h2>

      {subtitle && (
        <p
          className={cn(
            "section-copy mt-5 max-w-2xl",
            center ? "mx-auto" : "mx-0"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
