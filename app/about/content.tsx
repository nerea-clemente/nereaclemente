"use client";

import Link from "next/link";
import { Container } from "@/components/Container";
import { Eyebrow, SplitTitle } from "@/components/SectionHeader";
import { Button } from "@/components/Button";
import { Photo } from "@/components/kit";
import { useT } from "@/lib/i18n/context";
import { ui } from "@/lib/i18n/strings";
import { principles } from "@/lib/expertise";
import { site } from "@/lib/site";
import { worlds } from "@/lib/worlds";

export function AboutContent() {
  const t = useT();
  return (
    <>
      <section className="pt-14 pb-20 md:pt-24 md:pb-28">
        <Container>
          <div className="grid gap-16 md:grid-cols-12 md:gap-12">
            <div className="md:col-span-7">
              <Eyebrow>{t(ui.about.label)}</Eyebrow>
              <SplitTitle
                as="h1"
                className="mt-6 text-[clamp(2.75rem,6.5vw,6.25rem)]"
                a={t(ui.about.titleA)}
                b={t(ui.about.titleEm)}
              />
              <p className="mt-12 max-w-2xl text-lg leading-relaxed text-muted md:text-xl">
                {t(ui.about.intro)}
              </p>
            </div>
            <figure className="md:col-span-5">
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-soft">
                <Photo name="portrait" alt="Nerea Clemente" position="center 30%" className="grayscale" />
                <div className="absolute bottom-0 left-0 grid w-full grid-cols-5" aria-hidden>
                  {worlds.map((w) => (
                    <span key={w.slug} className="block h-2" style={{ backgroundColor: w.palette.mid }} />
                  ))}
                </div>
              </div>
              <figcaption className="mt-4 label text-muted">
                {t(ui.about.portraitCaption)}
              </figcaption>
            </figure>
          </div>
        </Container>
      </section>

      <section className="bg-ink py-24 text-paper md:py-32">
        <Container>
          <div className="grid gap-16 md:grid-cols-12 md:gap-20">
            <div className="md:col-span-5">
              <span className="label text-paper/60">{t(ui.about.bgLabel)}</span>
              <h2 className="mt-4 font-display-tight text-[clamp(2rem,4.5vw,3.5rem)] leading-[1]">
                {t(ui.about.bgTitle)}
              </h2>
              <div className="mt-10 flex flex-col gap-6 text-base leading-relaxed text-paper/75">
                <p>{t(ui.about.bgP1)}</p>
                <p>
                  {t(ui.about.bgP2a)}
                  <span className="serif text-lg text-paper">{t(ui.about.bgP2em1)}</span>
                  {t(ui.about.bgP2b)}
                  <span className="serif text-lg text-paper">{t(ui.about.bgP2em2)}</span>
                  {t(ui.about.bgP2c)}
                </p>
                <p>{t(ui.about.bgP3)}</p>
                <p>{t(ui.about.bgP4)}</p>
              </div>
            </div>

            <div className="md:col-span-6 md:col-start-7">
              <span className="label text-paper/60">{t(ui.about.princLabel)}</span>
              <h2 className="mt-4 text-[clamp(2rem,4.5vw,3.5rem)] leading-[1]">
                <span className="font-display-tight">{t(ui.about.princTitleA)}</span>{" "}
                <span className="serif">{t(ui.about.princTitleEm)}</span>
              </h2>
              <ol className="mt-10 border-t border-paper/20">
                {principles.map((p) => (
                  <li
                    key={p.n}
                    className="grid grid-cols-[3rem_1fr] items-baseline gap-4 border-b border-paper/20 py-7 md:gap-8"
                  >
                    <span className="serif text-2xl text-paper/60">{p.n}</span>
                    <div>
                      <h3 className="font-display-tight text-2xl md:text-3xl">{t(p.title)}</h3>
                      <p className="mt-3 max-w-reading text-base leading-relaxed text-paper/75">
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
          <div className="mb-12">
            <Eyebrow>{t(ui.about.worldsLabel)}</Eyebrow>
            <h2 className="mt-4 text-[clamp(2rem,4.5vw,3.5rem)] leading-[1] text-ink">
              <span className="font-display-tight">{t(ui.about.worldsTitleA)}</span>{" "}
              <span className="serif">{t(ui.about.worldsTitleEm)}</span>
            </h2>
          </div>
          <ul className="grid grid-cols-2 gap-3 md:grid-cols-5">
            {worlds.map((w) => (
              <li key={w.slug} className={w.slug === "seafood" ? "col-span-2 md:col-span-1" : ""}>
                <Link href={`/worlds/${w.slug}`} className="group block">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <Photo name={`home-${w.slug}`} className="transition-transform duration-700 ease-soft group-hover:scale-105" />
                    <span className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <span className="cond absolute bottom-3 left-3 text-xl leading-[0.95] text-white">
                      <span className="block">{w.n}</span>
                      {t(w.short)}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{t(w.lede)}</p>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container size="narrow">
          <div className="border-t border-ink pt-14">
            <Eyebrow>{t(ui.about.ctaLabel)}</Eyebrow>
            <p className="mt-6 font-display-tight text-[clamp(1.75rem,4vw,3rem)] leading-[1.05] text-ink">
              {t(ui.about.ctaText)}
              <span className="serif font-normal">{t(ui.about.ctaEm)}</span>
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
