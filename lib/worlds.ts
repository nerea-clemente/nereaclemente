import type { CSSProperties } from "react";
import type { Bilingual } from "./i18n/types";

const b = <T,>(en: T, es: T): Bilingual<T> => ({ en, es });

export type WorldSlug = "seafood" | "brand" | "ai" | "content" | "playground";

export type WorldPalette = {
  /** Main colour — tiles, covers, world headers. */
  deep: string;
  mid: string;
  light: string;
  /** Lightest tint — section backgrounds. */
  tint: string;
  /** Accessible text colour on white (AA for body text). */
  text: string;
  /** Text colour on top of `deep`. */
  on: string;
};

export type World = {
  slug: WorldSlug;
  n: string;
  name: Bilingual;
  short: Bilingual;
  /** Visual register, e.g. "Ocean Editorial". Kept in English in both locales. */
  style: string;
  palette: WorldPalette;
  lede: Bilingual;
  description: Bilingual;
  shows: Bilingual<string[]>;
  /** Copy for the world's typographic poster. */
  poster: {
    title: Bilingual;
    caption: Bilingual;
    fragments: Bilingual<string[]>;
  };
};

export const worlds: World[] = [
  {
    slug: "seafood",
    n: "01",
    name: b("Seafood & Aquaculture", "Seafood y Acuicultura"),
    short: b("Seafood", "Seafood"),
    style: "Ocean Editorial",
    palette: {
      deep: "#083B66",
      mid: "#1679B8",
      light: "#83D3EF",
      tint: "#EDF7FB",
      text: "#083B66",
      on: "#FFFFFF",
    },
    lede: b(
      "Sector knowledge, science, sustainability and communication — from the farm to the page.",
      "Conocimiento sectorial, ciencia, sostenibilidad y comunicación — de la granja a la página."
    ),
    description: b(
      "Years of working inside aquaculture and seafood: translating research, feed trials and sustainability data into communication that buyers, journalists and the wider public can actually use.",
      "Años trabajando dentro de la acuicultura y el sector del mar: traducir investigación, ensayos de pienso y datos de sostenibilidad a una comunicación que compradores, periodistas y público general puedan usar de verdad."
    ),
    shows: b(
      ["Science communication", "Educational content", "Sustainability", "Sector campaigns"],
      ["Comunicación científica", "Contenido educativo", "Sostenibilidad", "Campañas sectoriales"]
    ),
    poster: {
      title: b("Seafood", "Seafood"),
      caption: b("From the farm to the page.", "De la granja a la página."),
      fragments: b(["Science", "Feed", "Sustainability"], ["Ciencia", "Pienso", "Sostenibilidad"]),
    },
  },
  {
    slug: "brand",
    n: "02",
    name: b("Brand & Strategy", "Marca y Estrategia"),
    short: b("Brand", "Marca"),
    style: "Bold Editorial",
    palette: {
      deep: "#421F36",
      mid: "#762D46",
      light: "#DCA9BA",
      tint: "#F7ECE7",
      text: "#421F36",
      on: "#FFFFFF",
    },
    lede: b(
      "Positioning, brand strategy, campaigns and international marketing.",
      "Posicionamiento, estrategia de marca, campañas y marketing internacional."
    ),
    description: b(
      "Working out what a company or project actually stands for before writing a single word — then building the narrative, identity and campaigns that carry it across markets.",
      "Descubrir qué representa de verdad una empresa o un proyecto antes de escribir una sola palabra — y después construir la narrativa, la identidad y las campañas que lo llevan a otros mercados."
    ),
    shows: b(
      ["Positioning", "Brand strategy", "Campaigns", "Identity", "International marketing"],
      ["Posicionamiento", "Estrategia de marca", "Campañas", "Identidad", "Marketing internacional"]
    ),
    poster: {
      title: b("Brand", "Marca"),
      caption: b("Strategy before style.", "Estrategia antes que estilo."),
      fragments: b(["Positioning", "Identity", "Campaigns", "Markets"], ["Posicionamiento", "Identidad", "Campañas", "Mercados"]),
    },
  },
  {
    slug: "ai",
    n: "03",
    name: b("AI & Automation", "IA y Automatización"),
    short: b("AI", "IA"),
    style: "Organic Technology",
    palette: {
      deep: "#153F32",
      mid: "#40866B",
      light: "#BCEC78",
      tint: "#E5F4E8",
      text: "#153F32",
      on: "#FFFFFF",
    },
    lede: b(
      "Connected systems, experimentation and practical solutions.",
      "Sistemas conectados, experimentación y soluciones prácticas."
    ),
    description: b(
      "AI agents, automations and internal tools built for real teams. Each case shows the problem, the process and why it is useful — not the hype around it.",
      "Agentes de IA, automatizaciones y herramientas internas pensadas para equipos reales. Cada caso muestra el problema, el proceso y por qué es útil — no el ruido alrededor."
    ),
    shows: b(
      ["AI agents", "Automations", "Internal tools", "Solutions for companies"],
      ["Agentes de IA", "Automatizaciones", "Herramientas internas", "Soluciones para empresas"]
    ),
    poster: {
      title: b("AI & Automation", "IA y Automatización"),
      caption: b("Problem → process → useful", "Problema → proceso → útil"),
      fragments: b(["Agents", "Flows", "Tools"], ["Agentes", "Flujos", "Herramientas"]),
    },
  },
  {
    slug: "content",
    n: "04",
    name: b("Creative & Content", "Creatividad y Contenido"),
    short: b("Content", "Contenido"),
    style: "Playful Editorial",
    palette: {
      deep: "#E85D2A",
      mid: "#F48D71",
      light: "#F8C4A2",
      tint: "#FFF1E4",
      text: "#B23F14",
      on: "#141414",
    },
    lede: b(
      "Campaigns, storytelling, social media, copywriting, design and video.",
      "Campañas, storytelling, redes sociales, copywriting, diseño y vídeo."
    ),
    description: b(
      "The most energetic, visual and expressive side of the work. The real pieces lead — the colour of this world only frames them.",
      "La parte más energética, visual y expresiva del trabajo. Las piezas reales son las protagonistas — el color de este mundo solo las enmarca."
    ),
    shows: b(
      ["Creative campaigns", "Storytelling", "Social media", "Copywriting", "Design & video"],
      ["Campañas creativas", "Storytelling", "Redes sociales", "Copywriting", "Diseño y vídeo"]
    ),
    poster: {
      title: b("Creative & Content", "Creatividad y Contenido"),
      caption: b("The real pieces lead.", "Las piezas reales mandan."),
      fragments: b(["Story", "Social", "Copy", "Video"], ["Historia", "Social", "Copy", "Vídeo"]),
    },
  },
  {
    slug: "playground",
    n: "05",
    name: b("Playground", "Playground"),
    short: b("Playground", "Playground"),
    style: "Creative Chaos",
    palette: {
      deep: "#6436C8",
      mid: "#9565E0",
      light: "#C9B5F0",
      tint: "#F0E9FC",
      text: "#5A2FB8",
      on: "#FFFFFF",
    },
    lede: b(
      "A space to explore ideas, experiment and follow creative curiosity.",
      "Un espacio para explorar ideas, experimentar y seguir la curiosidad creativa."
    ),
    description: b(
      "Visual experiments, personal designs, small side projects, AI tests and things made purely for the pleasure of making them.",
      "Experimentos visuales, diseños personales, pequeños proyectos, pruebas de IA e ideas hechas por el puro placer de crear."
    ),
    shows: b(
      ["Visual experiments", "Personal designs", "Side projects", "AI tests"],
      ["Experimentos visuales", "Diseños personales", "Pequeños proyectos", "Pruebas de IA"]
    ),
    poster: {
      title: b("Playground", "Playground"),
      caption: b("experimental", "experimental"),
      fragments: b(["Tests", "Toys", "Ideas"], ["Pruebas", "Juegos", "Ideas"]),
    },
  },
];

export function getWorld(slug: string) {
  return worlds.find((w) => w.slug === slug);
}

/** CSS custom properties consumed by the `w-*` Tailwind colours. */
export function worldStyle(world?: World): CSSProperties {
  if (!world) return {};
  const p = world.palette;
  return {
    "--w-deep": p.deep,
    "--w-mid": p.mid,
    "--w-light": p.light,
    "--w-tint": p.tint,
    "--w-text": p.text,
    "--w-on": p.on,
  } as CSSProperties;
}
