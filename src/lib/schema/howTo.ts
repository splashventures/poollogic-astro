import { company } from '@/data/company';
import type { Service } from '@/types/service';

interface HowItWorksStep {
  number: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  highlight: string;
}

export function generateHowToSchema(service: Service, steps: HowItWorksStep[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: `How ${service.name} Works`,
    description: service.longDescription,
    estimatedCost: {
      '@type': 'MonetaryAmount',
      currency: 'USD',
      minValue: service.priceRange.min,
      maxValue: service.priceRange.max,
    },
    totalTime: 'PT1H',
    supply: [],
    tool: [],
    step: steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.title,
      text: step.description,
      image: `${company.url}${step.image}`,
    })),
  };
}
