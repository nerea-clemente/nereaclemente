"use client";

import Link from "next/link";
import type { Project } from "@/lib/projects";
import { useT } from "@/lib/i18n/context";
import { ui } from "@/lib/i18n/strings";

type Variant = "default" | "featured" | "compact";

const tiles = [
  { bg: "bg-marine", fg: "text-paper", accent: "text-lemon", accentBg: "bg-lemon" },
  { bg: "bg-electric", fg: "text-paper", accent: "text-lemon", accentBg: "bg-lemon" },
  { bg: "bg-lemon", fg: "text-ink", accent: "text-marine", accentBg: "bg-marine" },
  { bg: "bg-ink", fg: "text-paper", accent: "text-lemon", accentBg: "bg-lemon" },
  { bg: "bg-coral", fg: "text-paper", accent: "text-ink", accentBg: "bg-ink" },
  { bg: "bg-soft", fg: "text-ink", accent: "text-electric", accentBg: "bg-electric" },
  { bg: "bg-deep", fg: "text-paper", accent: "text-lemon", accentBg: "bg-lemon" },
] as const;

function pickTile(slug: string) {
  const idx =
    Math.abs([...slug].reduce((acc, c) => acc + c.charCodeAt(0), 0)) %
    tiles.length;
  return tiles[idx];
}

export function ProjectCard({
  project,
  variant = "default",
  index,
}: {
  project: Project;
  variant?: Variant;
  index?: number;
}) {
  const t = useT();
  const tile = pickTile(project.slug);
  const categoryLabel = t(ui.categoryLabels[project.category]);

  if (variant === "compact") {
    return (
      <Link
        href={`/work/${project.slug}`}
        className="group grid grid-cols-[auto_1fr_auto] items-baseline gap-6 border-b border-line py-6 transition-colors hover:bg-soft md:gap-10 md:py-8"
      >
        <span className="font-mono text-[11px] text-muted">
          {String((index ?? 0) + 1).padStart(2, "0")}
        </span>
        <span className="flex flex-col gap-1 md:flex-row md:items-baseline md:gap-6">
          <span className="font-display text-2xl text-ink transition-colors duration-300 ease-soft group-hover:text-electric md:text-3xl">
            {t(project.title)}
          </span>
          <span className="text-sm text-muted">{t(project.summary)}</span>
        </span>
        <span className="hidden font-mono text-[11px] uppercase tracking-caps text-muted md:inline">
          {categoryLabel} / {project.year}
        </span>
      </Link>
    );
  }

  if (variant === "featured") {
    return (
      <Link
        href={`/work/${project.slug}`}
        className="group grid gap-6 md:grid-cols-12 md:gap-10"
      >
        <div className="md:col-span-7">
          <ProjectTile project={project} tile={tile} large />
        </div>
        <div className="flex flex-col justify-between gap-6 md:col-span-5 md:py-2">
          <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-caps text-muted">
            <span className="inline-block h-1.5 w-1.5 bg-electric" />
            <span>{categoryLabel}</span>
            <span className="text-line">/</span>
            <span>{project.year}</span>
          </div>
          <p className="font-display text-2xl leading-tight text-ink md:text-3xl">
            {t(project.summary)}
          </p>
          <div className="flex flex-wrap gap-1.5">
            {t(project.disciplines).map((d) => (
              <span
                key={d}
                className="bg-soft px-2.5 py-1 font-mono text-[10px] uppercase tracking-caps text-muted"
              >
                {d}
              </span>
            ))}
          </div>
          <span className="inline-flex items-center gap-3 self-start border-b-2 border-ink pb-1 text-sm uppercase tracking-caps text-ink transition-all group-hover:border-electric group-hover:text-electric group-hover:gap-5">
            {t(ui.common.readCase)} <span aria-hidden>→</span>
          </span>
        </div>
      </Link>
    );
  }

  return (
    <Link href={`/work/${project.slug}`} className="group flex flex-col gap-5">
      <ProjectTile project={project} tile={tile} />
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-caps text-muted">
          <span>{categoryLabel}</span>
          <span>{project.year}</span>
        </div>
        <h3 className="font-display text-2xl text-ink transition-colors group-hover:text-electric md:text-3xl">
          {t(project.title)}
        </h3>
        <p className="max-w-reading text-base leading-relaxed text-muted">
          {t(project.summary)}
        </p>
      </div>
    </Link>
  );
}

function ProjectTile({
  project,
  tile,
  large = false,
}: {
  project: Project;
  tile: (typeof tiles)[number];
  large?: boolean;
}) {
  const t = useT();
  const aspect = large ? "aspect-[16/11]" : "aspect-[4/5]";
  const categoryLabel = t(ui.categoryLabels[project.category]);

  return (
    <div
      className={`relative ${aspect} overflow-hidden ${tile.bg} ${tile.fg} transition-transform duration-700 ease-soft group-hover:scale-[1.005]`}
    >
      <div className="absolute left-6 top-6 flex items-center gap-2 font-mono text-[10px] uppercase tracking-caps opacity-80">
        <span className={`inline-block h-1.5 w-1.5 ${tile.accentBg}`} />
        <span>Folio · {project.year}</span>
      </div>
      <div className="absolute right-6 top-6 font-mono text-[10px] uppercase tracking-caps opacity-80">
        № {project.slug.slice(0, 3)}
      </div>

      <div className="absolute inset-x-0 bottom-0 p-6 md:p-10">
        <div className={`font-mono text-[10px] uppercase tracking-caps ${tile.accent}`}>
          {categoryLabel}
        </div>
        <h4 className="mt-3 font-display-tight text-[clamp(2.25rem,5vw,5rem)] leading-[0.95]">
          {t(project.title)}
        </h4>
        {large && (
          <p className="mt-5 max-w-md text-sm leading-relaxed opacity-80">
            {t(project.disciplines).join(" · ")}
          </p>
        )}
      </div>
    </div>
  );
}
