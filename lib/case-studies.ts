import type { StaticImageData } from "next/image";
import moroccoImmersionHome from "@/public/case-studies/morocco-immersion-home.webp";
import eventDevHub from "@/public/case-studies/event-dev-hub.webp";
import promptBunker from "@/public/case-studies/prompt-bunker.webp";
import soloTradeKit from "@/public/case-studies/solo-trade-kit.webp";
import mosqueDashboard from "@/public/mosque-management-dashboard.webp";

export interface CaseStudy {
  slug: string;
  title: string;
  eyebrow: string;
  year: string;
  role: string;
  summary: string;
  problem: string;
  challenge: string;
  decisions: string[];
  outcomes: Array<{ value: string; label: string }>;
  technologies: string[];
  image?: StaticImageData;
  imageAlt?: string;
  liveUrl?: string;
  sourceUrl?: string;
  accent: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "morocco-immersion-platform",
    title: "Morocco Immersion",
    eyebrow: "Travel platform + operations dashboard",
    year: "2026",
    role: "Full-stack engineer · product architecture · interface implementation",
    summary:
      "A connected travel platform that gives guests a clear path from destination discovery to enquiry while giving the operations team one structured place to publish and manage the catalogue.",
    problem:
      "Trip, destination, departure, media, and enquiry content had to remain consistent across a public travel experience and a protected internal dashboard. The public site also needed to keep working while database-backed content was being prepared and reviewed.",
    challenge:
      "The difficult part was the boundary between editorial flexibility and reliable public data. Draft or archived records could not leak into selectors or public pages, and raw database records did not match the existing frontend contracts.",
    decisions: [
      "Kept the public interface behind typed DTOs and a dedicated API layer instead of coupling pages directly to Prisma records.",
      "Used a controlled mock-to-API switch so the team could validate real endpoints without destabilizing the public catalogue.",
      "Defined Published as the only public and selectable state, while preserving Draft and Archived references as admin repair warnings.",
      "Built media, activity, reporting, and publishing workflows as connected operational concerns rather than isolated screens.",
    ],
    outcomes: [
      { value: "11", label: "public experience routes" },
      { value: "12", label: "public API routes" },
      { value: "24", label: "admin API routes" },
    ],
    technologies: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Auth.js",
      "UploadThing",
      "Tailwind CSS 4",
    ],
    image: moroccoImmersionHome,
    imageAlt: "Morocco Immersion public travel homepage",
    accent: "#D59B05",
  },
  {
    slug: "solo-trade-kit",
    title: "SoloTradeKit",
    eyebrow: "Field-service SaaS for solo tradespeople",
    year: "2026",
    role: "Product engineer · UX architecture · full-stack implementation",
    summary:
      "A mobile-first field-service workspace that keeps customers, jobs, estimates, invoices, payment links, and reminders in one deliberately lightweight workflow for owner-operators.",
    problem:
      "Solo tradespeople often finish the physical job and then start a second shift of scattered admin across notebooks, messages, spreadsheets, and invoice templates. Larger field-service suites add dispatch and fleet complexity that a one-person business does not need.",
    challenge:
      "The product had to connect the complete path from first request to final payment while staying fast enough to use between site visits and simple enough to understand without onboarding-heavy enterprise patterns.",
    decisions: [
      "Designed the information model around one visible sequence: customer, job, estimate, invoice, and payment.",
      "Prioritized phone-friendly controls and client-facing documents for work completed away from a desk.",
      "Kept estimates and invoices connected to the same customer and job context to avoid re-entering details.",
      "Deliberately excluded fleet tracking, complex dispatching, and crew-management features that would dilute the solo-operator workflow.",
    ],
    outcomes: [
      { value: "$12", label: "single monthly plan" },
      { value: "14", label: "day free trial" },
      { value: "1", label: "request-to-payment workflow" },
    ],
    technologies: ["Next.js", "TypeScript", "Convex", "Clerk", "Stripe", "Resend", "Sentry", "Vercel"],
    image: soloTradeKit,
    imageAlt: "SoloTradeKit field-service SaaS homepage",
    liveUrl: "https://www.solotradekit.com",
    accent: "#22C58B",
  },
  {
    slug: "prompt-bunker",
    title: "Prompt Bunker",
    eyebrow: "Collaborative prompt operations SaaS",
    year: "2026",
    role: "Founder · product engineer · full-stack implementation",
    summary:
      "A shared prompt-operations workspace that turns reusable prompts into versioned, reviewable execution workflows with tasks, progress tracking, team access, and billing.",
    problem:
      "Prompts that live in chat history, documents, and screenshots are difficult to find, improve, or reuse. Teams also lose the decisions and follow-up work that connect a prompt to a shipped result.",
    challenge:
      "The product needed to make prompt management useful rather than becoming another storage layer. Version history, AI review, task generation, team permissions, and billing all had to reinforce a single prompt-to-launch flow.",
    decisions: [
      "Modeled prompts, versions, reviews, tags, and tasks as connected Convex records inside shared workspaces.",
      "Used a structured Groq review step to return a rating, recommendations, and notes for the next version.",
      "Generated concrete, prioritized tasks from prompt context so improvements can move directly into execution.",
      "Separated owner, editor, and viewer responsibilities and connected workspace subscriptions through Polar.",
    ],
    outcomes: [
      { value: "3", label: "workspace roles" },
      { value: "5", label: "max AI-generated tasks per run" },
      { value: "1", label: "prompt-to-launch workspace" },
    ],
    technologies: ["Next.js 16", "React 19", "TypeScript", "Convex", "Clerk", "Vercel AI SDK", "Groq", "Polar", "Tailwind CSS 4"],
    image: promptBunker,
    imageAlt: "Prompt Bunker prompt operations homepage",
    liveUrl: "https://www.promptbunker.com",
    accent: "#2C65E8",
  },
  {
    slug: "event-dev-hub",
    title: "Event Dev Hub",
    eyebrow: "Developer event discovery",
    year: "2026",
    role: "Full-stack developer",
    summary:
      "A focused hub for discovering developer events, opening event details, and recording bookings through one compact Next.js experience.",
    problem:
      "Developer events are scattered across communities and platforms. The product needed a simple catalogue that could surface event details and turn discovery into a booking action without unnecessary navigation.",
    challenge:
      "The event catalogue, dynamic detail pages, and bookings needed to share a small data model while remaining easy to deploy as a personal product experiment.",
    decisions: [
      "Used dynamic event routes so each listing has a shareable, indexable destination.",
      "Separated event and booking persistence into dedicated MongoDB models.",
      "Added API routes for the event collection and individual event lookup instead of embedding catalogue data in UI components.",
      "Kept the primary flow deliberately short: explore, inspect, book.",
    ],
    outcomes: [
      { value: "2", label: "event API routes" },
      { value: "2", label: "persistent data models" },
      { value: "1", label: "deployed discovery flow" },
    ],
    technologies: ["Next.js", "TypeScript", "MongoDB", "Mongoose", "Tailwind CSS"],
    image: eventDevHub,
    imageAlt: "Event Dev Hub event detail interface",
    liveUrl: "https://event-dev-hub.vercel.app",
    sourceUrl: "https://github.com/Mededdahby/event-dev_hub",
    accent: "#73D8F2",
  },
  {
    slug: "saas-ai-starter",
    title: "SaaS AI Starter",
    eyebrow: "Docs-first delivery system",
    year: "2026",
    role: "System designer · developer tooling",
    summary:
      "An opinionated starting point for teams building multi-tenant AI products, designed to make product, architecture, safety, and validation decisions explicit before implementation begins.",
    problem:
      "AI SaaS projects often begin with code while tenancy, billing, model policy, observability, and acceptance criteria remain undefined. That creates rework and inconsistent delivery decisions.",
    challenge:
      "The starter needed enough structure to guide teams without becoming a rigid framework that prevented stack substitutions or product-specific decisions.",
    decisions: [
      "Made canonical product and engineering documents the source of truth rather than relying on transient chat context.",
      "Separated Architect, Builder, and Tester responsibilities to keep planning, implementation, and validation accountable.",
      "Added a decision log for every meaningful stack substitution and tradeoff.",
      "Created an automated validation script and GitHub workflow to protect the required template structure.",
    ],
    outcomes: [
      { value: "6", label: "required product and technical docs" },
      { value: "3", label: "delivery roles" },
      { value: "1", label: "automated validation workflow" },
    ],
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Stripe", "AI providers", "PowerShell"],
    sourceUrl: "https://github.com/Mededdahby/AI-Starter",
    accent: "#B45309",
  },
  {
    slug: "mosque-administration-system",
    title: "Mosque Administration System",
    eyebrow: "Community operations platform",
    year: "2024",
    role: "Full-stack developer",
    summary:
      "A role-aware administration system bringing contributor records, events, finances, communications, prayer information, and reporting into one web application.",
    problem:
      "Mosque administration often relies on disconnected records and manual communication. The project explored how one system could improve continuity, transparency, and access for administrators and contributors.",
    challenge:
      "Financial information, contributor data, event registration, and public communication have different permission and workflow needs, but still need to work from a shared operational model.",
    decisions: [
      "Used ASP.NET Core MVC to keep domain workflows, authorization, and server-rendered interfaces in one maintainable application.",
      "Designed role-based access around administrative and contributor responsibilities.",
      "Treated donations, expenses, and statements as a reporting workflow rather than isolated records.",
      "Combined operational dashboards with communication and prayer-time features for day-to-day usefulness.",
    ],
    outcomes: [
      { value: "7", label: "documented functional domains" },
      { value: "9", label: "GitHub stars" },
      { value: "4", label: "implementation languages" },
    ],
    technologies: ["ASP.NET Core MVC", "C#", ".NET", "SQL", "HTML", "CSS", "JavaScript"],
    image: mosqueDashboard,
    imageAlt: "Mosque administration dashboard concept",
    sourceUrl: "https://github.com/Mededdahby/Mosque_App",
    accent: "#47C7A1",
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((study) => study.slug === slug);
}
