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

      <div className="card text-center">
        <div className="card-body">
          <CheckCircle2
            className="mx-auto h-12 w-12 text-[var(--color-success)]"
            strokeWidth={1.75}
            aria-hidden="true"
          />
          <h1 className="mt-4 text-xl font-semibold text-[var(--color-foreground)]">
            SUPREME GUIDANCE has been retitled and saved to the catalog.
          </h1>

          <div className="mt-8 rounded-lg border border-[var(--color-border)] bg-[var(--color-muted)] p-5 text-left">
            <h2 className="section-label mb-4">Final State</h2>
            <dl className="space-y-4">
              {retitleRulesAfter.map((item) => (
                <div key={item.field}>
                  <dt className="text-xs text-[var(--color-muted-foreground)]">{item.field}</dt>
                  <dd className="mt-0.5 text-sm font-medium text-[var(--color-foreground)]">
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
              className="btn-primary"
            >
              View Title
            </button>
            <button
              type="button"
              onClick={() => navigate('/catalog')}
              className="btn-secondary"
            >
              Retitle Another Track
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
