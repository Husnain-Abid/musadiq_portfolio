import { ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="font-display text-4xl md:text-6xl font-extrabold tracking-tight">
              Let's make something{" "}
              <span className="text-primary text-glow">unforgettable.</span>
            </div>
            <p className="mt-4 max-w-xl text-sm text-muted-foreground">
              Currently booking Q3 2026 engagements for a small number of US-based
              founders and agencies.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground glow-blue self-start"
            data-cursor="hover"
            data-testid="footer-cta"
          >
            Start a project <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/5 pt-8 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
          <div>© {new Date().getFullYear()} Armash Ata. All rights reserved.</div>
          <div className="flex items-center gap-5">
            <a href="#top" className="hover:text-foreground transition-colors">
              Back to top
            </a>
            <span>Built in Karachi · Shipped to the world</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
