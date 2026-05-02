"use client";

import Link from "next/link";
import type { Project } from "@/lib/projects";
import { useT } from "@/lib/i18n/context";
import { ui } from "@/lib/i18n/strings";

type Variant = "default" | "featured" | "compact";

const tiles = [
  { bg: "bg-sea", fg: "text-paper" },
  { bg: "bg-deep", fg: "text-paper" },
  { bg: "bg-clay", fg: "text-paper" },
  { bg: "bg-blush", fg: "text-ink" },
  { bg: "bg-chalk", fg: "text-ink" },
  { bg: "bg-sand", fg: "text-ink" },
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
        className="group grid grid-cols-[3rem_1fr_auto] items-baseline gap-6 border-b border-line py-7 transition-colors hover:bg-chalk md:gap-10 md:py-9"
      >
        <span className="italic-serif text-lg text-muted">
          {String((index ?? 0) + 1).padStart(2, "0")}
        </span>
        <span className="flex flex-col gap-1 md:flex-row md:items-baseline md:gap-6">
          <span className="font-display-tight text-2xl text-ink transition-colors duration-300 group-hover:text-clay md:text-3xl">
            {t(project.title)}
          </span>
          <span className="text-sm text-muted">{t(project.summary)}</span>
        </span>
        <span className="hidden italic-serif text-base text-clay md:inline">
          {categoryLabel} · {project.year}
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
          <div className="italic-serif text-base text-clay">
            {categoryLabel} · {project.year}
          </div>
          <p className="font-display text-2xl leading-tight text-ink md:text-3xl">
            {t(project.summary)}
          </p>
          <p className="italic-serif text-base leading-relaxed text-muted">
            {t(project.disciplines).join(" · ")}
          </p>
          <span className="inline-flex items-baseline gap-2 italic-serif text-base text-ink transition-all group-hover:gap-3 group-hover:text-clay">
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
        <div className="italic-serif text-base text-clay">
          {categoryLabel} · {project.year}
        </div>
        <h3 className="font-display-tight text-2xl text-ink transition-colors group-hover:text-clay md:text-3xl">
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

  return (
    <div
      className={`relative ${aspect} overflow-hidden ${tile.bg} ${tile.fg} transition-transform duration-700 ease-soft group-hover:scale-[1.005]`}
    >
      <div className="absolute inset-0 flex items-end p-6 md:p-10">
        <h4 className="font-display-tight text-[clamp(2.25rem,5vw,5rem)] leading-[0.95]">
          {t(project.title)}
        </h4>
      </div>
    </div>
  );
}
