import { Bell } from 'lucide-react';

export function TopBar() {
  return (
    <header className="flex h-16 shrink-0 items-center justify-between border-b border-slate-200 bg-white px-6">
      <div />
      <div className="flex items-center gap-4">
        <button
          type="button"
          className="rounded-lg p-2 text-slate-400 hover:bg-slate-50 hover:text-slate-600"
          aria-label="Notifications"
        >
          <Bell className="h-5 w-5" />
        </button>
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-100 text-sm font-semibold text-blue-700">
            AR
          </div>
          <div className="text-right">
            <p className="text-sm font-medium text-slate-900">Alex Rivera</p>
            <p className="text-xs text-slate-500">Catalog Manager</p>
          </div>
        </div>
      </div>
    </header>
  );
}
