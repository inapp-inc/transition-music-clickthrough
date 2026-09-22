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
        className="btn-ghost mb-4"
      >
        <ArrowLeft className="h-4 w-4" aria-hidden="true" />
        Back to Catalog
      </button>

      <div className="alert-warning mb-6">
        <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-[var(--color-warning)]" aria-hidden="true" />
        <p>
          This title is used in a new production and needs to be retitled per
          TMC&apos;s publishing rules.
        </p>
      </div>

      <div className="mb-6 flex items-center justify-between">
        <h1 className="page-title">{data.title}</h1>
        <button
          type="button"
          onClick={() => navigate('/retitle/step-1')}
          className="btn-primary"
        >
          Retitle This Track
        </button>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="detail-card">
          <h2 className="section-label mb-4">Title Metadata</h2>
          <dl className="space-y-3">
            {[
              ['Title', data.title],
              ['Alternate Titles', data.alternateTitles],
              ['Performing Artist', data.performingArtist],
              ['Prefix', data.prefix],
              ['Public Domain', data.publicDomain],
            ].map(([label, value]) => (
              <div key={label} className="detail-row">
                <dt className="text-sm text-[var(--color-muted-foreground)]">{label}</dt>
                <dd className="text-sm font-medium text-[var(--color-foreground)]">{value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="space-y-6">
          <div className="detail-card">
            <h2 className="section-label mb-4">Writers</h2>
            {data.writers.map((w) => (
              <div
                key={w.name}
                className="flex items-center justify-between border-b border-[var(--color-border)] py-2 last:border-0"
              >
                <span className="text-sm font-medium text-[var(--color-foreground)]">
                  {w.name}
                </span>
                <span className="text-sm text-[var(--color-muted-foreground)]">
                  {w.pro} · {w.share}
                </span>
              </div>
            ))}
          </div>

          <div className="detail-card">
            <h2 className="section-label mb-4">Publishers</h2>
            {data.publishers.map((p) => (
              <div
                key={p.name}
                className="flex items-center justify-between border-b border-[var(--color-border)] py-2 last:border-0"
              >
                <span className="text-sm font-medium text-[var(--color-foreground)]">
                  {p.name}
                </span>
                <span className="text-sm text-[var(--color-muted-foreground)]">
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
