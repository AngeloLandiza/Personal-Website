import { hero, site } from "@/lib/site";
import { Reveal } from "@/components/reveal";

function ExternalIcon() {
  return (
    <svg
      className="h-3.5 w-3.5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}

export function Hero() {
  return (
    <section id="top" className="pt-40 pb-24 sm:pt-48 sm:pb-32">
      <Reveal>
        <p className="mb-5 font-mono text-sm text-accent">
          {site.role} · {site.location}
        </p>
      </Reveal>
      <Reveal delay={80}>
        <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          {site.name}
        </h1>
      </Reveal>
      <Reveal delay={160}>
        <div className="mt-7 max-w-xl space-y-4 text-base leading-relaxed text-muted">
          {hero.intro.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
        </div>
      </Reveal>
      <Reveal delay={240}>
        <div className="mt-9 flex flex-wrap items-center gap-3">
          <a
            href={`mailto:${site.email}`}
            className="rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity duration-200 hover:opacity-80"
          >
            Get in touch
          </a>
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-line px-5 py-2.5 text-sm text-muted transition-all duration-200 hover:border-accent hover:text-accent"
          >
            GitHub
            <ExternalIcon />
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-line px-5 py-2.5 text-sm text-muted transition-all duration-200 hover:border-accent hover:text-accent"
          >
            LinkedIn
            <ExternalIcon />
          </a>
        </div>
      </Reveal>
    </section>
  );
}
