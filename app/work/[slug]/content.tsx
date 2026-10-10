"use client";

import Link from "next/link";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/SectionHeader";
import { Button } from "@/components/Button";
import { WorldPoster } from "@/components/WorldPoster";
import { useT } from "@/lib/i18n/context";
import { ui } from "@/lib/i18n/strings";
import { getProject, projects } from "@/lib/projects";
import { getWorld, worldStyle } from "@/lib/worlds";
import { site } from "@/lib/site";

export function CaseStudyContent({ slug }: { slug: string }) {
  const t = useT();
  const project = getProject(slug);
  if (!project) return null;

  const world = getWorld(project.world)!;
  const secondary = (project.tags ?? []).map((s) => getWorld(s)!);
  const currentIndex = projects.findIndex((p) => p.slug === project.slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];
  const nextWorld = getWorld(nextProject.world)!;
  const format = t(ui.categoryLabels[project.category]);

  return (
    <div style={worldStyle(world)} className={world.slug === "seafood" ? "surface-seafood" : ""}>
      <section className="pt-12 pb-8 md:pt-20">
        <Container>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2 label text-muted">
            <Link href="/work" className="hover:text-ink">
              {t(ui.caseStudy.backIndex)}
            </Link>
            <span aria-hidden>/</span>
            <Link href={`/worlds/${world.slug}`} className="flex items-center gap-2 text-w-text hover:underline">
              <span aria-hidden className="h-2 w-2 rounded-full bg-w-deep" />
              {world.n} {t(world.name)}
            </Link>
          </div>

          <h1 className="mt-8 max-w-6xl font-display-tight text-[clamp(2.75rem,7vw,7rem)] leading-[0.95] text-ink">
            {t(project.title)}
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-muted md:text-xl">
            {t(project.overview)}
          </p>

          <dl className="mt-14 grid grid-cols-2 gap-8 border-t border-ink pt-8 md:grid-cols-5">
            <Meta label={t(ui.caseStudy.metaClient)}>{t(project.client)}</Meta>
            <Meta label={t(ui.caseStudy.metaYear)}>{project.year}</Meta>
            <Meta label={t(ui.caseStudy.metaFormat)}>{format}</Meta>
            <Meta label={t(ui.caseStudy.metaWorld)}>
              <span className="flex flex-col gap-1">
                <Link href={`/worlds/${world.slug}`} className="text-w-text hover:underline">
                  {t(world.name)}
                </Link>
                {secondary.length > 0 && (
                  <span className="text-sm text-muted">
                    {t(ui.caseStudy.alsoIn)}{" "}
                    {secondary.map((w, i) => (
                      <span key={w.slug}>
                        {i > 0 && ", "}
                        <Link href={`/worlds/${w.slug}`} className="hover:underline" style={{ color: w.palette.text }}>
                          {t(w.short)}
                        </Link>
                      </span>
                    ))}
                  </span>
                )}
              </span>
            </Meta>
            <Meta label={t(ui.caseStudy.metaDisciplines)}>
              {t(project.disciplines).join(" · ")}
            </Meta>
          </dl>
        </Container>
      </section>

      {/* Cover in the colour of the primary world. Real visuals keep their own colours. */}
      <section className="pb-16 md:pb-24">
        <Container>
          <div className="relative aspect-[4/5] w-full overflow-hidden sm:aspect-[16/9]">
            <WorldPoster
              world={world}
              title={t(project.title)}
              caption={t(project.client)}
              fragments={t(project.disciplines)}
              kicker={`${world.n} / ${world.style} — ${format}`}
            />
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
              <Bullets items={t(project.approach)} />
            </CaseSection>
            <CaseSection n="04" label={t(ui.caseStudy.sections.execution)} title={t(ui.caseStudy.sections.executionTitle)}>
              <Bullets items={t(project.execution)} />
            </CaseSection>
            <CaseSection n="05" label={t(ui.caseStudy.sections.outcome)} title={t(ui.caseStudy.sections.outcomeTitle)}>
              <Bullets items={t(project.outcome)} />
            </CaseSection>
          </div>
        </Container>
      </section>

      {project.gallery && project.gallery.length > 0 && (
        <section className={`mt-16 py-20 md:py-28 ${world.slug === "seafood" ? "water-light" : "bg-w-tint"}`}>
          <Container>
            <Eyebrow className="!text-w-text">{t(ui.caseStudy.visuals)}</Eyebrow>
            <div className="mt-10 grid gap-6 md:grid-cols-2 md:gap-8">
              {project.gallery.map((g, i) => (
                <figure key={i} className="flex flex-col gap-3">
                  <div className="relative aspect-[4/3] overflow-hidden bg-paper">
                    <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-8">
                      <span className="label text-w-text">
                        {t(ui.caseStudy.figure)} {String(i + 1).padStart(2, "0")}
                      </span>
                      <div className="serif text-7xl leading-[0.9] text-w-deep md:text-8xl">
                        {String(i + 1).padStart(2, "0")}
                      </div>
                    </div>
                  </div>
                  <figcaption className="text-sm text-muted">{t(g.caption)}</figcaption>
                </figure>
              ))}
            </div>
          </Container>
        </section>
      )}

      {project.takeaway && (
        <section className="py-24 md:py-32">
          <Container size="narrow">
            <div className="border-t border-ink pt-10">
              <Eyebrow>{t(ui.caseStudy.takeaway)}</Eyebrow>
              <p className="mt-6 serif text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.1] text-ink">
                <span className="text-w-text">“</span>
                {t(project.takeaway)}
                <span className="text-w-text">”</span>
              </p>
            </div>
          </Container>
        </section>
      )}

      <section className="py-20 md:py-28">
        <Container>
          <Link
            href={`/work/${nextProject.slug}`}
            className="group block border-t border-ink pt-8"
          >
            <div className="flex items-center justify-between label text-muted">
              <span>{t(ui.common.nextProject)}</span>
              <span className="flex items-center gap-2">
                <span aria-hidden className="h-2 w-2 rounded-full" style={{ backgroundColor: nextWorld.palette.deep }} />
                {nextWorld.n} {t(nextWorld.short)}
              </span>
            </div>
            <span className="mt-6 block font-display-tight text-[clamp(2.75rem,8vw,7.5rem)] leading-[0.95] text-ink">
              {t(nextProject.title)}{" "}
              <span aria-hidden className="inline-block transition-transform group-hover:translate-x-3" style={{ color: nextWorld.palette.text }}>
                →
              </span>
            </span>
            <p className="mt-4 max-w-reading text-lg text-muted">{t(nextProject.summary)}</p>
          </Link>
        </Container>
      </section>

      <section className="py-16">
        <Container size="narrow">
          <div className="flex flex-col items-start gap-6">
            <Eyebrow>{t(ui.common.available)}</Eyebrow>
            <p className="font-display text-[clamp(1.5rem,2.5vw,2.25rem)] leading-[1.2] text-ink">
              {t(ui.caseStudy.interestedIn)}
              <span className="serif">{t(ui.common.writeToMe)}</span>
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
    </div>
  );
}

function Meta({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <dt className="label text-muted">{label}</dt>
      <dd className="mt-2 text-base text-ink">{children}</dd>
    </div>
  );
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col gap-5">
      {items.map((a, i) => (
        <li key={i} className="flex gap-4">
          <span className="mt-3 inline-block h-[2px] w-6 flex-none bg-w-deep" />
          <span>{a}</span>
        </li>
      ))}
    </ul>
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
        <div className="flex items-baseline gap-3 border-t border-line pt-6">
          <span className="serif text-2xl text-w-text">{n}</span>
          <span className="label text-ink">{label}</span>
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
