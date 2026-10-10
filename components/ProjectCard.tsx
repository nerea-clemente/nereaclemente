"use client";

import Link from "next/link";
import type { Project } from "@/lib/projects";
import { getWorld, worldStyle, type World } from "@/lib/worlds";
import { useT } from "@/lib/i18n/context";
import { WorldPoster, posterVariant } from "./WorldPoster";
import { ui } from "@/lib/i18n/strings";

type Variant = "default" | "featured" | "compact";

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
  const world = getWorld(project.world)!;
  const meta = `${world.n} / ${t(world.short)} · ${t(ui.categoryLabels[project.category])} · ${project.year}`;

  if (variant === "compact") {
    return (
      <Link
        href={`/work/${project.slug}`}
        style={worldStyle(world)}
        className="group grid grid-cols-[2.5rem_1fr] items-baseline gap-4 border-b border-line py-6 transition-colors hover:bg-w-tint md:grid-cols-[3rem_1fr_auto] md:gap-10 md:py-8"
      >
        <span className="label text-muted">
          {String((index ?? 0) + 1).padStart(2, "0")}
        </span>
        <span className="flex flex-col gap-1 md:flex-row md:items-baseline md:gap-6">
          <span className="font-display-tight text-2xl text-ink transition-colors duration-300 group-hover:text-w-text md:text-3xl">
            {t(project.title)}
          </span>
          <span className="text-sm text-muted">{t(project.summary)}</span>
        </span>
        <span className="col-start-2 flex items-center gap-2 label text-muted md:col-start-auto">
          <span aria-hidden className="h-2 w-2 rounded-full bg-w-deep" />
          {meta}
        </span>
      </Link>
    );
  }

  if (variant === "featured") {
    return (
      <Link
        href={`/work/${project.slug}`}
        style={worldStyle(world)}
        className="group grid gap-6 md:grid-cols-12 md:gap-10"
      >
        <div className="md:col-span-7">
          <ProjectTile project={project} world={world} large />
        </div>
        <div className="flex flex-col justify-between gap-6 md:col-span-5 md:py-2">
          <span className="label text-w-text">{meta}</span>
          <p className="font-display text-2xl leading-tight text-ink md:text-3xl">
            {t(project.summary)}
          </p>
          <p className="serif text-lg leading-relaxed text-muted">
            {t(project.disciplines).join(" · ")}
          </p>
          <span className="inline-flex items-center gap-2 label text-ink transition-all group-hover:gap-4">
            {t(ui.common.readCase)} <span aria-hidden>→</span>
          </span>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={`/work/${project.slug}`}
      style={worldStyle(world)}
      className="group flex flex-col gap-5"
    >
      <ProjectTile project={project} world={world} />
      <div className="flex flex-col gap-2">
        <span className="label text-w-text">{meta}</span>
        <h3 className="font-display-tight text-2xl text-ink md:text-3xl">
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
  world,
  large = false,
}: {
  project: Project;
  world: World;
  large?: boolean;
}) {
  const t = useT();
  const aspect = large ? "aspect-[16/11]" : "aspect-[4/5]";
  return (
    <div className={`relative ${aspect} overflow-hidden`}>
      <div className="absolute inset-0 transition-transform duration-700 ease-soft group-hover:scale-[1.03]">
        <WorldPoster
          world={world}
          title={t(project.title)}
          caption={`${t(ui.categoryLabels[project.category])} · ${project.year}`}
          fragments={t(project.disciplines)}
          kicker={`${world.n} / ${world.style}`}
          variant={posterVariant(project.slug)}
        />
      </div>
    </div>
  );
}
