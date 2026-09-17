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
        <Sparkles className="h-5 w-5 text-blue-600" />
        <h1 className="text-2xl font-semibold text-slate-900">
          Rules Engine Preview
        </h1>
      </div>
      <p className="mb-6 text-slate-500">
        Review the automatic transformations before applying
      </p>

      <Stepper steps={['Confirm', 'Rules Preview', 'Save']} currentStep={2} />

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-xs font-semibold uppercase tracking-wide text-slate-400">
            Before
          </h2>
          <dl className="space-y-4">
            <div>
              <dt className="text-xs text-slate-500">Prefix</dt>
              <dd className="text-sm font-medium text-slate-900">—</dd>
            </div>
            <div>
              <dt className="text-xs text-slate-500">Writers</dt>
              <dd className="text-sm font-medium text-slate-900">
                James Murray (PRS) 100%
              </dd>
            </div>
            <div>
              <dt className="text-xs text-slate-500">Publishers</dt>
              <dd className="text-sm font-medium text-slate-900">
                Alibi Generator (ASCAP) 100%
              </dd>
            </div>
          </dl>
        </div>

        <div className="after-panel-glow rounded-xl border-2 border-blue-200 bg-gradient-to-br from-blue-50/80 to-white p-6 shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xs font-semibold uppercase tracking-wide text-blue-600">
              After — Auto-generated
            </h2>
            <Badge variant="primary">Rules Applied</Badge>
          </div>
          <dl className="space-y-5">
            {retitleRulesAfter.map((item) => (
              <div key={item.field}>
                <dt className="text-xs text-slate-500">{item.field}</dt>
                <dd className="mt-1 text-sm font-medium text-slate-900">
                  {item.value}
                  {item.unchanged && (
                    <span className="ml-2 text-xs text-slate-400">
                      (unchanged)
                    </span>
                  )}
                </dd>
                <Badge variant="neutral" className="mt-1.5">
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
        className="mt-4 flex w-full items-center justify-between rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50"
      >
        Why these rules?
        {rulesExpanded ? (
          <ChevronUp className="h-4 w-4" />
        ) : (
          <ChevronDown className="h-4 w-4" />
        )}
      </button>
      {rulesExpanded && (
        <div className="mt-2 rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-600">
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
          className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
        >
          Back
        </button>
        <button
          type="button"
          onClick={() => navigate('/retitle/step-3')}
          className="rounded-lg bg-blue-600 px-5 py-2 text-sm font-semibold text-white hover:bg-blue-700"
        >
          Apply & Continue
        </button>
      </div>
    </div>
  );
}
