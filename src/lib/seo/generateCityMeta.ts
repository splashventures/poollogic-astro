import type { City } from '@/types/city';
import { company } from '@/data/company';

/**
 * Generate SEO-optimized metadata for city pages
 *
 * Local SEO Best Practices Applied:
 * - Primary keyword in first 50% of title
 * - Title under 60 characters
 * - Meta description 150-160 characters
 * - Phone number in description for click-to-call
 * - Strong CTA in description
 * - Geo-modifier (CA) included
 * - Power words: #1, Trusted, Expert, Local
 */
export function generateCityMetadata(city: City) {
  // Title Formula: "[City] Pool Service | [Trust Signal] | Brand"
  // Under 60 chars, primary keyword first
  const title = `${city.name} Pool Service | #1 Rated Pool Cleaning | PoolLogic`;

  // Description: 150-160 chars, keyword + CTA + phone
  // Formula: "Looking for [service] in [city]? [Benefit]. [Trust signal]. Call [phone]!"
  const description = `${city.name} pool service & cleaning by CPO-certified technicians. Weekly maintenance, all chemicals included. ${company.rating.count}+ 5-star reviews. Call ${company.phone}!`;

  // Canonical URL with trailing slash
  const canonicalUrl = `${company.url}/pool-service-${city.slug}/`;

  // Comprehensive keywords for this city
  const keywords = [
    // Primary intent keywords
    `pool service ${city.name}`,
    `${city.name} pool service`,
    `pool cleaning ${city.name}`,
    `${city.name} pool cleaning`,
    // Location-specific variations
    `pool service ${city.name} CA`,
    `pool service ${city.name} California`,
    `pool maintenance ${city.name}`,
    `${city.name} pool maintenance`,
    // Near me intent (optimized for local pack)
    `pool service near me ${city.name}`,
    `pool cleaning near me`,
    // Service combinations
    `pool company ${city.name}`,
    `swimming pool service ${city.name}`,
    `weekly pool service ${city.name}`,
    `residential pool service ${city.name}`,
    // Long-tail
    `best pool service ${city.name}`,
    `affordable pool cleaning ${city.name}`,
    `pool service ${city.name} ${city.county} County`,
  ];

  return {
    title,
    description,
    keywords: keywords,

    // Open Graph for social sharing
    openGraph: {
      title: `${city.name} Pool Service & Cleaning | PoolLogic Pool Service`,
      description: `Professional pool service in ${city.name}, CA. Weekly cleaning, repairs & maintenance. Trusted by ${company.rating.count}+ families. Free quotes!`,
      url: canonicalUrl,
      siteName: company.name,
      locale: 'en_US',
      type: 'website',
      images: [
        {
          url: `${company.url}/images/og/${city.slug}-pool-service.jpg`,
          width: 1200,
          height: 630,
          alt: `Pool service in ${city.name}, California - PoolLogic Pool Service`,
        },
      ],
    },

    // Twitter Card
    twitter: {
      card: 'summary_large_image',
      title: `${city.name} Pool Service | PoolLogic Pool Service`,
      description: `Professional pool cleaning in ${city.name}, CA. ${company.rating.count}+ 5-star reviews. Call ${company.phone}!`,
      images: [`${company.url}/images/og/${city.slug}-pool-service.jpg`],
    },

    // Canonical URL
    alternates: {
      canonical: canonicalUrl,
    },

    // Robots directives
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },

    // Additional metadata
    authors: [{ name: company.name }],
    category: 'Pool Service',

    // Geographic metadata
    other: {
      'geo.region': 'US-CA',
      'geo.placename': city.name,
      'geo.position': `${city.coordinates.lat};${city.coordinates.lng}`,
      'ICBM': `${city.coordinates.lat}, ${city.coordinates.lng}`,
    },
  };
}

/**
 * Generate optimized page title for H1 tag
 * This should match the primary search intent exactly
 */
export function generateCityH1(city: City): string {
  return `${city.name} Pool Service & Cleaning`;
}

/**
 * Generate secondary headline for hero section
 */
export function generateCitySubheadline(city: City): string {
  return `Professional pool maintenance for ${city.name}, California homeowners`;
}
