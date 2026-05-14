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
    cover: "/picture2.png",
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
    cover: "/picture1.png",
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
    slug: "packaging-peers",
    title: "Packaging Peers",
    category: "SEO & WordPress Development",
    year: "2025",
    cover: "/picture3.png",
    tagline: "SEO optimization & WordPress website for packaging company",
    stack: [
      "NextJs",
      "On-Page SEO",
      "Technical SEO",
      "Content Optimization",
    ],
    problem:
      "The company had limited online visibility and an outdated website that was not optimized for search engines or conversions.",
    solution:
      "Developed a modern WordPress website, optimized service pages with targeted keywords, improved technical SEO, and enhanced website performance.",
    outcome:
      "Improved search visibility, better user experience, and increased business inquiries through organic traffic.",
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
      "Highly professional and detail-oriented. Fixed technical SEO issues and improved both traffic and conversions.",
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