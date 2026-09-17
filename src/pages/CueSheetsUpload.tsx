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
        <h1 className="text-2xl font-semibold text-slate-900">Cue Sheets</h1>
        <button
          type="button"
          onClick={() => setShowModal(true)}
          className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700"
        >
          <Upload className="h-4 w-4" />
          Upload Cue Sheet
        </button>
      </div>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="w-full max-w-lg rounded-xl border border-slate-200 bg-white p-6 shadow-xl">
            <h2 className="mb-4 text-lg font-semibold text-slate-900">
              Upload Cue Sheet
            </h2>
            <div className="rounded-lg border-2 border-dashed border-slate-300 bg-slate-50 p-8 text-center">
              <Upload className="mx-auto h-10 w-10 text-slate-400" />
              <p className="mt-3 text-sm text-slate-600">
                Drop a PDF or Excel cue sheet here
              </p>
              <p className="mt-1 text-xs text-slate-400">
                Or click an example file below
              </p>
              <div className="mt-4 flex flex-wrap justify-center gap-2">
                {exampleFiles.map(({ name, icon: Icon }) => (
                  <button
                    key={name}
                    type="button"
                    onClick={() => handleUpload(name)}
                    className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 hover:border-blue-300 hover:bg-blue-50"
                  >
                    <Icon className="h-3.5 w-3.5" />
                    {name}
                  </button>
                ))}
              </div>
            </div>
            <button
              type="button"
              onClick={() => setShowModal(false)}
              className="mt-4 w-full rounded-lg border border-slate-300 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      <div className="mb-8 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <p className="mb-3 text-sm font-medium text-slate-700">
          Quick upload — click an example file:
        </p>
        <div className="flex flex-wrap gap-2">
          {exampleFiles.map(({ name, icon: Icon }) => (
            <button
              key={name}
              type="button"
              onClick={() => handleUpload(name)}
              className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:border-blue-300 hover:bg-blue-50"
            >
              <Icon className="h-4 w-4 text-blue-600" />
              {name}
            </button>
          ))}
        </div>
      </div>

      <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
        <table className="min-w-full divide-y divide-slate-200">
          <thead className="bg-slate-50">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                Cue Sheet
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {cueSheetHistory.map((row) => (
              <tr key={row.name} className="hover:bg-slate-50">
                <td className="px-4 py-3 text-sm font-medium text-slate-900">
                  {row.name}
                </td>
                <td className="px-4 py-3">
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
