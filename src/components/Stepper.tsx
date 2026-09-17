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
                  className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold ${
                    isActive
                      ? 'bg-blue-600 text-white'
                      : isComplete
                        ? 'bg-blue-100 text-blue-700'
                        : 'bg-slate-100 text-slate-400'
                  }`}
                >
                  {isComplete ? '✓' : stepNum}
                </span>
                <span
                  className={`ml-2 text-sm font-medium ${
                    isActive ? 'text-blue-700' : isComplete ? 'text-slate-700' : 'text-slate-400'
                  }`}
                >
                  {step}
                </span>
              </div>
              {index < steps.length - 1 && (
                <div
                  className={`mx-4 h-0.5 flex-1 ${isComplete ? 'bg-blue-200' : 'bg-slate-200'}`}
                />
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
