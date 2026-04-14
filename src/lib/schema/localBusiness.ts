import { company } from '@/data/company';
import type { City } from '@/types/city';
import { metros } from '@/data/cities';

export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'HomeAndConstructionBusiness'],
    '@id': `${company.url}/#business`,
    name: company.name,
    description: `Professional pool service company serving California since 2020. Weekly pool cleaning, maintenance, repair, and installation services across San Diego, Los Angeles, Orange County & Sacramento. ${company.rating.count}+ 5-star reviews.`,
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
    areaServed: metros.map((metro) => ({
      '@type': 'GeoShape',
      name: `${metro.name} Service Area`,
      polygon: metro.cities
        .map((c) => `${c.coordinates.lat},${c.coordinates.lng}`)
        .join(' '),
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
        'Weekly Pool Cleaning',
        'Pool Filter Cleaning',
        'Pool Heater Repair',
        'Pool Pump Repair',
        'Pool Equipment Installation',
        'Pool Algae Removal',
        'Commercial Pool Service',
      ].map((name) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name },
      })),
    },
    knowsAbout: [
      'Pool cleaning', 'Pool maintenance', 'Pool repair',
      'Pool equipment installation', 'Pool chemistry',
      'Pool filter service', 'Pool pump service', 'Pool heater service',
      'Salt water pool maintenance', 'Hot tub maintenance',
      'Commercial pool service', 'Residential pool service',
    ],
  };
}

export function generateCityLocalBusinessSchema(city: City) {
  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'HomeAndConstructionBusiness'],
    '@id': `${company.url}${city.urlPath}#business`,
    name: company.name,
    description: `Professional pool service in ${city.name}, CA. Weekly pool cleaning, maintenance, repair, and installation services. ${company.rating.count}+ 5-star reviews.`,
    url: `${company.url}${city.urlPath}`,
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
      { '@type': 'City', name: `${city.name}, CA` },
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
  };
}
