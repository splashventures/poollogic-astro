export interface Neighborhood {
  name: string;
  description: string;
}

export interface Coordinates {
  lat: number;
  lng: number;
}

export interface City {
  // Basic info
  name: string;
  slug: string;
  county: 'San Diego';
  state: string;
  zipCodes: string[];

  // Geographic
  coordinates: Coordinates;
  distanceFromHQ: string;

  // Local details
  neighborhoods: Neighborhood[];
  landmarks: string[];

  // Climate/conditions for unique content
  climateNotes: string;
  waterNotes: string;

  // SEO content
  metaTitle: string;
  metaDescription: string;

  // Page content sections
  heroDescription: string;
  introContent: string;
  localExpertiseContent: string;
  climateContent: string;

  // FAQs - unique per city
  faqs: { question: string; answer: string }[];

  // Related cities for internal linking
  nearbyCities: string[];

  // Service priority
  isPrimary: boolean;
}

export type CitySlug = string;
