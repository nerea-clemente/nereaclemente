import type { Metadata } from "next";
import { AboutContent } from "./content";

export const metadata: Metadata = {
  title: "About",
  description:
    "Nerea Clemente — marketing and communications for aquaculture, seafood, sustainability and science communication.",
};

export default function AboutPage() {
  return <AboutContent />;
}
