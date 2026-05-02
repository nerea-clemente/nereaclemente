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
      {/* Hero with portrait */}
      <section className="pt-12 pb-20 md:pt-20 md:pb-24">
        <Container>
          <div className="grid gap-16 md:grid-cols-12 md:gap-12">
            <div className="md:col-span-7">
              <Eyebrow>§ Profile / Perfil</Eyebrow>
              <h1 className="mt-8 font-display-tight text-[clamp(3rem,8vw,8rem)] leading-[0.92] text-ink">
                A communicator
                <br />
                for sectors
                <br />
                that are usually
                <br />
                <span className="italic-serif text-electric">
                  explained badly.
                </span>
              </h1>
              <p className="mt-12 max-w-2xl text-lg leading-relaxed text-muted md:text-xl">
                I&rsquo;m Nerea Clemente. I work in marketing and communications, mostly with companies and projects in aquaculture, seafood, food systems and sustainability. My practice sits between strategy and editorial — brand narrative, campaigns, long-form writing and science communication — with a consistent interest in the parts of these sectors that tend not to be communicated well.
              </p>
            </div>
            <figure className="md:col-span-5">
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-marine text-paper">
                <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-8">
                  <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-caps">
                    <span className="bg-lemon px-2 py-0.5 text-ink">
                      Portrait
                    </span>
                    <span className="text-paper/70">№ 26—04</span>
                  </div>
                  <div className="flex items-end justify-between">
                    <div className="font-display-tight text-7xl leading-[0.85] md:text-8xl">
                      NC
                    </div>
                    <div className="text-right font-mono text-[10px] uppercase tracking-caps text-lemon">
                      <div>Placeholder</div>
                      <div>Drop in real photo</div>
                    </div>
                  </div>
                </div>
              </div>
              <figcaption className="mt-4 flex items-center justify-between font-mono text-[11px] uppercase tracking-caps text-muted">
                <span>A Coruña, March 2026</span>
                <span>Photo · A. Pereira</span>
              </figcaption>
            </figure>
          </div>
        </Container>
      </section>

      {/* Background + Principles */}
      <section className="bg-chalk py-24 md:py-32">
        <Container>
          <div className="grid gap-16 md:grid-cols-12 md:gap-20">
            <div className="md:col-span-5">
              <Eyebrow>§ 01 / Background</Eyebrow>
              <h2 className="mt-5 font-display-tight text-[clamp(2rem,4.5vw,3.75rem)] leading-[1] text-ink">
                The shorter version.
              </h2>
              <div className="mt-10 flex flex-col gap-6 text-base leading-relaxed text-muted">
                <p>
                  I started in corporate communications inside the aquaculture industry, working across campaigns, press, sustainability reporting and internal communication. That gave me a working understanding of how producers, feed companies, retailers and regulators actually talk to each other — and where the conversation tends to break.
                </p>
                <p>
                  Over the last few years I&rsquo;ve moved towards editorial and strategic work: brand narratives, long-form articles and campaigns, editorial direction on sustainability reports, and interviews with scientists, vets and farm managers. In parallel I run <span className="italic-serif text-ink">Seafood on Nerea</span>, a personal editorial project, and <span className="italic-serif text-ink">Women in Aquaculture</span>, an interview series.
                </p>
                <p>
                  I write in British English, with a Mediterranean register. Based in Spain, working internationally, mostly remotely, with a few days on site for each serious project.
                </p>
              </div>
            </div>

            <div className="md:col-span-6 md:col-start-7">
              <Eyebrow>§ 02 / Principles</Eyebrow>
              <h2 className="mt-5 font-display-tight text-[clamp(2rem,4.5vw,3.75rem)] leading-[1] text-ink">
                Four working
                <br />
                <span className="italic-serif text-electric">principles.</span>
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
                        {p.title}
                      </h3>
                      <p className="mt-3 max-w-reading text-base leading-relaxed text-muted">
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

      {/* Sectors strip — bold lemon */}
      <section className="bg-lemon py-20 md:py-28">
        <Container>
          <div className="grid gap-10 md:grid-cols-12 md:gap-16">
            <div className="md:col-span-4">
              <span className="font-mono text-[11px] uppercase tracking-caps text-marine">
                ◆ § 03 / Sectors
              </span>
              <h2 className="mt-5 font-display-tight text-[clamp(2rem,4.5vw,3.75rem)] leading-[1] text-ink">
                Where the
                <br />
                <span className="italic-serif">work</span> tends
                <br />
                to land.
              </h2>
            </div>
            <div className="md:col-span-7">
              <ul className="flex flex-wrap gap-2">
                {sectors.map((s) => (
                  <li
                    key={s}
                    className="border-2 border-ink bg-lemon px-4 py-2 font-mono text-[11px] uppercase tracking-caps text-ink"
                  >
                    {s}
                  </li>
                ))}
              </ul>
              <p className="mt-10 max-w-reading text-lg leading-relaxed text-ink">
                Most of my work has been in aquaculture and seafood, but the practice travels well into adjacent technical sectors — fisheries, food systems, marine sciences — and into any brief where a team has a real story and needs help saying it without losing the substance.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Services */}
      <section className="py-24 md:py-32">
        <Container>
          <div className="mb-12 grid gap-8 md:grid-cols-12">
            <div className="md:col-span-5">
              <Eyebrow>§ 04 / Services</Eyebrow>
              <h2 className="mt-5 font-display-tight text-[clamp(2rem,4.5vw,3.75rem)] leading-[1] text-ink">
                What an engagement
                <br />
                <span className="italic-serif text-electric">looks like.</span>
              </h2>
            </div>
          </div>
          <div className="grid border-t border-ink md:grid-cols-2">
            {[
              {
                n: "01",
                t: "Retained advisory",
                b: "Ongoing editorial and strategic support for a communications or ESG team. Monthly retainer, defined outputs.",
              },
              {
                n: "02",
                t: "Campaign or report",
                b: "Fixed-scope projects: a campaign, a sustainability report, a messaging system. Clear brief, clear deliverables.",
              },
              {
                n: "03",
                t: "Editorial lead",
                b: "Writing and editorial direction on long-form pieces, interview series, or content systems.",
              },
              {
                n: "04",
                t: "Brand and narrative",
                b: "Positioning, narrative and voice work for producers and initiatives. Usually a 6–10 week engagement.",
              },
            ].map((item, i) => (
              <div
                key={item.t}
                className={`flex flex-col gap-3 border-b border-ink p-8 md:p-12 ${
                  i % 2 === 0 ? "md:border-r" : ""
                }`}
              >
                <span className="font-mono text-[11px] uppercase tracking-caps text-electric">
                  № {item.n}
                </span>
                <h3 className="font-display-tight text-2xl text-ink md:text-3xl">
                  {item.t}
                </h3>
                <p className="text-base leading-relaxed text-muted">
                  {item.b}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32">
        <Container size="narrow">
          <div className="border-t-2 border-ink pt-14">
            <Eyebrow>Get in touch</Eyebrow>
            <p className="mt-6 font-display-tight text-[clamp(2rem,5vw,4rem)] leading-[1] text-ink">
              If you&rsquo;re putting together a campaign, report or editorial project in seafood, aquaculture or sustainability —{" "}
              <span className="italic-serif text-electric">write to me.</span>
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
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
