"use client";

import Link from "next/link";
import { Container } from "@/components/Container";
import { useT } from "@/lib/i18n/context";
import { ui } from "@/lib/i18n/strings";
import type { Bilingual } from "@/lib/i18n/types";
import { projects } from "@/lib/projects";
import { getWorld, type WorldSlug } from "@/lib/worlds";

const title: Bilingual = { en: "Case studies in this world", es: "Casos de este mundo" };
const empty: Bilingual = {
  en: "Real cases for this world are on their way. Ask me in the meantime. Some of it is easier to show on a call.",
  es: "Los casos reales de este mundo están en camino. Mientras tanto, pregúntame: hay cosas que se enseñan mejor en una llamada.",
};

/** The real projects that live in (or touch) a world, as a calm list. */
export function RealWork({ slug, bg }: { slug: WorldSlug; bg?: string }) {
  const t = useT();
  const w = getWorld(slug)!;
  const list = [
    ...projects.filter((p) => p.world === slug),
    ...projects.filter((p) => p.world !== slug && p.tags?.includes(slug)),
  ];

  return (
    <section style={{ backgroundColor: bg ?? w.palette.page, color: w.palette.ink }}>
      <Container className="py-12 md:py-16">
        <div className="flex items-end justify-between gap-6 border-b pb-4" style={{ borderColor: `${w.palette.ink}40` }}>
          <h2 className="serif text-[clamp(1.75rem,3vw,2.5rem)] leading-none">{t(title)}</h2>
          <span className="label opacity-70">{String(list.length).padStart(2, "0")}</span>
        </div>
        {list.length === 0 ? (
          <p className="serif mt-6 max-w-xl text-lg">{t(empty)}</p>
        ) : (
          <ul>
            {list.map((p, i) => (
              <li key={p.slug}>
                <Link
                  href={`/work/${p.slug}`}
                  className="group grid grid-cols-[2.5rem_1fr_auto] items-baseline gap-4 border-b py-5 md:grid-cols-[3rem_minmax(0,1fr)_minmax(0,1.6fr)_12rem] md:gap-8"
                  style={{ borderColor: `${w.palette.ink}26` }}
                >
                  <span className="label opacity-60">{String(i + 1).padStart(2, "0")}</span>
                  <span className="display text-xl md:text-2xl">{t(p.title)}</span>
                  <span className="hidden text-sm opacity-80 md:block">{t(p.summary)}</span>
                  <span className="label text-right transition-transform group-hover:translate-x-1">
                    {t(ui.categoryLabels[p.category])} · {p.year} →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </Container>
    </section>
  );
}
