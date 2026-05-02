import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/SectionHeader";
import { Button } from "@/components/Button";
import { getProject, projects } from "@/lib/projects";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const project = getProject(params.slug);
  if (!project) return { title: "Project not found" };
  return {
    title: project.title,
    description: project.summary,
  };
}

const tiles = [
  { bg: "bg-marine", fg: "text-paper", accent: "text-lemon" },
  { bg: "bg-electric", fg: "text-paper", accent: "text-lemon" },
  { bg: "bg-lemon", fg: "text-ink", accent: "text-marine" },
  { bg: "bg-ink", fg: "text-paper", accent: "text-lemon" },
  { bg: "bg-coral", fg: "text-paper", accent: "text-ink" },
] as const;

function pickTile(slug: string) {
  const idx = Math.abs([...slug].reduce((a, c) => a + c.charCodeAt(0), 0)) % tiles.length;
  return tiles[idx];
}

const galleryTones: Record<string, { bg: string; fg: string; accent: string }> = {
  sea: { bg: "bg-marine", fg: "text-paper", accent: "text-lemon" },
  deep: { bg: "bg-deep", fg: "text-paper", accent: "text-lemon" },
  shell: { bg: "bg-soft", fg: "text-ink", accent: "text-electric" },
  sand: { bg: "bg-soft", fg: "text-ink", accent: "text-electric" },
  clay: { bg: "bg-coral", fg: "text-paper", accent: "text-ink" },
};

export default function CaseStudyPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = getProject(params.slug);
  if (!project) notFound();

  const currentIndex = projects.findIndex((p) => p.slug === project.slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];
  const tile = pickTile(project.slug);

  return (
    <>
      <section className="pt-10 pb-8 md:pt-16">
        <Container>
          <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-caps text-muted">
            <Link href="/work" className="hover:text-electric">
              ← Index
            </Link>
            <span className="text-line">/</span>
            <span>{project.category}</span>
            <span className="text-line">/</span>
            <span>{project.year}</span>
          </div>

          <h1 className="mt-10 max-w-6xl font-display-tight text-[clamp(3rem,9vw,9rem)] leading-[0.9] text-ink">
            {project.title}
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-muted md:text-xl">
            {project.overview}
          </p>

          <dl className="mt-14 grid grid-cols-2 gap-8 border-t-2 border-ink pt-8 md:grid-cols-4">
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-caps text-muted">
                Client
              </dt>
              <dd className="mt-2 text-base text-ink">{project.client}</dd>
            </div>
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-caps text-muted">
                Year
              </dt>
              <dd className="mt-2 text-base text-ink">{project.year}</dd>
            </div>
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-caps text-muted">
                Category
              </dt>
              <dd className="mt-2 text-base text-ink">{project.category}</dd>
            </div>
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-caps text-muted">
                Disciplines
              </dt>
              <dd className="mt-2 flex flex-wrap gap-1 text-base text-ink">
                {project.disciplines.join(" · ")}
              </dd>
            </div>
          </dl>
        </Container>
      </section>

      {/* Hero — solid editorial cover, no decorative curves */}
      <section className="pb-16 md:pb-24">
        <Container>
          <div className={`relative aspect-[16/9] w-full overflow-hidden ${tile.bg} ${tile.fg}`}>
            <div className="absolute inset-0 flex flex-col justify-between p-8 md:p-16">
              <div className="flex items-start justify-between font-mono text-[11px] uppercase tracking-caps">
                <div className="flex items-center gap-2">
                  <span className={`inline-block h-1.5 w-1.5 ${tile.accent.replace("text-", "bg-")}`} />
                  <span>Case study · Folio 2026</span>
                </div>
                <span>№ {String(currentIndex + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}</span>
              </div>
              <div>
                <div className={`font-mono text-[11px] uppercase tracking-caps ${tile.accent}`}>
                  {project.category} · {project.year}
                </div>
                <h2 className="mt-4 font-display-tight text-[clamp(3rem,9vw,9rem)] leading-[0.85]">
                  {project.title}
                </h2>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Sections */}
      <section className="pb-8">
        <Container>
          <div className="grid gap-12 md:grid-cols-12 md:gap-16">
            <CaseSection n="01" label="Context" title="The situation when we started.">
              <p>{project.context}</p>
            </CaseSection>
            <CaseSection n="02" label="Role" title="What I actually did.">
              <p>{project.role}</p>
            </CaseSection>
            <CaseSection n="03" label="Approach" title="How we set the work up.">
              <ul className="flex flex-col gap-5">
                {project.approach.map((a, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="mt-2 inline-block h-px w-6 flex-none bg-electric" />
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
            </CaseSection>
            <CaseSection n="04" label="Execution" title="What got made.">
              <ul className="flex flex-col gap-5">
                {project.execution.map((a, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="mt-2 inline-block h-px w-6 flex-none bg-electric" />
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
            </CaseSection>
            <CaseSection n="05" label="Outcome" title="Where it landed.">
              <ul className="flex flex-col gap-5">
                {project.outcome.map((a, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="mt-2 inline-block h-px w-6 flex-none bg-electric" />
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
            </CaseSection>
          </div>
        </Container>
      </section>

      {project.gallery && project.gallery.length > 0 && (
        <section className="bg-chalk py-20 md:py-28">
          <Container>
            <div className="mb-10 flex items-baseline justify-between border-t-2 border-ink pt-8">
              <Eyebrow>Selected visuals</Eyebrow>
              <span className="font-mono text-[11px] uppercase tracking-caps text-muted">
                Placeholders
              </span>
            </div>
            <div className="grid gap-6 md:grid-cols-2 md:gap-8">
              {project.gallery.map((g, i) => {
                const tone = galleryTones[g.tone] ?? galleryTones.sea;
                return (
                  <figure key={i} className="flex flex-col gap-3">
                    <div className={`relative aspect-[4/3] overflow-hidden ${tone.bg} ${tone.fg}`}>
                      <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-8">
                        <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-caps">
                          <span className={`inline-flex items-center gap-2 ${tone.accent}`}>
                            <span className={`inline-block h-1.5 w-1.5 ${tone.accent.replace("text-", "bg-")}`} />
                            Fig. {String(i + 1).padStart(2, "0")}
                          </span>
                          <span className="opacity-70">{project.title}</span>
                        </div>
                        <div className="font-display-tight text-5xl leading-[0.9] md:text-6xl">
                          {String(i + 1).padStart(2, "0")}
                        </div>
                      </div>
                    </div>
                    <figcaption className="font-mono text-[11px] uppercase tracking-caps text-muted">
                      {g.caption}
                    </figcaption>
                  </figure>
                );
              })}
            </div>
          </Container>
        </section>
      )}

      {project.takeaway && (
        <section className="bg-electric py-24 text-paper md:py-32">
          <Container size="narrow">
            <div className="grid gap-8 md:grid-cols-12">
              <div className="md:col-span-3">
                <span className="font-mono text-[11px] uppercase tracking-caps text-lemon">
                  ◆ Takeaway
                </span>
              </div>
              <p className="md:col-span-9 font-display-tight text-[clamp(2rem,5vw,4rem)] leading-[1.05]">
                <span className="italic-serif text-lemon">“</span>
                {project.takeaway}
                <span className="italic-serif text-lemon">”</span>
              </p>
            </div>
          </Container>
        </section>
      )}

      {/* Next */}
      <section className="py-24 md:py-32">
        <Container>
          <Link
            href={`/work/${nextProject.slug}`}
            className="group block border-t-2 border-ink pt-10"
          >
            <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-caps text-muted">
              <span>◆ Next project</span>
              <span>{nextProject.category}</span>
            </div>
            <span className="mt-6 block font-display-tight text-[clamp(3rem,9vw,9rem)] leading-[0.9] text-ink transition-colors group-hover:text-electric">
              {nextProject.title} <span aria-hidden>→</span>
            </span>
            <p className="mt-4 max-w-reading text-lg text-muted">
              {nextProject.summary}
            </p>
          </Link>
        </Container>
      </section>

      <section className="py-16">
        <Container size="narrow">
          <div className="flex flex-col items-start gap-6">
            <Eyebrow>Available</Eyebrow>
            <p className="font-display-tight text-[clamp(1.75rem,3vw,2.5rem)] leading-[1.1] text-ink">
              Interested in something in this space?{" "}
              <span className="italic-serif text-electric">Write to me.</span>
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

function CaseSection({
  n,
  label,
  title,
  children,
}: {
  n: string;
  label: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <article className="contents">
      <div className="md:col-span-4 md:pr-8">
        <div className="flex flex-col gap-2 border-t-2 border-ink pt-6">
          <span className="font-mono text-[11px] uppercase tracking-caps text-electric">
            §&nbsp;{n} · {label}
          </span>
        </div>
      </div>
      <div className="md:col-span-8">
        <div className="border-t-2 border-ink pt-6">
          <h2 className="font-display-tight text-[clamp(2rem,4vw,3.25rem)] leading-[1.05] text-ink">
            {title}
          </h2>
          <div className="mt-6 max-w-reading text-lg leading-relaxed text-ink">
            {children}
          </div>
        </div>
      </div>
    </article>
  );
}
