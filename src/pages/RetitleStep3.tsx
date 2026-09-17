import { useNavigate } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';
import { Stepper } from '../components/Stepper';
import { Badge } from '../components/Badge';
import { retitleRulesAfter } from '../data/sampleData';

export function RetitleStep3() {
  const navigate = useNavigate();

  return (
    <div className="mx-auto max-w-3xl">
      <Stepper steps={['Confirm', 'Rules Preview', 'Save']} currentStep={3} />

      <div className="rounded-xl border border-slate-200 bg-white p-8 text-center shadow-sm">
        <CheckCircle2 className="mx-auto h-12 w-12 text-emerald-500" />
        <h1 className="mt-4 text-xl font-semibold text-slate-900">
          SUPREME GUIDANCE has been retitled and saved to the catalog.
        </h1>

        <div className="mt-8 rounded-lg border border-slate-200 bg-slate-50 p-5 text-left">
          <h2 className="mb-4 text-xs font-semibold uppercase tracking-wide text-slate-500">
            Final State
          </h2>
          <dl className="space-y-4">
            {retitleRulesAfter.map((item) => (
              <div key={item.field}>
                <dt className="text-xs text-slate-500">{item.field}</dt>
                <dd className="mt-0.5 text-sm font-medium text-slate-900">
                  {item.value}
                </dd>
                <Badge variant="neutral" className="mt-1">
                  {item.rule}
                </Badge>
              </div>
            ))}
          </dl>
        </div>

        <div className="mt-8 flex justify-center gap-3">
          <button
            type="button"
            onClick={() => navigate('/catalog/supreme-guidance/after')}
            className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700"
          >
            View Title
          </button>
          <button
            type="button"
            onClick={() => navigate('/catalog')}
            className="rounded-lg border border-slate-300 px-5 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50"
          >
            Retitle Another Track
          </button>
        </div>
      </div>
    </div>
  );
}
