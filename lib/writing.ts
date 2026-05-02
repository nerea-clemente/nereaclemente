import type { Bilingual } from "./i18n/types";

const b = <T,>(en: T, es: T): Bilingual<T> => ({ en, es });

export type ArticleCategory = "Essay" | "Field note" | "Interview" | "Briefing";

export const articleCategoryLabels: Record<ArticleCategory, Bilingual> = {
  Essay: b("Essay", "Ensayo"),
  "Field note": b("Field note", "Nota de campo"),
  Interview: b("Interview", "Entrevista"),
  Briefing: b("Briefing", "Briefing"),
};

export type Article = {
  slug: string;
  category: ArticleCategory;
  title: Bilingual;
  dek: Bilingual;
  readTime: Bilingual;
  date: Bilingual;
};

export const articles: Article[] = [
  {
    slug: "aquaculture-without-the-pitch-deck",
    category: "Essay",
    title: b("Aquaculture without the pitch deck", "Acuicultura sin la presentación a inversores"),
    dek: b(
      "On writing about a sector that keeps being explained to people instead of shown to them.",
      "Sobre escribir sobre un sector al que insiste en explicarse en vez de mostrarse."
    ),
    readTime: b("7 min read", "7 min de lectura"),
    date: b("March 2026", "Marzo de 2026"),
  },
  {
    slug: "feed-is-the-story",
    category: "Essay",
    title: b("Feed is the story", "El pienso es la historia"),
    dek: b(
      "Most of aquaculture's environmental footprint, and most of its communication problem, starts with what goes into the fish.",
      "La mayor parte de la huella ambiental de la acuicultura — y de su problema de comunicación — empieza en lo que come el pez."
    ),
    readTime: b("9 min read", "9 min de lectura"),
    date: b("January 2026", "Enero de 2026"),
  },
  {
    slug: "a-language-for-welfare",
    category: "Briefing",
    title: b("A working language for welfare", "Un lenguaje de trabajo para el bienestar"),
    dek: b(
      "Welfare indicators read like code to outside readers. A short note on translating them without softening them.",
      "Los indicadores de bienestar parecen código para alguien de fuera. Una nota breve sobre traducirlos sin suavizarlos."
    ),
    readTime: b("5 min read", "5 min de lectura"),
    date: b("November 2025", "Noviembre de 2025"),
  },
  {
    slug: "sustainability-without-greenwash",
    category: "Essay",
    title: b("Writing sustainability without the greenwash", "Escribir sostenibilidad sin greenwashing"),
    dek: b(
      "Three editorial habits that keep sustainability communication honest — and readable.",
      "Tres hábitos editoriales que mantienen honesta — y legible — la comunicación de sostenibilidad."
    ),
    readTime: b("6 min read", "6 min de lectura"),
    date: b("September 2025", "Septiembre de 2025"),
  },
  {
    slug: "interview-farm-manager",
    category: "Interview",
    title: b("On the farm, in October", "En la granja, en octubre"),
    dek: b(
      "An interview with a farm manager about cold water, long shifts and what quality actually means in practice.",
      "Una entrevista con una responsable de granja sobre el agua fría, los turnos largos y qué quiere decir calidad en la práctica."
    ),
    readTime: b("11 min read", "11 min de lectura"),
    date: b("August 2025", "Agosto de 2025"),
  },
  {
    slug: "ports-field-note",
    category: "Field note",
    title: b("Field note: a Tuesday at the port", "Nota de campo: un martes en el puerto"),
    dek: b(
      "Notes from a morning at a Spanish fish market, and what it keeps teaching me about provenance claims.",
      "Notas de una mañana en una lonja española y de lo que sigue enseñándome sobre las reclamaciones de origen."
    ),
    readTime: b("4 min read", "4 min de lectura"),
    date: b("June 2025", "Junio de 2025"),
  },
];
