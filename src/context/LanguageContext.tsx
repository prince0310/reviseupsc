"use client";

/**
 * Language context - USP: Schemes in your language
 */

import {
  createContext,
  useContext,
  useState,
  useCallback,
  type ReactNode,
} from "react";
import { SchemeLanguage, Scheme, SchemeTranslation } from "@/types";

interface LanguageContextValue {
  language: SchemeLanguage;
  setLanguage: (lang: SchemeLanguage) => void;
  getSchemeContent: (scheme: Scheme) => {
    name: string;
    description: string;
    eligibilitySummary: string;
  };
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<SchemeLanguage>("en");

  const getSchemeContent = useCallback((scheme: Scheme) => {
    if (language === "en") {
      return {
        name: scheme.simpleName ?? scheme.name,
        description: scheme.simpleDescription ?? scheme.description,
        eligibilitySummary: scheme.simpleEligibility ?? scheme.eligibilitySummary,
      };
    }
    const t = scheme.translations?.[language] as SchemeTranslation | undefined;
    if (t) {
      return {
        name: t.name,
        description: t.description,
        eligibilitySummary: t.eligibilitySummary,
      };
    }
    return {
      name: scheme.simpleName ?? scheme.name,
      description: scheme.simpleDescription ?? scheme.description,
      eligibilitySummary: scheme.simpleEligibility ?? scheme.eligibilitySummary,
    };
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, getSchemeContent }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
