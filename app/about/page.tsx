import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Eyebrow, SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/Button";
import { principles, sectors } from "@/lib/expertise";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Nerea Clemente is a marketing and communications professional working at the intersection of aquaculture, seafood, sustainability and science communication.",
};

export default function AboutPage() {
  return (
    <>
      <section className="pt-16 pb-20 md:pt-28 md:pb-28">
        <Container>
          <span className="text-xs uppercase tracking-caps text-sea">
            Profile
          </span>
          <h1 className="mt-6 max-w-5xl font-display text-display-xl text-ink">
            A communicator for sectors that are usually{" "}
            <span className="italic text-sea">explained badly.</span>
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-muted md:text-xl">
            I&rsquo;m Nerea Clemente. I work in marketing and communications, mostly with companies and projects in aquaculture, seafood, food systems and sustainability. My practice sits between strategy and editorial — brand narrative, campaigns, long-form writing and science communication — with a consistent interest in the parts of these sectors that tend not to be communicated well.
          </p>
        </Container>
      </section>

      <section className="pb-24 md:pb-32">
        <Container>
          <div className="grid gap-16 md:grid-cols-12 md:gap-20">
            <div className="md:col-span-5">
              <SectionHeader
                eyebrow="Background"
                title={<>The shorter version.</>}
              />
              <div className="mt-10 flex flex-col gap-8 text-base leading-relaxed text-muted">
                <p>
                  I started in corporate communications inside the aquaculture industry, working across campaigns, press, sustainability reporting and internal communication. That gave me a working understanding of how producers, feed companies, retailers and regulators actually talk to each other — and where that conversation tends to break.
                </p>
                <p>
                  Over the last few years I&rsquo;ve moved more towards editorial and strategic work: brand narratives for producers, long-form articles and campaigns, editorial direction on sustainability reports, and interviews with scientists, vets and farm managers. In parallel I run Seafood on Nerea, a personal editorial project, and Women in Aquaculture, a small interview series documenting the work of women across the value chain.
                </p>
                <p>
                  I write in British English, with a Mediterranean register. I&rsquo;m based in Spain and work internationally, mostly remotely, with a few days on site for each serious project.
                </p>
              </div>
            </div>

            <div className="md:col-span-6 md:col-start-7">
              <SectionHeader
                eyebrow="How I work"
                title={<>Four working principles.</>}
              />
              <ol className="mt-10 flex flex-col divide-y divide-line border-y border-line">
                {principles.map((p) => (
                  <li
                    key={p.n}
                    className="grid grid-cols-[auto_1fr] gap-6 py-8 md:gap-10"
                  >
                    <span className="font-mono text-sm text-muted">{p.n}</span>
                    <div>
                      <h3 className="font-display text-xl text-ink md:text-2xl">
                        {p.title}
                      </h3>
                      <p className="mt-3 max-w-reading text-base text-muted">
                        {p.body}
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
          <div className="grid gap-12 md:grid-cols-12 md:gap-20">
            <div className="md:col-span-5">
              <Eyebrow>Sectors</Eyebrow>
              <h2 className="mt-4 font-display text-display-md text-ink">
                Where the work tends to land.
              </h2>
            </div>
            <div className="md:col-span-7">
              <ul className="flex flex-wrap gap-3">
                {sectors.map((s) => (
                  <li
                    key={s}
                    className="border border-line px-4 py-2 text-sm uppercase tracking-caps text-ink"
                  >
                    {s}
                  </li>
                ))}
              </ul>
              <p className="mt-10 max-w-reading text-lg leading-relaxed text-muted">
                Most of my work has been in aquaculture and seafood, but the practice travels reasonably well into adjacent technical sectors — fisheries, food systems, marine sciences — and into any brief where a team has a real story and needs help saying it without losing the substance.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-24 md:py-32">
        <Container>
          <div className="grid gap-12 md:grid-cols-12 md:gap-20">
            <div className="md:col-span-5">
              <Eyebrow>Services</Eyebrow>
              <h2 className="mt-4 font-display text-display-md text-ink">
                What an engagement usually looks like.
              </h2>
            </div>
            <div className="md:col-span-7">
              <div className="grid gap-px bg-line md:grid-cols-2">
                {[
                  {
                    t: "Retained advisory",
                    b: "Ongoing editorial and strategic support for a communications or ESG team. Monthly retainer, defined outputs.",
                  },
                  {
                    t: "Campaign or report",
                    b: "Fixed-scope projects: a campaign, a sustainability report, a messaging system. Clear brief, clear deliverables.",
                  },
                  {
                    t: "Editorial lead",
                    b: "Writing and editorial direction on long-form pieces, interview series, or content systems.",
                  },
                  {
                    t: "Brand and narrative",
                    b: "Positioning, narrative and voice work for producers and initiatives. Usually a 6–10 week engagement.",
                  },
                ].map((item) => (
                  <div
                    key={item.t}
                    className="flex flex-col gap-3 bg-bone p-8"
                  >
                    <h3 className="font-display text-xl text-ink md:text-2xl">
                      {item.t}
                    </h3>
                    <p className="text-base leading-relaxed text-muted">
                      {item.b}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-24 md:py-32">
        <Container size="narrow">
          <div className="flex flex-col gap-8 border-t border-line pt-16">
            <Eyebrow>Get in touch</Eyebrow>
            <p className="font-display text-display-md text-ink">
              If you&rsquo;re putting together a campaign, report or editorial project in seafood, aquaculture or sustainability — write to me.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href="/contact">Contact</Button>
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
