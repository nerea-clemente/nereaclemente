import Link from "next/link";
import { Container } from "@/components/Container";
import { SectionHeader, Eyebrow } from "@/components/SectionHeader";
import { ProjectCard } from "@/components/ProjectCard";
import { Button } from "@/components/Button";
import { Currently } from "@/components/Currently";
import { featuredProjects, projects } from "@/lib/projects";
import { expertise } from "@/lib/expertise";
import { articles } from "@/lib/writing";
import { site } from "@/lib/site";

const preoccupations = [
  "the semicolon",
  "bivalves and their economics",
  "how fishing communities tell their own story",
  "provenance claims that don't survive scrutiny",
  "the first hour at a fish market",
  "press releases written like postcards",
];

export default function HomePage() {
  const featured = featuredProjects.slice(0, 3);
  const recentWriting = articles.slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-10 pb-24 md:pt-16 md:pb-32">
        <Container>
          <div className="nc-fade-up flex flex-wrap items-center gap-3 text-xs uppercase tracking-caps text-tide">
            <span>Folio — 2026</span>
            <span className="text-line">·</span>
            <span className="text-muted">A Coruña, Galicia</span>
            <span className="text-line">·</span>
            <span className="text-muted">EN · ES · GL</span>
          </div>

          <p className="nc-fade-up nc-fade-up-1 mt-12 font-script text-4xl text-tide md:text-5xl">
            Hola — Olá — Hello.
          </p>

          <h1 className="nc-fade-up nc-fade-up-2 mt-6 max-w-[18ch] font-display text-display-xl text-ink">
            I&rsquo;m{" "}
            <span className="italic text-tide">Nerea Clemente</span>, a
            communications writer for{" "}
            <span className="italic">aquaculture, seafood</span> and
            sustainability.
          </h1>

          <div className="nc-fade-up nc-fade-up-3 mt-12 grid gap-12 md:grid-cols-12 md:gap-16">
            <div className="md:col-span-7">
              <p className="max-w-2xl text-lg leading-relaxed text-muted md:text-xl">
                I help companies and projects in technical sectors tell their story with clarity, precision and a point of view. Brand narrative, campaigns, long-form writing, science communication and the editorial side of sustainability reporting — in British English, with a Mediterranean tilt.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Button href="/work">See the work</Button>
                <Button href="/contact" variant="ghost">
                  Start a conversation
                </Button>
              </div>
            </div>
            <div className="nc-fade-up nc-fade-up-4 md:col-span-5">
              <Currently />
            </div>
          </div>
        </Container>
      </section>

      {/* Featured work */}
      <section className="pb-24 md:pb-32">
        <Container>
          <SectionHeader
            eyebrow="Selected work"
            title={<>Projects from the last two years.</>}
            lede="A short selection across campaigns, editorial and science communication. The full index is on the work page."
            align="split"
            meta={
              <Link
                href="/work"
                className="inline-flex items-center gap-2 text-ink hover:opacity-70"
              >
                All projects <span aria-hidden>→</span>
              </Link>
            }
          />
          <div className="mt-16 flex flex-col gap-20 md:gap-28">
            {featured.map((p) => (
              <ProjectCard key={p.slug} project={p} variant="featured" />
            ))}
          </div>
        </Container>
      </section>

      {/* Brief intro — paper surface to break the beige rhythm */}
      <section className="bg-paper py-24 md:py-32">
        <Container>
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-4">
              <Eyebrow>About</Eyebrow>
              <div className="mt-4 font-mono text-sm text-muted">
                §&nbsp;01 · Profile
              </div>
            </div>
            <div className="md:col-span-8">
              <p className="font-display text-display-md leading-tight text-ink">
                I&rsquo;m a marketing and communications professional working mainly with companies and projects in <span className="italic text-tide">aquaculture, seafood</span> and adjacent technical sectors.
              </p>
              <p className="mt-8 max-w-reading text-lg leading-relaxed text-muted">
                My work sits between strategy and editorial: brand narratives, campaigns, long-form writing, science communication and sustainability reporting. I spend time on site with the people actually doing the work, then translate that into language buyers, retailers, journalists and the wider public can use. Alongside client work, I run an ongoing personal project on seafood and a small editorial initiative documenting women across the aquaculture value chain.
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

      {/* Expertise */}
      <section className="py-24 md:py-32">
        <Container>
          <SectionHeader
            eyebrow="Areas of work"
            title={<>What I actually do, and for whom.</>}
            align="split"
            lede="Four overlapping disciplines. Most engagements combine two or three."
          />
          <div className="mt-16 grid gap-px overflow-hidden rounded-sm bg-line md:grid-cols-2">
            {expertise.map((group, i) => (
              <article
                key={group.title}
                className="flex flex-col gap-6 bg-bone p-8 md:p-12"
              >
                <div className="flex items-baseline justify-between">
                  <h3 className="font-display text-2xl text-ink md:text-3xl">
                    {group.title}
                  </h3>
                  <span className="font-mono text-xs text-muted">
                    0{i + 1}
                  </span>
                </div>
                <p className="max-w-reading text-base leading-relaxed text-muted">
                  {group.description}
                </p>
                <ul className="mt-auto flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="border border-line px-3 py-1 text-xs uppercase tracking-caps text-ink"
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

      {/* Manifesto — full bleed marine, hand-signed */}
      <section className="bg-tide py-28 text-paper md:py-40">
        <Container size="narrow">
          <span className="text-xs uppercase tracking-caps text-sky">
            A working note, pinned above the desk
          </span>
          <blockquote className="relative mt-10">
            <span
              aria-hidden
              className="absolute -top-10 -left-3 font-display text-7xl leading-none text-sky opacity-60 md:-top-14 md:text-[10rem]"
            >
              “
            </span>
            <p className="font-display text-display-md leading-snug">
              I&rsquo;d rather write one careful sentence about a fish farm than ten clever ones about something I don&rsquo;t know. The work begins on the dock, in someone else&rsquo;s vocabulary, and ends on the page in <span className="italic">mine</span>.
            </p>
            <footer className="mt-10 flex items-center gap-4">
              <span className="font-script text-4xl text-paper md:text-5xl">
                — Nerea
              </span>
              <span className="h-px flex-1 bg-sky/40" />
              <span className="text-xs uppercase tracking-caps text-sky">
                A Coruña, 2026
              </span>
            </footer>
          </blockquote>
        </Container>
      </section>

      {/* Preoccupations — small, opinionated, very her */}
      <section className="py-24 md:py-32">
        <Container>
          <div className="grid gap-10 md:grid-cols-12 md:gap-20">
            <div className="md:col-span-4">
              <Eyebrow>Preoccupations</Eyebrow>
              <h2 className="mt-4 font-display text-display-sm text-ink">
                What I keep coming back to.
              </h2>
              <p className="mt-4 max-w-reading text-base text-muted">
                The recurring interests behind most of the work. Not a list of services — a list of obsessions.
              </p>
            </div>
            <ul className="md:col-span-8">
              {preoccupations.map((p, i) => (
                <li
                  key={p}
                  className="grid grid-cols-[auto_1fr] items-baseline gap-6 border-b border-line py-5 md:gap-10 md:py-7"
                >
                  <span className="font-mono text-xs text-muted">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display text-2xl italic text-ink md:text-3xl">
                    {p}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* Writing preview */}
      <section className="py-24 md:py-32">
        <Container>
          <SectionHeader
            eyebrow="Writing"
            title={<>Recent notes and essays.</>}
            lede="Short pieces on communication, feed, welfare and the editorial side of sustainability."
            align="split"
            meta={
              <Link
                href="/writing"
                className="inline-flex items-center gap-2 text-ink hover:opacity-70"
              >
                All writing <span aria-hidden>→</span>
              </Link>
            }
          />
          <ul className="mt-12">
            {recentWriting.map((a) => (
              <li key={a.slug}>
                <Link
                  href={`/writing#${a.slug}`}
                  className="group grid grid-cols-[auto_1fr] items-baseline gap-6 border-b border-line py-8 transition-colors hover:bg-shell/30 md:grid-cols-[120px_1fr_auto] md:gap-10"
                >
                  <span className="font-mono text-xs uppercase tracking-caps text-muted">
                    {a.date}
                  </span>
                  <span className="flex flex-col gap-2">
                    <span className="font-display text-2xl text-ink md:text-3xl">
                      {a.title}
                    </span>
                    <span className="max-w-reading text-sm text-muted">
                      {a.dek}
                    </span>
                  </span>
                  <span className="hidden text-xs uppercase tracking-caps text-muted md:inline">
                    {a.category}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32">
        <Container size="narrow">
          <div className="flex flex-col gap-8 border-t border-line pt-16 text-center">
            <Eyebrow>Next</Eyebrow>
            <h2 className="font-display text-display-lg text-ink">
              Working on something in seafood, aquaculture or sustainability?
            </h2>
            <p className="mx-auto max-w-reading text-lg text-muted">
              I take on a small number of projects each year. If the brief is the right fit, I&rsquo;d like to hear about it.
            </p>
            <div className="mt-4 flex flex-wrap justify-center gap-4">
              <Button href="/contact">Get in touch</Button>
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
