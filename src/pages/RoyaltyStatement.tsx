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
      <div className="card overflow-hidden shadow-[var(--shadow-md)]">
        <div className="border-b border-[var(--color-border)] bg-[var(--color-foreground)] px-8 py-6 text-white">
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
            {[
              ['Recipient', 'Co-Publisher A'],
              ['Statement Period', 'Q4 2025'],
              ['Income Source', 'BMI Q4 2025'],
              ['Title Pool', '2 titles'],
            ].map(([label, value]) => (
              <div key={label}>
                <dt className="section-label">{label}</dt>
                <dd className="mt-1 text-sm font-medium text-[var(--color-foreground)]">
                  {value}
                </dd>
              </div>
            ))}
          </dl>

          <table className="w-full text-sm">
            <tbody className="divide-y divide-[var(--color-border)]">
              {[
                ['Gross Income', fmt(calc.grossIncome), false],
                ['Copyright Fee Deduction', fmt(calc.copyrightFee), false],
                ['Distribution', fmt(calc.distribution), false],
                ['Admin Fee (10%)', fmt(calc.adminFee), false],
                ['Adjusted Total', fmt(calc.adjustedTotal), true],
                ['Co-Publisher Pool Share (25%)', fmt(calc.poolShare), false],
                ['Co-Publisher A (60% of pool)', fmt(calc.coPublisherA.amount), false, true],
              ].map(([label, amount, bold, nested]) => (
                <tr key={label as string}>
                  <td
                    className={`py-2 text-[var(--color-muted-foreground)] ${bold ? 'font-medium text-[var(--color-foreground)]' : ''} ${nested ? 'pl-4' : ''}`}
                  >
                    {label}
                  </td>
                  <td
                    className={`tabular-amount py-2 text-right ${bold ? 'font-medium text-[var(--color-foreground)]' : ''}`}
                  >
                    {amount}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="mt-8 border-t-2 border-[var(--color-foreground)] pt-4">
            <div className="flex items-center justify-between">
              <span className="text-lg font-bold text-[var(--color-foreground)]">
                Total Due
              </span>
              <span className="tabular-amount text-2xl font-bold text-[var(--color-foreground)]">
                {fmt(calc.coPublisherA.amount)}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
        <div className="flex gap-2">
          <button type="button" className="btn-secondary">
            <Download className="h-4 w-4" aria-hidden="true" />
            Export as PDF
          </button>
          <button type="button" className="btn-secondary">
            <FileSpreadsheet className="h-4 w-4" aria-hidden="true" />
            Export as Excel
          </button>
        </div>
        <button type="button" onClick={() => navigate('/wrap-up')} className="btn-primary">
          Done
        </button>
      </div>
    </div>
  );
}
