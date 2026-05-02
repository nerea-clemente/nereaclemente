"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import type { Bilingual, Locale } from "./types";

const STORAGE_KEY = "nc-locale";

type Ctx = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  toggle: () => void;
};

const LocaleContext = createContext<Ctx>({
  locale: "en",
  setLocale: () => {},
  toggle: () => {},
});

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY) as Locale | null;
      if (saved === "en" || saved === "es") {
        setLocaleState(saved);
        return;
      }
      const browser = navigator.language?.toLowerCase();
      if (browser?.startsWith("es")) setLocaleState("es");
    } catch {
      /* no-op */
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale === "es" ? "es" : "en";
  }, [locale]);

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l);
    try {
      window.localStorage.setItem(STORAGE_KEY, l);
    } catch {
      /* no-op */
    }
  }, []);

  const toggle = useCallback(
    () => setLocale(locale === "en" ? "es" : "en"),
    [locale, setLocale]
  );

  return (
    <LocaleContext.Provider value={{ locale, setLocale, toggle }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  return useContext(LocaleContext);
}

export function useT() {
  const { locale } = useContext(LocaleContext);
  return <T,>(b: Bilingual<T>): T => b[locale];
}
