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
/* Idea: chunky, chopped letters (SEA / FOOD) floating on fluid, luminous
   water; a quiet serif line in the middle, like a breath. */

function chop(text: string) {
  const ws = words(text.toUpperCase());
  const letters = text.replace(/\s/g, "").length;
  if (letters > 11) return ws;
  return ws.flatMap((w) => {
    const clean = w.replace(/\s/g, "");
    if (clean.length <= 4) return [clean];
    // Up to 8 letters: break near the middle, shorter half first (SEA / FOOD)
    if (clean.length <= 8) {
      const c = Math.floor(clean.length / 2);
      return [clean.slice(0, c), clean.slice(c)];
    }
    const parts: string[] = [];
    for (let i = 0; i < clean.length; i += 4) parts.push(clean.slice(i, i + 4));
    if (parts.length > 1 && parts[parts.length - 1].length === 1) parts[parts.length - 2] += parts.pop();
    return parts;
  });
}

function SeafoodCover({ world, title, caption: cap, fragments = [], kicker }: PosterProps) {
  const lines = chop(title);
  const ice: CSSProperties = {
    fontFamily: "var(--font-rubik), sans-serif",
    fontWeight: 900,
    textTransform: "uppercase",
    letterSpacing: "-0.035em",
    lineHeight: 0.84,
    backgroundImage: "linear-gradient(180deg, #ffffff 0%, #e6f6fd 45%, #b7e2f5 100%)",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    color: "transparent",
    filter: "drop-shadow(0 0.03em 0.08em rgba(8,59,102,0.35))",
  };
  return (
    <div role="img" aria-label={title} className="poster water absolute inset-0 overflow-hidden" style={{ color: world.palette.tint }}>
      <div aria-hidden className="absolute inset-0 flex flex-col p-[5cqmin]">
        <div className="flex items-start justify-between gap-4" style={label}>
          <Meta kicker={kicker} fragments={fragments} />
        </div>
        <div className="mt-[3cqmin] transition-transform duration-[1200ms] ease-soft group-hover:-translate-y-[1.2cqmin]">
          <Lines lines={lines} style={{ ...ice, ...fit(lines, { charW: 0.74, lineH: 0.84, w: 0.88, h: 0.58, max: 34 }) }} />
        </div>
        {cap && (
          <p
            className="mx-auto mt-auto max-w-[70%] text-center uppercase"
            style={{ ...serif, fontSize: "max(11px, 2.6cqmin)", letterSpacing: "0.14em", lineHeight: 1.5, color: "#f4fbff" }}
          >
            {cap}
          </p>
        )}
      </div>
    </div>
  );
}

/* ------------------------------------------------ 02 · Bold Editorial */
/* Idea: a magazine cover split in two: the headline changes colour as it
   crosses into the darker panel. */

function BrandCover({ world, title, caption: cap, fragments = [], kicker }: PosterProps) {
  const p = world.palette;
  const ws = words(title.toUpperCase());
  const cut = Math.ceil(ws.length / 2);
  const left = ws.length === 1 ? [ws[0]] : ws.slice(0, cut);
  const right = ws.length === 1 ? [] : ws.slice(cut);
  const size = fit([...left, ...right], { charW: 0.7, lineH: 0.88, w: 0.9, h: 0.66, max: 26 });
  // The split sits at 64% of the cover; the gradient stop follows it.
  const split = "calc(64cqw - 5cqmin)";
  const two: CSSProperties = {
    backgroundImage: `linear-gradient(90deg, ${p.light} ${split}, ${p.tint} ${split})`,
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    color: "transparent",
  };
  return (
    <Cover
      title={title}
      bg={p.mid}
      fg={p.tint}
      top={<Meta kicker={kicker} fragments={fragments} />}
      foot={cap ? <span className="serif" style={{ fontSize: "max(13px, 3.4cqmin)" }}>{cap}</span> : undefined}
      layer={
        <div className="absolute inset-y-0 left-[64%] right-0" style={{ background: p.deep }}>
          <span
            className="absolute right-[3cqmin] top-1/2 origin-right -translate-y-1/2 rotate-90 whitespace-nowrap italic-serif"
            style={{ fontSize: "max(12px, 3cqmin)", color: p.light }}
          >
            Nº {world.n}: {world.style}
          </span>
        </div>
      }
    >
      <div className="w-full transition-[letter-spacing] duration-700 ease-soft group-hover:tracking-[-0.02em]" style={{ ...sans800, lineHeight: 0.88, ...size }}>
        {[...left.map((l) => ({ l, r: false })), ...right.map((l) => ({ l, r: true }))].map(({ l, r }, i) => (
          <span key={i} className={`block whitespace-nowrap ${r ? "text-right" : ""}`} style={two}>
            {l}
          </span>
        ))}
      </div>
    </Cover>
  );
}

/* -------------------------------------------- 03 · Organic Technology */
/* Idea: a system at work: a small flow of nodes and a blinking cursor. */

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
            className="absolute inset-0 opacity-[0.16]"
            style={{ backgroundImage: `radial-gradient(${p.light} 1px, transparent 1.2px)`, backgroundSize: "4cqmin 4cqmin" }}
          />
          {/* Flow: input → process → output */}
          <svg viewBox="0 0 100 60" className="absolute right-[5cqmin] top-[11cqmin] h-[24cqmin] w-[40cqmin]">
            <path
              d="M8 12 H 40 V 30 H 62 V 48 H 92"
              fill="none"
              stroke={p.light}
              strokeWidth="1"
              strokeDasharray="3 3"
              className="nc-dash"
            />
            {[
              [8, 12],
              [40, 30],
              [62, 30],
              [92, 48],
            ].map(([x, y], i) => (
              <rect
                key={i}
                x={x - 4}
                y={y - 4}
                width="8"
                height="8"
                fill={i === 3 ? p.light : p.deep}
                stroke={p.light}
                strokeWidth="1"
                className={i === 3 ? "origin-center transition-transform duration-500 group-hover:scale-125" : ""}
                style={{ transformBox: "fill-box" }}
              />
            ))}
          </svg>
        </>
      }
    >
      <div style={{ ...sans800, color: p.light, lineHeight: 0.9, ...fit(lines, { charW: 0.64, lineH: 0.9, w: 0.82, h: 0.5, max: 22 }) }}>
        {lines.map((l, i) => (
          <span key={i} className="block whitespace-nowrap">
            {l}
            {i === lines.length - 1 && (
              <span className="nc-blink ml-[0.08em] inline-block h-[0.72em] w-[0.42em] align-baseline" style={{ background: p.light }} />
            )}
          </span>
        ))}
      </div>
    </Cover>
  );
}

/* ---------------------------------------------- 04 · Playful Editorial */
/* Idea: a collage: two cut-out "prints" taped over a big condensed headline. */

function ContentCover({ world, title, caption: cap, fragments = [], kicker }: PosterProps) {
  const p = world.palette;
  const lines = words(title.toUpperCase());
  const print = (bg: string, rot: string, hover: string, cls: string, n: string) => (
    <div
      className={`absolute border-[0.6cqmin] border-white shadow-[0_1.2cqmin_2.4cqmin_rgba(0,0,0,0.18)] transition-transform duration-700 ease-soft ${hover} ${cls}`}
      style={{ background: bg, transform: `rotate(${rot})` }}
    >
      <span className="absolute bottom-[0.8cqmin] left-[1cqmin] italic-serif" style={{ fontSize: "max(10px, 2.4cqmin)", color: "#141414" }}>
        {n}
      </span>
      <span className="absolute -top-[1.6cqmin] left-1/2 h-[3cqmin] w-[9cqmin] -translate-x-1/2 -rotate-3 bg-white/70" />
    </div>
  );
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
      layer={
        <>
          {print(`linear-gradient(160deg, ${p.light}, ${p.mid})`, "-5deg", "group-hover:rotate-[-9deg]", "right-[8cqmin] top-[12cqmin] h-[26%] w-[30%]", "fig. 1")}
          {print(`linear-gradient(200deg, ${p.tint}, ${p.light})`, "6deg", "group-hover:rotate-[10deg] group-hover:translate-x-[1cqmin]", "right-[26cqmin] top-[24cqmin] h-[18%] w-[22%]", "fig. 2")}
        </>
      }
    >
      <Lines lines={lines} style={{ ...anton, lineHeight: 0.88, ...fit(lines, { charW: 0.48, lineH: 0.88, w: 0.82, h: 0.6, max: 34 }) }} />
    </Cover>
  );
}

/* --------------------------------------------------- 05 · Creative Chaos */
/* Idea: letters that won't sit the same way twice: fill, outline, italic  
   and jump when you come close. */

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
          <svg viewBox="0 0 100 100" className="nc-spin absolute right-[10cqmin] top-[12cqmin] h-[22cqmin] w-[22cqmin]">
            <path
              d="M50 4 C 54 34, 66 46, 96 50 C 66 54, 54 66, 50 96 C 46 66, 34 54, 4 50 C 34 46, 46 34, 50 4 Z"
              fill={p.deep}
            />
          </svg>
          <span
            className="nc-wobble absolute left-[5cqmin] top-[34%] rounded-full px-[2.4cqmin] py-[1.2cqmin]"
            style={{ ...label, background: "#fff", color: p.deep, border: `1px solid ${p.deep}` }}
          >
            ✶ {world.style}
          </span>
        </>
      }
    >
      <div style={{ ...sans800, lineHeight: 0.92, ...fit(lines, { charW: 0.64, lineH: 0.92, w: 0.86, h: 0.56, max: 24 }) }}>
        {lines.map((l, li) => (
          <span key={li} className="block whitespace-nowrap">
            {[...l].map((ch, i) => {
              const k = (i + li) % 3;
              return (
                <span
                  key={i}
                  className="inline-block transition-transform duration-500 ease-soft group-hover:[transform:translateY(var(--jump))_rotate(var(--tilt))]"
                  style={
                    {
                      "--jump": `${i % 2 ? -0.12 : -0.05}em`,
                      "--tilt": `${((i % 3) - 1) * 4}deg`,
                      transitionDelay: `${i * 30}ms`,
                      ...(k === 1
                        ? { color: "transparent", WebkitTextStroke: `0.025em ${p.deep}` }
                        : k === 2
                          ? { ...serif, fontStyle: "italic", color: p.mid }
                          : { color: p.deep }),
                    } as unknown as CSSProperties
                  }
                >
                  {ch}
                </span>
              );
            })}
          </span>
        ))}
      </div>
    </Cover>
  );
}
