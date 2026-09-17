import { useNavigate, useLocation } from 'react-router-dom';
import { FileText } from 'lucide-react';

export function CueSheetsParsing() {
  const navigate = useNavigate();
  const location = useLocation();
  const filename =
    (location.state as { filename?: string })?.filename ?? 'ES.TV – 26-001.pdf';

  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="w-full max-w-md rounded-xl border border-slate-200 bg-white p-8 text-center shadow-sm">
        <FileText className="mx-auto h-12 w-12 text-blue-600" />
        <p className="mt-4 text-sm font-medium text-slate-900">{filename}</p>

        <div className="relative mt-6 h-2 overflow-hidden rounded-full bg-slate-200">
          <div className="progress-bar-indeterminate absolute inset-0" />
        </div>

        <p className="mt-4 text-sm text-slate-500">
          Extracting cues… Matching titles… Consolidating multi-use cues…
        </p>

        <button
          type="button"
          onClick={() => navigate('/cue-sheets/review')}
          className="mt-8 rounded-lg bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-blue-700"
        >
          Continue
        </button>
      </div>
    </div>
  );
}
