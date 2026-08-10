import { education, leadership } from "@/lib/site";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

export function Education() {
  return (
    <section id="education" className="scroll-mt-24 py-16 sm:py-20">
      <Reveal>
        <SectionHeading number="04" title="Education & Leadership" />
      </Reveal>
      <div className="space-y-12">
        <Reveal>
          <div className="grid gap-3 sm:grid-cols-[11rem_1fr] sm:gap-8">
            <p className="pt-0.5 font-mono text-sm text-faint">
              {education.period}
            </p>
            <div>
              <h3 className="text-base font-semibold text-foreground">
                {education.school}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">
                {education.degree}
              </p>
            </div>
          </div>
        </Reveal>
        <Reveal delay={60}>
          <div className="grid gap-3 sm:grid-cols-[11rem_1fr] sm:gap-8">
            <p className="pt-0.5 font-mono text-sm text-faint">
              {leadership.period}
            </p>
            <div>
              <h3 className="text-base font-semibold text-foreground">
                {leadership.title}
                <span className="text-muted"> · </span>
                {leadership.org}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {leadership.bullets.map((bullet) => (
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
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
