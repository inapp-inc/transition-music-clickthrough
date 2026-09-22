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
      <h1 className="page-title">Welcome back, Alex</h1>
      <p className="page-subtitle">
        Here&apos;s an overview of your catalog and pending work.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {cards.map(({ label, value, icon: Icon, to }) => (
          <button
            key={label}
            type="button"
            onClick={() => navigate(to)}
            className="kpi-card group"
          >
            <Icon
              className="h-8 w-8 text-[var(--color-primary)] transition-colors duration-200 group-hover:text-[#1d4ed8]"
              strokeWidth={1.75}
              aria-hidden="true"
            />
            <p className="mt-4 text-sm font-medium text-[var(--color-muted-foreground)]">
              {label}
            </p>
            <p className="mt-1 text-2xl font-semibold tracking-tight text-[var(--color-foreground)]">
              {value}
            </p>
          </button>
        ))}
      </div>

      <div className="card mt-10">
        <div className="card-body">
          <h2 className="section-label">Recent Activity</h2>
          <ul className="mt-4 divide-y divide-[var(--color-border)]">
            {recentActivity.map((item) => (
              <li
                key={item}
                className="py-3 text-sm text-[var(--color-muted-foreground)] first:pt-0 last:pb-0"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
