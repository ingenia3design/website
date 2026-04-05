import {
  createContext,
  type PropsWithChildren,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { contentByLocale, type Locale, type SiteContent } from "./content";

type I18nContextValue = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  c: SiteContent;
};

const I18nContext = createContext<I18nContextValue | null>(null);
const STORAGE_KEY = "ingenia3design.locale";

function isLocale(v: unknown): v is Locale {
  return v === "es" || v === "en";
}

function detectBrowserLocale(): Locale {
  try {
    const langs = (navigator.languages?.length ? navigator.languages : [navigator.language])
      .filter(Boolean)
      .map((l) => l.toLowerCase());

    // If any preferred language is English, default to EN.
    // Otherwise keep Spanish as the product default.
    if (langs.some((l) => l === "en" || l.startsWith("en-"))) return "en";
  } catch {
    // ignore
  }
  return "es";
}

function getInitialLocale(): Locale {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (isLocale(saved)) return saved;
  } catch {
    // ignore
  }
  return detectBrowserLocale();
}

export function I18nProvider({ children }: PropsWithChildren) {
  const [locale, setLocale] = useState<Locale>(() => getInitialLocale());

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, locale);
    } catch {
      // ignore
    }
    document.documentElement.lang = locale;
  }, [locale]);

  const value = useMemo<I18nContextValue>(() => {
    return { locale, setLocale, c: contentByLocale[locale] };
  }, [locale]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}

