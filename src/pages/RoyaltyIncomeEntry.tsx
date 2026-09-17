import { useNavigate } from 'react-router-dom';
import { Plus } from 'lucide-react';

export function RoyaltyIncomeEntry() {
  const navigate = useNavigate();

  return (
    <div className="mx-auto max-w-2xl">
      <h1 className="text-2xl font-semibold text-slate-900">
        New Income Due Statement
      </h1>

      <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-5">
        <dl className="grid gap-2 text-sm sm:grid-cols-3">
          <div>
            <dt className="text-slate-500">Co-Publisher</dt>
            <dd className="font-medium text-slate-900">Partner Co-Publisher Name</dd>
          </div>
          <div>
            <dt className="text-slate-500">Title Pool</dt>
            <dd className="font-medium text-slate-900">2 titles</dd>
          </div>
          <div>
            <dt className="text-slate-500">Statement Period</dt>
            <dd className="font-medium text-slate-900">Q4 2025</dd>
          </div>
        </dl>
      </div>

      <div className="mt-6 space-y-4 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <div>
          <label
            htmlFor="source"
            className="mb-1.5 block text-sm font-medium text-slate-700"
          >
            Income Source
          </label>
          <select
            id="source"
            defaultValue="BMI Q4 2025"
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
          >
            <option value="BMI Q4 2025">BMI Q4 2025</option>
            <option value="ASCAP Q4 2025">ASCAP Q4 2025</option>
            <option value="SESAC Q4 2025">SESAC Q4 2025</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="gross"
            className="mb-1.5 block text-sm font-medium text-slate-700"
          >
            Gross Amount
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-slate-500">
              $
            </span>
            <input
              id="gross"
              type="text"
              defaultValue="301.07"
              className="w-full rounded-lg border border-slate-300 py-2 pl-7 pr-4 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
            />
          </div>
        </div>

        <button
          type="button"
          className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-700"
        >
          <Plus className="h-4 w-4" />
          Add another income line
        </button>
      </div>

      <div className="mt-6 flex justify-end">
        <button
          type="button"
          onClick={() => navigate('/royalty/breakdown')}
          className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700"
        >
          Calculate
        </button>
      </div>
    </div>
  );
}
