"use client";

import { Container } from "@/components/Container";
import { Eyebrow, SplitTitle } from "@/components/SectionHeader";
import { useT } from "@/lib/i18n/context";
import { ui } from "@/lib/i18n/strings";
import { site } from "@/lib/site";
import { worlds } from "@/lib/worlds";

export function ContactContent() {
  const t = useT();
  return (
    <section className="pt-14 pb-24 md:pt-24 md:pb-32">
      <Container>
        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-7">
            <Eyebrow>{t(ui.contact.label)}</Eyebrow>
            <SplitTitle
              as="h1"
              className="mt-6 text-[clamp(2.75rem,7vw,7rem)]"
              a={t(ui.contact.titleA)}
              b={t(ui.contact.titleEm)}
            />

            <p className="mt-10 max-w-2xl text-lg leading-relaxed text-muted md:text-xl">
              {t(ui.contact.lede)}
            </p>

            <a href={`mailto:${site.email}`} className="group mt-14 block border-t border-ink pt-8">
              <span className="label text-muted">{t(ui.contact.direct)}</span>
              <span className="mt-3 block break-words font-display-tight text-[clamp(1.75rem,4vw,3rem)] leading-[1.05] text-ink">
                {site.email}{" "}
                <span aria-hidden className="inline-block transition-transform group-hover:translate-x-2">
                  →
                </span>
              </span>
            </a>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 label text-ink">
              <a href={site.linkedin} target="_blank" rel="noreferrer" className="hover:underline">
                LinkedIn ↗
              </a>
              <a href={site.instagram} target="_blank" rel="noreferrer" className="hover:underline">
                Instagram ↗
              </a>
            </div>
          </div>

          <aside className="md:col-span-4 md:col-start-9">
            <div className="border-t border-ink pt-8">
              <div className="flex items-center justify-between">
                <span className="label text-ink">{t(ui.contact.cardTitle)}</span>
                <span className="flex gap-1" aria-hidden>
                  {worlds.map((w) => (
                    <span key={w.slug} className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: w.palette.deep }} />
                  ))}
                </span>
              </div>
              <dl className="mt-6 flex flex-col divide-y divide-line text-base">
                <CardRow label={t(ui.contact.capacity)}>{t(ui.contact.capacityValue)}</CardRow>
                <CardRow label={t(ui.contact.goodFit)}>
                  <ul className="flex flex-col gap-1">
                    {ui.contact.goodFitItems.map((item, i) => (
                      <li key={i}>{t(item)}</li>
                    ))}
                  </ul>
                </CardRow>
                <CardRow label={t(ui.contact.lessFit)}>
                  <ul className="flex flex-col gap-1">
                    {ui.contact.lessFitItems.map((item, i) => (
                      <li key={i}>{t(item)}</li>
                    ))}
                  </ul>
                </CardRow>
                <CardRow label={t(ui.contact.languages)}>{t(ui.contact.languagesValue)}</CardRow>
              </dl>
            </div>
          </aside>
        </div>
      </Container>
    </section>
  );
}

function CardRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-2 py-5 first:pt-0 last:pb-0">
      <dt className="label text-muted">{label}</dt>
      <dd className="text-ink">{children}</dd>
    </div>
  );
}
