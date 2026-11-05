import Link from "next/link";
import type { Project } from "@/lib/content";
import AutoVideo from "./AutoVideo";

export default function WorkRow({ p }: { p: Project }) {
  return (
    <article className="work-row">
      {(p.demo || p.cover) && (
        <div className="work-media">
          <Link className="frame frame-row" href={`/work/${p.slug}`} aria-label={`${p.title} case study`}>
            <span className="frame-bar" aria-hidden="true"><b /><b /><b /><span className="frame-url">{p.urlLabel || p.title}</span></span>
            {p.demo ? (
              <AutoVideo src={p.demo.src} poster={p.demo.poster} label={`${p.title}: short screen recording of the live product`} />
            ) : (
              p.cover && <img src={p.cover.src} alt={p.cover.alt} width={1440} height={900} loading="lazy" />
            )}
          </Link>
          {p.mobile && <img className="phone" src={p.mobile.src} alt="" width={390} height={844} loading="lazy" />}
        </div>
      )}
      <div className="work-text">
        <span className="kind">{p.kind}</span>
        <h3>{p.title}</h3>
        <p className="for">{p.client}</p>
        <p>{p.oneLine}</p>
        <ul className="facts">
          {p.results.slice(0, 3).map((r) => <li key={r}>{r}</li>)}
        </ul>
        <div className="btn-row">
          <Link className="btn btn-solid" href={`/work/${p.slug}`}>How it was built</Link>
          {p.url && <a className="btn btn-line" href={p.url} target="_blank" rel="noopener">Open it live<span className="sr"> (opens in a new tab)</span></a>}
        </div>
      </div>
    </article>
  );
}
