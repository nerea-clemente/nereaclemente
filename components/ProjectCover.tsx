"use client";

import type { Project } from "@/lib/projects";
import { getWorld } from "@/lib/worlds";
import { useT } from "@/lib/i18n/context";
import { ui } from "@/lib/i18n/strings";
import { Asterisk } from "./kit";

/**
 * Cover for a case until it has real imagery: the world's paper and ink,
 * the shared asterisk in the world's colour and the title set large.
 */
export function ProjectCover({ project }: { project: Project }) {
  const t = useT();
  const w = getWorld(project.world)!;
  const p = w.palette;
  return (
    <div className="poster absolute inset-0 overflow-hidden" style={{ backgroundColor: p.page, color: p.ink }}>
      <div className="absolute inset-0 flex flex-col justify-between p-[6cqmin]">
        <div className="flex items-start justify-between gap-4">
          <span className="label">
            {w.n} / {t(w.short)}
          </span>
          <Asterisk className="h-[18cqmin] w-[18cqmin] transition-transform duration-700 ease-soft group-hover:rotate-45" color={p.mid} />
        </div>
        <div>
          <p className="display" style={{ fontSize: "min(12cqw, 16cqh)", lineHeight: 0.92 }}>
            {t(project.title)}
          </p>
          <p className="label mt-[3cqmin] opacity-70">
            {t(ui.categoryLabels[project.category])} · {project.year}
          </p>
        </div>
      </div>
    </div>
  );
}
