import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import { supremeGuidanceAfter } from '../data/sampleData';
import { Badge } from '../components/Badge';

export function TitleDetailAfter() {
  const navigate = useNavigate();
  const data = supremeGuidanceAfter;

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

      <div className="mb-6 flex items-center gap-3 rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3">
        <CheckCircle2 className="h-5 w-5 text-emerald-600" />
        <p className="text-sm font-medium text-emerald-800">
          Retitled on {data.retitledDate}
        </p>
      </div>

      <div className="mb-6 flex items-center gap-3">
        <h1 className="text-2xl font-semibold text-slate-900">{data.title}</h1>
        <Badge variant="primary">{data.prefix}</Badge>
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
            <div className="flex justify-between pt-1">
              <dt className="text-sm text-slate-500">Copyright</dt>
              <dd>
                <Badge variant="warning">DON&apos;T FILE COPYRIGHT</Badge>
              </dd>
            </div>
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

      <div className="mt-8 flex justify-end">
        <button
          type="button"
          onClick={() => navigate('/cue-sheets')}
          className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700"
        >
          Next: Import this week&apos;s cue sheets
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
