import { MetadataRoute } from 'next';
import { cities } from '@/data/cities';
import { services } from '@/data/services';
import { posts, topicGroups } from '@/data/posts';
import { getAllComboParams } from '@/data/city-service-combos';

const BASE_URL = 'https://poollogicsd.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/services/`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/commercial-pool-service-san-diego/`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/about/`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/resources/`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/reviews/`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/pool-service-near-me/`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/privacy-policy/`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/terms-of-use/`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/html-sitemap/`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/about/kyle-bowman/`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/pool-service-cost-san-diego/`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/emergency-pool-service-san-diego/`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];

  // City pages - High priority for local SEO
  const cityPages: MetadataRoute.Sitemap = cities.map((city) => ({
    url: `${BASE_URL}/pool-service-${city.slug}/`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: city.isPrimary ? 0.9 : 0.8,
  }));

  // Service pages
  const servicePages: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${BASE_URL}/${service.urlSlug}/`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // Blog posts - prioritize deep content higher
  const blogPages: MetadataRoute.Sitemap = posts.map((post) => {
    const readMinutes = parseInt(post.readTime) || 5;
    const priority = readMinutes >= 10 ? 0.7 : readMinutes >= 5 ? 0.6 : 0.5;
    return {
      url: `${BASE_URL}/resources/${post.slug}/`,
      lastModified: new Date(post.dateModified || post.date),
      changeFrequency: 'monthly' as const,
      priority,
    };
  });

  // Category pages
  const categoryPages: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/resources/category/pool-care-tips/`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/resources/category/local-guides/`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.5,
    },
  ];

  // Topic hub pages
  const topicHubPages: MetadataRoute.Sitemap = topicGroups.map((group) => ({
    url: `${BASE_URL}/resources/topic/${group.slug}/`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  // City+service combo pages
  const comboPages: MetadataRoute.Sitemap = getAllComboParams().map((param) => ({
    url: `${BASE_URL}/${param.slug}/`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [...staticPages, ...cityPages, ...servicePages, ...comboPages, ...blogPages, ...categoryPages, ...topicHubPages];
}
