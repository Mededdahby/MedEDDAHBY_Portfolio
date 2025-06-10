import Hero from "@/components/hero";
import AboutMe from "@/components/about-me";

import { ThemeSwitchAnimation } from "@/components/theme-switch-animation";

export default function Home() {
  return (
    <main className="min-h-screen">
      <ThemeSwitchAnimation />
      <Hero />
      <AboutMe />
    </main>
  );
}
