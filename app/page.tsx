import Link from "next/link";
import { featured, person, quotes, services } from "@/lib/content";
import WorkRow from "@/components/WorkRow";
import Stage from "@/components/Stage";
import Reviews from "@/components/Reviews";
import { cvHref, hasCv } from "@/lib/cv";



export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-portrait" aria-hidden="true"><img src="/sadaqat-lg.webp" alt="" width={920} height={920} fetchPriority="low" /></div>
        <div className="wrap hero-grid">
          <div>
            <div className="me">
              <img src="/sadaqat.webp" alt="Sadaqat Rasool" width={64} height={64} />
              <div>
                <strong>Sadaqat Rasool</strong>
                <span>Full-Stack &amp; AI Software Engineer</span>
                <p className="status"><i aria-hidden="true" />Open to remote roles and new projects</p>
              </div>
            </div>
            <h1>I build web apps and AI features that work on real data.</h1>
            <p className="lede">
              I&apos;m Sadaqat, a full-stack and AI software engineer (Next.js, React, TypeScript, Node.js, Python, LLMs). I&apos;ve shipped a SaaS platform for a company in Sydney,
              a partner platform with Stripe for a US health startup, my own AI website builder, and AI product advisors that answer only from a business&apos;s real catalogue.
            </p>
            <div className="btn-row">
              <Link className="btn btn-solid" href="/work">See my work</Link>
              <Link className="btn btn-line" href="/contact">Get in touch</Link>
            </div>
            <p className="hero-foot">Based in {person.location}. {person.hours}.</p>
          </div>
          <Stage />
        </div>
      </section>

      <section className="proof" aria-label="Proof">
        <div className="wrap">
          <p>
            Clients in <span className="mark">6 countries</span>. A SaaS platform delivered on a <span className="mark">remote contract in Australia</span>.
            An AI platform with <span className="mark">161 automated tests</span>. An AI advisor that was <span className="mark">100% correct on 45 real questions</span>. A Stripe partner platform passing <span className="mark">22 of 22 end-to-end checks</span>.
            And <span className="mark">4 public recommendations</span> from clients and a CTO.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <h2>Selected work</h2>
            <p>Real products with real data. Watch each one working, or read how it was built.</p>
          </div>
          <div className="work-list">
            {featured.map((p) => <WorkRow key={p.slug} p={p} />)}
          </div>
          <p style={{ marginTop: 48 }}><Link className="text-link" href="/work">All projects, including client fixes and open source</Link></p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap doors">
          <div className="door door-hire">
            <h2>Hiring a developer?</h2>
            <p>I&apos;m looking for a long-term remote role, full-time or contract, with a product team in Europe, the UK, the US or Australia.</p>
            <ul>
              <li>Next.js, React, TypeScript, Node.js, PostgreSQL and MongoDB</li>
              <li>AI features that are tested on real data</li>
              <li>Used to working alone with clients across time zones</li>
            </ul>
            <div className="btn-row" style={{ marginTop: 8 }}>
              <Link className="btn btn-solid" href="/about">Experience and CV</Link>
              {hasCv && <a className="btn btn-line" href={cvHref} download>Download CV (PDF)</a>}
            </div>
          </div>
          <div className="door door-client">
            <h2>Need something built?</h2>
            <p>Websites, web apps, AI assistants and fixes for live sites. Fixed prices, and for small jobs you pay once it&apos;s live and you&apos;re happy.</p>
            <ul>
              {services.slice(0, 4).map((s) => <li key={s.id}>{s.name}, {s.price}</li>)}
            </ul>
            <div className="btn-row" style={{ marginTop: 8 }}>
              <Link className="btn btn-line" href="/services">Services and prices</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="section-head">
            <h2>What clients say</h2>
            <p>Four public recommendations on LinkedIn, a public credit from ThePeopleRating, and 14 five-star reviews on Fiverr from clients in Ireland, Belgium, the UK and the US. <a className="text-link" href={person.fiverr} target="_blank" rel="noopener">See all reviews on Fiverr<span className="sr"> (opens in a new tab)</span></a></p>
          </div>
        </div>
        <Reviews quotes={quotes} />
      </section>

      <section className="cta-band">
        <div className="wrap">
          <h2>Tell me what you&apos;re working on. I&apos;ll reply within a day.</h2>
          <div className="btn-row">
            <a className="btn btn-solid" href={`mailto:${person.email}`}>Email me</a>
            <a className="btn btn-line" href={person.linkedin} target="_blank" rel="noopener">Message me on LinkedIn</a>
            {hasCv && <a className="btn btn-line" href={cvHref} download>Download CV</a>}
          </div>
        </div>
      </section>
    </>
  );
}
