"use client";

/**
 * Scheme card - Always shows simplified content in selected language (USP)
 */

import { Scheme } from "@/types";
import { useLanguage } from "@/context/LanguageContext";

interface SchemeCardProps {
  scheme: Scheme;
}

export default function SchemeCard({ scheme }: SchemeCardProps) {
  const { getSchemeContent } = useLanguage();
  const { name, description, eligibilitySummary } = getSchemeContent(scheme);

  return (
    <article
      className="group rounded-xl border border-slate-200 bg-white p-6 shadow-md transition-all duration-300 
        hover:border-emerald-200 hover:shadow-lg"
      data-testid="scheme-card"
    >
      {/* Simplified badge - USP */}
      <span className="mb-2 inline-block rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-medium text-emerald-700">
        In simple language
      </span>

      {/* Scheme Name */}
      <h3 className="mb-3 text-lg font-semibold text-slate-900">{name}</h3>

      {/* Description - simplified */}
      <p className="mb-4 text-sm leading-relaxed text-slate-600 line-clamp-3">
        {description}
      </p>

      {/* Eligibility Badge */}
      <div className="mb-4 rounded-lg bg-emerald-50 px-3 py-2">
        <p className="text-xs font-medium text-emerald-800">
          Who can apply: {eligibilitySummary}
        </p>
      </div>

      {/* View Details */}
      <a
        href={scheme.sourceUrl ?? "https://www.myscheme.gov.in"}
        target="_blank"
        rel="noopener noreferrer"
        className="flex w-full items-center justify-center gap-2 rounded-lg bg-emerald-600 px-4 py-2.5 text-sm font-medium text-white
          transition-all duration-200 hover:bg-emerald-700 hover:shadow-md active:scale-[0.98]"
      >
        View Details
        <svg
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
          />
        </svg>
      </a>
    </article>
  );
}
