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
      <section className="pt-12 pb-20 md:pt-20 md:pb-24">
        <Container>
          <div className="grid gap-16 md:grid-cols-12 md:gap-12">
            <div className="md:col-span-7">
              <Eyebrow>{t(ui.about.eyebrow)}</Eyebrow>
              <h1 className="mt-8 font-display-tight text-[clamp(3rem,8vw,8rem)] leading-[0.92] text-ink">
                {t(ui.about.titleL1)}
                <br />
                {t(ui.about.titleL2)}
                <br />
                {t(ui.about.titleL3)}
                <br />
                <span className="italic-serif text-electric">
                  {t(ui.about.titleL4)}
                </span>
              </h1>
              <p className="mt-12 max-w-2xl text-lg leading-relaxed text-muted md:text-xl">
                {t(ui.about.intro)}
              </p>
            </div>
            <figure className="md:col-span-5">
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-marine text-paper">
                <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-8">
                  <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-caps">
                    <span className="bg-lemon px-2 py-0.5 text-ink">
                      {t(ui.about.portraitTag)}
                    </span>
                    <span className="text-paper/70">№ 26—04</span>
                  </div>
                  <div className="flex items-end justify-between">
                    <div className="font-display-tight text-7xl leading-[0.85] md:text-8xl">
                      NC
                    </div>
                    <div className="text-right font-mono text-[10px] uppercase tracking-caps text-lemon">
                      <div>{t(ui.about.portraitPlaceholder)}</div>
                      <div>{t(ui.about.portraitNote)}</div>
                    </div>
                  </div>
                </div>
              </div>
              <figcaption className="mt-4 flex items-center justify-between font-mono text-[11px] uppercase tracking-caps text-muted">
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
              <h2 className="mt-5 font-display-tight text-[clamp(2rem,4.5vw,3.75rem)] leading-[1] text-ink">
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
              <h2 className="mt-5 font-display-tight text-[clamp(2rem,4.5vw,3.75rem)] leading-[1] text-ink">
                {t(ui.about.princTitleA)}
                <br />
                <span className="italic-serif text-electric">
                  {t(ui.about.princTitleEm)}
                </span>
              </h2>
              <ol className="mt-10 border-t border-ink">
                {principles.map((p) => (
                  <li
                    key={p.n}
                    className="grid grid-cols-[3rem_1fr] gap-4 border-b border-ink py-7 md:gap-8"
                  >
                    <span className="font-mono text-[11px] uppercase tracking-caps text-electric">
                      № {p.n}
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

      <section className="bg-lemon py-20 md:py-28">
        <Container>
          <div className="grid gap-10 md:grid-cols-12 md:gap-16">
            <div className="md:col-span-4">
              <span className="font-mono text-[11px] uppercase tracking-caps text-marine">
                {t(ui.about.sectorsEyebrow)}
              </span>
              <h2 className="mt-5 font-display-tight text-[clamp(2rem,4.5vw,3.75rem)] leading-[1] text-ink">
                {t(ui.about.sectorsTitleA)}
                <br />
                <span className="italic-serif">{t(ui.about.sectorsTitleEm)}</span>
                {t(ui.about.sectorsTitleB)}
                <br />
                {t(ui.about.sectorsTitleC)}
              </h2>
            </div>
            <div className="md:col-span-7">
              <ul className="flex flex-wrap gap-2">
                {sectors.map((s, i) => (
                  <li
                    key={i}
                    className="border-2 border-ink bg-lemon px-4 py-2 font-mono text-[11px] uppercase tracking-caps text-ink"
                  >
                    {t(s)}
                  </li>
                ))}
              </ul>
              <p className="mt-10 max-w-reading text-lg leading-relaxed text-ink">
                {t(ui.about.sectorsBody)}
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-24 md:py-32">
        <Container>
          <div className="mb-12 grid gap-8 md:grid-cols-12">
            <div className="md:col-span-5">
              <Eyebrow>{t(ui.about.servicesEyebrow)}</Eyebrow>
              <h2 className="mt-5 font-display-tight text-[clamp(2rem,4.5vw,3.75rem)] leading-[1] text-ink">
                {t(ui.about.servicesTitleA)}
                <br />
                <span className="italic-serif text-electric">
                  {t(ui.about.servicesTitleEm)}
                </span>
              </h2>
            </div>
          </div>
          <div className="grid border-t border-ink md:grid-cols-2">
            {ui.about.services.map((item, i) => (
              <div
                key={item.n}
                className={`flex flex-col gap-3 border-b border-ink p-8 md:p-12 ${
                  i % 2 === 0 ? "md:border-r" : ""
                }`}
              >
                <span className="font-mono text-[11px] uppercase tracking-caps text-electric">
                  № {item.n}
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
          <div className="border-t-2 border-ink pt-14">
            <Eyebrow>{t(ui.about.ctaEyebrow)}</Eyebrow>
            <p className="mt-6 font-display-tight text-[clamp(2rem,5vw,4rem)] leading-[1] text-ink">
              {t(ui.about.ctaText)}
              <span className="italic-serif text-electric">
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
