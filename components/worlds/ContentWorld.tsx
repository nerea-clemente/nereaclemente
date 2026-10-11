"use client";

import Link from "next/link";
import type { CSSProperties } from "react";
import { Container } from "@/components/Container";
import { Asterisk, Hand, Photo } from "@/components/kit";
import { useT } from "@/lib/i18n/context";
import { ui } from "@/lib/i18n/strings";
import type { Bilingual } from "@/lib/i18n/types";
import { getWorld } from "@/lib/worlds";

const b = <T,>(en: T, es: T): Bilingual<T> => ({ en, es });

const c = {
  h1: b(["Made to", "make you", "look."], ["Hecho para", "que", "mires."]),
  sub: b("Content, campaigns and stories that connect.", "Contenido, campañas e historias que conectan."),
  note1: b("Same ideas, brighter places", "Mismas ideas, sitios más luminosos"),
  side: b(["Social", "Video", "Words", "Ideas", "People", "Culture"], ["Social", "Vídeo", "Palabras", "Ideas", "Personas", "Cultura"]),
  selected: b("Selected work", "Trabajo seleccionado"),
  concept: b("Concept preview", "Concept preview"),
  closeNote: b("Same ideas, brighter places", "Mismas ideas, sitios más luminosos"),
  close: b("Let's make something worth sharing.", "Hagamos algo que merezca compartirse."),
};

const CASES = [
  { n: "01", photo: "content-case1", title: b("Campaigns & social", "Campañas y redes"), text: b("Ideas shaped for the right audience.", "Ideas pensadas para la audiencia adecuada.") },
  { n: "02", photo: "content-case2", title: b("Video & storytelling", "Vídeo y storytelling"), text: b("Stories designed to move.", "Historias pensadas para mover.") },
  { n: "03", photo: "content-case3", title: b("Words that connect", "Palabras que conectan"), text: b("Clear copy with a point of view.", "Textos claros con punto de vista.") },
];

/** A taped print: photo in a frame with a strip of tape on top. */
function Print({ name, className = "", style }: { name: string; className?: string; style?: CSSProperties }) {
  return (
    <div className={`tape lift absolute ${className}`} style={{ ["--tape" as string]: "rgba(240,100,46,0.85)", ...style }}>
      <Photo name={name} />
    </div>
  );
}

export function ContentWorld() {
  const t = useT();
  const p = getWorld("content")!.palette;

  return (
    <div className="overflow-x-hidden" style={{ backgroundColor: p.page, color: p.ink }}>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <Container className="relative grid gap-8 pb-14 pt-10 md:grid-cols-12 md:pb-20 md:pt-14">
          <div className="relative z-10 md:col-span-6">
            <h1 className="display text-[clamp(3.5rem,8.4vw,8rem)]">
              {t(c.h1).map((l) => (
                <span key={l} className="block">{l}</span>
              ))}
            </h1>
            <Asterisk className="absolute right-[4%] top-[42%] h-24 w-24 md:h-32 md:w-32" color={p.deep} />
            <div className="mt-8 flex items-start gap-8">
              <p className="max-w-[14rem] text-lg leading-snug">{t(c.sub)}</p>
              <Hand arrow="right" className="w-28 rotate-[-4deg] text-lg uppercase">
                {t(c.note1)}
              </Hand>
            </div>
          </div>

          {/* Collage */}
          <div className="relative h-[520px] md:col-span-6 md:h-auto md:min-h-[600px]">
            <Print name="content-face" className="right-[26%] top-0 h-[52%] w-[54%] rotate-[3deg]" />
            <Print name="content-poster" className="right-0 top-[22%] h-[64%] w-[34%] rotate-[3deg]" />
            <div className="lift absolute bottom-[4%] right-[34%] h-[46%] w-[30%] overflow-hidden rounded-[1.4rem] border-[6px] border-[#141414]">
              <Photo name="content-phone" />
            </div>
            <ul className="hand absolute -right-2 top-0 hidden text-lg uppercase leading-tight lg:block lg:-right-10">
              {t(c.side).map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </div>
        </Container>
        <div className="relative z-10 -mt-28 hidden pb-12 md:block">
          <Container>
            <div className="tape lift relative h-36 w-[48%] -rotate-[3deg]" style={{ ["--tape" as string]: "rgba(240,100,46,0.85)" }}>
              <Photo name="content-film" />
            </div>
          </Container>
        </div>
      </section>

      {/* Selected work */}
      <section style={{ backgroundColor: p.tint }}>
        <Container className="py-12 md:py-16">
          <p className="label">{t(c.selected)}</p>
          <ol className="mt-6">
            {CASES.map((cs) => (
              <li key={cs.n} className="grid gap-6 border-t border-black/10 py-8 md:grid-cols-12 md:items-center">
                <div className="md:col-span-3">
                  <span className="serif block text-[clamp(3rem,5vw,4.5rem)] leading-none" style={{ color: p.deep }}>{cs.n}</span>
                  <h3 className="serif mt-2 text-2xl font-semibold leading-tight">{t(cs.title)}</h3>
                  <p className="mt-1 text-sm">{t(cs.text)}</p>
                </div>
                <div className="md:col-span-9">
                  <div className="aspect-[3/1] overflow-hidden">
                    <Photo name={cs.photo} alt={t(cs.title)} />
                  </div>
                  <p className="label mt-2 text-right">{t(c.concept)} →</p>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* Closing on warm water */}
      <section
        className="relative overflow-hidden"
        style={{ background: `radial-gradient(120% 140% at 30% 0%, ${p.light} 0%, ${p.mid} 45%, ${p.deep} 100%)` }}
      >
        <div className="water absolute inset-0 opacity-40 mix-blend-soft-light" />
        <Container className="relative grid gap-6 py-14 md:grid-cols-12 md:items-center md:py-20">
          <Hand className="text-2xl uppercase md:col-span-3">{t(c.closeNote)}</Hand>
          <Link href="/contact" className="group text-center md:col-span-6">
            <span className="serif block text-[clamp(2rem,3.6vw,3rem)] leading-[1.05]">{t(c.close)}</span>
            <span className="label mt-3 block">Nerea Clemente / 2026</span>
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
