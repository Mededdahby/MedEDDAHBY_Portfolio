import Hero from "@/components/hero";
import AboutMe from "@/components/about-me";
import Services from "@/components/services";
import Projects from "@/components/projects";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <AboutMe />
      <Services />
      <Projects />
      <Contact />
    </main>
  );
}
