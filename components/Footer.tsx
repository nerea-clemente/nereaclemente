"use client";

import Link from "next/link";
import { Container } from "./Container";
import { useT } from "@/lib/i18n/context";
import { ui } from "@/lib/i18n/strings";
import { site } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();
  const t = useT();

  return (
    <footer className="mt-32 bg-marine text-paper">
      <Container>
        <div className="grid gap-16 py-24 md:grid-cols-12 md:py-32">
          <div className="md:col-span-8">
            <p className="text-[11px] uppercase tracking-caps text-lemon">
              {t(ui.footer.open)}
            </p>
            <p className="mt-8 max-w-3xl font-display-tight text-[clamp(2rem,4.5vw,4rem)] leading-[1.05]">
              {t(ui.footer.cta)}{" "}
              <span className="italic-serif text-lemon">
                {t(ui.footer.ctaEm)}
              </span>
            </p>
            <a
              href={`mailto:${site.email}`}
              className="mt-10 inline-flex items-center gap-3 border-b border-lemon pb-1 text-lg text-lemon transition-opacity hover:opacity-80"
            >
              {site.email} <span aria-hidden>→</span>
            </a>
          </div>

          <div className="md:col-span-2">
            <div className="text-[11px] uppercase tracking-caps text-paper/60">
              {t(ui.footer.index)}
            </div>
            <ul className="mt-5 flex flex-col gap-2.5 text-base">
              {ui.nav.primary.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-paper transition-opacity hover:opacity-60"
                  >
                    {t(item.label)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <div className="text-[11px] uppercase tracking-caps text-paper/60">
              {t(ui.footer.elsewhere)}
            </div>
            <ul className="mt-5 flex flex-col gap-2.5 text-base">
              <li>
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="text-paper transition-opacity hover:opacity-60"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={site.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="text-paper transition-opacity hover:opacity-60"
                >
                  Seafood on Nerea
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="text-paper transition-opacity hover:opacity-60"
                >
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="overflow-hidden border-t border-paper/15 py-5">
          <div className="nc-marquee flex w-max gap-12 whitespace-nowrap font-display-wide text-2xl text-paper/70 md:text-3xl">
            {Array.from({ length: 4 }).map((_, i) => (
              <span key={i} className="flex items-center gap-12">
                <span>NEREA CLEMENTE</span>
                <span className="text-lemon">●</span>
                <span className="italic-serif text-lemon">
                  {t(ui.footer.marqueeTagline)}
                </span>
                <span className="text-lemon">●</span>
                <span>EN · ES · VAL · DA</span>
                <span className="text-lemon">●</span>
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-paper/15 py-6 text-[11px] uppercase tracking-caps text-paper/60 md:flex-row md:items-center md:justify-between">
          <span>
            © {year} {site.name}. {t(ui.footer.rights)}
          </span>
          <span>
            {t(site.location)} · {t(ui.footer.set)}
          </span>
        </div>
      </Container>
    </footer>
  );
}
