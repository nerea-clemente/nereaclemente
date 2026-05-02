"use client";

import { Container } from "@/components/Container";
import { useT } from "@/lib/i18n/context";
import { ui } from "@/lib/i18n/strings";
import { site } from "@/lib/site";

export function ContactContent() {
  const t = useT();
  return (
    <section className="pt-12 pb-24 md:pt-20 md:pb-32">
      <Container>
        <div className="grid gap-16 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-7">
            <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-caps">
              <span className="bg-electric px-2 py-0.5 text-paper">
                {t(ui.contact.badge)}
              </span>
              <span className="text-muted">{t(ui.contact.badgeMeta)}</span>
            </div>

            <h1 className="mt-8 font-display-tight text-[clamp(3rem,8vw,8rem)] leading-[0.92] text-ink">
              {t(ui.contact.titleA)}
              <br />
              {t(ui.contact.titleB)}
              <span className="italic-serif text-electric">
                {t(ui.contact.titleEm)}
              </span>
            </h1>

            <p className="mt-10 max-w-2xl text-lg leading-relaxed text-muted md:text-xl">
              {t(ui.contact.lede)}
            </p>

            <a
              href={`mailto:${site.email}`}
              className="group mt-14 inline-flex flex-col gap-3 border-t border-ink pt-6"
            >
              <span className="font-mono text-[11px] uppercase tracking-caps text-electric">
                {t(ui.contact.direct)}
              </span>
              <span className="font-display-tight text-[clamp(2rem,5vw,4rem)] leading-[1] text-ink transition-colors group-hover:text-electric">
                {site.email}{" "}
                <span
                  aria-hidden
                  className="inline-block transition-transform group-hover:translate-x-2"
                >
                  →
                </span>
              </span>
            </a>

            <div className="mt-10 flex flex-wrap gap-3 font-mono text-[11px] uppercase tracking-caps">
              <a
                href={site.linkedin}
                target="_blank"
                rel="noreferrer"
                className="bg-ink px-3 py-2 text-paper hover:bg-electric"
              >
                LinkedIn ↗
              </a>
              <a
                href={site.instagram}
                target="_blank"
                rel="noreferrer"
                className="bg-ink px-3 py-2 text-paper hover:bg-electric"
              >
                Seafood on Nerea ↗
              </a>
            </div>
          </div>

          <aside className="md:col-span-4 md:col-start-9">
            <div className="bg-ink p-7 text-paper md:p-9">
              <div className="flex items-center justify-between border-b border-paper/15 pb-4">
                <span className="font-mono text-[10px] uppercase tracking-caps text-lemon">
                  {t(ui.contact.cardTitle)}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-caps text-paper/50">
                  2026
                </span>
              </div>
              <div className="mt-5 flex flex-col gap-5 text-sm">
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-caps text-paper/50">
                    {t(ui.contact.capacity)}
                  </div>
                  <p className="mt-1 text-paper">
                    {t(ui.contact.capacityValue)}
                  </p>
                </div>
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-caps text-paper/50">
                    {t(ui.contact.goodFit)}
                  </div>
                  <ul className="mt-1 flex flex-col gap-1 text-paper">
                    {ui.contact.goodFitItems.map((item, i) => (
                      <li key={i}>{t(item)}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-caps text-paper/50">
                    {t(ui.contact.lessFit)}
                  </div>
                  <ul className="mt-1 flex flex-col gap-1 text-paper">
                    {ui.contact.lessFitItems.map((item, i) => (
                      <li key={i}>{t(item)}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-caps text-paper/50">
                    {t(ui.contact.languages)}
                  </div>
                  <p className="mt-1 text-paper">
                    {t(ui.contact.languagesValue)}
                  </p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </Container>
    </section>
  );
}
