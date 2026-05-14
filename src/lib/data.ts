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
    category: "Local SEO & Content Optimization ",
    year: "2024",
    cover: "/picture2.png",
    tagline: "SEO growth strategy for interior design brand",
    stack: [
      "On-Page SEO",
      "Keyword Research",
      "Semantic SEO",
      "Content Strategy",
      "GBP Optimization",
    ],
    problem:
      "The business had low Google visibility and was not attracting consistent organic leads from local searches.",
    solution:
      "Optimized service pages with targeted keywords, implemented semantic SEO structure, improved Google Business Profile, and created a strong content strategy for local search intent.",
    outcome:
      "Increased organic visibility, improved keyword rankings, and generated steady client inquiries through Google search.",
  },

  {
    slug: "strella-pa",
    title: "Strella PA",
    category: "On-Page SEO & Semantic SEO ",
    year: "2024",
    cover: "/picture1.png",
    tagline: "SEO optimization for cosmetic clinic growth",
    stack: [
      "On-Page SEO",
      "Keyword Research",
      "GBP Optimization",
      "Content Strategy",
      "Semantic SEO",
    ],
    problem:
      "The clinic had weak local visibility, under-optimized service pages, and low lead generation from search traffic.",
    solution:
      "Improved website content structure, optimized location-based keywords, enhanced Google Business Profile, and implemented semantic SEO for better topical relevance.",
    outcome:
      "Boosted local rankings, increased qualified traffic, and improved conversion rates from organic visitors.",
  },

  {
    slug: "packaging-peers",
    title: "Packaging Peers",
    category: "SEO & Content Strategy",
    year: "2025",
    cover: "/picture3.png",
    tagline: "Search optimization strategy for packaging company",
    stack: [
      "On-Page SEO",
      "Keyword Research",
      "Semantic SEO",
      "Content Optimization",
      "GBP Optimization",
    ],
    problem:
      "The company had low online visibility and service pages that were not optimized for search intent or lead generation.",
    solution:
      "Created optimized SEO content, improved keyword targeting, implemented semantic SEO structure, and enhanced Google Business Profile visibility.",
    outcome:
      "Improved keyword rankings, stronger organic presence, and increased business inquiries through search traffic.",
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
  {
    title: "WordPress Website Development",
    description:
      "Create fast, modern, and SEO-friendly WordPress websites designed for performance, user experience, and business growth.",
    bullets: [
      "Responsive website design",
      "Elementor & custom WordPress setup",
      "SEO-friendly website structure",
      "Speed & performance optimization",
    ],
  }
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
    name: "Ash",
    role: "Business Owner",
    company: "Ash & Co Interiors",
  },
  {
    quote:
      "Our local rankings improved significantly and we now receive regular inquiries through Google Maps.",
    name: "Kruti",
    role: "Owner",
    company: "Strella PA",
  },
  {
    quote:
      "Highly professional and detail-oriented. Fixed On-Page SEO issues and improved both traffic and conversions.",
    name: "Uzair Asad",
    role: "Owner",
    company: "Packaging Peers",
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