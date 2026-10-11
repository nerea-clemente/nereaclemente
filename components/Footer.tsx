"use client";

import Link from "next/link";
import { Container } from "./Container";
import { useT } from "@/lib/i18n/context";
import { ui } from "@/lib/i18n/strings";
import { site } from "@/lib/site";
import { worlds } from "@/lib/worlds";
import type { Bilingual } from "@/lib/i18n/types";

const connect: Bilingual = { en: "Let's connect.", es: "Conectemos." };

export function Footer() {
  const year = new Date().getFullYear();
  const t = useT();

  return (
    <footer className="bg-ink text-paper">
      <Container>
        <Link href="/contact" className="group flex items-center justify-between gap-6 border-b border-paper/20 py-8 md:py-10">
          <span className="serif text-[clamp(2rem,4vw,3.25rem)] leading-none">{t(connect)}</span>
          <span className="flex items-center gap-3 text-sm text-paper/80 md:text-base">
            <span className="hidden sm:inline">nereaclemente.com / {year}</span>
            <span aria-hidden className="text-2xl transition-transform group-hover:translate-x-1">→</span>
          </span>
        </Link>
        <div className="flex flex-col gap-6 py-8 text-sm md:flex-row md:items-start md:justify-between">
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {ui.nav.primary.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="label text-paper/80 hover:text-paper">
                  {t(item.label)}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/writing" className="label text-paper/80 hover:text-paper">
                {t(ui.footer.writing)}
              </Link>
            </li>
          </ul>
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            {worlds.map((w) => (
              <li key={w.slug}>
                <Link href={`/worlds/${w.slug}`} className="flex items-center gap-2 text-paper/80 hover:text-paper">
                  <span aria-hidden className="h-2 w-2 rounded-full" style={{ backgroundColor: w.palette.mid }} />
                  {t(w.short)}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex gap-5">
            <a href={`mailto:${site.email}`} className="text-paper/80 hover:text-paper">
              Email
            </a>
            <a href={site.linkedin} target="_blank" rel="noreferrer" className="text-paper/80 hover:text-paper">
              LinkedIn
            </a>
            <a href={site.instagram} target="_blank" rel="noreferrer" className="text-paper/80 hover:text-paper">
              Instagram
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
