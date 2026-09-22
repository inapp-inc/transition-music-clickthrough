import { useNavigate } from 'react-router-dom';
import { Library, DollarSign, FileSpreadsheet } from 'lucide-react';
import {
  catalogTitles,
  cueSheetHistory,
  recentActivity,
  royaltyCalculation,
} from '../data/sampleData';

function fmt(n: number) {
  return `$${n.toFixed(2)}`;
}

const processedCueSheets = cueSheetHistory.filter(
  (sheet) => sheet.status === 'Processed',
).length;

const cards = [
  {
    label: 'Catalog',
    value: `${catalogTitles.length} titles`,
    icon: Library,
    to: '/catalog',
  },
  {
    label: 'Royalty Pool',
    value: fmt(royaltyCalculation.poolShare),
    icon: DollarSign,
    to: '/royalty',
  },
  {
    label: 'Cue Sheets Processed',
    value: `${processedCueSheets} this period`,
    icon: FileSpreadsheet,
    to: '/cue-sheets',
  },
];

export function LeaderDashboard() {
  const navigate = useNavigate();

  return (
    <div className="mx-auto max-w-5xl">
      <h1 className="page-title">Business Overview</h1>
      <p className="page-subtitle">
        Cross-functional rollup across catalog, cue sheets, and royalty.
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
            <p className="tabular-amount mt-1 text-2xl font-semibold tracking-tight text-[var(--color-foreground)]">
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
