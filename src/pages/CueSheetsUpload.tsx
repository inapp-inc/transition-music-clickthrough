import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Upload, FileSpreadsheet, FileText } from 'lucide-react';
import { cueSheetHistory } from '../data/sampleData';
import { StatusPill } from '../components/StatusPill';

const exampleFiles = [
  {
    name: 'Weird Earth S4 EP1 Music Cue Sheet.xlsx',
    icon: FileSpreadsheet,
  },
  { name: 'ES.TV – 26-001.pdf', icon: FileText },
];

export function CueSheetsUpload() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const handleUpload = (filename: string) => {
    navigate('/cue-sheets/parsing', { state: { filename } });
  };

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <h1 className="page-title">Cue Sheets</h1>
        <button type="button" onClick={() => setShowModal(true)} className="btn-primary">
          <Upload className="h-4 w-4" aria-hidden="true" />
          Upload Cue Sheet
        </button>
      </div>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="card w-full max-w-lg shadow-[var(--shadow-xl)]">
            <div className="card-body">
              <h2 className="mb-4 text-lg font-semibold text-[var(--color-foreground)]">
                Upload Cue Sheet
              </h2>
              <div className="rounded-lg border-2 border-dashed border-[var(--color-border)] bg-[var(--color-muted)] p-8 text-center">
                <Upload
                  className="mx-auto h-10 w-10 text-[var(--color-muted-foreground)]"
                  aria-hidden="true"
                />
                <p className="mt-3 text-sm text-[var(--color-muted-foreground)]">
                  Drop a PDF or Excel cue sheet here
                </p>
                <p className="mt-1 text-xs text-[var(--color-muted-foreground)]/80">
                  Or click an example file below
                </p>
                <div className="mt-4 flex flex-wrap justify-center gap-2">
                  {exampleFiles.map(({ name, icon: Icon }) => (
                    <button
                      key={name}
                      type="button"
                      onClick={() => handleUpload(name)}
                      className="filter-chip inline-flex items-center gap-2"
                    >
                      <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                      {name}
                    </button>
                  ))}
                </div>
              </div>
              <button
                type="button"
                onClick={() => setShowModal(false)}
                className="btn-secondary mt-4 w-full"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="card mb-8">
        <div className="card-body">
          <p className="mb-3 text-sm font-medium text-[var(--color-foreground)]">
            Quick upload — click an example file:
          </p>
          <div className="flex flex-wrap gap-2">
            {exampleFiles.map(({ name, icon: Icon }) => (
              <button
                key={name}
                type="button"
                onClick={() => handleUpload(name)}
                className="btn-secondary"
              >
                <Icon className="h-4 w-4 text-[var(--color-primary)]" aria-hidden="true" />
                {name}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="table-shell">
        <table>
          <thead>
            <tr>
              <th>Cue Sheet</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {cueSheetHistory.map((row) => (
              <tr key={row.name} className="table-row-interactive">
                <td className="font-medium text-[var(--color-foreground)]">{row.name}</td>
                <td>
                  <StatusPill status={row.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
