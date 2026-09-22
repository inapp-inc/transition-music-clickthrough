import { NavLink } from 'react-router-dom';
import * as LucideIcons from 'lucide-react';
import { usePersona } from '../context/PersonaContext';
import type { Persona } from '../data/personas';

function NavIcon({ name }: { name: Persona['navItems'][number]['icon'] }) {
  const Icon = LucideIcons[name] as LucideIcons.LucideIcon;
  return <Icon className="h-[1.125rem] w-[1.125rem] shrink-0" strokeWidth={1.75} aria-hidden="true" />;
}

export function Sidebar() {
  const { currentPersona } = usePersona();

  return (
    <aside className="flex w-60 shrink-0 flex-col border-r border-[var(--color-border)] bg-[var(--color-card)]">
      <div className="flex h-14 items-center border-b border-[var(--color-border)] px-5">
        <div className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--color-primary)] text-sm font-bold text-[var(--color-on-primary)] shadow-[var(--shadow-sm)]">
            A
          </div>
          <span className="text-lg font-semibold tracking-tight text-[var(--color-foreground)]">
            ARIA
          </span>
        </div>
      </div>
      <nav className="flex-1 space-y-0.5 p-2">
        {currentPersona.navItems.map(({ to, label, icon }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-ring)] ${
                isActive
                  ? 'bg-[var(--color-info-bg)] text-[var(--color-primary)]'
                  : 'text-[var(--color-muted-foreground)] hover:bg-[var(--color-muted)] hover:text-[var(--color-foreground)]'
              }`
            }
          >
            <NavIcon name={icon} />
            {label}
          </NavLink>
        ))}
      </nav>
      <div className="border-t border-[var(--color-border)] p-4">
        <p className="text-xs text-[var(--color-muted-foreground)]">ARIA Rebuild POC</p>
      </div>
    </aside>
  );
}
