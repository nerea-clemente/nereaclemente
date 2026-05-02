import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost" | "quiet" | "lemon";
  external?: boolean;
  className?: string;
};

const base =
  "inline-flex items-center gap-3 text-[13px] uppercase tracking-caps font-medium transition-all duration-300 ease-soft";

const variants = {
  primary:
    "bg-ink px-6 py-3.5 text-paper hover:bg-electric",
  lemon:
    "bg-lemon px-6 py-3.5 text-ink hover:bg-ink hover:text-lemon",
  ghost:
    "border border-ink px-6 py-3.5 text-ink hover:bg-ink hover:text-paper",
  quiet:
    "border-b-2 border-ink pb-1 text-ink hover:border-electric hover:text-electric hover:gap-5",
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
      <a href={href} target="_blank" rel="noreferrer" className={classes}>
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
