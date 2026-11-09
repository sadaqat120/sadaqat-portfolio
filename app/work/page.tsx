import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "@/lib/content";

export const metadata: Metadata = {
  title: "Work",
  description: "Projects by Sadaqat Rasool, full-stack and AI developer: client web apps, SaaS, AI product advisors, Next.js and React builds, and open-source work.",
  alternates: { canonical: "/work" },
};

export default function Work() {
  return (
    <section className="section">
      <div className="wrap">
        <div className="section-head">
          <div>
            <h1 style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)" }}>Work</h1>
          </div>
          <p>
            Each project is labelled for what it is: paid client work, my own product, a working preview built for a business before they decided,
            open source, or a working preview. Nothing here is a mock-up.
          </p>
        </div>
        <div className="index">
          {projects.map((p) => (
            <Link key={p.slug} className="index-row" href={`/work/${p.slug}`}>
              {p.cover ? (
                <img src={p.cover.src} alt="" width={1440} height={900} loading="lazy" />
              ) : (
                <span className="blank" aria-hidden="true">{p.title.slice(0, 1)}</span>
              )}
              <div>
                <h3>{p.title}</h3>
                <span className="index-kind">{p.client}</span>
              </div>
              <p className="mute">{p.oneLine}</p>
              <span className="index-kind">{p.kind}, {p.year}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
