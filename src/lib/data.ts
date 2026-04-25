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
    cover:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1600&q=80",
    tagline: "Local SEO & website optimization for interior design brand",
    stack: ["Local SEO", "On-Page SEO", "WordPress", "Content Strategy"],
    problem:
      "The business had low visibility on Google and was not generating consistent leads from organic search.",
    solution:
      "Built a high-converting WordPress site, optimized service pages with targeted keywords, and implemented multi-city local SEO strategy.",
    outcome:
      "Improved Google rankings, increased organic traffic, and generated consistent client inquiries.",
  },
  {
    slug: "strella-pa",
    title: "Strella PA",
    category: "Technical + Local SEO",
    year: "2024",
    cover:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80",
    tagline: "SEO audit & ranking optimization for cosmetic clinic",
    stack: ["SEO Audit", "Technical SEO", "GMB Optimization", "Lead Generation"],
    problem:
      "Website had technical SEO issues, weak local presence, and poor conversion rates.",
    solution:
      "Performed full technical audit, fixed indexing issues, optimized Google Business Profile, and improved content structure.",
    outcome:
      "Significant boost in local rankings and steady increase in qualified leads.",
  },
  {
    slug: "imove-alabama",
    title: "iMove Alabama",
    category: "Local SEO",
    year: "2024",
    cover:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
    tagline: "Local SEO strategy for moving company",
    stack: ["Keyword Research", "On-Page SEO", "Local Pages", "WordPress"],
    problem:
      "Highly competitive moving niche with almost no organic visibility.",
    solution:
      "Created location-based landing pages, improved site structure, and optimized for high-intent local keywords.",
    outcome:
      "Higher Google rankings and consistent inbound customer inquiries.",
  },

  {
  slug: "nova-dental-seo",
  title: "Nova Dental Clinic",
  category: "Local SEO",
  year: "2025",
  cover:
    "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1600&q=80",
  tagline: "Local SEO growth for dental clinic",
  stack: ["Local SEO", "Google Maps SEO", "Content Strategy", "Analytics"],
  problem:
    "Clinic was not appearing in top local search results for high-value dental services.",
  solution:
    "Optimized service pages, improved Google Maps ranking, and built local citations across directories.",
  outcome:
    "Top 3 rankings for primary keywords and consistent patient bookings.",
},
  {
    slug: "elite-law-seo",
    title: "Elite Law Firm",
    category: "SEO Strategy",
    year: "2025",
    cover:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1600&q=80",
    tagline: "SEO strategy for legal firm growth",
    stack: ["SEO Strategy", "Content Marketing", "Technical SEO", "Link Building"],
    problem:
      "Law firm struggled with organic traffic and high competition in legal niche.",
    solution:
      "Built authority-focused content strategy, optimized practice area pages, and executed targeted backlink campaigns.",
    outcome:
      "Doubled organic traffic and improved keyword rankings across competitive terms.",
  },
  {
    slug: "bright-smiles-seo",
    title: "Bright Smiles Dental",
    category: "Local SEO",
    year: "2025",
    cover:
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1600&q=80",
    tagline: "SEO & lead generation for dental practice",
    stack: ["Local SEO", "On-Page SEO", "Conversion Optimization", "GMB"],
    problem:
      "Low visibility in local search results and weak online lead generation.",
    solution:
      "Optimized website structure, improved local SEO signals, and enhanced call-to-action flow for conversions.",
    outcome:
      "Steady growth in organic traffic and increased appointment bookings.",
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