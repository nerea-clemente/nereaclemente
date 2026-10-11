"use client";

import Link from "next/link";
import { Container } from "@/components/Container";
import { RealWork } from "./RealWork";
import { Hand, Photo, RoundArrow, Sparkle } from "@/components/kit";
import { useT } from "@/lib/i18n/context";
import type { Bilingual } from "@/lib/i18n/types";
import { getWorld } from "@/lib/worlds";

const b = <T,>(en: T, es: T): Bilingual<T> => ({ en, es });

const c = {
  label: b("Playground", "Playground"),
  h1: b(["Serious", "about", "playing."], ["Jugar,", "pero muy", "en serio."]),
  note: b(["Try", "remix", "repeat"], ["Prueba", "mezcla", "repite"]),
  side: b(
    "Visual experiments, playful ideas and the occasional happy accident.",
    "Experimentos visuales, ideas juguetonas y algún que otro accidente feliz."
  ),
  footnote: b(
    "Concept preview — illustrative experiments only, not client work.",
    "Concept preview — experimentos ilustrativos, no trabajo para clientes."
  ),
  close: b("Keep exploring.", "Sigue explorando."),
  closeSub: b("More ideas, more experiments, more ways to see.", "Más ideas, más experimentos, más formas de mirar."),
  back: b("Back to my worlds", "Volver a mis mundos"),
};

const CARDS = [
  { photo: "play-case1", title: b("Type in motion", "Tipografía en movimiento"), text: b("Kinetic type explorations and animated ideas.", "Exploraciones de tipografía cinética e ideas animadas.") },
  { photo: "play-case2", title: b("Imagined worlds", "Mundos imaginados"), text: b("Surreal images and alternate realities.", "Imágenes surrealistas y realidades alternativas.") },
  { photo: "play-case3", title: b("Little side quests", "Pequeñas misiones"), text: b("Playful concepts, posters and visual toys.", "Conceptos juguetones, pósters y juguetes visuales.") },
];

export function PlaygroundWorld() {
  const t = useT();
  const p = getWorld("playground")!.palette;

  return (
    <div className="overflow-x-hidden" style={{ color: p.ink }}>
      {/* Hero */}
      <section className="relative overflow-hidden" style={{ backgroundColor: p.page }}>
        <Container className="relative pt-10 md:pt-14">
          <div className="flex items-center gap-4">
            <span className="label">{t(c.label)}</span>
            <span className="h-px flex-1 bg-current opacity-60" />
          </div>
          <div className="mt-4 grid gap-8 md:grid-cols-12">
            <h1 className="display text-[clamp(3.75rem,10vw,9.5rem)] md:col-span-9">
              {t(c.h1).map((l) => (
                <span key={l} className="block">{l}</span>
              ))}
            </h1>
            <div className="relative md:col-span-3">
              <Hand arrow="down-left" className="ml-auto w-40 rotate-[-8deg] text-3xl uppercase">
                {t(c.note).map((x) => (
                  <span key={x} className="block">{x}</span>
                ))}
              </Hand>
              <Sparkle className="nc-wobble mt-2 h-12 w-12" color={p.mid} />
              <p className="serif mt-4 text-lg leading-snug">{t(c.side)}</p>
              <span className="mt-4 inline-block">
                <RoundArrow />
              </span>
            </div>
          </div>

          {/* Collage */}
          <div className="relative mx-auto mt-6 h-[440px] max-w-5xl md:-mt-10 md:h-[460px]">
            <div className="tape lift absolute bottom-[6%] left-0 h-[78%] w-[34%] -rotate-[5deg] md:w-[24%]" style={{ ["--tape" as string]: "#2B0F6B" }}>
              <Photo name="play-poster" />
            </div>
            <div className="absolute bottom-0 left-[26%] h-full w-[50%] md:left-[30%] md:w-[40%]">
              <Photo name="play-shell" className="[mask-image:radial-gradient(70%_70%_at_50%_55%,black_60%,transparent_100%)]" />
            </div>
            <div className="tape lift absolute right-[2%] top-[4%] h-[44%] w-[30%] rotate-[4deg] md:right-[6%] md:w-[22%]">
              <Photo name="play-chrome" />
            </div>
            <div className="lift absolute bottom-[4%] right-[4%] h-[42%] w-[24%] -rotate-[4deg] md:right-[10%] md:w-[16%]">
              <Photo name="play-note" />
            </div>
            <Sparkle className="absolute bottom-[8%] right-[30%] h-16 w-16" color={p.mid} />
            <Sparkle className="absolute right-0 top-[52%] h-8 w-8" color={p.mid} />
          </div>
        </Container>
      </section>

      {/* Three experiments */}
      <section style={{ backgroundColor: p.tint }}>
        <Container className="py-10 md:py-14">
          <div className="grid gap-8 md:grid-cols-3 md:gap-0 md:divide-x" style={{ borderColor: `${p.ink}33` }}>
            {CARDS.map((card, i) => (
              <div key={card.photo} className="group block md:px-6 first:md:pl-0 last:md:pr-0" style={{ borderColor: `${p.ink}33` }}>
                <p className="serif border-b pb-2 text-lg" style={{ borderColor: `${p.ink}33` }}>
                  <span className="font-semibold">0{i + 1}</span> / {t(card.title)}
                </p>
                <div className="mt-4 aspect-[3/4] overflow-hidden">
                  <Photo name={card.photo} alt={t(card.title)} className="transition-transform duration-700 ease-soft group-hover:scale-105" />
                </div>
                <p className="serif mt-4 text-base leading-snug">{t(card.text)}</p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="serif">2026</span>
                  <RoundArrow />
                </div>
              </div>
            ))}
          </div>
          <p className="mt-8 text-xs opacity-75">{t(c.footnote)}</p>
        </Container>
      </section>

      <RealWork slug="playground" bg="#EFE7FD" />

      {/* Closing */}
      <section style={{ backgroundColor: p.page }}>
        <Container className="grid gap-6 py-10 md:grid-cols-12 md:items-center md:py-12">
          <p className="cond text-2xl font-normal tracking-[0.02em] md:col-span-3">
            Nerea Clemente
            <span className="block text-sm">/ 2026</span>
          </p>
          <div className="md:col-span-5">
            <p className="serif text-[clamp(1.75rem,2.6vw,2.25rem)] font-semibold leading-none">{t(c.close)}</p>
            <p className="serif mt-1 text-base">{t(c.closeSub)}</p>
          </div>
          <Link href="/" className="label text-right hover:underline md:col-span-4">
            {t(c.back)} →
          </Link>
        </Container>
      </section>
    </div>
  );
}
