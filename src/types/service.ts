export type ServiceCategory = 'maintenance' | 'repair' | 'installation';

export interface PriceRange {
  min: number;
  max: number;
  unit: string;
}

export interface ServiceFeature {
  title: string;
  description: string;
}

export interface Service {
  name: string;
  slug: string;
  urlSlug: string;
  category: ServiceCategory;

  shortDescription: string;
  longDescription: string;

  features: ServiceFeature[];
  includes: string[];

  metaTitle: string;
  metaDescription: string;
  keywords: string[];

  relatedServices: string[];
}
