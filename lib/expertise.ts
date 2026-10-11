import type { Bilingual } from "./i18n/types";

const b = <T,>(en: T, es: T): Bilingual<T> => ({ en, es });

export const principles = [
  {
    n: "01",
    title: b(
      "People first, slides later.",
      "Primero las personas, luego las diapositivas."
    ),
    body: b(
      "The best ideas come from time with the people doing the work: on a farm, in a team, behind a product. I listen a lot before I make anything.",
      "Las mejores ideas salen de pasar tiempo con quien hace el trabajo: en una granja, en un equipo, detrás de un producto. Escucho mucho antes de hacer nada."
    ),
  },
  {
    n: "02",
    title: b(
      "Clear, never dumbed down.",
      "Claro, nunca simplón."
    ),
    body: b(
      "Making something clear is a craft. I go back to the source so the detail survives the edit.",
      "Hacer algo claro es un oficio. Vuelvo a la fuente para que el detalle sobreviva a la edición."
    ),
  },
  {
    n: "03",
    title: b(
      "Honest beats impressive.",
      "Mejor honesto que espectacular."
    ),
    body: b(
      "Greenwashing lives in the gap between what we know and what we claim. I'd rather say less and mean it.",
      "El greenwashing vive en el hueco entre lo que sabemos y lo que decimos. Prefiero decir menos y que sea verdad."
    ),
  },
  {
    n: "04",
    title: b(
      "One idea, told many ways.",
      "Una idea, contada de muchas formas."
    ),
    body: b(
      "A good campaign is one idea that keeps showing up in different outfits. Consistency beats volume, every time.",
      "Una buena campaña es una idea que aparece una y otra vez con ropa distinta. La constancia gana al volumen, siempre."
    ),
  },
];
