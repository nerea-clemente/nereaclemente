"use client";

import { usePathname } from "next/navigation";
import { getProject } from "./projects";
import { getWorld, type World } from "./worlds";

/** The world the visitor is currently in, derived from the URL. */
export function useActiveWorld(): World | undefined {
  const parts = (usePathname() ?? "/").split("/").filter(Boolean);
  if (parts[0] === "worlds" && parts[1]) return getWorld(parts[1]);
  if (parts[0] === "work" && parts[1]) {
    const project = getProject(parts[1]);
    return project ? getWorld(project.world) : undefined;
  }
  return undefined;
}
