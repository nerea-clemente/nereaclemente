"use client";

import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/SectionHeader";
import { Button } from "@/components/Button";
import { useT } from "@/lib/i18n/context";
import { ui } from "@/lib/i18n/strings";
import { principles, sectors } from "@/lib/expertise";
import { site } from "@/lib/site";

export function AboutContent() {
  const t = useT();
  return (
    <>
      <section className="pt-16 pb-20 md:pt-24 md:pb-28">
        <Container>
          <div className="grid gap-16 md:grid-cols-12 md:gap-12">
            <div className="md:col-span-7">
              <Eyebrow>{t(ui.about.eyebrow)}</Eyebrow>
              <h1 className="mt-4 font-display-tight text-[clamp(2.75rem,7vw,7rem)] leading-[0.95] text-ink">
                {t(ui.about.titleL1)} {t(ui.about.titleL2)}{" "}
                {t(ui.about.titleL3)}{" "}
                <span className="italic-serif text-clay">
                  {t(ui.about.titleL4)}
                </span>
              </h1>
              <p className="mt-12 max-w-2xl text-lg leading-relaxed text-muted md:text-xl">
                {t(ui.about.intro)}
              </p>
            </div>
            <figure className="md:col-span-5">
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-chalk">
                <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-8">
                  <span className="italic-serif text-base text-clay">
                    {t(ui.about.portraitTag)}
                  </span>
                  <div className="flex items-end justify-between">
                    <div className="font-display-tight text-7xl leading-[0.85] text-ink md:text-8xl">
                      NC
                    </div>
                    <div className="text-right italic-serif text-sm text-muted">
                      <div>{t(ui.about.portraitPlaceholder)}</div>
                      <div>{t(ui.about.portraitNote)}</div>
                    </div>
                  </div>
                </div>
              </div>
              <figcaption className="mt-4 flex items-center justify-between italic-serif text-base text-muted">
                <span>{t(ui.about.portraitCaption)}</span>
                <span>{t(ui.about.portraitCredit)}</span>
              </figcaption>
            </figure>
          </div>
        </Container>
      </section>

      <section className="bg-chalk py-24 md:py-32">
        <Container>
          <div className="grid gap-16 md:grid-cols-12 md:gap-20">
            <div className="md:col-span-5">
              <Eyebrow>{t(ui.about.bgEyebrow)}</Eyebrow>
              <h2 className="mt-4 font-display-tight text-[clamp(2rem,4.5vw,3.5rem)] leading-[1] text-ink">
                {t(ui.about.bgTitle)}
              </h2>
              <div className="mt-10 flex flex-col gap-6 text-base leading-relaxed text-muted">
                <p>{t(ui.about.bgP1)}</p>
                <p>
                  {t(ui.about.bgP2a)}
                  <span className="italic-serif text-ink">
                    {t(ui.about.bgP2em1)}
                  </span>
                  {t(ui.about.bgP2b)}
                  <span className="italic-serif text-ink">
                    {t(ui.about.bgP2em2)}
                  </span>
                  {t(ui.about.bgP2c)}
                </p>
                <p>{t(ui.about.bgP3)}</p>
              </div>
            </div>

            <div className="md:col-span-6 md:col-start-7">
              <Eyebrow>{t(ui.about.princEyebrow)}</Eyebrow>
              <h2 className="mt-4 font-display-tight text-[clamp(2rem,4.5vw,3.5rem)] leading-[1] text-ink">
                {t(ui.about.princTitleA)}{" "}
                <span className="italic-serif text-clay">
                  {t(ui.about.princTitleEm)}
                </span>
              </h2>
              <ol className="mt-10 border-t border-line">
                {principles.map((p) => (
                  <li
                    key={p.n}
                    className="grid grid-cols-[3rem_1fr] items-baseline gap-4 border-b border-line py-7 md:gap-8"
                  >
                    <span className="italic-serif text-lg text-muted">
                      {p.n}
                    </span>
                    <div>
                      <h3 className="font-display-tight text-2xl text-ink md:text-3xl">
                        {t(p.title)}
                      </h3>
                      <p className="mt-3 max-w-reading text-base leading-relaxed text-muted">
                        {t(p.body)}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-24 md:py-32">
        <Container>
          <div className="grid gap-10 md:grid-cols-12 md:gap-16">
            <div className="md:col-span-4">
              <Eyebrow>{t(ui.about.sectorsEyebrow)}</Eyebrow>
              <h2 className="mt-4 font-display-tight text-[clamp(2rem,4.5vw,3.5rem)] leading-[1] text-ink">
                {t(ui.about.sectorsTitleA)}{" "}
                <span className="italic-serif text-clay">
                  {t(ui.about.sectorsTitleEm)}
                </span>{" "}
                {t(ui.about.sectorsTitleB)} {t(ui.about.sectorsTitleC)}
              </h2>
            </div>
            <div className="md:col-span-7 md:col-start-6">
              <ul className="flex flex-wrap gap-x-3 gap-y-1 italic-serif text-lg text-ink md:text-xl">
                {sectors.map((s, i) => (
                  <li key={i}>
                    {i > 0 && <span className="mr-3 text-muted">·</span>}
                    {t(s)}
                  </li>
                ))}
              </ul>
              <p className="mt-10 max-w-reading text-lg leading-relaxed text-muted">
                {t(ui.about.sectorsBody)}
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-chalk py-24 md:py-32">
        <Container>
          <div className="mb-12 grid gap-8 md:grid-cols-12">
            <div className="md:col-span-5">
              <Eyebrow>{t(ui.about.servicesEyebrow)}</Eyebrow>
              <h2 className="mt-4 font-display-tight text-[clamp(2rem,4.5vw,3.5rem)] leading-[1] text-ink">
                {t(ui.about.servicesTitleA)}{" "}
                <span className="italic-serif text-clay">
                  {t(ui.about.servicesTitleEm)}
                </span>
              </h2>
            </div>
          </div>
          <div className="grid border-t border-line md:grid-cols-2">
            {ui.about.services.map((item, i) => (
              <div
                key={item.n}
                className={`flex flex-col gap-3 border-b border-line p-8 md:p-12 ${
                  i % 2 === 0 ? "md:border-r" : ""
                }`}
              >
                <span className="italic-serif text-base text-muted">
                  {item.n}
                </span>
                <h3 className="font-display-tight text-2xl text-ink md:text-3xl">
                  {t(item.t)}
                </h3>
                <p className="text-base leading-relaxed text-muted">
                  {t(item.d)}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-24 md:py-32">
        <Container size="narrow">
          <div className="border-t border-line pt-14">
            <Eyebrow>{t(ui.about.ctaEyebrow)}</Eyebrow>
            <p className="mt-6 font-display-tight text-[clamp(1.75rem,4vw,3rem)] leading-[1.05] text-ink">
              {t(ui.about.ctaText)}
              <span className="italic-serif text-clay">
                {t(ui.about.ctaEm)}
              </span>
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button href="/contact">{t(ui.common.contact)}</Button>
              <Button href={`mailto:${site.email}`} variant="ghost" external>
                {site.email}
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
