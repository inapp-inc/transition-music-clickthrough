import { useNavigate } from 'react-router-dom';
import { CheckCircle2, RotateCcw } from 'lucide-react';

const recapItems = [
  {
    title: 'Automatic retitling',
    description:
      'Applied TMC publishing rules to SUPREME GUIDANCE — prefix assignment, publisher split, and copyright flag — with full rule transparency.',
  },
  {
    title: 'Cue sheet parsing & consolidation',
    description:
      'Parsed ES.TV – 26-001, consolidated multi-use cues, matched titles to catalog (including the newly retitled track), and flagged unmatched rows for review.',
  },
  {
    title: 'Nested co-publisher royalty calculation',
    description:
      'Calculated a co-publisher income due statement with admin fee, pool share, and 60/40 nested split — matching TMC\'s reference math exactly ($40.64 due to Co-Publisher A).',
  },
];

export function WrapUp() {
  const navigate = useNavigate();

  return (
    <div className="mx-auto flex min-h-[60vh] max-w-2xl flex-col items-center justify-center text-center">
      <h1 className="text-3xl font-semibold tracking-tight text-[var(--color-foreground)]">
        You just saw ARIA…
      </h1>
      <p className="mt-2 text-[var(--color-muted-foreground)]">
        Three capabilities that prove the ARIA Rebuild is ready for TMC.
      </p>

      <div className="mt-10 space-y-6 text-left">
        {recapItems.map((item, i) => (
          <div key={item.title} className="flex gap-4">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--color-success-bg)] text-sm font-bold text-[var(--color-success)] ring-1 ring-[var(--color-success-border)]">
              {i + 1}
            </div>
            <div>
              <h2 className="flex items-center gap-2 text-sm font-semibold text-[var(--color-foreground)]">
                <CheckCircle2 className="h-4 w-4 text-[var(--color-success)]" aria-hidden="true" />
                {item.title}
              </h2>
              <p className="mt-1 text-sm text-[var(--color-muted-foreground)]">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={() => navigate('/dashboard')}
        className="btn-primary mt-10 px-6 py-3"
      >
        <RotateCcw className="h-4 w-4" aria-hidden="true" />
        Restart Walkthrough
      </button>
    </div>
  );
}
