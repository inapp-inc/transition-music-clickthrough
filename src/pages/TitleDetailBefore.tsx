import { useNavigate } from 'react-router-dom';
import { ArrowLeft, AlertCircle } from 'lucide-react';
import { supremeGuidanceBefore } from '../data/sampleData';

export function TitleDetailBefore() {
  const navigate = useNavigate();
  const data = supremeGuidanceBefore;

  return (
    <div className="mx-auto max-w-5xl">
      <button
        type="button"
        onClick={() => navigate('/catalog')}
        className="mb-4 inline-flex items-center gap-1 text-sm text-slate-500 hover:text-slate-700"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Catalog
      </button>

      <div className="mb-6 flex items-start gap-3 rounded-lg border border-amber-200 bg-amber-50 px-4 py-3">
        <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" />
        <p className="text-sm text-amber-800">
          This title is used in a new production and needs to be retitled per
          TMC&apos;s publishing rules.
        </p>
      </div>

      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-slate-900">{data.title}</h1>
        <button
          type="button"
          onClick={() => navigate('/retitle/step-1')}
          className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700"
        >
          Retitle This Track
        </button>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-slate-500">
            Title Metadata
          </h2>
          <dl className="space-y-3">
            {[
              ['Title', data.title],
              ['Alternate Titles', data.alternateTitles],
              ['Performing Artist', data.performingArtist],
              ['Prefix', data.prefix],
              ['Public Domain', data.publicDomain],
            ].map(([label, value]) => (
              <div key={label} className="flex justify-between border-b border-slate-100 pb-2">
                <dt className="text-sm text-slate-500">{label}</dt>
                <dd className="text-sm font-medium text-slate-900">{value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="space-y-6">
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-slate-500">
              Writers
            </h2>
            {data.writers.map((w) => (
              <div
                key={w.name}
                className="flex items-center justify-between border-b border-slate-100 py-2 last:border-0"
              >
                <span className="text-sm font-medium text-slate-900">
                  {w.name}
                </span>
                <span className="text-sm text-slate-500">
                  {w.pro} · {w.share}
                </span>
              </div>
            ))}
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-slate-500">
              Publishers
            </h2>
            {data.publishers.map((p) => (
              <div
                key={p.name}
                className="flex items-center justify-between border-b border-slate-100 py-2 last:border-0"
              >
                <span className="text-sm font-medium text-slate-900">
                  {p.name}
                </span>
                <span className="text-sm text-slate-500">
                  {p.pro} · {p.share}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
