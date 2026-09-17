import { useNavigate } from 'react-router-dom';
import { Search, Plus } from 'lucide-react';
import { catalogTitles } from '../data/sampleData';
import { StatusPill } from '../components/StatusPill';

const filterChips = [
  { label: 'PRO', options: ['ASCAP', 'BMI', 'SESAC'] },
  { label: 'Prefix', options: ['AMG', 'TMC ALIBI', 'Legacy'] },
  { label: 'Status', options: ['Registered', 'Pending'] },
];

export function CatalogList() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-slate-900">Catalog</h1>
        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700"
        >
          <Plus className="h-4 w-4" />
          Add Title
        </button>
      </div>

      <div className="mb-4 flex items-center gap-3">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search by title, writer, or publisher…"
            className="w-full rounded-lg border border-slate-300 py-2 pl-10 pr-4 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
          />
        </div>
      </div>

      <div className="mb-4 flex flex-wrap gap-2">
        {filterChips.map(({ label, options }) =>
          options.map((opt) => (
            <button
              key={`${label}-${opt}`}
              type="button"
              className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600 hover:border-slate-300 hover:bg-slate-50"
            >
              {label}: {opt}
            </button>
          )),
        )}
      </div>

      <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
        <table className="min-w-full divide-y divide-slate-200">
          <thead className="bg-slate-50">
            <tr>
              {[
                'Title',
                'Writer(s)',
                'Publisher(s)',
                'Prefix',
                'PRO',
                'Registration Status',
              ].map((col) => (
                <th
                  key={col}
                  className="cursor-pointer px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500 hover:text-slate-700"
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {catalogTitles.map((row) => (
              <tr
                key={row.id}
                onClick={() => {
                  if (row.id === 'supreme-guidance') {
                    navigate('/catalog/supreme-guidance');
                  }
                }}
                className={`cursor-pointer transition-colors hover:bg-blue-50/50 ${
                  row.highlighted ? 'bg-amber-50/60 ring-1 ring-inset ring-amber-200' : ''
                }`}
              >
                <td className="px-4 py-3 text-sm font-medium text-slate-900">
                  {row.title}
                </td>
                <td className="px-4 py-3 text-sm text-slate-600">
                  {row.writers}
                </td>
                <td className="px-4 py-3 text-sm text-slate-600">
                  {row.publishers}
                </td>
                <td className="px-4 py-3 text-sm text-slate-600">
                  {row.prefix}
                </td>
                <td className="px-4 py-3 text-sm text-slate-600">{row.pro}</td>
                <td className="px-4 py-3">
                  <StatusPill status={row.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
