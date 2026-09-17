import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  Library,
  FileSpreadsheet,
  Activity,
  Receipt,
} from 'lucide-react';

const navItems = [
  { to: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { to: '/catalog', label: 'Catalog', icon: Library },
  { to: '/cue-sheets', label: 'Cue Sheets', icon: FileSpreadsheet },
  { to: '/activity', label: 'Activity', icon: Activity },
  { to: '/royalty', label: 'Royalty Statements', icon: Receipt },
];

export function Sidebar() {
  return (
    <aside className="flex w-60 shrink-0 flex-col border-r border-slate-200 bg-white">
      <div className="flex h-16 items-center border-b border-slate-200 px-5">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-sm font-bold text-white">
            A
          </div>
          <span className="text-lg font-semibold tracking-tight text-slate-900">
            ARIA
          </span>
        </div>
      </div>
      <nav className="flex-1 space-y-1 p-3">
        {navItems.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                isActive
                  ? 'bg-blue-50 text-blue-700'
                  : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
              }`
            }
          >
            <Icon className="h-5 w-5 shrink-0" />
            {label}
          </NavLink>
        ))}
      </nav>
      <div className="border-t border-slate-200 p-4">
        <p className="text-xs text-slate-400">ARIA Rebuild POC</p>
      </div>
    </aside>
  );
}
