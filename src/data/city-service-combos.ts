import type { City } from '@/types/city';
import type { Service } from '@/types/service';

/**
 * City+Service combo pages target "[service] [city]" searches.
 * Top 6 non-SD cities x 5 highest-demand services = 30 pages.
 */

export const comboCities = [
  'chula-vista',
  'carlsbad',
  'oceanside',
  'escondido',
  'el-cajon',
  'la-jolla',
] as const;

export const comboServiceSlugs = [
  'weekly-pool-cleaning',
  'pool-heater-repair',
  'pool-pump-repair',
  'pool-filter-cleaning',
  'pool-algae-removal',
] as const;

/**
 * Generate combo URL slug from service urlSlug by replacing '-san-diego' with city slug.
 */
export function getComboUrlSlug(service: Service, city: City): string {
  return service.urlSlug.replace(/-san-diego$/, `-${city.slug}`);
}

/**
 * Try to parse a URL slug as a city+service combo.
 * Returns { service slug, city slug } if match found, null otherwise.
 */
export function parseComboSlug(slug: string): { serviceSlug: string; citySlug: string } | null {
  for (const citySlug of comboCities) {
    if (slug.endsWith(`-${citySlug}`)) {
      const serviceUrlBase = slug.slice(0, -(citySlug.length + 1));
      const fullServiceUrl = `${serviceUrlBase}-san-diego`;

      for (const svcSlug of comboServiceSlugs) {
        // We need to check if the serviceUrlBase matches a known service
        // by reconstructing the san-diego URL
        if (isKnownServiceUrl(fullServiceUrl, svcSlug)) {
          return { serviceSlug: svcSlug, citySlug };
        }
      }
    }
  }
  return null;
}

// Map service slugs to their urlSlug base (without -san-diego)
const serviceUrlMap: Record<string, string> = {
  'weekly-pool-cleaning': 'pool-cleaning-service-san-diego',
  'pool-heater-repair': 'pool-heater-repair-san-diego',
  'pool-pump-repair': 'pool-pump-repair-san-diego',
  'pool-filter-cleaning': 'pool-filter-cleaning-service-san-diego',
  'pool-algae-removal': 'pool-algae-removal-service-san-diego',
};

function isKnownServiceUrl(fullUrl: string, serviceSlug: string): boolean {
  return serviceUrlMap[serviceSlug] === fullUrl;
}

export function getServiceUrlSlugFromComboSlug(serviceSlug: string): string {
  return serviceUrlMap[serviceSlug] || '';
}

/**
 * Generate all combo static params.
 */
export function getAllComboParams(): { slug: string }[] {
  const params: { slug: string }[] = [];
  for (const citySlug of comboCities) {
    for (const serviceSlug of comboServiceSlugs) {
      const fullServiceUrl = serviceUrlMap[serviceSlug];
      if (fullServiceUrl) {
        const comboSlug = fullServiceUrl.replace(/-san-diego$/, `-${citySlug}`);
        params.push({ slug: comboSlug });
      }
    }
  }
  return params;
}

/**
 * Generate unique intro content for a city+service combo.
 */
export function getComboIntro(service: Service, city: City): string {
  const intros: Record<string, (city: City) => string> = {
    'weekly-pool-cleaning': (c) =>
      `${c.name} pool owners know that consistent weekly cleaning is the key to a healthy, beautiful pool. With San Diego County's year-round swimming weather, pools in ${c.name} need regular attention to stay crystal clear. Our CPO-certified technicians provide reliable weekly pool cleaning service throughout ${c.name}, including neighborhoods like ${c.neighborhoods.slice(0, 3).map(n => n.name).join(', ')}${c.neighborhoods.length > 3 ? ', and more' : ''}.`,
    'pool-heater-repair': (c) =>
      `When your pool heater stops working in ${c.name}, you need a fast, reliable repair. Whether it's a gas heater, heat pump, or electric heater, our experienced technicians diagnose and fix pool heater problems throughout ${c.name} and the surrounding area. We service all major brands and most repairs are completed in a single visit.`,
    'pool-pump-repair': (c) =>
      `A failing pool pump means poor circulation, cloudy water, and potential damage to your ${c.name} pool. Our technicians specialize in diagnosing and repairing all types of pool pumps — from motor replacements and seal repairs to impeller and capacitor issues. We provide fast, professional pump repair service throughout ${c.name}.`,
    'pool-filter-cleaning': (c) =>
      `Regular filter cleaning is essential for maintaining clear water in your ${c.name} pool. Over time, oils, minerals, and debris clog your filter media, reducing flow and putting extra strain on your pump. Our professional filter cleaning service in ${c.name} includes complete disassembly, chemical soak, pressure wash, and inspection of all components.`,
    'pool-algae-removal': (c) =>
      `Green pool in ${c.name}? Don't worry — our algae removal specialists can restore your pool to crystal-clear condition, typically within 3-5 days. ${c.name}'s warm temperatures and abundant sunshine create ideal conditions for algae growth, especially during summer months. We identify the algae type, apply targeted treatment, and follow up until your pool is completely clear.`,
  };

  const fn = intros[service.slug];
  return fn ? fn(city) : `Professional ${service.name.toLowerCase()} in ${city.name}, CA. Our certified technicians provide reliable, high-quality service throughout ${city.name} and the surrounding San Diego County area.`;
}

/**
 * Generate unique FAQs for a city+service combo.
 */
export function getComboFAQs(service: Service, city: City): { question: string; answer: string }[] {
  return [
    {
      question: `How much does ${service.name.toLowerCase()} cost in ${city.name}?`,
      answer: `${service.name} costs in ${city.name} vary depending on your pool size, equipment condition, and specific needs. Contact us for a free, no-obligation quote — we provide detailed pricing with no hidden fees.`,
    },
    {
      question: `How quickly can you provide ${service.name.toLowerCase()} in ${city.name}?`,
      answer: `We typically schedule ${service.name.toLowerCase()} in ${city.name} within 1-3 business days. For urgent situations, same-day or next-day service may be available. Call us at (619) 913-9335 for immediate scheduling.`,
    },
    {
      question: `Do you serve all neighborhoods in ${city.name}?`,
      answer: `Yes, we provide ${service.name.toLowerCase()} throughout all of ${city.name}, including ${city.neighborhoods.slice(0, 4).map(n => n.name).join(', ')}${city.neighborhoods.length > 4 ? ', and all surrounding areas' : ''}. We also serve nearby cities in San Diego County.`,
    },
    {
      question: `Why choose PoolLogic for ${service.name.toLowerCase()} in ${city.name}?`,
      answer: `With ${city.distanceFromHQ} from our headquarters, we know ${city.name} pools well. Our team has ${500}+ 5-star Google reviews, CPO-certified technicians, and over 6 years serving San Diego County. We're licensed, bonded, and insured.`,
    },
    {
      question: `Can I get a free ${service.name.toLowerCase()} quote for my ${city.name} pool?`,
      answer: `Absolutely. Request a free quote online or call (619) 913-9335. We'll discuss your ${city.name} pool's specific needs and provide a custom estimate within 24 hours.`,
    },
  ];
}
