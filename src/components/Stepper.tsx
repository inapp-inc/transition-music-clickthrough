import { Check } from 'lucide-react';

interface StepperProps {
  steps: string[];
  currentStep: number;
}

export function Stepper({ steps, currentStep }: StepperProps) {
  return (
    <nav aria-label="Progress" className="mb-8">
      <ol className="flex items-center">
        {steps.map((step, index) => {
          const stepNum = index + 1;
          const isActive = stepNum === currentStep;
          const isComplete = stepNum < currentStep;

          return (
            <li
              key={step}
              className={`flex items-center ${index < steps.length - 1 ? 'flex-1' : ''}`}
            >
              <div className="flex items-center">
                <span
                  className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold transition-colors duration-200 ${
                    isActive
                      ? 'bg-[var(--color-primary)] text-[var(--color-on-primary)] shadow-[var(--shadow-sm)]'
                      : isComplete
                        ? 'bg-[var(--color-info-bg)] text-[var(--color-primary)] ring-1 ring-[var(--color-info-border)]'
                        : 'bg-[var(--color-muted)] text-[var(--color-muted-foreground)]'
                  }`}
                >
                  {isComplete ? (
                    <Check className="h-4 w-4" aria-hidden="true" />
                  ) : (
                    stepNum
                  )}
                </span>
                <span
                  className={`ml-2 text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? 'text-[var(--color-primary)]'
                      : isComplete
                        ? 'text-[var(--color-foreground)]'
                        : 'text-[var(--color-muted-foreground)]'
                  }`}
                >
                  {step}
                </span>
              </div>
              {index < steps.length - 1 && (
                <div
                  className={`mx-4 h-0.5 flex-1 transition-colors duration-200 ${
                    isComplete ? 'bg-[var(--color-info-border)]' : 'bg-[var(--color-border)]'
                  }`}
                />
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
