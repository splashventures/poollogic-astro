import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

export default defineConfig({
  site: 'https://cabanapools.com',
  trailingSlash: 'always',
  output: 'static',
  adapter: vercel(),
  integrations: [
    sitemap({
      serialize(item) {
        const url = item.url;
        const path = new URL(url).pathname;

        // Homepage
        if (path === '/') {
          item.priority = 1.0;
          item.changefreq = 'weekly';
        }
        // Service pages
        else if (path.match(/^\/(weekly-pool-cleaning|pool-filter-cleaning|pool-draining-restart|pool-algae-removal|hot-tub-cleaning|pool-acid-washing|pool-heater-repair|pool-pump-repair|pool-filter-repair|pool-automation-repair|pool-light-repair|salt-water-pool-repair|pool-heater-installation|pool-pump-installation|pool-filter-installation|pool-automation-installation|pool-light-replacement)-service\/$/)) {
          item.priority = 0.9;
          item.changefreq = 'monthly';
        }
        // Metro hub city pages
        else if (path.match(/^\/california\/(san-diego|los-angeles|orange-county|sacramento)-pool-service\/$/)) {
          item.priority = 0.9;
          item.changefreq = 'monthly';
        }
        // Sub-city pages
        else if (path.match(/^\/california\/.*-pool-service\//)) {
          item.priority = 0.8;
          item.changefreq = 'monthly';
        }
        // Reviews, commercial, pricing guide
        else if (['/reviews/', '/commercial-pool-service/', '/pool-service-pricing-guide/', '/pool-service-near-me/'].includes(path)) {
          item.priority = 0.7;
          item.changefreq = 'monthly';
        }
        // Blog index
        else if (path === '/resources/') {
          item.priority = 0.6;
          item.changefreq = 'weekly';
        }
        // Blog posts
        else if (path.startsWith('/resources/')) {
          item.priority = 0.6;
          item.changefreq = 'monthly';
        }
        // Legal, utility pages
        else if (['/privacy-policy/', '/terms-of-use/', '/html-sitemap/', '/qb-eula/', '/qb-privacypolicy/'].includes(path)) {
          item.priority = 0.3;
          item.changefreq = 'yearly';
        }
        // Default
        else {
          item.priority = 0.5;
          item.changefreq = 'monthly';
        }

        return item;
      },
    }),
  ],
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp',
      config: {
        quality: 80,
      },
    },
  },
  compressHTML: true,
  vite: {
    plugins: [tailwindcss()],
    build: {
      cssMinify: true,
    },
  },
  redirects: {
    // Preserve old WP paths if any exist
    '/terms-of-service': '/terms-of-use/',
    '/sitemap': '/html-sitemap/',
  },
});
