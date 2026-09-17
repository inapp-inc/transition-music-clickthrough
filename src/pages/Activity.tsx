import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { activityRows } from '../data/sampleData';
import { StatusPill } from '../components/StatusPill';

export function Activity() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState<string | null>('ESTV DUNK');

  return (
    <div>
      <h1 className="mb-6 text-2xl font-semibold text-slate-900">Activity</h1>

      <div className="mb-4 flex flex-wrap gap-2">
        {['Production', 'Date range', 'Income Received: Yes', 'Income Received: No'].map(
          (chip) => (
            <button
              key={chip}
              type="button"
              className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600 hover:border-slate-300"
            >
              {chip}
            </button>
          ),
        )}
      </div>

      <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
        <table className="min-w-full divide-y divide-slate-200">
          <thead className="bg-slate-50">
            <tr>
              <th className="w-10 px-4 py-3" />
              {[
                'Title',
                'Production',
                'Air Date',
                'Type of Use',
                'Duration',
                'Income Received',
              ].map((col) => (
                <th
                  key={col}
                  className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500"
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {activityRows.map((row) => (
              <tr
                key={`${row.title}-${row.production}`}
                onClick={() => {
                  if (row.selectable) setSelected(row.title);
                }}
                className={`transition-colors ${
                  row.selectable ? 'cursor-pointer hover:bg-blue-50/50' : ''
                } ${selected === row.title ? 'bg-blue-50 ring-1 ring-inset ring-blue-200' : ''}`}
              >
                <td className="px-4 py-3">
                  {row.selectable && (
                    <input
                      type="radio"
                      checked={selected === row.title}
                      onChange={() => setSelected(row.title)}
                      className="h-4 w-4 text-blue-600"
                    />
                  )}
                </td>
                <td className="px-4 py-3 text-sm font-medium text-slate-900">
                  {row.title}
                </td>
                <td className="px-4 py-3 text-sm text-slate-600">
                  {row.production}
                </td>
                <td className="px-4 py-3 text-sm text-slate-600">
                  {row.airDate}
                </td>
                <td className="px-4 py-3 text-sm text-slate-600">
                  {row.typeOfUse}
                </td>
                <td className="px-4 py-3 text-sm text-slate-600">
                  {row.duration}
                </td>
                <td className="px-4 py-3">
                  <StatusPill
                    status={row.incomeReceived ? 'Yes' : 'No'}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 flex justify-end">
        <button
          type="button"
          onClick={() => navigate('/royalty/income')}
          disabled={!selected}
          className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Calculate Royalty
        </button>
      </div>
    </div>
  );
}
