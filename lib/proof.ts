import { person } from "./content";

export type Shot = { src: string; w: number; h: number; alt: string; href: string; from: string };

const tpr = "https://www.linkedin.com/company/thepeoplerating/posts/";
const recs = `${person.linkedin}details/recommendations/`;

export const proofGroups: { title: string; note: string; shots: Shot[] }[] = [
  {
    title: "Public credits on LinkedIn",
    note: "ThePeopleRating thanked me publicly twice: for its landing page and for the redesign of the whole app.",
    shots: [
      { src: "/proof/thepeoplerating-post.webp", w: 824, h: 628, alt: "ThePeopleRating post: the design was created by Sadaqat Rasool", href: tpr, from: "ThePeopleRating, November 2026" },
      { src: "/proof/tpr-landing-post.webp", w: 640, h: 420, alt: "ThePeopleRating post: built by Sadaqat Rasool, clean design, solid performance, fully accessible", href: tpr, from: "ThePeopleRating, October 2026" },
    ],
  },
  {
    title: "LinkedIn recommendations",
    note: "Four recommendations from clients and a CTO, public on my LinkedIn profile.",
    shots: [
      { src: "/proof/linkedin-recommendations.webp", w: 1170, h: 342, alt: "Recommendation from Georgios Cappon, Founder of Pixoyo", href: recs, from: "Georgios Cappon, Pixoyo" },
      { src: "/proof/li-michael.webp", w: 1055, h: 237, alt: "Recommendation from Michael A. Campbell, Founder and CEO of SignalVerified", href: recs, from: "Michael A. Campbell, SignalVerified" },
      { src: "/proof/li-alexandre.webp", w: 1055, h: 196, alt: "Recommendation from Alexandre Konioukhov, Senior .NET Consultant", href: recs, from: "Alexandre Konioukhov" },
      { src: "/proof/li-richard.webp", w: 1100, h: 179, alt: "Recommendation from Richárd Kovács, CTO at HariKube", href: recs, from: "Richárd Kovács, HariKube" },
    ],
  },
  {
    title: "Fiverr reviews since 2024",
    note: "14 five-star reviews out of 16, many from clients who came back again and again.",
    shots: [
      { src: "/proof/fv-aaron.webp", w: 1100, h: 427, alt: "Five-star Fiverr review from a client in Ireland", href: person.fiverr, from: "Client in Ireland" },
      { src: "/proof/fv-ireland-repeat.webp", w: 1055, h: 415, alt: "Two five-star Fiverr reviews from a repeat client in Ireland", href: person.fiverr, from: "Repeat client in Ireland" },
      { src: "/proof/fv-ireland-belgium.webp", w: 1055, h: 470, alt: "Five-star Fiverr reviews from repeat clients in Ireland and Belgium", href: person.fiverr, from: "Repeat clients in Ireland and Belgium" },
      { src: "/proof/fv-belgium-us.webp", w: 881, h: 645, alt: "Five-star Fiverr reviews from a repeat client in Belgium and a client in the United States", href: person.fiverr, from: "Belgium and the United States" },
      { src: "/proof/fv-uk.webp", w: 1100, h: 194, alt: "Five-star Fiverr review from a client in the United Kingdom", href: person.fiverr, from: "Client in the United Kingdom" },
      { src: "/proof/fv-uk-us.webp", w: 986, h: 593, alt: "Five-star Fiverr reviews from clients in the United Kingdom and the United States", href: person.fiverr, from: "United Kingdom and United States" },
    ],
  },
];

export const proofCount = proofGroups.reduce((n, g) => n + g.shots.length, 0);
