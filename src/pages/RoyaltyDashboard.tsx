import { useNavigate } from 'react-router-dom';
import { DollarSign, PieChart, FileText } from 'lucide-react';
import { royaltyCalculation, recentActivity } from '../data/sampleData';

function fmt(n: number) {
  const abs = Math.abs(n).toFixed(2);
  return n < 0 ? `–$${abs}` : `$${abs}`;
}

const royaltyActivity = recentActivity.filter((item) =>
  /statement|BMI|retitled|processed/i.test(item),
);

const cards = [
  {
    label: 'Gross Income',
    value: fmt(royaltyCalculation.grossIncome),
    icon: DollarSign,
    to: '/royalty/income',
  },
  {
    label: 'Adjusted Total',
    value: fmt(royaltyCalculation.adjustedTotal),
    icon: PieChart,
    to: '/royalty/breakdown',
  },
  {
    label: 'Co-Publisher Pool',
    value: fmt(royaltyCalculation.poolShare),
    icon: FileText,
    to: '/royalty/statement',
  },
];

export function RoyaltyDashboard() {
  const navigate = useNavigate();

  return (
    <div className="mx-auto max-w-5xl">
      <h1 className="page-title">Royalty Overview</h1>
      <p className="page-subtitle">
        Current period income and co-publisher pool at a glance.
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
              className="h-8 w-8 text-[var(--color-success)] transition-colors duration-200 group-hover:text-[#047857]"
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

      <div className="card mt-6">
        <div className="card-body">
          <h2 className="section-label">Co-Publisher Split</h2>
          <dl className="mt-4 grid gap-4 sm:grid-cols-2">
            <div>
              <dt className="text-sm text-[var(--color-muted-foreground)]">
                {royaltyCalculation.coPublisherA.name} ({Math.round(royaltyCalculation.coPublisherA.share * 100)}%)
              </dt>
              <dd className="tabular-amount mt-1 text-lg font-semibold text-[var(--color-foreground)]">
                {fmt(royaltyCalculation.coPublisherA.amount)}
              </dd>
            </div>
            <div>
              <dt className="text-sm text-[var(--color-muted-foreground)]">
                {royaltyCalculation.coPublisherB.name} ({Math.round(royaltyCalculation.coPublisherB.share * 100)}%)
              </dt>
              <dd className="tabular-amount mt-1 text-lg font-semibold text-[var(--color-foreground)]">
                {fmt(royaltyCalculation.coPublisherB.amount)}
              </dd>
            </div>
          </dl>
        </div>
      </div>

      <div className="card mt-10">
        <div className="card-body">
          <h2 className="section-label">Recent Royalty Activity</h2>
          <ul className="mt-4 divide-y divide-[var(--color-border)]">
            {royaltyActivity.map((item) => (
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
