import type { Metadata, Viewport } from "next";
import Link from "next/link";
import "@fontsource-variable/schibsted-grotesk";
import "@fontsource-variable/onest";
import "./globals.css";
import Header from "@/components/Header";
import { person } from "@/lib/content";
import { hirePages } from "@/lib/hire";

const SITE = process.env.NEXT_PUBLIC_SITE_URL || "https://sadaqatrasool.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: { default: "Sadaqat Rasool | Full-Stack & AI Developer (Next.js, React, Node.js)", template: "%s | Sadaqat Rasool" },
  description:
    "Sadaqat Rasool is a full-stack and AI software engineer from Islamabad, Pakistan (Next.js, React, TypeScript, Node.js, Python). He builds web apps, SaaS platforms and AI product advisors for clients in Europe, the UK, the US and Australia.",
  applicationName: "Sadaqat Rasool",
  authors: [{ name: "Sadaqat Rasool", url: SITE }],
  creator: "Sadaqat Rasool",
  keywords: ["Sadaqat Rasool", "Sadaqat Rasool developer", "full-stack developer Pakistan", "Next.js developer", "React developer", "AI developer", "MERN developer Islamabad", "freelance web developer"],
  alternates: { canonical: "/" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  openGraph: {
    type: "profile",
    url: "/",
    siteName: "Sadaqat Rasool",
    locale: "en_US",
    firstName: "Sadaqat",
    lastName: "Rasool",
    title: "Sadaqat Rasool | Full-Stack & AI Developer",
    description: "Web apps, SaaS platforms and AI features that work on real data. Open to remote roles and client projects.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Sadaqat Rasool, Full-Stack & AI Software Engineer" }],
  },
  twitter: { card: "summary_large_image", title: "Sadaqat Rasool | Full-Stack & AI Developer", description: "Web apps, SaaS platforms and AI features that work on real data." },
  icons: { icon: "/icon.svg", apple: "/sadaqat.webp" },
};

export const viewport: Viewport = {
  themeColor: [
    { color: "#0a1020" },
  ],
};

const themeScript = `try{var t=localStorage.getItem('theme');if(t==='dark'||t==='light')document.documentElement.dataset.theme=t}catch(e){}`;

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE}/#website`,
      url: `${SITE}/`,
      name: "Sadaqat Rasool",
      alternateName: ["Sadaqat Rasool Portfolio", "Sadaqat Rasool, Full-Stack & AI Developer"],
      inLanguage: "en",
      publisher: { "@id": `${SITE}/#person` },
    },
    {
      "@type": "ProfilePage",
      "@id": `${SITE}/#profile`,
      url: `${SITE}/`,
      name: "Sadaqat Rasool | Full-Stack & AI Developer",
      isPartOf: { "@id": `${SITE}/#website` },
      mainEntity: { "@id": `${SITE}/#person` },
    },
    {
      "@type": "Person",
      "@id": `${SITE}/#person`,
      name: person.name,
      givenName: "Sadaqat",
      familyName: "Rasool",
      url: `${SITE}/`,
      image: `${SITE}/sadaqat-lg.webp`,
      jobTitle: "Full-Stack & AI Software Engineer",
      description: "Full-stack and AI software engineer building web apps, SaaS platforms and AI product advisors with Next.js, React, TypeScript, Node.js and Python.",
      email: `mailto:${person.email}`,
      address: { "@type": "PostalAddress", addressLocality: "Islamabad", addressCountry: "PK" },
      nationality: { "@type": "Country", name: "Pakistan" },
      alumniOf: { "@type": "CollegeOrUniversity", name: "Namal University" },
      sameAs: [person.linkedin, person.github, person.fiverr],
      knowsAbout: ["Next.js", "React", "TypeScript", "JavaScript", "Node.js", "Express", "Python", "MongoDB", "PostgreSQL", "Supabase", "AI integrations", "LLM chatbots", "AI product advisors", "SaaS development", "MERN stack"],
      knowsLanguage: ["English", "Urdu"],
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>
        <Header />
        <main id="main">{children}</main>
        <footer className="site-foot">
          <div className="wrap foot-row">
            <p className="mute">© {new Date().getFullYear()} Sadaqat Rasool. Built with Next.js and TypeScript.</p>
            <div className="foot-links">
              <a href={`mailto:${person.email}`}>Email</a>
              <a href={person.linkedin} rel="me noopener" target="_blank">LinkedIn</a>
              <a href={person.github} rel="me noopener" target="_blank">GitHub</a>
              <a href={person.fiverr} rel="me noopener" target="_blank">Fiverr</a>
              <Link href="/reviews">Reviews</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </div>
          <nav className="wrap foot-hire" aria-label="Hire me as">
            <span>Hire me as a</span>
            {hirePages.map((h) => <Link key={h.slug} href={`/hire/${h.slug}`}>{h.short}</Link>)}
          </nav>
        </footer>
      </body>
    </html>
  );
}
