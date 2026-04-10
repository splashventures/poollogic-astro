// Section ordering as data: defines which sections appear on each page type and in what order.
// Reordering sections is a data change, not a template change.

export type SectionId =
  // Shared
  | 'breadcrumbs'
  | 'hero'
  | 'cta'
  // Homepage
  | 'trustStats'
  | 'introduction'
  | 'painPoints'
  | 'howItWorks'
  | 'comparison'
  | 'pricingPreview'
  | 'testimonials'
  | 'guarantee'
  | 'serviceAreas'
  | 'faq'
  // About
  | 'ourStory'
  | 'values'
  | 'timeline'
  | 'whyChooseUs'
  | 'serviceAreaLinks'
  // Service pages
  | 'problemSolution'
  | 'features'
  | 'serviceSpecs'
  | 'relatedServices'
  | 'relatedPosts'
  // City pages
  | 'serviceOverview'
  | 'neighborhoods'
  | 'localConsiderations'
  | 'serviceMatrix'
  | 'definitionBlock'
  | 'quantifiedStats';

export interface SectionConfig {
  id: SectionId;
  /** Optional: only render this section if the page data supports it */
  conditional?: boolean;
}

export const homepageLayout: SectionConfig[] = [
  { id: 'hero' },
  { id: 'trustStats' },
  { id: 'introduction' },
  { id: 'painPoints' },
  { id: 'howItWorks' },
  { id: 'comparison' },
  { id: 'pricingPreview' },
  { id: 'testimonials' },
  { id: 'guarantee' },
  { id: 'serviceAreas' },
  { id: 'faq' },
  { id: 'cta' },
];

export const aboutLayout: SectionConfig[] = [
  { id: 'breadcrumbs' },
  { id: 'hero' },
  { id: 'ourStory' },
  { id: 'values' },
  { id: 'timeline' },
  { id: 'whyChooseUs' },
  { id: 'serviceAreaLinks' },
  { id: 'cta' },
];

export const servicePageLayout: SectionConfig[] = [
  { id: 'breadcrumbs' },
  { id: 'hero' },
  { id: 'problemSolution' },
  { id: 'features' },
  { id: 'howItWorks' },
  { id: 'guarantee' },
  { id: 'serviceSpecs' },
  { id: 'faq' },
  { id: 'relatedServices' },
  { id: 'trustStats' },
  { id: 'cta' },
  { id: 'relatedPosts', conditional: true },
];

export const cityPageLayout: SectionConfig[] = [
  { id: 'breadcrumbs' },
  { id: 'hero' },
  { id: 'definitionBlock' },
  { id: 'quantifiedStats' },
  { id: 'serviceOverview' },
  { id: 'neighborhoods', conditional: true },
  { id: 'localConsiderations', conditional: true },
  { id: 'howItWorks' },
  { id: 'serviceMatrix' },
  { id: 'testimonials' },
  { id: 'faq' },
  { id: 'cta' },
];

/** All page layouts indexed by page type */
export const pageLayouts = {
  homepage: homepageLayout,
  about: aboutLayout,
  service: servicePageLayout,
  city: cityPageLayout,
} as const;

export type PageType = keyof typeof pageLayouts;
