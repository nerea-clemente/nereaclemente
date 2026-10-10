"use client";

import Link from "next/link";
import { useState } from "react";
import { Container } from "@/components/Container";
import { Eyebrow, SplitTitle } from "@/components/SectionHeader";
import { ProjectCard } from "@/components/ProjectCard";
import { WorldTile } from "@/components/WorldTile";
import { Button } from "@/components/Button";
import { useT } from "@/lib/i18n/context";
import { ui } from "@/lib/i18n/strings";
import { featuredProjects } from "@/lib/projects";
import { worlds, type World } from "@/lib/worlds";
import { site } from "@/lib/site";

// One featured case per world, so the selection shows the range.
const selected = featuredProjects.filter(
  (p, i, all) => all.findIndex((q) => q.world === p.world) === i
);

export default function HomePage() {
  const t = useT();
  const [hovered, setHovered] = useState<World | null>(null);

  return (
    <>
      {/* Hero — black & white; the worlds bring the colour */}
      <section className="pt-14 pb-16 md:pt-24 md:pb-24">
        <Container>
          <div className="flex items-center justify-between border-b border-line pb-4">
            <Eyebrow className="nc-fade-up">Valencia — Denmark</Eyebrow>
            <Eyebrow className="nc-fade-up">{t(ui.hero.label)}</Eyebrow>
          </div>

          <div className="relative">
            <h1 className="nc-fade-up nc-fade-up-1 mt-10 text-[clamp(3.5rem,11vw,10.5rem)] leading-[0.92] text-ink md:mt-16">
              <span className="block font-display-tight">{t(ui.hero.l1)}</span>
              <span
                className="world-ease block serif"
                style={{ color: hovered?.palette.text }}
              >
                {t(ui.hero.l2)}
              </span>
            </h1>

            {/* A small playful detail: a rotating sticker */}
            <div
              aria-hidden
              className="nc-fade-up nc-fade-up-3 absolute right-0 top-0 hidden h-36 w-36 md:block lg:h-44 lg:w-44"
            >
              <svg viewBox="0 0 200 200" className="nc-spin h-full w-full">
                <defs>
                  <path id="nc-circle" d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0" />
                </defs>
                <text className="label" style={{ fontSize: 15, letterSpacing: "0.2em" }} fill="#141414">
                  <textPath href="#nc-circle">
                    {`${t(ui.hero.sticker)} ${t(ui.hero.sticker)} ${t(ui.hero.sticker)}`}
                  </textPath>
                </text>
              </svg>
              <span className="absolute inset-0 m-auto grid h-12 w-12 grid-cols-2 gap-0.5 rotate-12">
                {worlds.slice(0, 4).map((w) => (
                  <span key={w.slug} style={{ backgroundColor: w.palette.deep }} />
                ))}
              </span>
            </div>
          </div>

          <div className="nc-fade-up nc-fade-up-2 mt-10 grid gap-6 md:mt-14 md:grid-cols-12">
            <p className="font-display text-xl leading-snug text-ink md:col-span-5 md:text-2xl">
              {t(ui.hero.sub)}
            </p>
            <p className="max-w-reading text-base leading-relaxed text-muted md:col-span-5 md:col-start-8 md:text-lg">
              {t(ui.hero.intro)}
            </p>
          </div>

          {/* Entrances to the five worlds */}
          <ul className="nc-fade-up nc-fade-up-3 mt-14 grid grid-cols-2 gap-2 sm:grid-cols-3 md:mt-20 md:grid-cols-5 md:gap-3">
            {worlds.map((w, i) => (
              <li key={w.slug} className={i === worlds.length - 1 ? "col-span-2 sm:col-span-1" : ""}>
                <WorldTile world={w} onHover={setHovered} />
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* What each world is */}
      <section className="py-20 md:py-28">
        <Container>
          <div className="mb-12 grid gap-8 md:grid-cols-12 md:items-end">
            <div className="md:col-span-6">
              <Eyebrow>{t(ui.home.worldsLabel)}</Eyebrow>
              <SplitTitle
                className="mt-4 text-[clamp(2.25rem,5vw,4rem)]"
                a={t(ui.home.worldsTitleA)}
                b={t(ui.home.worldsTitleB)}
              />
            </div>
            <p className="max-w-reading text-base leading-relaxed text-muted md:col-span-5 md:col-start-8">
              {t(ui.home.worldsLede)}
            </p>
          </div>

          <ul className="border-t border-ink">
            {worlds.map((w) => (
              <li key={w.slug}>
                <Link
                  href={`/worlds/${w.slug}`}
                  className="group grid grid-cols-[auto_1fr] items-baseline gap-x-5 gap-y-2 border-b border-line py-7 md:grid-cols-[4rem_1fr_1.2fr_auto] md:gap-10 md:py-9"
                >
                  <span className="serif text-3xl md:text-4xl" style={{ color: w.palette.text }}>
                    {w.n}
                  </span>
                  <span className="flex flex-col gap-1">
                    <span className="font-display-tight text-2xl text-ink md:text-3xl">{t(w.name)}</span>
                    <span className="label text-muted">{w.style}</span>
                  </span>
                  <span className="col-span-2 max-w-reading text-base leading-relaxed text-muted md:col-span-1">
                    {t(w.lede)}
                  </span>
                  <span
                    className="hidden items-center gap-2 label transition-all group-hover:gap-4 md:inline-flex"
                    style={{ color: w.palette.text }}
                  >
                    {t(ui.home.enter)} <span aria-hidden>→</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Selected work */}
      <section className="py-20 md:py-28">
        <Container>
          <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <Eyebrow>{t(ui.home.selectedLabel)}</Eyebrow>
              <SplitTitle
                className="mt-4 text-[clamp(2.25rem,5vw,4rem)]"
                a={t(ui.home.selectedTitleA)}
                b={t(ui.home.selectedTitleB)}
              />
            </div>
            <Button href="/work" variant="quiet">
              {t(ui.common.allProjects)}
            </Button>
          </div>
          <div className="flex flex-col gap-20 md:gap-28">
            {selected.map((p) => (
              <ProjectCard key={p.slug} project={p} variant="featured" />
            ))}
          </div>
        </Container>
      </section>

      {/* Personal introduction */}
      <section className="bg-ink py-24 text-paper md:py-32">
        <Container>
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-3">
              <span className="label text-paper/60">{t(ui.home.profileLabel)}</span>
            </div>
            <div className="md:col-span-9">
              <p className="font-display text-[clamp(1.75rem,3.2vw,2.75rem)] leading-[1.15]">
                {t(ui.home.profileLeadA)}
                <span className="serif">{t(ui.home.profileLeadEm)}</span>
                {t(ui.home.profileLeadB)}
              </p>
              <p className="mt-8 max-w-reading text-lg leading-relaxed text-paper/75">
                {t(ui.home.profileBody)}
              </p>
              <Link
                href="/about"
                className="mt-10 inline-flex items-center gap-3 border-b border-paper pb-1 label text-paper transition-all hover:gap-5"
              >
                {t(ui.common.moreAbout)} <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Contact */}
      <section className="py-24 md:py-32">
        <Container size="narrow">
          <Eyebrow>{t(ui.home.contactLabel)}</Eyebrow>
          <p className="mt-6 font-display-tight text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.05] text-ink">
            {t(ui.home.contactA)}
            <span className="serif font-normal">{t(ui.home.contactEm)}</span>
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="/contact">{t(ui.common.contact)}</Button>
            <Button href={`mailto:${site.email}`} variant="ghost" external>
              {site.email}
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
