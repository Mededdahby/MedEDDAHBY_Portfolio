import Link from "next/link";
import { ArrowUpRight, MoveHorizontal } from "lucide-react";

const faces = [
  { kind: "project", kicker: "Travel platform", title: "Morocco Immersion", detail: "Public journeys + an operational publishing dashboard.", href: "/projects/morocco-immersion-platform", accent: "#D59B05" },
  { kind: "project", kicker: "Prompt operations", title: "Prompt Bunker", detail: "Version, review, and move prompts into execution.", href: "/projects/prompt-bunker", accent: "#5B8CFF" },
  { kind: "project", kicker: "Field-service SaaS", title: "SoloTradeKit", detail: "From customer request to estimate, invoice, and payment.", href: "/projects/solo-trade-kit", accent: "#39D3A0" },
  { kind: "stat", kicker: "Shipped work", title: "38+", detail: "Projects taken from idea to working software.", href: "/projects", accent: "#E26A2C" },
  { kind: "stat", kicker: "Experience", title: "4+ years", detail: "Designing and engineering full-stack products.", href: "/projects", accent: "#C9A6FF" },
  { kind: "stat", kicker: "Collaboration", title: "9+ clients", detail: "Product work shaped around real operational needs.", href: "/projects", accent: "#73D8F2" },
] as const;

const cubeLoader = `(()=>{let loading=false;const load=()=>{if(loading||window.__projectCubeLoaded)return;loading=true;const s=document.createElement('script');s.src='/project-cube-interaction.js';s.defer=true;s.onload=()=>{window.__projectCubeLoaded=true};document.head.appendChild(s)};const target=e=>e.target instanceof Element&&e.target.closest('[data-project-cube]');document.addEventListener('pointerover',e=>{if(target(e))load()},{once:true,passive:true});document.addEventListener('pointerdown',e=>{if(target(e))load()},{once:true,passive:true});document.addEventListener('focusin',e=>{if(target(e))load()},{once:true,passive:true});if('requestIdleCallback'in window){requestIdleCallback(load,{timeout:5000})}else{setTimeout(load,5000)}})();`;

export default function ProjectCube() {
  const firstFace = faces[0];

  return (
    <div className="relative mx-auto w-full max-w-[540px]" data-project-cube>
      <div
        className="project-cube-stage cursor-grab select-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B45309] active:cursor-grabbing"
        role="group"
        aria-label="Interactive project and statistics cube. Drag horizontally or use the left and right arrow keys to rotate."
        tabIndex={0}
        data-cube-stage
      >
        <div className="project-cube" data-cube-body>
          {faces.map((item, index) => (
            <div key={item.title} className={`project-cube-face project-cube-face-${index + 1}`} style={{ borderTopColor: item.accent }}>
              <div className="flex h-full flex-col justify-between p-6 sm:p-7">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#334155] dark:text-white/60">{item.kicker}</span>
                  <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: item.accent }} />
                </div>
                <div>
                  <p className={`font-display font-semibold tracking-[-0.05em] text-[#111111] dark:text-white ${item.kind === "stat" ? "text-5xl sm:text-6xl" : "text-3xl sm:text-4xl"}`}>{item.title}</p>
                  <p className="mt-4 max-w-[15rem] text-sm leading-6 text-[#475569] dark:text-white/65">{item.detail}</p>
                </div>
                <span className="text-[10px] font-semibold uppercase tracking-[0.22em]" style={{ color: item.accent }}>
                  {String(index + 1).padStart(2, "0")} / {String(faces.length).padStart(2, "0")}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-20 -mt-3 border border-[#111111]/10 bg-white p-4 shadow-[0_18px_45px_-34px_rgba(17,17,17,0.42)] dark:border-white/10 dark:bg-[#141A1F] sm:mx-6 sm:p-5">
        <div className="flex items-center justify-between gap-4">
          <div className="min-w-0" aria-live="polite">
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#64748B] dark:text-slate-400">Now showing</p>
            <p className="mt-1 truncate font-display text-xl font-semibold text-[#111111] dark:text-white" data-cube-title>{firstFace.title}</p>
          </div>
          <div className="flex shrink-0 items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#64748B] dark:text-slate-400">
            <MoveHorizontal className="h-4 w-4" />
            <span className="hidden sm:inline" data-cube-hint>Activate cube</span>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between gap-4 border-t border-[#111111]/10 pt-4 dark:border-white/10">
          <div className="flex gap-1.5" aria-label={`Cube face 1 of ${faces.length}`} data-cube-dots>
            {faces.map((item, index) => (
              <button key={item.title} type="button" data-cube-dot={index} aria-label={`Show ${item.title}`} aria-current={index === 0 ? "true" : undefined} className={`h-1.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B45309] ${index === 0 ? "w-8 bg-[#B45309]" : "w-3 bg-[#111111]/15 hover:bg-[#111111]/35 dark:bg-white/20 dark:hover:bg-white/40"}`} />
            ))}
          </div>
          <Link href={firstFace.href} className="inline-flex min-h-11 items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#111111] transition hover:text-[#B45309] dark:text-white dark:hover:text-[#D97706]" data-cube-link>
            <span data-cube-link-label>View project</span> <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      <script dangerouslySetInnerHTML={{ __html: cubeLoader }} />
      <script type="application/json" data-cube-data dangerouslySetInnerHTML={{ __html: JSON.stringify(faces).replace(/</g, "\\u003c") }} />
    </div>
  );
}
