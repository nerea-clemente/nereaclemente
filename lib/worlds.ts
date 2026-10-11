import type { CSSProperties } from "react";
import type { Bilingual } from "./i18n/types";

const b = <T,>(en: T, es: T): Bilingual<T> => ({ en, es });

export type WorldSlug = "seafood" | "brand" | "ai" | "content" | "playground";

export type WorldPalette = {
  /** Main colour: tiles, covers, world headers. */
  deep: string;
  mid: string;
  light: string;
  /** Lightest tint: section backgrounds. */
  tint: string;
  /** Accessible text colour on white (AA for body text). */
  text: string;
  /** Text colour on top of `deep`. */
  on: string;
  /** Page background of the world's section. */
  page: string;
  /** Headline / ink colour on the page background. */
  ink: string;
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
      deep: "#0B1F4D",
      mid: "#2F7DF0",
      light: "#9CCBF5",
      tint: "#E6F2FB",
      text: "#0B3A8C",
      on: "#FFFFFF",
      page: "#D9ECF8",
      ink: "#0B1F4D",
    },
    lede: b(
      "Where it all started: fish farms, science and sustainability, told so people actually care.",
      "Donde empezó todo: piscifactorías, ciencia y sostenibilidad, contadas para que a la gente le importen."
    ),
    description: b(
      "This is home. I've spent years inside aquaculture and seafood, translating research, feed trials and sustainability data into stories that buyers, journalists and curious people can actually use.",
      "Esta es mi casa. He pasado años dentro de la acuicultura y el sector del mar, traduciendo investigación, ensayos de pienso y datos de sostenibilidad a historias que compradores, periodistas y gente curiosa pueden usar de verdad."
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
      deep: "#4A0F25",
      mid: "#7A1E3E",
      light: "#E9A9BC",
      tint: "#F7E1E7",
      text: "#5C1430",
      on: "#FFFFFF",
      page: "#F2C6D1",
      ink: "#3E0B1E",
    },
    lede: b(
      "Figuring out what a brand really stands for, and helping it say so out loud.",
      "Descubrir qué defiende de verdad una marca y ayudarla a decirlo en voz alta."
    ),
    description: b(
      "Before any logo or campaign, I like to sit with the hard question: what do you actually stand for? Then I build the story, the positioning and the campaigns that carry it across markets and languages.",
      "Antes de cualquier logo o campaña, me gusta sentarme con la pregunta difícil: ¿qué defiendes de verdad? Después construyo la historia, el posicionamiento y las campañas que lo llevan a otros mercados e idiomas."
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
      deep: "#0F3D2A",
      mid: "#3E7D57",
      light: "#C6EC6A",
      tint: "#EEF7EA",
      text: "#0F3D2A",
      on: "#FFFFFF",
      page: "#E2F1DC",
      ink: "#0F3D2A",
    },
    lede: b(
      "Small, useful systems that give people their time back.",
      "Sistemas pequeños y útiles que devuelven tiempo a las personas."
    ),
    description: b(
      "I build AI agents, automations and internal tools for real teams. No robots, no buzzwords: each case shows the problem, how I solved it and why it made someone's week easier.",
      "Construyo agentes de IA, automatizaciones y herramientas internas para equipos reales. Sin robots ni palabras de moda: cada caso cuenta el problema, cómo lo resolví y por qué le hizo la semana más fácil a alguien."
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
      deep: "#F0642E",
      mid: "#F58A5C",
      light: "#FBC7AA",
      tint: "#FDE7DA",
      text: "#B23F14",
      on: "#141414",
      page: "#FBD3BE",
      ink: "#141414",
    },
    lede: b(
      "Campaigns, stories, social, copy, design and video: my loudest, most colourful side.",
      "Campañas, historias, redes, copy, diseño y vídeo: mi lado más ruidoso y colorido."
    ),
    description: b(
      "This is where I get to play with words and pictures. The real pieces are the stars here. The orange is just the frame.",
      "Aquí es donde juego con palabras e imágenes. Las piezas reales son las protagonistas; el naranja solo es el marco."
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
      deep: "#2B0F6B",
      mid: "#6A35D8",
      light: "#C8B0F4",
      tint: "#EFE7FD",
      text: "#4A1FB0",
      on: "#FFFFFF",
      page: "#C8B0F4",
      ink: "#2B0F6B",
    },
    lede: b(
      "My sandbox: ideas, experiments and things I make just for fun.",
      "Mi patio de juegos: ideas, experimentos y cosas que hago solo por diversión."
    ),
    description: b(
      "Visual experiments, personal designs, little side projects, AI tests: the things I make on a Sunday because I can't help it. None of it had a brief, and that's the point.",
      "Experimentos visuales, diseños personales, pequeños proyectos, pruebas de IA: las cosas que hago un domingo porque no puedo evitarlo. Nada de esto tuvo brief, y ahí está la gracia."
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
