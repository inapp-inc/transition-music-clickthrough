export const catalogTitles = [
  {
    id: 'supreme-guidance',
    title: 'SUPREME GUIDANCE',
    writers: 'James Murray',
    publishers: 'Alibi Generator',
    prefix: '—',
    pro: 'PRS',
    status: 'Pending' as const,
    highlighted: true,
  },
  {
    id: 'estv-dunk',
    title: 'ESTV DUNK',
    writers: 'Brian Wayy (75%), Donna L. Ross-Jones (25%)',
    publishers: 'Creative Entertainment Music',
    prefix: 'ESTV',
    pro: 'BMI',
    status: 'Registered' as const,
  },
  {
    id: 'tmc-boom',
    title: 'TMC_SD – BOOM – Vanguard',
    writers: 'Karel Anton Psota',
    publishers: 'Pushy Publishing (50%), Dissona Musika (50%)',
    prefix: 'TMC',
    pro: 'ASCAP',
    status: 'Registered' as const,
  },
  {
    id: 'misdirection',
    title: 'MISDIRECTION',
    writers: 'Nicholas R. Watson',
    publishers: 'Pushy Publishing',
    prefix: '—',
    pro: 'ASCAP',
    status: 'Registered' as const,
  },
  {
    id: 'hbcugo-theme',
    title: 'HBCUGO THEME',
    writers:
      'Brandon M. Green, Anthony D. Conley, Kingsley O. Maduka, Kenzi K. Maduka',
    publishers: 'Allen Media Publishing (admin: Pushy Publishing)',
    prefix: 'AMG',
    pro: 'ASCAP',
    status: 'Registered' as const,
  },
];

export const supremeGuidanceBefore = {
  title: 'SUPREME GUIDANCE',
  alternateTitles: 'None',
  performingArtist: '—',
  prefix: 'Not yet assigned',
  publicDomain: 'No',
  writers: [{ name: 'James Murray', pro: 'PRS', share: '100%' }],
  publishers: [{ name: 'Alibi Generator', pro: 'ASCAP', share: '100%' }],
};

export const supremeGuidanceAfter = {
  title: 'SUPREME GUIDANCE',
  prefix: 'TMC ALIBI',
  alternateTitles: 'None',
  performingArtist: '—',
  publicDomain: 'No',
  dontFileCopyright: true,
  retitledDate: new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }),
  writers: [{ name: 'James Murray', pro: 'PRS', share: '100%' }],
  publishers: [
    { name: 'Alibi Generator', pro: 'ASCAP', share: '50%' },
    { name: 'Creative Entertainment Music', pro: 'BMI', share: '50%' },
  ],
};

export const retitleRulesAfter = [
  {
    field: 'Prefix',
    value: 'TMC ALIBI',
    rule: 'Rule: Alibi-used title → TMC ALIBI prefix',
  },
  {
    field: 'Writers',
    value: 'James Murray (PRS) 100%',
    rule: 'Rule: Alibi titles are exempt from the 75/25 Donna Ross-Jones split',
    unchanged: true,
  },
  {
    field: 'Publishers',
    value: 'Alibi Generator (ASCAP) 50%, Creative Entertainment Music (BMI) 50%',
    rule: "Rule: Alibi 50/50 split — non-US PRO writer (PRS) defaults to TMC's BMI publisher",
  },
  {
    field: 'Flag added',
    value: "DON'T FILE COPYRIGHT",
    rule: 'Rule: retitled songs are auto-flagged to prevent duplicate copyright filing',
  },
];

export const cueSheetHistory = [
  { name: 'CARS.TV – 23022', status: 'Processed' as const },
  {
    name: 'HBCU Basketball – Kentucky State vs Central State',
    status: 'Processed' as const,
  },
];

export const parsedCues = [
  {
    cueTitle: 'ENTERTAIN ME',
    typeOfUse: 'OPEN/CLOSE THEME',
    duration: '1:10',
    matchedTitle: 'ENTERTAIN ME',
    matchStatus: 'matched' as const,
    note: 'Consolidated from 2 rows: Opening Theme + Bumper',
  },
  {
    cueTitle: 'AMG DOOM FORECAST',
    typeOfUse: 'BI',
    duration: '0:14',
    matchedTitle: 'AMG DOOM FORECAST',
    matchStatus: 'matched' as const,
  },
  {
    cueTitle: 'ESTV DUNK',
    typeOfUse: 'BI',
    duration: '3:12',
    matchedTitle: 'ESTV DUNK',
    matchStatus: 'matched' as const,
    note: 'Consolidated from 3 repeated uses',
  },
  {
    cueTitle: 'SUPREME GUIDANCE',
    typeOfUse: 'BI',
    duration: '0:48',
    matchedTitle: 'SUPREME GUIDANCE (TMC ALIBI)',
    matchStatus: 'matched-retitled' as const,
    note: 'Consolidated from 4 repeated uses',
  },
  {
    cueTitle: 'KITCHY KITCHEN FULL 1 MIN',
    typeOfUse: 'BI',
    duration: '1:36',
    matchedTitle: '',
    matchStatus: 'needs-review' as const,
  },
];

export const activityRows = [
  {
    title: 'ENTERTAIN ME',
    production: 'ES.TV (26-001)',
    airDate: '2025-09-08',
    typeOfUse: 'OPEN/CLOSE THEME',
    duration: '1:10',
    incomeReceived: false,
    selectable: false,
  },
  {
    title: 'AMG DOOM FORECAST',
    production: 'ES.TV (26-001)',
    airDate: '2025-09-08',
    typeOfUse: 'BI',
    duration: '0:14',
    incomeReceived: false,
    selectable: false,
  },
  {
    title: 'ESTV DUNK',
    production: 'ES.TV (26-001)',
    airDate: '2025-09-08',
    typeOfUse: 'BI',
    duration: '3:12',
    incomeReceived: false,
    selectable: true,
  },
  {
    title: 'SUPREME GUIDANCE',
    production: 'ES.TV (26-001)',
    airDate: '2025-09-08',
    typeOfUse: 'BI',
    duration: '0:48',
    incomeReceived: false,
    selectable: false,
  },
  {
    title: 'HBCUGO THEME',
    production: 'HBCU Basketball – Kentucky State vs Central State',
    airDate: '2025-08-22',
    typeOfUse: 'OPEN/CLOSE THEME',
    duration: '0:45',
    incomeReceived: true,
    selectable: false,
  },
  {
    title: 'TMC_SD – BOOM – Vanguard',
    production: 'CARS.TV – 23022',
    airDate: '2025-08-15',
    typeOfUse: 'BI',
    duration: '0:22',
    incomeReceived: true,
    selectable: false,
  },
];

export const royaltyCalculation = {
  grossIncome: 301.07,
  subtotal: 301.07,
  copyrightFee: 0.0,
  distribution: 301.07,
  adminFee: -30.11,
  adjustedTotal: 270.96,
  poolShare: 67.74,
  coPublisherA: { name: 'Co-Publisher A', share: 0.6, amount: 40.64 },
  coPublisherB: { name: 'Co-Publisher B', share: 0.4, amount: 27.1 },
};

export const recentActivity = [
  'Weird Earth S4 EP1 cue sheet imported',
  'ESTV DUNK retitled',
  'HBCU Basketball cue sheet processed',
  'Q3 2025 BMI statement draft saved',
];

export const retitleReasons = [
  'Partner library title used in new production',
  'Direct license',
  'Catalog cleanup',
];
