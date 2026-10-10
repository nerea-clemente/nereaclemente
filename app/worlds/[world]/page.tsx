import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getWorld, worlds } from "@/lib/worlds";
import { WorldContent } from "./content";

export function generateStaticParams() {
  return worlds.map((w) => ({ world: w.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { world: string };
}): Metadata {
  const world = getWorld(params.world);
  if (!world) return { title: "World not found" };
  return {
    title: `${world.n} ${world.name.en}`,
    description: world.lede.en,
  };
}

export default function WorldPage({ params }: { params: { world: string } }) {
  const world = getWorld(params.world);
  if (!world) notFound();
  return <WorldContent slug={world.slug} />;
}
