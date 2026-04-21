import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost" | "quiet";
  external?: boolean;
  className?: string;
};

const base =
  "inline-flex items-center gap-3 text-sm uppercase tracking-caps transition-all duration-300 ease-soft";

const variants = {
  primary:
    "border border-ink bg-ink px-6 py-3.5 text-bone hover:bg-transparent hover:text-ink",
  ghost:
    "border border-ink/30 px-6 py-3.5 text-ink hover:border-ink hover:bg-ink hover:text-bone",
  quiet:
    "border-b border-ink pb-1 text-ink hover:gap-5",
};

export function Button({
  href,
  children,
  variant = "primary",
  external,
  className = "",
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${className}`;
  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className={classes}
      >
        {children}
        <span aria-hidden>→</span>
      </a>
    );
  }
  return (
    <Link href={href} className={classes}>
      {children}
      <span aria-hidden>→</span>
    </Link>
  );
}
