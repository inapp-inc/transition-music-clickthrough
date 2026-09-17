import { useNavigate } from 'react-router-dom';
import { Stepper } from '../components/Stepper';
import { supremeGuidanceBefore, retitleReasons } from '../data/sampleData';

export function RetitleStep1() {
  const navigate = useNavigate();
  const data = supremeGuidanceBefore;

  return (
    <div className="mx-auto max-w-3xl">
      <h1 className="mb-2 text-2xl font-semibold text-slate-900">
        Retitle Track
      </h1>
      <p className="mb-6 text-slate-500">
        Apply TMC publishing rules to {data.title}
      </p>

      <Stepper steps={['Confirm', 'Rules Preview', 'Save']} currentStep={1} />

      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="mb-4 text-sm font-semibold text-slate-700">
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
              <dt className="w-28 shrink-0 text-slate-500">{label}</dt>
              <dd className="font-medium text-slate-900">{value}</dd>
            </div>
          ))}
        </dl>

        <div className="mb-4">
          <label
            htmlFor="reason"
            className="mb-1.5 block text-sm font-medium text-slate-700"
          >
            Reason for retitle
          </label>
          <select
            id="reason"
            defaultValue={retitleReasons[0]}
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
          >
            {retitleReasons.map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>
        </div>

        <p className="text-sm text-slate-500">
          TMC&apos;s retitling rules will be applied automatically in the next
          step.
        </p>
      </div>

      <div className="mt-6 flex justify-between">
        <button
          type="button"
          onClick={() => navigate('/catalog/supreme-guidance')}
          className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
        >
          Cancel
        </button>
        <button
          type="button"
          onClick={() => navigate('/retitle/step-2')}
          className="rounded-lg bg-blue-600 px-5 py-2 text-sm font-semibold text-white hover:bg-blue-700"
        >
          Continue
        </button>
      </div>
    </div>
  );
}
