import type { Metadata } from "next";
import ProjectsPage from "@/components/projects-page";

export const metadata: Metadata = {
  title: "Projects and Case Studies",
  description: "Explore full-stack products and engineering case studies by Mohamed Eddahby, including the problems, decisions, technology, and outcomes behind each build.",
  alternates: { canonical: "/projects" },
  openGraph: {
    title: "Projects and Case Studies | Mohamed Eddahby",
    description: "Full-stack products documented through their problems, engineering decisions, and outcomes.",
    url: "/projects",
  },
};

export default function ProjectsRoute() {
  return <ProjectsPage />;
}
