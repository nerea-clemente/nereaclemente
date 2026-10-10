import type { CSSProperties, ReactNode } from "react";
import type { World } from "@/lib/worlds";

/**
 * Typographic posters, three per world — one for each reference image in the
 * visual direction. They are built in code and take each reference's
 * *resources* (composition, type treatment, texture), never its artwork.
 *
 * A poster fills its parent; give the parent a size (aspect ratio or height).
 * Type is sized in container units so the same poster works as a card or a
 * full-width header.
 */
export type PosterProps = {
  world: World;
  /** Main text set in the world's register. */
  title: string;
  /** Small line: a lede, a format, a caption. */
  caption?: string;
  /** Short words some layouts scatter around the title. */
  fragments?: string[];
  /** Label in a corner, e.g. "01 / Ocean Editorial". */
  kicker?: string;
  /** 0, 1 or 2 — which reference the layout follows. */
  variant?: number;
  className?: string;
};

type P = Required<Pick<PosterProps, "world" | "title">> &
  Omit<PosterProps, "world" | "title" | "variant">;

const VARIANTS: Record<World["slug"], ((p: P) => JSX.Element)[]> = {
  seafood: [SeaIssue, SeaChrome, SeaCurrents],
  brand: [BrandRope, BrandSplit, BrandPattern],
  ai: [AiEcho, AiFriction, AiMirror],
  content: [ContentFrame, ContentGlow, ContentBetween],
  playground: [PlayMade, PlaySensible, PlayHaze],
};

export function WorldPoster({ variant = 0, ...props }: PosterProps) {
  const list = VARIANTS[props.world.slug];
  const V = list[((variant % list.length) + list.length) % list.length];
  return <V {...props} />;
}

/** Stable variant for a project, so its card and its cover always match. */
export function posterVariant(slug: string) {
  return Math.floor(seeded(slug)() * 3);
}

/** Display class for headings set in a world's register. */
export const worldFont: Record<World["slug"], string> = {
  seafood: "wf-seafood",
  brand: "wf-brand",
  ai: "wf-ai",
  content: "wf-content",
  playground: "wf-playground",
};

/** Same registers, tuned to stay legible at list / heading sizes. */
export const worldFontSmall: Record<World["slug"], string> = {
  ...worldFont,
  playground: "font-display-tight",
};

/** Silkscreen's ampersand reads as a dollar sign. */
export function pixelSafe(text: string) {
  return text.replace(/&/g, "+");
}

/* ================================================================ helpers */

const SMALL = new Set(["&", "and", "y", "on", "in", "en", "of", "de", "the", "la", "el", "—", "-"]);

/** Words, with short connectors glued to the following word. */
function words(text: string) {
  const out: string[] = [];
  let carry = "";
  for (const w of text.split(/\s+/).filter(Boolean)) {
    if (SMALL.has(w.toLowerCase())) {
      carry += w + " ";
      continue;
    }
    out.push(carry + w);
    carry = "";
  }
  if (carry) out.push(carry.trim());
  return out;
}

function chunk(word: string, size: number) {
  const parts: string[] = [];
  for (let i = 0; i < word.length; i += size) parts.push(word.slice(i, i + size));
  if (parts.length > 1 && parts[parts.length - 1].length === 1) {
    parts[parts.length - 2] += parts.pop();
  }
  return parts;
}

const letterCount = (s: string) => s.replace(/\s/g, "").length;

/** Short titles get chopped into blocks; long ones keep their words. */
function blocks(text: string, size: number, limit = 11) {
  const ws = words(text);
  return letterCount(text) <= limit ? ws.flatMap((w) => chunk(w.replace(/\s/g, ""), size)) : ws;
}

/** Split into two halves of roughly equal length. */
function halves(text: string): [string, string] {
  const ws = words(text);
  if (ws.length === 1) {
    const w = ws[0];
    const c = Math.floor(w.length / 2);
    return [w.slice(0, c), w.slice(c)];
  }
  let best = 1;
  let diff = Infinity;
  for (let i = 1; i < ws.length; i++) {
    const d = Math.abs(ws.slice(0, i).join(" ").length - ws.slice(i).join(" ").length);
    if (d < diff) {
      diff = d;
      best = i;
    }
  }
  return [ws.slice(0, best).join(" "), ws.slice(best).join(" ")];
}

/** Font size that fits `lines` into a fraction of the poster box. */
function fit(
  lines: string[],
  { charW, lineH, w, h, max = 60 }: { charW: number; lineH: number; w: number; h: number; max?: number }
): CSSProperties {
  const longest = Math.max(...lines.map((l) => l.length), 1);
  const byW = (w * 100) / (longest * charW);
  const byH = (h * 100) / (Math.max(lines.length, 1) * lineH);
  return { fontSize: `min(${byW.toFixed(2)}cqw, ${byH.toFixed(2)}cqh, ${max}cqmin)` };
}

/** Deterministic pseudo-random numbers, so posters render the same everywhere. */
function seeded(str: string) {
  let h = 2166136261;
  for (const c of str) h = Math.imul(h ^ c.charCodeAt(0), 16777619);
  return () => {
    h = Math.imul(h ^ (h >>> 15), 2246822507);
    h = Math.imul(h ^ (h >>> 13), 3266489909);
    h ^= h >>> 16;
    return (h >>> 0) / 4294967296;
  };
}

function Frame({
  className = "",
  style,
  children,
  label,
}: {
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
  label?: string;
}) {
  return (
    <div role="img" aria-label={label} className={`poster absolute inset-0 overflow-hidden ${className}`} style={style}>
      <div aria-hidden className="absolute inset-0">
        {children}
      </div>
    </div>
  );
}

const tiny: CSSProperties = { fontSize: "max(8px, 1.9cqmin)", lineHeight: 1.25 };
const small: CSSProperties = { fontSize: "max(10px, 3cqmin)", lineHeight: 1.1 };
const rubik: CSSProperties = { fontFamily: "var(--font-rubik), sans-serif", fontWeight: 900 };
const anton: CSSProperties = { fontFamily: "var(--font-anton), Impact, sans-serif", textTransform: "uppercase" };
const pixel: CSSProperties = { fontFamily: "var(--font-pixel), monospace", textTransform: "uppercase" };
const serif: CSSProperties = { fontFamily: "var(--font-serif), Georgia, serif" };
const sea: CSSProperties = { fontFamily: "var(--font-sea), Impact, sans-serif", fontWeight: 900, textTransform: "uppercase" };

function Lines({ lines, className = "", style }: { lines: string[]; className?: string; style?: CSSProperties }) {
  return (
    <div className={className} style={style}>
      {lines.map((l, i) => (
        <span key={i} className="block whitespace-nowrap">
          {l}
        </span>
      ))}
    </div>
  );
}

/* ====================================================== 01 · Seafood */

/** Sundrift: chunky letters with the sea inside, on pale magazine paper. */
function SeaIssue({ world, title, caption, fragments = [], kicker }: P) {
  const p = world.palette;
  const lines = blocks(title.toUpperCase(), 3);
  const r = seeded(title);
  const bars = Array.from({ length: 28 }, () => 0.4 + r() * 1.6);
  const heads = fragments.length ? fragments : ["Waves", "Ritual", "Motion"];
  return (
    <Frame label={title} className="grain" style={{ background: "#E4EBEF" }}>
      <div className="absolute inset-0 flex flex-col p-[4.5cqmin]" style={{ color: p.deep }}>
        <div className="flex justify-between border-b pb-[1.2cqmin] label" style={{ ...tiny, borderColor: p.deep }}>
          {heads.slice(0, 3).map((f) => (
            <span key={f}>{f}</span>
          ))}
        </div>
        <div className="mt-[3cqmin] flex flex-1 gap-[3cqmin]">
          <Lines
            lines={lines}
            className="tex-water clip-text uppercase"
            style={{ ...rubik, lineHeight: 0.8, letterSpacing: "-0.03em", ...fit(lines, { charW: 0.78, lineH: 0.8, w: 0.66, h: 0.66, max: 42 }) }}
          />
          <div className="ml-auto flex max-w-[30%] flex-col gap-[1.5cqmin] pt-[30%] text-right">
            <span className="label" style={{ ...tiny, fontWeight: 800 }}>
              {kicker}
            </span>
            {caption && (
              <span className="uppercase" style={{ ...tiny, fontWeight: 600 }}>
                {caption}
              </span>
            )}
          </div>
        </div>
        <div className="flex items-end justify-between gap-4">
          <ol className="uppercase" style={{ ...tiny, fontWeight: 800 }}>
            {heads.slice(0, 2).map((f, i) => (
              <li key={f}>
                {String((i + 1) * 8).padStart(2, "0")} {f}
              </li>
            ))}
          </ol>
          <div className="flex h-[7cqmin] items-stretch gap-[0.3cqmin] bg-white px-[1cqmin] py-[0.8cqmin]">
            {bars.map((w, i) => (
              <span key={i} style={{ width: `${w * 0.18}cqmin`, background: i % 2 ? "transparent" : p.deep }} />
            ))}
          </div>
        </div>
      </div>
    </Frame>
  );
}

/** MER BOY: glassy high-contrast serif split top and bottom on a sky gradient. */
function SeaChrome({ world, title, caption, kicker }: P) {
  const p = world.palette;
  const [top, bottom] = halves(title.toUpperCase());
  const size = fit([top, bottom], { charW: 0.62, lineH: 1, w: 0.92, h: 0.62, max: 46 });
  return (
    <Frame
      label={title}
      className="grain"
      style={{ background: `radial-gradient(120% 80% at 50% 45%, ${p.light} 0%, #49A9DD 45%, ${p.mid} 80%, ${p.deep} 120%)` }}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-between py-[4cqmin] text-center">
        <span className="tex-chrome clip-text whitespace-nowrap leading-[0.9]" style={{ ...serif, ...size }}>
          {top}
        </span>
        <div className="flex flex-col items-center gap-[2cqmin]">
          {caption && (
            <p className="max-w-[60%] uppercase" style={{ ...serif, ...small, color: p.tint, letterSpacing: "0.08em" }}>
              {caption}
            </p>
          )}
          <svg viewBox="0 0 60 40" className="h-[12cqmin] w-[18cqmin]">
            <path
              d="M4 30 C 18 34, 30 30, 40 6 C 36 24, 42 28, 56 18 C 46 34, 30 40, 4 30 Z"
              fill="url(#chrome-g)"
              stroke="#fff"
              strokeWidth="0.6"
            />
            <defs>
              <linearGradient id="chrome-g" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0" stopColor="#fff" />
                <stop offset="0.5" stopColor="#7cc2e6" />
                <stop offset="1" stopColor="#f4fbff" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <span className="tex-chrome clip-text whitespace-nowrap leading-[0.9]" style={{ ...serif, ...size }}>
          {bottom}
        </span>
      </div>
      <span className="absolute left-[3cqmin] top-[3cqmin] label" style={{ ...tiny, color: p.tint }}>
        {kicker}
      </span>
    </Frame>
  );
}

function spiral(cx: number, cy: number, turns: number, r: number) {
  let d = "";
  const steps = turns * 40;
  for (let i = 0; i <= steps; i++) {
    const a = (i / 40) * Math.PI * 2;
    const rr = (i / steps) * r;
    d += `${i ? "L" : "M"}${(cx + Math.cos(a) * rr).toFixed(1)} ${(cy + Math.sin(a) * rr).toFixed(1)} `;
  }
  return d;
}

function waveRows(count: number, y0: number, gap: number, seed: number) {
  const out: string[] = [];
  for (let i = 0; i < count; i++) {
    const y = y0 + i * gap;
    let d = `M -10 ${y}`;
    for (let x = -10; x <= 210; x += 5) {
      d += ` L ${x} ${(y + Math.sin(x / 9 + i * 0.9 + seed) * 2.2).toFixed(2)}`;
    }
    out.push(d);
  }
  return out;
}

/** CartelON: hand-drawn blue currents and a dark figure on white, credits on the left. */
function SeaCurrents({ world, title, caption, fragments = [], kicker }: P) {
  const p = world.palette;
  const blue = p.accent2;
  const lines = words(title.toUpperCase());
  const r = seeded(title + "c");
  const spirals = Array.from({ length: 7 }, () => ({ x: 110 + r() * 80, y: 15 + r() * 120, t: 3 + Math.floor(r() * 3), s: 7 + r() * 9 }));
  return (
    <Frame label={title} style={{ background: "#F7F8F6" }}>
      <svg viewBox="0 0 200 250" preserveAspectRatio="xMaxYMax slice" className="absolute inset-0 h-full w-full">
        <defs>
          <filter id="stipple">
            <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="1" seed="4" />
            <feDisplacementMap in="SourceGraphic" scale="7" />
          </filter>
        </defs>
        {Array.from({ length: 16 }).map((_, i) => {
          const x = 108 + i * 5;
          let d = `M ${x} 0`;
          for (let y = 0; y <= 250; y += 6) d += ` L ${(x + Math.sin(y / 11 + i) * 2.4).toFixed(2)} ${y}`;
          return <path key={i} d={d} fill="none" stroke={blue} strokeWidth="1.1" />;
        })}
        {spirals.map((s, i) => (
          <path key={i} d={spiral(s.x, s.y, s.t, s.s)} fill="#F7F8F6" stroke={blue} strokeWidth="1" />
        ))}
        <ellipse cx="150" cy="95" rx="26" ry="44" fill={p.deep} opacity="0.92" filter="url(#stipple)" />
        <rect x="160" y="130" width="22" height="80" fill={p.deep} />
        <rect x="0" y="198" width="200" height="60" fill="#F7F8F6" />
        {waveRows(14, 200, 3.8, 1).map((d, i) => (
          <path key={i} d={d} fill="none" stroke={blue} strokeWidth="1.1" />
        ))}
        <path d="M0 196 L 20 196 L 20 188 L 26 182 L 32 188 L 32 196 L 44 196 L 44 186 L 50 180 L 56 186 L 56 196 L 70 196" fill={p.deep} />
      </svg>

      <div className="absolute left-[4cqmin] top-[4cqmin] flex w-[46%] flex-col gap-[2.4cqmin]" style={{ color: p.deep }}>
        <span style={{ ...sea, ...tiny, fontWeight: 800 }}>{kicker}</span>
        <span className="block h-[0.4cqmin] w-[60%]" style={{ background: p.deep }} />
        <Lines
          lines={lines}
          style={{ ...sea, color: blue, lineHeight: 0.86, ...fit(lines, { charW: 0.5, lineH: 0.86, w: 0.44, h: 0.4, max: 12 }) }}
        />
        {caption && <span style={{ ...sea, ...small, color: p.deep }}>{caption}</span>}
        <span className="block h-[0.4cqmin] w-[60%]" style={{ background: p.deep }} />
        <ul className="flex flex-col gap-[1.2cqmin]">
          {fragments.slice(0, 4).map((f) => (
            <li key={f} style={{ ...sea, ...small, fontWeight: 800 }}>
              {f}
            </li>
          ))}
        </ul>
      </div>
    </Frame>
  );
}

/* ======================================================== 02 · Brand */

const ROPE = [
  "M10 22 C 40 -4, 96 6, 90 30 S 30 46, 40 26 S 92 10, 96 44 S 50 74, 30 58 S 20 30, 60 34",
  "M4 70 C 20 50, 70 46, 76 64 S 40 92, 24 80 S 40 52, 84 60 S 98 92, 70 96",
  "M30 44 C 46 30, 70 36, 66 52 S 40 66, 48 50",
];

/** Red Wine: ultra-heavy pink words stacked to the edges, tangled white rope. */
function BrandRope({ world, title, kicker, caption }: P) {
  const p = world.palette;
  const lines = words(title.toUpperCase());
  const rope = (
    <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 h-full w-full">
      {ROPE.map((d, i) => (
        <path key={i} d={d} fill="none" stroke="#fff" strokeWidth={2.4 - i * 0.4} strokeLinecap="round" vectorEffect="non-scaling-stroke" />
      ))}
    </svg>
  );
  return (
    <Frame label={title} className="grain" style={{ background: "#6A1027" }}>
      {rope}
      <div className="absolute inset-0 flex flex-col justify-center px-[4cqmin]">
        <Lines
          lines={lines}
          style={{ ...rubik, color: p.accent, lineHeight: 0.84, letterSpacing: "-0.04em", ...fit(lines, { charW: 0.78, lineH: 0.84, w: 0.92, h: 0.84, max: 70 }) }}
        />
      </div>
      <div className="absolute inset-0" style={{ clipPath: "polygon(55% 0, 100% 0, 100% 55%, 55% 55%)" }}>
        {rope}
      </div>
      <span className="absolute left-[3cqmin] top-[3cqmin] label" style={{ ...tiny, color: p.tint }}>
        {kicker}
      </span>
      {caption && (
        <span className="absolute bottom-[3cqmin] right-[3cqmin] serif" style={{ ...small, color: p.tint }}>
          {caption}
        </span>
      )}
    </Frame>
  );
}

/** Whitney: thin magenta sans in short blocks, an asymmetric left/right rhythm. */
function BrandSplit({ world, title, kicker, caption }: P) {
  const p = world.palette;
  const T = title.toUpperCase();
  const short = letterCount(T) <= 14;
  const [a, b] = halves(T);
  const left = short ? chunk(a.replace(/\s/g, ""), 4) : words(a);
  const right = short ? chunk(b.replace(/\s/g, ""), 2) : words(b);
  const all = [...left, ...right];
  const size = fit(all.map((l) => l + "  "), { charW: 0.66, lineH: 0.92, w: short ? 0.62 : 0.9, h: 0.9, max: 26 });
  const face: CSSProperties = { fontFamily: "var(--font-brand), sans-serif", fontWeight: 300, letterSpacing: "-0.02em", lineHeight: 0.92 };
  return (
    <Frame label={title} style={{ background: "#7A2446" }}>
      <div className="absolute inset-0 p-[5cqmin]" style={{ ...face, ...size, color: p.accent2 }}>
        <Lines lines={left} />
        <Lines lines={right} className="absolute bottom-[5cqmin] right-[5cqmin] text-right" />
        <Lines lines={["20", "26"]} className="absolute bottom-[5cqmin] left-[5cqmin]" />
      </div>
      <span className="absolute right-[3cqmin] top-[3cqmin] label" style={{ ...tiny, color: p.light }}>
        {kicker}
      </span>
      {caption && (
        <span className="absolute left-[5cqmin] top-[48%] max-w-[30%] label" style={{ ...tiny, color: p.light }}>
          {caption}
        </span>
      )}
    </Frame>
  );
}

/** Omnia: lowercase letters cut from gridded paper, scattered and turned. */
function BrandPattern({ world, title, kicker }: P) {
  const p = world.palette;
  const chars = [...title.toLowerCase().replace(/[^a-záéíóúñü&]/g, "")].slice(0, 14);
  const cols = chars.length <= 6 ? 3 : 4;
  const rows = Math.ceil(chars.length / cols);
  const r = seeded(title + "o");
  const turns = [0, 0, 0, 90, 180, 0, -90, 0];
  return (
    <Frame label={title} className="grain" style={{ background: "#6E1530" }}>
      <svg viewBox="0 0 100 30" preserveAspectRatio="none" className="absolute inset-x-0 top-0 h-[24%] w-full">
        <path d="M0 0 H100 V8 L92 30 L86 8 L70 6 C66 22, 50 24, 46 8 L30 8 L24 28 L18 8 L0 10 Z" fill="#33405E" />
        <path d="M70 6 L72 26 M24 28 L22 6" stroke="#6E1530" strokeDasharray="1 1.4" strokeWidth="0.4" fill="none" />
      </svg>
      <div
        className="absolute inset-[4cqmin] top-[10%] grid"
        style={{ gridTemplateColumns: `repeat(${cols}, 1fr)`, gridTemplateRows: `repeat(${rows}, 1fr)` }}
      >
        {chars.map((c, i) => (
          <span
            key={i}
            className="tex-grid clip-text flex items-center justify-center leading-none"
            style={{
              fontFamily: "var(--font-rubik), sans-serif",
              fontWeight: 700,
              fontSize: `min(${(86 / cols).toFixed(1)}cqw, ${(80 / rows).toFixed(1)}cqh)`,
              transform: `rotate(${turns[Math.floor(r() * turns.length)]}deg) translate(${(r() - 0.5) * 12}%, ${(r() - 0.5) * 12}%)`,
            }}
          >
            {c}
          </span>
        ))}
      </div>
      <span className="absolute bottom-[3cqmin] left-[3cqmin] label" style={{ ...tiny, color: p.light }}>
        {kicker}
      </span>
    </Frame>
  );
}

/* =========================================================== 03 · AI */

/** Unexpected Works: frames stepping inwards, each cropping huge black type. */
function AiEcho({ world, title, kicker }: P) {
  const p = world.palette;
  const [a, b] = halves(pixelSafe(title).toUpperCase());
  // The frames echo the longer half; the core shows both
  const echo = (b.length >= a.length ? b : a).replace(/^\+\s*/, "");
  const shades = [p.accent, "#7BF4B8", "#98F7C8", "#B5F9D8", "#CFFBE5", p.tint];
  const n = 6;
  return (
    <Frame label={title} style={{ background: p.accent }}>
      {Array.from({ length: n }).map((_, i) => {
        const w = 100 - i * 14;
        return (
          <div
            key={i}
            className="absolute overflow-hidden"
            style={{
              inset: `${i * 6.5}% ${i * 7}%`,
              background: shades[i],
              boxShadow: i ? "0 0 0 0.25cqmin #0F1F19" : undefined,
            }}
          >
            {[echo, echo].map((word, k) => (
              <span
                key={k}
                className="absolute inset-x-0 block whitespace-nowrap text-center"
                style={{
                  ...anton,
                  color: "#0F1F19",
                  lineHeight: 0.8,
                  fontSize: `min(${((w * 0.98) / (Math.max(word.length, 3) * 0.46)).toFixed(1)}cqw, ${(34 - i * 4).toFixed(0)}cqh)`,
                  top: k ? undefined : 0,
                  bottom: k ? 0 : undefined,
                  transform: `translateY(${k ? 42 : -42}%)`,
                }}
              >
                {word}
              </span>
            ))}
          </div>
        );
      })}
      <div
        className="absolute flex flex-col items-center justify-center border-[0.4cqmin] border-[#0F1F19] text-center"
        style={{ inset: `${n * 6.5}% ${n * 7}%`, background: p.tint }}
      >
        <Lines
          lines={[a, b].filter(Boolean)}
          style={{ ...anton, color: "#0F1F19", lineHeight: 0.85, ...fit([a, b], { charW: 0.48, lineH: 0.85, w: 0.13, h: 0.16, max: 12 }) }}
        />
      </div>
      <span className="absolute bottom-[1.5cqmin] right-[1.5cqmin] bg-[#0F1F19] px-[1cqmin] py-[0.5cqmin]" style={{ ...pixel, ...tiny, color: p.accent }}>
        {kicker}
      </span>
    </Frame>
  );
}

/** Autotypography: diagonal extruded type, a noise block, an upside-down number. */
function AiFriction({ world, title, caption, kicker }: P) {
  const p = world.palette;
  const lines = words(title);
  const depth = Array.from({ length: 6 }, (_, i) => `${(i + 1) * 0.012}em ${(i + 1) * 0.012}em 0 ${p.deep}`).join(", ");
  return (
    <Frame label={title} className="grain" style={{ background: p.accent2 }}>
      <div className="tex-noise absolute left-[8%] top-[12%] h-[34%] w-[30%]" style={{ boxShadow: `1.4cqmin 1.4cqmin 0 #0F1F19` }} />
      <span className="absolute right-[4cqmin] top-[2cqmin] rotate-180" style={{ ...anton, fontSize: "11cqmin", color: "transparent", WebkitTextStroke: "0.4cqmin #0F1F19" }}>
        {kicker?.slice(0, 2) || world.n}
      </span>
      <div className="absolute inset-0 flex items-center justify-center">
        <Lines
          lines={lines}
          className="italic-serif"
          style={{
            color: p.tint,
            transform: "rotate(-24deg)",
            lineHeight: 0.95,
            textShadow: depth,
            ...fit(lines, { charW: 0.48, lineH: 0.95, w: 0.8, h: 0.5, max: 26 }),
          }}
        />
      </div>
      <svg viewBox="0 0 40 40" className="absolute bottom-[10%] left-[42%] h-[16cqmin] w-[16cqmin]">
        <path d="M20 2 L23 15 L36 6 L26 18 L39 22 L25 24 L32 38 L20 27 L10 38 L15 24 L1 21 L14 17 L5 5 L18 14 Z" fill={p.light} stroke="#0F1F19" strokeWidth="1.2" />
      </svg>
      <span className="vertical absolute bottom-[10%] left-[3cqmin] italic-serif" style={{ ...small, color: "#0F1F19" }}>
        {caption}
      </span>
      <span className="absolute bottom-[3cqmin] right-[3cqmin] -rotate-45 italic-serif" style={{ ...small, color: "#0F1F19" }}>
        {world.style}
      </span>
    </Frame>
  );
}

/** I'll Be Your Mirror: modular type in vertical columns, a grid of tiny words. */
function AiMirror({ world, title, fragments = [], kicker }: P) {
  const p = world.palette;
  const cols = pixelSafe(title)
    .toUpperCase()
    .split(/\s+/)
    .filter(Boolean)
    .flatMap((w) => chunk(w, 6));
  const longest = Math.max(...cols.map((c) => c.length));
  const size = `min(${(82 / (longest * 0.92)).toFixed(1)}cqh, ${(84 / (cols.length * 1.05)).toFixed(1)}cqw, 30cqmin)`;
  const grid = [...fragments, kicker ?? ""].filter(Boolean).slice(0, 6);
  return (
    <Frame label={title} style={{ background: "#232A26" }}>
      <div className="absolute inset-0 grid grid-cols-3 grid-rows-6 p-[4cqmin]" style={{ ...pixel, ...tiny, color: "#7E8F86" }}>
        {grid.map((g, i) => (
          <span key={g + i} style={{ gridColumn: (i % 3) + 1, gridRow: Math.floor(i / 3) * 2 + 1 }}>
            {g}
          </span>
        ))}
      </div>
      <div className="absolute inset-y-[6%] right-[5%] flex flex-row items-end gap-[1cqmin]" style={{ fontSize: size }}>
        {cols.map((c, i) => (
          <span key={i} className="whitespace-nowrap" style={{ ...pixel, fontWeight: 700, color: p.accent2, lineHeight: 0.9, writingMode: "vertical-rl", transform: "rotate(180deg)" }}>
            {c}
          </span>
        ))}
      </div>
    </Frame>
  );
}

/* ====================================================== 04 · Content */

/** My Name is Wendy: a black frame of giant letters around a mint/salmon panel. */
function ContentFrame({ world, title, fragments = [], kicker }: P) {
  const p = world.palette;
  const T = title.toUpperCase();
  const letters = [...(T.split(" ")[0].length <= 8 ? T.split(" ")[0] : T.replace(/[^A-Z&ÁÉÍÓÚÑ]/g, "").slice(0, 6))];
  const list = fragments.length ? fragments : ["Story", "Social", "Copy", "Video"];
  const edge: CSSProperties = { ...anton, color: "#F3F3F3", fontSize: "8cqmin" };
  return (
    <Frame label={title} style={{ background: "#0E0E0E" }}>
      <div className="absolute inset-x-0 top-0 flex justify-between overflow-hidden px-[1cqmin]" style={{ ...anton, color: "#F3F3F3", fontSize: "13cqmin", lineHeight: 0.8 }}>
        {[...T.split(" ")[0].slice(0, 6)].map((c, i) => (
          <span key={i} className="rotate-180">
            {c}
          </span>
        ))}
      </div>
      <div className="absolute inset-y-0 left-0 flex items-center overflow-hidden" style={edge}>
        <span className="vertical whitespace-nowrap">{Array(3).fill(T).join(" · ")}</span>
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center overflow-hidden" style={edge}>
        <span className="whitespace-nowrap" style={{ writingMode: "vertical-rl" }}>
          {Array(3).fill(T).join(" · ")}
        </span>
      </div>
      <div className="absolute bottom-[4%] left-[11%] right-[11%] top-[13%] flex flex-col">
        <div className="relative flex-[1.1]" style={{ background: p.accent }}>
          <span className="absolute left-[2cqmin] top-[1.5cqmin] label" style={{ ...tiny, color: "#0E0E0E" }}>
            {kicker}
          </span>
          <div className="absolute inset-x-[2cqmin] bottom-[1cqmin] top-[7cqmin] flex items-end justify-between">
            {letters.map((c, i) => (
              <span key={i} className="flex h-full flex-col items-center justify-end border-l-[0.35cqmin] border-[#0E0E0E] pl-[0.6cqmin]">
                <span style={{ ...anton, color: "#0E0E0E", fontSize: `min(${(150 / letters.length).toFixed(1)}cqw, 30cqh)`, lineHeight: 0.85, marginBottom: `${(i % 3) * 2}cqh` }}>
                  {c}
                </span>
                <span className="block h-[0.6cqmin] w-full bg-[#0E0E0E]" />
              </span>
            ))}
          </div>
        </div>
        <div className="flex flex-1 items-stretch justify-around px-[2cqmin] py-[1.5cqmin]" style={{ background: p.mid }}>
          {list.slice(0, 5).map((w) => (
            <span key={w} className="whitespace-nowrap border-b-[0.35cqmin] border-[#0E0E0E]" style={{ ...anton, writingMode: "vertical-rl", transform: "rotate(180deg)", color: "#0E0E0E", fontSize: "6.4cqmin", lineHeight: 0.9 }}>
              {w},
            </span>
          ))}
        </div>
      </div>
    </Frame>
  );
}

/** It's Nice That: blurred heavy italic lines in a peach-to-butter gradient. */
function ContentGlow({ world, title, caption, fragments = [], kicker }: P) {
  const p = world.palette;
  const lines = words(title.toUpperCase());
  const tones = [p.deep, "#F07A3A", "#F2A23A", "#E8B23E"];
  return (
    <Frame label={title} style={{ background: p.accent2 }}>
      <div
        className="grain absolute inset-[7%_14%] flex flex-col items-center justify-center overflow-hidden"
        style={{ background: `linear-gradient(180deg, ${p.mid} 0%, ${p.light} 45%, #FBEFC4 100%)` }}
      >
        <span className="absolute inset-x-[5%] top-[4%] flex justify-between" style={{ ...tiny, color: "#4A2A1A" }}>
          <span>{kicker}</span>
          <span>№ {world.n}</span>
        </span>
        <div className="flex flex-col items-center text-center">
          {lines.map((l, i) => (
            <div key={i} className="flex flex-col items-center">
              <span
                className="whitespace-nowrap"
                style={{
                  ...rubik,
                  fontStyle: "italic",
                  textTransform: "uppercase",
                  color: tones[i % tones.length],
                  filter: "blur(0.35cqmin)",
                  lineHeight: 0.95,
                  ...fit(lines, { charW: 0.74, lineH: 1.45, w: 0.66, h: 0.82, max: 30 }),
                }}
              >
                {l}
              </span>
              {i < lines.length - 1 && (
                <span className="my-[1.2cqmin] max-w-[70%]" style={{ ...tiny, color: "#4A2A1A" }}>
                  {fragments[i] ?? caption}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </Frame>
  );
}

/** Somewhere In Between: condensed black type broken across the page, small photos, fragments. */
function ContentBetween({ world, title, caption, fragments = [], kicker }: P) {
  const p = world.palette;
  const hyphenate = (w: string): string[] => {
    if (w.length <= 7) return [w];
    if (w.includes(" ") && !w.startsWith("&")) return w.split(" ").flatMap(hyphenate);
    const cut = Math.ceil(w.length / 2);
    return [w.slice(0, cut) + "—", w.slice(cut)];
  };
  const lines = words(title.toUpperCase()).flatMap(hyphenate);
  const frags = fragments.length ? fragments : ["Story", "Social", "Copy", "Video"];
  const photo = (dir: string): CSSProperties => ({
    background: `linear-gradient(${dir}, #2a0d04 0%, #7a2a0e 38%, ${p.deep} 39%, ${p.mid} 100%)`,
  });
  return (
    <Frame label={title} className="grain" style={{ background: "#F0471A" }}>
      <div className="grain absolute right-[4%] top-[4%] h-[16%] w-[34%]" style={photo("0deg")} />
      <div className="grain absolute bottom-[6%] left-[4%] h-[15%] w-[30%]" style={photo("180deg")} />
      <div className="absolute inset-0 p-[4cqmin]">
        <Lines
          lines={lines}
          style={{ ...anton, color: "#141414", lineHeight: 0.86, ...fit(lines, { charW: 0.5, lineH: 0.86, w: 0.62, h: 0.84, max: 32 }) }}
          className="[&>span:nth-child(even)]:ml-[18%]"
        />
        <span className="absolute left-[4cqmin] top-[28%]" style={{ ...anton, ...tiny, color: "#141414" }}>
          {kicker}
        </span>
        <ul className="absolute right-[4cqmin] top-[30%] flex flex-col items-end gap-[5cqmin] text-right">
          {frags.slice(0, 4).map((f, i) => (
            <li key={f} style={{ ...anton, ...small, color: "#141414", marginRight: `${(i % 2) * 10}cqmin` }}>
              {f}
            </li>
          ))}
        </ul>
        {caption && (
          <span className="absolute bottom-[3cqmin] right-[4cqmin]" style={{ ...anton, ...tiny, color: "#141414" }}>
            {caption}
          </span>
        )}
      </div>
    </Frame>
  );
}

/* =================================================== 05 · Playground */

/** MADE: knitted letters over a dotted word, letter-spaced lowercase on the side. */
function PlayMade({ world, title, caption, kicker }: P) {
  const p = world.palette;
  const T = title.toUpperCase();
  const first = words(T)[0].replace(/\s/g, "").slice(0, 10);
  const knit = [...first.slice(0, 4)];
  return (
    <Frame label={title} className="grain" style={{ background: p.deep }}>
      <svg viewBox="0 0 100 20" preserveAspectRatio="xMinYMid meet" className="absolute left-[26%] top-[28%] h-[36%] w-[72%]">
        <text
          x="2"
          y="17"
          style={{ fontFamily: "var(--font-rubik)", fontWeight: 900, fontSize: Math.min(30, 125 / first.length) }}
          fill="none"
          stroke={p.accent}
          strokeWidth="0.9"
          strokeDasharray="0 1.7"
          strokeLinecap="round"
        >
          {first}
        </text>
      </svg>
      <svg viewBox="0 0 40 100" preserveAspectRatio="xMidYMid meet" className="absolute left-[1%] top-[3%] h-[94%] w-[26%]">
        <defs>
          <filter id="knit">
            <feTurbulence type="fractalNoise" baseFrequency="1.4" numOctaves="2" seed="2" />
            <feDisplacementMap in="SourceGraphic" scale="1.6" />
          </filter>
        </defs>
        {knit.map((c, i) => (
          <text
            key={i}
            x="20"
            y={20 + i * 22}
            textAnchor="middle"
            transform={`rotate(${i % 2 ? 84 : 96} 20 ${13 + i * 22})`}
            style={{ fontFamily: "var(--font-rubik)", fontWeight: 900, fontSize: 23 }}
            fill={p.accent2}
            stroke="#1E8F69"
            strokeWidth="1.4"
            strokeDasharray="1 0.7"
            paintOrder="stroke"
            filter="url(#knit)"
          >
            {c}
          </text>
        ))}
        <path d="M22 96 C 28 90, 34 99, 39 92" stroke={p.accent2} strokeWidth="0.8" fill="none" />
      </svg>
      <div className="absolute right-[5cqmin] top-[5cqmin] flex max-w-[48%] flex-col text-right" style={{ fontWeight: 700, color: p.accent, fontSize: "max(10px, 3.6cqmin)", lineHeight: 1.15 }}>
        {(caption ?? "experimental").split(" ").map((w, i) => (
          <span key={i} style={{ letterSpacing: i % 2 ? "0.45em" : "0.08em" }}>
            {w.toLowerCase()}
          </span>
        ))}
        <span className="mt-[2cqmin]" style={{ letterSpacing: "0.08em" }}>
          {title.toLowerCase()}
        </span>
      </div>
      <div className="absolute bottom-[5cqmin] right-[5cqmin] text-right" style={{ fontWeight: 700, color: p.accent, fontSize: "max(10px, 4.4cqmin)", lineHeight: 1.1 }}>
        <div>{world.n} // 10 // 26</div>
        <div style={{ ...tiny, marginTop: "1cqmin" }}>{kicker}</div>
      </div>
    </Frame>
  );
}

/** Sensible: letters descending diagonally, each one a different 3D trick. */
function PlaySensible({ world, title, fragments = [], kicker }: P) {
  const p = world.palette;
  const chars = [...title.replace(/\s+/g, "")].slice(0, 9);
  const n = chars.length;
  const size = `min(${(70 / Math.max(n * 0.55, 3)).toFixed(1)}cqw, ${(78 / Math.max(n * 0.62, 3)).toFixed(1)}cqh, 26cqmin)`;
  const stripes = Array.from({ length: 7 }, (_, k) => `${(k + 1) * 0.014}em ${(k + 1) * 0.02}em 0 ${k % 2 ? "#141414" : "#fff"}`).join(", ");
  const looks: CSSProperties[] = [
    { ...rubik, color: "#141414", textShadow: stripes },
    { ...rubik, color: "#fff", WebkitTextStroke: "0.02em #141414", textShadow: `0.05em 0.05em 0 ${p.light}` },
    { ...rubik, color: p.light, WebkitTextStroke: "0.02em #141414" },
    { fontFamily: "var(--font-shade)", color: "#141414" },
    { ...serif, fontStyle: "italic", color: "#141414", WebkitTextStroke: "0.015em #141414" },
  ];
  return (
    <Frame label={title} style={{ background: "#FFFFFF" }}>
      <span className="absolute -left-[4%] -top-[10%] leading-none" style={{ ...rubik, color: p.light, fontSize: "62cqmin" }}>
        {chars[0]}
      </span>
      <span className="absolute -bottom-[16%] -left-[2%] leading-none" style={{ ...rubik, color: p.light, fontSize: "70cqmin" }}>
        {chars[n - 1]?.toLowerCase()}
      </span>
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 h-full w-full">
        <path d="M10 60 C 40 40, 70 80, 98 50" stroke="#141414" strokeWidth="0.6" fill="none" vectorEffect="non-scaling-stroke" />
        <circle cx="78" cy="30" r="9" stroke="#141414" fill="none" vectorEffect="non-scaling-stroke" />
      </svg>
      <div className="absolute inset-[6%]">
        {chars.map((c, i) => (
          <span
            key={i}
            className="absolute leading-none"
            style={{
              ...looks[i % looks.length],
              fontSize: size,
              left: `${(i % 2) * 22 + (i / n) * 46}%`,
              top: `${(i / n) * 82}%`,
            }}
          >
            {c}
          </span>
        ))}
      </div>
      <span className="absolute right-[5cqmin] top-[5cqmin] serif" style={{ color: p.light, fontSize: "7cqmin" }}>
        // 2026
      </span>
      <ul className="absolute bottom-[5cqmin] right-[5cqmin] flex flex-col items-end gap-[1cqmin]" style={{ ...tiny, color: "#141414" }}>
        {fragments.slice(0, 3).map((f, i) => (
          <li key={f} className="border border-[#141414] px-[1cqmin]">
            {i === 0 ? `[${f}]` : f}
          </li>
        ))}
        <li className="label" style={{ color: p.deep }}>
          {kicker}
        </li>
      </ul>
    </Frame>
  );
}

/** Purple Haze: each word starts hairline-thin and turns into op-art rings. */
function PlayHaze({ world, title, fragments = [], kicker }: P) {
  const p = world.palette;
  const rows = [...words(title.toUpperCase()), ...fragments.map((f) => f.toUpperCase())].slice(0, 5);
  const size = fit(rows, { charW: 0.78, lineH: 1.05, w: 0.9, h: 0.84, max: 22 });
  const thin = (s: string) => <span style={{ fontFamily: "var(--font-sans)", fontWeight: 200, color: p.deep }}>{s}</span>;
  const op = (s: string) => (
    <span className="tex-op clip-text" style={{ ...rubik, WebkitTextStroke: `0.012em ${p.deep}` }}>
      {s}
    </span>
  );
  return (
    <Frame label={title} style={{ background: "#FFFFFF" }}>
      <div className="absolute inset-0 flex flex-col justify-center px-[5cqmin]" style={size}>
        {rows.map((w, i) => {
          const cut = Math.max(1, Math.floor(w.length * (i % 2 ? 0.55 : 0.3)));
          const thinFirst = i % 3 !== 1;
          return (
            <span key={i} className="block whitespace-nowrap leading-[1.02]">
              {thinFirst ? thin(w.slice(0, cut)) : op(w.slice(0, cut))}
              {thinFirst ? op(w.slice(cut)) : thin(w.slice(cut))}
            </span>
          );
        })}
      </div>
      <span className="absolute bottom-[3cqmin] left-[5cqmin] label" style={{ ...tiny, color: p.deep }}>
        {kicker}
      </span>
    </Frame>
  );
}
