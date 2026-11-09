import { person } from "@/lib/content";

const shots = [
  {
    src: "/proof/thepeoplerating-post.webp", w: 824, h: 628,
    alt: "ThePeopleRating's LinkedIn post: 'The design was created by Sadaqat Rasool. Thank you for the great work and for the thought you put into the details.'",
    label: "ThePeopleRating credits my redesign on LinkedIn",
    href: "https://www.linkedin.com/company/thepeoplerating/posts/",
    cta: "See the post",
  },
  {
    src: "/proof/linkedin-recommendations.webp", w: 880, h: 377,
    alt: "LinkedIn recommendations from Richárd Kovács, CTO at HariKube, and Georgios Cappon, Founder of Pixoyo",
    label: "Recommendations on my LinkedIn profile",
    href: `${person.linkedin}details/recommendations/`,
    cta: "Read them on LinkedIn",
  },
  {
    src: "/proof/fiverr-review.webp", w: 1100, h: 232,
    alt: "A five-star Fiverr review from a client in Ireland for a custom website",
    label: "Five-star reviews on Fiverr",
    href: person.fiverr,
    cta: "See all reviews on Fiverr",
  },
];

// Screenshots of the original sources, each linked so anyone can check them.
export default function Proof() {
  return (
    <div className="wrap proof-grid">
      {shots.map((s, i) => (
        <figure className={`proof-shot ${i === 0 ? "proof-tall" : ""}`} key={s.src}>
          <a href={s.href} target="_blank" rel="noopener" className="proof-img">
            <img src={s.src} alt={s.alt} width={s.w} height={s.h} loading="lazy" decoding="async" />
            <span className="sr"> (opens in a new tab)</span>
          </a>
          <figcaption>
            <span>{s.label}</span>
            <a className="text-link" href={s.href} target="_blank" rel="noopener">{s.cta}<span className="sr"> (opens in a new tab)</span></a>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
