"use client";

import { useMemo, useState } from "react";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/SectionHeader";
import { ProjectCard } from "@/components/ProjectCard";
import { useT } from "@/lib/i18n/context";
import { ui } from "@/lib/i18n/strings";
import { categories, projects, type ProjectCategory } from "@/lib/projects";

type Filter = "All" | ProjectCategory;

export default function WorkPage() {
  const t = useT();
  const [filter, setFilter] = useState<Filter>("All");
  const [view, setView] = useState<"grid" | "index">("grid");

  const filtered = useMemo(
    () =>
      filter === "All"
        ? projects
        : projects.filter((p) => p.category === filter),
    [filter]
  );

  return (
    <>
      <section className="pt-12 pb-12 md:pt-20 md:pb-16">
        <Container>
          <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-caps">
            <span className="bg-electric px-2 py-0.5 text-paper">
              {t(ui.work.badge)}
            </span>
            <span className="text-muted">{t(ui.work.badgeMeta)}</span>
          </div>
          <h1 className="mt-8 max-w-6xl font-display-tight text-[clamp(3rem,8vw,8rem)] leading-[0.92] text-ink">
            {t(ui.work.titleA)}
            <span className="italic-serif text-electric">
              {t(ui.work.titleEm1)}
            </span>
            {t(ui.work.titleMid)}{" "}
            <span className="italic-serif text-electric">
              {t(ui.work.titleEm2)}
            </span>
          </h1>
          <p className="mt-10 max-w-3xl text-lg leading-relaxed text-muted">
            {t(ui.work.lede)}
          </p>
        </Container>
      </section>

      <section className="py-8">
        <Container>
          <div className="flex flex-col gap-6 border-y-2 border-ink py-5 md:flex-row md:items-center md:justify-between md:gap-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="mr-2 font-mono text-[11px] uppercase tracking-caps text-muted">
                {t(ui.work.filterLabel)}
              </span>
              {(["All", ...categories] as Filter[]).map((c) => {
                const active = filter === c;
                const label =
                  c === "All" ? t(ui.work.all) : t(ui.categoryLabels[c]);
                return (
                  <button
                    key={c}
                    type="button"
                    onClick={() => setFilter(c)}
                    className={`px-3 py-1 font-mono text-[11px] uppercase tracking-caps transition-colors ${
                      active
                        ? "bg-ink text-paper"
                        : "bg-soft text-muted hover:bg-ink hover:text-paper"
                    }`}
                  >
                    {label}
                  </button>
                );
              })}
            </div>
            <div className="flex items-center gap-4 font-mono text-[11px] uppercase tracking-caps text-muted">
              <span>
                {filtered.length} {t(ui.work.countLabel)}
              </span>
              <span className="text-line">/</span>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setView("grid")}
                  aria-pressed={view === "grid"}
                  className={`transition-colors ${
                    view === "grid" ? "text-electric" : "text-muted hover:text-ink"
                  }`}
                >
                  {t(ui.work.grid)}
                </button>
                <span className="text-line">·</span>
                <button
                  type="button"
                  onClick={() => setView("index")}
                  aria-pressed={view === "index"}
                  className={`transition-colors ${
                    view === "index" ? "text-electric" : "text-muted hover:text-ink"
                  }`}
                >
                  {t(ui.work.index)}
                </button>
              </div>
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
            <div>
              {filtered.map((p, i) => (
                <ProjectCard
                  key={p.slug}
                  project={p}
                  variant="compact"
                  index={i}
                />
              ))}
            </div>
          )}

          {filtered.length === 0 && (
            <p className="py-24 text-center text-muted">{t(ui.work.empty)}</p>
          )}
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container>
          <div className="grid gap-8 border-t-2 border-ink pt-12 md:grid-cols-12 md:gap-16">
            <div className="md:col-span-4">
              <Eyebrow>{t(ui.work.alsoEyebrow)}</Eyebrow>
              <h2 className="mt-5 font-display-tight text-[clamp(2rem,4.5vw,3.5rem)] leading-[1] text-ink">
                {t(ui.work.alsoTitle)}
              </h2>
            </div>
            <p className="md:col-span-7 md:col-start-6 max-w-reading text-lg leading-relaxed text-muted">
              {t(ui.work.alsoLede)}
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
