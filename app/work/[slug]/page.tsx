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

const toneMap: Record<string, string> = {
  sea: "bg-sea text-paper",
  deep: "bg-deep text-paper",
  tide: "bg-tide text-paper",
  wave: "bg-wave text-paper",
  shell: "bg-shell text-ink",
  sand: "bg-sand text-ink",
  paper: "bg-paper text-ink",
  clay: "bg-clay text-paper",
};

const heroTones = ["tide", "sea", "wave", "deep"] as const;
function heroTone(slug: string) {
  const idx = Math.abs([...slug].reduce((a, c) => a + c.charCodeAt(0), 0)) % heroTones.length;
  return heroTones[idx];
}

export default function CaseStudyPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = getProject(params.slug);
  if (!project) notFound();

  const currentIndex = projects.findIndex((p) => p.slug === project.slug);
  const nextProject =
    projects[(currentIndex + 1) % projects.length];

  return (
    <>
      <section className="pt-12 pb-10 md:pt-20">
        <Container>
          <div className="flex items-center gap-4 text-xs uppercase tracking-caps text-muted">
            <Link href="/work" className="hover:text-ink">
              Work
            </Link>
            <span className="text-line">/</span>
            <span>{project.category}</span>
          </div>
          <h1 className="mt-8 max-w-5xl font-display text-display-xl text-ink">
            {project.title}
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-muted md:text-xl">
            {project.overview}
          </p>
          <dl className="mt-14 grid grid-cols-2 gap-8 border-y border-line py-8 md:grid-cols-4">
            <div>
              <dt className="text-xs uppercase tracking-caps text-muted">
                Client
              </dt>
              <dd className="mt-2 text-base text-ink">{project.client}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-caps text-muted">
                Year
              </dt>
              <dd className="mt-2 text-base text-ink">{project.year}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-caps text-muted">
                Category
              </dt>
              <dd className="mt-2 text-base text-ink">{project.category}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-caps text-muted">
                Disciplines
              </dt>
              <dd className="mt-2 flex flex-wrap gap-1 text-base text-ink">
                {project.disciplines.join(" · ")}
              </dd>
            </div>
          </dl>
        </Container>
      </section>

      {/* Hero visual */}
      <section className="pb-16 md:pb-24">
        <Container>
          <div className={`relative aspect-[16/9] w-full overflow-hidden rounded-sm ${toneMap[heroTone(project.slug)]}`}>
            <svg
              viewBox="0 0 1600 900"
              className="absolute inset-0 h-full w-full opacity-50"
              preserveAspectRatio="none"
              aria-hidden
            >
              {Array.from({ length: 7 }).map((_, i) => (
                <path
                  key={i}
                  d={`M0 ${150 + i * 100} Q 800 ${50 + i * 80} 1600 ${
                    120 + i * 110
                  }`}
                  stroke="currentColor"
                  strokeWidth="0.5"
                  fill="none"
                  opacity={0.3 + i * 0.08}
                />
              ))}
            </svg>
            <div className="absolute inset-0 flex items-end p-8 md:p-16">
              <div className="flex flex-col gap-3">
                <span className="text-xs uppercase tracking-caps opacity-70">
                  {project.category} · {project.year}
                </span>
                <span className="font-display text-4xl md:text-7xl">
                  {project.title}
                </span>
              </div>
            </div>
            <div className="absolute right-8 top-8 font-mono text-xs uppercase tracking-caps opacity-70 md:right-16 md:top-16">
              Case study · Nereaclemente
            </div>
          </div>
        </Container>
      </section>

      {/* Content sections */}
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
                    <span className="mt-2 inline-block h-px w-6 flex-none bg-tide" />
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
            </CaseSection>
            <CaseSection n="04" label="Execution" title="What got made.">
              <ul className="flex flex-col gap-5">
                {project.execution.map((a, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="mt-2 inline-block h-px w-6 flex-none bg-tide" />
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
            </CaseSection>
            <CaseSection n="05" label="Outcome" title="Where it landed.">
              <ul className="flex flex-col gap-5">
                {project.outcome.map((a, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="mt-2 inline-block h-px w-6 flex-none bg-tide" />
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
            </CaseSection>
          </div>
        </Container>
      </section>

      {project.gallery && project.gallery.length > 0 && (
        <section className="py-20 md:py-28">
          <Container>
            <div className="mb-10 flex items-baseline justify-between border-t border-line pt-8">
              <Eyebrow>Selected visuals</Eyebrow>
              <span className="text-xs uppercase tracking-caps text-muted">
                Placeholders
              </span>
            </div>
            <div className="grid gap-6 md:grid-cols-2 md:gap-10">
              {project.gallery.map((g, i) => (
                <figure
                  key={i}
                  className="flex flex-col gap-3"
                >
                  <div
                    className={`relative aspect-[4/3] overflow-hidden rounded-sm ${toneMap[g.tone]}`}
                  >
                    <svg
                      viewBox="0 0 400 300"
                      className="absolute inset-0 h-full w-full opacity-60"
                      preserveAspectRatio="none"
                      aria-hidden
                    >
                      {Array.from({ length: 5 }).map((_, j) => (
                        <path
                          key={j}
                          d={`M0 ${60 + j * 50 + i * 10} Q 200 ${
                            40 + j * 35
                          } 400 ${80 + j * 55 - i * 5}`}
                          stroke="currentColor"
                          strokeWidth="0.6"
                          fill="none"
                          opacity={0.35 + j * 0.12}
                        />
                      ))}
                    </svg>
                    <div className="absolute left-6 top-6 font-mono text-[10px] uppercase tracking-caps opacity-70">
                      Fig. 0{i + 1}
                    </div>
                  </div>
                  <figcaption className="text-xs uppercase tracking-caps text-muted">
                    {g.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </Container>
        </section>
      )}

      {project.takeaway && (
        <section className="py-24 md:py-32">
          <Container size="narrow">
            <div className="rounded-sm bg-paper p-10 ring-1 ring-line md:p-16">
              <Eyebrow>Key takeaway</Eyebrow>
              <p className="mt-6 font-display text-display-md leading-snug text-ink">
                <span className="text-tide">“</span>
                {project.takeaway}
                <span className="text-tide">”</span>
              </p>
            </div>
          </Container>
        </section>
      )}

      {/* Next project */}
      <section className="py-24 md:py-32">
        <Container>
          <Link
            href={`/work/${nextProject.slug}`}
            className="group flex flex-col gap-4 border-t border-line pt-10"
          >
            <div className="flex items-center justify-between text-xs uppercase tracking-caps text-muted">
              <span>Next project</span>
              <span>{nextProject.category}</span>
            </div>
            <span className="font-display text-display-lg text-ink transition-transform duration-500 ease-soft group-hover:-translate-y-1">
              {nextProject.title} →
            </span>
            <p className="max-w-reading text-lg text-muted">
              {nextProject.summary}
            </p>
          </Link>
        </Container>
      </section>

      <section className="py-16">
        <Container size="narrow">
          <div className="flex flex-col gap-6 text-center">
            <Eyebrow>Available</Eyebrow>
            <p className="font-display text-display-sm text-ink">
              Interested in something in this space? Write to me.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button href="/contact">Contact</Button>
              <Button
                href={`mailto:${site.email}`}
                variant="ghost"
                external
              >
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
      <div className="md:col-span-4 md:border-r md:border-line md:pr-8">
        <div className="flex flex-col gap-2 border-t border-line pt-6">
          <span className="font-mono text-xs uppercase tracking-caps text-muted">
            § {n}
          </span>
          <span className="text-xs uppercase tracking-caps text-tide">
            {label}
          </span>
        </div>
      </div>
      <div className="md:col-span-8">
        <div className="border-t border-line pt-6">
          <h2 className="font-display text-display-sm text-ink">{title}</h2>
          <div className="mt-6 max-w-reading text-lg leading-relaxed text-muted">
            {children}
          </div>
        </div>
      </div>
    </article>
  );
}
