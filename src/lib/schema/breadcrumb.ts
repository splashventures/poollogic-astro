import { company } from '@/data/company';

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbSchema {
  '@context': string;
  '@type': string;
  itemListElement: Array<{
    '@type': string;
    position: number;
    name: string;
    item: string;
  }>;
}

/**
 * Generate BreadcrumbList schema
 */
export function generateBreadcrumbSchema(items: BreadcrumbItem[]): BreadcrumbSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${company.url}${item.url}`,
    })),
  };
}

/**
 * Generate breadcrumb items for city pages
 */
export function generateCityBreadcrumbs(cityName: string, citySlug: string): BreadcrumbItem[] {
  return [
    { name: 'Home', url: '/' },
    { name: `${cityName} Pool Service`, url: `/pool-service-${citySlug}/` },
  ];
}

/**
 * Generate breadcrumb items for service pages
 */
export function generateServiceBreadcrumbs(serviceName: string, serviceSlug: string): BreadcrumbItem[] {
  return [
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services/' },
    { name: serviceName, url: `/${serviceSlug}/` },
  ];
}

/**
 * Generate breadcrumb items for general pages
 */
export function generatePageBreadcrumbs(pageName: string, pageUrl: string): BreadcrumbItem[] {
  return [
    { name: 'Home', url: '/' },
    { name: pageName, url: pageUrl },
  ];
}
