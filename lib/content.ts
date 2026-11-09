// Every fact on this site comes from live projects, the CV, LinkedIn and public recommendations.
// Keep it that way: if something can't be checked, it doesn't go here.

export const person = {
  name: "Sadaqat Rasool",
  role: "Full-Stack & AI Software Engineer",
  email: "sadaqatrasoolmsr@gmail.com",
  phone: "+92 328 0473867",
  whatsapp: "https://wa.me/923280473867",
  linkedin: "https://www.linkedin.com/in/sadaqatrasool/",
  github: "https://github.com/sadaqat120",
  fiverr: "https://www.fiverr.com/sadaqat1081",
  location: "Islamabad, Pakistan (UTC+5)",
  hours: "Works in European, UK or US hours",
  cv: "/Sadaqat_Rasool_CV.pdf",
};

export type Shot = { src: string; alt: string };

export type Project = {
  slug: string;
  title: string;
  client: string;
  kind: "Paid client work" | "Client build" | "Own product" | "Working preview" | "Open source" | "Website template" | "University project";
  year: string;
  oneLine: string;
  url?: string;
  urlLabel?: string;
  repo?: string;
  cover?: Shot;
  mobile?: Shot;
  gallery?: Shot[];
  video?: { src: string; poster: string; label: string };
  demo?: { src: string; poster: string };
  problem: string;
  built: string[];
  stack: string[];
  results: string[];
  note?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "paving-advisor",
    repo: "https://github.com/sadaqat120/ai-product-advisor-showcase",
    demo: { src: "/work/video/paving.mp4", poster: "/work/video/paving.webp" },
    title: "AI paving advisor with full materials calculation",
    client: "A Dutch paving and garden-materials company with a 5,000 m² showroom",
    kind: "Working preview",
    year: "Nov 2026",
    oneLine: "Customers describe their terrace, driveway or path and get 3 matching products from the real range, with a complete materials list, price and a quote request.",
    cover: { src: "/work/paving.webp", alt: "The paving advisor's 'Hulp bij kiezen?' button on the company's homepage" },
    mobile: { src: "/work/paving-m.webp", alt: "The paving advisor on a phone" },
    video: { src: "/work/paving-walkthrough.mp4", poster: "/work/video/paving.webp", label: "55-second walkthrough" },
    problem:
      "Paving is bought by the square metre, and customers don't know how many tiles, edging, sand and joint filler they need. They call, email or give up.",
    built: [
      "An advisor trained on 108 products from the company's own catalogue, with their prices, offers, stock and photos.",
      "A complete calculation per choice: tiles including cutting waste, edging, bedding sand and joint filler.",
      "A quote request with sizes and product, plus call and showroom-visit buttons.",
      "A dashboard that shows what customers ask, which products they choose and who wants a quote.",
      "Embeds with one line of code, locked so it only runs on the company's own domain. Light and dark, phone and desktop.",
    ],
    stack: ["Next.js", "TypeScript", "AI product matching", "Embeddable widget"],
    results: ["108 real products, every answer limited to the actual range", "Owner said yes to the free test version within a day"],
    featured: true,
  },
  {
    slug: "partner-platform",
    repo: "https://github.com/sadaqat120/stripe-partner-platform-showcase",
    demo: { src: "/work/video/partners.mp4", poster: "/work/video/partners.webp" },
    title: "Partner and referral platform with Stripe",
    client: "A US men's health startup",
    kind: "Client build",
    year: "Nov 2026",
    oneLine: "Barbershops and urology practices sign up, get their own QR code, and every paid subscription through their code is credited to them automatically.",
    cover: { src: "/work/partners.webp", alt: "Partner program home page: 'Men won't talk in a feed. They talk in the chair.'" },
    mobile: { src: "/work/partners-m.webp", alt: "The partner program on a phone" },
    video: { src: "/work/partners-walkthrough.mp4", poster: "/work/video/partners.webp", label: "72-second walkthrough" },
    problem:
      "The startup wanted barbers and urologists to refer men to its app, but had no way to sign partners up, track referrals or pay rewards, and no health data could ever be shared.",
    built: [
      "3-step partner sign-up with validation and spam protection, a unique code and QR code per partner.",
      "QR scan tracking that forwards to the app with the partner code attached.",
      "A Stripe webhook that credits each new paid subscription to the right partner and records the reward, with duplicate and cancellation handling.",
      "A private dashboard per partner and an admin HQ: approvals, payouts, CSV export.",
      "Printable partner kit in English and Spanish. Only counts are stored, never health information.",
    ],
    stack: ["Next.js 15", "PostgreSQL", "Stripe webhooks", "TypeScript"],
    results: ["22 of 22 end-to-end checks passing, including signed webhooks", "Delivered with a step-by-step integration guide"],
    featured: true,
  },
  {
    slug: "gift-advisor",
    repo: "https://github.com/sadaqat120/ai-product-advisor-showcase",
    demo: { src: "/work/video/gifts.mp4", poster: "/work/video/gifts.webp" },
    title: "AI business-gift advisor",
    client: "A Dutch corporate-gifts webshop",
    kind: "Working preview",
    year: "Nov 2026",
    oneLine: "Buyers type something like \"150 Christmas gifts for staff, around €25, sustainable\" and get matching products from 240 items, with prices and quantities.",
    cover: { src: "/work/gifts.webp", alt: "The gift advisor on the webshop's homepage" },
    mobile: { src: "/work/gifts-m.webp", alt: "The gift advisor on a phone" },
    video: { src: "/work/gifts-walkthrough.mp4", poster: "/work/video/gifts.webp", label: "55-second walkthrough" },
    problem: "In high season, business buyers have a budget and a number of people, but no time to browse hundreds of gifts.",
    built: [
      "Matching on 240 real products: occasion, budget per person, quantity and style (luxury, sustainable, practical).",
      "Budget-aware scoring so suggestions land near the target price, not just under it.",
      "A launcher that sits on the existing shop, locked to the shop's own domain.",
    ],
    stack: ["Next.js", "TypeScript", "Product matching", "GitHub Actions"],
    results: ["240 products with real photos and prices", "Owner: \"the first setup looks genuinely great\""],
    featured: true,
  },
  {
    slug: "forgeai",
    demo: { src: "/work/video/forgeai.mp4", poster: "/work/video/forgeai.webp" },
    title: "ForgeAI",
    client: "My own product",
    kind: "Own product",
    year: "2026",
    oneLine: "An AI platform that builds a complete, multi-page business website from one short description.",
    url: "https://forgeai-beryl.vercel.app/",
    urlLabel: "forgeai-beryl.vercel.app",
    repo: "https://github.com/sadaqat120/forgeai-showcase",
    cover: { src: "/work/forgeai.webp", alt: "ForgeAI home page with the headline 'Build a professional website from one idea' and a live preview of a generated restaurant site" },
    mobile: { src: "/work/forgeai-m.webp", alt: "ForgeAI on a phone" },
    problem:
      "Small business owners need a proper website but can't design one, and most AI builders produce pages that look fine at first and break on real content.",
    built: [
      "A multi-step AI workflow: clarifying questions, web research, page planning, then copy and images for every page.",
      "Chat editing (\"make the hero bolder\", \"add a services page\"), a visual design panel and previews on every device.",
      "Version history for every change, one-click publishing and ZIP export.",
      "Every AI response is checked against a strict schema before it's saved; if it fails, the app retries instead of saving broken data.",
      "Row-Level Security in the database and an ownership check on every API route, so no user can touch another user's project.",
    ],
    stack: ["Next.js 15", "React 19", "TypeScript", "Supabase (PostgreSQL)", "LLM APIs", "Vercel"],
    results: ["Live public beta", "161 automated tests", "A complete site in about 2–3 minutes"],
    featured: true,
  },
  {
    slug: "mybuildhub",
    repo: "https://github.com/sadaqat120/mybuildhub-saas-showcase",
    demo: { src: "/work/video/mybuildhub.mp4", poster: "/work/video/mybuildhub.webp" },
    title: "MyBuildHub",
    client: "Pembridge, Sydney",
    kind: "Paid client work",
    year: "Feb – May 2026",
    oneLine: "A construction project-management platform, built from scratch on a remote contract for an Australian company.",
    url: "https://mybuildhub.com.au/",
    urlLabel: "mybuildhub.com.au",
    cover: { src: "/work/mybuildhub.webp", alt: "MyBuildHub public website: 'A big life project. A clearer way to build.'" },
    mobile: { src: "/work/mybuildhub-m.webp", alt: "MyBuildHub on a phone" },
    problem:
      "Builders and home owners were tracking projects across spreadsheets and messages. They needed one place for tasks, milestones, dependencies and daily progress.",
    built: [
      "Built the platform from the ground up together with one other developer, frontend from approved designs plus backend and database.",
      "Owned the Timeline: a full Gantt module with drag-and-drop, a working calendar that skips weekends and holidays, and all four dependency types.",
      "Dates and durations calculate themselves, progress rolls up from tasks to the project, with year, month and week views and PDF export.",
      "Projects, tasks, milestones, daily progress and To-Do / In Progress / Complete statuses.",
      "Role-based access, privacy levels on project information, and data export.",
    ],
    stack: ["React", "Node.js", "Express", "MongoDB", "REST APIs"],
    results: ["Delivered on a 4-month remote contract", "Timeline module owned end to end"],
    note: "The app itself is private to Pembridge's users; the link goes to the public product site.",
    featured: true,
  },
  {
    slug: "ai-product-advisor",
    repo: "https://github.com/sadaqat120/ai-product-advisor-showcase",
    demo: { src: "/work/video/fyoil.mp4", poster: "/work/video/fyoil.webp" },
    title: "AI product advisor",
    client: "FYOIL, a Dutch oil webshop",
    kind: "Working preview",
    year: "2026",
    oneLine: "Customers describe their problem in their own words and get the right products from the shop's real catalogue.",
    url: "https://fyoil-product-advisor.vercel.app/",
    urlLabel: "fyoil-product-advisor.vercel.app",
    cover: { src: "/work/fyoil.webp", alt: "FYOIL product advisor asking 'Welk product past bij jouw probleem?' with example questions" },
    mobile: { src: "/work/fyoil-m.webp", alt: "FYOIL product advisor on a phone" },
    problem:
      "In a shop, staff ask a few questions and point to the right oil. Online, customers had to guess between dozens of similar products, and generic chatbots invent products that don't exist.",
    built: [
      "An advisor built on the shop's real catalogue of 41 products, in Dutch and English.",
      "It asks short follow-up questions, then shows 2–3 products with the reason for each and a link to buy.",
      "It only recommends products that exist and are in the catalogue; anything else is refused.",
      "A report of questions it couldn't answer, which shows the shop what customers look for and don't find.",
    ],
    stack: ["Next.js", "TypeScript", "LLM API", "Vercel"],
    results: ["100% correct on a 45-question test set, run 3 times", "First answer in about 0.4 seconds"],
    note: "A working preview on the real catalogue, built to show the owner before he decides.",
    featured: true,
  },
  {
    slug: "loomsight",
    demo: { src: "/work/video/loomsight.mp4", poster: "/work/video/loomsight.webp" },
    title: "Loomsight",
    client: "Multifabric, a textile manufacturer",
    kind: "Working preview",
    year: "2026",
    oneLine: "A quality-control portal that replaces spreadsheets between a textile mill, its inspectors and its buyers.",
    url: "https://multifabric-qc-portal.vercel.app/",
    urlLabel: "multifabric-qc-portal.vercel.app",
    repo: "https://github.com/sadaqat120/loomsight-showcase",
    cover: { src: "/work/loomsight.webp", alt: "Loomsight buyer view with order milestones and QC status for each purchase order" },
    mobile: { src: "/work/loomsight-m.webp", alt: "Loomsight on a phone" },
    problem:
      "Importers had no live view of their orders, and inspection results travelled by spreadsheet and WhatsApp, so problems showed up late.",
    built: [
      "Three roles in one portal: a buyer view, a phone-first inspector app and an admin view.",
      "The inspector app works in English and Urdu, built for use on the factory floor.",
      "AQL inspection results, corrective actions that follow a failed check, and supplier scorecards.",
      "Each buyer only sees their own orders.",
    ],
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Role-based access"],
    results: ["Buyer, inspector and admin flows working end to end", "Bilingual inspector app"],
    featured: true,
  },
  {
    slug: "after-hours-assistant",
    repo: "https://github.com/sadaqat120/ai-after-hours-assistant-showcase",
    demo: { src: "/work/primecure-demo.mp4", poster: "/work/primecure-demo-poster.webp" },
    title: "After-hours AI assistant",
    client: "A US medical billing company",
    kind: "Working preview",
    year: "2026",
    oneLine: "An assistant that answers practice owners in English or Spanish after 5 PM and has a ranked call list ready at 8 AM.",
    url: "https://primecure-after-hours-preview.vercel.app/",
    urlLabel: "primecure-after-hours-preview.vercel.app",
    cover: { src: "/work/primecure.webp", alt: "After-hours assistant home page with a live office-hours dial showing the office is closed" },
    mobile: { src: "/work/primecure-m.webp", alt: "After-hours assistant on a phone" },
    gallery: [
      { src: "/work/primecure-after-hours-booking.webp", alt: "A practice owner booking a free billing audit with the assistant after hours" },
      { src: "/work/primecure-morning-call-list-dark.webp", alt: "The 8 AM call list in dark mode, ranked by priority" },
      { src: "/work/primecure-white-label-builder.webp", alt: "The white-label builder that rebrands the assistant for another company" },
    ],
    video: { src: "/work/primecure-demo.mp4", poster: "/work/primecure-demo-poster.webp", label: "74-second walkthrough" },
    problem:
      "Practice owners look for a billing partner in the evening, when the office is closed. Those leads went to voicemail and were lost by morning.",
    built: [
      "An assistant that answers questions in English or Spanish and books a free billing audit, any hour.",
      "A morning summary: every overnight lead ranked, with the reason, ready for the team at 8 AM.",
      "A white-label builder so the same assistant can carry another company's name and colours.",
      "Light and dark themes, works on phones, and no patient data in the chat.",
    ],
    stack: ["Next.js 15", "React 19", "TypeScript", "Playwright tests"],
    results: ["Full booking flow tested on phone and desktop", "0 accessibility errors in automated checks"],
    note: "A working preview made for the company's agency.",
    featured: false,
  },
  {
    slug: "thepeoplerating",
    demo: { src: "/work/video/peoplerating.mp4", poster: "/work/video/peoplerating.webp" },
    title: "ThePeopleRating",
    client: "Alexandre Konioukhov",
    kind: "Paid client work",
    year: "Sep 2026",
    oneLine: "The landing page and a small brand kit for a platform where people rate public figures.",
    url: "https://thepeoplerating-landing.vercel.app/",
    urlLabel: "thepeoplerating-landing.vercel.app",
    cover: { src: "/work/peoplerating.webp", alt: "ThePeopleRating landing page: 'Rate the people who shape the world'" },
    mobile: { src: "/work/peoplerating-m.webp", alt: "ThePeopleRating on a phone" },
    problem: "The founder had the product idea and a logo, but no page that explained it clearly or matched the app's look.",
    built: [
      "A responsive landing page that explains the idea in one screen.",
      "A brand kit built around the logo: colours, fonts and buttons, so the app and the site share one look.",
    ],
    stack: ["Next.js", "TypeScript", "Vercel"],
    results: ["Lighthouse 100 for performance, accessibility and SEO on desktop", "Public recommendation from the client"],
    featured: false,
  },
  {
    slug: "pixoyo",
    title: "Website fixes for Pixoyo",
    client: "Pixoyo, a creative agency in Amsterdam",
    kind: "Paid client work",
    year: "Oct 2026",
    oneLine: "Search, speed, accessibility and security fixes on a live Craft CMS site in Dutch and English, without touching the design.",
    url: "https://pixoyo.nl/",
    urlLabel: "pixoyo.nl",
    problem:
      "Google couldn't tell the Dutch and English pages apart, animations were heavy GIFs, and a few pages crashed with server errors.",
    built: [
      "hreflang and canonical tags on every page, a 34-page sitemap and robots.txt.",
      "Heavy GIF animations replaced by video, about half the size.",
      "Browser caching, image sizes and lazy loading.",
      "Accessibility labels, 13 copy fixes and 10 new meta descriptions in both languages.",
      "Found and fixed extra problems: pages returning server errors, an empty 404 page, public test pages, and debug mode left on in production.",
    ],
    stack: ["Craft CMS", "PHP hosting", "Lighthouse", "Google Search Console"],
    results: ["Accessibility 91 → 98", "Mobile performance 46 → 61", "Full backup before any change"],
    note: "Client's own site; no screenshots of their work are shown here.",
    featured: false,
  },
  {
    slug: "harikube",
    title: "Open-source leaderboard",
    client: "HariKube, Kubernetes Performance Challenge",
    kind: "Open source",
    year: "Oct 2026",
    oneLine: "A leaderboard feature for an open performance challenge, proposed, built and merged by the company's CTO.",
    url: "https://github.com/HariKube/kubernetes-performance-challenge/pull/4",
    urlLabel: "Pull request #4 (merged)",
    problem: "Challenge results had no shared leaderboard, so participants couldn't compare runs.",
    built: [
      "A short, specific proposal first, agreed with the CTO before writing code.",
      "The leaderboard itself, with tests.",
    ],
    stack: ["Open-source workflow", "GitHub pull requests", "Tests"],
    results: ["Merged by the CTO", "Recommendation: \"clear, well specified and actionable\""],
    featured: false,
  },
  {
    slug: "website-demos",
    demo: { src: "/work/video/emberoak.mp4", poster: "/work/video/emberoak.webp" },
    title: "Ember & Oak and Prime Cuts",
    client: "Restaurant and barber website templates",
    kind: "Website template",
    year: "2026",
    oneLine: "Two complete small-business websites that show what a restaurant or barber shop gets: menus, bookings, events and galleries.",
    url: "https://ember-oak-restaurant-1wai.vercel.app/",
    urlLabel: "Ember & Oak",
    repo: "https://github.com/sadaqat120/ember-oak-restaurant",
    cover: { src: "/work/emberoak.webp", alt: "Ember & Oak restaurant website: 'Cooking, the way fire intended it.'" },
    mobile: { src: "/work/emberoak-m.webp", alt: "Ember & Oak on a phone" },
    gallery: [{ src: "/work/primecuts.webp", alt: "Prime Cuts barber website: 'Premium Barber Experience in the Heart of the City'" }],
    problem: "Local businesses want to see what their site could look like before paying for one.",
    built: [
      "Ember & Oak: menus, reservations, catering, events, gallery and visiting details.",
      "Prime Cuts: services, gallery and online booking through Calendly.",
    ],
    stack: ["React", "Responsive design", "Vercel"],
    results: ["Used as live examples in client conversations"],
    featured: false,
  },
  {
    slug: "farm-management-system",
    title: "Farm Management System",
    client: "Final-year project, Namal University (with NETSOL Technologies)",
    kind: "University project",
    year: "2024 – 2025",
    oneLine: "A web platform for small farmers to manage crops, livestock and resources, with an AI assistant in English and Urdu.",
    repo: "https://github.com/sadaqat120/FYP_FMS",
    problem: "Small farmers kept records on paper and had nowhere to ask quick farming questions in their own language.",
    built: [
      "Six modules: crops, livestock, resources, reminders, printable records and an AI chatbot.",
      "A Gemini-powered assistant that answers from the farmer's own stored data, in English and Urdu.",
      "JWT login, email verification and task reminders.",
    ],
    stack: ["MongoDB", "Express", "React", "Node.js", "Google Gemini"],
    results: ["Presented at Namal University Open House, May 2025"],
    featured: false,
  },
];

export const featured = projects.filter((p) => p.featured);
export const getProject = (slug: string) => projects.find((p) => p.slug === slug);

export type Quote = { text: string; name: string; role: string; relation: string; date: string; source: string; stars?: number };

export const quotes: Quote[] = [
  {
    text: "The design was created by Sadaqat Rasool. Thank you for the great work and for the thought you put into the details.",
    name: "ThePeopleRating",
    role: "Announcing the app's new design to its users",
    relation: "Client",
    date: "November 2026",
    source: "Public LinkedIn post",
  },
  {
    text: "Built by Sadaqat Rasool: clean design, solid performance, fully accessible. Thanks for the work.",
    name: "ThePeopleRating",
    role: "Launching its new landing page",
    relation: "Client",
    date: "October 2026",
    source: "Public LinkedIn post",
  },
  {
    text: "Working with Sadaqat was a real pleasure. He's not only a genuinely kind person, but also exceptionally sharp. He stepped in to fix several issues on my website and handled them with remarkable precision and deep technical knowledge. Everything was resolved cleanly, and I never had to worry about it.",
    name: "Georgios Cappon",
    role: "Founder & Creative Director, Pixoyo",
    relation: "Client",
    date: "October 2026",
    source: "LinkedIn recommendation",
  },
  {
    text: "Sadaqat helped our free for all competition. His proposal was clear, well specified, and actionable. The feature he delivered was clear, and well tested.",
    name: "Richárd Kovács",
    role: "Chief Technology Officer, HariKube",
    relation: "Open-source collaboration",
    date: "October 2026",
    source: "LinkedIn recommendation",
  },
  {
    text: "Sadaqat reached out with a sharp review of our SignalVerified demo, looked at from an HR buyer's point of view. Within minutes, he spotted clear, specific issues, from a score mismatch to how our AI wording reads to buyers, and explained why each one mattered. Fast, thoughtful, and genuinely useful.",
    name: "Michael A. Campbell, Ed.D.",
    role: "Founder & CEO, SignalVerified; former Intel GM",
    relation: "Client",
    date: "October 2026",
    source: "LinkedIn recommendation",
  },
  {
    text: "He quickly understood the concept and turned it into a clean, modern, and professional design. He was responsive, easy to work with, and open to feedback throughout the process.",
    name: "Alexandre Konioukhov",
    role: "Senior .NET Consultant",
    relation: "Client",
    date: "September 2026",
    source: "LinkedIn recommendation",
  },
  {
    text: "Sadaqat did an amazing job, great communication, great at explaining each function and area in which he worked in, offered places to improve on and gave me an amazing delivery.",
    name: "Client in Ireland",
    role: "Custom website order",
    relation: "Client",
    date: "2026",
    source: "Fiverr review",
    stars: 5,
  },
  {
    text: "He was perfect - went so far above and beyond. I would definitely recommend them!",
    name: "Client in the United Kingdom",
    role: "API and integrations order",
    relation: "Client",
    date: "2024",
    source: "Fiverr review",
    stars: 5,
  },
  {
    text: "He was amazing to deal with, we will work again soon.",
    name: "Repeat client in Ireland",
    role: "Custom website orders",
    relation: "Client",
    date: "2026",
    source: "Fiverr review",
    stars: 5,
  },
  {
    text: "Sadaqat did great. He understood my requirements and delivered quick results with fair price. Thanks!",
    name: "Client in Pakistan",
    role: "Bug fixes order",
    relation: "Client",
    date: "2024",
    source: "Fiverr review",
    stars: 5,
  },
];

export const services = [
  {
    id: "ai-advisor",
    name: "AI product advisor or chatbot",
    who: "Webshops and service businesses whose customers ask the same questions before they buy.",
    get: "An assistant that answers from your own products, prices and documents, never invented ones, with a report of what customers ask.",
    price: "from $500",
    time: "1–2 weeks",
  },
  {
    id: "web-app",
    name: "Web app, SaaS or client portal",
    who: "Founders and companies replacing spreadsheets, or turning an idea into a product.",
    get: "Logins and roles, dashboards, data your team can trust, tests, and code you own.",
    price: "from $1,500",
    time: "3–8 weeks",
  },
  {
    id: "website",
    name: "Business website",
    who: "Restaurants, clinics, trades, coaches and local services.",
    get: "A fast site that works on phones, ranks on Google and turns visitors into bookings or calls.",
    price: "from $500",
    time: "1–2 weeks",
  },
  {
    id: "fixes",
    name: "Fixes for a live website",
    who: "Owners and agencies with a site that is slow, broken or invisible on Google.",
    get: "A written check first, then fixes with a full backup, no design changes, and before-and-after proof.",
    price: "from $100",
    time: "1–3 days",
  },
  {
    id: "white-label",
    name: "Extra developer for agencies",
    who: "Agencies with more client work than developers.",
    get: "Next.js, React, Node.js or WordPress work under your name, from brief to done.",
    price: "$15–20 an hour, or a fixed price per task",
    time: "Starts within days",
  },
];

export const experience = [
  {
    title: "Founder & full-stack developer",
    org: "ForgeAI (own product)",
    when: "Sep 2026 – now",
    where: "Remote",
    points: ["Building and running an AI website platform: product, code, tests and launch."],
  },
  {
    title: "Freelance full-stack developer",
    org: "Direct clients, LinkedIn and Fiverr",
    when: "Feb 2024 – now",
    where: "Remote",
    points: [
      "Websites, web apps, AI features, Python automation and debugging for clients in the US, UK, Ireland, Belgium, Germany and the Netherlands.",
      "Repeat clients from Ireland and Belgium; 14 five-star reviews on Fiverr.",
    ],
  },
  {
    title: "MERN stack developer (contract)",
    org: "Pembridge, Sydney",
    when: "Feb 2026 – May 2026",
    where: "Remote",
    points: ["Built MyBuildHub, a construction project-management platform, from scratch; owned the Gantt timeline."],
  },
  {
    title: "Management Trainee Officer, software",
    org: "Challenge Group Pakistan",
    when: "Aug 2025 – Jan 2026",
    where: "Lahore, on-site",
    points: ["Requirements and workflow analysis for internal office software, working with the development team."],
  },
  {
    title: "Software development intern",
    org: "XeuroTech",
    when: "Aug 2025",
    where: "Multan, on-site",
    points: ["React, Node.js, Express and MongoDB features and debugging on client projects."],
  },
];

export const skills = [
  { group: "Languages", items: ["TypeScript", "JavaScript", "Python", "SQL", "HTML", "CSS"] },
  { group: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "Material UI", "Framer Motion"] },
  { group: "Backend", items: ["Node.js", "Express", "REST APIs", "Authentication and roles"] },
  { group: "Data", items: ["PostgreSQL (Supabase)", "MongoDB", "MySQL", "Row-Level Security"] },
  { group: "AI", items: ["LLM APIs (Gemini and others)", "Chatbots and product advisors", "Multi-step AI workflows", "Schema-validated AI output"] },
  { group: "Quality", items: ["Automated tests (Vitest, Playwright)", "Accessibility checks", "Lighthouse", "Security headers"] },
  { group: "Platforms", items: ["Vercel", "Netlify", "Azure", "GitHub", "Shopify", "WooCommerce", "Craft CMS"] },
];

export const education = {
  degree: "BS Computer Science",
  school: "Namal University, Mianwali",
  when: "2021 – 2025",
};
