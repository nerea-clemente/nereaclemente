import { ReactNode } from "react";

/** Small uppercase label, e.g. "WORLD 01 / OCEAN EDITORIAL". */
export function Eyebrow({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <span className={`label text-muted ${className}`}>{children}</span>;
}

/** Bold sans line + serif line: the "One mind. / Many worlds." pairing. */
export function SplitTitle({
  a,
  b,
  as: Tag = "h2",
  className = "",
  serifClassName = "",
}: {
  a: ReactNode;
  b: ReactNode;
  as?: "h1" | "h2" | "h3";
  className?: string;
  serifClassName?: string;
}) {
  return (
    <Tag className={`leading-[0.98] text-ink ${className}`}>
      <span className="block font-display-tight">{a}</span>
      <span className={`block serif ${serifClassName}`}>{b}</span>
    </Tag>
  );
}
