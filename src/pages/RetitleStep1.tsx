import { useNavigate } from 'react-router-dom';
import { Stepper } from '../components/Stepper';
import { supremeGuidanceBefore, retitleReasons } from '../data/sampleData';

export function RetitleStep1() {
  const navigate = useNavigate();
  const data = supremeGuidanceBefore;

  return (
    <div className="mx-auto max-w-3xl">
      <h1 className="page-title mb-2">Retitle Track</h1>
      <p className="page-subtitle mb-6">
        Apply TMC publishing rules to {data.title}
      </p>

      <Stepper steps={['Confirm', 'Rules Preview', 'Save']} currentStep={1} />

      <div className="card">
        <div className="card-body">
          <h2 className="mb-4 text-sm font-semibold text-[var(--color-foreground)]">
            Track Summary
          </h2>
          <dl className="mb-6 space-y-2">
            {[
              ['Title', data.title],
              ['Prefix', data.prefix],
              [
                'Writers',
                data.writers.map((w) => `${w.name} (${w.pro}) ${w.share}`).join(', '),
              ],
              [
                'Publishers',
                data.publishers
                  .map((p) => `${p.name} (${p.pro}) ${p.share}`)
                  .join(', '),
              ],
            ].map(([label, value]) => (
              <div key={label as string} className="flex gap-4 text-sm">
                <dt className="w-28 shrink-0 text-[var(--color-muted-foreground)]">{label}</dt>
                <dd className="font-medium text-[var(--color-foreground)]">{value}</dd>
              </div>
            ))}
          </dl>

          <div className="mb-4">
            <label
              htmlFor="reason"
              className="mb-1.5 block text-sm font-medium text-[var(--color-foreground)]"
            >
              Reason for retitle
            </label>
            <select id="reason" defaultValue={retitleReasons[0]} className="select">
              {retitleReasons.map((r) => (
                <option key={r} value={r}>
                  {r}
                </option>
              ))}
            </select>
          </div>

          <p className="text-sm text-[var(--color-muted-foreground)]">
            TMC&apos;s retitling rules will be applied automatically in the next
            step.
          </p>
        </div>
      </div>

      <div className="mt-6 flex justify-between">
        <button
          type="button"
          onClick={() => navigate('/catalog/supreme-guidance')}
          className="btn-secondary"
        >
          Cancel
        </button>
        <button
          type="button"
          onClick={() => navigate('/retitle/step-2')}
          className="btn-primary"
        >
          Continue
        </button>
      </div>
    </div>
  );
}
