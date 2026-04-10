import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // === Static page redirects ===
      {
        source: '/commercial-pool-service',
        destination: '/commercial-pool-service-san-diego/',
        permanent: true,
      },
      {
        source: '/terms-of-service',
        destination: '/terms-of-use/',
        permanent: true,
      },
      {
        source: '/sitemap',
        destination: '/html-sitemap/',
        permanent: true,
      },

      // === City page redirects: /{city}-pool-service → /pool-service-{city} ===
      {
        source: '/alpine-pool-service',
        destination: '/pool-service-alpine/',
        permanent: true,
      },
      {
        source: '/bonita-pool-service',
        destination: '/pool-service-bonita/',
        permanent: true,
      },
      {
        source: '/carlsbad-pool-service',
        destination: '/pool-service-carlsbad/',
        permanent: true,
      },
      {
        source: '/chula-vista-pool-service',
        destination: '/pool-service-chula-vista/',
        permanent: true,
      },
      {
        source: '/del-mar-pool-service',
        destination: '/pool-service-del-mar/',
        permanent: true,
      },
      {
        source: '/el-cajon-pool-service',
        destination: '/pool-service-el-cajon/',
        permanent: true,
      },
      {
        source: '/encinitas-pool-service',
        destination: '/pool-service-encinitas/',
        permanent: true,
      },
      {
        source: '/escondido-pool-service',
        destination: '/pool-service-escondido/',
        permanent: true,
      },
      {
        source: '/fallbrook-pool-service',
        destination: '/pool-service-fallbrook/',
        permanent: true,
      },
      {
        source: '/jamul-pool-service',
        destination: '/pool-service-jamul/',
        permanent: true,
      },
      {
        source: '/la-jolla-pool-service',
        destination: '/pool-service-la-jolla/',
        permanent: true,
      },
      {
        source: '/la-mesa-pool-service',
        destination: '/pool-service-la-mesa/',
        permanent: true,
      },
      {
        source: '/lakeside-pool-service',
        destination: '/pool-service-lakeside/',
        permanent: true,
      },
      {
        source: '/national-city-pool-service',
        destination: '/pool-service-national-city/',
        permanent: true,
      },
      {
        source: '/oceanside-pool-service',
        destination: '/pool-service-oceanside/',
        permanent: true,
      },
      {
        source: '/poway-pool-service',
        destination: '/pool-service-poway/',
        permanent: true,
      },
      {
        source: '/ramona-pool-service',
        destination: '/pool-service-ramona/',
        permanent: true,
      },
      {
        source: '/san-diego-pool-service',
        destination: '/pool-service-san-diego/',
        permanent: true,
      },
      {
        source: '/san-marcos-pool-service',
        destination: '/pool-service-san-marcos/',
        permanent: true,
      },
      {
        source: '/santee-pool-service',
        destination: '/pool-service-santee/',
        permanent: true,
      },
      {
        source: '/spring-valley-pool-service',
        destination: '/pool-service-spring-valley/',
        permanent: true,
      },
      {
        source: '/vista-pool-service',
        destination: '/pool-service-vista/',
        permanent: true,
      },

      // === Service page redirects: /services/{slug} → /{urlSlug} ===
      {
        source: '/services/weekly-pool-cleaning',
        destination: '/pool-cleaning-service-san-diego/',
        permanent: true,
      },
      {
        source: '/services/pool-filter-cleaning',
        destination: '/pool-filter-cleaning-service-san-diego/',
        permanent: true,
      },
      {
        source: '/services/pool-drain-restart',
        destination: '/pool-draining-restart-service-san-diego/',
        permanent: true,
      },
      {
        source: '/services/pool-algae-removal',
        destination: '/pool-algae-removal-service-san-diego/',
        permanent: true,
      },
      {
        source: '/services/hot-tub-cleaning',
        destination: '/hot-tub-cleaning-service-san-diego/',
        permanent: true,
      },
      {
        source: '/services/pool-acid-washing',
        destination: '/pool-acid-washing-san-diego/',
        permanent: true,
      },
      {
        source: '/services/pool-heater-repair',
        destination: '/pool-heater-repair-san-diego/',
        permanent: true,
      },
      {
        source: '/services/pool-pump-repair',
        destination: '/pool-pump-repair-san-diego/',
        permanent: true,
      },
      {
        source: '/services/pool-filter-repair',
        destination: '/pool-filter-repair-san-diego/',
        permanent: true,
      },
      {
        source: '/services/pool-light-repair',
        destination: '/pool-light-repair-san-diego/',
        permanent: true,
      },
      {
        source: '/services/pool-automation-repair',
        destination: '/pool-automation-repair-san-diego/',
        permanent: true,
      },
      {
        source: '/services/salt-water-pool-repair',
        destination: '/salt-water-pool-repair-san-diego/',
        permanent: true,
      },
      {
        source: '/services/pool-heater-installation',
        destination: '/pool-heater-installation-san-diego/',
        permanent: true,
      },
      {
        source: '/services/pool-pump-installation',
        destination: '/pool-pump-installation-san-diego/',
        permanent: true,
      },
      {
        source: '/services/pool-filter-installation',
        destination: '/pool-filter-installation-san-diego/',
        permanent: true,
      },
      {
        source: '/services/pool-automation-installation',
        destination: '/pool-automation-installation-san-diego/',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
