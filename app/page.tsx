"use client";

import Link from "next/link";
import { Container } from "@/components/Container";
import { Asterisk, Photo } from "@/components/kit";
import { useT } from "@/lib/i18n/context";
import type { Bilingual } from "@/lib/i18n/types";
import { worlds } from "@/lib/worlds";

const b = <T,>(en: T, es: T): Bilingual<T> => ({ en, es });

const copy = {
  l1: b("One mind.", "One mind."),
  l2: b("Many worlds.", "Many worlds."),
  side: b(
    "Strategy, creativity, innovation & everything in between.",
    "Estrategia, creatividad, innovación y todo lo que hay entre medias."
  ),
  bandA: b("Ideas from different worlds", "Ideas de mundos distintos"),
  bandB: b("for a more connected tomorrow.", "para un mañana más conectado."),
  bandSide: b(
    "Strategic marketing, branding, creative content, aquaculture specialisation and practical AI work.",
    "Marketing estratégico, branding, contenido creativo, especialización en acuicultura y trabajo práctico con IA."
  ),
  selected: b("Selected work", "Trabajo seleccionado"),
  viewAll: b("View all", "Ver todo"),
  concept: b("Concept preview", "Concept preview"),
  aboutTitle: b("A little more about me.", "Un poco más sobre mí."),
  aboutText: b(
    "Marketing, communication and creative thinking across industries and ideas.",
    "Marketing, comunicación y pensamiento creativo entre sectores e ideas."
  ),
};

// The world collage: photo, crop focus, grid placement and a slight tilt.
const TILES: Record<string, { photo: string; cls: string; tilt: string }> = {
  seafood: { photo: "home-seafood", cls: "md:col-span-6 md:row-span-1 aspect-[16/10]", tilt: "" },
  brand: { photo: "home-brand", cls: "md:col-span-5 md:col-start-8 aspect-[16/10]", tilt: "md:rotate-[2.5deg]" },
  ai: { photo: "home-ai", cls: "md:col-span-4 aspect-[5/4] md:-mt-6", tilt: "md:-rotate-[1.5deg]" },
  content: { photo: "home-content", cls: "md:col-span-4 aspect-[5/4] md:mt-6", tilt: "md:-rotate-[3deg]" },
  playground: { photo: "home-playground", cls: "md:col-span-4 aspect-[5/4] md:-mt-2", tilt: "md:rotate-[1.5deg]" },
};

const WORK = [
  { photo: "work-fish", title: b("Fish Health 101", "Fish Health 101"), href: "/worlds/seafood" },
  { photo: "work-ai", title: b("AI claim review", "Revisión de reclamaciones con IA"), href: "/worlds/ai" },
  { photo: "work-campaign", title: b("Campaigns & social", "Campañas y redes"), href: "/worlds/content" },
];

export default function HomePage() {
  const t = useT();

  return (
    <>
      {/* Name first, loud */}
      <section className="pt-6 md:pt-10">
        <Container>
          <h1 className="sr-only">Nerea Clemente — One mind. Many worlds.</h1>
          <p aria-hidden className="nc-fade-up cond whitespace-nowrap text-[min(14.1vw,13.5rem)] leading-[0.82] text-ink">
            Nerea Clemente
          </p>
          <div className="nc-fade-up nc-fade-up-1 mt-4 grid gap-6 border-t-2 border-ink pt-5 md:mt-6 md:grid-cols-12 md:items-end">
            <p aria-hidden className="text-ink md:col-span-9">
              <span className="display block text-[clamp(3rem,8.5vw,8.5rem)]">{t(copy.l1)}</span>
              <span className="italic-serif block text-[clamp(3.2rem,9vw,9rem)] leading-[0.85]">{t(copy.l2)}</span>
            </p>
            <Link href="/about" className="group md:col-span-3 md:pb-4">
              <span className="serif block text-lg leading-snug text-ink md:text-xl">{t(copy.side)}</span>
              <span aria-hidden className="mt-3 inline-block text-2xl transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </Container>
      </section>

      {/* Five worlds collage */}
      <section className="pt-10 md:pt-14">
        <Container>
          <div className="relative grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-12 md:gap-x-5 md:gap-y-5">
            {worlds.map((w) => {
              const tile = TILES[w.slug];
              return (
                <Link
                  key={w.slug}
                  href={`/worlds/${w.slug}`}
                  className={`group relative block overflow-hidden lift transition-transform duration-500 ease-soft hover:-translate-y-1 ${tile.cls} ${tile.tilt}`}
                >
                  <Photo name={tile.photo} alt="" className="transition-transform duration-700 ease-soft group-hover:scale-105" />
                  <span className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                  <span className="absolute inset-x-0 bottom-0 flex items-end justify-between p-4 text-white md:p-5">
                    <span className="cond text-[clamp(1.25rem,2.1vw,1.9rem)] leading-[0.95]">
                      <span className="block">{w.n}</span>
                      {t(w.name).replace(" y ", " & ")}
                    </span>
                    <span aria-hidden className="text-2xl transition-transform group-hover:translate-x-1">→</span>
                  </span>
                </Link>
              );
            })}
            {/* The asterisk ties the worlds together */}
            <Asterisk className="pointer-events-none absolute left-[54%] top-[26%] hidden h-32 w-32 -translate-x-1/2 -translate-y-1/2 text-ink md:block lg:h-40 lg:w-40" />
          </div>
        </Container>
      </section>

      {/* Black band */}
      <section className="mt-12 md:mt-16">
        <Container>
          <Link href="/about" className="group grid gap-6 bg-ink px-6 py-8 text-paper md:grid-cols-12 md:items-center md:px-10 md:py-10">
            <p className="serif text-[clamp(1.75rem,3.4vw,3rem)] leading-[1.05] md:col-span-7">
              {t(copy.bandA)}
              <br />
              {t(copy.bandB)}
            </p>
            <div className="flex items-end justify-between gap-6 border-paper/30 md:col-span-5 md:border-l md:pl-8">
              <p className="serif text-base leading-snug text-paper/85 md:text-lg">{t(copy.bandSide)}</p>
              <span aria-hidden className="text-2xl transition-transform group-hover:translate-x-1">→</span>
            </div>
          </Link>
        </Container>
      </section>

      {/* Selected work */}
      <section className="pt-14 md:pt-20">
        <Container>
          <div className="mb-6 flex items-end justify-between">
            <h2 className="serif text-[clamp(1.75rem,3vw,2.5rem)] text-ink">{t(copy.selected)}</h2>
            <Link href="/work" className="label text-ink hover:underline">
              {t(copy.viewAll)} →
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {WORK.map((w) => (
              <Link key={w.photo} href={w.href} className="group block">
                <div className="aspect-[4/3] overflow-hidden">
                  <Photo name={w.photo} className="transition-transform duration-700 ease-soft group-hover:scale-105" />
                </div>
                <p className="serif mt-3 text-xl text-ink md:text-2xl">{t(w.title)}</p>
                <p className="label mt-1 text-muted">{t(copy.concept)}</p>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* About */}
      <section className="pb-20 pt-14 md:pb-28 md:pt-20">
        <Container>
          <Link href="/about" className="group grid overflow-hidden bg-soft md:grid-cols-12">
            <div className="aspect-[16/9] md:col-span-7 md:aspect-auto md:min-h-[320px]">
              <Photo name="portrait" alt="Nerea Clemente" position="center 35%" className="grayscale" />
            </div>
            <div className="flex flex-col justify-center gap-4 p-8 md:col-span-5 md:p-12">
              <h2 className="serif text-[clamp(1.75rem,3vw,2.75rem)] leading-[1.05] text-ink">{t(copy.aboutTitle)}</h2>
              <p className="serif text-lg leading-snug text-ink/80 md:text-xl">{t(copy.aboutText)}</p>
              <span aria-hidden className="self-end text-2xl transition-transform group-hover:translate-x-1">→</span>
            </div>
          </Link>
        </Container>
      </section>
    </>
  );
}
