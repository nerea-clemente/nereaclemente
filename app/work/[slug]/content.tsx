"use client";

import Link from "next/link";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/SectionHeader";
import { Button } from "@/components/Button";
import { useT } from "@/lib/i18n/context";
import { ui } from "@/lib/i18n/strings";
import { getProject, projects } from "@/lib/projects";
import { site } from "@/lib/site";

const tiles = [
  { bg: "bg-deep", fg: "text-paper", accent: "text-saffron", accentBg: "bg-saffron" },
  { bg: "bg-sea", fg: "text-paper", accent: "text-saffron", accentBg: "bg-saffron" },
  { bg: "bg-saffron", fg: "text-ink", accent: "text-deep", accentBg: "bg-deep" },
  { bg: "bg-ink", fg: "text-paper", accent: "text-saffron", accentBg: "bg-saffron" },
  { bg: "bg-clay", fg: "text-paper", accent: "text-ink", accentBg: "bg-ink" },
] as const;

function pickTile(slug: string) {
  const idx = Math.abs([...slug].reduce((a, c) => a + c.charCodeAt(0), 0)) % tiles.length;
  return tiles[idx];
}

const galleryTones: Record<string, { bg: string; fg: string; accent: string; accentBg: string }> = {
  sea: { bg: "bg-deep", fg: "text-paper", accent: "text-saffron", accentBg: "bg-saffron" },
  deep: { bg: "bg-deep", fg: "text-paper", accent: "text-saffron", accentBg: "bg-saffron" },
  shell: { bg: "bg-soft", fg: "text-ink", accent: "text-sea", accentBg: "bg-sea" },
  sand: { bg: "bg-soft", fg: "text-ink", accent: "text-sea", accentBg: "bg-sea" },
  clay: { bg: "bg-clay", fg: "text-paper", accent: "text-ink", accentBg: "bg-ink" },
};

export function CaseStudyContent({ slug }: { slug: string }) {
  const t = useT();
  const project = getProject(slug);
  if (!project) return null;

  const currentIndex = projects.findIndex((p) => p.slug === project.slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];
  const tile = pickTile(project.slug);
  const categoryLabel = t(ui.categoryLabels[project.category]);
  const nextCategoryLabel = t(ui.categoryLabels[nextProject.category]);

  return (
    <>
      <section className="pt-10 pb-8 md:pt-16">
        <Container>
          <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-caps text-muted">
            <Link href="/work" className="hover:text-sea">
              {t(ui.caseStudy.backIndex)}
            </Link>
            <span className="text-line">/</span>
            <span>{categoryLabel}</span>
            <span className="text-line">/</span>
            <span>{project.year}</span>
          </div>

          <h1 className="mt-10 max-w-6xl font-display-tight text-[clamp(3rem,9vw,9rem)] leading-[0.9] text-ink">
            {t(project.title)}
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-muted md:text-xl">
            {t(project.overview)}
          </p>

          <dl className="mt-14 grid grid-cols-2 gap-8 border-t border-line pt-8 md:grid-cols-4">
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-caps text-muted">
                {t(ui.caseStudy.metaClient)}
              </dt>
              <dd className="mt-2 text-base text-ink">{t(project.client)}</dd>
            </div>
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-caps text-muted">
                {t(ui.caseStudy.metaYear)}
              </dt>
              <dd className="mt-2 text-base text-ink">{project.year}</dd>
            </div>
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-caps text-muted">
                {t(ui.caseStudy.metaCategory)}
              </dt>
              <dd className="mt-2 text-base text-ink">{categoryLabel}</dd>
            </div>
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-caps text-muted">
                {t(ui.caseStudy.metaDisciplines)}
              </dt>
              <dd className="mt-2 flex flex-wrap gap-1 text-base text-ink">
                {t(project.disciplines).join(" · ")}
              </dd>
            </div>
          </dl>
        </Container>
      </section>

      {/* Hero cover */}
      <section className="pb-16 md:pb-24">
        <Container>
          <div className={`relative aspect-[16/9] w-full overflow-hidden ${tile.bg} ${tile.fg}`}>
            <div className="absolute inset-0 flex flex-col justify-between p-8 md:p-16">
              <div className="flex items-start justify-between font-mono text-[11px] uppercase tracking-caps">
                <div className="flex items-center gap-2">
                  <span className={`inline-block h-1.5 w-1.5 ${tile.accentBg}`} />
                  <span>{t(ui.caseStudy.coverTag)}</span>
                </div>
                <span>
                  № {String(currentIndex + 1).padStart(2, "0")} /{" "}
                  {String(projects.length).padStart(2, "0")}
                </span>
              </div>
              <div>
                <div className={`font-mono text-[11px] uppercase tracking-caps ${tile.accent}`}>
                  {categoryLabel} · {project.year}
                </div>
                <h2 className="mt-4 font-display-tight text-[clamp(3rem,9vw,9rem)] leading-[0.85]">
                  {t(project.title)}
                </h2>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="pb-8">
        <Container>
          <div className="grid gap-12 md:grid-cols-12 md:gap-16">
            <CaseSection n="01" label={t(ui.caseStudy.sections.context)} title={t(ui.caseStudy.sections.contextTitle)}>
              <p>{t(project.context)}</p>
            </CaseSection>
            <CaseSection n="02" label={t(ui.caseStudy.sections.role)} title={t(ui.caseStudy.sections.roleTitle)}>
              <p>{t(project.role)}</p>
            </CaseSection>
            <CaseSection n="03" label={t(ui.caseStudy.sections.approach)} title={t(ui.caseStudy.sections.approachTitle)}>
              <ul className="flex flex-col gap-5">
                {t(project.approach).map((a, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="mt-2 inline-block h-px w-6 flex-none bg-sea" />
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
            </CaseSection>
            <CaseSection n="04" label={t(ui.caseStudy.sections.execution)} title={t(ui.caseStudy.sections.executionTitle)}>
              <ul className="flex flex-col gap-5">
                {t(project.execution).map((a, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="mt-2 inline-block h-px w-6 flex-none bg-sea" />
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
            </CaseSection>
            <CaseSection n="05" label={t(ui.caseStudy.sections.outcome)} title={t(ui.caseStudy.sections.outcomeTitle)}>
              <ul className="flex flex-col gap-5">
                {t(project.outcome).map((a, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="mt-2 inline-block h-px w-6 flex-none bg-sea" />
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
            </CaseSection>
          </div>
        </Container>
      </section>

      {project.gallery && project.gallery.length > 0 && (
        <section className="bg-chalk py-20 md:py-28">
          <Container>
            <div className="mb-10 flex items-baseline justify-between border-t border-line pt-8">
              <Eyebrow>{t(ui.caseStudy.visuals)}</Eyebrow>
              <span className="font-mono text-[11px] uppercase tracking-caps text-muted">
                {t(ui.common.placeholders)}
              </span>
            </div>
            <div className="grid gap-6 md:grid-cols-2 md:gap-8">
              {project.gallery.map((g, i) => {
                const tone = galleryTones[g.tone] ?? galleryTones.sea;
                return (
                  <figure key={i} className="flex flex-col gap-3">
                    <div className={`relative aspect-[4/3] overflow-hidden ${tone.bg} ${tone.fg}`}>
                      <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-8">
                        <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-caps">
                          <span className={`inline-flex items-center gap-2 ${tone.accent}`}>
                            <span className={`inline-block h-1.5 w-1.5 ${tone.accentBg}`} />
                            {t(ui.caseStudy.figure)} {String(i + 1).padStart(2, "0")}
                          </span>
                          <span className="opacity-70">{t(project.title)}</span>
                        </div>
                        <div className="font-display-tight text-5xl leading-[0.9] md:text-6xl">
                          {String(i + 1).padStart(2, "0")}
                        </div>
                      </div>
                    </div>
                    <figcaption className="font-mono text-[11px] uppercase tracking-caps text-muted">
                      {t(g.caption)}
                    </figcaption>
                  </figure>
                );
              })}
            </div>
          </Container>
        </section>
      )}

      {project.takeaway && (
        <section className="bg-deep py-24 text-paper md:py-32">
          <Container size="narrow">
            <div className="grid gap-8 md:grid-cols-12">
              <div className="md:col-span-3">
                <span className="font-mono text-[11px] uppercase tracking-caps text-saffron">
                  {t(ui.caseStudy.takeaway)}
                </span>
              </div>
              <p className="md:col-span-9 font-display-tight text-[clamp(2rem,5vw,4rem)] leading-[1.05]">
                <span className="italic-serif text-saffron">“</span>
                {t(project.takeaway)}
                <span className="italic-serif text-saffron">”</span>
              </p>
            </div>
          </Container>
        </section>
      )}

      <section className="py-24 md:py-32">
        <Container>
          <Link
            href={`/work/${nextProject.slug}`}
            className="group block border-t border-line pt-10"
          >
            <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-caps text-muted">
              <span>◆ {t(ui.common.nextProject)}</span>
              <span>{nextCategoryLabel}</span>
            </div>
            <span className="mt-6 block font-display-tight text-[clamp(3rem,9vw,9rem)] leading-[0.9] text-ink transition-colors group-hover:text-sea">
              {t(nextProject.title)} <span aria-hidden>→</span>
            </span>
            <p className="mt-4 max-w-reading text-lg text-muted">
              {t(nextProject.summary)}
            </p>
          </Link>
        </Container>
      </section>

      <section className="py-16">
        <Container size="narrow">
          <div className="flex flex-col items-start gap-6">
            <Eyebrow>{t(ui.common.available)}</Eyebrow>
            <p className="font-display-tight text-[clamp(1.75rem,3vw,2.5rem)] leading-[1.1] text-ink">
              {t(ui.caseStudy.interestedIn)}
              <span className="italic-serif text-sea">
                {t(ui.common.writeToMe)}
              </span>
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href="/contact">{t(ui.common.contact)}</Button>
              <Button href={`mailto:${site.email}`} variant="ghost" external>
                {site.email}
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

function CaseSection({
  n,
  label,
  title,
  children,
}: {
  n: string;
  label: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <article className="contents">
      <div className="md:col-span-4 md:pr-8">
        <div className="flex flex-col gap-2 border-t border-line pt-6">
          <span className="font-mono text-[11px] uppercase tracking-caps text-sea">
            §&nbsp;{n} · {label}
          </span>
        </div>
      </div>
      <div className="md:col-span-8">
        <div className="border-t border-line pt-6">
          <h2 className="font-display-tight text-[clamp(2rem,4vw,3.25rem)] leading-[1.05] text-ink">
            {title}
          </h2>
          <div className="mt-6 max-w-reading text-lg leading-relaxed text-ink">
            {children}
          </div>
        </div>
      </div>
    </article>
  );
}
