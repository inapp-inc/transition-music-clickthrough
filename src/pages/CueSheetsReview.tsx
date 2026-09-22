import { Fragment, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';
import { parsedCues } from '../data/sampleData';
import { Badge } from '../components/Badge';
import { StatusPill, type StatusPillStatus } from '../components/StatusPill';

function matchStatusToPill(status: string): StatusPillStatus {
  if (status === 'needs-review') return 'Needs Review';
  if (status === 'matched-retitled') return 'Matched Retitled';
  return 'Matched';
}

export function CueSheetsReview() {
  const navigate = useNavigate();
  const [expandedRow, setExpandedRow] = useState<number | null>(null);

  return (
    <div>
      <h1 className="page-title">ES.TV – 26-001</h1>
      <p className="page-subtitle">12 cues extracted, 9 after consolidation</p>

      <div className="table-shell mt-6">
        <table>
          <thead>
            <tr>
              {[
                'Cue Title',
                'Type of Use',
                'Duration',
                'Matched Title',
                'Match Status',
              ].map((col) => (
                <th key={col}>{col}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {parsedCues.map((row, idx) => (
              <Fragment key={row.cueTitle}>
                <tr
                  onClick={() => {
                    if (row.matchStatus === 'needs-review') {
                      setExpandedRow(expandedRow === idx ? null : idx);
                    }
                  }}
                  className={
                    row.matchStatus === 'needs-review' ? 'table-row-interactive' : ''
                  }
                >
                  <td className="font-medium text-[var(--color-foreground)]">
                    {row.cueTitle}
                  </td>
                  <td className="text-[var(--color-muted-foreground)]">
                    {row.typeOfUse}
                    {row.note && (
                      <span className="mt-0.5 block text-xs text-[var(--color-muted-foreground)]/80">
                        ({row.note})
                      </span>
                    )}
                  </td>
                  <td className="text-[var(--color-muted-foreground)]">{row.duration}</td>
                  <td className="text-[var(--color-muted-foreground)]">
                    {row.matchedTitle || (
                      <span className="italic text-[var(--color-muted-foreground)]/70">
                        No match
                      </span>
                    )}
                  </td>
                  <td>
                    <StatusPill status={matchStatusToPill(row.matchStatus)} />
                  </td>
                </tr>
                {expandedRow === idx && row.matchStatus === 'needs-review' && (
                  <tr>
                    <td colSpan={5} className="bg-[var(--color-warning-bg)] px-4 py-3">
                      <div className="flex items-center gap-2 text-sm text-[var(--color-muted-foreground)]">
                        <Search className="h-4 w-4" aria-hidden="true" />
                        Search catalog to match manually…
                        <Badge variant="warning">Decorative</Badge>
                      </div>
                    </td>
                  </tr>
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 flex justify-end">
        <button
          type="button"
          onClick={() => navigate('/activity')}
          className="btn-primary"
        >
          Confirm & Save to Activity
        </button>
      </div>
    </div>
  );
}
