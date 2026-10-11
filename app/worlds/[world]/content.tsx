"use client";

import type { WorldSlug } from "@/lib/worlds";
import { SeafoodWorld } from "@/components/worlds/SeafoodWorld";
import { BrandWorld } from "@/components/worlds/BrandWorld";
import { AiWorld } from "@/components/worlds/AiWorld";
import { ContentWorld } from "@/components/worlds/ContentWorld";
import { PlaygroundWorld } from "@/components/worlds/PlaygroundWorld";

const PAGES: Record<WorldSlug, () => JSX.Element> = {
  seafood: SeafoodWorld,
  brand: BrandWorld,
  ai: AiWorld,
  content: ContentWorld,
  playground: PlaygroundWorld,
};

/** Each world has its own page, built from its visual direction. */
export function WorldContent({ slug }: { slug: WorldSlug }) {
  const Page = PAGES[slug];
  return <Page />;
}
