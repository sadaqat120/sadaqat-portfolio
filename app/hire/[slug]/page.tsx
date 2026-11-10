import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, person, quotes } from "@/lib/content";
import { getHire, hirePages } from "@/lib/hire";

const SITE = process.env.NEXT_PUBLIC_SITE_URL || "https://sadaqatrasool.vercel.app";

export function generateStaticParams() {
  return hirePages.map((h) => ({ slug: h.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const h = getHire(slug);
  if (!h) return {};
  return {
    title: { absolute: `${h.metaTitle} | Sadaqat Rasool` },
    description: h.description,
    alternates: { canonical: `/hire/${h.slug}` },
    openGraph: { title: h.metaTitle, description: h.description, url: `/hire/${h.slug}`, type: "website" },
  };
}

export default async function Hire({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const h = getHire(slug);
  if (!h) notFound();
  const work = h.projects.map(getProject).filter((p): p is NonNullable<typeof p> => Boolean(p));
  const featuredQuotes = quotes.filter((q) => q.source === "LinkedIn recommendation").slice(0, 1);
  const others = hirePages.filter((x) => x.slug !== h.slug);

  const ld = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: h.metaTitle,
        description: h.description,
        url: `${SITE}/hire/${h.slug}`,
        serviceType: h.short,
        areaServed: ["Europe", "United Kingdom", "United States", "Australia", "Pakistan"],
        provider: { "@id": `${SITE}/#person` },
        offers: { "@type": "Offer", description: h.price },
      },
      {
        "@type": "FAQPage",
        mainEntity: h.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Sadaqat Rasool", item: `${SITE}/` },
          { "@type": "ListItem", position: 2, name: `Hire a ${h.short.toLowerCase()}`, item: `${SITE}/hire/${h.slug}` },
        ],
      },
    ],
  };

  return (
    <article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <header className="case-head">
        <div className="wrap">
          <Link className="crumb" href="/">Sadaqat Rasool</Link>
          <p className="kind">{h.short} · remote</p>
          <h1>{h.h1}</h1>
          <p className="lede">{h.lede}</p>
          <div className="btn-row" style={{ marginTop: 26 }}>
            <a className="btn btn-solid" href={`mailto:${person.email}?subject=${encodeURIComponent(`Project for a ${h.short.toLowerCase()}`)}`}>Email me about your project</a>
            <Link className="btn btn-line" href="/work">See my work</Link>
          </div>
          <p className="hire-price"><b>Price:</b> {h.price}</p>
        </div>
      </header>

      <section className="section" style={{ paddingTop: 24 }}>
        <div className="wrap doors">
          <div className="door door-client">
            <h2>What I can build for you</h2>
            <ul>{h.build.map((b) => <li key={b}>{b}</li>)}</ul>
          </div>
          <div className="door door-hire">
            <h2>Why clients hire me</h2>
            <ul>{h.why.map((w) => <li key={w}>{w}</li>)}</ul>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="section-head"><h2>Related work</h2><p>Real projects, each with a case study.</p></div>
          <div className="hire-work">
            {work.map((p) => (
              <Link key={p.slug} href={`/work/${p.slug}`} className="hire-card">
                {p.cover && <img src={p.cover.src} alt="" width={1440} height={900} loading="lazy" decoding="async" />}
                <span className="kind">{p.kind}</span>
                <b>{p.title}</b>
                <span className="mute">{p.oneLine}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="section-head"><h2>What clients say</h2></div>
          <div className="hire-quotes">
            {featuredQuotes.map((q) => (
              <figure key={q.text} className="rv">
                <p className="rv-src">{q.source}</p>
                <blockquote>&ldquo;{q.text}&rdquo;</blockquote>
                <figcaption><b>{q.name}</b><span>{q.role}</span></figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap hire-faq">
          <h2>Questions</h2>
          {h.faqs.map((f) => (
            <details key={f.q}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="cta-band">
        <div className="wrap">
          <h2>Tell me what you need. I&apos;ll reply within a day.</h2>
          <div className="btn-row">
            <a className="btn btn-solid" href={`mailto:${person.email}`}>Email me</a>
            <a className="btn btn-line" href={person.whatsapp} target="_blank" rel="noopener">WhatsApp</a>
            <a className="btn btn-line" href={person.linkedin} target="_blank" rel="noopener">LinkedIn</a>
          </div>
          <p className="hire-also">Also: {others.map((o, i) => (
            <span key={o.slug}>{i ? " · " : ""}<Link href={`/hire/${o.slug}`}>{o.short}</Link></span>
          ))}</p>
        </div>
      </section>
    </article>
  );
}
