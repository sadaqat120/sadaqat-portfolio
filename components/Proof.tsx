import Link from "next/link";
import { person } from "@/lib/content";
import { proofCount } from "@/lib/proof";

const shots = [
  {
    src: "/proof/thepeoplerating-post.webp", w: 824, h: 628,
    alt: "ThePeopleRating's LinkedIn post: 'The design was created by Sadaqat Rasool. Thank you for the great work and for the thought you put into the details.'",
    label: "ThePeopleRating credits my redesign on LinkedIn",
    href: "https://www.linkedin.com/company/thepeoplerating/posts/",
    cta: "See the post",
  },
  {
    src: "/proof/fiverr-review.webp", w: 1100, h: 427,
    alt: "Sadaqat Rasool's Fiverr profile with five-star reviews from repeat clients in Ireland",
    label: "Repeat clients on Fiverr since 2024",
    href: person.fiverr,
    cta: "See all reviews on Fiverr",
  },
  {
    src: "/proof/linkedin-recommendations.webp", w: 1170, h: 342,
    alt: "LinkedIn recommendation from Georgios Cappon, Founder & Creative Director at Pixoyo: I would recommend Sadaqat without hesitation",
    label: "Recommendations on my LinkedIn profile",
    href: `${person.linkedin}details/recommendations/`,
    cta: "Read them on LinkedIn",
  },
];

// Screenshots of the original sources, each linked so anyone can check them.
export default function Proof() {
  return (
    <div className="wrap proof-grid">
      {shots.map((s, i) => (
        <figure className={`proof-shot ${i === 2 ? "proof-wide" : ""}`} key={s.src}>
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
      <p className="proof-more"><Link className="btn btn-line" href="/reviews">See all {proofCount} review screenshots</Link></p>
    </div>
  );
}
