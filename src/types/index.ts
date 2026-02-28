/**
 * Type definitions for Scheme Eligibility Finder
 * USP: Simplified schemes in multiple Indian languages
 */

/** Supported Indian languages */
export type SchemeLanguage = "en" | "hi" | "ta" | "te" | "bn" | "mr";

export interface SchemeTranslation {
  name: string;
  description: string;
  eligibilitySummary: string;
}

export interface Scheme {
  id: string;
  /** English - base language */
  name: string;
  description: string;
  eligibilitySummary: string;
  /** Simplified, easy-to-understand content (always in plain language) */
  simpleName?: string;
  simpleDescription?: string;
  simpleEligibility?: string;
  /** Translations: simplified content in Indian languages */
  translations?: Partial<Record<SchemeLanguage, SchemeTranslation>>;
  sourceUrl?: string;
}

export interface EligibilityFormData {
  age: number;
  gender: string;
  state: string;
  annualIncome: number;
  category: string;
  disabilityStatus: boolean;
  occupation: string;
}
