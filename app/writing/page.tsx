import type { Metadata } from "next";
import { WritingContent } from "./content";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Essays, field notes and briefings on communication, feed, welfare and editorial work in technical sectors.",
};

export default function WritingPage() {
  return <WritingContent />;
}
