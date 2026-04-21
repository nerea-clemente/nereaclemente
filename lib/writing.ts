export type Article = {
  slug: string;
  title: string;
  dek: string;
  category: "Essay" | "Field note" | "Interview" | "Briefing";
  readTime: string;
  date: string;
  href?: string;
};

export const articles: Article[] = [
  {
    slug: "aquaculture-without-the-pitch-deck",
    title: "Aquaculture without the pitch deck",
    dek: "On writing about a sector that keeps being explained to people instead of shown to them.",
    category: "Essay",
    readTime: "7 min read",
    date: "March 2026",
  },
  {
    slug: "feed-is-the-story",
    title: "Feed is the story",
    dek: "Most of aquaculture's environmental footprint, and most of its communication problem, starts with what goes into the fish.",
    category: "Essay",
    readTime: "9 min read",
    date: "January 2026",
  },
  {
    slug: "a-language-for-welfare",
    title: "A working language for welfare",
    dek: "Welfare indicators read like code to outside readers. A short note on translating them without softening them.",
    category: "Briefing",
    readTime: "5 min read",
    date: "November 2025",
  },
  {
    slug: "sustainability-without-greenwash",
    title: "Writing sustainability without the greenwash",
    dek: "Three editorial habits that keep sustainability communication honest — and readable.",
    category: "Essay",
    readTime: "6 min read",
    date: "September 2025",
  },
  {
    slug: "interview-farm-manager",
    title: "On the farm, in October",
    dek: "An interview with a farm manager about cold water, long shifts and what quality actually means in practice.",
    category: "Interview",
    readTime: "11 min read",
    date: "August 2025",
  },
  {
    slug: "ports-field-note",
    title: "Field note: a Tuesday at the port",
    dek: "Notes from a morning at a Spanish fish market, and what it keeps teaching me about provenance claims.",
    category: "Field note",
    readTime: "4 min read",
    date: "June 2025",
  },
];
