import type { Bilingual } from "./i18n/types";

const b = <T,>(en: T, es: T): Bilingual<T> => ({ en, es });

export type Expertise = {
  title: Bilingual;
  description: Bilingual;
  items: Bilingual<string[]>;
};

export const expertise: Expertise[] = [
  {
    title: b("Strategy & positioning", "Estrategia y posicionamiento"),
    description: b(
      "Working out what a company or project actually stands for, before writing a single word.",
      "Descubrir qué representa de verdad una empresa o un proyecto, antes de escribir una sola palabra."
    ),
    items: b(
      ["Brand narrative", "Messaging frameworks", "Audience mapping", "Launch strategy"],
      ["Narrativa de marca", "Marcos de mensajes", "Mapa de audiencias", "Estrategia de lanzamiento"]
    ),
  },
  {
    title: b("Editorial & content", "Editorial y contenido"),
    description: b(
      "Long-form writing and editorial direction for technical sectors, in British English.",
      "Textos largos y dirección editorial para sectores técnicos, en inglés británico."
    ),
    items: b(
      ["Long-form articles", "Reports and briefings", "Interview series", "Editorial direction"],
      ["Artículos largos", "Informes y briefings", "Series de entrevistas", "Dirección editorial"]
    ),
  },
  {
    title: b("Science communication", "Comunicación científica"),
    description: b(
      "Translating research, trials and data into material that non-technical audiences can use.",
      "Traducir investigación, ensayos y datos a material que las audiencias no técnicas puedan usar."
    ),
    items: b(
      ["Research briefings", "Explainers", "Plain-language summaries", "Visual direction for data"],
      ["Briefings de investigación", "Explicadores", "Resúmenes en lenguaje llano", "Dirección visual para datos"]
    ),
  },
  {
    title: b("Campaigns & social", "Campañas y redes"),
    description: b(
      "Integrated campaigns that run across channels without losing tone.",
      "Campañas integradas que funcionan en varios canales sin perder el tono."
    ),
    items: b(
      ["Campaign concept", "LinkedIn and Instagram editorial", "Newsletter content", "Press and PR support"],
      ["Concepto de campaña", "Editorial para LinkedIn e Instagram", "Contenido para newsletter", "Apoyo en prensa y RR. PP."]
    ),
  },
];

export const sectors: Bilingual<string>[] = [
  b("Aquaculture", "Acuicultura"),
  b("Seafood", "Pesca y marisco"),
  b("Sustainability", "Sostenibilidad"),
  b("Food systems", "Sistemas alimentarios"),
  b("Fisheries", "Pesquerías"),
  b("Marine sciences", "Ciencias marinas"),
  b("Technical B2B", "B2B técnico"),
];

export const principles = [
  {
    n: "01",
    title: b(
      "Start on the farm, not in the deck.",
      "Empezar en la granja, no en la presentación."
    ),
    body: b(
      "The best communication in technical sectors comes from time on site. I spend time with the people actually doing the work before I write for them.",
      "La mejor comunicación en sectores técnicos sale de pasar tiempo en el terreno. Pasamos tiempo con las personas que hacen el trabajo antes de escribir para ellas."
    ),
  },
  {
    n: "02",
    title: b("Translate, do not simplify.", "Traducir, no simplificar."),
    body: b(
      "Clarity is an editorial craft. Precision survives the edit when the first draft starts from the primary source.",
      "La claridad es un oficio editorial. La precisión sobrevive a la edición cuando el primer borrador parte de la fuente primaria."
    ),
  },
  {
    n: "03",
    title: b(
      "Keep the uncertainty visible.",
      "Mantener visible la incertidumbre."
    ),
    body: b(
      "Greenwash happens in the gap between what is known and what is claimed. I keep that gap named and honest.",
      "El greenwash vive en el hueco entre lo que se sabe y lo que se afirma. Mantenemos ese hueco nombrado y honesto."
    ),
  },
  {
    n: "04",
    title: b("One argument, several pieces.", "Un argumento, varias piezas."),
    body: b(
      "A campaign is an argument held across formats. Editorial discipline beats volume, and compounds over a year.",
      "Una campaña es un argumento sostenido en varios formatos. La disciplina editorial gana al volumen y se acumula a lo largo del año."
    ),
  },
];
