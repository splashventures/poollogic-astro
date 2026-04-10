import { Metadata } from 'next';
import Link from 'next/link';
import { cities } from '@/data/cities';
import { services, getMaintenanceServices, getRepairServices, getInstallationServices } from '@/data/services';
import { posts } from '@/data/posts';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Sitemap | PoolLogic Pool Service',
  description: 'Navigate all pages on the PoolLogic Pool Service website. Find pool services, city-specific pages, and helpful resources.',
};

export default function SitemapPage() {
  const maintenanceServices = getMaintenanceServices();
  const repairServices = getRepairServices();
  const installationServices = getInstallationServices();

  const sanDiegoCities = cities;

  return (
    <>
      {/* Breadcrumbs */}
      <div className="py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { name: 'Home', url: '/' },
              { name: 'Sitemap', url: '/html-sitemap/' },
            ]}
          />
        </div>
      </div>

      {/* Content */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Sitemap</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Main Pages */}
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                Main Pages
              </h2>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-[#00568c] hover:text-[#00568c]/80">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/services/" className="text-[#00568c] hover:text-[#00568c]/80">
                    All Services
                  </Link>
                </li>
                <li>
                  <Link href="/commercial-pool-service-san-diego/" className="text-[#00568c] hover:text-[#00568c]/80">
                    Commercial Pool Service
                  </Link>
                </li>
                <li>
                  <Link href="/about/" className="text-[#00568c] hover:text-[#00568c]/80">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/resources/" className="text-[#00568c] hover:text-[#00568c]/80">
                    Resources & Tips
                  </Link>
                </li>
                <li>
                  <Link href="/reviews/" className="text-[#00568c] hover:text-[#00568c]/80">
                    Reviews
                  </Link>
                </li>
                <li>
                  <Link href="/pool-service-near-me/" className="text-[#00568c] hover:text-[#00568c]/80">
                    Pool Service Near Me
                  </Link>
                </li>
              </ul>
            </div>

            {/* Maintenance Services */}
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                Maintenance Services
              </h2>
              <ul className="space-y-2">
                {maintenanceServices.map((service) => (
                  <li key={service.slug}>
                    <Link
                      href={`/${service.urlSlug}/`}
                      className="text-[#00568c] hover:text-[#00568c]/80"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Repair Services */}
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                Repair Services
              </h2>
              <ul className="space-y-2">
                {repairServices.map((service) => (
                  <li key={service.slug}>
                    <Link
                      href={`/${service.urlSlug}/`}
                      className="text-[#00568c] hover:text-[#00568c]/80"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Installation Services */}
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                Installation Services
              </h2>
              <ul className="space-y-2">
                {installationServices.map((service) => (
                  <li key={service.slug}>
                    <Link
                      href={`/${service.urlSlug}/`}
                      className="text-[#00568c] hover:text-[#00568c]/80"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* San Diego County */}
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                San Diego County
              </h2>
              <ul className="space-y-2">
                {sanDiegoCities.map((city) => (
                  <li key={city.slug}>
                    <Link
                      href={`/pool-service-${city.slug}/`}
                      className="text-[#00568c] hover:text-[#00568c]/80"
                    >
                      {city.name} Pool Service
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                Legal
              </h2>
              <ul className="space-y-2">
                <li>
                  <Link href="/privacy-policy/" className="text-[#00568c] hover:text-[#00568c]/80">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms-of-use/" className="text-[#00568c] hover:text-[#00568c]/80">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Blog Posts */}
          <div className="mt-12">
            <h2 className="text-lg font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
              Resources & Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-2">
              {posts.map((post) => (
                <div key={post.slug}>
                  <Link
                    href={`/resources/${post.slug}/`}
                    className="text-[#00568c] hover:text-[#00568c]/80 text-sm"
                  >
                    {post.title}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
