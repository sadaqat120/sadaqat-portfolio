"use client";

import { useState } from "react";

const KINDS = ["Fix or speed up my website", "A new website", "An AI feature (chat, search, product advisor)", "A web app or dashboard", "A remote role", "Something else"];
const BUDGETS = ["Under $150", "$150–600", "$600–2,000", "$2,000+", "Not sure yet"];

// No server and no third-party form service: the brief is written into an email or a
// WhatsApp message on the visitor's own device, so nothing is stored anywhere.
export default function BriefForm({ email, whatsapp }: { email: string; whatsapp: string }) {
  const [kind, setKind] = useState(KINDS[0]);
  const [budget, setBudget] = useState(BUDGETS[4]);
  const [name, setName] = useState("");
  const [site, setSite] = useState("");
  const [about, setAbout] = useState("");
  const [err, setErr] = useState("");

  const text = () =>
    [`Hi Sadaqat,`, ``, `What I need: ${kind}`, site ? `Website or link: ${site}` : null, `Budget: ${budget}`, ``, about.trim(), ``, name ? `— ${name}` : null]
      .filter((l): l is string => l !== null)
      .join("\n");

  const check = () => {
    if (about.trim().length < 10) { setErr("Add a line or two about what you need."); return false; }
    setErr("");
    return true;
  };

  const sendEmail = () => {
    if (!check()) return;
    const subject = `${kind}${name ? ` — ${name}` : ""}`;
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(text())}`;
  };
  const sendWa = () => {
    if (!check()) return;
    window.open(`${whatsapp}?text=${encodeURIComponent(text())}`, "_blank", "noopener");
  };

  return (
    <form className="brief" onSubmit={(e) => { e.preventDefault(); sendEmail(); }} noValidate>
      <fieldset>
        <legend>What do you need?</legend>
        <div className="pills">
          {KINDS.map((k) => (
            <label key={k} className={k === kind ? "on" : ""}>
              <input type="radio" name="kind" value={k} checked={k === kind} onChange={() => setKind(k)} />{k}
            </label>
          ))}
        </div>
      </fieldset>
      <div className="brief-grid">
        <label>Your name<input value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" maxLength={80} /></label>
        <label>Website or job link<input value={site} onChange={(e) => setSite(e.target.value)} inputMode="url" placeholder="yourshop.com" maxLength={200} /></label>
      </div>
      <fieldset>
        <legend>Budget</legend>
        <div className="pills">
          {BUDGETS.map((b) => (
            <label key={b} className={b === budget ? "on" : ""}>
              <input type="radio" name="budget" value={b} checked={b === budget} onChange={() => setBudget(b)} />{b}
            </label>
          ))}
        </div>
      </fieldset>
      <label>A few lines about it<textarea rows={5} value={about} onChange={(e) => setAbout(e.target.value)} maxLength={2000} aria-invalid={!!err} aria-describedby="brief-err" /></label>
      <p id="brief-err" className="brief-err" role="alert">{err}</p>
      <div className="btn-row">
        <button className="btn btn-solid" type="submit">Send by email</button>
        <button className="btn btn-line" type="button" onClick={sendWa}>Send on WhatsApp</button>
      </div>
      <p className="mute small">This opens your own email or WhatsApp with the message written. Nothing is stored on this site.</p>
    </form>
  );
}
