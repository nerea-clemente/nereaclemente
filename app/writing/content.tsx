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
      <section className="pt-12 pb-16 md:pt-20 md:pb-20">
        <Container>
          <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-caps">
            <span className="bg-sea px-2 py-0.5 text-paper">
              {t(ui.writing.badge)}
            </span>
            <span className="text-muted">{t(ui.writing.badgeMeta)}</span>
          </div>
          <h1 className="mt-8 max-w-6xl font-display-tight text-[clamp(3rem,8vw,8rem)] leading-[0.92] text-ink">
            {t(ui.writing.titleA)}
            <br />
            {t(ui.writing.titleB)}
            <span className="italic-serif text-sea">
              {t(ui.writing.titleEm)}
            </span>
          </h1>
          <p className="mt-10 max-w-3xl text-lg leading-relaxed text-muted md:text-xl">
            {t(ui.writing.lede)}
          </p>
        </Container>
      </section>

      <section className="bg-blush py-6">
        <Container>
          <div className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-[11px] uppercase tracking-caps text-ink">
            <span>{t(ui.writing.themesLabel)}</span>
            {ui.writing.themes.map((theme, i) => (
              <span key={i}>· {t(theme)}</span>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-12 md:py-16">
        <Container>
          <ul className="border-t border-line">
            {articles.map((a, i) => (
              <li key={a.slug} id={a.slug}>
                <article className="group grid grid-cols-1 gap-6 border-b border-line py-10 transition-colors hover:bg-saffron md:grid-cols-[140px_1fr_180px] md:gap-12 md:py-14">
                  <div className="flex items-start gap-4 md:flex-col md:gap-2">
                    <span className="font-mono text-[11px] uppercase tracking-caps text-sea">
                      №&nbsp;{String(articles.length - i).padStart(2, "0")}
                    </span>
                    <span className="font-mono text-[11px] uppercase tracking-caps text-muted">
                      {t(a.date)}
                    </span>
                  </div>
                  <div className="flex flex-col gap-4">
                    <h2 className="font-display-tight text-[clamp(2rem,4.5vw,3.5rem)] leading-[1] text-ink">
                      {t(a.title)}
                    </h2>
                    <p className="max-w-reading text-lg leading-relaxed text-muted">
                      {t(a.dek)}
                    </p>
                    <div className="mt-2 flex items-center gap-3 font-mono text-[11px] uppercase tracking-caps">
                      <span className="bg-ink px-2 py-0.5 text-saffron">
                        {t(articleCategoryLabels[a.category])}
                      </span>
                      <span className="text-muted">{t(a.readTime)}</span>
                    </div>
                  </div>
                  <div className="flex items-end md:justify-end">
                    <span className="inline-flex items-center gap-3 border-b-2 border-line pb-1 font-mono text-[11px] uppercase tracking-caps text-muted transition-colors group-hover:border-ink group-hover:text-ink">
                      {t(ui.common.inProgress)} <span aria-hidden>→</span>
                    </span>
                  </div>
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
            <p className="mt-6 font-display-tight text-[clamp(1.75rem,3vw,2.5rem)] leading-[1.1] text-ink">
              {t(ui.writing.noteText)}
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
