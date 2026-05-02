"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Container } from "./Container";
import { useLocale, useT } from "@/lib/i18n/context";
import { ui } from "@/lib/i18n/strings";
import { site } from "@/lib/site";

export function Navigation() {
  const pathname = usePathname();
  const t = useT();
  const { locale, setLocale } = useLocale();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <header
        className={`sticky top-0 z-40 border-b transition-colors duration-300 ease-soft ${
          scrolled
            ? "border-line/80 bg-paper/90 backdrop-blur"
            : "border-transparent bg-paper/0"
        }`}
      >
        <Container>
          <div className="flex h-16 items-center justify-between md:h-20">
            <Link
              href="/"
              className="group flex items-baseline gap-3"
              aria-label="Home"
            >
              <span className="font-display text-lg text-ink md:text-xl">
                Nerea Clemente
              </span>
              <span className="hidden italic-serif text-base text-clay md:inline">
                — {t(site.role)}
              </span>
            </Link>

            <div className="hidden items-center gap-8 md:flex">
              <nav aria-label="Primary">
                <ul className="flex items-center gap-7">
                  {ui.nav.primary.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className={`group relative text-[12px] uppercase tracking-caps transition-colors ${
                          isActive(item.href)
                            ? "text-ink"
                            : "text-muted hover:text-ink"
                        }`}
                      >
                        {t(item.label)}
                        <span
                          className={`absolute -bottom-1 left-0 block h-px bg-ink transition-all duration-300 ease-soft ${
                            isActive(item.href)
                              ? "w-full"
                              : "w-0 group-hover:w-full"
                          }`}
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              <LangToggle
                locale={locale}
                setLocale={setLocale}
                ariaLabel={t(ui.nav.toggleLabel)}
              />
            </div>

            <div className="flex items-center gap-3 md:hidden">
              <LangToggle
                locale={locale}
                setLocale={setLocale}
                ariaLabel={t(ui.nav.toggleLabel)}
                compact
              />
              <button
                type="button"
                aria-label={open ? "Close menu" : "Open menu"}
                aria-expanded={open}
                onClick={() => setOpen((v) => !v)}
                className="flex h-10 w-10 flex-col items-center justify-center gap-1.5"
              >
                <span
                  className={`block h-px w-6 bg-ink transition-transform duration-300 ease-soft ${
                    open ? "translate-y-[3px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`block h-px w-6 bg-ink transition-transform duration-300 ease-soft ${
                    open ? "-translate-y-[3px] -rotate-45" : ""
                  }`}
                />
              </button>
            </div>
          </div>
        </Container>
      </header>

      <div
        className={`fixed inset-0 z-30 md:hidden ${
          open ? "pointer-events-auto" : "pointer-events-none"
        }`}
        aria-hidden={!open}
      >
        <div
          className={`absolute inset-0 bg-paper transition-opacity duration-300 ease-soft ${
            open ? "opacity-100" : "opacity-0"
          }`}
        />
        <div
          className={`relative flex h-full flex-col justify-between pt-24 pb-12 transition-transform duration-500 ease-soft ${
            open ? "translate-y-0" : "-translate-y-4"
          }`}
        >
          <Container>
            <nav aria-label="Mobile">
              <ul className="flex flex-col gap-6">
                {ui.nav.primary.map((item, i) => (
                  <li
                    key={item.href}
                    className={`transition-all duration-500 ease-soft ${
                      open
                        ? "translate-y-0 opacity-100"
                        : "translate-y-4 opacity-0"
                    }`}
                    style={{ transitionDelay: `${80 + i * 60}ms` }}
                  >
                    <Link
                      href={item.href}
                      className="font-display-tight text-5xl text-ink"
                    >
                      {t(item.label)}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </Container>
          <Container>
            <div className="flex flex-col gap-2 text-sm text-muted">
              <a href={`mailto:${site.email}`} className="text-ink">
                {site.email}
              </a>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noreferrer"
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
  compact = false,
}: {
  locale: "en" | "es";
  setLocale: (l: "en" | "es") => void;
  ariaLabel: string;
  compact?: boolean;
}) {
  return (
    <div
      role="group"
      aria-label={ariaLabel}
      className={`flex items-baseline gap-1.5 ${compact ? "text-xs" : "text-sm"}`}
    >
      <button
        type="button"
        onClick={() => setLocale("en")}
        aria-pressed={locale === "en"}
        className={`italic-serif transition-colors ${
          locale === "en" ? "text-clay" : "text-muted hover:text-ink"
        }`}
      >
        en
      </button>
      <span className="text-muted">/</span>
      <button
        type="button"
        onClick={() => setLocale("es")}
        aria-pressed={locale === "es"}
        className={`italic-serif transition-colors ${
          locale === "es" ? "text-clay" : "text-muted hover:text-ink"
        }`}
      >
        es
      </button>
    </div>
  );
}
