import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
  alternates: { canonical: null },
};

export default function NotFound() {
  return (
    <section className="section">
      <div className="wrap" style={{ display: "grid", gap: 18, maxWidth: 720 }}>
        <h1 style={{ fontSize: "clamp(2.2rem, 5vw, 3.4rem)" }}>This page doesn&apos;t exist.</h1>
        <p className="lede">The link may be old. Everything I&apos;ve built is on the work page.</p>
        <div className="btn-row">
          <Link className="btn btn-solid" href="/work">See all work</Link>
          <Link className="btn btn-line" href="/">Go to the home page</Link>
        </div>
      </div>
    </section>
  );
}
