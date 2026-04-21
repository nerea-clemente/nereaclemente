import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Eyebrow, SectionHeader } from "@/components/SectionHeader";
import { articles } from "@/lib/writing";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Essays, field notes and briefings on communication, feed, welfare and editorial work in technical sectors.",
};

const themes = [
  "Communicating aquaculture to wider audiences",
  "Science communication in food systems",
  "Seafood storytelling",
  "Content strategy in technical sectors",
  "Sustainability communication without greenwashing",
];

export default function WritingPage() {
  return (
    <>
      <section className="pt-16 pb-20 md:pt-24 md:pb-24">
        <Container>
          <span className="text-xs uppercase tracking-caps text-tide">
            Writing & Insights
          </span>
          <h1 className="mt-6 max-w-5xl font-display text-display-xl text-ink">
            Notes on communication in{" "}
            <span className="italic text-tide">technical sectors.</span>
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-muted md:text-xl">
            Short essays, field notes and briefings. Published when the thinking is ready, not on a schedule.
          </p>
        </Container>
      </section>

      <section className="pb-16">
        <Container>
          <div className="flex flex-wrap gap-3 border-y border-line py-6">
            <span className="mr-2 text-xs uppercase tracking-caps text-muted">
              Themes
            </span>
            {themes.map((t) => (
              <span
                key={t}
                className="text-xs uppercase tracking-caps text-ink"
              >
                {t}
                <span className="mx-3 text-line">·</span>
              </span>
            ))}
          </div>
        </Container>
      </section>

      <section className="pb-24 md:pb-32">
        <Container>
          <ul>
            {articles.map((a, i) => (
              <li key={a.slug} id={a.slug}>
                <article className="group grid grid-cols-1 gap-6 border-b border-line py-10 transition-colors hover:bg-shell/30 md:grid-cols-[140px_1fr_160px] md:gap-12 md:py-14">
                  <div className="flex items-start gap-4 md:flex-col md:gap-1">
                    <span className="font-mono text-xs uppercase tracking-caps text-muted">
                      {a.date}
                    </span>
                    <span className="font-mono text-xs text-muted">
                      №&nbsp;{String(articles.length - i).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="flex flex-col gap-4">
                    <h2 className="font-display text-display-sm leading-tight text-ink">
                      {a.title}
                    </h2>
                    <p className="max-w-reading text-lg leading-relaxed text-muted">
                      {a.dek}
                    </p>
                    <div className="mt-2 inline-flex items-center gap-2 text-xs uppercase tracking-caps text-muted">
                      <span className="border border-line px-3 py-1 text-ink">
                        {a.category}
                      </span>
                      <span>{a.readTime}</span>
                    </div>
                  </div>
                  <div className="flex items-end md:justify-end">
                    <span className="inline-flex items-center gap-3 border-b border-ink/40 pb-1 text-sm uppercase tracking-caps text-ink/60 transition-all group-hover:border-ink group-hover:text-ink">
                      In progress <span aria-hidden>→</span>
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
          <SectionHeader
            eyebrow="Note"
            title={<>These essays live alongside the work.</>}
            lede="Most of what I write here starts as a working note on a client project. When it generalises, it becomes an essay. When it's narrower, a briefing. Nothing is published until the argument holds up on its own."
          />
        </Container>
      </section>
    </>
  );
}
