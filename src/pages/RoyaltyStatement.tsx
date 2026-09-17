import { useNavigate } from 'react-router-dom';
import { Download, FileSpreadsheet } from 'lucide-react';
import { royaltyCalculation as calc } from '../data/sampleData';

function fmt(n: number) {
  const abs = Math.abs(n).toFixed(2);
  return n < 0 ? `–$${abs}` : `$${abs}`;
}

export function RoyaltyStatement() {
  const navigate = useNavigate();

  return (
    <div className="mx-auto max-w-3xl">
      <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
        <div className="border-b border-slate-200 bg-slate-800 px-8 py-6 text-white">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-lg font-bold">
              TMC
            </div>
            <div>
              <p className="text-sm font-medium opacity-80">
                Transition Music Corporation
              </p>
              <h1 className="text-xl font-semibold">Statement of Income Due</h1>
            </div>
          </div>
        </div>

        <div className="px-8 py-6">
          <dl className="mb-8 grid gap-4 sm:grid-cols-2">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Recipient
              </dt>
              <dd className="mt-1 text-sm font-medium text-slate-900">
                Co-Publisher A
              </dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Statement Period
              </dt>
              <dd className="mt-1 text-sm font-medium text-slate-900">
                Q4 2025
              </dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Income Source
              </dt>
              <dd className="mt-1 text-sm font-medium text-slate-900">
                BMI Q4 2025
              </dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Title Pool
              </dt>
              <dd className="mt-1 text-sm font-medium text-slate-900">
                2 titles
              </dd>
            </div>
          </dl>

          <table className="w-full text-sm">
            <tbody className="divide-y divide-slate-100">
              <tr>
                <td className="py-2 text-slate-600">Gross Income</td>
                <td className="py-2 text-right font-mono tabular-nums">
                  {fmt(calc.grossIncome)}
                </td>
              </tr>
              <tr>
                <td className="py-2 text-slate-600">Copyright Fee Deduction</td>
                <td className="py-2 text-right font-mono tabular-nums">
                  {fmt(calc.copyrightFee)}
                </td>
              </tr>
              <tr>
                <td className="py-2 text-slate-600">Distribution</td>
                <td className="py-2 text-right font-mono tabular-nums">
                  {fmt(calc.distribution)}
                </td>
              </tr>
              <tr>
                <td className="py-2 text-slate-600">Admin Fee (10%)</td>
                <td className="py-2 text-right font-mono tabular-nums">
                  {fmt(calc.adminFee)}
                </td>
              </tr>
              <tr>
                <td className="py-2 font-medium text-slate-900">
                  Adjusted Total
                </td>
                <td className="py-2 text-right font-mono font-medium tabular-nums">
                  {fmt(calc.adjustedTotal)}
                </td>
              </tr>
              <tr>
                <td className="py-2 text-slate-600">
                  Co-Publisher Pool Share (25%)
                </td>
                <td className="py-2 text-right font-mono tabular-nums">
                  {fmt(calc.poolShare)}
                </td>
              </tr>
              <tr>
                <td className="py-2 pl-4 text-slate-600">
                  Co-Publisher A (60% of pool)
                </td>
                <td className="py-2 text-right font-mono tabular-nums">
                  {fmt(calc.coPublisherA.amount)}
                </td>
              </tr>
            </tbody>
          </table>

          <div className="mt-8 border-t-2 border-slate-900 pt-4">
            <div className="flex items-center justify-between">
              <span className="text-lg font-bold text-slate-900">
                Total Due
              </span>
              <span className="text-2xl font-bold text-slate-900">
                {fmt(calc.coPublisherA.amount)}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
        <div className="flex gap-2">
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
          >
            <Download className="h-4 w-4" />
            Export as PDF
          </button>
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
          >
            <FileSpreadsheet className="h-4 w-4" />
            Export as Excel
          </button>
        </div>
        <button
          type="button"
          onClick={() => navigate('/wrap-up')}
          className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700"
        >
          Done
        </button>
      </div>
    </div>
  );
}
