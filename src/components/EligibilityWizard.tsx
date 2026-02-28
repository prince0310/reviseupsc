"use client";

/**
 * Multi-step eligibility wizard (myScheme style)
 * Help us find the best schemes for you
 */

import { useState } from "react";
import ProgressSteps from "./ProgressSteps";
import { MOCK_SCHEMES } from "@/data/mockSchemes";
import { Scheme } from "@/types";
import SchemeCard from "./SchemeCard";
import SimplifySchemeSection from "./SimplifySchemeSection";
import LanguageSelector from "./LanguageSelector";

// Form data type
export interface WizardData {
  state: string;
  area: "urban" | "rural" | "";
  gender: string;
  age: string;
  disability: boolean | null;
  student: boolean | null;
  category: string;
  bpl: boolean | null;
}

const STATES = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
  "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
  "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram",
  "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu",
  "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal",
  "Andaman and Nicobar Islands", "Chandigarh", "Dadra and Nagar Haveli and Daman and Diu",
  "Delhi", "Jammu and Kashmir", "Ladakh", "Lakshadweep", "Puducherry",
];

const CATEGORIES = [
  { value: "general", label: "General" },
  { value: "obc", label: "Other Backward Class (OBC)", info: true },
  { value: "pvtg", label: "Particularly Vulnerable Tribal Group (PVTG)", info: true },
  { value: "sc", label: "Scheduled Caste (SC)", info: true },
  { value: "st", label: "Scheduled Tribe (ST)", info: true },
  { value: "dnt", label: "De-Notified, Nomadic, and Semi-Nomadic (DNT) communities" },
];

const TOTAL_STEPS = 7;

export default function EligibilityWizard() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<WizardData>({
    state: "",
    area: "",
    gender: "",
    age: "",
    disability: null,
    student: null,
    category: "",
    bpl: null,
  });
  const [schemes, setSchemes] = useState<Scheme[] | null>(null);
  const [showSimplify, setShowSimplify] = useState(false);

  const update = <K extends keyof WizardData>(key: K, value: WizardData[K]) => {
    setData((d) => ({ ...d, [key]: value }));
  };

  const goBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const goNext = () => {
    if (step < TOTAL_STEPS) setStep(step + 1);
  };

  const skipToResults = () => {
    setSchemes(MOCK_SCHEMES);
    setStep(TOTAL_STEPS + 1); // Results view
  };

  const handleNext = () => {
    if (step === TOTAL_STEPS) {
      // Submit and show results
      setSchemes(MOCK_SCHEMES);
      setStep(TOTAL_STEPS + 1);
    } else {
      goNext();
    }
  };

  const resetForm = () => {
    setData({
      state: "",
      area: "",
      gender: "",
      age: "",
      disability: null,
      student: null,
      category: "",
      bpl: null,
    });
    setStep(1);
    setSchemes(null);
    setShowSimplify(false);
  };

  // Results view
  if (schemes && step > TOTAL_STEPS) {
    return (
      <div className="mx-auto max-w-4xl space-y-8">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-lg sm:p-8">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
            <h2 className="text-xl font-semibold text-slate-900">
              Schemes You May Be Eligible For
            </h2>
            <div className="flex items-center gap-2">
              <span className="text-sm text-slate-500">View in:</span>
              <LanguageSelector />
            </div>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {schemes.map((s) => (
              <SchemeCard key={s.id} scheme={s} />
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => setShowSimplify(true)}
              className="rounded-lg border border-emerald-600 bg-white px-5 py-2.5 text-sm font-medium text-emerald-600 hover:bg-emerald-50"
            >
              Simplify a scheme (easy language)
            </button>
            <button
              type="button"
              onClick={resetForm}
              className="flex items-center gap-1.5 text-sm text-emerald-600 hover:underline"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              Reset Form
            </button>
          </div>
        </div>
        {showSimplify && (
          <SimplifySchemeSection onClose={() => setShowSimplify(false)} />
        )}
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl">
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-lg sm:p-8">
        <h1 className="mb-6 text-center text-2xl font-bold text-slate-900">
          Help us find the best schemes for you
        </h1>

        {/* Progress + Back */}
        <div className="mb-8 flex items-center justify-between gap-4">
          <button
            type="button"
            onClick={goBack}
            disabled={step === 1}
            className="flex items-center gap-1.5 text-slate-500 hover:text-slate-700 disabled:opacity-40 disabled:hover:text-slate-500"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back
          </button>
          <ProgressSteps totalSteps={TOTAL_STEPS} currentStep={step} />
        </div>

        {/* Step content */}
        <div className="min-h-[280px]">
          {/* Step 1: State + Area */}
          {step === 1 && (
            <div className="space-y-6">
              <div>
                <label className="mb-3 block text-sm font-medium text-slate-700">
                  Please select your state
                </label>
                <select
                  value={data.state}
                  onChange={(e) => update("state", e.target.value)}
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                >
                  <option value="">--Select One--</option>
                  {STATES.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="mb-3 block text-sm font-medium text-slate-700">
                  *Please select your area of residence
                </label>
                <div className="flex gap-4">
                  {(["urban", "rural"] as const).map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => update("area", opt)}
                      className={`flex-1 rounded-lg border-2 px-4 py-3 text-sm font-medium capitalize transition-colors ${
                        data.area === opt
                          ? "border-emerald-600 bg-emerald-50 text-emerald-700"
                          : "border-slate-200 bg-white text-slate-600 hover:border-slate-300"
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Gender + Age */}
          {step === 2 && (
            <div className="space-y-8">
              <div>
                <label className="mb-3 block text-sm font-medium text-red-600">
                  *Tell us about yourself, you are a...
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { value: "male", label: "Male", icon: "♂" },
                    { value: "female", label: "Female", icon: "♀" },
                    { value: "transgender", label: "Transgender", icon: "⚧" },
                  ].map(({ value, label, icon }) => (
                    <button
                      key={value}
                      type="button"
                      onClick={() => update("gender", value)}
                      className={`flex flex-col items-center gap-2 rounded-lg border-2 px-4 py-4 transition-colors ${
                        data.gender === value
                          ? "border-emerald-600 bg-emerald-50 text-emerald-700"
                          : "border-slate-200 bg-white text-slate-600 hover:border-slate-300"
                      }`}
                    >
                      <span className="text-2xl">{icon}</span>
                      <span className="text-sm font-medium">{label}</span>
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="mb-3 block text-sm font-medium text-red-600">
                  *and your age is
                </label>
                <div className="flex items-center gap-2">
                  <select
                    value={data.age}
                    onChange={(e) => update("age", e.target.value)}
                    className="rounded-lg border border-slate-300 px-4 py-3 text-slate-900 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                  >
                    <option value="">--</option>
                    {Array.from({ length: 83 }, (_, i) => i + 18).map((n) => (
                      <option key={n} value={n}>{n}</option>
                    ))}
                  </select>
                  <span className="text-slate-600">years</span>
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Disability */}
          {step === 3 && (
            <div>
              <label className="mb-4 flex items-center gap-2 text-sm font-medium text-slate-700">
                *Do you identify as a person with a disability?
                <button
                  type="button"
                  className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 hover:bg-emerald-200"
                  title="More info"
                  aria-label="More information"
                >
                  i
                </button>
              </label>
              <div className="flex gap-4">
                {([true, false] as const).map((opt) => (
                  <button
                    key={String(opt)}
                    type="button"
                    onClick={() => update("disability", opt)}
                    className={`flex-1 rounded-lg border-2 px-4 py-3 text-sm font-medium transition-colors ${
                      data.disability === opt
                        ? "border-emerald-600 bg-emerald-50 text-emerald-700"
                        : "border-slate-200 bg-white text-slate-600 hover:border-slate-300"
                    }`}
                  >
                    {opt ? "Yes" : "No"}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 4: Student */}
          {step === 4 && (
            <div>
              <label className="mb-4 block text-sm font-medium text-slate-700">
                *Are you a student?
              </label>
              <div className="flex gap-4">
                {([true, false] as const).map((opt) => (
                  <button
                    key={String(opt)}
                    type="button"
                    onClick={() => update("student", opt)}
                    className={`flex-1 rounded-lg border-2 px-4 py-3 text-sm font-medium transition-colors ${
                      data.student === opt
                        ? "border-emerald-600 bg-emerald-50 text-emerald-700"
                        : "border-slate-200 bg-white text-slate-600 hover:border-slate-300"
                    }`}
                  >
                    {opt ? "Yes" : "No"}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 5: Category */}
          {step === 5 && (
            <div>
              <label className="mb-4 block text-sm font-medium text-slate-700">
                *You belong to...
              </label>
              <div className="space-y-3">
                {CATEGORIES.map(({ value, label, info }) => (
                  <button
                    key={value}
                    type="button"
                    onClick={() => update("category", value)}
                    className={`flex w-full items-center justify-between rounded-lg border-2 px-4 py-3 text-left text-sm transition-colors ${
                      data.category === value
                        ? "border-emerald-600 bg-emerald-50 text-emerald-700"
                        : "border-slate-200 bg-white text-slate-600 hover:border-slate-300"
                    }`}
                  >
                    <span>{label}</span>
                    {info && (
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                        i
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 6: BPL */}
          {step === 6 && (
            <div>
              <label className="mb-4 block text-sm font-medium text-slate-700">
                *Do you belong to BPL category?
              </label>
              <div className="flex gap-4">
                {([true, false] as const).map((opt) => (
                  <button
                    key={String(opt)}
                    type="button"
                    onClick={() => update("bpl", opt)}
                    className={`flex-1 rounded-lg border-2 px-4 py-3 text-sm font-medium transition-colors ${
                      data.bpl === opt
                        ? "border-emerald-600 bg-emerald-50 text-emerald-700"
                        : "border-slate-200 bg-white text-slate-600 hover:border-slate-300"
                    }`}
                  >
                    {opt ? "Yes" : "No"}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 7: Income / Final */}
          {step === 7 && (
            <div className="space-y-4">
              <p className="text-slate-600">
                You&apos;ve completed all steps. Click Next to see schemes you may be eligible for.
              </p>
            </div>
          )}
        </div>

        {/* Actions */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-slate-200 pt-6">
          <button
            type="button"
            onClick={skipToResults}
            className="rounded-lg border-2 border-indigo-500 px-5 py-2.5 text-sm font-medium text-indigo-600 hover:bg-indigo-50"
          >
            Skip to Results
          </button>
          <button
            type="button"
            onClick={handleNext}
            className="flex items-center gap-2 rounded-lg bg-emerald-600 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-emerald-700"
          >
            {step === TOTAL_STEPS ? "View Results" : "Next"}
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>

        <button
          type="button"
          onClick={resetForm}
          className="mt-4 flex items-center gap-1.5 text-sm text-emerald-600 hover:underline"
        >
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          Reset Form
        </button>
      </div>
    </div>
  );
}
