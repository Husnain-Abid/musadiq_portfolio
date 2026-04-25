import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SectionHeading } from "@/components/SectionHeading";
import { SKILLS } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger);


const STATS = [
  { label: "Projects Completed", to: 55, suffix: "+" },
  { label: "Client Satisfaction", to: 98, suffix: "%" },
  { label: "Cities Covered", to: 50, suffix: "+" },
  { label: "Years Experience", to: 1, suffix: "+" },
];


function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obj = { v: 0 };
    const tween = gsap.to(obj, {
      v: to,
      duration: 1.6,
      ease: "power2.out",
      onUpdate: () => {
        el.textContent = Math.round(obj.v).toString() + suffix;
      },
      scrollTrigger: { trigger: el, start: "top 85%" },
    });
    return () => {
      tween.kill();
    };
  }, [to, suffix]);
  return <span ref={ref}>0{suffix}</span>;
}

export function About() {
  const stripRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = stripRef.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const inner = el.querySelector(".marquee-inner") as HTMLElement | null;
    if (!inner) return;
    const tween = gsap.to(inner, {
      xPercent: -50,
      duration: 35,
      ease: "none",
      repeat: -1,
    });
    return () => {
      tween.kill();
    };
  }, []);

  const skillsLoop = [...SKILLS, ...SKILLS];

  return (
    <section id="about" className="relative py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-7">

            <SectionHeading
              eyebrow="About"
              title="SEO Strategist. Growth Partner. Results-Driven."
              description="I'm Musadiq Nawaz — an SEO Expert & Semantic SEO Specialist helping businesses grow through data-driven search strategies. I specialize in On-Page, Technical, and Local SEO to increase visibility, drive qualified traffic, and generate consistent leads. My focus is not just rankings, but real business growth and long-term ROI."
            />
            <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {STATS.map((s) => (
                <div key={s.label} className="glass rounded-2xl p-5">
                  <div className="font-display text-3xl font-extrabold text-primary text-glow">
                    <Counter to={s.to} suffix={s.suffix} />
                  </div>
                  <div className="mt-2 text-xs uppercase tracking-[0.18em] text-muted-foreground leading-snug">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="glass rounded-3xl p-8 h-full flex flex-col justify-between">
              <div>
                <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
                  How I work
                </div>
                <ul className="mt-5 space-y-4 text-sm text-foreground/90 leading-relaxed">
                  {[
                    "Custom SEO strategies tailored to your business goals and competitors.",
                    "Transparent monthly reporting with clear ranking, traffic, and lead insights.",
                    "White-hat SEO techniques aligned with Google’s latest algorithm updates.",
                    "Continuous optimization focused on long-term growth and ROI, not short-term spikes.",
                  ].map((line) => (
                    <li key={line} className="flex gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary glow-blue" />
                      {line}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-8 flex items-center gap-3 text-xs text-muted-foreground">
                <span className="inline-flex h-9 items-center rounded-full glass px-3">
                  Pakistan · Serving Global Clients
                </span>
                <span className="inline-flex h-9 items-center rounded-full glass px-3">
                  Local & International SEO
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
            SEO Tools & Expertise          </div>
          <div
            ref={stripRef}
            className="mt-6 relative overflow-hidden mask-marquee"
            style={{
              maskImage:
                "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            }}
          >
            <div className="marquee-inner flex w-max gap-3">
              {skillsLoop.map((s, i) => (
                <div
                  key={i}
                  className="glass rounded-full px-5 py-2.5 text-sm text-foreground/85 whitespace-nowrap"
                >
                  <span className="text-primary mr-2">/</span>
                  {s.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
