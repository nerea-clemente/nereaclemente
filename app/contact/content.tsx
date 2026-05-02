"use client";

import { Container } from "@/components/Container";
import { useT } from "@/lib/i18n/context";
import { ui } from "@/lib/i18n/strings";
import { site } from "@/lib/site";

export function ContactContent() {
  const t = useT();
  return (
    <section className="pt-16 pb-24 md:pt-24 md:pb-32">
      <Container>
        <div className="grid gap-16 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-7">
            <p className="italic-serif text-base text-clay md:text-lg">
              {t(ui.contact.badge)} {t(ui.contact.badgeMeta)}
            </p>

            <h1 className="mt-4 font-display-tight text-[clamp(2.75rem,7vw,7rem)] leading-[0.95] text-ink">
              {t(ui.contact.titleA)} {t(ui.contact.titleB)}
              <span className="italic-serif text-clay">
                {t(ui.contact.titleEm)}
              </span>
            </h1>

            <p className="mt-10 max-w-2xl text-lg leading-relaxed text-muted md:text-xl">
              {t(ui.contact.lede)}
            </p>

            <a
              href={`mailto:${site.email}`}
              className="group mt-14 block border-t border-line pt-8"
            >
              <span className="italic-serif text-base text-clay">
                {t(ui.contact.direct)}
              </span>
              <span className="mt-2 block font-display-tight text-[clamp(1.75rem,4vw,3rem)] leading-[1.05] text-ink transition-colors group-hover:text-clay">
                {site.email}{" "}
                <span
                  aria-hidden
                  className="inline-block transition-transform group-hover:translate-x-2"
                >
                  →
                </span>
              </span>
            </a>

            <div className="mt-10 flex flex-wrap items-baseline gap-x-5 gap-y-2 italic-serif text-base text-ink">
              <a
                href={site.linkedin}
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-clay"
              >
                LinkedIn ↗
              </a>
              <span className="text-muted">·</span>
              <a
                href={site.instagram}
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-clay"
              >
                Seafood on Nerea ↗
              </a>
            </div>
          </div>

          <aside className="md:col-span-4 md:col-start-9">
            <div className="border-t border-line pt-8">
              <p className="italic-serif text-base text-clay">
                {t(ui.contact.cardTitle)}
              </p>
              <dl className="mt-6 flex flex-col divide-y divide-line text-base">
                <div className="flex flex-col gap-1.5 pb-5">
                  <dt className="italic-serif text-base text-muted">
                    {t(ui.contact.capacity)}
                  </dt>
                  <dd className="text-ink">
                    {t(ui.contact.capacityValue)}
                  </dd>
                </div>
                <div className="flex flex-col gap-1.5 py-5">
                  <dt className="italic-serif text-base text-muted">
                    {t(ui.contact.goodFit)}
                  </dt>
                  <dd>
                    <ul className="flex flex-col gap-1 text-ink">
                      {ui.contact.goodFitItems.map((item, i) => (
                        <li key={i}>{t(item)}</li>
                      ))}
                    </ul>
                  </dd>
                </div>
                <div className="flex flex-col gap-1.5 py-5">
                  <dt className="italic-serif text-base text-muted">
                    {t(ui.contact.lessFit)}
                  </dt>
                  <dd>
                    <ul className="flex flex-col gap-1 text-ink">
                      {ui.contact.lessFitItems.map((item, i) => (
                        <li key={i}>{t(item)}</li>
                      ))}
                    </ul>
                  </dd>
                </div>
                <div className="flex flex-col gap-1.5 pt-5">
                  <dt className="italic-serif text-base text-muted">
                    {t(ui.contact.languages)}
                  </dt>
                  <dd className="text-ink">
                    {t(ui.contact.languagesValue)}
                  </dd>
                </div>
              </dl>
            </div>
          </aside>
        </div>
      </Container>
    </section>
  );
}
