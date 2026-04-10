interface FAQSchema {
  '@context': string;
  '@type': string;
  mainEntity: Array<{
    '@type': string;
    name: string;
    acceptedAnswer: {
      '@type': string;
      text: string;
    };
  }>;
}

/**
 * Generate FAQPage schema from Q&A pairs.
 * Returns null if array is empty (no schema rendered).
 */
export function generateSimpleFAQSchema(
  qaPairs: Array<{ question: string; answer: string }>
): FAQSchema | null {
  if (qaPairs.length === 0) return null;

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: qaPairs.map((qa) => ({
      '@type': 'Question',
      name: qa.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: qa.answer,
      },
    })),
  };
}
