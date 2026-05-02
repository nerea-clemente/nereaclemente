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
  { bg: "bg-sea", fg: "text-paper" },
  { bg: "bg-deep", fg: "text-paper" },
  { bg: "bg-clay", fg: "text-paper" },
  { bg: "bg-blush", fg: "text-ink" },
  { bg: "bg-chalk", fg: "text-ink" },
] as const;

function pickTile(slug: string) {
  const idx =
    Math.abs([...slug].reduce((a, c) => a + c.charCodeAt(0), 0)) % tiles.length;
  return tiles[idx];
}

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
      <section className="pt-12 pb-8 md:pt-20">
        <Container>
          <div className="flex items-baseline gap-3 italic-serif text-base text-muted">
            <Link href="/work" className="hover:text-clay">
              {t(ui.caseStudy.backIndex)}
            </Link>
            <span>·</span>
            <span>{categoryLabel}</span>
            <span>·</span>
            <span>{project.year}</span>
          </div>

          <h1 className="mt-8 max-w-6xl font-display-tight text-[clamp(2.75rem,7vw,7.5rem)] leading-[0.95] text-ink">
            {t(project.title)}
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-muted md:text-xl">
            {t(project.overview)}
          </p>

          <dl className="mt-14 grid grid-cols-2 gap-8 border-t border-line pt-8 md:grid-cols-4">
            <div>
              <dt className="italic-serif text-base text-muted">
                {t(ui.caseStudy.metaClient)}
              </dt>
              <dd className="mt-2 text-base text-ink">{t(project.client)}</dd>
            </div>
            <div>
              <dt className="italic-serif text-base text-muted">
                {t(ui.caseStudy.metaYear)}
              </dt>
              <dd className="mt-2 text-base text-ink">{project.year}</dd>
            </div>
            <div>
              <dt className="italic-serif text-base text-muted">
                {t(ui.caseStudy.metaCategory)}
              </dt>
              <dd className="mt-2 text-base text-ink">{categoryLabel}</dd>
            </div>
            <div>
              <dt className="italic-serif text-base text-muted">
                {t(ui.caseStudy.metaDisciplines)}
              </dt>
              <dd className="mt-2 flex flex-wrap gap-1 text-base text-ink">
                {t(project.disciplines).join(" · ")}
              </dd>
            </div>
          </dl>
        </Container>
      </section>

      {/* Hero cover — single block, minimal */}
      <section className="pb-16 md:pb-24">
        <Container>
          <div className={`relative aspect-[16/9] w-full overflow-hidden ${tile.bg} ${tile.fg}`}>
            <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-16">
              <h2 className="font-display-tight text-[clamp(3rem,9vw,9rem)] leading-[0.85]">
                {t(project.title)}
              </h2>
            </div>
          </div>
        </Container>
      </section>

      <section className="pb-8">
        <Container>
          <div className="grid gap-12 md:grid-cols-12 md:gap-16">
            <CaseSection
              label={t(ui.caseStudy.sections.context)}
              title={t(ui.caseStudy.sections.contextTitle)}
            >
              <p>{t(project.context)}</p>
            </CaseSection>
            <CaseSection
              label={t(ui.caseStudy.sections.role)}
              title={t(ui.caseStudy.sections.roleTitle)}
            >
              <p>{t(project.role)}</p>
            </CaseSection>
            <CaseSection
              label={t(ui.caseStudy.sections.approach)}
              title={t(ui.caseStudy.sections.approachTitle)}
            >
              <ul className="flex flex-col gap-5">
                {t(project.approach).map((a, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="mt-2 inline-block h-px w-6 flex-none bg-clay" />
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
            </CaseSection>
            <CaseSection
              label={t(ui.caseStudy.sections.execution)}
              title={t(ui.caseStudy.sections.executionTitle)}
            >
              <ul className="flex flex-col gap-5">
                {t(project.execution).map((a, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="mt-2 inline-block h-px w-6 flex-none bg-clay" />
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
            </CaseSection>
            <CaseSection
              label={t(ui.caseStudy.sections.outcome)}
              title={t(ui.caseStudy.sections.outcomeTitle)}
            >
              <ul className="flex flex-col gap-5">
                {t(project.outcome).map((a, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="mt-2 inline-block h-px w-6 flex-none bg-clay" />
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
            <Eyebrow>{t(ui.caseStudy.visuals)}</Eyebrow>
            <div className="mt-10 grid gap-6 md:grid-cols-2 md:gap-8">
              {project.gallery.map((g, i) => (
                <figure key={i} className="flex flex-col gap-3">
                  <div className="relative aspect-[4/3] overflow-hidden bg-paper">
                    <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-8">
                      <span className="italic-serif text-base text-clay">
                        {t(ui.caseStudy.figure)} {String(i + 1).padStart(2, "0")}
                      </span>
                      <div className="font-display-tight text-5xl leading-[0.9] text-ink md:text-6xl">
                        {String(i + 1).padStart(2, "0")}
                      </div>
                    </div>
                  </div>
                  <figcaption className="italic-serif text-base text-muted">
                    {t(g.caption)}
                  </figcaption>
                </figure>
              ))}
            </div>
          </Container>
        </section>
      )}

      {project.takeaway && (
        <section className="py-24 md:py-32">
          <Container size="narrow">
            <div className="border-t border-line pt-10">
              <Eyebrow>{t(ui.caseStudy.takeaway)}</Eyebrow>
              <p className="mt-6 font-display text-[clamp(1.75rem,4vw,3rem)] leading-[1.15] text-ink">
                <span className="italic-serif text-clay">“</span>
                {t(project.takeaway)}
                <span className="italic-serif text-clay">”</span>
              </p>
            </div>
          </Container>
        </section>
      )}

      <section className="py-20 md:py-28">
        <Container>
          <Link
            href={`/work/${nextProject.slug}`}
            className="group block border-t border-line pt-10"
          >
            <div className="flex items-baseline justify-between italic-serif text-base text-muted">
              <span>{t(ui.common.nextProject)}</span>
              <span>{nextCategoryLabel}</span>
            </div>
            <span className="mt-6 block font-display-tight text-[clamp(2.75rem,8vw,8rem)] leading-[0.95] text-ink transition-colors group-hover:text-clay">
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
            <p className="font-display text-[clamp(1.5rem,2.5vw,2.25rem)] leading-[1.2] text-ink">
              {t(ui.caseStudy.interestedIn)}
              <span className="italic-serif text-clay">
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
  label,
  title,
  children,
}: {
  label: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <article className="contents">
      <div className="md:col-span-4 md:pr-8">
        <div className="border-t border-line pt-6">
          <span className="italic-serif text-base text-clay">
            {label}
          </span>
        </div>
      </div>
      <div className="md:col-span-8">
        <div className="border-t border-line pt-6">
          <h2 className="font-display-tight text-[clamp(1.75rem,3.5vw,2.75rem)] leading-[1.1] text-ink">
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
