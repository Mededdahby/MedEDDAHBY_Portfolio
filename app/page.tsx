import Hero from "@/components/hero";
import dynamic from "next/dynamic";

const AboutMe = dynamic(() => import("@/components/about-me"));
const Services = dynamic(() => import("@/components/services"));
const Projects = dynamic(() => import("@/components/projects"));
const Contact = dynamic(() => import("@/components/contact"));

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
