import { useNavigate } from 'react-router-dom';
import { Library, FileSpreadsheet, Receipt } from 'lucide-react';
import { recentActivity } from '../data/sampleData';

const cards = [
  {
    label: 'Catalog',
    value: '1,248 titles',
    icon: Library,
    to: '/catalog',
  },
  {
    label: 'Cue Sheets',
    value: '3 pending review',
    icon: FileSpreadsheet,
    to: '/cue-sheets',
  },
  {
    label: 'Royalty Statements',
    value: '1 draft',
    icon: Receipt,
    to: '/royalty',
  },
];

export function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="mx-auto max-w-5xl">
      <h1 className="text-2xl font-semibold text-slate-900">
        Welcome back, Alex
      </h1>
      <p className="mt-1 text-slate-500">
        Here&apos;s an overview of your catalog and pending work.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {cards.map(({ label, value, icon: Icon, to }) => (
          <button
            key={label}
            type="button"
            onClick={() => navigate(to)}
            className="group rounded-xl border border-slate-200 bg-white p-6 text-left shadow-sm transition-all hover:border-blue-200 hover:shadow-md"
          >
            <Icon className="h-8 w-8 text-blue-600" />
            <p className="mt-4 text-sm font-medium text-slate-500">{label}</p>
            <p className="mt-1 text-2xl font-semibold text-slate-900">
              {value}
            </p>
          </button>
        ))}
      </div>

      <div className="mt-10 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
          Recent Activity
        </h2>
        <ul className="mt-4 divide-y divide-slate-100">
          {recentActivity.map((item) => (
            <li
              key={item}
              className="py-3 text-sm text-slate-600 first:pt-0 last:pb-0"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
