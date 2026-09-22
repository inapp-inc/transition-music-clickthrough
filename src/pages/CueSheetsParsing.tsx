import { useNavigate, useLocation } from 'react-router-dom';
import { FileText } from 'lucide-react';

export function CueSheetsParsing() {
  const navigate = useNavigate();
  const location = useLocation();
  const filename =
    (location.state as { filename?: string })?.filename ?? 'ES.TV – 26-001.pdf';

  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="card w-full max-w-md text-center">
        <div className="card-body">
          <FileText
            className="mx-auto h-12 w-12 text-[var(--color-primary)]"
            strokeWidth={1.75}
            aria-hidden="true"
          />
          <p className="mt-4 text-sm font-medium text-[var(--color-foreground)]">{filename}</p>

          <div className="relative mt-6 h-2 overflow-hidden rounded-full bg-[var(--color-muted)]">
            <div className="progress-bar-indeterminate absolute inset-0" />
          </div>

          <p className="mt-4 text-sm text-[var(--color-muted-foreground)]">
            Extracting cues… Matching titles… Consolidating multi-use cues…
          </p>

          <button
            type="button"
            onClick={() => navigate('/cue-sheets/review')}
            className="btn-primary mt-8"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
