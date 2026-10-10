"use client";

import Link from "next/link";
import { Container } from "./Container";
import { useT } from "@/lib/i18n/context";
import { ui } from "@/lib/i18n/strings";
import { site } from "@/lib/site";
import { worlds } from "@/lib/worlds";

export function Footer() {
  const year = new Date().getFullYear();
  const t = useT();

  const index = [
    { href: "/", label: ui.footer.home },
    ...ui.nav.primary,
    { href: "/writing", label: ui.footer.writing },
  ];

  return (
    <footer className="mt-32 border-t border-ink bg-paper">
      {/* The five worlds, always one click away */}
      <div className="grid grid-cols-5" aria-hidden>
        {worlds.map((w) => (
          <span key={w.slug} className="block h-2" style={{ backgroundColor: w.palette.deep }} />
        ))}
      </div>
      <Container>
        <div className="grid gap-14 py-16 md:grid-cols-12 md:py-24">
          <div className="md:col-span-6">
            <span className="label text-muted">{t(ui.footer.open)}</span>
            <p className="mt-6 text-[clamp(2.25rem,5vw,4rem)] leading-[0.98] text-ink">
              <span className="block font-display-tight">{t(ui.footer.ctaA)}</span>
              <span className="block serif">{t(ui.footer.ctaB)}</span>
            </p>
            <a
              href={`mailto:${site.email}`}
              className="mt-8 inline-flex items-center gap-2 border-b border-ink pb-1 text-lg text-ink transition-all hover:gap-4 md:text-xl"
            >
              {site.email} <span aria-hidden>→</span>
            </a>
          </div>

          <FooterColumn title={t(ui.footer.index)} className="md:col-span-2 md:col-start-8">
            {index.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-ink hover:underline">
                  {t(item.label)}
                </Link>
              </li>
            ))}
          </FooterColumn>

          <FooterColumn title={t(ui.footer.worlds)} className="md:col-span-2">
            {worlds.map((w) => (
              <li key={w.slug}>
                <Link href={`/worlds/${w.slug}`} className="group flex items-center gap-2 text-ink">
                  <span aria-hidden className="h-2 w-2 rounded-full" style={{ backgroundColor: w.palette.deep }} />
                  <span className="group-hover:underline">{t(w.short)}</span>
                </Link>
              </li>
            ))}
          </FooterColumn>

          <FooterColumn title={t(ui.footer.elsewhere)} className="md:col-span-1">
            <li>
              <a href={site.linkedin} target="_blank" rel="noreferrer" className="text-ink hover:underline">
                LinkedIn
              </a>
            </li>
            <li>
              <a href={site.instagram} target="_blank" rel="noreferrer" className="text-ink hover:underline">
                Instagram
              </a>
            </li>
          </FooterColumn>
        </div>

        <div className="flex flex-col gap-2 border-t border-line py-6 label text-muted md:flex-row md:items-center md:justify-between">
          <span>
            © {year} {site.name}
          </span>
          <span>{t(site.location)}</span>
          <span>{t(ui.footer.set)}</span>
        </div>
      </Container>
    </footer>
  );
}

function FooterColumn({
  title,
  className = "",
  children,
}: {
  title: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={className}>
      <span className="label text-muted">{title}</span>
      <ul className="mt-4 flex flex-col gap-2 text-base">{children}</ul>
    </div>
  );
}
