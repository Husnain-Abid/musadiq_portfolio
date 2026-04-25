export type Project = {
  slug: string;
  title: string;
  category: string;
  year: string;
  cover: string;
  tagline: string;
  stack: string[];
  problem: string;
  solution: string;
  outcome: string;
  url?: string;
};

export const PROJECTS: Project[] = [
  {
    slug: "ash-co-interiors",
    title: "Ash & Co Interiors",
    category: "Local SEO",
    year: "2024",
    cover: "/projects/ashco.jpg",
    tagline: "Local SEO & website optimization for interior design brand",
    stack: ["Local SEO", "On-Page SEO", "WordPress", "Content Strategy"],
    problem:
      "The business had low visibility on Google and was not generating consistent leads from organic search.",
    solution:
      "Developed a high-converting WordPress website, optimized service pages with targeted keywords, and implemented local SEO strategies across multiple cities.",
    outcome:
      "Improved rankings, increased organic traffic, and generated consistent client inquiries.",
  },
  {
    slug: "strella-pa",
    title: "Strella PA",
    category: "Technical + Local SEO",
    year: "2024",
    cover: "/projects/strella.jpg",
    tagline: "SEO audit & local ranking improvement for cosmetic services",
    stack: ["SEO Audit", "Technical SEO", "GMB Optimization", "Lead Generation"],
    problem:
      "Website had technical SEO issues, poor local visibility, and low conversion rates.",
    solution:
      "Performed full SEO audit, fixed technical issues, optimized Google Business Profile, and improved content structure.",
    outcome:
      "Increased local visibility, better rankings, and improved lead generation.",
  },
  {
    slug: "imove-alabama",
    title: "iMove Alabama",
    category: "Local SEO",
    year: "2024",
    cover: "/projects/imove.jpg",
    tagline: "Local SEO strategy for moving company",
    stack: ["Keyword Research", "On-Page SEO", "Local Pages", "WordPress"],
    problem:
      "Highly competitive niche with low rankings and minimal online presence.",
    solution:
      "Created optimized landing pages targeting local keywords and improved site speed and mobile performance.",
    outcome:
      "Higher rankings, increased traffic, and more customer inquiries.",
  },
];

export type Service = {
  title: string;
  description: string;
  bullets: string[];
};

export const SERVICES: Service[] = [
  {
    title: "On-Page SEO Optimization",
    description:
      "Optimize your website structure and content to rank higher and attract targeted traffic.",
    bullets: [
      "Keyword research & intent targeting",
      "Meta tags & headings optimization",
      "Content optimization",
      "Internal linking structure",
    ],
  },
  {
    title: "Technical SEO",
    description:
      "Fix technical issues that impact your rankings and website performance.",
    bullets: [
      "Website speed optimization",
      "Mobile responsiveness",
      "Indexing & crawling fixes",
      "Sitemap & robots.txt setup",
    ],
  },
  {
    title: "Semantic SEO Strategy",
    description:
      "Build topical authority using advanced semantic SEO and content strategies.",
    bullets: [
      "Topic cluster strategy",
      "Entity optimization",
      "Search intent mapping",
      "Content structuring",
    ],
  },
  {
    title: "Off-Page SEO & Link Building",
    description:
      "Increase authority and trust through high-quality backlinks and brand mentions.",
    bullets: [
      "Backlink strategy",
      "Guest posting",
      "Citation building",
      "Authority growth",
    ],
  },
  {
    title: "Local SEO (Google Maps Ranking)",
    description:
      "Improve your local presence and rank higher in Google Maps results.",
    bullets: [
      "Google Business Profile optimization",
      "Local keyword targeting",
      "Review strategy",
      "Local citations",
    ],
  },
  {
    title: "SEO Audit & Strategy",
    description:
      "Get a complete SEO audit and roadmap to improve your website performance.",
    bullets: [
      "Full SEO audit report",
      "Competitor analysis",
      "Growth strategy",
      "Action plan",
    ],
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Musadiq transformed our SEO completely. We started getting consistent leads from Google within months.",
    name: "Sarah Khan",
    role: "Business Owner",
    company: "Ash & Co Interiors",
  },
  {
    quote:
      "Our local rankings improved significantly and we now receive regular inquiries through Google Maps.",
    name: "Ali Raza",
    role: "Marketing Manager",
    company: "Strella PA",
  },
  {
    quote:
      "Highly professional and detail-oriented. Fixed technical SEO issues and improved both traffic and conversions.",
    name: "John Mitchell",
    role: "Operations Manager",
    company: "iMove Alabama",
  },
  {
    quote:
      "He focuses on real business growth, not just rankings. Our traffic and leads both increased.",
    name: "Ahmed Hassan",
    role: "Founder",
    company: "Local Business",
  },
];

export const SKILLS: { name: string; group: string }[] = [
  { name: "Semantic SEO", group: "SEO" },
  { name: "On-Page SEO", group: "SEO" },
  { name: "Technical SEO", group: "SEO" },
  { name: "Off-Page SEO", group: "SEO" },
  { name: "Local SEO", group: "SEO" },
  { name: "Keyword Research", group: "SEO" },
  { name: "Content Strategy", group: "SEO" },
  { name: "Google Analytics", group: "Tools" },
  { name: "Google Search Console", group: "Tools" },
  { name: "Ahrefs", group: "Tools" },
  { name: "SEMrush", group: "Tools" },
  { name: "WordPress", group: "CMS" },
  { name: "Site Speed Optimization", group: "Technical" },
];

export const NAV_LINKS = [
  { id: "work", label: "Case Studies" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "testimonials", label: "Clients" },
  { id: "contact", label: "Contact" },
];