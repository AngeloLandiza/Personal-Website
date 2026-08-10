import { featuredProjects, roboticsProjects } from "@/lib/site";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

function ArrowIcon() {
  return (
    <svg
      className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
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

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 py-16 sm:py-20">
      <Reveal>
        <SectionHeading number="02" title="Projects" />
      </Reveal>

      <div className="space-y-5">
        {featuredProjects.map((project, i) => (
          <Reveal key={project.title} delay={i * 60}>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-xl border border-line bg-surface p-6 transition-all duration-300 hover:border-accent/50 hover:shadow-[0_4px_24px_-8px_var(--accent-soft)] sm:p-7"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-baseline gap-3">
                  <h3 className="text-base font-semibold text-foreground transition-colors duration-200 group-hover:text-accent">
                    {project.title}
                  </h3>
                  <span className="font-mono text-xs text-faint">
                    {project.period}
                  </span>
                </div>
                <span className="text-faint transition-colors duration-200 group-hover:text-accent">
                  <ArrowIcon />
                </span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {project.description}
              </p>
              {project.highlights && (
                <ul className="mt-3 space-y-2">
                  {project.highlights.map((highlight) => (
                    <li
                      key={highlight.slice(0, 32)}
                      className="flex gap-3 text-sm leading-relaxed text-muted"
                    >
                      <span
                        className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent"
                        aria-hidden="true"
                      />
                      {highlight}
                    </li>
                  ))}
                </ul>
              )}
              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-accent-soft px-2.5 py-1 font-mono text-xs text-accent"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </a>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <h3 className="mt-14 mb-6 font-mono text-sm text-faint">
          More robotics &amp; experiments
        </h3>
      </Reveal>
      <div className="grid gap-4 sm:grid-cols-2">
        {roboticsProjects.map((project, i) => (
          <Reveal key={project.title} delay={i * 60}>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full flex-col rounded-xl border border-line bg-surface p-5 transition-all duration-300 hover:border-accent/50"
            >
              <div className="flex items-center justify-between gap-3">
                <h4 className="text-sm font-semibold text-foreground transition-colors duration-200 group-hover:text-accent">
                  {project.title}
                </h4>
                <span className="font-mono text-xs text-faint">
                  {project.period}
                </span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {project.description}
              </p>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
