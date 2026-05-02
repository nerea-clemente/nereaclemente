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
  "inline-flex items-center gap-3 text-[13px] uppercase tracking-caps font-medium rounded-full transition-all duration-300 ease-soft";

const variants = {
  primary: "bg-ink px-7 py-3.5 text-paper hover:bg-clay",
  lemon: "bg-blush px-7 py-3.5 text-ink hover:bg-clay hover:text-paper",
  ghost:
    "border border-ink/40 px-7 py-3.5 text-ink hover:border-clay hover:text-clay",
  quiet:
    "rounded-none border-b border-clay pb-1 text-ink hover:border-ink hover:text-clay hover:gap-5",
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
