"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Container } from "./Container";
import { nav, site } from "@/lib/site";

export function Navigation() {
  const pathname = usePathname();
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
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
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
            ? "border-line/80 bg-bone/90 backdrop-blur"
            : "border-transparent bg-bone/0"
        }`}
      >
        <Container>
          <div className="flex h-16 items-center justify-between md:h-20">
            <Link
              href="/"
              className="group flex items-baseline gap-3"
              aria-label="Home"
            >
              <span className="font-display text-xl text-ink md:text-2xl">
                {site.name}
              </span>
              <span className="hidden text-xs uppercase tracking-caps text-muted md:inline">
                {site.role}
              </span>
            </Link>

            <nav aria-label="Primary" className="hidden md:block">
              <ul className="flex items-center gap-8">
                {nav.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`group relative text-sm uppercase tracking-caps transition-colors ${
                        isActive(item.href)
                          ? "text-ink"
                          : "text-muted hover:text-ink"
                      }`}
                    >
                      {item.label}
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

            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
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
        </Container>
      </header>

      <div
        className={`fixed inset-0 z-30 md:hidden ${
          open ? "pointer-events-auto" : "pointer-events-none"
        }`}
        aria-hidden={!open}
      >
        <div
          className={`absolute inset-0 bg-bone transition-opacity duration-300 ease-soft ${
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
                {nav.map((item, i) => (
                  <li
                    key={item.href}
                    className={`transition-all duration-500 ease-soft ${
                      open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                    }`}
                    style={{ transitionDelay: `${80 + i * 60}ms` }}
                  >
                    <Link
                      href={item.href}
                      className="font-display text-5xl text-ink"
                    >
                      {item.label}
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
