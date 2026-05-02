"use client";

import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/SectionHeader";
import { useT } from "@/lib/i18n/context";
import { ui } from "@/lib/i18n/strings";
import { articles, articleCategoryLabels } from "@/lib/writing";

export function WritingContent() {
  const t = useT();
  return (
    <>
      <section className="pt-16 pb-12 md:pt-24 md:pb-16">
        <Container>
          <p className="italic-serif text-base text-clay md:text-lg">
            {t(ui.writing.badge)}
          </p>
          <h1 className="mt-4 max-w-6xl font-display-tight text-[clamp(2.75rem,7vw,7rem)] leading-[0.95] text-ink">
            {t(ui.writing.titleA)} {t(ui.writing.titleB)}
            <span className="italic-serif text-clay">
              {t(ui.writing.titleEm)}
            </span>
          </h1>
          <p className="mt-10 max-w-3xl text-lg leading-relaxed text-muted md:text-xl">
            {t(ui.writing.lede)}
          </p>
        </Container>
      </section>

      <section className="py-12 md:py-16">
        <Container>
          <ul className="border-t border-line">
            {articles.map((a, i) => (
              <li key={a.slug} id={a.slug}>
                <article className="group grid grid-cols-[3rem_1fr] items-baseline gap-6 border-b border-line py-10 transition-colors hover:bg-chalk md:grid-cols-[3rem_140px_1fr_140px] md:gap-12 md:py-14">
                  <span className="italic-serif text-lg text-muted">
                    {String(articles.length - i).padStart(2, "0")}
                  </span>
                  <span className="hidden italic-serif text-base text-muted md:block">
                    {t(a.date)}
                  </span>
                  <div className="flex flex-col gap-3">
                    <h2 className="font-display-tight text-[clamp(1.75rem,4vw,3rem)] leading-[1.05] text-ink transition-colors group-hover:text-clay">
                      {t(a.title)}
                    </h2>
                    <p className="max-w-reading text-base leading-relaxed text-muted">
                      {t(a.dek)}
                    </p>
                  </div>
                  <span className="hidden italic-serif text-base text-clay md:block md:text-right">
                    {t(articleCategoryLabels[a.category])}
                  </span>
                </article>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container size="narrow">
          <div className="border-t border-line pt-14">
            <Eyebrow>{t(ui.common.note)}</Eyebrow>
            <p className="mt-6 font-display text-[clamp(1.5rem,2.8vw,2.25rem)] leading-[1.2] text-ink">
              {t(ui.writing.noteText)}
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
