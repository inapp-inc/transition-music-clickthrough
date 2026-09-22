import { Bell } from 'lucide-react';
import { usePersona } from '../context/PersonaContext';

export function TopBar() {
  const { currentPersona } = usePersona();

  return (
    <header className="flex h-14 shrink-0 items-center justify-between border-b border-[var(--color-border)] bg-[var(--color-card)] px-6">
      <div />
      <div className="flex items-center gap-3">
        <button
          type="button"
          className="cursor-pointer rounded-lg p-2 text-[var(--color-muted-foreground)] transition-colors duration-200 hover:bg-[var(--color-muted)] hover:text-[var(--color-foreground)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-ring)]"
          aria-label="Notifications"
        >
          <Bell className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
        </button>
        <div className="flex items-center gap-3 pl-1">
          <div
            className={`flex h-9 w-9 items-center justify-center rounded-full text-sm font-semibold ${currentPersona.badgeClass}`}
          >
            {currentPersona.initials}
          </div>
          <div className="text-right">
            <p className="text-sm font-medium text-[var(--color-foreground)]">
              {currentPersona.name}
            </p>
            <p className="text-xs text-[var(--color-muted-foreground)]">{currentPersona.role}</p>
          </div>
        </div>
      </div>
    </header>
  );
}
