import { Fragment, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle2, AlertTriangle, Search } from 'lucide-react';
import { parsedCues } from '../data/sampleData';
import { Badge } from '../components/Badge';

function MatchStatus({ status }: { status: string }) {
  if (status === 'needs-review') {
    return (
      <span className="inline-flex items-center gap-1 text-amber-700">
        <AlertTriangle className="h-4 w-4" />
        Needs Review
      </span>
    );
  }
  if (status === 'matched-retitled') {
    return (
      <span className="inline-flex items-center gap-1 text-emerald-700">
        <CheckCircle2 className="h-4 w-4" />
        Matched — retitled track recognized
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1 text-emerald-700">
      <CheckCircle2 className="h-4 w-4" />
      Matched
    </span>
  );
}

export function CueSheetsReview() {
  const navigate = useNavigate();
  const [expandedRow, setExpandedRow] = useState<number | null>(null);

  return (
    <div>
      <h1 className="text-2xl font-semibold text-slate-900">
        ES.TV – 26-001
      </h1>
      <p className="mt-1 text-slate-500">
        12 cues extracted, 9 after consolidation
      </p>

      <div className="mt-6 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
        <table className="min-w-full divide-y divide-slate-200">
          <thead className="bg-slate-50">
            <tr>
              {[
                'Cue Title',
                'Type of Use',
                'Duration',
                'Matched Title',
                'Match Status',
              ].map((col) => (
                <th
                  key={col}
                  className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500"
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {parsedCues.map((row, idx) => (
              <Fragment key={row.cueTitle}>
                <tr
                  key={row.cueTitle}
                  onClick={() => {
                    if (row.matchStatus === 'needs-review') {
                      setExpandedRow(expandedRow === idx ? null : idx);
                    }
                  }}
                  className={`transition-colors hover:bg-slate-50 ${
                    row.matchStatus === 'needs-review' ? 'cursor-pointer' : ''
                  }`}
                >
                  <td className="px-4 py-3 text-sm font-medium text-slate-900">
                    {row.cueTitle}
                  </td>
                  <td className="px-4 py-3 text-sm text-slate-600">
                    {row.typeOfUse}
                    {row.note && (
                      <span className="mt-0.5 block text-xs text-slate-400">
                        ({row.note})
                      </span>
                    )}
                  </td>
                  <td className="px-4 py-3 text-sm text-slate-600">
                    {row.duration}
                  </td>
                  <td className="px-4 py-3 text-sm text-slate-600">
                    {row.matchedTitle || (
                      <span className="italic text-slate-400">No match</span>
                    )}
                  </td>
                  <td className="px-4 py-3 text-sm">
                    <MatchStatus status={row.matchStatus} />
                  </td>
                </tr>
                {expandedRow === idx && row.matchStatus === 'needs-review' && (
                  <tr>
                    <td colSpan={5} className="bg-amber-50/50 px-4 py-3">
                      <div className="flex items-center gap-2 text-sm text-slate-600">
                        <Search className="h-4 w-4 text-slate-400" />
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
          className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700"
        >
          Confirm & Save to Activity
        </button>
      </div>
    </div>
  );
}
