interface StatusPillProps {
  status: 'Registered' | 'Pending' | 'Processed' | 'Yes' | 'No';
}

export function StatusPill({ status }: StatusPillProps) {
  const config = {
    Registered: 'bg-emerald-50 text-emerald-700 ring-emerald-200',
    Pending: 'bg-amber-50 text-amber-700 ring-amber-200',
    Processed: 'bg-emerald-50 text-emerald-700 ring-emerald-200',
    Yes: 'bg-emerald-50 text-emerald-700 ring-emerald-200',
    No: 'bg-slate-100 text-slate-600 ring-slate-200',
  };

  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ring-1 ring-inset ${config[status]}`}
    >
      {status}
    </span>
  );
}
