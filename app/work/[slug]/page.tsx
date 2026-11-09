import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/lib/content";
import AutoVideo from "@/components/AutoVideo";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) return {};
  return {
    title: p.title,
    description: p.oneLine,
    alternates: { canonical: `/work/${p.slug}` },
    openGraph: { type: "article", title: `${p.title} | Sadaqat Rasool`, description: p.oneLine, url: `/work/${p.slug}`, ...(p.cover ? { images: [{ url: p.cover.src, width: 1440, height: 900, alt: p.cover.alt }] } : {}) },
  };
}

export default async function CaseStudy({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) notFound();
  const i = projects.findIndex((x) => x.slug === p.slug);
  const next = projects[(i + 1) % projects.length];

  return (
    <article>
      <header className="case-head">
        <div className="wrap">
          <Link className="crumb" href="/work">All work</Link>
          <p className="kind">{p.kind}</p>
          <h1>{p.title}</h1>
          <p className="lede">{p.oneLine}</p>
          <dl className="case-meta">
            <div><dt>For</dt><dd>{p.client}</dd></div>
            <div><dt>When</dt><dd>{p.year}</dd></div>
            {p.url && (
              <div><dt>Live</dt><dd><a href={p.url} target="_blank" rel="noopener">{p.urlLabel}<span className="sr"> (opens in a new tab)</span></a></dd></div>
            )}
            {p.repo && (
              <div><dt>Code</dt><dd><a href={p.repo} target="_blank" rel="noopener">GitHub<span className="sr"> (opens in a new tab)</span></a></dd></div>
            )}
          </dl>
        </div>
      </header>

      {(p.demo || p.cover) && (
        <div className="wrap">
          <figure className="case-shot frame" style={{ margin: 0 }}>
            <span className="frame-bar" aria-hidden="true"><b /><b /><b /><span className="frame-url">{p.urlLabel || p.title}</span></span>
            {p.demo && !p.video ? (
              <AutoVideo src={p.demo.src} poster={p.demo.poster} label={`${p.title}: short screen recording of the live product`} />
            ) : (
              p.cover && <img src={p.cover.src} alt={p.cover.alt} width={1440} height={900} />
            )}
          </figure>
        </div>
      )}

      <div className="wrap case-body">
        <div className="case-side">
          <section>
            <h2>Results</h2>
            <ul className="results">{p.results.map((r) => <li key={r}><span>{r}</span></li>)}</ul>
          </section>
          <section>
            <h2>Built with</h2>
            <ul className="chips">{p.stack.map((s) => <li key={s}>{s}</li>)}</ul>
          </section>
          {p.note && <p className="note">{p.note}</p>}
        </div>
        <div style={{ display: "grid", gap: 40 }}>
          <section>
            <h2>The problem</h2>
            <p>{p.problem}</p>
          </section>
          <section>
            <h2>What I built</h2>
            <ul>{p.built.map((b) => <li key={b}>{b}</li>)}</ul>
          </section>
        </div>
      </div>

      {(p.video || p.gallery || p.mobile) && (
        <div className="wrap" style={{ display: "grid", gap: 28, paddingBottom: 56 }}>
          {p.video && (
            <figure style={{ margin: 0 }}>
              <div className="video">
                <video controls preload="none" playsInline poster={p.video.poster} width={1280} height={720}>
                  <source src={p.video.src} type="video/mp4" />
                </video>
              </div>
              <figcaption className="mute" style={{ marginTop: 10 }}>{p.video.label}</figcaption>
            </figure>
          )}
          {p.gallery && (
            <div className="gallery">
              {p.gallery.map((g) => (
                <figure key={g.src}>
                  <img src={g.src} alt={g.alt} loading="lazy" />
                  <figcaption>{g.alt}</figcaption>
                </figure>
              ))}
            </div>
          )}
          {p.mobile && !p.gallery && (
            <figure style={{ margin: 0, maxWidth: 320 }}>
              <img src={p.mobile.src} alt={p.mobile.alt} width={390} height={844} loading="lazy" style={{ borderRadius: 20, boxShadow: "0 0 0 1px var(--line), var(--shadow)" }} />
              <figcaption className="mute" style={{ marginTop: 10 }}>On a phone</figcaption>
            </figure>
          )}
        </div>
      )}

      <div className="wrap" style={{ paddingBottom: 40 }}>
        <nav className="next-case" aria-label="More work">
          <Link className="text-link" href="/work">Back to all work</Link>
          <Link className="text-link" href={`/work/${next.slug}`}>Next: {next.title}</Link>
        </nav>
      </div>
    </article>
  );
}
