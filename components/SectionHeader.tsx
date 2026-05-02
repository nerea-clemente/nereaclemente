import { ReactNode } from "react";

type SectionHeaderProps = {
  eyebrow?: string;
  title: ReactNode;
  lede?: ReactNode;
  align?: "left" | "split";
  meta?: ReactNode;
  className?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  lede,
  align = "left",
  meta,
  className = "",
}: SectionHeaderProps) {
  if (align === "split") {
    return (
      <header className={`grid gap-8 border-t border-line pt-8 md:grid-cols-[1fr_1.5fr] md:gap-16 ${className}`}>
        <div className="flex flex-col gap-4">
          {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
          {meta && <div className="text-sm text-muted">{meta}</div>}
        </div>
        <div className="flex flex-col gap-6">
          <h2 className="font-display text-display-md text-ink">{title}</h2>
          {lede && (
            <p className="max-w-reading text-lg leading-relaxed text-muted">
              {lede}
            </p>
          )}
        </div>
      </header>
    );
  }

  return (
    <header className={`flex flex-col gap-5 border-t border-line pt-8 ${className}`}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="font-display text-display-md text-ink">{title}</h2>
      {lede && (
        <p className="max-w-reading text-lg leading-relaxed text-muted">
          {lede}
        </p>
      )}
    </header>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 italic-serif text-base text-clay md:text-lg">
      <span aria-hidden>—</span>
      {children}
    </span>
  );
}
