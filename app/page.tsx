import Link from "next/link";
import { Container } from "@/components/Container";
import { SectionHeader, Eyebrow } from "@/components/SectionHeader";
import { ProjectCard } from "@/components/ProjectCard";
import { Button } from "@/components/Button";
import { featuredProjects, projects } from "@/lib/projects";
import { expertise } from "@/lib/expertise";
import { articles } from "@/lib/writing";
import { site } from "@/lib/site";

export default function HomePage() {
  const featured = featuredProjects.slice(0, 3);
  const recentWriting = articles.slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="pt-12 pb-24 md:pt-20 md:pb-32">
        <Container>
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-9">
              <span className="nc-fade-up text-xs uppercase tracking-caps text-sea">
                Folio — 2026
              </span>
              <h1 className="nc-fade-up nc-fade-up-1 mt-6 font-display text-display-xl text-ink">
                Marketing, content and communication for{" "}
                <span className="italic text-sea">aquaculture, seafood</span>{" "}
                and sustainability.
              </h1>
              <p className="nc-fade-up nc-fade-up-2 mt-8 max-w-2xl text-lg leading-relaxed text-muted md:text-xl">
                {site.subtagline} I work with producers, coalitions and editorial teams on brand narrative, campaigns and science communication — in British English, with a Mediterranean tilt.
              </p>
              <div className="nc-fade-up nc-fade-up-3 mt-10 flex flex-wrap items-center gap-4">
                <Button href="/work">See the work</Button>
                <Button href="/contact" variant="ghost">
                  Start a conversation
                </Button>
              </div>
            </div>
            <aside className="nc-fade-up nc-fade-up-4 md:col-span-3 md:border-l md:border-line md:pl-8">
              <div className="flex flex-col gap-6 text-sm text-muted">
                <div>
                  <div className="text-xs uppercase tracking-caps text-ink">
                    Available
                  </div>
                  <p className="mt-2">
                    Selective freelance projects from June 2026.
                  </p>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-caps text-ink">
                    Based
                  </div>
                  <p className="mt-2">{site.location}</p>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-caps text-ink">
                    Languages
                  </div>
                  <p className="mt-2">English · Spanish · Galician</p>
                </div>
              </div>
            </aside>
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

      {/* Brief intro */}
      <section className="py-24 md:py-32">
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
                I&rsquo;m a marketing and communications professional working mainly with companies and projects in aquaculture, seafood and adjacent technical sectors.
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

      {/* Philosophy quote */}
      <section className="py-24 md:py-32">
        <Container size="narrow">
          <blockquote className="relative">
            <span
              aria-hidden
              className="absolute -top-8 -left-2 font-display text-7xl leading-none text-sea opacity-40 md:-top-10 md:text-9xl"
            >
              “
            </span>
            <p className="font-display text-display-md leading-snug text-ink">
              Good communication in a technical sector is mostly translation. The job is not to make the work sound bigger. It is to let it be understood, accurately, by the people who need to understand it.
            </p>
            <footer className="mt-8 text-xs uppercase tracking-caps text-muted">
              — Working note, 2025
            </footer>
          </blockquote>
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
