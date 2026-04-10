import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

export default defineConfig({
  site: 'https://poollogicsd.com',
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
        else if (path.match(/^\/(pool-|hot-tub-).+-san-diego\/$/)) {
          item.priority = 0.9;
          item.changefreq = 'monthly';
        }
        // Services overview
        else if (path === '/services/') {
          item.priority = 0.9;
          item.changefreq = 'monthly';
        }
        // City pages
        else if (path.match(/^\/pool-service-[a-z-]+\/$/)) {
          item.priority = 0.8;
          item.changefreq = 'monthly';
        }
        // About, reviews, commercial
        else if (['/about/', '/reviews/', '/commercial-pool-service-san-diego/'].includes(path)) {
          item.priority = 0.7;
          item.changefreq = 'monthly';
        }
        // Blog index, Kyle Bowman bio
        else if (['/resources/', '/about/kyle-bowman/'].includes(path)) {
          item.priority = 0.6;
          item.changefreq = 'weekly';
        }
        // Blog posts, categories, topics
        else if (path.startsWith('/resources/')) {
          item.priority = 0.6;
          item.changefreq = 'monthly';
        }
        // City-service combo pages
        else if (path.match(/^\/.+-pool-.+-[a-z-]+\/$/)) {
          item.priority = 0.5;
          item.changefreq = 'monthly';
        }
        // Legal, utility pages
        else if (['/privacy-policy/', '/terms-of-use/', '/html-sitemap/'].includes(path)) {
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
    // Static page redirects
    '/commercial-pool-service': '/commercial-pool-service-san-diego/',
    '/terms-of-service': '/terms-of-use/',
    '/sitemap': '/html-sitemap/',

    // City page redirects: /{city}-pool-service -> /pool-service-{city}/
    '/alpine-pool-service': '/pool-service-alpine/',
    '/bonita-pool-service': '/pool-service-bonita/',
    '/carlsbad-pool-service': '/pool-service-carlsbad/',
    '/chula-vista-pool-service': '/pool-service-chula-vista/',
    '/del-mar-pool-service': '/pool-service-del-mar/',
    '/el-cajon-pool-service': '/pool-service-el-cajon/',
    '/encinitas-pool-service': '/pool-service-encinitas/',
    '/escondido-pool-service': '/pool-service-escondido/',
    '/fallbrook-pool-service': '/pool-service-fallbrook/',
    '/jamul-pool-service': '/pool-service-jamul/',
    '/la-jolla-pool-service': '/pool-service-la-jolla/',
    '/la-mesa-pool-service': '/pool-service-la-mesa/',
    '/lakeside-pool-service': '/pool-service-lakeside/',
    '/national-city-pool-service': '/pool-service-national-city/',
    '/oceanside-pool-service': '/pool-service-oceanside/',
    '/poway-pool-service': '/pool-service-poway/',
    '/ramona-pool-service': '/pool-service-ramona/',
    '/san-diego-pool-service': '/pool-service-san-diego/',
    '/san-marcos-pool-service': '/pool-service-san-marcos/',
    '/santee-pool-service': '/pool-service-santee/',
    '/spring-valley-pool-service': '/pool-service-spring-valley/',
    '/vista-pool-service': '/pool-service-vista/',

    // Service page redirects: /services/{slug} -> /{urlSlug}/
    '/services/weekly-pool-cleaning': '/pool-cleaning-service-san-diego/',
    '/services/pool-filter-cleaning': '/pool-filter-cleaning-service-san-diego/',
    '/services/pool-drain-restart': '/pool-draining-restart-service-san-diego/',
    '/services/pool-algae-removal': '/pool-algae-removal-service-san-diego/',
    '/services/hot-tub-cleaning': '/hot-tub-cleaning-service-san-diego/',
    '/services/pool-acid-washing': '/pool-acid-washing-san-diego/',
    '/services/pool-heater-repair': '/pool-heater-repair-san-diego/',
    '/services/pool-pump-repair': '/pool-pump-repair-san-diego/',
    '/services/pool-filter-repair': '/pool-filter-repair-san-diego/',
    '/services/pool-light-repair': '/pool-light-repair-san-diego/',
    '/services/pool-automation-repair': '/pool-automation-repair-san-diego/',
    '/services/salt-water-pool-repair': '/salt-water-pool-repair-san-diego/',
    '/services/pool-heater-installation': '/pool-heater-installation-san-diego/',
    '/services/pool-pump-installation': '/pool-pump-installation-san-diego/',
    '/services/pool-filter-installation': '/pool-filter-installation-san-diego/',
    '/services/pool-automation-installation': '/pool-automation-installation-san-diego/',
  },
});
