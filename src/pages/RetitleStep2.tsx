import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronDown, ChevronUp, Sparkles } from 'lucide-react';
import { Stepper } from '../components/Stepper';
import { Badge } from '../components/Badge';
import { retitleRulesAfter } from '../data/sampleData';

export function RetitleStep2() {
  const navigate = useNavigate();
  const [rulesExpanded, setRulesExpanded] = useState(false);

  return (
    <div className="mx-auto max-w-5xl">
      <div className="mb-2 flex items-center gap-2">
        <Sparkles className="h-5 w-5 text-[var(--color-primary)]" strokeWidth={1.75} aria-hidden="true" />
        <h1 className="page-title">Rules Engine Preview</h1>
      </div>
      <p className="page-subtitle mb-6">
        Review the automatic transformations before applying
      </p>

      <Stepper steps={['Confirm', 'Rules Preview', 'Save']} currentStep={2} />

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="panel-before">
          <h2 className="section-label mb-4">Before</h2>
          <dl className="space-y-4">
            <div>
              <dt className="text-xs text-[var(--color-muted-foreground)]">Prefix</dt>
              <dd className="text-sm font-medium text-[var(--color-muted-foreground)]">—</dd>
            </div>
            <div>
              <dt className="text-xs text-[var(--color-muted-foreground)]">Writers</dt>
              <dd className="text-sm font-medium text-[var(--color-foreground)]">
                James Murray (PRS) 100%
              </dd>
            </div>
            <div>
              <dt className="text-xs text-[var(--color-muted-foreground)]">Publishers</dt>
              <dd className="text-sm font-medium text-[var(--color-foreground)]">
                Alibi Generator (ASCAP) 100%
              </dd>
            </div>
          </dl>
        </div>

        <div className="panel-after after-panel-glow">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="section-label text-[var(--color-success)]">
              After — Auto-generated
            </h2>
            <Badge variant="success">Rules Applied</Badge>
          </div>
          <dl className="space-y-5">
            {retitleRulesAfter.map((item) => (
              <div key={item.field}>
                <dt className="text-xs text-[var(--color-muted-foreground)]">{item.field}</dt>
                <dd className="mt-1 text-sm font-medium text-[var(--color-foreground)]">
                  {item.value}
                  {item.unchanged && (
                    <span className="ml-2 text-xs text-[var(--color-muted-foreground)]">
                      (unchanged)
                    </span>
                  )}
                </dd>
                <Badge variant="primary" className="mt-1.5 max-w-full whitespace-normal">
                  {item.rule}
                </Badge>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <button
        type="button"
        onClick={() => setRulesExpanded(!rulesExpanded)}
        className="btn-secondary mt-4 w-full justify-between"
      >
        Why these rules?
        {rulesExpanded ? (
          <ChevronUp className="h-4 w-4" aria-hidden="true" />
        ) : (
          <ChevronDown className="h-4 w-4" aria-hidden="true" />
        )}
      </button>
      {rulesExpanded && (
        <div className="mt-2 rounded-lg border border-[var(--color-border)] bg-[var(--color-muted)] px-4 py-3 text-sm text-[var(--color-muted-foreground)]">
          <ul className="list-inside list-disc space-y-1">
            <li>
              Alibi library titles used in new productions receive the TMC ALIBI
              prefix
            </li>
            <li>
              Non-US PRO writers trigger a 50/50 publisher split between the
              original publisher and TMC&apos;s BMI affiliate
            </li>
            <li>
              Alibi titles are exempt from the standard 75/25 Donna Ross-Jones
              writer split
            </li>
            <li>
              All retitled tracks are flagged DON&apos;T FILE COPYRIGHT to
              prevent duplicate filings
            </li>
          </ul>
        </div>
      )}

      <div className="mt-6 flex justify-between">
        <button
          type="button"
          onClick={() => navigate('/retitle/step-1')}
          className="btn-secondary"
        >
          Back
        </button>
        <button
          type="button"
          onClick={() => navigate('/retitle/step-3')}
          className="btn-primary"
        >
          Apply & Continue
        </button>
      </div>
    </div>
  );
}
