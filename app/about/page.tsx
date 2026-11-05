import type { Metadata } from "next";
import { education, experience, person, quotes, skills } from "@/lib/content";
import { cvHref, cvLabel, hasCv } from "@/lib/cv";

export const metadata: Metadata = {
  title: "About and experience",
  description: "Experience, skills and education of Sadaqat Rasool, full-stack and AI developer open to remote roles.",
};

export default function About() {
  return (
    <>
      <section className="section">
        <div className="wrap about-grid">
          <div style={{ display: "grid", gap: 22, alignContent: "start" }}>
            <img src="/sadaqat.webp" alt="Sadaqat Rasool" width={140} height={140} className="about-photo" />
            <h1 style={{ fontSize: "clamp(2.4rem, 5vw, 3.8rem)" }}>About me</h1>
            <p className="lede">
              I&apos;m a full-stack developer from Pakistan with a Computer Science degree from Namal University and around three years of
              freelance and contract work.
            </p>
            <p>
              I like the part of software that happens after the first version: checking every AI answer before it&apos;s saved, making sure one user
              can never see another user&apos;s data, and testing the flow on a real phone. That&apos;s why ForgeAI has 161 automated tests and why
              the FYOIL advisor refuses to recommend a product that isn&apos;t in the catalogue.
            </p>
            <p>
              I work remotely with clients in Europe, the UK, the US and Australia, and I&apos;m used to owning a piece of work from the first
              question to the live release.
            </p>
            <div className="btn-row">
              <a className="btn btn-solid" href={cvHref} download={hasCv || undefined}>{cvLabel}</a>
              <a className="btn btn-line" href={person.linkedin} target="_blank" rel="noopener">LinkedIn profile</a>
            </div>
            <dl className="skills" style={{ marginTop: 12 }}>
              <div><dt>Location</dt><dd>{person.location}</dd></div>
              <div><dt>Hours</dt><dd>{person.hours}</dd></div>
              <div><dt>Languages</dt><dd>English (full professional), Urdu (native)</dd></div>
              <div><dt>Education</dt><dd>{education.degree}, {education.school}, {education.when}</dd></div>
            </dl>
          </div>

          <div style={{ display: "grid", gap: 56 }}>
            <section>
              <h2 style={{ marginBottom: 24 }}>Experience</h2>
              <ol className="timeline">
                {experience.map((e) => (
                  <li key={e.title + e.org}>
                    <span className="when">{e.when}, {e.where}</span>
                    <h3>{e.title}</h3>
                    <p className="mute">{e.org}</p>
                    <ul>{e.points.map((pt) => <li key={pt}>{pt}</li>)}</ul>
                  </li>
                ))}
              </ol>
            </section>
            <section>
              <h2 style={{ marginBottom: 20 }}>Skills</h2>
              <dl className="skills">
                {skills.map((s) => (
                  <div key={s.group}><dt>{s.group}</dt><dd>{s.items.join(", ")}</dd></div>
                ))}
              </dl>
            </section>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="section-head"><h2>Recommendations</h2><p>Four are public on my LinkedIn profile; two are reviews from Fiverr clients.</p></div>
          <div className="quotes">
            {quotes.map((q) => (
              <figure className="quote" key={q.name}>
                <blockquote>&ldquo;{q.text}&rdquo;</blockquote>
                <figcaption><b>{q.name}</b><span>{q.role}. {q.source}, {q.date}.</span></figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
