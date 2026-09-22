import { type ReactNode } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { RotateCcw } from 'lucide-react';
import { usePersona, PERSONA_STORAGE_KEY } from '../context/PersonaContext';
import { narrativeSteps } from '../data/narrativeSteps';
import { personas } from '../data/personas';

export function PrototypeControls({ children }: { children: ReactNode }) {
  const { currentPersona, setPersonaId } = usePersona();
  const location = useLocation();
  const navigate = useNavigate();

  const activeStep = narrativeSteps.find((step) => step.route === location.pathname);

  function handleStepClick(step: (typeof narrativeSteps)[number]) {
    setPersonaId(step.personaId);
    navigate(step.route);
  }

  function handleRoleClick(personaId: (typeof personas)[number]['id'], defaultRoute: string) {
    setPersonaId(personaId);
    navigate(defaultRoute);
  }

  function handleResetDemo() {
    try {
      sessionStorage.removeItem(PERSONA_STORAGE_KEY);
    } catch {
      // sessionStorage unavailable
    }
    const firstStep = narrativeSteps[0];
    setPersonaId(firstStep.personaId);
    navigate(firstStep.route);
  }

  return (
    <div className="flex h-screen bg-[#020617]">
      <aside className="demo-rail flex w-72 shrink-0 flex-col">
        <div className="border-b border-slate-700/80 px-5 py-4">
          <p className="text-xs font-semibold uppercase tracking-wider demo-rail-muted">
            ARIA — Live Demo
          </p>
        </div>

        <div className="flex-1 overflow-y-auto px-3 py-5">
          <section>
            <h2 className="mb-3 px-2 text-xs font-semibold uppercase tracking-wider demo-rail-muted">
              Demo Narrative
            </h2>
            <ol className="space-y-0.5">
              {narrativeSteps.map((step) => {
                const isActive = activeStep?.id === step.id;
                return (
                  <li key={step.id}>
                    <button
                      type="button"
                      onClick={() => handleStepClick(step)}
                      className={`flex w-full cursor-pointer items-start gap-3 rounded-lg px-3 py-2.5 text-left transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-ring)] ${
                        isActive
                          ? 'bg-slate-800 text-white ring-1 ring-slate-600'
                          : 'text-slate-300 hover:bg-slate-800/70 hover:text-white'
                      }`}
                    >
                      <span
                        className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-semibold transition-colors duration-200 ${
                          isActive
                            ? 'bg-[var(--color-primary)] text-white'
                            : 'bg-slate-700 text-slate-400'
                        }`}
                      >
                        {step.stepNumber}
                      </span>
                      <span className="min-w-0">
                        <span className="block text-sm font-medium">{step.label}</span>
                        <span className="mt-0.5 block text-xs demo-rail-muted">
                          {step.sublabel}
                        </span>
                      </span>
                    </button>
                  </li>
                );
              })}
            </ol>
          </section>

          <button
            type="button"
            onClick={handleResetDemo}
            className="mt-4 flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg border border-slate-600 px-3 py-2 text-sm text-slate-300 transition-colors duration-200 hover:border-slate-500 hover:bg-slate-800 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-ring)]"
          >
            <RotateCcw className="h-4 w-4" aria-hidden="true" />
            Reset Demo
          </button>

          <section className="mt-8">
            <h2 className="mb-3 px-2 text-xs font-semibold uppercase tracking-wider demo-rail-muted">
              Switch Role
            </h2>
            <div className="space-y-1">
              {personas.map((persona) => {
                const isActive = currentPersona.id === persona.id;
                return (
                  <button
                    key={persona.id}
                    type="button"
                    onClick={() => handleRoleClick(persona.id, persona.defaultRoute)}
                    className={`flex w-full cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-left transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-ring)] ${
                      isActive
                        ? 'bg-slate-800 ring-1 ring-slate-600'
                        : 'hover:bg-slate-800/70'
                    }`}
                  >
                    <div
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-semibold ${persona.badgeClass}`}
                    >
                      {persona.initials}
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-slate-100">{persona.name}</p>
                      <p className="text-xs demo-rail-muted">{persona.role}</p>
                    </div>
                  </button>
                );
              })}
            </div>
          </section>
        </div>
      </aside>

      <div className="flex min-w-0 flex-1 flex-col p-3">
        <div className="flex min-h-0 flex-1 flex-col overflow-hidden rounded-t-xl border border-[var(--color-border)] bg-[var(--color-card)] shadow-[var(--shadow-lg)]">
          <div className="flex shrink-0 items-center gap-3 border-b border-[var(--color-border)] bg-[var(--color-muted)] px-4 py-2">
            <div className="flex items-center gap-1.5" aria-hidden="true">
              <span className="h-3 w-3 rounded-full bg-[#f87171]" />
              <span className="h-3 w-3 rounded-full bg-[#fbbf24]" />
              <span className="h-3 w-3 rounded-full bg-[#4ade80]" />
            </div>
            <div className="flex-1 rounded-md border border-[var(--color-border)] bg-[var(--color-card)] px-3 py-1.5 font-mono text-xs text-[var(--color-muted-foreground)]">
              aria.transitionmusic.com{location.pathname}
            </div>
          </div>
          <div className="min-h-0 flex-1 overflow-hidden">{children}</div>
        </div>
      </div>
    </div>
  );
}
