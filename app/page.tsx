import Link from "next/link";
import { Container } from "@/components/Container";
import { SectionHeader, Eyebrow } from "@/components/SectionHeader";
import { ProjectCard } from "@/components/ProjectCard";
import { Button } from "@/components/Button";
import { Currently } from "@/components/Currently";
import { featuredProjects } from "@/lib/projects";
import { expertise } from "@/lib/expertise";
import { articles } from "@/lib/writing";
import { site } from "@/lib/site";

const preoccupations = [
  { phrase: "the semicolon", note: "still earns its keep" },
  { phrase: "bivalves and their economics", note: "a whole supply chain in one shell" },
  { phrase: "fishing communities telling their own story", note: "without a fixer in the room" },
  { phrase: "provenance claims that don't survive scrutiny", note: "and the ones that do" },
  { phrase: "the first hour at a fish market", note: "everything happens before 6 am" },
  { phrase: "press releases written like postcards", note: "short, specific, addressed to one person" },
];

export default function HomePage() {
  const featured = featuredProjects.slice(0, 3);
  const recentWriting = articles.slice(0, 3);

  return (
    <>
      {/* Top brand strip — running ticker, instantly un-Anthropic */}
      <div className="overflow-hidden border-b border-line bg-paper py-2.5">
        <div className="nc-marquee flex w-max gap-10 whitespace-nowrap font-mono text-[11px] uppercase tracking-caps text-muted">
          {Array.from({ length: 6 }).map((_, i) => (
            <span key={i} className="flex items-center gap-10">
              <span>Folio 2026 · Vol. 04</span>
              <span className="text-electric">◆</span>
              <span>Copenhagen ↔ Valencia</span>
              <span className="text-electric">◆</span>
              <span>Available from June 2026</span>
              <span className="text-electric">◆</span>
              <span>EN · ES · VAL · DA</span>
              <span className="text-electric">◆</span>
            </span>
          ))}
        </div>
      </div>

      {/* Hero — confident editorial cover */}
      <section className="relative pt-12 pb-20 md:pt-20 md:pb-28">
        <Container>
          <div className="grid gap-16 md:grid-cols-12 md:gap-12">
            <div className="md:col-span-8">
              <div className="nc-fade-up flex items-center gap-3 font-mono text-[11px] uppercase tracking-caps">
                <span className="bg-electric px-2 py-0.5 text-paper">
                  ◆ Independent practice
                </span>
                <span className="text-muted">/ Copenhagen — Valencia</span>
              </div>

              <h1 className="nc-fade-up nc-fade-up-1 mt-10 font-display-tight text-[clamp(3.5rem,9vw,9rem)] leading-[0.92] text-ink">
                An independent
                <br />
                <span className="italic-serif text-electric">communications</span>{" "}
                practice
                <br />
                for aquaculture,
                <br />
                seafood &amp;
                <br />
                sustainability.
              </h1>

              <p className="nc-fade-up nc-fade-up-2 mt-12 max-w-2xl text-lg leading-relaxed text-muted md:text-xl">
                Run by <span className="text-ink">Nerea Clemente</span>, working from Copenhagen with a Mediterranean register from Valencia. Mostly long-form: brand narrative, campaigns, science communication and the editorial side of sustainability reporting.
              </p>

              <div className="nc-fade-up nc-fade-up-3 mt-10 flex flex-wrap items-center gap-4">
                <Button href="/work" variant="primary">
                  See the work
                </Button>
                <Button href="/contact" variant="ghost">
                  Start a conversation
                </Button>
              </div>
            </div>

            <div className="nc-fade-up nc-fade-up-4 md:col-span-4 md:pt-32">
              <Currently />
            </div>
          </div>
        </Container>
      </section>

      {/* Lemon strip — featured projects intro */}
      <section className="bg-lemon py-4">
        <Container>
          <div className="overflow-hidden">
            <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-caps text-ink">
              <span>◆ Selected projects, 2024 — 2026</span>
              <span className="hidden md:inline">07 case studies in the index</span>
              <span>Vol. 04</span>
            </div>
          </div>
        </Container>
      </section>

      {/* Featured work */}
      <section className="py-20 md:py-28">
        <Container>
          <div className="mb-16 grid items-end gap-8 md:grid-cols-12">
            <div className="md:col-span-6">
              <Eyebrow>Selected work</Eyebrow>
              <h2 className="mt-5 font-display-tight text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] text-ink">
                Three projects that say{" "}
                <span className="italic-serif text-electric">most</span> of it.
              </h2>
            </div>
            <div className="md:col-span-5 md:col-start-8">
              <p className="text-base text-muted">
                A short selection across campaigns, editorial and science communication. The full index lives on the work page.
              </p>
              <Link
                href="/work"
                className="mt-5 inline-flex items-center gap-2 border-b-2 border-ink pb-0.5 text-sm uppercase tracking-caps text-ink transition-colors hover:border-electric hover:text-electric"
              >
                All projects <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-20 md:gap-28">
            {featured.map((p) => (
              <ProjectCard key={p.slug} project={p} variant="featured" />
            ))}
          </div>
        </Container>
      </section>

      {/* Brief intro on chalk surface */}
      <section className="bg-chalk py-24 md:py-32">
        <Container>
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-3">
              <Eyebrow>§ 01 / Profile</Eyebrow>
            </div>
            <div className="md:col-span-9">
              <p className="font-display text-[clamp(1.75rem,3vw,2.75rem)] leading-[1.15] text-ink">
                I&rsquo;m a marketing and communications professional working mainly with companies and projects in <span className="italic-serif text-electric">aquaculture, seafood</span> and adjacent technical sectors.
              </p>
              <p className="mt-8 max-w-reading text-lg leading-relaxed text-muted">
                My work sits between strategy and editorial: brand narratives, campaigns, long-form writing, science communication and sustainability reporting. I spend time on site with the people doing the work, then translate that into language buyers, retailers, journalists and the wider public can use. Alongside client work, I run Seafood on Nerea, a personal editorial project, and Women in Aquaculture, a small interview series.
              </p>
              <div className="mt-10">
                <Button href="/about" variant="quiet">
                  More about how I work
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Expertise — restructured as a table grid */}
      <section className="py-24 md:py-32">
        <Container>
          <div className="mb-16 grid gap-8 md:grid-cols-12">
            <div className="md:col-span-4">
              <Eyebrow>§ 02 / Practice</Eyebrow>
              <h2 className="mt-5 font-display-tight text-[clamp(2.5rem,5.5vw,4.5rem)] leading-[0.95] text-ink">
                What I actually do.
              </h2>
            </div>
            <p className="md:col-span-5 md:col-start-7 md:pt-10 max-w-reading text-base text-muted">
              Four overlapping disciplines. Most engagements combine two or three, and most begin with a few weeks of listening before any writing happens.
            </p>
          </div>

          <div className="grid border-t border-ink md:grid-cols-2">
            {expertise.map((group, i) => (
              <article
                key={group.title}
                className={`flex flex-col gap-5 border-b border-ink p-8 md:p-12 ${
                  i % 2 === 0 ? "md:border-r" : ""
                }`}
              >
                <div className="flex items-baseline justify-between">
                  <span className="font-mono text-[11px] uppercase tracking-caps text-electric">
                    0{i + 1}
                  </span>
                  <span className="font-mono text-[11px] uppercase tracking-caps text-muted">
                    {group.items.length} services
                  </span>
                </div>
                <h3 className="font-display-tight text-[clamp(1.75rem,3vw,2.5rem)] leading-tight text-ink">
                  {group.title}
                </h3>
                <p className="max-w-reading text-base leading-relaxed text-muted">
                  {group.description}
                </p>
                <ul className="mt-auto flex flex-wrap gap-1.5 pt-4">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="bg-soft px-2.5 py-1 font-mono text-[10px] uppercase tracking-caps text-ink"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Manifesto — bold electric block, no script */}
      <section className="bg-electric py-28 text-paper md:py-40">
        <Container>
          <div className="grid gap-8 md:grid-cols-12">
            <div className="md:col-span-3">
              <span className="font-mono text-[11px] uppercase tracking-caps text-lemon">
                ◆ Working note
              </span>
              <p className="mt-3 font-mono text-[11px] uppercase tracking-caps text-paper/70">
                Pinned above the desk
              </p>
            </div>
            <blockquote className="md:col-span-9">
              <p className="font-display-tight text-[clamp(2.25rem,5vw,4.5rem)] leading-[1.02]">
                <span className="italic-serif text-lemon">“</span>I&rsquo;d rather write one careful sentence about a fish farm than ten clever ones about something I don&rsquo;t know. The work begins on the dock, in someone else&rsquo;s vocabulary, and ends on the page in <span className="italic-serif text-lemon">mine</span>.<span className="italic-serif text-lemon">”</span>
              </p>
              <footer className="mt-12 flex items-center gap-5 font-mono text-[11px] uppercase tracking-caps text-paper/70">
                <span className="bg-lemon px-2 py-0.5 text-ink">— N.C.</span>
                <span className="h-px flex-1 bg-paper/20" />
                <span>Copenhagen · 2026</span>
              </footer>
            </blockquote>
          </div>
        </Container>
      </section>

      {/* Preoccupations — opinionated, very her */}
      <section className="py-24 md:py-32">
        <Container>
          <div className="mb-12 grid gap-6 md:grid-cols-12 md:items-end md:gap-12">
            <div className="md:col-span-5">
              <Eyebrow>§ 03 / Recurring interests</Eyebrow>
              <h2 className="mt-5 font-display-tight text-[clamp(2.25rem,5.5vw,4.5rem)] leading-[0.95] text-ink">
                What I keep
                <br />
                <span className="italic-serif text-electric">coming back to.</span>
              </h2>
            </div>
            <p className="md:col-span-5 md:col-start-8 max-w-reading text-base text-muted">
              The recurring interests behind most of the work. Not a list of services. A list of obsessions — and a quick note on why each one stuck.
            </p>
          </div>

          <ul className="grid border-t border-ink md:grid-cols-2">
            {preoccupations.map((p, i) => (
              <li
                key={p.phrase}
                className={`flex flex-col gap-3 border-b border-ink p-6 md:p-10 ${
                  i % 2 === 0 ? "md:border-r" : ""
                }`}
              >
                <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-caps">
                  <span className="bg-ink px-2 py-0.5 text-lemon">
                    № {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-muted">Recurring interest</span>
                </div>
                <p className="font-display-tight text-[clamp(1.75rem,3.5vw,3rem)] leading-[1] text-ink">
                  {p.phrase}.
                </p>
                <p className="text-sm italic-serif text-muted">— {p.note}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Writing preview */}
      <section className="bg-chalk py-24 md:py-32">
        <Container>
          <div className="mb-16 grid items-end gap-8 md:grid-cols-12">
            <div className="md:col-span-6">
              <Eyebrow>§ 04 / Writing</Eyebrow>
              <h2 className="mt-5 font-display-tight text-[clamp(2.25rem,5.5vw,4.5rem)] leading-[0.95] text-ink">
                Recent <span className="italic-serif text-electric">notes</span> &amp; essays.
              </h2>
            </div>
            <div className="md:col-span-5 md:col-start-8">
              <p className="text-base text-muted">
                Short pieces on communication, feed, welfare and the editorial side of sustainability.
              </p>
              <Link
                href="/writing"
                className="mt-5 inline-flex items-center gap-2 border-b-2 border-ink pb-0.5 text-sm uppercase tracking-caps text-ink hover:border-electric hover:text-electric"
              >
                All writing <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
          <ul className="border-t border-ink">
            {recentWriting.map((a, i) => (
              <li key={a.slug}>
                <Link
                  href={`/writing#${a.slug}`}
                  className="group grid grid-cols-[2.5rem_1fr] items-baseline gap-6 border-b border-ink py-8 transition-colors hover:bg-lemon md:grid-cols-[3rem_140px_1fr_140px] md:py-10"
                >
                  <span className="font-mono text-[11px] uppercase tracking-caps text-electric">
                    №&nbsp;0{i + 1}
                  </span>
                  <span className="hidden font-mono text-[11px] uppercase tracking-caps text-muted md:block">
                    {a.date}
                  </span>
                  <span className="flex flex-col gap-2">
                    <span className="font-display-tight text-2xl text-ink md:text-4xl">
                      {a.title}
                    </span>
                    <span className="max-w-reading text-sm text-muted">
                      {a.dek}
                    </span>
                  </span>
                  <span className="hidden text-right font-mono text-[11px] uppercase tracking-caps text-muted md:block">
                    {a.category} · {a.readTime}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  );
}
