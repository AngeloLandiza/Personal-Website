import { experience } from "@/lib/site";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 py-16 sm:py-20">
      <Reveal>
        <SectionHeading number="01" title="Experience" />
      </Reveal>
      <div className="space-y-14">
        {experience.map((role, i) => (
          <Reveal key={`${role.company}-${role.title}`} delay={i * 60}>
            <article className="grid gap-3 sm:grid-cols-[11rem_1fr] sm:gap-8">
              <p className="pt-0.5 font-mono text-sm text-faint">
                {role.period}
              </p>
              <div>
                <h3 className="text-base font-semibold text-foreground">
                  {role.title}
                  <span className="text-muted"> · </span>
                  {role.companyUrl ? (
                    <a
                      href={role.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-underline text-accent"
                    >
                      {role.company}
                    </a>
                  ) : (
                    <span className="text-foreground">{role.company}</span>
                  )}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {role.bullets.map((bullet) => (
                    <li
                      key={bullet.slice(0, 32)}
                      className="flex gap-3 text-sm leading-relaxed text-muted"
                    >
                      <span
                        className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent"
                        aria-hidden="true"
                      />
                      {bullet}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-wrap gap-2">
                  {role.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-accent-soft px-2.5 py-1 font-mono text-xs text-accent"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
