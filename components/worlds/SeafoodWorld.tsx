"use client";

import Link from "next/link";
import { Container } from "@/components/Container";
import { RealWork } from "./RealWork";
import { Photo, Sparkle } from "@/components/kit";
import { useT } from "@/lib/i18n/context";
import { ui } from "@/lib/i18n/strings";
import type { Bilingual } from "@/lib/i18n/types";
import { getWorld } from "@/lib/worlds";

const b = <T,>(en: T, es: T): Bilingual<T> => ({ en, es });

const c = {
  label: b("Seafood & Aquaculture", "Seafood y Acuicultura"),
  h1a: b("A different", "Otra"),
  h1b: b("perspective.", "perspectiva."),
  sub: b(
    "Creative communication for people, progress and healthier oceans.",
    "Comunicación creativa para las personas, el progreso y unos océanos más sanos."
  ),
  topics: b(["Science", "Sustainability", "Communication"], ["Ciencia", "Sostenibilidad", "Comunicación"]),
  call1: b("Curiosity drives change", "La curiosidad mueve el cambio"),
  call2: b("Healthier fish", "Peces más sanos"),
  call3: b("Clearer science", "Ciencia más clara"),
  call4: b("A closer look at what happens under the surface.", "Una mirada de cerca a lo que pasa bajo la superficie."),
  selected: b("Selected work", "Trabajo seleccionado"),
  selectedSide: b(
    "Visual stories at the intersection of science, sustainability and a healthier ocean.",
    "Historias visuales donde se cruzan la ciencia, la sostenibilidad y un océano más sano."
  ),
  concept: b("Concept preview", "Concept preview"),
  close: b("Let's talk seafood.", "Hablemos de seafood."),
  closeSub: b("Science, people and the sea, told clearly.", "Ciencia, personas y mar, contados con claridad."),
};

const CASES = [
  {
    n: "01",
    photo: "sea-case1",
    title: b("Fish Health 101", "Fish Health 101"),
    text: b(
      "A social media campaign turning complex fish health science into simple, engaging stories.",
      "Una campaña en redes que convierte la ciencia de la salud de los peces en historias sencillas y atractivas."
    ),
  },
  {
    n: "02",
    photo: "sea-case2",
    title: b("Sustainability, explained", "La sostenibilidad, explicada"),
    text: b(
      "A visual report making aquaculture's progress clear, credible and human.",
      "Un informe visual que hace el progreso de la acuicultura claro, creíble y humano."
    ),
  },
  {
    n: "03",
    photo: "sea-case3",
    title: b("From research to relevance", "De la investigación a lo relevante"),
    text: b(
      "A communications campaign connecting aquaculture research with real-world impact.",
      "Una campaña de comunicación que conecta la investigación acuícola con su impacto real."
    ),
  },
];

/** Wobbly concentric rings, like depth contours on a sea chart. */
function Contours({ className = "", rings = 9, seed = 1 }: { className?: string; rings?: number; seed?: number }) {
  const paths = Array.from({ length: rings }, (_, k) => {
    const r = 14 + k * 9;
    let d = "";
    for (let i = 0; i <= 72; i++) {
      const a = (i / 72) * Math.PI * 2;
      const rr = r + Math.sin(a * 3 + seed + k * 0.6) * 3 + Math.sin(a * 5 + seed * 2) * 1.6;
      d += `${i ? "L" : "M"}${(100 + Math.cos(a) * rr).toFixed(1)} ${(100 + Math.sin(a) * rr).toFixed(1)} `;
    }
    return d + "Z";
  });
  return (
    <svg viewBox="0 0 200 200" aria-hidden className={className} fill="none" stroke="currentColor" strokeWidth="0.6">
      {paths.map((d, i) => (
        <path key={i} d={d} />
      ))}
    </svg>
  );
}

export function SeafoodWorld() {
  const t = useT();
  const w = getWorld("seafood")!;
  const p = w.palette;

  return (
    <div className="overflow-x-hidden" style={{ backgroundColor: p.page, color: p.ink }}>
      {/* Hero */}
      <section className="relative overflow-hidden pb-14 md:pb-20">
        <Contours className="pointer-events-none absolute -left-24 -top-24 h-[420px] w-[420px] text-white/70" />
        <Contours seed={3} className="pointer-events-none absolute -right-20 top-10 h-[360px] w-[360px] text-white/60" />
        <Container className="relative">
          <div className="grid gap-10 pt-10 md:grid-cols-12 md:pt-16">
            <div className="md:col-span-7">
              <p className="label">{t(c.label)}</p>
              <h1 className="display mt-4 text-[clamp(3.25rem,7.4vw,7rem)]">
                <span className="block">{t(c.h1a)}</span>
                <span className="block">{t(c.h1b)}</span>
              </h1>
              <p className="mt-8 max-w-sm text-sm font-semibold uppercase leading-relaxed tracking-[0.06em]">{t(c.sub)}</p>
              <span aria-hidden className="mt-6 block text-3xl">⟶</span>
            </div>
            <div className="hidden md:col-span-4 md:col-start-9 md:block">
              <div className="flex justify-end gap-6">
                <ul className="border-l pl-4 text-sm font-semibold uppercase leading-relaxed tracking-[0.06em]" style={{ borderColor: p.ink }}>
                  {t(c.topics).map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              </div>
              <Sparkle className="ml-auto mt-6 h-7 w-7" color={p.mid} />
            </div>
          </div>

          {/* Fish in a blue circle, with callouts */}
          <div className="relative mt-4 md:-mt-32 md:ml-[38%]">
            <div className="absolute right-[6%] top-1/2 aspect-square w-[78%] -translate-y-1/2 rounded-full md:w-[70%]" style={{ backgroundColor: p.mid }} />
            <div className="relative ml-auto aspect-[3/2] w-full md:w-[96%]">
              <Photo name="sea-fish" alt="" className="[mask-image:linear-gradient(90deg,transparent,black_12%)]" />
            </div>
            <ul className="label pointer-events-none">
              <li className="absolute left-0 top-[18%] hidden md:block">
                <span className="block max-w-[9rem]">{t(c.call1)}</span>
              </li>
              <li className="absolute left-[-6%] top-[62%] hidden md:block">{t(c.call2)}</li>
              <li className="absolute bottom-[-6%] left-[18%] hidden md:block">
                <span className="block max-w-[7rem]">{t(c.call3)}</span>
              </li>
              <li className="absolute -bottom-10 right-0 max-w-[10rem] text-right">{t(c.call4)}</li>
            </ul>
          </div>
          <div className="absolute -bottom-40 -left-24 hidden aspect-square w-[360px] rounded-full md:block" style={{ backgroundColor: p.mid, opacity: 0.85 }}>
            <Contours seed={5} className="h-full w-full text-white/50" />
          </div>
        </Container>
      </section>

      {/* Selected work */}
      <section className="relative" style={{ backgroundColor: p.tint }}>
        <Container className="py-12 md:py-16">
          <div className="grid gap-4 border-b pb-6 md:grid-cols-12 md:items-end" style={{ borderColor: `${p.ink}33` }}>
            <h2 className="display text-[clamp(1.75rem,2.6vw,2.4rem)] uppercase leading-none md:col-span-4">{t(c.selected)}</h2>
            <p className="text-xs font-semibold uppercase leading-relaxed tracking-[0.06em] md:col-span-6 md:col-start-7">{t(c.selectedSide)}</p>
          </div>
          <ol>
            {CASES.map((cs) => (
              <li key={cs.n} className="grid gap-6 border-b py-8 md:grid-cols-12 md:items-center md:py-10" style={{ borderColor: `${p.ink}22` }}>
                <div className="md:col-span-4">
                  <span className="display block text-[clamp(3.5rem,6vw,5.5rem)] leading-none">{cs.n}</span>
                  <h3 className="display mt-2 text-2xl" style={{ color: p.text }}>{t(cs.title)}</h3>
                  <p className="mt-2 max-w-xs text-sm leading-relaxed">{t(cs.text)}</p>
                  <p className="label mt-4">{t(c.concept)} →</p>
                </div>
                <div className="aspect-[5/2] overflow-hidden md:col-span-8">
                  <Photo name={cs.photo} alt={t(cs.title)} />
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <RealWork slug="seafood" />

      {/* Closing */}
      <section style={{ backgroundColor: p.page }}>
        <Container className="grid items-center gap-6 py-10 md:grid-cols-12 md:py-12">
          <div className="flex items-center gap-3 md:col-span-3">
            <Sparkle className="h-5 w-5" color={p.mid} />
            <span className="label">Nerea Clemente</span>
          </div>
          <Link href="/contact" className="group text-center md:col-span-6">
            <span className="serif block text-[clamp(2rem,4vw,3.25rem)] leading-none" style={{ color: p.text }}>
              {t(c.close)}
            </span>
            <span className="label mt-3 block">{t(c.closeSub)}</span>
          </Link>
          <div className="label text-right md:col-span-3">
            {ui.nav.primary.map((n) => (
              <Link key={n.href} href={n.href} className="block hover:underline">
                {t(n.label)}
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
