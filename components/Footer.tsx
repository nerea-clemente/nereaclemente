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
    <footer className="mt-32 border-t border-line bg-paper">
      <Container>
        <div className="grid gap-16 py-20 md:grid-cols-12 md:py-24">
          <div className="md:col-span-7">
            <p className="italic-serif text-base text-clay md:text-lg">
              {t(ui.footer.open)}
            </p>
            <p className="mt-6 max-w-2xl font-display-tight text-[clamp(1.75rem,3.5vw,3rem)] leading-[1.1] text-ink">
              {t(ui.footer.cta)}{" "}
              <span className="italic-serif text-clay">
                {t(ui.footer.ctaEm)}
              </span>
            </p>
            <a
              href={`mailto:${site.email}`}
              className="mt-8 inline-flex items-baseline gap-2 italic-serif text-xl text-ink transition-colors hover:text-clay md:text-2xl"
            >
              {site.email} <span aria-hidden>→</span>
            </a>
          </div>

          <div className="md:col-span-2 md:col-start-9">
            <div className="italic-serif text-base text-muted">
              {t(ui.footer.index)}
            </div>
            <ul className="mt-4 flex flex-col gap-2 text-base">
              {ui.nav.primary.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-ink transition-colors hover:text-clay"
                  >
                    {t(item.label)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2 md:col-start-11">
            <div className="italic-serif text-base text-muted">
              {t(ui.footer.elsewhere)}
            </div>
            <ul className="mt-4 flex flex-col gap-2 text-base">
              <li>
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="text-ink transition-colors hover:text-clay"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={site.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="text-ink transition-colors hover:text-clay"
                >
                  Seafood on Nerea
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-line py-6 text-sm text-muted md:flex-row md:items-center md:justify-between">
          <span>
            © {year} {site.name}.
          </span>
          <span className="italic-serif">{t(site.location)}</span>
        </div>
      </Container>
    </footer>
  );
}
