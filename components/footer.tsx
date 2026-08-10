import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <div className="mx-auto flex w-full max-w-3xl flex-col items-start justify-between gap-4 px-6 font-mono text-xs text-faint sm:flex-row sm:items-center">
        <p>
          © {new Date().getFullYear()} {site.shortName}
        </p>
        <div className="flex items-center gap-5">
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-200 hover:text-accent"
          >
            GitHub
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-200 hover:text-accent"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${site.email}`}
            className="transition-colors duration-200 hover:text-accent"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
