"use client";

import Link from "next/link";
import { Container } from "@/components/Container";
import { RealWork } from "./RealWork";
import { Asterisk, Hand, Photo } from "@/components/kit";
import { useT } from "@/lib/i18n/context";
import type { Bilingual } from "@/lib/i18n/types";
import { getWorld } from "@/lib/worlds";

const b = <T,>(en: T, es: T): Bilingual<T> => ({ en, es });

const c = {
  label: b("Brand & Strategy", "Marca y Estrategia"),
  h1a: b("Connecting", "Uniendo"),
  h1b: b("the dots.", "los puntos."),
  topics: b(["Ideas", "People", "Markets", "Direction"], ["Ideas", "Personas", "Mercados", "Rumbo"]),
  card1: b(["Ideas", "Culture", "Audiences", "Action"], ["Ideas", "Cultura", "Audiencias", "Acción"]),
  card2: b("Different people. One clear story.", "Personas distintas. Una historia clara."),
  note1: b("Strategy people can actually use.", "Estrategia que la gente pueda usar de verdad."),
  note2: b("Ideas to people to progress.", "De las ideas a las personas, y al progreso."),
  concept: b("Concept preview", "Concept preview"),
  selected: b("Selected work", "Trabajo seleccionado"),
  selectedSide: b("Three ways I help brands create connection and lasting impact.", "Tres formas en las que ayudo a las marcas a conectar y dejar huella."),
  bandTitle: b("Strategy is deciding what matters, then saying it clearly.", "La estrategia es decidir qué importa y luego decirlo claro."),
  bandText: b(
    "I help brands work out what they really stand for, then turn it into positioning, campaigns and messages that travel across markets and languages.",
    "Ayudo a las marcas a descubrir qué defienden de verdad y a convertirlo en posicionamiento, campañas y mensajes que viajan entre mercados e idiomas."
  ),
  aboutMe: b("About me", "Sobre mí"),
  close: b("Let's find your direction.", "Encontremos tu dirección."),
  touch: b("Get in touch", "Escríbeme"),
};

const CASES = [
  { photo: "brand-case1", title: b("Brand positioning", "Posicionamiento de marca"), text: b("Finding a clear place in the market.", "Encontrar un lugar claro en el mercado.") },
  { photo: "brand-case2", title: b("Campaign strategy", "Estrategia de campaña"), text: b("Turning a brand idea into action.", "Convertir una idea de marca en acción.") },
  { photo: "brand-case3", title: b("Global marketing", "Marketing global"), text: b("Bringing teams and markets together.", "Unir equipos y mercados.") },
];

export function BrandWorld() {
  const t = useT();
  const p = getWorld("brand")!.palette;
  const cream = "#F6EEE6";

  return (
    <div className="overflow-x-hidden" style={{ backgroundColor: p.page, color: p.ink }}>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute -right-24 top-40 aspect-square w-[42vw] max-w-[520px] rounded-full" style={{ backgroundColor: p.mid }} />
        <div className="absolute -left-32 bottom-10 aspect-square w-[34vw] max-w-[420px] rounded-full" style={{ backgroundColor: p.mid }} />
        <Container className="relative pb-16 pt-10 md:pt-14">
          <div className="flex items-start justify-between gap-6">
            <div>
              <p className="label">{t(c.label)}</p>
              <h1 className="display mt-4 text-[clamp(3.5rem,9vw,8.5rem)]">
                <span className="block">{t(c.h1a)}</span>
                <span className="block">{t(c.h1b)}</span>
              </h1>
            </div>
            <ul className="hidden border-t pt-3 text-xs font-semibold uppercase leading-relaxed tracking-[0.1em] md:block" style={{ borderColor: p.ink }}>
              {t(c.topics).map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </div>

          {/* Collage */}
          <div className="relative mx-auto mt-10 h-[560px] max-w-5xl md:mt-6 md:h-[520px]">
            <Hand arrow="down-right" className="absolute left-0 top-0 hidden w-44 -rotate-6 text-2xl md:block">
              {t(c.note1)}
            </Hand>
            <div className="lift absolute left-[14%] top-[2%] h-[46%] w-[40%] -rotate-3 md:left-[22%] md:w-[30%]">
              <Photo name="brand-shadow" />
            </div>
            <div className="lift absolute left-[48%] top-[4%] flex h-[40%] w-[44%] rotate-1 flex-col justify-center px-8 md:left-[46%] md:w-[30%]" style={{ backgroundColor: cream }}>
              <ul className="space-y-1 text-sm tracking-[0.18em] md:text-base">
                {t(c.card1).map((x) => (
                  <li key={x} className="uppercase">{x}</li>
                ))}
              </ul>
              <span className="mt-4 block h-px w-10" style={{ backgroundColor: p.ink }} />
            </div>
            <div className="lift absolute left-[34%] top-[30%] h-[40%] w-[26%] rotate-6 md:left-[32%] md:w-[18%]">
              <Photo name="brand-wood" />
            </div>
            <div className="lift absolute right-[2%] top-[28%] h-[24%] w-[28%] rotate-2 md:right-[8%] md:w-[18%]">
              <Photo name="brand-lake" />
            </div>
            <div className="lift absolute bottom-[4%] left-[2%] flex h-[34%] w-[46%] -rotate-6 flex-col justify-center px-6 md:left-[8%] md:w-[26%]" style={{ backgroundColor: cream }}>
              <p className="serif text-[clamp(1.4rem,2.4vw,2rem)] leading-[1.05]">{t(c.card2)}</p>
              <span className="mt-4 block h-px w-10" style={{ backgroundColor: p.ink }} />
            </div>
            <Asterisk className="absolute bottom-[8%] left-[56%] h-28 w-28 md:h-36 md:w-36" color={p.deep} />
            <Hand arrow="down-left" className="absolute bottom-[14%] right-0 w-44 rotate-[-4deg] text-2xl">
              {t(c.note2)}
            </Hand>
            <span className="label absolute -bottom-6 right-0 opacity-70">{t(c.concept)}</span>
          </div>
        </Container>
      </section>

      {/* Selected work */}
      <section style={{ backgroundColor: "#EDB9C7" }}>
        <Container className="py-12 md:py-16">
          <div className="flex flex-col gap-3 border-b pb-5 md:flex-row md:items-end md:justify-between" style={{ borderColor: `${p.ink}33` }}>
            <h2 className="serif text-[clamp(2rem,3.4vw,3rem)] leading-none">{t(c.selected)}</h2>
            <p className="max-w-xs text-xs font-semibold uppercase leading-relaxed tracking-[0.1em] md:text-right">{t(c.selectedSide)}</p>
          </div>
          <div className="mt-8 grid gap-8 md:grid-cols-3">
            {CASES.map((cs) => (
              <div key={cs.photo} className="group block">
                <div className="aspect-[6/5] overflow-hidden">
                  <Photo name={cs.photo} alt={t(cs.title)} className="transition-transform duration-700 ease-soft group-hover:scale-105" />
                </div>
                <h3 className="mt-4 text-lg font-semibold">{t(cs.title)}</h3>
                <p className="text-sm opacity-80">{t(cs.text)}</p>
                <p className="label mt-3 opacity-70">{t(c.concept)}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <RealWork slug="brand" />

      {/* Maroon band */}
      <section style={{ backgroundColor: p.deep, color: "#F7E1E7" }}>
        <Container className="py-12 md:py-16">
          <div className="grid gap-8 md:grid-cols-12 md:items-center">
            <div className="aspect-[4/3] w-32 overflow-hidden md:col-span-2 md:w-auto">
              <Photo name="brand-coast" />
            </div>
            <p className="serif text-[clamp(1.6rem,2.6vw,2.4rem)] leading-[1.1] md:col-span-4">{t(c.bandTitle)}</p>
            <div className="md:col-span-5 md:col-start-8">
              <p className="text-sm leading-relaxed opacity-85">{t(c.bandText)}</p>
              <Link href="/about" className="label mt-4 inline-block border-b border-current pb-1">
                {t(c.aboutMe)} →
              </Link>
            </div>
          </div>
          <Link href="/contact" className="group mt-12 flex items-center justify-between gap-6 border-t pt-10" style={{ borderColor: "#F7E1E733" }}>
            <span className="serif text-[clamp(2rem,4vw,3.5rem)] leading-none">{t(c.close)}</span>
            <span className="hidden h-px flex-1 bg-current opacity-60 md:block" />
            <span className="label whitespace-nowrap">{t(c.touch)} →</span>
          </Link>
        </Container>
      </section>
    </div>
  );
}
