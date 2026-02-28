"use client";

/**
 * Multi-step progress indicator (myScheme style)
 * Green filled circles with checkmarks for completed, outline for current
 */

interface ProgressStepsProps {
  totalSteps: number;
  currentStep: number;
}

export default function ProgressSteps({
  totalSteps,
  currentStep,
}: ProgressStepsProps) {
  return (
    <div className="flex items-center gap-1" role="progressbar" aria-valuenow={currentStep} aria-valuemin={1} aria-valuemax={totalSteps}>
      {Array.from({ length: totalSteps }, (_, i) => {
        const step = i + 1;
        const isCompleted = step < currentStep;
        const isCurrent = step === currentStep;

        return (
          <div key={step} className="flex items-center">
            <div
              className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 transition-colors ${
                isCompleted
                  ? "border-emerald-600 bg-emerald-600 text-white"
                  : isCurrent
                    ? "border-emerald-600 bg-white text-emerald-600"
                    : "border-slate-200 bg-white text-slate-300"
              }`}
            >
              {isCompleted ? (
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                <span className="text-sm font-medium">{step}</span>
              )}
            </div>
            {i < totalSteps - 1 && (
              <div
                className={`h-0.5 w-4 sm:w-6 ${
                  isCompleted ? "bg-emerald-600" : "bg-slate-200"
                }`}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
