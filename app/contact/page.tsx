import type { Metadata } from "next";
import { ContactContent } from "./content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch about brand strategy, campaigns, content, AI tools or communication for seafood and aquaculture.",
};

export default function ContactPage() {
  return <ContactContent />;
}
