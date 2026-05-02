export type Locale = "en" | "es";

export type Bilingual<T = string> = Record<Locale, T>;

export const t = <T,>(b: Bilingual<T>, locale: Locale): T => b[locale];
