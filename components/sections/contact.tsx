import { contact, site } from "@/lib/site";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 py-16 sm:py-20">
      <Reveal>
        <SectionHeading number="05" title="Contact" />
      </Reveal>
      <Reveal delay={60}>
        <h3 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          {contact.heading}
        </h3>
        <p className="mt-4 max-w-lg text-base leading-relaxed text-muted">
          {contact.body}
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href={`mailto:${site.email}`}
            className="rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity duration-200 hover:opacity-80"
          >
            {site.email}
          </a>
          <a
            href={site.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-line px-5 py-2.5 text-sm text-muted transition-all duration-200 hover:border-accent hover:text-accent"
          >
            Download resume
          </a>
        </div>
      </Reveal>
    </section>
  );
}
