import type { Service } from '@/types/service';
import { company } from '@/data/company';

/**
 * Generate metadata for service pages
 */
export function generateServiceMetadata(service: Service) {
  const title = service.metaTitle;
  const description = service.metaDescription;
  const canonicalUrl = `${company.url}/${service.urlSlug}/`;

  return {
    title,
    description,
    keywords: service.keywords,

    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: company.name,
      locale: 'en_US',
      type: 'website',
      images: [
        {
          url: `${company.url}/images/services/${service.slug}.jpg`,
          width: 1200,
          height: 630,
          alt: `${service.name} - ${company.name}`,
        },
      ],
    },

    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${company.url}/images/services/${service.slug}.jpg`],
    },

    alternates: {
      canonical: canonicalUrl,
    },

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

    authors: [{ name: company.name }],
    category: 'Pool Service',
  };
}
