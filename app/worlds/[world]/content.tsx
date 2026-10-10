"use client";

import Link from "next/link";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/SectionHeader";
import { ProjectCard } from "@/components/ProjectCard";
import { WorldTile } from "@/components/WorldTile";
import { WorldPoster, worldFont, worldFontSmall, pixelSafe } from "@/components/WorldPoster";
import { Button } from "@/components/Button";
import { useT } from "@/lib/i18n/context";
import { ui } from "@/lib/i18n/strings";
import { projects } from "@/lib/projects";
import { getWorld, worlds, worldStyle, type WorldSlug } from "@/lib/worlds";
import { site } from "@/lib/site";

export function WorldContent({ slug }: { slug: WorldSlug }) {
  const t = useT();
  const world = getWorld(slug)!;
  const playful = slug === "playground";

  const primary = projects.filter((p) => p.world === slug);
  const tagged = projects.filter((p) => p.world !== slug && p.tags?.includes(slug));
  const idx = worlds.findIndex((w) => w.slug === slug);
  const next = worlds[(idx + 1) % worlds.length];
  const others = worlds.filter((w) => w.slug !== slug);
  const p = world.palette;

  return (
    <div style={worldStyle(world)}>
      {/* World header: the poster, full bleed */}
      <section className="relative">
        <div className="relative h-[78svh] min-h-[480px] max-h-[920px] w-full">
          <WorldPoster
            world={world}
            title={t(world.poster.title)}
            caption={t(world.poster.caption)}
            fragments={t(world.poster.fragments)}
            kicker={`${t(ui.world.label)} ${world.n} / ${world.style}`}
          />
        </div>
        <div className="world-ease bg-w-deep text-w-on">
          <Container>
            <div className="flex items-center justify-between py-4">
              <Link href="/work" className="label opacity-80 hover:opacity-100">
                {t(ui.caseStudy.backIndex)}
              </Link>
              <span className="label opacity-80">{world.style}</span>
            </div>
            <div aria-hidden className="h-px bg-current opacity-25" />
            <div className="grid gap-8 pt-10 pb-14 md:grid-cols-12 md:items-end md:pt-14 md:pb-20">
              <h1 className="flex flex-wrap items-baseline gap-x-5 md:col-span-7">
                <span className="serif text-[clamp(3rem,7vw,6rem)] leading-none">{world.n}</span>
                <span className={`${worldFont[slug]} text-[clamp(2.5rem,6vw,5.5rem)] leading-[0.9]`}>
                  {slug === "ai" ? pixelSafe(t(world.name)) : t(world.name)}
                </span>
              </h1>
              <p className="font-display text-xl leading-snug md:col-span-5 md:text-2xl">
                {t(world.lede)}
              </p>
            </div>
          </Container>
          <div className="grid grid-cols-4" aria-hidden>
            {[p.deep, p.mid, p.light, p.tint].map((c) => (
              <span key={c} className="block h-3 md:h-4" style={{ backgroundColor: c }} />
            ))}
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="world-ease bg-w-tint py-20 md:py-28">
        <Container>
          <div className="grid gap-12 md:grid-cols-12">
            <p className="font-display text-[clamp(1.5rem,2.8vw,2.25rem)] leading-[1.25] text-ink md:col-span-7">
              {t(world.description)}
            </p>
            <div className="md:col-span-4 md:col-start-9">
              <Eyebrow className="!text-w-text">{t(ui.world.whatLabel)}</Eyebrow>
              <ul className="mt-5 border-t border-ink/15">
                {t(world.shows).map((item, i) => (
                  <li
                    key={item}
                    className={`flex items-baseline gap-4 border-b border-ink/15 py-3 text-ink ${
                      playful ? (i % 2 ? "md:translate-x-4 md:rotate-1" : "md:-translate-x-1 md:-rotate-1") : ""
                    }`}
                  >
                    <span className="serif text-lg text-w-text">{String(i + 1).padStart(2, "0")}</span>
                    <span
                      className={`${worldFontSmall[slug]} text-[clamp(1.5rem,2.4vw,2.25rem)] ${playful && i % 2 ? "serif italic font-normal text-w-text" : ""}`}
                    >
                      {slug === "ai" ? pixelSafe(item) : item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Cases */}
      <section className="py-20 md:py-28">
        <Container>
          <div className="mb-12 flex items-baseline justify-between border-b border-ink pb-4">
            <h2 className={`${worldFont[slug]} text-[clamp(2.5rem,6vw,5rem)] leading-none text-w-text`}>
              {t(ui.world.casesLabel)}
            </h2>
            <span className="label text-muted">
              {String(primary.length).padStart(2, "0")}
            </span>
          </div>

          {primary.length > 0 ? (
            <div className="grid gap-16 md:grid-cols-2 md:gap-x-12 md:gap-y-24">
              {primary.map((proj) => (
                <ProjectCard key={proj.slug} project={proj} />
              ))}
            </div>
          ) : (
            <div className="grid gap-8 border border-dashed border-w-deep p-8 md:grid-cols-12 md:p-14">
              <p className="font-display-tight text-[clamp(2rem,4vw,3rem)] leading-none text-w-text md:col-span-5">
                {t(ui.world.emptyTitle)}
              </p>
              <div className="md:col-span-6 md:col-start-7">
                <p className="max-w-reading text-lg leading-relaxed text-muted">
                  {t(ui.world.emptyBody)}
                </p>
                <div className="mt-8">
                  <Button href={`mailto:${site.email}`} variant="ghost" external>
                    {site.email}
                  </Button>
                </div>
              </div>
            </div>
          )}

          {tagged.length > 0 && (
            <div className="mt-20 md:mt-28">
              <Eyebrow>{t(ui.world.alsoTagged)}</Eyebrow>
              <div className="mt-4 border-t border-line">
                {tagged.map((proj, i) => (
                  <ProjectCard key={proj.slug} project={proj} variant="compact" index={i} />
                ))}
              </div>
            </div>
          )}
        </Container>
      </section>

      {/* Next world */}
      <section className="pb-8">
        <Container>
          <Link
            href={`/worlds/${next.slug}`}
            className="group block border-t border-ink pt-8"
            style={{ color: next.palette.text }}
          >
            <span className="label text-muted">{t(ui.world.next)}</span>
            <span className="mt-4 flex flex-wrap items-baseline gap-x-5 leading-[0.95]">
              <span className="serif text-[clamp(2.5rem,7vw,6rem)]">{next.n}</span>
              <span className="font-display-tight text-[clamp(2.5rem,7vw,6rem)]">
                {t(next.name)}
              </span>
              <span aria-hidden className="text-[clamp(2rem,5vw,4rem)] transition-transform group-hover:translate-x-3">
                →
              </span>
            </span>
          </Link>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <Eyebrow>{t(ui.world.otherWorlds)}</Eyebrow>
          <ul className="mt-6 grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-3">
            {others.map((w) => (
              <li key={w.slug}>
                <WorldTile world={w} compact />
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </div>
  );
}
