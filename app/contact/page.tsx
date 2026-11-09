import type { Metadata } from "next";
import { person } from "@/lib/content";
import CopyButton from "@/components/CopyButton";
import BriefForm from "@/components/BriefForm";
import { cvHref, hasCv } from "@/lib/cv";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Sadaqat Rasool, full-stack and AI developer in Islamabad, Pakistan: email, LinkedIn, WhatsApp, GitHub and Fiverr.",
  alternates: { canonical: "/contact" },
};

export default function Contact() {
  return (
    <section className="section">
      <div className="wrap" style={{ display: "grid", gap: 40, maxWidth: 900 }}>
        <div style={{ display: "grid", gap: 16 }}>
          <h1 style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)" }}>Let&apos;s talk</h1>
          <p className="lede">
            For a role, send the job link. For a project, send your website or a few lines about the idea. I reply within a day, in your time zone.
          </p>
        </div>
        <ul className="contact-list">
          <li>
            <span className="mute">Email</span>
            <span><a href={`mailto:${person.email}`}>{person.email}</a><CopyButton text={person.email} /></span>
          </li>
          <li>
            <span className="mute">LinkedIn</span>
            <a href={person.linkedin} target="_blank" rel="noopener">linkedin.com/in/sadaqatrasool</a>
          </li>
          <li>
            <span className="mute">WhatsApp</span>
            <a href={person.whatsapp} target="_blank" rel="noopener">{person.phone}</a>
          </li>
          <li>
            <span className="mute">GitHub</span>
            <a href={person.github} target="_blank" rel="noopener">github.com/sadaqat120</a>
          </li>
          <li>
            <span className="mute">CV</span>
            <a href={cvHref} download={hasCv || undefined}>{hasCv ? "Download the PDF" : "Ask for it by email"}</a>
          </li>
        </ul>
        <p className="mute">{person.location}. {person.hours}.</p>
        <div style={{ display: "grid", gap: 14 }}>
          <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)" }}>Or write a short brief</h2>
          <p className="mute">Pick what fits, add a line or two, and send it from your own email or WhatsApp.</p>
          <BriefForm email={person.email} whatsapp={person.whatsapp} />
        </div>
      </div>
    </section>
  );
}
