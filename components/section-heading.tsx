type SectionHeadingProps = {
  number: string;
  title: string;
};

export function SectionHeading({ number, title }: SectionHeadingProps) {
  return (
    <div className="mb-10 flex items-baseline gap-3">
      <span className="font-mono text-sm text-accent">{number}</span>
      <h2 className="text-xl font-semibold tracking-tight text-foreground">
        {title}
      </h2>
      <div className="ml-2 h-px flex-1 bg-line" aria-hidden="true" />
    </div>
  );
}
