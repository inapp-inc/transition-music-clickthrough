import { useNavigate } from 'react-router-dom';
import { Search, Plus } from 'lucide-react';
import { catalogTitles } from '../data/sampleData';
import { StatusPill } from '../components/StatusPill';

const filterChips = [
  { label: 'PRO', options: ['ASCAP', 'BMI', 'SESAC'] },
  { label: 'Prefix', options: ['AMG', 'TMC ALIBI', 'Legacy'] },
  { label: 'Status', options: ['Registered', 'Pending'] },
];

export function CatalogList() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <h1 className="page-title">Catalog</h1>
        <button type="button" className="btn-primary">
          <Plus className="h-4 w-4" aria-hidden="true" />
          Add Title
        </button>
      </div>

      <div className="mb-4 flex items-center gap-3">
        <div className="relative max-w-md flex-1">
          <Search
            className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--color-muted-foreground)]"
            aria-hidden="true"
          />
          <input
            type="text"
            placeholder="Search by title, writer, or publisher…"
            className="input input-with-icon"
          />
        </div>
      </div>

      <div className="mb-4 flex flex-wrap gap-2">
        {filterChips.map(({ label, options }) =>
          options.map((opt) => (
            <button key={`${label}-${opt}`} type="button" className="filter-chip">
              {label}: {opt}
            </button>
          )),
        )}
      </div>

      <div className="table-shell">
        <table>
          <thead>
            <tr>
              {[
                'Title',
                'Writer(s)',
                'Publisher(s)',
                'Prefix',
                'PRO',
                'Registration Status',
              ].map((col) => (
                <th key={col} className="sortable">
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {catalogTitles.map((row) => (
              <tr
                key={row.id}
                onClick={() => {
                  if (row.id === 'supreme-guidance') {
                    navigate('/catalog/supreme-guidance');
                  }
                }}
                className={`${row.id === 'supreme-guidance' ? 'table-row-interactive' : ''} ${
                  row.highlighted ? 'table-row-highlight' : ''
                }`}
              >
                <td className="font-medium text-[var(--color-foreground)]">{row.title}</td>
                <td className="text-[var(--color-muted-foreground)]">{row.writers}</td>
                <td className="text-[var(--color-muted-foreground)]">{row.publishers}</td>
                <td className="text-[var(--color-muted-foreground)]">{row.prefix}</td>
                <td className="text-[var(--color-muted-foreground)]">{row.pro}</td>
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
