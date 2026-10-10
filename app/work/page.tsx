"use client";

import { useMemo, useState } from "react";
import { Container } from "@/components/Container";
import { Eyebrow, SplitTitle } from "@/components/SectionHeader";
import { ProjectCard } from "@/components/ProjectCard";
import { useT } from "@/lib/i18n/context";
import { ui } from "@/lib/i18n/strings";
import { projects } from "@/lib/projects";
import { getWorld, worlds, type WorldSlug } from "@/lib/worlds";

type Filter = "all" | WorldSlug;

export default function WorkPage() {
  const t = useT();
  const [filter, setFilter] = useState<Filter>("all");
  const [view, setView] = useState<"grid" | "index">("grid");

  const filtered = useMemo(
    () =>
      filter === "all" ? projects : projects.filter((p) => p.world === filter),
    [filter]
  );
  const active = filter === "all" ? undefined : getWorld(filter);

  return (
    <>
      <section className="pt-14 pb-12 md:pt-24 md:pb-16">
        <Container>
          <Eyebrow>{t(ui.work.label)}</Eyebrow>
          <SplitTitle
            as="h1"
            className="mt-6 text-[clamp(3rem,8vw,7.5rem)]"
            a={t(ui.work.titleA)}
            b={
              <span className="world-ease" style={{ color: active?.palette.text }}>
                {t(ui.work.titleEm)}
              </span>
            }
          />
          <p className="mt-10 max-w-3xl text-lg leading-relaxed text-muted">
            {t(ui.work.lede)}
          </p>
        </Container>
      </section>

      <section className="sticky top-16 z-20 bg-paper/95 backdrop-blur md:top-[72px]">
        <Container>
          <div className="flex flex-col gap-4 border-y border-ink py-4 md:flex-row md:items-center md:justify-between">
            <div
              role="group"
              aria-label={t(ui.work.filterLabel)}
              className="flex flex-wrap items-center gap-2"
            >
              <FilterChip active={filter === "all"} onClick={() => setFilter("all")}>
                {t(ui.work.all)}
              </FilterChip>
              {worlds.map((w) => (
                <FilterChip
                  key={w.slug}
                  active={filter === w.slug}
                  onClick={() => setFilter(w.slug)}
                  color={w.palette.deep}
                  onColor={w.palette.on}
                >
                  {w.n} {t(w.short)}
                </FilterChip>
              ))}
            </div>
            <div className="flex items-center gap-3 label text-muted">
              <span>
                {filtered.length} {t(ui.work.countLabel)}
              </span>
              <span aria-hidden>·</span>
              {(["grid", "index"] as const).map((v) => (
                <button
                  key={v}
                  type="button"
                  onClick={() => setView(v)}
                  aria-pressed={view === v}
                  className={view === v ? "text-ink underline underline-offset-4" : "hover:text-ink"}
                >
                  {t(ui.work[v])}
                </button>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-20">
        <Container>
          {view === "grid" ? (
            <div className="grid gap-16 md:grid-cols-2 md:gap-x-12 md:gap-y-24">
              {filtered.map((p) => (
                <ProjectCard key={p.slug} project={p} />
              ))}
            </div>
          ) : (
            <div className="border-t border-line">
              {filtered.map((p, i) => (
                <ProjectCard key={p.slug} project={p} variant="compact" index={i} />
              ))}
            </div>
          )}

          {filtered.length === 0 && active && (
            <div className="flex flex-col items-start gap-4 border border-dashed py-20 px-8 md:px-14" style={{ borderColor: active.palette.deep }}>
              <p className="font-display-tight text-3xl" style={{ color: active.palette.text }}>
                {t(ui.work.empty)}
              </p>
              <p className="max-w-reading text-muted">{t(active.lede)}</p>
            </div>
          )}
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container>
          <div className="grid gap-8 border-t border-line pt-12 md:grid-cols-12 md:gap-16">
            <div className="md:col-span-4">
              <Eyebrow>{t(ui.work.alsoLabel)}</Eyebrow>
              <h2 className="mt-5 font-display-tight text-[clamp(2rem,4.5vw,3.25rem)] leading-[1] text-ink">
                {t(ui.work.alsoTitle)}
              </h2>
            </div>
            <p className="max-w-reading text-lg leading-relaxed text-muted md:col-span-7 md:col-start-6">
              {t(ui.work.alsoLede)}
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}

function FilterChip({
  active,
  onClick,
  color = "#141414",
  onColor = "#FAFAF7",
  children,
}: {
  active: boolean;
  onClick: () => void;
  color?: string;
  onColor?: string;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className="world-ease flex items-center gap-2 border px-3 py-2 label"
      style={
        active
          ? { backgroundColor: color, borderColor: color, color: onColor }
          : { borderColor: "#DADAD4", color: "#141414" }
      }
    >
      {!active && (
        <span aria-hidden className="h-2 w-2 rounded-full" style={{ backgroundColor: color }} />
      )}
      {children}
    </button>
  );
}
