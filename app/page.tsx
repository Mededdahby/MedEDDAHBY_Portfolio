import Hero from "@/components/hero";
import AboutMe from "@/components/about-me";
import Services from "@/components/services";
import Projects from "@/components/projects";
import { ThemeSwitchAnimation } from "@/components/theme-switch-animation";

export default function Home() {
  return (
    <main className="min-h-screen">
      <ThemeSwitchAnimation />
      <Hero />
      <AboutMe />
      <Services />
      <Projects />
    </main>
  );
}
