import { company } from '@/data/company';

export function generateSpeakableSchema(pageUrl: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': pageUrl,
    url: pageUrl,
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['.definition-paragraph', '.faq-answer'],
    },
    isPartOf: {
      '@type': 'WebSite',
      '@id': `${company.url}/#website`,
    },
  };
}
