import type { Metadata, Viewport } from "next";
import Link from "next/link";
import "@fontsource-variable/schibsted-grotesk";
import "@fontsource-variable/onest";
import "./globals.css";
import Header from "@/components/Header";
import { person } from "@/lib/content";

const SITE = process.env.NEXT_PUBLIC_SITE_URL || "https://sadaqatrasool.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: { default: "Sadaqat Rasool · Full-Stack & AI Software Engineer", template: "%s | Sadaqat Rasool" },
  description:
    "Full-stack and AI developer (Next.js, React, TypeScript, Node.js). I build web apps, SaaS platforms and AI features that work on real data. Open to remote roles and client projects.",
  openGraph: {
    type: "website",
    title: "Sadaqat Rasool · Full-Stack & AI Software Engineer",
    description: "Web apps, SaaS platforms and AI features that work on real data. Open to remote roles and client projects.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Sadaqat Rasool · Full-Stack & AI Software Engineer" }],
  },
  twitter: { card: "summary_large_image" },
  icons: { icon: "/icon.svg" },
};

export const viewport: Viewport = {
  themeColor: [
    { color: "#0a1020" },
  ],
};

const themeScript = `try{var t=localStorage.getItem('theme');if(t==='dark'||t==='light')document.documentElement.dataset.theme=t}catch(e){}`;

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: person.name,
  jobTitle: "Full-Stack & AI Software Engineer",
  email: `mailto:${person.email}`,
  address: { "@type": "PostalAddress", addressLocality: "Islamabad", addressCountry: "PK" },
  alumniOf: "Namal University",
  sameAs: [person.linkedin, person.github],
  knowsAbout: ["Next.js", "React", "TypeScript", "Node.js", "AI integrations", "SaaS development"],
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
              <Link href="/contact">Contact</Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
