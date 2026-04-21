"use client";

import { useMemo, useState } from "react";
import { Container } from "@/components/Container";
import { SectionHeader } from "@/components/SectionHeader";
import { ProjectCard } from "@/components/ProjectCard";
import { categories, projects, ProjectCategory } from "@/lib/projects";

type Filter = "All" | ProjectCategory;

export default function WorkPage() {
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
      <section className="pt-16 pb-12 md:pt-24 md:pb-16">
        <Container>
          <span className="text-xs uppercase tracking-caps text-sea">
            Work — 2022 / 2026
          </span>
          <h1 className="mt-6 max-w-5xl font-display text-display-xl text-ink">
            A selection of projects across{" "}
            <span className="italic text-sea">campaigns, editorial</span> and{" "}
            <span className="italic text-sea">science communication</span>.
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-muted">
            Both client work and self-initiated projects. Use the filters below to browse by category, or switch to the index view for a faster scan.
          </p>
        </Container>
      </section>

      <section className="py-8">
        <Container>
          <div className="flex flex-col gap-6 border-y border-line py-5 md:flex-row md:items-center md:justify-between md:gap-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="mr-2 text-xs uppercase tracking-caps text-muted">
                Filter
              </span>
              {(["All", ...categories] as Filter[]).map((c) => {
                const active = filter === c;
                return (
                  <button
                    key={c}
                    type="button"
                    onClick={() => setFilter(c)}
                    className={`rounded-full border px-3 py-1 text-xs uppercase tracking-caps transition-colors ${
                      active
                        ? "border-ink bg-ink text-bone"
                        : "border-line text-muted hover:border-ink hover:text-ink"
                    }`}
                  >
                    {c}
                  </button>
                );
              })}
            </div>
            <div className="flex items-center gap-4 text-xs uppercase tracking-caps text-muted">
              <span>{filtered.length} projects</span>
              <span className="text-line">/</span>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setView("grid")}
                  aria-pressed={view === "grid"}
                  className={`transition-colors ${
                    view === "grid" ? "text-ink" : "text-muted hover:text-ink"
                  }`}
                >
                  Grid
                </button>
                <span className="text-line">·</span>
                <button
                  type="button"
                  onClick={() => setView("index")}
                  aria-pressed={view === "index"}
                  className={`transition-colors ${
                    view === "index" ? "text-ink" : "text-muted hover:text-ink"
                  }`}
                >
                  Index
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
            <p className="py-24 text-center text-muted">
              No projects in this category yet.
            </p>
          )}
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container>
          <SectionHeader
            eyebrow="Also"
            title={<>Not everything lives on the site.</>}
            lede="Some of the most interesting work — confidential strategy decks, internal narrative systems, crisis communication — doesn't make it into a public portfolio. If a specific brief overlaps with one of those, I'm happy to walk through it privately."
            align="split"
          />
        </Container>
      </section>
    </>
  );
}
