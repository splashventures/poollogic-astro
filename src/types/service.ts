export type ServiceCategory = 'maintenance' | 'repair' | 'installation';

export interface PriceRange {
  min: number;
  max: number;
  unit: 'per visit' | 'per service' | 'one-time' | 'starting at';
}

export interface ServiceFeature {
  title: string;
  description: string;
}

export interface Service {
  // Basic info
  name: string;
  slug: string;
  urlSlug: string;
  category: ServiceCategory;

  // Content
  shortDescription: string;
  longDescription: string;
  problemStatement: string;
  solutionStatement: string;

  // Pricing
  priceRange: PriceRange;

  // Features/what's included
  features: ServiceFeature[];
  includes: string[];

  // SEO
  metaTitle: string;
  metaDescription: string;
  keywords: string[];

  // Related
  relatedServices: string[];
}

export type ServiceSlug = string;
