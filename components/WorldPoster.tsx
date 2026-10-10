import type { CSSProperties, ReactNode } from "react";
import type { World } from "@/lib/worlds";

/**
 * Typographic posters, one visual register per world. Built in code (no
 * borrowed imagery): each one takes the *resources* of the references in the
 * visual direction — composition, type treatment, texture — not the designs.
 *
 * The poster fills its parent; give the parent a size (aspect ratio or height).
 * Type is sized in container units so it fits any box.
 */
export type PosterProps = {
  world: World;
  /** Main text set in the world's register. */
  title: string;
  /** Small line: a lede, a format, a caption. */
  caption?: string;
  /** Extra fragments some registers scatter around the title. */
  fragments?: string[];
  /** Label in the top corner, e.g. "01 / Ocean Editorial". */
  kicker?: string;
  className?: string;
};

export function WorldPoster(props: PosterProps) {
  const P = {
    seafood: SeafoodPoster,
    brand: BrandPoster,
    ai: AiPoster,
    content: ContentPoster,
    playground: PlaygroundPoster,
  }[props.world.slug];
  return <P {...props} />;
}

/* ---------------------------------------------------------------- helpers */

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

/** Silkscreen's ampersand reads as a dollar sign. */
export function pixelSafe(text: string) {
  return text.replace(/&/g, "+");
}

function chunk(word: string, size: number) {
  const parts: string[] = [];
  for (let i = 0; i < word.length; i += size) parts.push(word.slice(i, i + size));
  // Avoid a lonely last letter
  if (parts.length > 1 && parts[parts.length - 1].length === 1) {
    parts[parts.length - 2] += parts.pop();
  }
  return parts;
}

/**
 * Font size that fits `lines` inside a fraction of the poster box.
 * charW / lineH are em-relative estimates for the face.
 */
function fit(
  lines: string[],
  { charW, lineH, w, h, max = 60 }: { charW: number; lineH: number; w: number; h: number; max?: number }
): CSSProperties {
  const longest = Math.max(...lines.map((l) => l.length), 1);
  const byW = (w * 100) / (longest * charW);
  const byH = (h * 100) / (lines.length * lineH);
  return { fontSize: `min(${byW.toFixed(2)}cqw, ${byH.toFixed(2)}cqh, ${max}cqmin)` };
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
    <div
      role="img"
      aria-label={label}
      className={`poster absolute inset-0 overflow-hidden ${className}`}
      style={style}
    >
      <div aria-hidden className="absolute inset-0">
        {children}
      </div>
    </div>
  );
}

const tiny: CSSProperties = { fontSize: "max(9px, 2.1cqmin)" };

/* ------------------------------------------------- 01 · Ocean Editorial */

function wavePaths(count: number) {
  const paths: string[] = [];
  for (let i = 0; i < count; i++) {
    const y0 = 6 + i * 7.5;
    const amp = 3 + (i % 4);
    const phase = i * 0.7;
    let d = `M -10 ${y0.toFixed(1)}`;
    for (let x = -10; x <= 410; x += 10) {
      const y = y0 + Math.sin(x / 28 + phase) * amp + Math.sin(x / 9 + phase * 2) * 0.8;
      d += ` L ${x} ${y.toFixed(2)}`;
    }
    paths.push(d);
  }
  return paths;
}
const WAVES = wavePaths(26);

function SeafoodPoster({ world, title, caption, kicker, className }: PosterProps) {
  const p = world.palette;
  const ws = words(title.toUpperCase());
  const letters = title.replace(/\s/g, "").length;
  // Short titles get the chopped, stacked treatment: SEA / FOO / D
  const lines = letters <= 11 ? ws.flatMap((w) => chunk(w, w.length > 5 ? 3 : 4)) : ws;
  return (
    <Frame
      label={title}
      className={`grain ${className ?? ""}`}
      style={{ background: `linear-gradient(170deg, ${p.deep} 0%, #0B4A80 45%, ${p.mid} 100%)` }}
    >
      {/* Currents */}
      <div className="absolute inset-x-0 bottom-0 h-[62%] overflow-hidden">
        <div className="nc-drift flex h-full w-[200%]">
          {[0, 1].map((k) => (
            <svg key={k} viewBox="0 0 400 200" preserveAspectRatio="none" className="h-full w-1/2">
              {WAVES.map((d, i) => (
                <path
                  key={i}
                  d={d}
                  fill="none"
                  stroke={i % 5 === 0 ? p.tint : p.light}
                  strokeOpacity={0.25 + (i / WAVES.length) * 0.6}
                  strokeWidth={1.1}
                  vectorEffect="non-scaling-stroke"
                />
              ))}
            </svg>
          ))}
        </div>
      </div>
      {/* Light from the surface */}
      <div
        className="absolute -top-1/4 left-1/2 h-3/4 w-3/4 -translate-x-1/2 rounded-full opacity-40 blur-3xl"
        style={{ background: p.light }}
      />

      <div className="absolute inset-0 flex flex-col justify-between p-[5cqmin]">
        <div className="flex items-start justify-between label" style={{ ...tiny, color: p.light }}>
          <span>{kicker}</span>
          <span>N 56°</span>
        </div>
        <div
          className="wf-seafood"
          style={{
            color: p.tint,
            textShadow: `0 0.04em 0 ${p.deep}`,
            ...fit(lines, { charW: 0.52, lineH: 0.82, w: 0.9, h: 0.62, max: 40 }),
          }}
        >
          {lines.map((l, i) => (
            <span key={i} className="block">
              {l}
            </span>
          ))}
        </div>
        {caption && (
          <p
            className="max-w-[70%] self-end text-right italic-serif"
            style={{ color: p.tint, fontSize: "max(13px, 4.2cqmin)", lineHeight: 1.05 }}
          >
            {caption}
          </p>
        )}
      </div>
    </Frame>
  );
}

/* --------------------------------------------------- 02 · Bold Editorial */

function BrandPoster({ world, title, caption, fragments = [], kicker, className }: PosterProps) {
  const p = world.palette;
  const ws = words(title.toUpperCase());
  const letters = title.replace(/\s/g, "").length;
  // Whitney-style split: short blocks, first half left / second half right
  const blocks = letters <= 12 ? ws.flatMap((w) => chunk(w.replace(/\s/g, ""), 3)) : ws;
  const half = Math.ceil(blocks.length / 2);
  const left = blocks.slice(0, half);
  const right = blocks.slice(half);
  const lines = [...left, ...right];
  const size = fit(lines.map((l) => l.padEnd(Math.max(...lines.map((x) => x.length)))), {
    charW: 0.66,
    lineH: 0.84,
    w: letters <= 12 ? 0.48 : 0.88,
    h: 0.86,
    max: 34,
  });
  return (
    <Frame label={title} className={`grain ${className ?? ""}`} style={{ background: p.mid }}>
      {/* Deeper band */}
      <div className="absolute inset-y-0 right-0 w-[38%]" style={{ background: p.deep, opacity: 0.55 }} />

      <div className="absolute inset-0 flex flex-col justify-between p-[5cqmin]">
        <div className="flex items-start justify-between label" style={{ ...tiny, color: p.tint }}>
          <span>{kicker}</span>
          <span>20—26</span>
        </div>
        <div className="wf-brand relative flex-1" style={{ color: p.light, ...size }}>
          <div className="absolute left-0 top-[4%]">
            {left.map((l, i) => (
              <span key={i} className="block">
                {l}
              </span>
            ))}
          </div>
          <div className="absolute bottom-0 right-0 text-right">
            {right.map((l, i) => (
              <span key={i} className="block">
                {l}
              </span>
            ))}
          </div>
        </div>
        {(caption || fragments.length > 0) && (
          <div className="mt-[3cqmin] flex items-end justify-between gap-4" style={{ color: p.tint }}>
            <ul className="label" style={tiny}>
              {fragments.slice(0, 4).map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
            {caption && (
              <p className="max-w-[55%] text-right serif" style={{ fontSize: "max(12px, 3.6cqmin)", lineHeight: 1.05 }}>
                {caption}
              </p>
            )}
          </div>
        )}
      </div>

      {/* Hand-drawn loop over the type */}
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 h-full w-full">
        <path
          d="M6 34 C 22 6, 58 4, 56 30 S 14 58, 34 70 S 92 64, 84 34 S 40 18, 50 52 S 66 98, 95 82"
          fill="none"
          stroke={p.tint}
          strokeWidth={2.2}
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </Frame>
  );
}

/* ----------------------------------------------- 03 · Organic Technology */

function AiPoster({ world, title, caption, kicker, className }: PosterProps) {
  const p = world.palette;
  const echo = (words(title)[0] ?? title).toUpperCase().replace("&", "+");
  const frames = 5;
  const step = 6.4;
  const ws = words(pixelSafe(title).toUpperCase());
  return (
    <Frame label={title} className={className} style={{ background: p.light }}>
      {/* Echo frames: the word repeats inwards, like a signal */}
      {Array.from({ length: frames }).map((_, i) => {
        const dark = i % 2 === 0;
        return (
          <div
            key={i}
            className="absolute overflow-hidden"
            style={{
              inset: `${i * step}%`,
              background: dark ? p.deep : i % 4 === 1 ? p.light : "#7BE0A0",
              color: dark ? p.light : p.deep,
            }}
          >
            <span
              className="wf-anton absolute inset-x-0 top-0 block whitespace-nowrap text-center"
              style={{ fontSize: `${Math.max(4, 15 - i * 2)}cqmin`, transform: "translateY(-30%)" }}
            >
              {Array(4).fill(echo).join(" ")}
            </span>
            <span
              className="wf-anton absolute inset-x-0 bottom-0 block whitespace-nowrap text-center"
              style={{ fontSize: `${Math.max(4, 15 - i * 2)}cqmin`, transform: "translateY(30%) scaleY(-1)" }}
            >
              {Array(4).fill(echo).join(" ")}
            </span>
          </div>
        );
      })}

      {/* Core */}
      <div
        className="absolute flex flex-col items-center justify-center p-[3cqmin] text-center"
        style={{ inset: `${frames * step}%`, background: p.tint, color: p.deep }}
      >
        <div className="wf-ai" style={fit(ws, { charW: 0.95, lineH: 1, w: 0.3, h: 0.28, max: 16 })}>
          {ws.map((w, i) => (
            <span key={i} className="block">
              {w}
            </span>
          ))}
        </div>
      </div>

      <div
        className="absolute left-[2.4cqmin] top-[2.4cqmin] px-[1.2cqmin] py-[0.6cqmin] wf-ai"
        style={{ ...tiny, color: p.deep, background: p.tint }}
      >
        {kicker}
      </div>
      {caption && (
        <div
          className="absolute bottom-[2.4cqmin] right-[2.4cqmin] max-w-[60%] px-[1.2cqmin] py-[0.6cqmin] text-right wf-ai"
          style={{ ...tiny, color: p.deep, background: p.tint }}
        >
          {pixelSafe(caption)}
        </div>
      )}
    </Frame>
  );
}

/* ------------------------------------------------ 04 · Playful Editorial */

function ContentPoster({ world, title, caption, fragments = [], kicker, className }: PosterProps) {
  const p = world.palette;
  const ws = words(title.toUpperCase());
  // Break long words with a dash, editorial-poster style: BE— / TWEEN
  const hyphenate = (w: string): string[] => {
    if (w.length <= 7) return [w];
    // Don't cut through a glued connector ("ON NEREA"), except the "&" flourish
    if (w.includes(" ") && !w.startsWith("&")) return w.split(" ").flatMap(hyphenate);
    const cut = Math.ceil(w.length / 2);
    return [w.slice(0, cut) + "—", w.slice(cut)];
  };
  const lines = ws.flatMap(hyphenate);
  const frags = fragments.length ? fragments : ["Story", "Social", "Copy", "Video"];
  return (
    <Frame label={title} className={`grain ${className ?? ""}`} style={{ background: p.deep }}>
      {/* Vertical band */}
      <div className="absolute inset-y-0 right-0 flex w-[11%] items-center justify-center overflow-hidden bg-ink">
        <span className="vertical wf-anton whitespace-nowrap" style={{ color: p.tint, fontSize: "7cqmin" }}>
          {Array(6).fill(title.toUpperCase()).join(" · ")}
        </span>
      </div>

      {/* Two small "photographs": warm horizons */}
      <div
        className="grain absolute right-[14%] top-[6%] h-[15%] w-[22%]"
        style={{ background: `linear-gradient(180deg, ${p.light} 0%, ${p.mid} 55%, #3a1408 56%, #141414 100%)` }}
      />
      <div
        className="grain absolute bottom-[14%] right-[14%] h-[12%] w-[20%]"
        style={{ background: `linear-gradient(180deg, #141414 0%, #6b250c 40%, ${p.mid} 41%, ${p.light} 100%)` }}
      />

      <div className="absolute inset-0 right-[11%] p-[5cqmin]">
        <div className="label text-ink" style={tiny}>
          {kicker}
        </div>
        <div
          className="wf-content mt-[2cqmin] text-ink"
          style={fit(lines, { charW: 0.5, lineH: 0.86, w: 0.5, h: 0.78, max: 30 })}
        >
          {lines.map((l, i) => (
            <span key={i} className="block">
              {l}
            </span>
          ))}
        </div>
        {/* Fragmented captions */}
        <ul className="absolute right-[4cqmin] top-[34%] flex flex-col items-end gap-[4cqmin] text-right">
          {frags.slice(0, 4).map((f, i) => (
            <li
              key={f}
              className="wf-anton text-ink"
              style={{ fontSize: "max(9px, 2.6cqmin)", marginRight: `${(i % 2) * 8}cqmin` }}
            >
              {f}
            </li>
          ))}
        </ul>
        {caption && (
          <p
            className="absolute bottom-[5cqmin] right-[4cqmin] max-w-[50%] text-right label text-ink"
            style={tiny}
          >
            {caption}
          </p>
        )}
      </div>
    </Frame>
  );
}

/* --------------------------------------------------- 05 · Creative Chaos */

function PlaygroundPoster({ world, title, caption, kicker, className }: PosterProps) {
  const p = world.palette;
  const clean = title.toUpperCase();
  const ws = words(clean);
  const treatments = [
    { className: "wf-playground", style: { color: p.deep } },
    { className: "font-display-tight text-outline", style: { color: "#141414" } },
    { className: "font-display-tight extrude", style: { color: "#fff" } },
    { className: "wf-outline", style: { color: p.deep } },
    { className: "serif italic", style: { color: "#141414" } },
  ];
  const tilts = [-8, 5, -3, 9, -6, 4];
  const letters = clean.replace(/\s/g, "").length;
  const short = letters <= 12;
  // One word splits in two lines; several words keep their own lines.
  const pgLines =
    ws.length === 1 && clean.length > 5
      ? [clean.slice(0, Math.ceil(clean.length / 2) - 1), clean.slice(Math.ceil(clean.length / 2) - 1)]
      : ws;
  return (
    <Frame label={title} className={className} style={{ background: p.tint }}>
      {/* Giant background letter */}
      <span
        className="absolute -bottom-[12%] -left-[6%] font-display-tight leading-none"
        style={{ color: p.light, fontSize: "95cqmin" }}
      >
        {clean[0]}
      </span>
      {/* Interface bits */}
      <div className="absolute right-[5cqmin] top-[22%] h-[14cqmin] w-[14cqmin] rounded-full border" style={{ borderColor: "#141414" }} />
      <div className="absolute bottom-[18%] right-[30%] h-[3cqmin] w-[3cqmin] border border-ink" />
      <div className="absolute left-[40%] top-[12%] h-px w-[30%] bg-ink" />
      <span className="absolute right-[5cqmin] top-[5cqmin] serif" style={{ color: p.mid, fontSize: "6cqmin" }}>
        // 26
      </span>

      <div className="absolute inset-0 flex flex-col justify-center p-[6cqmin]">
        {short ? (
          <div style={{ fontSize: `min(${(86 / (Math.max(...pgLines.map((l) => l.length)) * 0.82)).toFixed(1)}cqw, 30cqmin)` }}>
            {pgLines.map((line, li) => (
              <div key={li} className="flex items-end whitespace-nowrap" style={{ marginLeft: li ? "0.6em" : 0 }}>
                {[...line].map((ch, ci) => {
                  const i = li * 7 + ci;
                  const tr = treatments[i % treatments.length];
                  return (
                    <span
                      key={ci}
                      className={`inline-block ${tr.className}`}
                      style={{
                        ...tr.style,
                        transform: `rotate(${tilts[i % tilts.length]}deg) translateY(${(i % 3) * 0.06}em)`,
                      }}
                    >
                      {ch}
                    </span>
                  );
                })}
              </div>
            ))}
          </div>
        ) : (
          <div style={fit(ws, { charW: 0.7, lineH: 1, w: 0.85, h: 0.6, max: 16 })}>
            {ws.map((w, i) => (
              <span
                key={i}
                className={`block ${treatments[i % treatments.length].className}`}
                style={{
                  ...treatments[i % treatments.length].style,
                  transform: `rotate(${tilts[i % tilts.length] / 3}deg)`,
                  marginLeft: `${(i % 3) * 6}%`,
                }}
              >
                {w}
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="absolute left-[5cqmin] top-[5cqmin] label" style={{ ...tiny, color: p.deep }}>
        {kicker}
      </div>
      {caption && (
        <span
          className="nc-wobble absolute bottom-[6cqmin] right-[6cqmin] rounded-full px-[3cqmin] py-[1.5cqmin] label"
          style={{ ...tiny, background: p.deep, color: "#fff" }}
        >
          ✶ {caption}
        </span>
      )}
    </Frame>
  );
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
