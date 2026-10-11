import type { Metadata } from "next";
import { AboutContent } from "./content";

export const metadata: Metadata = {
  title: "About",
  description:
    "Nerea Clemente: marketing and communications between strategy and creativity: seafood & aquaculture, brand & strategy, AI & automation, creative & content.",
};

export default function AboutPage() {
  return <AboutContent />;
}
