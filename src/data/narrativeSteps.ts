import type { PersonaId } from './personas';

export interface NarrativeStep {
  id: string;
  stepNumber: number;
  label: string;
  sublabel: string;
  personaId: PersonaId;
  route: string;
}

export const narrativeSteps: NarrativeStep[] = [
  {
    id: 'catalog-retitle',
    stepNumber: 1,
    label: 'Catalog · Retitle',
    sublabel: 'Catalog Manager retitles SUPREME GUIDANCE',
    personaId: 'catalog-manager',
    route: '/catalog/supreme-guidance',
  },
  {
    id: 'catalog-cue-sheets',
    stepNumber: 2,
    label: 'Catalog · Cue Sheets',
    sublabel: 'Import & match cue sheets against the catalog',
    personaId: 'catalog-manager',
    route: '/cue-sheets/parsing',
  },
  {
    id: 'royalty-calculate',
    stepNumber: 3,
    label: 'Royalty · Calculate',
    sublabel: 'Royalty Manager runs the income breakdown',
    personaId: 'royalty-manager',
    route: '/royalty/breakdown',
  },
  {
    id: 'royalty-statement',
    stepNumber: 4,
    label: 'Royalty · Statement',
    sublabel: 'Generate the co-publisher statement',
    personaId: 'royalty-manager',
    route: '/royalty/statement',
  },
  {
    id: 'leader-rollup',
    stepNumber: 5,
    label: 'Leader · Rollup',
    sublabel: 'Owner sees the activity roll up across the business',
    personaId: 'owner',
    route: '/leader',
  },
];
