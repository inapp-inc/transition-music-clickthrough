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
        className="btn-ghost mb-4"
      >
        <ArrowLeft className="h-4 w-4" aria-hidden="true" />
        Back to Catalog
      </button>

      <div className="alert-success mb-6">
        <CheckCircle2 className="h-5 w-5 text-[var(--color-success)]" aria-hidden="true" />
        <p>Retitled on {data.retitledDate}</p>
      </div>

      <div className="mb-6 flex items-center gap-3">
        <h1 className="page-title">{data.title}</h1>
        <Badge variant="primary">{data.prefix}</Badge>
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
            <div className="flex justify-between pt-1">
              <dt className="text-sm text-[var(--color-muted-foreground)]">Copyright</dt>
              <dd>
                <Badge variant="warning">DON&apos;T FILE COPYRIGHT</Badge>
              </dd>
            </div>
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

      <div className="mt-8 flex justify-end">
        <button
          type="button"
          onClick={() => navigate('/cue-sheets')}
          className="btn-primary"
        >
          Next: Import this week&apos;s cue sheets
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
