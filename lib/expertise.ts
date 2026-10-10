import type { Bilingual } from "./i18n/types";

const b = <T,>(en: T, es: T): Bilingual<T> => ({ en, es });

export const principles = [
  {
    n: "01",
    title: b(
      "Start with the people, not the deck.",
      "Empezar por las personas, no por la presentación."
    ),
    body: b(
      "The best work comes from time with the people actually doing it — on a farm, inside a team, behind a product. I listen before I write, design or build anything.",
      "El mejor trabajo sale de pasar tiempo con quienes lo hacen de verdad — en una granja, dentro de un equipo, detrás de un producto. Escucho antes de escribir, diseñar o construir nada."
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
