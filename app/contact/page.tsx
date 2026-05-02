import type { Metadata } from "next";
import { ContactContent } from "./content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch about campaigns, editorial, sustainability reporting or science communication work.",
};

export default function ContactPage() {
  return <ContactContent />;
}
