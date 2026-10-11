"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Container } from "./Container";
import { useLocale, useT } from "@/lib/i18n/context";
import { ui } from "@/lib/i18n/strings";
import { site } from "@/lib/site";
import { worlds } from "@/lib/worlds";
import { useActiveWorld } from "@/lib/useActiveWorld";

export function Navigation() {
  const pathname = usePathname();
  const t = useT();
  const { locale, setLocale } = useLocale();
  const world = useActiveWorld();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    pathname.startsWith(href) ||
    (href === "/work" && pathname.startsWith("/worlds"));

  // The small indicator takes the colour of the active world; ink elsewhere.
  const dot = world?.palette.mid ?? "#141414";
  // On a world page the bar takes that world's paper and ink.
  const bar = world ? { backgroundColor: world.palette.page, color: world.palette.ink } : undefined;

  return (
    <>
      <header
        className={`world-ease sticky top-0 z-40 ${world ? "border-b border-black/10" : "border-b border-line bg-paper/95 backdrop-blur"}`}
        style={bar}
      >
        <Container>
          <div className="flex h-16 items-center justify-between md:h-[72px]">
            <Link href="/" className="flex items-center gap-3" aria-label="Nerea Clemente — Home">
              <span
                aria-hidden
                className="world-ease block h-2.5 w-2.5 rounded-full"
                style={{ backgroundColor: dot }}
              />
              <span className="cond text-[1.35rem] leading-none tracking-[0.01em]">Nerea Clemente</span>
              {world && (
                <span className="label hidden opacity-60 lg:inline">
                  <span className="sr-only">{t(ui.nav.activeWorld)}: </span>
                  — {world.n} {t(world.short)}
                </span>
              )}
            </Link>

            <div className="hidden items-center gap-10 md:flex">
              <nav aria-label="Primary">
                <ul className="flex items-center gap-8">
                  {ui.nav.primary.map((item) => {
                    const active = isActive(item.href);
                    return (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          aria-current={active ? "page" : undefined}
                          className={`group relative label transition-opacity ${
                            active ? "" : "opacity-60 hover:opacity-100"
                          }`}
                        >
                          {t(item.label)}
                          <span
                            aria-hidden
                            className={`world-ease absolute -bottom-1.5 left-0 block h-[2px] transition-all duration-300 ease-soft ${
                              active ? "w-full" : "w-0 group-hover:w-full"
                            }`}
                            style={{ backgroundColor: dot }}
                          />
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </nav>
              <LangToggle
                locale={locale}
                setLocale={setLocale}
                ariaLabel={t(ui.nav.toggleLabel)}
              />
            </div>

            <div className="flex items-center gap-4 md:hidden">
              <LangToggle
                locale={locale}
                setLocale={setLocale}
                ariaLabel={t(ui.nav.toggleLabel)}
              />
              <button
                type="button"
                aria-label={open ? t(ui.nav.menuClose) : t(ui.nav.menuOpen)}
                aria-expanded={open}
                onClick={() => setOpen((v) => !v)}
                className="flex h-10 w-10 flex-col items-center justify-center gap-1.5"
              >
                <span
                  className={`block h-[2px] w-6 bg-ink transition-transform duration-300 ease-soft ${
                    open ? "translate-y-[4px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`block h-[2px] w-6 bg-ink transition-transform duration-300 ease-soft ${
                    open ? "-translate-y-[4px] -rotate-45" : ""
                  }`}
                />
              </button>
            </div>
          </div>
        </Container>
      </header>

      <div
        className={`fixed inset-0 z-30 md:hidden ${
          open ? "visible" : "invisible pointer-events-none"
        }`}
        aria-hidden={!open}
      >
        <div
          className={`absolute inset-0 bg-paper transition-opacity duration-300 ease-soft ${
            open ? "opacity-100" : "opacity-0"
          }`}
        />
        <div
          className={`relative flex h-full flex-col justify-between pt-24 pb-10 transition-all duration-500 ease-soft ${
            open ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
          }`}
        >
          <Container>
            <nav aria-label="Mobile">
              <ul className="flex flex-col gap-4">
                {ui.nav.primary.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      tabIndex={open ? 0 : -1}
                      className="font-display-tight text-5xl text-ink"
                    >
                      {t(item.label)}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <ul className="mt-12 grid grid-cols-5 gap-2">
              {worlds.map((w) => (
                <li key={w.slug}>
                  <Link
                    href={`/worlds/${w.slug}`}
                    tabIndex={open ? 0 : -1}
                    className="flex aspect-square items-start p-2 label"
                    style={{ backgroundColor: w.palette.deep, color: w.palette.on }}
                    aria-label={t(w.name)}
                  >
                    {w.n}
                  </Link>
                </li>
              ))}
            </ul>
          </Container>
          <Container>
            <div className="flex flex-col gap-2 text-sm">
              <a href={`mailto:${site.email}`} tabIndex={open ? 0 : -1} className="text-ink">
                {site.email}
              </a>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noreferrer"
                tabIndex={open ? 0 : -1}
                className="text-ink"
              >
                LinkedIn
              </a>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
}

function LangToggle({
  locale,
  setLocale,
  ariaLabel,
}: {
  locale: "en" | "es";
  setLocale: (l: "en" | "es") => void;
  ariaLabel: string;
}) {
  return (
    <div role="group" aria-label={ariaLabel} className="flex items-center gap-1.5 label">
      {(["en", "es"] as const).map((l, i) => (
        <span key={l} className="flex items-center gap-1.5">
          {i > 0 && <span className="text-line">/</span>}
          <button
            type="button"
            onClick={() => setLocale(l)}
            aria-pressed={locale === l}
            className={`transition-opacity ${
              locale === l ? "" : "opacity-50 hover:opacity-100"
            }`}
          >
            {l}
          </button>
        </span>
      ))}
    </div>
  );
}
