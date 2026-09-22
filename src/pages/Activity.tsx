import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { activityRows } from '../data/sampleData';
import { StatusPill } from '../components/StatusPill';

export function Activity() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState<string | null>('ESTV DUNK');

  return (
    <div>
      <h1 className="page-title mb-6">Activity</h1>

      <div className="mb-4 flex flex-wrap gap-2">
        {['Production', 'Date range', 'Income Received: Yes', 'Income Received: No'].map(
          (chip) => (
            <button key={chip} type="button" className="filter-chip">
              {chip}
            </button>
          ),
        )}
      </div>

      <div className="table-shell">
        <table>
          <thead>
            <tr>
              <th className="w-10" />
              {[
                'Title',
                'Production',
                'Air Date',
                'Type of Use',
                'Duration',
                'Income Received',
              ].map((col) => (
                <th key={col}>{col}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {activityRows.map((row) => (
              <tr
                key={`${row.title}-${row.production}`}
                onClick={() => {
                  if (row.selectable) setSelected(row.title);
                }}
                className={`${row.selectable ? 'table-row-interactive' : ''} ${
                  selected === row.title ? 'table-row-selected' : ''
                }`}
              >
                <td>
                  {row.selectable && (
                    <input
                      type="radio"
                      checked={selected === row.title}
                      onChange={() => setSelected(row.title)}
                      className="h-4 w-4 accent-[var(--color-primary)]"
                    />
                  )}
                </td>
                <td className="font-medium text-[var(--color-foreground)]">{row.title}</td>
                <td className="text-[var(--color-muted-foreground)]">{row.production}</td>
                <td className="text-[var(--color-muted-foreground)]">{row.airDate}</td>
                <td className="text-[var(--color-muted-foreground)]">{row.typeOfUse}</td>
                <td className="text-[var(--color-muted-foreground)]">{row.duration}</td>
                <td>
                  <StatusPill status={row.incomeReceived ? 'Yes' : 'No'} />
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
          className="btn-primary"
        >
          Calculate Royalty
        </button>
      </div>
    </div>
  );
}
