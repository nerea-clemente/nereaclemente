"use client";

import Link from "next/link";
import type { World } from "@/lib/worlds";
import { useT } from "@/lib/i18n/context";

/** Coloured entrance block for one world: number, name and visual register. */
export function WorldTile({
  world,
  onHover,
  size = "default",
}: {
  world: World;
  onHover?: (world: World | null) => void;
  size?: "default" | "tall";
}) {
  const t = useT();
  const playful = world.slug === "playground";
  return (
    <Link
      href={`/worlds/${world.slug}`}
      onMouseEnter={() => onHover?.(world)}
      onMouseLeave={() => onHover?.(null)}
      onFocus={() => onHover?.(world)}
      onBlur={() => onHover?.(null)}
      className={`group relative flex flex-col justify-between overflow-hidden p-4 transition-transform duration-500 ease-soft hover:-translate-y-1 md:p-5 ${
        size === "tall" ? "min-h-[15rem] md:min-h-[22rem]" : "min-h-[9rem] md:min-h-[12rem]"
      }`}
      style={{ backgroundColor: world.palette.deep, color: world.palette.on }}
    >
      <span className="font-display-tight text-2xl md:text-3xl">{world.n}</span>
      <span className="flex flex-col gap-1">
        <span
          className={`font-display text-base leading-tight md:text-lg ${
            playful ? "inline-block origin-left transition-transform duration-500 ease-soft group-hover:-rotate-3" : ""
          }`}
        >
          {t(world.name)}
        </span>
        <span className="label opacity-75">{world.style}</span>
      </span>
      {/* A quiet second tone slides in on hover */}
      <span
        aria-hidden
        className="absolute bottom-0 right-0 h-1.5 w-0 transition-all duration-500 ease-soft group-hover:w-full"
        style={{ backgroundColor: world.palette.light }}
      />
    </Link>
  );
}
