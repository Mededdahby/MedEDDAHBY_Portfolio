"use client";

export function ThemeToggle() {
  const toggleTheme = () => {
    const root = document.documentElement;
    const dark = root.classList.toggle("dark");
    root.style.colorScheme = dark ? "dark" : "light";
    localStorage.setItem("portfolio-theme-preference", dark ? "dark" : "light");
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="relative grid h-11 w-11 place-items-center rounded-full border border-[#111111]/10 bg-white text-[#111111] transition-colors hover:text-[#B45309] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B45309] dark:border-white/10 dark:bg-[#171D22] dark:text-white dark:hover:text-[#D97706]"
      aria-label="Toggle color theme"
    >
      <svg viewBox="0 0 24 24" aria-hidden="true" className="block h-[18px] w-[18px] dark:hidden" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8Z" />
      </svg>
      <svg viewBox="0 0 24 24" aria-hidden="true" className="hidden h-[18px] w-[18px] dark:block" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.65 17.65l1.42 1.42M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.65 6.35l1.42-1.42" />
      </svg>
    </button>
  );
}
