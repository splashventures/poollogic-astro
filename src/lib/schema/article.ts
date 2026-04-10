import { company } from '@/data/company';
import type { BlogPost } from '@/types/post';

export function generateArticleSchema(post: BlogPost) {
  const postUrl = `${company.url}/resources/${post.slug}/`;
  const wordCount = post.content
    .join(' ')
    .replace(/<[^>]*>/g, '')
    .split(/\s+/).length;

  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `${postUrl}#article`,
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.dateModified || post.date,
    wordCount,
    inLanguage: 'en-US',
    articleSection: post.categoryName,
    image: {
      '@type': 'ImageObject',
      url: post.image
        ? `${company.url}${post.image}`
        : `${company.url}/images/pool/hero-pool.webp`,
      width: 1200,
      height: 630,
    },
    author: {
      '@type': 'Person',
      '@id': `${company.url}/about/kyle-bowman/#person`,
      name: post.author,
      url: `${company.url}/about/kyle-bowman/`,
      jobTitle: 'CPO-Certified Pool Expert',
      image: `${company.url}/images/pool/kyle-bowman.webp`,
      worksFor: {
        '@type': 'Organization',
        '@id': `${company.url}/#organization`,
        name: company.name,
      },
      knowsAbout: [
        'Pool Maintenance',
        'Water Chemistry',
        'Pool Equipment Repair',
        'Pool Cleaning',
        'San Diego Pool Service',
      ],
    },
    publisher: {
      '@type': 'Organization',
      '@id': `${company.url}/#organization`,
      name: company.name,
      url: company.url,
      logo: {
        '@type': 'ImageObject',
        url: `${company.url}/images/logos/poollogic-logo.png`,
        width: 200,
        height: 96,
      },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: company.phone,
        contactType: 'customer service',
        areaServed: 'San Diego County',
        availableLanguage: 'English',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': postUrl,
    },
    isPartOf: {
      '@type': 'WebSite',
      '@id': `${company.url}/#website`,
      name: company.name,
      url: company.url,
    },
  };
}

