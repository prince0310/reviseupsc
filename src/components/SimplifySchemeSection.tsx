"use client";

/**
 * Simplify Scheme - Convert complex government scheme language into simple, easy-to-understand format
 * User pastes scheme URL or text, we return: simple summary, flowchart, (future: translations)
 */

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

// Lazy load Mermaid to avoid SSR issues
const MermaidDiagram = dynamic(() => import("./MermaidDiagram"), { ssr: false });

const MYSCHEME_URL = "https://www.myscheme.gov.in";

interface SimplifySchemeSectionProps {
  onClose?: () => void;
  /** Pre-fill input when user searches from header */
  initialQuery?: string;
}

export default function SimplifySchemeSection({ onClose, initialQuery = "" }: SimplifySchemeSectionProps) {
  const [input, setInput] = useState(initialQuery);

  useEffect(() => {
    if (initialQuery) setInput(initialQuery);
  }, [initialQuery]);
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<{
    simpleSummary: string;
    bulletPoints: string[];
    flowchart: string;
  } | null>(null);
  const [error, setError] = useState("");

  const handleSimplify = async () => {
    const trimmed = input.trim();
    if (!trimmed) {
      setError("Please paste a scheme URL or scheme text.");
      return;
    }

    setIsLoading(true);
    setError("");
    setResult(null);

    try {
      const res = await fetch("/api/simplify-scheme", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ input: trimmed }),
      });

      const json = await res.json();

      if (json.success && json.result) {
        setResult(json.result);
      } else {
        setError(json.message || "Failed to simplify. Please try again.");
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleClear = () => {
    setInput("");
    setResult(null);
    setError("");
  };

  return (
    <section
      className="rounded-2xl border border-slate-200 bg-white p-6 shadow-lg sm:p-8"
      aria-labelledby="simplify-heading"
    >
      {onClose && (
        <div className="mb-4 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg px-3 py-1.5 text-sm text-slate-600 hover:bg-slate-100"
          >
            Close
          </button>
        </div>
      )}
      <h2
        id="simplify-heading"
        className="mb-2 text-xl font-semibold text-slate-900"
      >
        Make Schemes Simple
      </h2>
      <p className="mb-6 text-slate-600">
        Got a scheme from myScheme? Paste its text or URL below. We&apos;ll
        convert difficult government language into simple, easy-to-understand
        format.
      </p>

      {/* Input */}
      <div className="mb-4">
        <label
          htmlFor="scheme-input"
          className="mb-2 block text-sm font-medium text-slate-700"
        >
          Paste scheme text or myScheme.gov.in URL
        </label>
        <textarea
          id="scheme-input"
          rows={5}
          placeholder={`Example: Pradhan Mantri Kisan Samman Nidhi (PM-KISAN) - A Central Sector Scheme with 100% funding from Government of India. Income support of Rs.6000/- per year in three equal installments...\n\nOr paste: ${MYSCHEME_URL}/scheme/...`}
          className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
            setError("");
          }}
          disabled={isLoading}
        />
      </div>

      {/* Actions */}
      <div className="mb-6 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={handleSimplify}
          disabled={isLoading || !input.trim()}
          className="rounded-xl bg-emerald-600 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-emerald-700 disabled:opacity-50"
        >
          {isLoading ? "Simplifying..." : "Simplify Scheme"}
        </button>
        <button
          type="button"
          onClick={handleClear}
          className="rounded-xl border border-slate-300 px-6 py-3 text-sm font-medium text-slate-700 transition-all hover:bg-slate-50"
        >
          Clear
        </button>
      </div>

      {error && (
        <div
          className="mb-6 rounded-lg bg-red-50 p-4 text-sm text-red-700"
          role="alert"
        >
          {error}
        </div>
      )}

      {/* Result */}
      {result && (
        <div className="space-y-6 border-t border-slate-200 pt-6">
          <h3 className="font-semibold text-slate-900">In Simple Words</h3>
          <p className="leading-relaxed text-slate-700">{result.simpleSummary}</p>

          <h3 className="font-semibold text-slate-900">Key Points</h3>
          <ul className="list-inside list-disc space-y-2 text-slate-700">
            {result.bulletPoints.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>

          {result.flowchart && (
            <>
              <h3 className="font-semibold text-slate-900">
                How It Works (Flowchart)
              </h3>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <MermaidDiagram chart={result.flowchart} />
              </div>
            </>
          )}

          {/* USP: Use header language for listed schemes */}
          <div className="flex flex-wrap items-center gap-2 border-t border-slate-200 pt-4">
            <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-700">
              View schemes in your language
            </span>
            <span className="text-xs text-slate-500">
              Use the language selector in the header to see schemes in Hindi, Tamil, Telugu, Bengali & Marathi
            </span>
          </div>
        </div>
      )}
    </section>
  );
}
