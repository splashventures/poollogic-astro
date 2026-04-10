import { company } from '@/data/company';
import { Service } from '@/types/service';
import { cities } from '@/data/cities';

interface ServiceSchema {
  '@context': string;
  '@type': string;
  name: string;
  serviceType: string;
  provider: {
    '@type': string | string[];
    '@id': string;
    name: string;
    telephone: string;
    address: {
      '@type': string;
      addressLocality: string;
      addressRegion: string;
      addressCountry: string;
    };
  };
  areaServed: Array<{
    '@type': string;
    name: string;
  }>;
  description: string;
  url: string;
  offers: {
    '@type': string;
    priceRange: string;
    priceCurrency: string;
    availability: string;
    areaServed: string;
  };
  category: string;
  serviceOutput: string;
  termsOfService: string;
  aggregateRating?: {
    '@type': string;
    ratingValue: number;
    reviewCount: number;
    bestRating: number;
    worstRating: number;
  };
}

/**
 * Generate Service schema for a service page
 * Enhanced for maximum local SEO impact
 */
export function generateServiceSchema(service: Service): ServiceSchema {
  const priceRange = service.priceRange.unit === 'starting at'
    ? `From $${service.priceRange.min}`
    : `$${service.priceRange.min} - $${service.priceRange.max}`;

  const categoryMap: Record<string, string> = {
    maintenance: 'Pool Maintenance Service',
    repair: 'Pool Repair Service',
    installation: 'Pool Equipment Installation',
  };

  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${service.name} - San Diego Pool Service`,
    serviceType: service.name,
    provider: {
      '@type': ['LocalBusiness', 'HomeAndConstructionBusiness'],
      '@id': `${company.url}/#business`,
      name: company.name,
      telephone: company.phone,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'San Diego',
        addressRegion: 'CA',
        addressCountry: 'US',
      },
    },
    areaServed: cities.map((city) => ({
      '@type': 'City',
      name: `${city.name}, ${city.state}`,
    })),
    description: `${service.name} in San Diego. ${service.longDescription} Serving San Diego, Chula Vista, Carlsbad, and 20+ cities in San Diego County.`,
    url: `${company.url}/${service.urlSlug}/`,
    offers: {
      '@type': 'Offer',
      priceRange: priceRange,
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      areaServed: 'San Diego County, California',
    },
    category: categoryMap[service.category] || 'Pool Service',
    serviceOutput: 'Professional pool maintenance and care',
    termsOfService: `${company.url}/terms-of-use/`,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: company.rating.value,
      reviewCount: company.rating.count,
      bestRating: 5,
      worstRating: 1,
    },
  } as ServiceSchema;
}

interface OfferCatalogSchema {
  '@context': string;
  '@type': string;
  name: string;
  description: string;
  provider: {
    '@type': string;
    '@id': string;
    name: string;
  };
  itemListElement: Array<{
    '@type': string;
    name: string;
    description: string;
    url: string;
  }>;
}

/**
 * Generate OfferCatalog schema for services hub page
 * Enhanced for maximum local SEO impact
 */
export function generateOfferCatalogSchema(services: Service[]): OfferCatalogSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'OfferCatalog',
    name: 'San Diego Pool Services - PoolLogic Pool Service',
    description: 'Professional pool cleaning, maintenance, repair, and equipment installation services for San Diego County. Serving San Diego, Chula Vista, Carlsbad, Oceanside, and 20+ San Diego County cities. Weekly pool service with all chemicals included.',
    provider: {
      '@type': 'LocalBusiness',
      '@id': `${company.url}/#business`,
      name: company.name,
    },
    itemListElement: services.map((service) => ({
      '@type': 'Offer',
      name: `${service.name} - San Diego`,
      description: `${service.shortDescription} Available throughout San Diego County.`,
      url: `${company.url}/${service.urlSlug}/`,
    })),
  };
}
