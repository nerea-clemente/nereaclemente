import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/SectionHeader";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch about campaigns, editorial, sustainability reporting or science communication work.",
};

export default function ContactPage() {
  return (
    <>
      <section className="pt-12 pb-24 md:pt-20 md:pb-32">
        <Container>
          <div className="grid gap-16 md:grid-cols-12 md:gap-16">
            <div className="md:col-span-7">
              <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-caps">
                <span className="bg-electric px-2 py-0.5 text-paper">
                  ◆ Contact / Contacto
                </span>
                <span className="text-muted">/ {site.location}</span>
              </div>

              <h1 className="mt-8 font-display-tight text-[clamp(3rem,8vw,8rem)] leading-[0.92] text-ink">
                Let&rsquo;s talk
                <br />
                about the{" "}
                <span className="italic-serif text-electric">brief.</span>
              </h1>

              <p className="mt-10 max-w-2xl text-lg leading-relaxed text-muted md:text-xl">
                The best way to start is a short email with the project, the timing and what you&rsquo;ve already got in place. I reply within a few working days. If it&rsquo;s a fit for the next intake, we&rsquo;ll set up a call.
              </p>

              <a
                href={`mailto:${site.email}`}
                className="group mt-14 inline-flex flex-col gap-3 border-t border-ink pt-6"
              >
                <span className="font-mono text-[11px] uppercase tracking-caps text-electric">
                  ◆ Direct
                </span>
                <span className="font-display-tight text-[clamp(2rem,5vw,4rem)] leading-[1] text-ink transition-colors group-hover:text-electric">
                  {site.email}{" "}
                  <span
                    aria-hidden
                    className="inline-block transition-transform group-hover:translate-x-2"
                  >
                    →
                  </span>
                </span>
              </a>

              <div className="mt-10 flex flex-wrap gap-3 font-mono text-[11px] uppercase tracking-caps">
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-ink px-3 py-2 text-paper hover:bg-electric"
                >
                  LinkedIn ↗
                </a>
                <a
                  href={site.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-ink px-3 py-2 text-paper hover:bg-electric"
                >
                  Seafood on Nerea ↗
                </a>
              </div>
            </div>

            <aside className="md:col-span-4 md:col-start-9">
              <div className="bg-ink p-7 text-paper md:p-9">
                <div className="flex items-center justify-between border-b border-paper/15 pb-4">
                  <span className="font-mono text-[10px] uppercase tracking-caps text-lemon">
                    ◆ Briefing card
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-caps text-paper/50">
                    2026
                  </span>
                </div>
                <div className="mt-5 flex flex-col gap-5 text-sm">
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-caps text-paper/50">
                      Capacity
                    </div>
                    <p className="mt-1 text-paper">
                      Selective freelance projects from June 2026. Retainers and editorial leads year-round.
                    </p>
                  </div>
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-caps text-paper/50">
                      Good fit
                    </div>
                    <ul className="mt-1 flex flex-col gap-1 text-paper">
                      <li>— Aquaculture &amp; seafood producers</li>
                      <li>— Feed and ingredient companies</li>
                      <li>— NGOs and sector coalitions</li>
                      <li>— Retailers working on provenance</li>
                      <li>— Publishers and editorial teams</li>
                    </ul>
                  </div>
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-caps text-paper/50">
                      Less good fit
                    </div>
                    <ul className="mt-1 flex flex-col gap-1 text-paper">
                      <li>— One-off social posts with no brief</li>
                      <li>— Pure performance marketing mandates</li>
                      <li>— Work that requires overclaiming</li>
                    </ul>
                  </div>
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-caps text-paper/50">
                      Languages
                    </div>
                    <p className="mt-1 text-paper">English · Spanish · Galician</p>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}
