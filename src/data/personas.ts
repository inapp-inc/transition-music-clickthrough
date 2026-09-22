export type PersonaId = 'catalog-manager' | 'royalty-manager' | 'owner';

export interface Persona {
  id: PersonaId;
  name: string;
  role: string;
  initials: string;
  badgeClass: string;
  defaultRoute: string;
  navItems: { label: string; to: string; icon: keyof typeof import('lucide-react') }[];
}

export const personas: Persona[] = [
  {
    id: 'catalog-manager',
    name: 'Alex Rivera',
    role: 'Catalog Manager',
    initials: 'AR',
    badgeClass: 'bg-blue-100 text-blue-700',
    defaultRoute: '/dashboard',
    navItems: [
      { label: 'Dashboard', to: '/dashboard', icon: 'LayoutDashboard' },
      { label: 'Catalog', to: '/catalog', icon: 'Library' },
      { label: 'Cue Sheets', to: '/cue-sheets', icon: 'FileText' },
      { label: 'Activity', to: '/activity', icon: 'Activity' },
    ],
  },
  {
    id: 'royalty-manager',
    name: 'John Doe',
    role: 'Royalty Manager',
    initials: 'JD',
    badgeClass: 'bg-emerald-100 text-emerald-700',
    defaultRoute: '/royalty',
    navItems: [
      { label: 'Royalty Dashboard', to: '/royalty', icon: 'LayoutDashboard' },
      { label: 'Income', to: '/royalty/income', icon: 'DollarSign' },
      { label: 'Breakdown', to: '/royalty/breakdown', icon: 'PieChart' },
      { label: 'Statements', to: '/royalty/statement', icon: 'FileText' },
      { label: 'Activity', to: '/activity', icon: 'Activity' },
    ],
  },
  {
    id: 'owner',
    name: 'Alice Chen',
    role: 'Owner',
    initials: 'AC',
    badgeClass: 'bg-violet-100 text-violet-700',
    defaultRoute: '/leader',
    navItems: [
      { label: 'Leader Dashboard', to: '/leader', icon: 'LayoutDashboard' },
      { label: 'Catalog', to: '/catalog', icon: 'Library' },
      { label: 'Royalty', to: '/royalty', icon: 'DollarSign' },
      { label: 'Activity', to: '/activity', icon: 'Activity' },
    ],
  },
];

export const getPersona = (id: PersonaId) =>
  personas.find((p) => p.id === id) ?? personas[0];
