// Landing pages for the searches clients actually type ("hire a Next.js developer", ...).
// Same rule as content.ts: every claim here must point at a real project or fact.

export type HirePage = {
  slug: string;
  short: string; // link text
  metaTitle: string;
  description: string;
  h1: string;
  lede: string;
  build: string[];
  projects: string[]; // project slugs from content.ts
  why: string[];
  price: string;
  faqs: { q: string; a: string }[];
};

const common = {
  where: "I work remotely from Islamabad, Pakistan (UTC+5) and overlap with European, UK and US working hours.",
  start: "Send a short description of what you need by email, LinkedIn or WhatsApp. I reply within a day with questions or a clear plan and a fixed price before any work starts.",
};

export const hirePages: HirePage[] = [
  {
    slug: "full-stack-developer",
    short: "Full-stack developer",
    metaTitle: "Hire a Full-Stack Developer (Next.js, React, Node.js) | Remote",
    description:
      "Hire Sadaqat Rasool, a remote full-stack developer (Next.js, React, TypeScript, Node.js, PostgreSQL, MongoDB) who builds and ships web apps, SaaS platforms and AI features for clients in Europe, the UK, the US and Australia.",
    h1: "Hire a full-stack developer who ships the whole thing",
    lede:
      "Front end, back end, database, payments, AI and deployment, from the first question to the live release. I'm Sadaqat, a full-stack developer working remotely with clients in Europe, the UK, the US and Australia.",
    build: [
      "Web apps and SaaS platforms with logins, roles and dashboards",
      "Client portals and internal tools on PostgreSQL (Supabase) or MongoDB",
      "Stripe payments, webhooks and partner or referral systems",
      "AI features that answer from your own data",
      "Fixes, speed and security work on live sites",
    ],
    projects: ["mybuildhub", "partner-platform", "forgeai", "loomsight"],
    why: [
      "Built MyBuildHub, a construction project-management platform, from scratch on a remote contract for a company in Sydney.",
      "My own AI website platform, ForgeAI, runs on 161 automated tests.",
      "A Stripe partner platform for a US health startup passed 22 of 22 end-to-end checks.",
      "Four public LinkedIn recommendations and 14 five-star Fiverr reviews.",
    ],
    price: "Web apps and SaaS from $1,500 fixed; ongoing work at $15–20 an hour.",
    faqs: [
      { q: "Which stack do you use?", a: "Mostly Next.js, React and TypeScript on the front end, Node.js and Express or Next.js API routes on the back end, and PostgreSQL (Supabase) or MongoDB for data. I deploy on Vercel, Netlify or Azure." },
      { q: "Can you join an existing team or codebase?", a: "Yes. I've worked inside existing products and repositories, sending small, tested pull requests that are easy to review." },
      { q: "Where are you based and which hours do you work?", a: common.where },
      { q: "How do we start?", a: common.start },
    ],
  },
  {
    slug: "nextjs-developer",
    short: "Next.js developer",
    metaTitle: "Hire a Next.js Developer (App Router, TypeScript) | Remote Freelancer",
    description:
      "Remote Next.js developer for hire: App Router, React 19, TypeScript, server components, Supabase, Stripe and AI integrations. Fast, accessible sites and web apps with Lighthouse scores of 90+.",
    h1: "Hire a Next.js developer for fast, well-built web apps",
    lede:
      "I build with Next.js every day: App Router, server components, TypeScript and static generation, deployed on Vercel. This portfolio itself is Next.js and scores 100 on desktop performance in Google PageSpeed.",
    build: [
      "New Next.js apps and SaaS products, from design to launch",
      "Moving an older React or WordPress site to Next.js",
      "SEO setup: metadata, sitemaps, structured data and Search Console",
      "Speed and Core Web Vitals fixes",
      "Supabase, Stripe and AI integrations",
    ],
    projects: ["forgeai", "partner-platform", "after-hours-assistant", "thepeoplerating"],
    why: [
      "ForgeAI (Next.js 15, React 19, Supabase) is my own AI website builder with 161 automated tests.",
      "A Next.js 15 partner platform with Stripe webhooks for a US health startup.",
      "Accessibility and speed checked with Lighthouse, axe and Playwright on every project.",
    ],
    price: "Next.js websites from $500; web apps from $1,500; fixes from $100.",
    faqs: [
      { q: "Do you use the App Router?", a: "Yes. New projects use the App Router with server components, TypeScript in strict mode and static generation where it fits." },
      { q: "Can you improve the speed or SEO of an existing Next.js site?", a: "Yes. I start with a Lighthouse and Search Console check, then fix images, scripts, metadata and structured data, and show the before and after scores." },
      { q: "Where are you based?", a: common.where },
      { q: "How do we start?", a: common.start },
    ],
  },
  {
    slug: "react-developer",
    short: "React developer",
    metaTitle: "Hire a React Developer (React 19, TypeScript) | Remote Freelancer",
    description:
      "Hire a remote React developer for interfaces that are fast, accessible and tested: React 19, TypeScript, Next.js, Tailwind CSS and Framer Motion, with clean, reviewable code.",
    h1: "Hire a React developer who cares about the details",
    lede:
      "Interfaces that load fast, work on a real phone and pass accessibility checks. I build React front ends in TypeScript and connect them to your API or build the API too.",
    build: [
      "Dashboards, portals and admin panels",
      "Redesigns of existing React apps",
      "Component libraries and design-to-code work",
      "Accessible forms, filters and complex UI such as Gantt timelines",
    ],
    projects: ["mybuildhub", "thepeoplerating", "loomsight", "website-demos"],
    why: [
      "Owned the Gantt timeline in MyBuildHub, a React and Node.js project-management platform.",
      "Redesigned ThePeopleRating; the client credited the design publicly on LinkedIn.",
      "Every interface is checked on desktop and phone sizes with no horizontal overflow or console errors.",
    ],
    price: "From $15–20 an hour, or a fixed price per feature.",
    faqs: [
      { q: "Do you write TypeScript?", a: "Yes, in strict mode by default." },
      { q: "Can you work from Figma designs?", a: "Yes, or I can design the interface myself if you don't have one yet." },
      { q: "Where are you based?", a: common.where },
      { q: "How do we start?", a: common.start },
    ],
  },
  {
    slug: "mern-stack-developer",
    short: "MERN stack developer",
    metaTitle: "Hire a MERN Stack Developer (MongoDB, Express, React, Node.js)",
    description:
      "Remote MERN stack developer: MongoDB, Express, React and Node.js web apps, REST APIs, authentication and roles. Built a construction project-management platform for a company in Sydney.",
    h1: "Hire a MERN stack developer",
    lede:
      "MongoDB, Express, React and Node.js, built end to end: data model, REST API, authentication, roles and the React interface on top.",
    build: [
      "Project-management and booking platforms",
      "REST APIs with authentication and role-based access",
      "Admin dashboards and reports",
      "AI features added to an existing MERN app",
    ],
    projects: ["mybuildhub", "farm-management-system", "loomsight"],
    why: [
      "Built MyBuildHub on the MERN stack from scratch on a remote contract in Australia.",
      "A farm-management system on MERN with Google Gemini built in.",
      "Freelance MERN work for clients in Ireland, Belgium, the UK and the US since 2024.",
    ],
    price: "From $15–20 an hour, or a fixed price per project.",
    faqs: [
      { q: "MongoDB or PostgreSQL?", a: "Both. I use MongoDB for flexible documents and PostgreSQL when the data is relational or needs row-level security." },
      { q: "Can you take over an existing MERN project?", a: "Yes. I start by reading the code and listing what's broken or risky before changing anything." },
      { q: "Where are you based?", a: common.where },
      { q: "How do we start?", a: common.start },
    ],
  },
  {
    slug: "ai-chatbot-developer",
    short: "AI chatbot developer",
    metaTitle: "Hire an AI Chatbot & AI Integration Developer (LLM) | Remote",
    description:
      "AI developer for hire: chatbots and product advisors that answer only from your own products, prices and documents. LLM integrations in Next.js and Python, tested on real customer questions.",
    h1: "Hire an AI developer for chatbots that don't make things up",
    lede:
      "AI assistants and product advisors that answer from your own catalogue, prices and documents, and refuse to invent anything that isn't there. Tested on real customer questions before launch.",
    build: [
      "AI product advisors for webshops",
      "Customer-service chatbots trained on your documents",
      "AI features inside your existing web app",
      "Multi-step AI workflows with validated, structured output",
    ],
    projects: ["ai-product-advisor", "paving-advisor", "gift-advisor", "after-hours-assistant"],
    why: [
      "An AI product advisor that was 100% correct on 45 real customer questions, in Dutch and English.",
      "A paving advisor that recommends from 108 real products and calculates the full materials list.",
      "Every AI answer is checked against the real data before it reaches a customer.",
    ],
    price: "AI advisors and chatbots from $500 fixed.",
    faqs: [
      { q: "Which AI models do you use?", a: "Current LLM APIs such as Google Gemini and others, chosen per project for quality, speed and cost." },
      { q: "How do you stop the AI from inventing answers?", a: "It can only answer from your own data, the output is validated against a schema, and it's tested on real customer questions before launch." },
      { q: "Can it work on my existing website?", a: "Yes. It can be added as a widget to Shopify, WooCommerce, WordPress, Craft CMS or a custom site." },
      { q: "How do we start?", a: common.start },
    ],
  },
  {
    slug: "freelance-developer-pakistan",
    short: "Freelance developer in Pakistan",
    metaTitle: "Freelance Full-Stack Developer in Pakistan (Islamabad) for Remote Clients",
    description:
      "Sadaqat Rasool is a freelance full-stack and AI developer in Islamabad, Pakistan, working remotely with clients in Europe, the UK, the US and Australia. Next.js, React, Node.js, Python.",
    h1: "A freelance developer in Pakistan, working on your hours",
    lede:
      "I'm a full-stack and AI developer in Islamabad with a Computer Science degree from Namal University. Since 2024 I've worked remotely with clients in the US, UK, Ireland, Belgium, Germany, the Netherlands and Australia.",
    build: [
      "Websites and web apps for small businesses",
      "Long-term remote contracts with product teams",
      "White-label development for agencies",
      "Fixes and improvements on live sites",
    ],
    projects: ["mybuildhub", "pixoyo", "partner-platform", "ai-product-advisor"],
    why: [
      "Clients in 6 countries, including repeat clients in Ireland and Belgium.",
      "Clear written updates and fixed prices agreed before work starts.",
      "Fluent English; I work in European, UK or US hours.",
    ],
    price: "$15–20 an hour, or a fixed price per project.",
    faqs: [
      { q: "How do payments work?", a: "For small jobs you pay once it's live and you're happy. Larger projects are split into milestones. We agree the payment method up front, and Upwork or Fiverr also work if you prefer." },
      { q: "Which hours do you work?", a: common.where },
      { q: "Do you work with agencies?", a: "Yes, including white-label work under your agency's name." },
      { q: "How do we start?", a: common.start },
    ],
  },
];

export const getHire = (slug: string) => hirePages.find((h) => h.slug === slug);
