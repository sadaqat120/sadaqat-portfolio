import Link from "next/link";
import { person } from "@/lib/content";
import { proofCount } from "@/lib/proof";

const sources = [
  {
    big: "4 recommendations",
    small: "On LinkedIn, from a CTO, two founders and a senior consultant.",
    href: `${person.linkedin}details/recommendations/`,
    cta: "Read them on LinkedIn",
  },
  {
    big: "14 five-star reviews",
    small: "On Fiverr since 2024, many from repeat clients in Ireland and Belgium.",
    href: person.fiverr,
    cta: "See them on Fiverr",
  },
  {
    big: "2 public credits",
    small: "ThePeopleRating thanked me on LinkedIn for its landing page and its redesign.",
    href: "https://www.linkedin.com/company/thepeoplerating/posts/",
    cta: "See the posts",
  },
];

// One real screenshot that reads well at this size, plus the sources anyone can check.
export default function Proof() {
  return (
    <div className="wrap proof-grid">
      <figure className="proof-shot">
        <a href="https://www.linkedin.com/company/thepeoplerating/posts/" target="_blank" rel="noopener" className="proof-img">
          <img src="/proof/thepeoplerating-post.webp" alt="ThePeopleRating's LinkedIn post: 'The design was created by Sadaqat Rasool. Thank you for the great work and for the thought you put into the details.'" width={824} height={628} loading="lazy" decoding="async" />
          <span className="sr"> (opens in a new tab)</span>
        </a>
        <figcaption>ThePeopleRating announcing my redesign on LinkedIn</figcaption>
      </figure>
      <div className="proof-sources">
        {sources.map((s) => (
          <a key={s.big} className="proof-source" href={s.href} target="_blank" rel="noopener">
            <b>{s.big}</b>
            <span>{s.small}</span>
            <em>{s.cta} &rarr;<span className="sr"> (opens in a new tab)</span></em>
          </a>
        ))}
        <Link className="btn btn-line proof-all" href="/reviews">See all {proofCount} screenshots of the originals</Link>
      </div>
    </div>
  );
}
