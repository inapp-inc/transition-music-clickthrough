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
    indent?: boolean;
    nested?: boolean;
    bold?: boolean;
    highlight?: boolean;
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
        <Calculator className="h-5 w-5 text-blue-600" />
        <h1 className="text-2xl font-semibold text-slate-900">
          Royalty Calculation Breakdown
        </h1>
      </div>
      <p className="mb-6 text-slate-500">
        Step-by-step calculation for Co-Publisher A statement
      </p>

      <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
        <div className="border-b border-slate-200 bg-slate-50 px-5 py-3">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            Calculation Ledger
          </p>
        </div>

        <div className="divide-y divide-slate-100 px-5">
          {lines.map((line) => (
            <div
              key={line.label}
              className={`flex items-center justify-between py-3.5 ${
                line.nested ? 'ml-6 border-l-2 border-blue-200 pl-4' : ''
              } ${line.highlight ? 'bg-blue-50/50 -mx-5 px-5' : ''}`}
            >
              <div className="flex items-center gap-2">
                {line.nested && (
                  <span className="text-slate-300">├─</span>
                )}
                <span
                  className={`text-sm ${
                    line.bold
                      ? 'font-semibold text-slate-900'
                      : line.nested
                        ? 'text-slate-600'
                        : 'text-slate-700'
                  }`}
                >
                  {line.label}
                </span>
                {line.highlight && (
                  <Badge variant="success">
                    Matches TMC&apos;s own Multi-Writer Co-Publisher Income
                    Template
                  </Badge>
                )}
              </div>
              <span
                className={`font-mono text-sm tabular-nums ${
                  line.bold ? 'font-semibold text-slate-900' : 'text-slate-700'
                } ${line.nested && line.label.includes('Co-Publisher A') ? 'text-blue-700 font-semibold' : ''}`}
              >
                {line.amount}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 flex justify-end">
        <button
          type="button"
          onClick={() => navigate('/royalty/statement')}
          className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700"
        >
          Generate Statement
        </button>
      </div>
    </div>
  );
}
