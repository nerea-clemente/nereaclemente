"use client";

import Link from "next/link";
import type { World } from "@/lib/worlds";
import { useT } from "@/lib/i18n/context";
import { WorldPoster } from "./WorldPoster";

/** Entrance to one world: its poster, then number, name and register. */
export function WorldTile({
  world,
  onHover,
  aspect = "aspect-[4/5]",
  compact = false,
}: {
  world: World;
  onHover?: (world: World | null) => void;
  aspect?: string;
  compact?: boolean;
}) {
  const t = useT();
  return (
    <Link
      href={`/worlds/${world.slug}`}
      onMouseEnter={() => onHover?.(world)}
      onMouseLeave={() => onHover?.(null)}
      onFocus={() => onHover?.(world)}
      onBlur={() => onHover?.(null)}
      className="group flex h-full flex-col"
    >
      <div className={`relative ${aspect} w-full overflow-hidden`}>
        <div className="absolute inset-0 transition-transform duration-700 ease-soft group-hover:scale-[1.03]">
          <WorldPoster
            world={world}
            title={t(world.poster.title)}
            caption={compact ? undefined : t(world.poster.caption)}
            fragments={t(world.poster.fragments)}
            kicker={`${world.n} / ${world.style}`}
          />
        </div>
      </div>
      <div className="flex items-baseline justify-between gap-3 border-b border-ink py-3">
        <span className="flex items-baseline gap-3">
          <span className="serif text-xl" style={{ color: world.palette.text }}>
            {world.n}
          </span>
          <span className="font-display text-base text-ink md:text-lg">{t(world.name)}</span>
        </span>
        <span aria-hidden className="text-ink transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      </div>
    </Link>
  );
}
