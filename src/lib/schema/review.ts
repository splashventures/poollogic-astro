import { company } from '@/data/company';
import type { Testimonial } from '@/types/testimonial';

interface ReviewSchema {
  '@context': string;
  '@type': string;
  itemReviewed: {
    '@type': string;
    '@id': string;
    name: string;
  };
  author: {
    '@type': string;
    name: string;
  };
  reviewRating: {
    '@type': string;
    ratingValue: number;
    bestRating: number;
    worstRating: number;
  };
  reviewBody: string;
  datePublished?: string;
}

/**
 * Generate Review schema for a single testimonial
 */
export function generateReviewSchema(testimonial: Testimonial): ReviewSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'Review',
    itemReviewed: {
      '@type': 'LocalBusiness',
      '@id': `${company.url}/#business`,
      name: company.name,
    },
    author: {
      '@type': 'Person',
      name: testimonial.customerName,
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: testimonial.rating,
      bestRating: 5,
      worstRating: 1,
    },
    reviewBody: testimonial.text,
    datePublished: testimonial.date,
  };
}

interface AggregateRatingSchema {
  '@context': string;
  '@type': string;
  itemReviewed: {
    '@type': string;
    '@id': string;
    name: string;
  };
  ratingValue: number;
  reviewCount: number;
  bestRating: number;
  worstRating: number;
}

/**
 * Generate AggregateRating schema
 */
export function generateAggregateRatingSchema(): AggregateRatingSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'AggregateRating',
    itemReviewed: {
      '@type': 'LocalBusiness',
      '@id': `${company.url}/#business`,
      name: company.name,
    },
    ratingValue: company.rating.value,
    reviewCount: company.rating.count,
    bestRating: 5,
    worstRating: 1,
  };
}
