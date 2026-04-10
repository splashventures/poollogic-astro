import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

export default defineConfig({
  site: 'https://poollogicsd.com',
  trailingSlash: 'always',
  output: 'static',
  adapter: vercel(),
  integrations: [sitemap()],
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
