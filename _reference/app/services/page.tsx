import { Metadata } from 'next';
import Link from 'next/link';
import { services, getMaintenanceServices, getRepairServices, getInstallationServices } from '@/data/services';
import { company } from '@/data/company';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { Button } from '@/components/ui/Button';
import { TrustStats } from '@/components/ui/SocialProofBar';
import { GuaranteeSection } from '@/components/ui/Guarantee';
import { generateOfferCatalogSchema } from '@/lib/schema/service';

export const metadata: Metadata = {
  title: 'Pool Services | Cleaning, Maintenance & Repairs | PoolLogic Pool Service',
  description: `Complete pool services in San Diego: weekly cleaning, maintenance, repairs & equipment installation. ${company.rating.count}+ happy customers. Call ${company.phone} for a free quote.`,
  openGraph: {
    title: 'Pool Services | Cleaning, Maintenance & Repairs | PoolLogic Pool Service',
    description: `Complete pool services in San Diego: weekly cleaning, maintenance, repairs & equipment installation. ${company.rating.count}+ happy customers.`,
    type: 'website',
    url: 'https://poollogicsd.com/services/',
  },
};

export default function ServicesPage() {
  const maintenanceServices = getMaintenanceServices();
  const repairServices = getRepairServices();
  const installationServices = getInstallationServices();
  const offerCatalogSchema = generateOfferCatalogSchema(services);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(offerCatalogSchema) }}
      />

      {/* Breadcrumbs */}
      <div className="py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { name: 'Home', url: '/' },
              { name: 'Services', url: '/services/' },
            ]}
          />
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#88d2c7]/10 via-white to-white" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Pool Services
              <span className="text-[#00568c]"> Done Right</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 mb-8 leading-relaxed">
              From weekly cleaning to complex repairs, we offer complete pool care solutions
              for residential and commercial properties across San Diego County.
            </p>

            {/* Trust signals */}
            <div className="flex flex-wrap gap-x-6 gap-y-3 mb-8 text-gray-600">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="font-medium">{company.rating.value}/5</span>
                <span className="text-gray-500">({company.rating.count}+ reviews)</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button href={company.quoteUrl} external size="lg">
                Get Your Free Quote
              </Button>
              <Button href={`tel:${company.phoneRaw}`} variant="outline" size="lg">
                <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                {company.phone}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 border-t border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <TrustStats />
        </div>
      </section>

      {/* Service Categories Quick Jump */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a href="#maintenance" className="group bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg hover:border-[#88d2c7] transition-all">
              <div className="w-12 h-12 bg-[#88d2c7]/20 rounded-xl flex items-center justify-center text-[#00568c] mb-4 group-hover:scale-110 transition-transform">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Cleaning & Maintenance</h3>
              <p className="text-gray-600 text-sm">Regular care to keep your pool sparkling clean</p>
            </a>
            <a href="#repairs" className="group bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg hover:border-emerald-300 transition-all">
              <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600 mb-4 group-hover:scale-110 transition-transform">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Repairs</h3>
              <p className="text-gray-600 text-sm">Expert diagnosis and repair for all pool equipment</p>
            </a>
            <a href="#installation" className="group bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg hover:border-violet-300 transition-all">
              <div className="w-12 h-12 bg-violet-100 rounded-xl flex items-center justify-center text-violet-600 mb-4 group-hover:scale-110 transition-transform">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Installation</h3>
              <p className="text-gray-600 text-sm">Professional equipment installation and upgrades</p>
            </a>
          </div>
        </div>
      </section>

      {/* Maintenance Services */}
      <section id="maintenance" className="py-20 lg:py-28 scroll-mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 bg-[#88d2c7]/20 rounded-2xl flex items-center justify-center">
              <svg className="h-7 w-7 text-[#00568c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </div>
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Cleaning & Maintenance</h2>
              <p className="text-gray-600">Regular care to keep your pool sparkling clean</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {maintenanceServices.map((service) => (
              <Link
                key={service.slug}
                href={`/${service.urlSlug}/`}
                className="group bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg hover:border-[#88d2c7] transition-all"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#00568c] transition-colors">
                  {service.name}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{service.shortDescription}</p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-[#00568c]">
                    Get a Quote
                  </span>
                  <span className="text-[#00568c] group-hover:translate-x-1 transition-transform">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Repair Services */}
      <section id="repairs" className="py-20 lg:py-28 bg-gray-50 scroll-mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center">
              <svg className="h-7 w-7 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Repairs</h2>
              <p className="text-gray-600">Expert diagnosis and repair for all pool equipment</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {repairServices.map((service) => (
              <Link
                key={service.slug}
                href={`/${service.urlSlug}/`}
                className="group bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg hover:border-emerald-300 transition-all"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">
                  {service.name}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{service.shortDescription}</p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-emerald-600">
                    Free Quote
                  </span>
                  <span className="text-emerald-600 group-hover:translate-x-1 transition-transform">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Installation Services */}
      <section id="installation" className="py-20 lg:py-28 scroll-mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 bg-violet-100 rounded-2xl flex items-center justify-center">
              <svg className="h-7 w-7 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
            </div>
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Installation</h2>
              <p className="text-gray-600">Professional equipment installation and upgrades</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {installationServices.map((service) => (
              <Link
                key={service.slug}
                href={`/${service.urlSlug}/`}
                className="group bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg hover:border-violet-300 transition-all"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-violet-600 transition-colors">
                  {service.name}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{service.shortDescription}</p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-violet-600">
                    Free Quote
                  </span>
                  <span className="text-violet-600 group-hover:translate-x-1 transition-transform">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <GuaranteeSection />

      {/* Commercial CTA */}
      <section className="py-20 lg:py-28 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#88d2c7] font-semibold mb-3">COMMERCIAL SERVICES</p>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Commercial Pool Service
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                HOAs, hotels, fitness centers, and apartment complexes trust us for reliable,
                compliant pool maintenance. We understand the unique requirements of commercial properties.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  'Health department compliance',
                  'Flexible scheduling options',
                  'Dedicated account manager',
                  'Emergency service available 24/7',
                  'Detailed service documentation',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <svg className="h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button href="/commercial-pool-service-san-diego/" variant="secondary" size="lg">
                Learn About Commercial Services
                <svg className="h-4 w-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Button>
            </div>
            <div className="bg-gray-800 rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-6">Properties We Serve</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  'HOA Communities',
                  'Apartment Complexes',
                  'Hotels & Resorts',
                  'Fitness Centers',
                  'Country Clubs',
                  'Schools & Universities',
                  'Rehab Centers',
                  'Municipal Pools',
                ].map((type) => (
                  <div key={type} className="flex items-center gap-2 text-gray-300">
                    <svg className="h-4 w-4 text-[#88d2c7]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>{type}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 lg:py-28 bg-[#00568c]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to get started?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Get a free, no-obligation quote for any of our pool services. Most quotes provided within 24 hours.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Button href={company.quoteUrl} external size="lg" variant="secondary">
              Get Your Free Quote
            </Button>
            <Button href={`tel:${company.phoneRaw}`} variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-[#00568c]">
              <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Call {company.phone}
            </Button>
          </div>

          <p className="text-blue-200 text-sm">
            Free quotes · CPO-certified technicians · Cancel anytime
          </p>
        </div>
      </section>
    </>
  );
}
