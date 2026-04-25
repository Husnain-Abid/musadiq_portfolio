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
    slug: "veltra-defi",
    title: "Veltra Protocol",
    category: "DeFi",
    year: "2025",
    cover:
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=1600&q=80",
    tagline: "Cross-chain liquidity engine moving $40M+ monthly.",
    stack: ["Solidity", "Hardhat", "Next.js", "Ethers", "Postgres"],
    problem:
      "A YC-backed DeFi startup needed to consolidate fragmented liquidity across four chains without custodial risk and ship before a competitor's launch window.",
    solution:
      "Designed and shipped a vault router with intent-based settlement, gas-optimized Solidity contracts (audited by Spearbit), a Next.js dashboard with sub-100ms quotes, and a webhook layer for institutional flow.",
    outcome:
      "Crossed $40M monthly volume in week 6 and reduced average swap cost by 38%. Closed a Series A two months later.",
  },
  {
    slug: "lumen-nft",
    title: "Lumen Market",
    category: "NFT Marketplace",
    year: "2024",
    cover:
      "https://images.unsplash.com/photo-1620325867502-221cfb5faa5f?auto=format&fit=crop&w=1600&q=80",
    tagline: "Curator-first NFT marketplace built on Base.",
    stack: ["Next.js", "Solidity", "Base", "GraphQL", "tRPC"],
    problem:
      "A New York gallery wanted to bridge physical art collectors into Web3 with a calm, curated buying experience instead of a noisy marketplace grid.",
    solution:
      "Engineered a single-listing collector flow on Base with lazy minting, fiat onramp, and a server-driven curation engine. Built a GraphQL indexer for sub-second collection load.",
    outcome:
      "Sold out the inaugural drop in 11 minutes and onboarded 2,400 first-time wallets. Featured in Coindesk's 2024 design roundup.",
  },
  {
    slug: "northbeam-saas",
    title: "Northbeam Atlas",
    category: "AI SaaS",
    year: "2025",
    cover:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80",
    tagline: "Realtime attribution dashboard for DTC brands.",
    stack: ["React", "Node", "Postgres", "Kafka", "OpenAI"],
    problem:
      "A Series B attribution startup needed a dashboard that could chew through 200M+ events daily and surface insights without making analysts wait 40 seconds per query.",
    solution:
      "Architected a streaming pipeline with Kafka + materialized views, a React dashboard with virtualized tables, and an LLM agent that turns natural-language questions into validated SQL.",
    outcome:
      "Cut median query time from 38s to 0.9s and unlocked a self-serve tier that now drives 22% of new revenue.",
  },
  {
    slug: "aether-fintech",
    title: "Aether Wallet",
    category: "Mobile Fintech",
    year: "2024",
    cover:
      "https://images.unsplash.com/photo-1556742205-e10c9486e506?auto=format&fit=crop&w=1600&q=80",
    tagline: "USDC neobank for freelancers shipping in 22 countries.",
    stack: ["React Native", "Expo", "Solana", "Stripe", "AWS"],
    problem:
      "Independent contractors getting paid in stablecoins were losing 4-7% to wire fees and waiting days to spend their earnings.",
    solution:
      "Built a React Native wallet on Solana with instant USDC↔USD conversion, a virtual debit card via Stripe Issuing, and KYC flows for 22 jurisdictions. Designed offline-first with conflict-free sync.",
    outcome:
      "Onboarded 18,000 users in the first quarter and processed $11M in card spend with a 4.9 App Store rating.",
  },
  {
    slug: "orbital-social",
    title: "Orbital",
    category: "Web3 Social",
    year: "2025",
    cover:
      "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=1600&q=80",
    tagline: "Decentralized social graph that respects creators.",
    stack: ["Next.js", "Lens", "Postgres", "Redis", "WebSockets"],
    problem:
      "Creators wanted a portable social graph and revenue tools without the volatility of token-gated platforms or the cost of running their own infra.",
    solution:
      "Built a Next.js client on top of Lens with a custom indexing layer in Postgres, realtime feeds via WebSockets, and a creator monetization SDK. Shipped a smooth onboarding that hides wallet complexity.",
    outcome:
      "Hit 50K weekly active creators in 90 days and processed $2.1M in direct creator payouts with zero platform fees.",
  },
  {
    slug: "halo-health",
    title: "Halo Health",
    category: "Healthcare Platform",
    year: "2023",
    cover:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1600&q=80",
    tagline: "HIPAA-grade telehealth platform for specialty clinics.",
    stack: ["Next.js", "Node", "Postgres", "Twilio", "AWS"],
    problem:
      "A specialty clinic network needed a compliant telehealth product their providers would actually enjoy using — not a clunky enterprise portal.",
    solution:
      "Shipped a Next.js + Node platform with end-to-end encrypted video, eRx integration, automated insurance verification, and a calm scheduling UI providers asked for unprompted.",
    outcome:
      "Reduced no-show rate by 41% and saved 6 hours per provider per week. Deployed across 14 clinics in 4 states.",
  },
];

export type Service = {
  title: string;
  description: string;
  bullets: string[];
};

export const SERVICES: Service[] = [
  {
    title: "Web Development",
    description:
      "Performant, scalable web apps built on Next.js, React and Node — the kind that pass an enterprise security review and still load in under a second.",
    bullets: ["Next.js · React · TypeScript", "Edge-rendered & SEO-ready", "Stripe & auth done right"],
  },
  {
    title: "Mobile App Development",
    description:
      "Cross-platform mobile apps in React Native and Expo with native-grade polish, offline-first sync, and ship-on-Friday confidence.",
    bullets: ["React Native · Expo", "iOS + Android in one codebase", "Push, payments, deep links"],
  },
  {
    title: "Blockchain Development",
    description:
      "Audited Solidity contracts, custom bridges, and Web3 frontends. Built and shipped DeFi, NFT and DAO products that move real money safely.",
    bullets: ["Solidity · EVM · Solana", "Audit-ready contracts", "Wallets, bridges & SDKs"],
  },
  {
    title: "UI/UX Design",
    description:
      "Product design that converts. Crafted in Figma alongside the build, optimized for clarity, conversion and a brand you'll be proud to share.",
    bullets: ["Figma · Design systems", "Conversion-led flows", "Pixel-perfect handoff"],
  },
  {
    title: "AI Solutions",
    description:
      "RAG pipelines, agent workflows and LLM features that actually ship — not demos. From prompt to production with evals and guardrails.",
    bullets: ["OpenAI · Claude · Llama", "RAG, agents, evals", "Production guardrails"],
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
      "Armash shipped our DeFi MVP in six weeks — the kind of work that usually takes a team of four. He thinks like a founder and codes like a senior staff engineer.",
    name: "Daniel Ortiz",
    role: "CEO & Founder",
    company: "Veltra Labs",
  },
  {
    quote:
      "We've worked with a lot of contractors. Armash is the only one who's ever pushed back on a feature spec, suggested a better approach, and then delivered both versions on time.",
    name: "Priya Shah",
    role: "Head of Product",
    company: "Northbeam",
  },
  {
    quote:
      "He took an idea on a napkin and delivered an audited, on-chain product our investors used as the centerpiece of our Series A deck.",
    name: "Marcus Reed",
    role: "Co-founder",
    company: "Lumen Market",
  },
  {
    quote:
      "Calm under pressure, brutally clear in async, and a designer's taste in code. We bring Armash in whenever a launch absolutely cannot slip.",
    name: "Sienna Wong",
    role: "Engineering Director",
    company: "Atlas & Co. Agency",
  },
  {
    quote:
      "Our React Native app finally feels native. The performance jump alone earned back the engagement we'd been bleeding for months.",
    name: "James Whitlock",
    role: "CTO",
    company: "Aether Wallet",
  },
];

export const SKILLS: { name: string; group: string }[] = [
  { name: "React", group: "Frontend" },
  { name: "Next.js", group: "Frontend" },
  { name: "TypeScript", group: "Frontend" },
  { name: "Tailwind CSS", group: "Frontend" },
  { name: "Three.js", group: "Frontend" },
  { name: "Node.js", group: "Backend" },
  { name: "Postgres", group: "Backend" },
  { name: "GraphQL", group: "Backend" },
  { name: "Redis", group: "Backend" },
  { name: "AWS", group: "Backend" },
  { name: "Solidity", group: "Web3" },
  { name: "Ethereum", group: "Web3" },
  { name: "Solana", group: "Web3" },
  { name: "Hardhat", group: "Web3" },
  { name: "Ethers", group: "Web3" },
  { name: "React Native", group: "Mobile" },
  { name: "Expo", group: "Mobile" },
  { name: "OpenAI", group: "AI" },
  { name: "LangChain", group: "AI" },
  { name: "Pinecone", group: "AI" },
];

export const NAV_LINKS = [
  { id: "work", label: "Work" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "testimonials", label: "Clients" },
  { id: "contact", label: "Contact" },
];
