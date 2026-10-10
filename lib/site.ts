import type { Bilingual } from "./i18n/types";

const b = <T,>(en: T, es: T): Bilingual<T> => ({ en, es });

export const siteMeta = {
  name: "Nerea Clemente",
  email: "hello@nereaclemente.com",
  linkedin: "https://www.linkedin.com/in/nereaclemente",
  instagram: "https://www.instagram.com/seafoodonnerea",
  url: "https://nereaclemente.com",
  taglineEn: "One mind. Many worlds.",
  subtaglineEn:
    "Portfolio of Nerea Clemente — strategy, creativity, innovation and everything in between. Seafood & aquaculture, brand & strategy, AI & automation, creative & content, and a playground.",
};

export const site = {
  ...siteMeta,
  tagline: b("One mind. Many worlds.", "One mind. Many worlds."),
  location: b(
    "Based in Denmark. From Valencia. Working internationally.",
    "En Dinamarca, de Valencia. Trabaja internacionalmente."
  ),
};
