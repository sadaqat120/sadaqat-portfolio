import type { Metadata } from "next";
import Link from "next/link";
import { person } from "@/lib/content";
import { proofGroups } from "@/lib/proof";

export const metadata: Metadata = {
  title: "Reviews and recommendations",
  description:
    "Screenshots of every public review of Sadaqat Rasool: LinkedIn recommendations from clients and a CTO, public credits from ThePeopleRating, and 14 five-star Fiverr reviews since 2024.",
  alternates: { canonical: "/reviews" },
};

export default function Reviews() {
  return (
    <>
      <header className="case-head">
        <div className="wrap">
          <Link className="crumb" href="/">Sadaqat Rasool</Link>
          <h1>Reviews, in the clients&apos; own words</h1>
          <p className="lede">
            Screenshots of the originals, so you can check every one: 4 LinkedIn recommendations, 2 public credits and 14 five-star Fiverr
            reviews from clients in Ireland, Belgium, the UK, the US and Pakistan since 2024.
          </p>
          <ul className="rev-stats" aria-label="In numbers">
            <li><b>4</b><span>LinkedIn recommendations</span></li>
            <li><b>14</b><span>five-star Fiverr reviews</span></li>
            <li><b>2</b><span>public credits</span></li>
            <li><b>6</b><span>countries</span></li>
          </ul>
        </div>
      </header>
      {proofGroups.map((g) => (
        <section className="section" style={{ paddingTop: 8 }} key={g.title}>
          <div className="wrap">
            <div className="section-head"><h2>{g.title}</h2><p>{g.note}</p></div>
            <div className="rev-wall">
              {g.shots.map((s) => (
                <figure key={s.src} className="rev-shot">
                  <a href={s.href} target="_blank" rel="noopener" className="proof-img">
                    <img src={s.src} alt={s.alt} width={s.w} height={s.h} loading="lazy" decoding="async" />
                    <span className="sr"> (opens the original in a new tab)</span>
                  </a>
                  <figcaption>{s.from}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      ))}
      <section className="cta-band">
        <div className="wrap">
          <h2>Want to be the next one? Tell me about your project.</h2>
          <div className="btn-row">
            <a className="btn btn-solid" href={`mailto:${person.email}`}>Email me</a>
            <Link className="btn btn-line" href="/work">See my work</Link>
          </div>
        </div>
      </section>
    </>
  );
}
