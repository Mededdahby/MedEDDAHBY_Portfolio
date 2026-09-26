import Image from "next/image";
import { Award, Code, Database, GitBranch, Mail, MapPin, Phone, Terminal, User } from "lucide-react";
import aboutImage from "@/public/images/about-image.webp";

const personalDetails = [
  { icon: User, label: "Mohamed Eddahby" },
  { icon: Phone, label: "+212 653 7604 74" },
  { icon: Mail, label: "eddahby.contact@gmail.com" },
  { icon: Award, label: "Bachelor in Computer Systems and Software Engineering" },
  { icon: MapPin, label: "Kelaat M’Gouna, Tinghir, Morocco" },
];

const education = [
  { school: "School of Technology of Essaouira", degree: "Professional Bachelor’s Degree in Computer Systems and Software Engineering", year: "2023 – 2024" },
  { school: "School of Technology of Essaouira", degree: "University Diploma of Technology in Computer Engineering", year: "2021 – 2023" },
  { school: "Molay Baamran High School, Kalaat M’Gouna", degree: "Baccalaureate in Physical and Chemical Sciences", year: "2020 – 2021" },
];

const skillGroups = [
  { icon: Code, name: "Frontend", skills: ["React", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS"] },
  { icon: Database, name: "Backend", skills: ["Node.js", "ASP.NET Core", "C#", "Prisma", "PostgreSQL", "MongoDB"] },
  { icon: Terminal, name: "Interface", skills: ["Tailwind CSS", "shadcn/ui", "Bootstrap", "Material UI"] },
  { icon: GitBranch, name: "Tools", skills: ["Git", "GitHub", "Postman", "Figma", "Vercel"] },
];

export default function AboutMe() {
  return (
    <section id="about" className="relative overflow-hidden bg-[#FAF7F2] px-4 py-20 text-[#111111] dark:bg-[#0C1014] dark:text-white md:px-8 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.8fr,1.2fr] lg:items-center">
          <div className="relative mx-auto w-full max-w-[430px]">
            <div className="absolute -inset-5 rounded-[42%_58%_48%_52%/54%_42%_58%_46%] border border-dashed border-[#B45309]/30" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[46%_54%_42%_58%/42%_46%_54%_58%] border border-[#111111]/10 bg-[#F3EEE6] shadow-[0_35px_90px_-42px_rgba(17,17,17,0.42)] dark:border-white/10 dark:bg-[#141A1F]">
              <Image src={aboutImage} alt="Mohamed Eddahby" fill placeholder="blur" sizes="(max-width: 1024px) 90vw, 430px" className="object-cover object-[center_28%]" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/20 via-transparent to-[#B45309]/10" />
            </div>
          </div>

          <div>
            <span className="eyebrow">About me</span>
            <h2 className="mt-5 max-w-3xl font-display text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">Engineering useful products with clarity and intent.</h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[#334155] dark:text-slate-300">I build full-stack products with a focus on dependable architecture, thoughtful interfaces, and workflows that solve real operational problems.</p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {personalDetails.map(({ icon: Icon, label }) => (
                <div key={label} className="flex min-h-16 items-center gap-3 border border-[#111111]/10 bg-white/70 px-4 dark:border-white/10 dark:bg-white/5">
                  <span className="grid h-9 w-9 shrink-0 place-items-center bg-[#B45309]/10 text-[#B45309]"><Icon className="h-4 w-4" /></span>
                  <span className="text-sm leading-6 text-[#334155] dark:text-slate-300">{label}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {["Arabic", "English", "French", "Tamazight"].map((language) => <span key={language} className="border border-[#111111]/10 bg-[#F3EEE6] px-3 py-1.5 text-xs font-medium dark:border-white/10 dark:bg-white/10">{language}</span>)}
            </div>
          </div>
        </div>

        <div className="mt-20 grid gap-12 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#B45309]">Education</p>
            <div className="mt-6 border-l border-[#B45309]/35 pl-6">
              {education.map((item) => (
                <article key={item.degree} className="relative pb-8 last:pb-0">
                  <span className="absolute -left-[1.73rem] top-1.5 h-2.5 w-2.5 rounded-full bg-[#B45309]" />
                  <h3 className="font-display text-xl font-semibold tracking-[-0.03em]">{item.degree}</h3>
                  <p className="mt-2 text-sm text-[#334155] dark:text-slate-300">{item.school}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.16em] text-[#64748B] dark:text-slate-400">{item.year}</p>
                </article>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#B45309]">Technical toolkit</p>
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              {skillGroups.map(({ icon: Icon, name, skills }) => (
                <article key={name} className="border border-[#111111]/10 bg-white/70 p-5 dark:border-white/10 dark:bg-white/5">
                  <div className="flex items-center gap-3"><Icon className="h-5 w-5 text-[#B45309]" /><h3 className="font-display text-xl font-semibold">{name}</h3></div>
                  <div className="mt-4 flex flex-wrap gap-2">{skills.map((skill) => <span key={skill} className="bg-[#F3EEE6] px-2.5 py-1 text-xs text-[#334155] dark:bg-white/10 dark:text-slate-300">{skill}</span>)}</div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
