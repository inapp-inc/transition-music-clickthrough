import { CheckCircle2, AlertTriangle, Clock } from 'lucide-react';

export type StatusPillStatus =
  | 'Registered'
  | 'Pending'
  | 'Processed'
  | 'Yes'
  | 'No'
  | 'Matched'
  | 'Needs Review'
  | 'Matched Retitled';

interface StatusPillProps {
  status: StatusPillStatus;
}

const config: Record<
  StatusPillStatus,
  { className: string; icon?: typeof CheckCircle2; label?: string }
> = {
  Registered: {
    className: 'bg-[var(--color-success-bg)] text-[var(--color-success)] ring-[var(--color-success-border)]',
    icon: CheckCircle2,
  },
  Processed: {
    className: 'bg-[var(--color-success-bg)] text-[var(--color-success)] ring-[var(--color-success-border)]',
    icon: CheckCircle2,
  },
  Yes: {
    className: 'bg-[var(--color-success-bg)] text-[var(--color-success)] ring-[var(--color-success-border)]',
    icon: CheckCircle2,
  },
  Matched: {
    className: 'bg-[var(--color-success-bg)] text-[var(--color-success)] ring-[var(--color-success-border)]',
    icon: CheckCircle2,
  },
  'Matched Retitled': {
    className: 'bg-[var(--color-success-bg)] text-[var(--color-success)] ring-[var(--color-success-border)]',
    icon: CheckCircle2,
    label: 'Matched — retitled track recognized',
  },
  Pending: {
    className: 'bg-[var(--color-warning-bg)] text-[var(--color-warning)] ring-[var(--color-warning-border)]',
    icon: Clock,
  },
  'Needs Review': {
    className: 'bg-[var(--color-warning-bg)] text-[var(--color-warning)] ring-[var(--color-warning-border)]',
    icon: AlertTriangle,
  },
  No: {
    className: 'bg-[var(--color-muted)] text-[var(--color-muted-foreground)] ring-[var(--color-border)]',
  },
};

export function StatusPill({ status }: StatusPillProps) {
  const { className, icon: Icon, label } = config[status];
  const display = label ?? status;

  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-medium ring-1 ring-inset ${className}`}
    >
      {Icon && <Icon className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />}
      {display}
    </span>
  );
}
