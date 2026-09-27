"use client";

import { lazy, Suspense, useEffect, useState } from "react";

const Analytics = lazy(() => import("@vercel/analytics/react").then((module) => ({ default: module.Analytics })));
const SpeedInsights = lazy(() => import("@vercel/speed-insights/next").then((module) => ({ default: module.SpeedInsights })));

export default function DelayedObservability() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let idleId: number | undefined;
    let timerId: ReturnType<typeof globalThis.setTimeout> | undefined;
    const schedule = () => {
      timerId = globalThis.setTimeout(() => {
        if ("requestIdleCallback" in window) {
          idleId = window.requestIdleCallback(() => setReady(true), { timeout: 4000 });
        } else {
          setReady(true);
        }
      }, 6000);
    };

    if (document.readyState === "complete") schedule();
    else window.addEventListener("load", schedule, { once: true });

    return () => {
      window.removeEventListener("load", schedule);
      if (idleId !== undefined && "cancelIdleCallback" in window) window.cancelIdleCallback(idleId);
      if (timerId !== undefined) globalThis.clearTimeout(timerId);
    };
  }, []);

  if (!ready) return null;
  return <Suspense fallback={null}><Analytics /><SpeedInsights /></Suspense>;
}
