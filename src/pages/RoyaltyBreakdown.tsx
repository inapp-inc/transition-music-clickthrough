import { useNavigate } from 'react-router-dom';
import { Calculator } from 'lucide-react';
import { royaltyCalculation as calc } from '../data/sampleData';
import { Badge } from '../components/Badge';

function fmt(n: number) {
  const abs = Math.abs(n).toFixed(2);
  return n < 0 ? `–$${abs}` : `$${abs}`;
}

export function RoyaltyBreakdown() {
  const navigate = useNavigate();

  const lines: {
    label: string;
    amount: string;
    nested?: boolean;
    bold?: boolean;
    highlight?: boolean;
    emphasis?: boolean;
  }[] = [
    { label: 'Gross Income (BMI Q4 2025)', amount: fmt(calc.grossIncome) },
    { label: 'Subtotal', amount: fmt(calc.subtotal) },
    { label: 'Copyright Fee Deduction', amount: fmt(calc.copyrightFee) },
    { label: 'Distribution', amount: fmt(calc.distribution) },
    { label: 'Admin Fee (10%)', amount: fmt(calc.adminFee) },
    { label: 'Adjusted Total', amount: fmt(calc.adjustedTotal), bold: true },
    {
      label: 'Co-Publisher Pool Share (25% of adjusted total)',
      amount: fmt(calc.poolShare),
      bold: true,
      highlight: true,
    },
    {
      label: `${calc.coPublisherA.name} — 60% of pool`,
      amount: fmt(calc.coPublisherA.amount),
      nested: true,
      emphasis: true,
    },
    {
      label: `${calc.coPublisherB.name} — 40% of pool`,
      amount: fmt(calc.coPublisherB.amount),
      nested: true,
    },
  ];

  return (
    <div className="mx-auto max-w-2xl">
      <div className="mb-2 flex items-center gap-2">
        <Calculator className="h-5 w-5 text-[var(--color-primary)]" strokeWidth={1.75} aria-hidden="true" />
        <h1 className="page-title">Royalty Calculation Breakdown</h1>
      </div>
      <p className="page-subtitle mb-6">
        Step-by-step calculation for Co-Publisher A statement
      </p>

      <div className="ledger-shell">
        <div className="ledger-header">
          <p className="section-label">Calculation Ledger</p>
        </div>

        <div>
          {lines.map((line) => (
            <div
              key={line.label}
              className={`ledger-row ${line.highlight ? 'ledger-row-highlight' : ''} ${line.nested ? 'ledger-row-nested' : ''}`}
            >
              <div className="flex min-w-0 flex-1 items-center gap-2 pr-4">
                <span
                  className={`text-sm ${
                    line.bold
                      ? 'font-semibold text-[var(--color-foreground)]'
                      : line.nested
                        ? 'text-[var(--color-muted-foreground)]'
                        : 'text-[var(--color-foreground)]'
                  }`}
                >
                  {line.label}
                </span>
                {line.highlight && (
                  <Badge variant="success" className="hidden shrink-0 sm:inline-flex">
                    Matches TMC&apos;s own Multi-Writer Co-Publisher Income
                    Template
                  </Badge>
                )}
              </div>
              <span
                className={`tabular-amount shrink-0 text-sm ${
                  line.bold || line.emphasis
                    ? 'font-semibold text-[var(--color-foreground)]'
                    : 'text-[var(--color-muted-foreground)]'
                } ${line.emphasis ? 'text-[var(--color-primary)]' : ''}`}
              >
                {line.amount}
              </span>
            </div>
          ))}
        </div>
      </div>

      {lines.some((l) => l.highlight) && (
        <p className="mt-3 text-xs text-[var(--color-muted-foreground)] sm:hidden">
          <Badge variant="success" className="mr-1">
            Verified
          </Badge>
          Matches TMC&apos;s own Multi-Writer Co-Publisher Income Template
        </p>
      )}

      <div className="mt-6 flex justify-end">
        <button
          type="button"
          onClick={() => navigate('/royalty/statement')}
          className="btn-primary"
        >
          Generate Statement
        </button>
      </div>
    </div>
  );
}
