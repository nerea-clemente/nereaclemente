import type { Bilingual } from "./i18n/types";

const b = <T,>(en: T, es: T): Bilingual<T> => ({ en, es });

export const siteMeta = {
  name: "Nerea Clemente",
  email: "hello@nereaclemente.com",
  linkedin: "https://www.linkedin.com/in/nereaclemente",
  instagram: "https://www.instagram.com/seafoodonnerea",
  url: "https://nereaclemente.com",
  taglineEn:
    "Marketing, content and communication for aquaculture, seafood and sustainability.",
  subtaglineEn:
    "An independent communications practice run by Nerea Clemente, working from Denmark with a Mediterranean register from Valencia.",
};

export const site = {
  ...siteMeta,
  role: b(
    "Marketing & communications",
    "Marketing y comunicación"
  ),
  location: b(
    "Based in Denmark. From Valencia. Working internationally.",
    "En Dinamarca, de Valencia. Trabaja internacionalmente."
  ),
  tagline: b(
    "Marketing, content and communication for aquaculture, seafood and sustainability.",
    "Marketing, contenido y comunicación para acuicultura, pesca y sostenibilidad."
  ),
};
