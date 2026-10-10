import type { CSSProperties, ReactNode } from "react";
import type { World } from "@/lib/worlds";

/**
 * Cover for a world or a case. Every cover shares one editorial grid
 * (label on top, headline, caption at the foot); each world changes only
 * its colour, its type attitude and one quiet gesture. The references in
 * the visual direction are mood, not templates.
 *
 * The cover fills its parent; give the parent a size. Type is sized in
 * container units so it works as a card or a full-width header.
 */
export type PosterProps = {
  world: World;
  title: string;
  caption?: string;
  /** Up to three short words for the meta line. */
  fragments?: string[];
  kicker?: string;
  className?: string;
};

export function WorldPoster(props: PosterProps) {
  const C = {
    seafood: SeafoodCover,
    brand: BrandCover,
    ai: AiCover,
    content: ContentCover,
    playground: PlaygroundCover,
  }[props.world.slug];
  return <C {...props} />;
}

/** Display class for headings set in a world's register. */
export const worldFont: Record<World["slug"], string> = {
  seafood: "wf-seafood",
  brand: "wf-brand",
  ai: "wf-ai",
  content: "wf-content",
  playground: "wf-playground",
};

/** Kept for list-size headings; same as worldFont now. */
export const worldFontSmall = worldFont;

/** The pixel face's ampersand reads as a dollar sign. */
export function pixelSafe(text: string) {
  return text.replace(/&/g, "+");
}

/* ---------------------------------------------------------------- helpers */

const SMALL = new Set(["&", "and", "y", "on", "in", "en", "of", "de", "the", "la", "el"]);

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

/** Font size that fits `lines` into a fraction of the cover. */
function fit(
  lines: string[],
  { charW, lineH, w, h, max }: { charW: number; lineH: number; w: number; h: number; max: number }
): CSSProperties {
  const longest = Math.max(...lines.map((l) => l.length), 1);
  const byW = (w * 100) / (longest * charW);
  const byH = (h * 100) / (Math.max(lines.length, 1) * lineH);
  return { fontSize: `min(${byW.toFixed(2)}cqw, ${byH.toFixed(2)}cqh, ${max}cqmin)` };
}

const label: CSSProperties = {
  fontSize: "max(9px, 1.9cqmin)",
  fontWeight: 600,
  letterSpacing: "0.12em",
  textTransform: "uppercase",
  lineHeight: 1.3,
};
const caption: CSSProperties = { fontSize: "max(11px, 2.6cqmin)", lineHeight: 1.3 };
const sans800: CSSProperties = { fontFamily: "var(--font-sans), sans-serif", fontWeight: 800, letterSpacing: "-0.04em" };
const serif: CSSProperties = { fontFamily: "var(--font-serif), Georgia, serif", fontWeight: 400, letterSpacing: "-0.01em" };
const anton: CSSProperties = { fontFamily: "var(--font-anton), Impact, sans-serif", textTransform: "uppercase" };
const pixel: CSSProperties = { fontFamily: "var(--font-pixel), monospace", textTransform: "uppercase", letterSpacing: "0.04em" };

/** Shared grid: meta on top, headline, foot. */
function Cover({
  title,
  bg,
  fg,
  top,
  foot,
  children,
  layer,
  className = "",
}: {
  title: string;
  bg: string;
  fg: string;
  top: ReactNode;
  foot?: ReactNode;
  children: ReactNode;
  layer?: ReactNode;
  className?: string;
}) {
  return (
    <div
      role="img"
      aria-label={title}
      className={`poster absolute inset-0 overflow-hidden ${className}`}
      style={{ background: bg, color: fg }}
    >
      <div aria-hidden className="absolute inset-0">
        {layer}
        <div className="absolute inset-0 flex flex-col p-[5cqmin]">
          <div className="flex items-start justify-between gap-4" style={label}>
            {top}
          </div>
          <div className="relative flex flex-1 flex-col justify-end">{children}</div>
          {foot && (
            <div className="mt-[3cqmin] flex items-end justify-between gap-4 border-t pt-[2cqmin]" style={{ ...caption, borderColor: "currentColor" }}>
              {foot}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function Lines({ lines, style }: { lines: string[]; style: CSSProperties }) {
  return (
    <div style={style}>
      {lines.map((l, i) => (
        <span key={i} className="block whitespace-nowrap">
          {l}
        </span>
      ))}
    </div>
  );
}

function Meta({ kicker, fragments }: { kicker?: string; fragments: string[] }) {
  return (
    <>
      <span>{kicker}</span>
      <span className="text-right opacity-70">{fragments.slice(0, 3).join(" · ")}</span>
    </>
  );
}

/* ---------------------------------------------- 01 · Ocean Editorial */
/* Mood: water, transparency, calm editorial serif. Gesture: a few fine currents. */

function SeafoodCover({ world, title, caption: cap, fragments = [], kicker }: PosterProps) {
  const p = world.palette;
  const lines = words(title);
  const currents = Array.from({ length: 7 }, (_, i) => {
    const y = 20 + i * 9;
    let d = `M -5 ${y}`;
    for (let x = -5; x <= 205; x += 5) d += ` L ${x} ${(y + Math.sin(x / 22 + i * 0.8) * 2.4).toFixed(2)}`;
    return d;
  });
  return (
    <Cover
      title={title}
      bg={`linear-gradient(180deg, ${p.deep} 0%, #0A4677 60%, #0E5A93 100%)`}
      fg={p.tint}
      top={<Meta kicker={kicker} fragments={fragments} />}
      foot={cap ? <span className="italic-serif" style={{ fontSize: "max(13px, 3.4cqmin)" }}>{cap}</span> : undefined}
      layer={
        <svg viewBox="0 0 200 100" preserveAspectRatio="none" className="absolute inset-x-0 bottom-0 h-[55%] w-full">
          {currents.map((d, i) => (
            <path key={i} d={d} fill="none" stroke={p.light} strokeOpacity={0.12 + i * 0.05} strokeWidth="1" vectorEffect="non-scaling-stroke" />
          ))}
        </svg>
      }
    >
      <Lines lines={lines} style={{ ...serif, lineHeight: 0.92, ...fit(lines, { charW: 0.48, lineH: 0.92, w: 0.86, h: 0.62, max: 30 }) }} />
    </Cover>
  );
}

/* ------------------------------------------------ 02 · Bold Editorial */
/* Mood: granate and dusty pink, confident sans, asymmetric rhythm. */

function BrandCover({ world, title, caption: cap, fragments = [], kicker }: PosterProps) {
  const p = world.palette;
  const ws = words(title.toUpperCase());
  // Asymmetric: first half sits left, second half hangs right
  const cut = Math.ceil(ws.length / 2);
  const left = ws.length === 1 ? [ws[0]] : ws.slice(0, cut);
  const right = ws.length === 1 ? [] : ws.slice(cut);
  const size = fit([...left, ...right], { charW: 0.7, lineH: 0.88, w: 0.88, h: 0.66, max: 26 });
  return (
    <Cover
      title={title}
      bg={p.mid}
      fg={p.tint}
      top={<Meta kicker={kicker} fragments={fragments} />}
      foot={cap ? <span className="serif" style={{ fontSize: "max(13px, 3.4cqmin)" }}>{cap}</span> : undefined}
      layer={<div className="absolute inset-y-0 right-0 w-[34%]" style={{ background: p.deep, opacity: 0.45 }} />}
    >
      <div style={{ ...sans800, color: p.light, lineHeight: 0.88, ...size }}>
        {left.map((l, i) => (
          <span key={i} className="block whitespace-nowrap">
            {l}
          </span>
        ))}
        {right.map((l, i) => (
          <span key={i} className="block whitespace-nowrap text-right">
            {l}
          </span>
        ))}
      </div>
    </Cover>
  );
}

/* -------------------------------------------- 03 · Organic Technology */
/* Mood: forest and lime, systems, modules. Gesture: a quiet module grid. */

function AiCover({ world, title, caption: cap, fragments = [], kicker }: PosterProps) {
  const p = world.palette;
  const lines = words(title);
  return (
    <Cover
      title={title}
      bg={p.deep}
      fg={p.tint}
      top={
        <>
          <span style={pixel}>{kicker && pixelSafe(kicker)}</span>
          <span className="text-right opacity-70" style={pixel}>
            {fragments.slice(0, 3).join(" / ")}
          </span>
        </>
      }
      foot={cap ? <span style={{ ...pixel, fontSize: "max(9px, 2cqmin)" }}>{pixelSafe(cap)}</span> : undefined}
      layer={
        <>
          <div
            className="absolute inset-0 opacity-[0.18]"
            style={{
              backgroundImage: `radial-gradient(${p.light} 1px, transparent 1.2px)`,
              backgroundSize: "4cqmin 4cqmin",
            }}
          />
          {/* Three nested modules, top right */}
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="absolute border"
              style={{
                right: `${5 + i * 3.5}cqmin`,
                top: `${12 + i * 3.5}cqmin`,
                width: `${30 - i * 7}cqmin`,
                height: `${30 - i * 7}cqmin`,
                borderColor: p.light,
                opacity: 0.35 + i * 0.25,
                background: i === 2 ? p.light : undefined,
              }}
            />
          ))}
        </>
      }
    >
      <Lines lines={lines} style={{ ...sans800, color: p.light, lineHeight: 0.9, ...fit(lines, { charW: 0.64, lineH: 0.9, w: 0.86, h: 0.5, max: 22 }) }} />
    </Cover>
  );
}

/* ---------------------------------------------- 04 · Playful Editorial */
/* Mood: orange, energy, big condensed headlines and small fragments. */

function ContentCover({ world, title, caption: cap, fragments = [], kicker }: PosterProps) {
  const p = world.palette;
  const lines = words(title.toUpperCase());
  return (
    <Cover
      title={title}
      bg={p.deep}
      fg="#141414"
      top={<Meta kicker={kicker} fragments={[]} />}
      foot={
        <>
          <span>{cap}</span>
          <span className="text-right">{fragments.slice(0, 3).join(" · ")}</span>
        </>
      }
      layer={<div className="absolute right-[5cqmin] top-[12cqmin] h-[20%] w-[26%]" style={{ background: p.light }} />}
    >
      <Lines lines={lines} style={{ ...anton, lineHeight: 0.88, ...fit(lines, { charW: 0.48, lineH: 0.88, w: 0.82, h: 0.66, max: 34 }) }} />
    </Cover>
  );
}

/* --------------------------------------------------- 05 · Creative Chaos */
/* Mood: lilac and violet, curiosity. Gesture: letters that alternate fill and outline. */

function PlaygroundCover({ world, title, caption: cap, fragments = [], kicker }: PosterProps) {
  const p = world.palette;
  const lines = words(title);
  return (
    <Cover
      title={title}
      bg={p.tint}
      fg={p.deep}
      top={<Meta kicker={kicker} fragments={fragments} />}
      foot={cap ? <span className="italic-serif" style={{ fontSize: "max(13px, 3.4cqmin)" }}>{cap}</span> : undefined}
      layer={
        <>
          <div className="absolute -right-[8%] -top-[10%] aspect-square w-[55%] rounded-full" style={{ background: p.light }} />
          <span
            className="nc-wobble absolute right-[8cqmin] top-[18%] rounded-full px-[2.4cqmin] py-[1.2cqmin]"
            style={{ ...label, background: p.deep, color: "#fff" }}
          >
            ✶ {world.n}
          </span>
        </>
      }
    >
      <div style={{ ...sans800, lineHeight: 0.92, ...fit(lines, { charW: 0.64, lineH: 0.92, w: 0.86, h: 0.6, max: 24 }) }}>
        {lines.map((l, li) => (
          <span key={li} className="block whitespace-nowrap">
            {[...l].map((ch, i) => (
              <span
                key={i}
                style={
                  (i + li) % 3 === 1
                    ? { color: "transparent", WebkitTextStroke: `0.025em ${p.deep}` }
                    : (i + li) % 3 === 2
                      ? { ...serif, fontStyle: "italic", color: p.mid }
                      : { color: p.deep }
                }
              >
                {ch}
              </span>
            ))}
          </span>
        ))}
      </div>
    </Cover>
  );
}
