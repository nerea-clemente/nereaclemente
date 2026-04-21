import Link from "next/link";
import { Project } from "@/lib/projects";

type Variant = "default" | "featured" | "compact";

const toneMap: Record<string, string> = {
  sea: "bg-sea text-paper",
  deep: "bg-deep text-paper",
  tide: "bg-tide text-paper",
  wave: "bg-wave text-paper",
  shell: "bg-shell text-ink",
  sand: "bg-sand text-ink",
  paper: "bg-paper text-ink ring-1 ring-line",
  clay: "bg-clay text-paper",
};

function pickTone(slug: string) {
  const tones = ["tide", "shell", "sea", "paper", "wave", "clay", "sand"];
  const idx = Math.abs(
    [...slug].reduce((acc, c) => acc + c.charCodeAt(0), 0)
  ) % tones.length;
  return tones[idx];
}

export function ProjectCard({
  project,
  variant = "default",
  index,
}: {
  project: Project;
  variant?: Variant;
  index?: number;
}) {
  const tone = pickTone(project.slug);

  if (variant === "compact") {
    return (
      <Link
        href={`/work/${project.slug}`}
        className="group grid grid-cols-[auto_1fr_auto] items-baseline gap-6 border-b border-line py-6 transition-colors hover:bg-shell/40 md:gap-10 md:py-8"
      >
        <span className="font-mono text-sm text-muted">
          {String((index ?? 0) + 1).padStart(2, "0")}
        </span>
        <span className="flex flex-col gap-1 md:flex-row md:items-baseline md:gap-6">
          <span className="font-display text-2xl text-ink transition-transform duration-500 ease-soft group-hover:-translate-x-0.5 md:text-3xl">
            {project.title}
          </span>
          <span className="text-sm text-muted">{project.summary}</span>
        </span>
        <span className="hidden text-xs uppercase tracking-caps text-muted md:inline">
          {project.category} · {project.year}
        </span>
      </Link>
    );
  }

  if (variant === "featured") {
    return (
      <Link
        href={`/work/${project.slug}`}
        className="group grid gap-6 md:grid-cols-12 md:gap-10"
      >
        <div
          className={`relative aspect-[4/3] overflow-hidden rounded-sm md:col-span-7 md:aspect-[16/11] ${toneMap[tone]}`}
        >
          <PlaceholderArt slug={project.slug} tone={tone} />
          <div className="absolute inset-0 flex items-end p-6 md:p-10">
            <div className="flex flex-col gap-2">
              <span className="text-xs uppercase tracking-caps opacity-80">
                {project.category} · {project.year}
              </span>
              <span className="font-display text-3xl leading-tight md:text-5xl">
                {project.title}
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-end gap-5 md:col-span-5 md:py-6">
          <p className="max-w-reading text-lg leading-relaxed text-ink">
            {project.summary}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.disciplines.map((d) => (
              <span
                key={d}
                className="border border-line px-3 py-1 text-xs uppercase tracking-caps text-muted"
              >
                {d}
              </span>
            ))}
          </div>
          <span className="inline-flex items-center gap-3 border-b border-ink pb-1 text-sm uppercase tracking-caps text-ink transition-all group-hover:gap-5">
            Read the case study <span aria-hidden>→</span>
          </span>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={`/work/${project.slug}`}
      className="group flex flex-col gap-5"
    >
      <div
        className={`relative aspect-[4/5] overflow-hidden rounded-sm transition-transform duration-700 ease-soft group-hover:-translate-y-1 ${toneMap[tone]}`}
      >
        <PlaceholderArt slug={project.slug} tone={tone} />
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between text-xs uppercase tracking-caps text-muted">
          <span>{project.category}</span>
          <span>{project.year}</span>
        </div>
        <h3 className="font-display text-2xl text-ink md:text-3xl">
          {project.title}
        </h3>
        <p className="max-w-reading text-base text-muted">
          {project.summary}
        </p>
      </div>
    </Link>
  );
}

function PlaceholderArt({ slug, tone }: { slug: string; tone: string }) {
  // Deterministic, minimal editorial placeholders — thin type + line marks.
  const seed = Math.abs([...slug].reduce((a, c) => a + c.charCodeAt(0), 0));
  const rotation = (seed % 7) - 3;
  const lines = 3 + (seed % 3);
  const offset = seed % 20;

  return (
    <div className="absolute inset-0">
      <svg
        viewBox="0 0 400 300"
        className="absolute inset-0 h-full w-full opacity-70"
        preserveAspectRatio="none"
        aria-hidden
      >
        {Array.from({ length: lines }).map((_, i) => (
          <path
            key={i}
            d={`M0 ${60 + i * 50 + offset} Q 200 ${30 + i * 40} 400 ${
              70 + i * 55
            }`}
            stroke="currentColor"
            strokeWidth="0.6"
            fill="none"
            opacity={0.35 + i * 0.12}
          />
        ))}
      </svg>
      <div
        className="absolute left-6 top-6 font-display text-5xl leading-none opacity-20 md:text-7xl"
        style={{ transform: `rotate(${rotation}deg)` }}
      >
        {slug.replace(/-/g, " ").slice(0, 2)}
      </div>
      <div className="absolute right-6 top-6 font-mono text-[10px] uppercase tracking-caps opacity-70">
        Nereaclemente · Folio
      </div>
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/20 to-transparent" />
    </div>
  );
}
