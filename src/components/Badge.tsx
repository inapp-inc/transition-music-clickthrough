interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'success' | 'warning' | 'primary' | 'neutral';
  className?: string;
}

const variants = {
  default: 'bg-[var(--color-muted)] text-[var(--color-muted-foreground)]',
  success:
    'bg-[var(--color-success-bg)] text-[var(--color-success)] ring-1 ring-[var(--color-success-border)]',
  warning:
    'bg-[var(--color-warning-bg)] text-[var(--color-warning)] ring-1 ring-[var(--color-warning-border)]',
  primary:
    'bg-[var(--color-info-bg)] text-[var(--color-primary)] ring-1 ring-[var(--color-info-border)]',
  neutral:
    'bg-[var(--color-muted)] text-[var(--color-muted-foreground)] ring-1 ring-[var(--color-border)]',
};

export function Badge({
  children,
  variant = 'default',
  className = '',
}: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-md px-2 py-0.5 text-xs font-medium leading-snug ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
