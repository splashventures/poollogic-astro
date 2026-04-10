import { company } from '@/data/company';
import { City } from '@/types/city';
import { cities } from '@/data/cities';

interface LocalBusinessSchema {
  '@context': string;
  '@type': string | string[];
  '@id': string;
  name: string;
  description?: string;
  image: string;
  url: string;
  telephone: string;
  email: string;
  priceRange: string;
  address: {
    '@type': string;
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  geo: {
    '@type': string;
    latitude: number;
    longitude: number;
  };
  areaServed: Array<{
    '@type': string;
    name: string;
  }>;
  openingHoursSpecification: Array<{
    '@type': string;
    dayOfWeek: string;
    opens: string;
    closes: string;
  }>;
  aggregateRating: {
    '@type': string;
    ratingValue: number;
    reviewCount: number;
    bestRating: number;
    worstRating: number;
  };
  sameAs: string[];
  hasOfferCatalog?: {
    '@type': string;
    name: string;
    itemListElement: Array<{
      '@type': string;
      itemOffered: {
        '@type': string;
        name: string;
      };
    }>;
  };
  knowsAbout?: string[];
}

/**
 * Generate LocalBusiness schema for the main site
 * Used on homepage and general pages
 * Enhanced for maximum local SEO impact
 */
export function generateLocalBusinessSchema(): LocalBusinessSchema {
  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'HomeAndConstructionBusiness'],
    '@id': `${company.url}/#business`,
    name: company.name,
    description: `Professional pool service company serving San Diego County since 2020. Weekly pool cleaning, maintenance, repair, and installation services for greater San Diego. ${company.rating.count}+ 5-star reviews. All chemicals included.`,
    image: `${company.url}/images/logos/poollogic-logo.png`,
    url: company.url,
    telephone: company.phone,
    email: company.email,
    priceRange: company.priceRange,
    address: {
      '@type': 'PostalAddress',
      streetAddress: company.address.street,
      addressLocality: company.address.city,
      addressRegion: company.address.state,
      postalCode: company.address.zip,
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: company.coordinates.lat,
      longitude: company.coordinates.lng,
    },
    areaServed: cities.map((city) => ({
      '@type': 'City',
      name: `${city.name}, ${city.state}`,
    })),
    openingHoursSpecification: company.openingHoursSpecification.map((hours) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: hours.dayOfWeek,
      opens: hours.opens,
      closes: hours.closes,
    })),
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: company.rating.value,
      reviewCount: company.rating.count,
      bestRating: 5,
      worstRating: 1,
    },
    sameAs: [
      company.social.facebook,
      company.social.instagram,
      company.social.yelp,
      company.social.google,
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Pool Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Weekly Pool Cleaning',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Pool Filter Cleaning',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Pool Heater Repair',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Pool Pump Repair',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Pool Equipment Installation',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Pool Algae Removal',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Commercial Pool Service',
          },
        },
      ],
    },
    knowsAbout: [
      'Pool cleaning',
      'Pool maintenance',
      'Pool repair',
      'Pool equipment installation',
      'Pool chemistry',
      'Pool filter service',
      'Pool pump service',
      'Pool heater service',
      'Salt water pool maintenance',
      'Hot tub maintenance',
      'Commercial pool service',
      'Residential pool service',
    ],
  };
}

/**
 * Generate LocalBusiness schema for a specific city page
 * Includes city-specific location and service area info
 * Enhanced for maximum local SEO impact
 */
export function generateCityLocalBusinessSchema(city: City): LocalBusinessSchema {
  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'HomeAndConstructionBusiness'],
    '@id': `${company.url}/pool-service-${city.slug}/#business`,
    name: company.name,
    description: `Professional pool service in ${city.name}, ${city.state}. Weekly pool cleaning, maintenance, repair, and installation services. Serving ${city.name} and surrounding ${city.county} County neighborhoods. ${company.rating.count}+ 5-star reviews. All chemicals included.`,
    image: `${company.url}/images/logos/poollogic-logo.png`,
    url: `${company.url}/pool-service-${city.slug}/`,
    telephone: company.phone,
    email: company.email,
    priceRange: company.priceRange,
    address: {
      '@type': 'PostalAddress',
      streetAddress: company.address.street,
      addressLocality: company.address.city,
      addressRegion: company.address.state,
      postalCode: company.address.zip,
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: city.coordinates.lat,
      longitude: city.coordinates.lng,
    },
    areaServed: [
      {
        '@type': 'City',
        name: `${city.name}, ${city.state}`,
      },
      ...city.neighborhoods.map((n) => ({
        '@type': 'City',
        name: `${n.name}, ${city.name}`,
      })),
    ],
    openingHoursSpecification: company.openingHoursSpecification.map((hours) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: hours.dayOfWeek,
      opens: hours.opens,
      closes: hours.closes,
    })),
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: company.rating.value,
      reviewCount: company.rating.count,
      bestRating: 5,
      worstRating: 1,
    },
    sameAs: [
      company.social.facebook,
      company.social.instagram,
      company.social.yelp,
      company.social.google,
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `Pool Services in ${city.name}`,
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: `Weekly Pool Cleaning in ${city.name}`,
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: `Pool Maintenance in ${city.name}`,
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: `Pool Repair in ${city.name}`,
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: `Pool Equipment Installation in ${city.name}`,
          },
        },
      ],
    },
    knowsAbout: [
      `Pool service ${city.name}`,
      `Pool cleaning ${city.name}`,
      `Pool maintenance ${city.name}`,
      `Pool repair ${city.name}`,
      'Pool chemistry',
      'Pool filter service',
      'Pool pump service',
      'Pool heater service',
      'Salt water pool maintenance',
      'Residential pool service',
    ],
  };
}

/**
 * Render schema as JSON-LD script tag content
 */
export function schemaToJsonLd(schema: object): string {
  return JSON.stringify(schema, null, 0);
}
