"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import AutoVideo from "./AutoVideo";

// The hero: two real products running inside browser frames, set in 3D.
// The stage leans toward the pointer; it stays still for touch and reduced motion.
export default function Stage() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !window.matchMedia("(pointer: fine)").matches) return;
    let raf = 0;
    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - (r.left + r.width / 2)) / window.innerWidth;
      const y = (e.clientY - (r.top + r.height / 2)) / window.innerHeight;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        el.style.setProperty("--ry", `${-14 + x * 10}deg`);
        el.style.setProperty("--rx", `${6 - y * 8}deg`);
      });
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => { window.removeEventListener("pointermove", onMove); cancelAnimationFrame(raf); };
  }, []);

  return (
    <div className="stage" ref={ref}>
      <div className="stage-inner">
        <Link className="frame frame-main" href="/work/forgeai">
          <span className="frame-bar" aria-hidden="true"><b /><b /><b /><span className="frame-url">forgeai-beryl.vercel.app</span></span>
          <AutoVideo src="/work/video/forgeai.mp4" poster="/work/video/forgeai.webp" label="ForgeAI, my AI website builder, scrolling through its live home page" />
          <span className="sr">ForgeAI case study</span>
        </Link>
        <Link className="frame frame-side" href="/work/ai-product-advisor">
          <span className="frame-bar" aria-hidden="true"><b /><b /><b /><span className="frame-url">fyoil-product-advisor.vercel.app</span></span>
          <AutoVideo src="/work/video/fyoil.mp4" poster="/work/video/fyoil.webp" label="The AI product advisor answering a real customer question in Dutch" />
          <span className="sr">AI product advisor case study</span>
        </Link>
        <div className="chip chip-tests" aria-hidden="true"><i />161 tests passing</div>
        <div className="chip chip-live" aria-hidden="true"><i />Live, real data</div>
      </div>
    </div>
  );
}
