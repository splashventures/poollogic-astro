// Brand knowledge base: values, milestones, team, and differentiators
// Consolidated from about/index.astro for reuse across pages

export interface TeamMember {
  src: string;
  name: string;
}

export interface Value {
  title: string;
  description: string;
  iconPath?: string;
  iconPaths?: string[];
}

export interface Milestone {
  year: string;
  event: string;
}

export interface Differentiator {
  title: string;
  description: string;
}

export const teamMembers: TeamMember[] = [
  { src: '/images/pool/kyle-bowman.webp', name: 'Kyle B.' },
  { src: '/images/team/jake.webp', name: 'Jake' },
  { src: '/images/team/ron.webp', name: 'Ron' },
  { src: '/images/team/cory.webp', name: 'Cory' },
  { src: '/images/team/david.webp', name: 'David' },
  { src: '/images/team/steve.webp', name: 'Steve' },
  { src: '/images/team/carter.webp', name: 'Carter' },
  { src: '/images/team/averie.webp', name: 'Averie' },
  { src: '/images/team/eric.webp', name: 'Eric' },
  { src: '/images/team/alfred.webp', name: 'Alfred' },
  { src: '/images/team/jeremy.webp', name: 'Jeremy' },
  { src: '/images/team/mikhail.webp', name: 'Mikhail' },
];

export const values: Value[] = [
  {
    title: 'Reliability',
    description: 'We show up when we say we will, every time. Consistent scheduling means you always know when to expect us.',
    iconPath: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
  },
  {
    title: 'Transparency',
    description: 'No hidden fees, no surprise charges. We explain what we do and why, and provide written estimates before any work.',
    iconPaths: ['M15 12a3 3 0 11-6 0 3 3 0 016 0z', 'M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z'],
  },
  {
    title: 'Excellence',
    description: 'We take pride in our work. Every pool we service gets our full attention and best effort, every single visit.',
    iconPath: 'M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z',
  },
  {
    title: 'Community',
    description: 'We live here too. Supporting our neighbors and local businesses is part of who we are as a company.',
    iconPath: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
  },
];

export const milestones: Milestone[] = [
  { year: '2020', event: 'PoolLogic Pool Service founded in San Diego, CA' },
  { year: '2021', event: 'Expanded service across San Diego County' },
  { year: '2022', event: 'Added commercial pool service division' },
  { year: '2023', event: 'Launched online quote system and digital service reports' },
  { year: '2024', event: 'Surpassed 1,000+ satisfied customers countywide' },
  { year: '2025', event: 'Partnered with Cabana to scale operations and reach more San Diego families' },
];

export const whyChooseUs: Differentiator[] = [
  { title: 'Local Knowledge', description: 'We understand San Diego water conditions, climate patterns, and the specific challenges pools face in our area.' },
  { title: 'All-Inclusive Pricing', description: 'No surprise chemical charges. Our service price includes all chemicals needed to maintain your pool.' },
  { title: 'Service Reports', description: 'After every visit, receive a digital report with photos, chemistry readings, and notes about your pool.' },
  { title: 'Consistent Technicians', description: 'The same person services your pool each week, building familiarity with your specific pool and needs.' },
  { title: 'Responsive Service', description: 'When issues arise, we respond quickly. Existing customers get priority scheduling for repairs.' },
];
