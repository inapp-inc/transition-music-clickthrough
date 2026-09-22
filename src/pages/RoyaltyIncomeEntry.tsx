import { useNavigate } from 'react-router-dom';
import { Plus } from 'lucide-react';

export function RoyaltyIncomeEntry() {
  const navigate = useNavigate();

  return (
    <div className="mx-auto max-w-2xl">
      <h1 className="page-title">New Income Due Statement</h1>

      <div className="mt-6 rounded-xl border border-[var(--color-border)] bg-[var(--color-muted)] p-5">
        <dl className="grid gap-2 text-sm sm:grid-cols-3">
          <div>
            <dt className="text-[var(--color-muted-foreground)]">Co-Publisher</dt>
            <dd className="font-medium text-[var(--color-foreground)]">Partner Co-Publisher Name</dd>
          </div>
          <div>
            <dt className="text-[var(--color-muted-foreground)]">Title Pool</dt>
            <dd className="font-medium text-[var(--color-foreground)]">2 titles</dd>
          </div>
          <div>
            <dt className="text-[var(--color-muted-foreground)]">Statement Period</dt>
            <dd className="font-medium text-[var(--color-foreground)]">Q4 2025</dd>
          </div>
        </dl>
      </div>

      <div className="card mt-6">
        <div className="card-body space-y-4">
          <div>
            <label
              htmlFor="source"
              className="mb-1.5 block text-sm font-medium text-[var(--color-foreground)]"
            >
              Income Source
            </label>
            <select id="source" defaultValue="BMI Q4 2025" className="select">
              <option value="BMI Q4 2025">BMI Q4 2025</option>
              <option value="ASCAP Q4 2025">ASCAP Q4 2025</option>
              <option value="SESAC Q4 2025">SESAC Q4 2025</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="gross"
              className="mb-1.5 block text-sm font-medium text-[var(--color-foreground)]"
            >
              Gross Amount
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-[var(--color-muted-foreground)]">
                $
              </span>
              <input
                id="gross"
                type="text"
                defaultValue="301.07"
                className="input tabular-amount pl-7"
              />
            </div>
          </div>

          <button type="button" className="btn-link">
            <Plus className="h-4 w-4" aria-hidden="true" />
            Add another income line
          </button>
        </div>
      </div>

      <div className="mt-6 flex justify-end">
        <button
          type="button"
          onClick={() => navigate('/royalty/breakdown')}
          className="btn-primary"
        >
          Calculate
        </button>
      </div>
    </div>
  );
}
