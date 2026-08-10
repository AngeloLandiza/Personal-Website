import { skills } from "@/lib/site";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 py-16 sm:py-20">
      <Reveal>
        <SectionHeading number="03" title="Skills" />
      </Reveal>
      <div className="space-y-6">
        {skills.map((group, i) => (
          <Reveal key={group.label} delay={i * 40}>
            <div className="grid gap-2 sm:grid-cols-[11rem_1fr] sm:gap-8">
              <p className="pt-1 font-mono text-sm text-faint">{group.label}</p>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-line px-3 py-1 text-sm text-muted transition-colors duration-200 hover:border-accent hover:text-accent"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
