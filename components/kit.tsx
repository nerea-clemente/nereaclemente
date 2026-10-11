import type { CSSProperties, ReactNode } from "react";
import { photo } from "@/lib/img";

/** A provisional photo filling its box. */
export function Photo({
  name,
  alt = "",
  className = "",
  style,
  position = "center",
}: {
  name: string;
  alt?: string;
  className?: string;
  style?: CSSProperties;
  position?: string;
}) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={photo(name)}
      alt={alt}
      loading="lazy"
      className={`block h-full w-full object-cover ${className}`}
      style={{ objectPosition: position, ...style }}
    />
  );
}

/** Chunky six-armed asterisk, the shared mark across the worlds. */
export function Asterisk({ className = "", color = "currentColor", spin = false }: { className?: string; color?: string; spin?: boolean }) {
  return (
    <svg viewBox="0 0 100 100" aria-hidden className={`${spin ? "nc-spin" : ""} ${className}`}>
      {[0, 60, 120].map((r) => (
        <rect key={r} x="41" y="4" width="18" height="92" rx="9" fill={color} transform={`rotate(${r} 50 50)`} />
      ))}
    </svg>
  );
}

/** Four-point sparkle star (Playground, Seafood accents). */
export function Sparkle({ className = "", color = "currentColor" }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 100 100" aria-hidden className={className}>
      <path d="M50 2 C 54 36, 64 46, 98 50 C 64 54, 54 64, 50 98 C 46 64, 36 54, 2 50 C 36 46, 46 36, 50 2 Z" fill={color} />
    </svg>
  );
}

type ArrowDir = "down-left" | "down-right" | "up-left" | "left" | "right" | "down";

const ARROWS: Record<ArrowDir, string> = {
  "down-left": "M70 8 C 64 40, 40 58, 14 62 M14 62 L 26 52 M14 62 L 28 70",
  "down-right": "M10 8 C 18 40, 42 58, 70 62 M70 62 L 56 52 M70 62 L 56 70",
  "up-left": "M70 62 C 60 30, 40 16, 14 12 M14 12 L 28 6 M14 12 L 24 24",
  left: "M76 30 C 56 22, 34 26, 10 34 M10 34 L 22 24 M10 34 L 24 42",
  right: "M8 34 C 28 24, 52 22, 74 30 M74 30 L 60 22 M74 30 L 62 40",
  down: "M40 6 C 52 24, 50 44, 38 62 M38 62 L 36 48 M38 62 L 50 54",
};

/** Handwritten note, optionally with a hand-drawn arrow. */
export function Hand({
  children,
  className = "",
  arrow,
  arrowClassName = "",
  style,
}: {
  children: ReactNode;
  className?: string;
  arrow?: ArrowDir;
  arrowClassName?: string;
  style?: CSSProperties;
}) {
  return (
    <div className={`hand ${className}`} style={style} aria-hidden>
      <span className="block">{children}</span>
      {arrow && (
        <svg viewBox="0 0 80 72" className={`mt-1 h-10 w-12 ${arrowClassName}`} fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
          <path d={ARROWS[arrow]} />
        </svg>
      )}
    </div>
  );
}

/** Small "→" used across cards. */
export function ArrowLink({ children, className = "" }: { children?: ReactNode; className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 label transition-all group-hover:gap-3 ${className}`}>
      {children}
      <span aria-hidden>→</span>
    </span>
  );
}

/** Round arrow button (Playground). */
export function RoundArrow({ className = "", down = false }: { className?: string; down?: boolean }) {
  return (
    <span aria-hidden className={`inline-flex h-8 w-8 items-center justify-center rounded-full border border-current text-sm transition-transform group-hover:translate-x-0.5 ${className}`}>
      {down ? "↓" : "→"}
    </span>
  );
}
