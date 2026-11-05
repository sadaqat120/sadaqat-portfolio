"use client";

import { useEffect, useRef } from "react";

// A muted demo that plays while it's on screen, and never for people who ask for less motion.
// React doesn't write the `muted` attribute into server HTML, so browsers treat the video as
// having sound and block autoplay. We set it on the element ourselves before every play().
export default function AutoVideo({ src, poster, label, className }: { src: string; poster: string; label: string; className?: string }) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    v.muted = true;
    v.defaultMuted = true;
    v.setAttribute("muted", "");
    v.playsInline = true;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const start = () => {
      v.muted = true;
      if (v.preload !== "auto") v.preload = "auto";
      const p = v.play();
      if (p) p.catch(() => {
        // Some browsers refuse until data has loaded; try once more when it can play.
        v.addEventListener("canplay", () => v.play().catch(() => {}), { once: true });
        v.load();
      });
    };

    const io = new IntersectionObserver(
      ([e]) => (e.isIntersecting ? start() : v.pause()),
      { threshold: 0.2, rootMargin: "120px 0px" }
    );
    io.observe(v);

    // Phones in low-power mode block autoplay; the first tap anywhere starts what's on screen.
    const onTouch = () => {
      const r = v.getBoundingClientRect();
      if (r.bottom > 0 && r.top < window.innerHeight && v.paused) start();
    };
    window.addEventListener("touchstart", onTouch, { passive: true, once: true });

    return () => { io.disconnect(); window.removeEventListener("touchstart", onTouch); };
  }, []);

  const webm = src.replace(/\.mp4$/, ".webm");
  return (
    <video ref={ref} className={className} muted loop playsInline preload="metadata" poster={poster} aria-label={label} width={960} height={600}>
      <source src={src} type="video/mp4" />
      {webm !== src && <source src={webm} type="video/webm" />}
    </video>
  );
}
