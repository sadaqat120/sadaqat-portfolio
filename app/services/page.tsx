import type { Metadata } from "next";
import Link from "next/link";
import { person, services } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services and prices",
  description: "AI product advisors, web apps, business websites, fixes for live sites and white-label development. Fixed prices.",
};

const steps = [
  { t: "You tell me the problem", d: "A short message or call: what's going wrong, or what you want to exist." },
  { t: "I send a fixed price", d: "What you get, how long it takes and what it costs, in writing. No hourly surprises." },
  { t: "You see it working first", d: "For AI advisors I can build a free test on part of your real data, so you decide with something in your hands." },
  { t: "It goes live, you pay", d: "Small jobs are paid once they're live and you're happy. Bigger builds are split into milestones." },
];

export default function Services() {
  return (
    <>
      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <h1 style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)" }}>Services</h1>
            <p>For business owners, founders and agencies. Prices are starting points; you get an exact fixed price before any work starts.</p>
          </div>
          <div className="svc">
            {services.map((s) => (
              <div className="svc-item" key={s.id} id={s.id}>
                <div>
                  <h3>{s.name}</h3>
                  <p className="mute" style={{ marginTop: 6 }}>{s.who}</p>
                </div>
                <p>{s.get}</p>
                <p className="svc-price">{s.price}<span>{s.time}</span></p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="section-head"><h2>How a project runs</h2></div>
          <ol className="timeline">
            {steps.map((s) => (
              <li key={s.t}>
                <h3>{s.t}</h3>
                <p className="mute">{s.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="cta-band">
        <div className="wrap">
          <h2>Send me your website or idea. You&apos;ll get a clear answer and a fixed price.</h2>
          <div className="btn-row">
            <a className="btn btn-solid" href={`mailto:${person.email}?subject=Project%20enquiry`}>Email me</a>
            <Link className="btn btn-line" href="/work">See past work first</Link>
          </div>
        </div>
      </section>
    </>
  );
}
