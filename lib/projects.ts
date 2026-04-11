export type ProjectStatus = "Live" | "Open Source" | "Private" | "Case Study";

export interface ProjectAccent {
  from: string;
  to: string;
  glow: string;
}

export interface Project {
  id: number;
  slug: string;
  title: string;
  category: string;
  year: number;
  summary: string;
  description: string;
  technologies: string[];
  image?: string;
  liveUrl?: string;
  sourceUrl?: string;
  featured?: boolean;
  status: ProjectStatus;
  accent: ProjectAccent;
}

const coralAccent: ProjectAccent = {
  from: "#ff8c6b",
  to: "#ffc09f",
  glow: "rgba(255, 123, 95, 0.24)",
};

const blueAccent: ProjectAccent = {
  from: "#6ea8fe",
  to: "#b9d7ff",
  glow: "rgba(77, 138, 255, 0.22)",
};

const mintAccent: ProjectAccent = {
  from: "#47c7a1",
  to: "#b8f1d9",
  glow: "rgba(71, 199, 161, 0.22)",
};

const amberAccent: ProjectAccent = {
  from: "#f4a340",
  to: "#ffd792",
  glow: "rgba(244, 163, 64, 0.22)",
};

const plumAccent: ProjectAccent = {
  from: "#9a6bff",
  to: "#d7c0ff",
  glow: "rgba(154, 107, 255, 0.2)",
};

export const projects: Project[] = [
  {
    id: 1,
    slug: "prompt-saver",
    title: "Prompt Saver",
    category: "AI Tooling",
    year: 2026,
    summary:
      "A prompt management workspace for saving, organizing, and reusing high-value prompts across projects and experiments.",
    description:
      "A private product focused on structured prompt libraries, cleaner retrieval, and faster reuse when building AI features and content workflows.",
    technologies: [
      "Next.js 16",
      "TypeScript",
      "Tailwind CSS 4",
      "Clerk",
      "Drizzle ORM",
      "CockroachDB",
      "Vercel AI SDK",
      "Groq",
      "Lemon Squeezy",
    ],
    image: "/vibrant-web-interface.png",
    liveUrl: "https://www.promptbunker.com",
    featured: true,
    status: "Live",
    accent: plumAccent,
  },
  {
    id: 2,
    slug: "autoimport-erp",
    title: "AutoImport ERP",
    category: "Workflow Automation",
    year: 2026,
    summary:
      "An internal operations dashboard that automates import-heavy workflows across delivery, sales, verification, and finance.",
    description:
      "A private Next.js application for ADV and finance teams, focused on Excel-based import flows, delivery templates, verification steps, and authenticated back-office processing.",
    technologies: [
      "Next.js 14",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "PostgreSQL",
      "Vercel Blob",
      "SheetJS",
      "JSZip",
    ],
    image: "/modern-finance-app.png",
    liveUrl: "https://auto-import-app.vercel.app/login",
    featured: true,
    status: "Live",
    accent: amberAccent,
  },
  {
    id: 3,
    slug: "postepea",
    title: "Postepea",
    category: "Full Stack Web",
    year: 2024,
    summary:
      "A publishing platform with authentication, polished reading flows, and a clean editorial interface.",
    description:
      "Built with Next.js, Tailwind CSS, and NextAuth to support article publishing, account security, and a fast reading experience.",
    technologies: ["Next.js", "Tailwind CSS", "NextAuth", "JavaScript"],
    image: "/modern-blog-interface.png",
    liveUrl: "https://postepea.vercel.app",
    sourceUrl: "https://github.com/Mededdahby/Postepea",
    featured: true,
    status: "Live",
    accent: coralAccent,
  },
  {
    id: 4,
    slug: "mosque-admin-system",
    title: "Mosque Administration System",
    category: "Full Stack Web",
    year: 2024,
    summary:
      "A digital operations hub for mosques covering contributor workflows, events, finances, and announcements.",
    description:
      "An ASP.NET Core MVC application focused on contributor management, scheduling, financial reporting, notifications, and dashboard analytics.",
    technologies: ["ASP.NET Core MVC", "C#", ".NET", "SQL"],
    image: "/mosque-management-dashboard.png",
    sourceUrl: "https://github.com/Mededdahby/Mosque_App",
    featured: true,
    status: "Open Source",
    accent: mintAccent,
  },
  {
    id: 5,
    slug: "expense-tracker",
    title: "Expense Tracker",
    category: "Frontend App",
    year: 2024,
    summary:
      "A responsive personal finance interface for tracking spending with clear breakdowns and fast state updates.",
    description:
      "A React and Redux application designed around straightforward expense entry, lightweight state management, and dashboard-friendly summaries.",
    technologies: ["React", "Redux", "JavaScript"],
    image: "/mobile-expense-dashboard.png",
    liveUrl: "https://expense-tracker-demo.vercel.app",
    sourceUrl: "https://github.com/Mededdahby/expense-tracker",
    featured: true,
    status: "Live",
    accent: blueAccent,
  },
  {
    id: 6,
    slug: "fitness-explorer",
    title: "Fitness Explorer",
    category: "Frontend App",
    year: 2024,
    summary:
      "An exercise discovery app that helps users browse workouts by body part with rich API-powered content.",
    description:
      "A React app focused on motion, exploration, and structured exercise details, pairing search and visual discovery with external fitness data.",
    technologies: ["React", "JavaScript", "API Integration"],
    image: "/fitness-app-demo.jpg",
    liveUrl: "https://fitness-explorer.vercel.app",
    sourceUrl: "https://github.com/Mededdahby/fitness_App",
    featured: true,
    status: "Live",
    accent: amberAccent,
  },
  {
    id: 7,
    slug: "quiz-platform",
    title: "Quiz Platform",
    category: "Full Stack Web",
    year: 2024,
    summary:
      "A quiz experience for creating, taking, and managing knowledge tests with a simple full-stack setup.",
    description:
      "Built with React and Express.js to cover quiz authoring, answer flows, and lightweight data handling across the frontend and backend.",
    technologies: ["React", "Express.js", "JavaScript"],
    image: "/digital-quiz-interface.png",
    liveUrl: "https://quiz-platform-demo.vercel.app",
    sourceUrl: "https://github.com/Mededdahby/quizPlatforme",
    featured: true,
    status: "Live",
    accent: plumAccent,
  },
  {
    id: 8,
    slug: "medical-center-app",
    title: "Medical Center App",
    category: "Desktop Application",
    year: 2024,
    summary:
      "A Java desktop workflow for managing records and day-to-day operations inside a medical center.",
    description:
      "A Swing and MySQL application built to organize patient-related tasks, store records, and streamline administrative work.",
    technologies: ["Java", "Swing", "MySQL"],
    image: "/digital-medical-records.png",
    sourceUrl: "https://github.com/Mededdahby/Medicale-Center-App",
    featured: true,
    status: "Open Source",
    accent: blueAccent,
  },
  {
    id: 9,
    slug: "mail-box",
    title: "Mail Box",
    category: "Desktop Application",
    year: 2024,
    summary:
      "A secure Java mail-management project using sockets, a desktop GUI, and a relational data store.",
    description:
      "A Java Swing application with socket communication and MySQL persistence, designed around user-friendly interactions and structured mail handling.",
    technologies: ["Java", "Swing", "MySQL", "Socket Programming"],
    image: "/modern-mail-interface.png",
    sourceUrl: "https://github.com/Mededdahby/Mail-box",
    status: "Open Source",
    accent: coralAccent,
  },
  {
    id: 10,
    slug: "covid-statistics-chart",
    title: "Covid Statistics Chart",
    category: "Data Visualization",
    year: 2024,
    summary:
      "An interactive statistics dashboard designed to make pandemic data easier to scan and compare.",
    description:
      "A small data-visualization project combining chart components with API data to surface trends through clear visual summaries.",
    technologies: ["JavaScript", "Chart.js", "REST API"],
    image: "/covid-dashboard-charts.png",
    sourceUrl: "https://github.com/Mededdahby/Covid-statics-chart",
    status: "Open Source",
    accent: mintAccent,
  },
  {
    id: 11,
    slug: "processor-simulation",
    title: "Processor Simulation",
    category: "Systems Programming",
    year: 2024,
    summary:
      "A low-level simulation project exploring processor behavior, operations, and core architecture concepts.",
    description:
      "Implemented in C to model how processor instructions and internal architecture can be represented programmatically.",
    technologies: ["C", "System Programming"],
    image: "/digital-heart.png",
    sourceUrl: "https://github.com/Mededdahby/processor-simulation",
    status: "Open Source",
    accent: amberAccent,
  },
  {
    id: 12,
    slug: "java-calculator",
    title: "Java Calculator",
    category: "Desktop Application",
    year: 2024,
    summary:
      "A client-server calculator built with Java Swing and socket-based communication.",
    description:
      "A lightweight desktop project that combines a familiar calculator interface with client-server messaging to execute calculations.",
    technologies: ["Java", "Swing", "Socket Programming"],
    image: "/simple-calculator-app.png",
    sourceUrl: "https://github.com/Mededdahby/java_Calcutor",
    status: "Open Source",
    accent: plumAccent,
  },
  {
    id: 13,
    slug: "dice-game",
    title: "Dice Game",
    category: "Frontend Experiment",
    year: 2024,
    summary:
      "A compact browser game focused on score accumulation, player turns, and quick interaction loops.",
    description:
      "A simple HTML, CSS, and JavaScript build that turns dice rolling into a fast, responsive mini-game.",
    technologies: ["JavaScript", "HTML", "CSS"],
    image: "/virtual-dice-score.png",
    sourceUrl: "https://github.com/Mededdahby/diceGame",
    status: "Open Source",
    accent: coralAccent,
  },
  {
    id: 14,
    slug: "article-writer",
    title: "Article Writer",
    category: "Full Stack Web",
    year: 2022,
    summary:
      "A lightweight blogging experience with article management, reader ratings, and admin workflows.",
    description:
      "A PHP and MySQL project covering article creation, editing, deletion, and reader interactions in a compact CMS-style setup.",
    technologies: ["PHP", "MySQL", "HTML", "CSS"],
    image: "/collaborative-blogging-space.png",
    sourceUrl: "https://github.com/Mededdahby/Article_wirter",
    status: "Open Source",
    accent: amberAccent,
  },
  {
    id: 15,
    slug: "islamic-learning-hub",
    title: "Islamic Learning Hub",
    category: "Case Study",
    year: 2024,
    summary:
      "A content-first learning concept centered on Quranic resources, Hadith insights, and mosque discovery.",
    description:
      "A portfolio concept for presenting educational content, local discovery, and knowledge-centered navigation in a single product experience.",
    technologies: ["ASP.NET Core", "C#", "CSS", "Content Design"],
    image: "/islamic-learning-hub.png",
    status: "Case Study",
    accent: mintAccent,
  },
  {
    id: 16,
    slug: "virtual-mouse",
    title: "Virtual Mouse",
    category: "Computer Vision",
    year: 2024,
    summary:
      "A camera-driven desktop control concept with gesture input for movement, clicks, and quick actions.",
    description:
      "A Python and OpenCV tool exploring how hand tracking can translate into practical laptop interactions such as pointing, clicking, and screenshots.",
    technologies: ["Python", "OpenCV", "NumPy"],
    image: "/gesture-controlled-interface.png",
    status: "Case Study",
    accent: blueAccent,
  },
  {
    id: 17,
    slug: "svg-clock-tab",
    title: "SVG Clock Tab",
    category: "Frontend Experiment",
    year: 2024,
    summary:
      "A polished SVG clock interface focused on styling, layout, and small visual details.",
    description:
      "A simple HTML, SVG, and CSS project that treats a functional clock as a visual design exercise with shadows, spacing, and responsive presentation.",
    technologies: ["HTML", "SVG", "CSS", "JavaScript"],
    sourceUrl: "https://github.com/Mededdahby/Clock-tab",
    status: "Open Source",
    accent: plumAccent,
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

export const projectCategories = Array.from(
  new Set(projects.map((project) => project.category)),
).sort((left, right) => left.localeCompare(right));

export const projectTechnologies = Array.from(
  new Set(projects.flatMap((project) => project.technologies)),
).sort((left, right) => left.localeCompare(right));

export const projectYears = Array.from(
  new Set(projects.map((project) => project.year)),
).sort((left, right) => right - left);

export const projectStats = {
  total: projects.length,
  featured: featuredProjects.length,
  categories: projectCategories.length,
  technologies: projectTechnologies.length,
};
