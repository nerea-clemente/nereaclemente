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
      {/* Hero */}
      <section className="pt-16 pb-24 md:pt-24 md:pb-32">
        <Container>
          <div className="grid gap-16 md:grid-cols-12 md:gap-12">
            <div className="md:col-span-8">
              <p className="nc-fade-up italic-serif text-lg text-clay md:text-xl">
                {t(ui.hero.badge)}
              </p>

              <h1 className="nc-fade-up nc-fade-up-1 mt-6 font-display-tight text-[clamp(3rem,8vw,7.5rem)] leading-[0.95] text-ink">
                {t(ui.hero.headline.l1)}{" "}
                <span className="italic-serif text-clay">
                  {t(ui.hero.headline.l2a)}
                </span>
                {t(ui.hero.headline.l2b)}{" "}
                {t(ui.hero.headline.l3)} {t(ui.hero.headline.l4)}{" "}
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

      {/* Featured */}
      <section className="py-20 md:py-28">
        <Container>
          <div className="mb-16 grid items-end gap-8 md:grid-cols-12">
            <div className="md:col-span-7">
              <Eyebrow>{t(ui.home.selectedStrip)}</Eyebrow>
              <h2 className="mt-4 font-display-tight text-[clamp(2.25rem,5vw,4rem)] leading-[1] text-ink">
                {t(ui.home.selectedTitle.a)}
                <span className="italic-serif text-clay">
                  {t(ui.home.selectedTitle.em)}
                </span>
                {t(ui.home.selectedTitle.b)}
              </h2>
            </div>
            <div className="md:col-span-4 md:col-start-9">
              <p className="text-base leading-relaxed text-muted">
                {t(ui.home.selectedLede)}
              </p>
              <Link
                href="/work"
                className="mt-5 inline-flex items-center gap-2 italic-serif text-base text-clay transition-colors hover:gap-3 hover:text-ink"
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

      {/* Profile — chalk surface */}
      <section className="bg-chalk py-24 md:py-32">
        <Container>
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-3">
              <Eyebrow>{t(ui.home.profileEyebrow)}</Eyebrow>
            </div>
            <div className="md:col-span-9">
              <p className="font-display text-[clamp(1.625rem,2.8vw,2.5rem)] leading-[1.2] text-ink">
                {t(ui.home.profileLeadA)}
                <span className="italic-serif text-clay">
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
            <div className="md:col-span-5">
              <Eyebrow>{t(ui.home.practiceEyebrow)}</Eyebrow>
              <h2 className="mt-4 font-display-tight text-[clamp(2.25rem,5vw,4rem)] leading-[1] text-ink">
                {t(ui.home.practiceTitle)}
              </h2>
            </div>
            <p className="md:col-span-5 md:col-start-8 max-w-reading text-base leading-relaxed text-muted">
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
                <h3 className="font-display-tight text-[clamp(1.5rem,2.5vw,2.25rem)] leading-tight text-ink">
                  {t(group.title)}
                </h3>
                <p className="max-w-reading text-base leading-relaxed text-muted">
                  {t(group.description)}
                </p>
                <ul className="mt-auto flex flex-wrap gap-x-3 gap-y-1 pt-4 italic-serif text-base text-clay">
                  {t(group.items).map((item, j) => (
                    <li key={item}>
                      {j > 0 && <span className="mr-3 text-muted">·</span>}
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Manifesto — chalk surface */}
      <section className="bg-chalk py-28 md:py-40">
        <Container size="narrow">
          <Eyebrow>{t(ui.home.manifestoEyebrow)}</Eyebrow>
          <blockquote className="mt-8">
            <p className="font-display text-[clamp(2rem,4.5vw,3.75rem)] leading-[1.1] text-ink">
              <span className="italic-serif text-clay">“</span>
              I&rsquo;d rather write one careful sentence about a fish farm than ten clever ones about something I don&rsquo;t know. The work begins on the dock, in someone else&rsquo;s vocabulary, and ends on the page in{" "}
              <span className="italic-serif text-clay">mine</span>.
              <span className="italic-serif text-clay">”</span>
            </p>
            <footer className="mt-10 italic-serif text-base text-muted">
              — Nerea, {t(ui.home.manifestoLocation)}
            </footer>
          </blockquote>
        </Container>
      </section>

      {/* Preoccupations */}
      <section className="py-24 md:py-32">
        <Container>
          <div className="mb-12 grid gap-6 md:grid-cols-12 md:items-end md:gap-12">
            <div className="md:col-span-6">
              <Eyebrow>{t(ui.home.preocEyebrow)}</Eyebrow>
              <h2 className="mt-4 font-display-tight text-[clamp(2.25rem,5vw,4rem)] leading-[1] text-ink">
                {t(ui.home.preocTitleA)}{" "}
                <span className="italic-serif text-clay">
                  {t(ui.home.preocTitleEm)}
                </span>
              </h2>
            </div>
            <p className="md:col-span-5 md:col-start-8 max-w-reading text-base leading-relaxed text-muted">
              {t(ui.home.preocLede)}
            </p>
          </div>

          <ul className="border-t border-line">
            {preoccupations.map((p, i) => (
              <li
                key={i}
                className="grid grid-cols-[2.5rem_1fr] items-baseline gap-6 border-b border-line py-7 md:grid-cols-[3rem_1fr_auto] md:py-9"
              >
                <span className="italic-serif text-lg text-muted">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-display text-[clamp(1.5rem,3vw,2.5rem)] leading-[1.1] text-ink">
                  {t(p.phrase)}.
                </span>
                <span className="hidden italic-serif text-base text-clay md:inline">
                  — {t(p.note)}
                </span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Writing */}
      <section className="py-24 md:py-32">
        <Container>
          <div className="mb-12 grid items-end gap-8 md:grid-cols-12">
            <div className="md:col-span-7">
              <Eyebrow>{t(ui.home.writingEyebrow)}</Eyebrow>
              <h2 className="mt-4 font-display-tight text-[clamp(2.25rem,5vw,4rem)] leading-[1] text-ink">
                {t(ui.home.writingTitleA)}
                <span className="italic-serif text-clay">
                  {t(ui.home.writingTitleEm)}
                </span>
                {t(ui.home.writingTitleB)}
              </h2>
            </div>
            <div className="md:col-span-4 md:col-start-9">
              <p className="text-base leading-relaxed text-muted">
                {t(ui.home.writingLede)}
              </p>
              <Link
                href="/writing"
                className="mt-5 inline-flex items-center gap-2 italic-serif text-base text-clay transition-colors hover:gap-3 hover:text-ink"
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
                  className="group grid grid-cols-[3rem_1fr] items-baseline gap-6 border-b border-line py-8 transition-colors hover:bg-chalk md:grid-cols-[3rem_140px_1fr_auto] md:py-10"
                >
                  <span className="italic-serif text-lg text-muted">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="hidden italic-serif text-base text-muted md:block">
                    {t(a.date)}
                  </span>
                  <span className="flex flex-col gap-2">
                    <span className="font-display-tight text-2xl text-ink transition-colors group-hover:text-clay md:text-3xl">
                      {t(a.title)}
                    </span>
                    <span className="max-w-reading text-sm leading-relaxed text-muted">
                      {t(a.dek)}
                    </span>
                  </span>
                  <span className="hidden italic-serif text-base text-clay md:block">
                    {t(articleCategoryLabels[a.category])}
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
