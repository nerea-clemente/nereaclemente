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
      <section className="pt-16 pb-24 md:pt-28 md:pb-32">
        <Container>
          <div className="grid gap-16 md:grid-cols-12 md:gap-20">
            <div className="md:col-span-7">
              <span className="text-xs uppercase tracking-caps text-sea">
                Contact
              </span>
              <h1 className="mt-6 font-display text-display-xl text-ink">
                Let&rsquo;s talk about the{" "}
                <span className="italic text-sea">brief.</span>
              </h1>
              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted md:text-xl">
                The best way to start is a short email with the project, the timing and what you&rsquo;ve already got in place. I reply within a few working days. If it&rsquo;s a fit for the next intake, we&rsquo;ll set up a call.
              </p>

              <div className="mt-12 flex flex-col gap-6">
                <a
                  href={`mailto:${site.email}`}
                  className="group inline-flex items-baseline gap-4"
                >
                  <span className="font-display text-display-md text-ink underline decoration-line underline-offset-[10px] transition-colors group-hover:decoration-ink">
                    {site.email}
                  </span>
                  <span
                    aria-hidden
                    className="text-xl text-muted transition-transform duration-300 ease-soft group-hover:translate-x-2 group-hover:text-ink"
                  >
                    →
                  </span>
                </a>
                <div className="mt-6 flex flex-wrap gap-6 text-sm text-muted">
                  <a
                    href={site.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="border-b border-line pb-0.5 text-ink hover:border-ink"
                  >
                    LinkedIn
                  </a>
                  <a
                    href={site.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="border-b border-line pb-0.5 text-ink hover:border-ink"
                  >
                    Seafood on Nerea
                  </a>
                </div>
              </div>
            </div>

            <aside className="md:col-span-5 md:border-l md:border-line md:pl-10">
              <div className="flex flex-col gap-10">
                <div>
                  <Eyebrow>Current capacity</Eyebrow>
                  <p className="mt-3 text-base leading-relaxed text-muted">
                    Selective freelance projects from June 2026. Retainers and editorial leads considered year-round.
                  </p>
                </div>
                <div>
                  <Eyebrow>Good fit</Eyebrow>
                  <ul className="mt-3 flex flex-col gap-2 text-base text-muted">
                    <li>— Aquaculture and seafood producers</li>
                    <li>— Feed and ingredient companies</li>
                    <li>— NGOs and sector coalitions</li>
                    <li>— Retailers working on provenance</li>
                    <li>— Publishers and editorial teams</li>
                  </ul>
                </div>
                <div>
                  <Eyebrow>Less good fit</Eyebrow>
                  <ul className="mt-3 flex flex-col gap-2 text-base text-muted">
                    <li>— One-off social posts with no brief</li>
                    <li>— Purely performance marketing mandates</li>
                    <li>— Communication work that requires overclaiming</li>
                  </ul>
                </div>
                <div>
                  <Eyebrow>Languages</Eyebrow>
                  <p className="mt-3 text-base text-muted">
                    English · Spanish · Galician
                  </p>
                </div>
                <div>
                  <Eyebrow>Based</Eyebrow>
                  <p className="mt-3 text-base text-muted">{site.location}</p>
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}
