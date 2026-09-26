"use client";

import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, MoveHorizontal } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const faces = [
  {
    kind: "project",
    kicker: "Travel platform",
    title: "Morocco Immersion",
    detail: "Public journeys + an operational publishing dashboard.",
    href: "/projects/morocco-immersion-platform",
    accent: "#D59B05",
  },
  {
    kind: "project",
    kicker: "Prompt operations",
    title: "Prompt Bunker",
    detail: "Version, review, and move prompts into execution.",
    href: "/projects/prompt-bunker",
    accent: "#5B8CFF",
  },
  {
    kind: "project",
    kicker: "Field-service SaaS",
    title: "SoloTradeKit",
    detail: "From customer request to estimate, invoice, and payment.",
    href: "/projects/solo-trade-kit",
    accent: "#39D3A0",
  },
  {
    kind: "stat",
    kicker: "Shipped work",
    title: "38+",
    detail: "Projects taken from idea to working software.",
    accent: "#E26A2C",
  },
  {
    kind: "stat",
    kicker: "Experience",
    title: "4+ years",
    detail: "Designing and engineering full-stack products.",
    accent: "#C9A6FF",
  },
  {
    kind: "stat",
    kicker: "Collaboration",
    title: "9+ clients",
    detail: "Product work shaped around real operational needs.",
    accent: "#73D8F2",
  },
] as const;

const rotations = [
  { rotateX: -10, rotateY: 20 },
  { rotateX: -8, rotateY: -70 },
  { rotateX: -10, rotateY: -160 },
  { rotateX: -8, rotateY: -250 },
  { rotateX: -100, rotateY: 20 },
  { rotateX: 80, rotateY: 20 },
];

export default function ProjectCube() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [dragging, setDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const pointerStart = useRef<number | null>(null);
  const reduceMotion = useReducedMotion();
  const face = faces[active];

  useEffect(() => {
    if (paused || dragging || reduceMotion) return;
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % faces.length);
    }, 3400);
    return () => window.clearInterval(timer);
  }, [dragging, paused, reduceMotion]);

  const move = (direction: number) => {
    setActive((current) => (current + direction + faces.length) % faces.length);
  };

  const finishDrag = (clientX: number) => {
    if (pointerStart.current === null) return;
    const distance = clientX - pointerStart.current;
    pointerStart.current = null;
    setDragging(false);
    setDragOffset(0);
    if (Math.abs(distance) > 34) move(distance < 0 ? 1 : -1);
  };

  return (
    <div
      className="relative mx-auto w-full max-w-[540px]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div
        className="project-cube-stage cursor-grab select-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B45309] active:cursor-grabbing"
        role="group"
        aria-label="Interactive project and statistics cube. Drag horizontally or use the left and right arrow keys to rotate."
        tabIndex={0}
        onKeyDown={(event) => {
          if (event.key === "ArrowLeft") move(-1);
          if (event.key === "ArrowRight") move(1);
        }}
        onPointerDown={(event) => {
          pointerStart.current = event.clientX;
          setDragging(true);
          event.currentTarget.setPointerCapture(event.pointerId);
        }}
        onPointerMove={(event) => {
          if (pointerStart.current === null) return;
          setDragOffset(event.clientX - pointerStart.current);
        }}
        onPointerUp={(event) => finishDrag(event.clientX)}
        onPointerCancel={() => {
          pointerStart.current = null;
          setDragging(false);
          setDragOffset(0);
        }}
      >
        <motion.div
          className="project-cube"
          animate={{
            rotateX: rotations[active].rotateX,
            rotateY: rotations[active].rotateY + dragOffset * 0.42,
          }}
          transition={dragging || reduceMotion ? { duration: 0 } : { type: "spring", stiffness: 90, damping: 20, mass: 0.9 }}
        >
          {faces.map((item, index) => (
            <div
              key={item.title}
              className={`project-cube-face project-cube-face-${index + 1}`}
              style={{ borderTopColor: item.accent }}
            >
              <div className="flex h-full flex-col justify-between p-6 sm:p-7">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#334155] dark:text-white/60">
                    {item.kicker}
                  </span>
                  <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: item.accent }} />
                </div>
                <div>
                  <p className={`font-display font-semibold tracking-[-0.05em] text-[#111111] dark:text-white ${item.kind === "stat" ? "text-5xl sm:text-6xl" : "text-3xl sm:text-4xl"}`}>
                    {item.title}
                  </p>
                  <p className="mt-4 max-w-[15rem] text-sm leading-6 text-[#475569] dark:text-white/65">{item.detail}</p>
                </div>
                <span className="text-[10px] font-semibold uppercase tracking-[0.22em]" style={{ color: item.accent }}>
                  {String(index + 1).padStart(2, "0")} / {String(faces.length).padStart(2, "0")}
                </span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="relative z-20 -mt-3 border border-[#111111]/10 bg-white p-4 shadow-[0_24px_70px_-42px_rgba(17,17,17,0.55)] dark:border-white/10 dark:bg-[#141A1F] sm:mx-6 sm:p-5">
        <div className="flex items-center justify-between gap-4">
          <div className="min-w-0" aria-live="polite">
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#64748B] dark:text-slate-400">Now showing</p>
            <AnimatePresence mode="wait" initial={false}>
              <motion.p
                key={face.title}
                initial={reduceMotion ? false : { y: 6, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={reduceMotion ? undefined : { y: -6, opacity: 0 }}
                className="mt-1 truncate font-display text-xl font-semibold text-[#111111] dark:text-white"
              >
                {face.title}
              </motion.p>
            </AnimatePresence>
          </div>

          <div className="flex shrink-0 items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#64748B] dark:text-slate-400">
            <MoveHorizontal className="h-4 w-4" />
            <span className="hidden sm:inline">Drag cube</span>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between gap-4 border-t border-[#111111]/10 pt-4 dark:border-white/10">
          <div className="flex gap-1.5" aria-label={`Cube face ${active + 1} of ${faces.length}`}>
            {faces.map((item, index) => (
              <button
                key={item.title}
                type="button"
                onClick={() => setActive(index)}
                aria-label={`Show ${item.title}`}
                aria-current={index === active ? "true" : undefined}
                className={`h-1.5 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B45309] ${index === active ? "w-8 bg-[#B45309]" : "w-3 bg-[#111111]/15 hover:bg-[#111111]/35 dark:bg-white/20 dark:hover:bg-white/40"}`}
              />
            ))}
          </div>
          {face.kind === "project" ? (
            <Link href={face.href} className="inline-flex min-h-11 items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#111111] transition hover:text-[#B45309] dark:text-white dark:hover:text-[#D97706]">
              View project <ArrowUpRight className="h-4 w-4" />
            </Link>
          ) : (
            <Link href="/projects" className="inline-flex min-h-11 items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#111111] transition hover:text-[#B45309] dark:text-white dark:hover:text-[#D97706]">
              Explore work <ArrowUpRight className="h-4 w-4" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
