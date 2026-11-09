import type { Quote } from "@/lib/content";

function Card({ q }: { q: Quote }) {
  return (
    <figure className="rv">
      {q.stars ? (
        <p className="rv-stars" aria-label={`${q.stars} out of 5 stars`}>{"★".repeat(q.stars)}</p>
      ) : (
        <p className="rv-src">{q.source}</p>
      )}
      <blockquote>&ldquo;{q.text}&rdquo;</blockquote>
      <figcaption>
        <b>{q.name}</b>
        <span>{q.role}</span>
        {q.stars ? <span>{q.source}</span> : null}
      </figcaption>
    </figure>
  );
}

// Two rows that drift in opposite directions. Hover or focus pauses them;
// with reduced motion they become rows you scroll yourself.
export default function Reviews({ quotes }: { quotes: Quote[] }) {
  const half = Math.ceil(quotes.length / 2);
  const rows = [quotes.slice(0, half), quotes.slice(half)];
  return (
    <div className="rv-wrap">
      {rows.map((row, i) => (
        <div className={`rv-row ${i ? "rv-rev" : ""}`} key={i}>
          <div className="rv-track">
            {row.map((q) => <Card q={q} key={q.name + q.date} />)}
            <div className="rv-dup" aria-hidden="true">
              {row.map((q) => <Card q={q} key={q.name + q.date + "-dup"} />)}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
