export type MetroSlug = 'san-diego' | 'los-angeles' | 'orange-county' | 'sacramento';

export interface Neighborhood {
  name: string;
  description: string;
}

export interface Coordinates {
  lat: number;
  lng: number;
}

export interface City {
  name: string;
  slug: string;
  metro: MetroSlug;
  state: string;
  zipCodes: string[];
  coordinates: Coordinates;

  /** Full URL path for this city, e.g. /california/san-diego-pool-service/la-jolla-pool-service/ */
  urlPath: string;

  neighborhoods: Neighborhood[];
  landmarks: string[];
  climateNotes: string;
  waterNotes: string;

  metaTitle: string;
  metaDescription: string;

  heroDescription: string;
  introContent: string;

  faqs: { question: string; answer: string }[];

  nearbyCities: string[];
  isPrimary: boolean;
}

export interface Metro {
  name: string;
  slug: MetroSlug;
  state: string;
  phone: { display: string; raw: string };
  coordinates: Coordinates;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
    full: string;
  };
  cities: City[];
}
