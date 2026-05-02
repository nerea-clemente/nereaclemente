"use client";

import Link from "next/link";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/SectionHeader";
import { ProjectCard } from "@/components/ProjectCard";
import { Button } from "@/components/Button";
import { Currently } from "@/components/Currently";
import { useT } from "@/lib/i18n/context";
import { ui } from "@/lib/i18n/strings";
import { featuredProjects } from "@/lib/projects";
import { expertise } from "@/lib/expertise";
import { articles, articleCategoryLabels } from "@/lib/writing";

const preoccupations = [
  {
    phrase: { en: "the semicolon", es: "el punto y coma" },
    note: { en: "still earns its keep", es: "sigue ganándose su sitio" },
  },
  {
    phrase: { en: "bivalves and their economics", es: "los bivalvos y su economía" },
    note: {
      en: "a whole supply chain in one shell",
      es: "toda una cadena de suministro en una sola concha",
    },
  },
  {
    phrase: {
      en: "fishing communities telling their own story",
      es: "las comunidades pesqueras contando su propia historia",
    },
    note: { en: "without a fixer in the room", es: "sin un fixer en la sala" },
  },
  {
    phrase: {
      en: "provenance claims that don't survive scrutiny",
      es: "afirmaciones de origen que no aguantan el escrutinio",
    },
    note: { en: "and the ones that do", es: "y las que sí" },
  },
  {
    phrase: {
      en: "the first hour at a fish market",
      es: "la primera hora en una lonja",
    },
    note: {
      en: "everything happens before 6 am",
      es: "todo pasa antes de las 6 de la mañana",
    },
  },
  {
    phrase: {
      en: "press releases written like postcards",
      es: "notas de prensa escritas como postales",
    },
    note: {
      en: "short, specific, addressed to one person",
      es: "cortas, concretas y dirigidas a una sola persona",
    },
  },
];

export default function HomePage() {
  const t = useT();
  const featured = featuredProjects.slice(0, 3);
  const recentWriting = articles.slice(0, 3);

  return (
    <>
      {/* Top brand strip */}
      <div className="overflow-hidden border-b border-line bg-paper py-2.5">
        <div className="nc-marquee flex w-max gap-10 whitespace-nowrap font-mono text-[11px] uppercase tracking-caps text-muted">
          {Array.from({ length: 6 }).map((_, i) => (
            <span key={i} className="flex items-center gap-10">
              <span>{t(ui.ticker.folio)}</span>
              <span className="text-clay">◆</span>
              <span>{t(ui.ticker.location)}</span>
              <span className="text-clay">◆</span>
              <span>{t(ui.ticker.languages)}</span>
              <span className="text-clay">◆</span>
            </span>
          ))}
        </div>
      </div>

      {/* Hero */}
      <section className="relative pt-12 pb-20 md:pt-20 md:pb-28">
        <Container>
          <div className="grid gap-16 md:grid-cols-12 md:gap-12">
            <div className="md:col-span-8">
              <div className="nc-fade-up flex items-center gap-3 font-mono text-[11px] uppercase tracking-caps">
                <span className="bg-sea px-2 py-0.5 text-paper">
                  {t(ui.hero.badge)}
                </span>
                <span className="text-muted">{t(ui.hero.badgeMeta)}</span>
              </div>

              <h1 className="nc-fade-up nc-fade-up-1 mt-10 font-display-tight text-[clamp(3rem,8.5vw,8.5rem)] leading-[0.92] text-ink">
                {t(ui.hero.headline.l1)}
                <br />
                <span className="italic-serif text-sea">
                  {t(ui.hero.headline.l2a)}
                </span>
                {t(ui.hero.headline.l2b)}
                <br />
                {t(ui.hero.headline.l3)}
                <br />
                {t(ui.hero.headline.l4)}
                <br />
                {t(ui.hero.headline.l5)}
              </h1>

              <p className="nc-fade-up nc-fade-up-2 mt-12 max-w-2xl text-lg leading-relaxed text-muted md:text-xl">
                {t(ui.hero.sub)}
              </p>

              <div className="nc-fade-up nc-fade-up-3 mt-10 flex flex-wrap items-center gap-4">
                <Button href="/work" variant="primary">
                  {t(ui.hero.ctaPrimary)}
                </Button>
                <Button href="/contact" variant="ghost">
                  {t(ui.hero.ctaGhost)}
                </Button>
              </div>
            </div>

            <div className="nc-fade-up nc-fade-up-4 md:col-span-4 md:pt-32">
              <Currently />
            </div>
          </div>
        </Container>
      </section>

      {/* Soft strip */}
      <section className="bg-blush py-4">
        <Container>
          <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-caps text-ink">
            <span>{t(ui.home.selectedStrip)}</span>
            <span className="hidden md:inline">
              {t(ui.home.selectedCount)}
            </span>
            <span>Vol. 04</span>
          </div>
        </Container>
      </section>

      {/* Featured */}
      <section className="py-20 md:py-28">
        <Container>
          <div className="mb-16 grid items-end gap-8 md:grid-cols-12">
            <div className="md:col-span-6">
              <Eyebrow>{t(ui.home.selectedStrip).replace("◆ ", "")}</Eyebrow>
              <h2 className="mt-5 font-display-tight text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] text-ink">
                {t(ui.home.selectedTitle.a)}
                <span className="italic-serif text-sea">
                  {t(ui.home.selectedTitle.em)}
                </span>
                {t(ui.home.selectedTitle.b)}
              </h2>
            </div>
            <div className="md:col-span-5 md:col-start-8">
              <p className="text-base text-muted">{t(ui.home.selectedLede)}</p>
              <Link
                href="/work"
                className="mt-5 inline-flex items-center gap-2 border-b border-line pb-0.5 text-sm uppercase tracking-caps text-ink transition-colors hover:border-sea hover:text-sea"
              >
                {t(ui.common.allProjects)} <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-20 md:gap-28">
            {featured.map((p) => (
              <ProjectCard key={p.slug} project={p} variant="featured" />
            ))}
          </div>
        </Container>
      </section>

      {/* Profile */}
      <section className="bg-chalk py-24 md:py-32">
        <Container>
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-3">
              <Eyebrow>{t(ui.home.profileEyebrow)}</Eyebrow>
            </div>
            <div className="md:col-span-9">
              <p className="font-display text-[clamp(1.75rem,3vw,2.75rem)] leading-[1.15] text-ink">
                {t(ui.home.profileLeadA)}
                <span className="italic-serif text-sea">
                  {t(ui.home.profileLeadEm)}
                </span>
                {t(ui.home.profileLeadB)}
              </p>
              <p className="mt-8 max-w-reading text-lg leading-relaxed text-muted">
                {t(ui.home.profileBody)}
              </p>
              <div className="mt-10">
                <Button href="/about" variant="quiet">
                  {t(ui.common.moreAbout)}
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Practice */}
      <section className="py-24 md:py-32">
        <Container>
          <div className="mb-16 grid gap-8 md:grid-cols-12">
            <div className="md:col-span-4">
              <Eyebrow>{t(ui.home.practiceEyebrow)}</Eyebrow>
              <h2 className="mt-5 font-display-tight text-[clamp(2.5rem,5.5vw,4.5rem)] leading-[0.95] text-ink">
                {t(ui.home.practiceTitle)}
              </h2>
            </div>
            <p className="md:col-span-5 md:col-start-7 md:pt-10 max-w-reading text-base text-muted">
              {t(ui.home.practiceLede)}
            </p>
          </div>

          <div className="grid border-t border-line md:grid-cols-2">
            {expertise.map((group, i) => (
              <article
                key={i}
                className={`flex flex-col gap-5 border-b border-line p-8 md:p-12 ${
                  i % 2 === 0 ? "md:border-r" : ""
                }`}
              >
                <div className="flex items-baseline justify-between">
                  <span className="font-mono text-[11px] uppercase tracking-caps text-sea">
                    0{i + 1}
                  </span>
                  <span className="font-mono text-[11px] uppercase tracking-caps text-muted">
                    {t(group.items).length} {t(ui.home.services)}
                  </span>
                </div>
                <h3 className="font-display-tight text-[clamp(1.75rem,3vw,2.5rem)] leading-tight text-ink">
                  {t(group.title)}
                </h3>
                <p className="max-w-reading text-base leading-relaxed text-muted">
                  {t(group.description)}
                </p>
                <ul className="mt-auto flex flex-wrap gap-1.5 pt-4">
                  {t(group.items).map((item) => (
                    <li
                      key={item}
                      className="bg-soft px-2.5 py-1 font-mono text-[10px] uppercase tracking-caps text-ink"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Manifesto — soft Mediterranean sea panel */}
      <section className="bg-deep py-28 text-paper md:py-40">
        <Container>
          <div className="grid gap-8 md:grid-cols-12">
            <div className="md:col-span-3">
              <span className="font-mono text-[11px] uppercase tracking-caps text-saffron">
                {t(ui.home.manifestoEyebrow)}
              </span>
              <p className="mt-3 font-mono text-[11px] uppercase tracking-caps text-paper/70">
                {t(ui.home.manifestoMeta)}
              </p>
            </div>
            <blockquote className="md:col-span-9">
              <p className="font-display-tight text-[clamp(2.25rem,5vw,4.5rem)] leading-[1.02]">
                <span className="italic-serif text-saffron">“</span>
                {t(ui.home.manifestoQuote)}
                <span className="italic-serif text-saffron">
                  {t(ui.home.manifestoEm)}
                </span>
                {t(ui.home.manifestoTrail)}
                <span className="italic-serif text-saffron">”</span>
              </p>
              <footer className="mt-12 flex items-center gap-5 font-mono text-[11px] uppercase tracking-caps text-paper/70">
                <span className="bg-saffron px-2 py-0.5 text-ink">
                  {t(ui.home.manifestoSign)}
                </span>
                <span className="h-px flex-1 bg-paper/20" />
                <span>{t(ui.home.manifestoLocation)}</span>
              </footer>
            </blockquote>
          </div>
        </Container>
      </section>

      {/* Preoccupations */}
      <section className="py-24 md:py-32">
        <Container>
          <div className="mb-12 grid gap-6 md:grid-cols-12 md:items-end md:gap-12">
            <div className="md:col-span-5">
              <Eyebrow>{t(ui.home.preocEyebrow)}</Eyebrow>
              <h2 className="mt-5 font-display-tight text-[clamp(2.25rem,5.5vw,4.5rem)] leading-[0.95] text-ink">
                {t(ui.home.preocTitleA)}
                <br />
                <span className="italic-serif text-sea">
                  {t(ui.home.preocTitleEm)}
                </span>
              </h2>
            </div>
            <p className="md:col-span-5 md:col-start-8 max-w-reading text-base text-muted">
              {t(ui.home.preocLede)}
            </p>
          </div>

          <ul className="grid border-t border-line md:grid-cols-2">
            {preoccupations.map((p, i) => (
              <li
                key={i}
                className={`flex flex-col gap-3 border-b border-line p-6 md:p-10 ${
                  i % 2 === 0 ? "md:border-r" : ""
                }`}
              >
                <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-caps">
                  <span className="bg-ink px-2 py-0.5 text-saffron">
                    № {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-muted">{t(ui.home.preocChip)}</span>
                </div>
                <p className="font-display-tight text-[clamp(1.75rem,3.5vw,3rem)] leading-[1] text-ink">
                  {t(p.phrase)}.
                </p>
                <p className="text-sm italic-serif text-muted">— {t(p.note)}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Writing */}
      <section className="bg-chalk py-24 md:py-32">
        <Container>
          <div className="mb-16 grid items-end gap-8 md:grid-cols-12">
            <div className="md:col-span-6">
              <Eyebrow>{t(ui.home.writingEyebrow)}</Eyebrow>
              <h2 className="mt-5 font-display-tight text-[clamp(2.25rem,5.5vw,4.5rem)] leading-[0.95] text-ink">
                {t(ui.home.writingTitleA)}
                <span className="italic-serif text-sea">
                  {t(ui.home.writingTitleEm)}
                </span>
                {t(ui.home.writingTitleB)}
              </h2>
            </div>
            <div className="md:col-span-5 md:col-start-8">
              <p className="text-base text-muted">{t(ui.home.writingLede)}</p>
              <Link
                href="/writing"
                className="mt-5 inline-flex items-center gap-2 border-b border-line pb-0.5 text-sm uppercase tracking-caps text-ink hover:border-sea hover:text-sea"
              >
                {t(ui.common.allWriting)} <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
          <ul className="border-t border-line">
            {recentWriting.map((a, i) => (
              <li key={a.slug}>
                <Link
                  href={`/writing#${a.slug}`}
                  className="group grid grid-cols-[2.5rem_1fr] items-baseline gap-6 border-b border-line py-8 transition-colors hover:bg-saffron md:grid-cols-[3rem_140px_1fr_140px] md:py-10"
                >
                  <span className="font-mono text-[11px] uppercase tracking-caps text-sea">
                    №&nbsp;0{i + 1}
                  </span>
                  <span className="hidden font-mono text-[11px] uppercase tracking-caps text-muted md:block">
                    {t(a.date)}
                  </span>
                  <span className="flex flex-col gap-2">
                    <span className="font-display-tight text-2xl text-ink md:text-4xl">
                      {t(a.title)}
                    </span>
                    <span className="max-w-reading text-sm text-muted">
                      {t(a.dek)}
                    </span>
                  </span>
                  <span className="hidden text-right font-mono text-[11px] uppercase tracking-caps text-muted md:block">
                    {t(articleCategoryLabels[a.category])} · {t(a.readTime)}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  );
}
