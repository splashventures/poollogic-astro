import { Metadata } from 'next';
import Link from 'next/link';
import { company } from '@/data/company';
import { cities } from '@/data/cities';
import { services } from '@/data/services';
import { reviews } from '@/data/reviews';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { DualCTA } from '@/components/ui/DualCTA';
import { generateLocalBusinessSchema } from '@/lib/schema/localBusiness';

export const metadata: Metadata = {
  title: `Best Pool Service Near Me in San Diego | ${company.name}`,
  description: `Looking for pool service near me in San Diego? ${company.name} offers professional pool cleaning, maintenance, and repairs across ${cities.length}+ San Diego communities. ${company.rating.value}-star rated.`,
  openGraph: {
    title: `Best Pool Service Near Me in San Diego | ${company.name}`,
    description: `Professional pool service near you in San Diego. ${company.rating.count}+ five-star reviews. Serving ${cities.length}+ communities.`,
    type: 'website',
    url: `${company.url}/pool-service-near-me/`,
  },
};

const serviceCategories = [
  {
    title: 'Pool Maintenance',
    items: services.filter((s) => s.category === 'maintenance'),
  },
  {
    title: 'Pool Repair',
    items: services.filter((s) => s.category === 'repair'),
  },
  {
    title: 'Equipment Installation',
    items: services.filter((s) => s.category === 'installation'),
  },
];

export default function PoolServiceNearMePage() {
  const schema = generateLocalBusinessSchema();
  const featuredReviews = reviews.slice(0, 3);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Breadcrumbs */}
      <div className="py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { name: 'Home', url: '/' },
              { name: 'Pool Service Near Me', url: '/pool-service-near-me/' },
            ]}
          />
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#00568c] to-[#00568c]/80 text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Offering the Best Pool Service in San Diego
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Our experienced technicians provide comprehensive pool service to keep your pool looking great and running efficiently.
              </p>
              <DualCTA quoteText="Get A Free Quote" />
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <p className="text-3xl font-bold">{company.poolsServed.toLocaleString()}+</p>
                  <p className="text-blue-200 text-sm">Satisfied Customers</p>
                </div>
                <div>
                  <p className="text-3xl font-bold">{company.rating.value}</p>
                  <p className="text-blue-200 text-sm">Star Rating</p>
                </div>
                <div>
                  <p className="text-3xl font-bold">{company.yearsInBusiness}+</p>
                  <p className="text-blue-200 text-sm">Years Experience</p>
                </div>
                <div>
                  <p className="text-3xl font-bold">{company.rating.count}+</p>
                  <p className="text-blue-200 text-sm">Reviews</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our Pool Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {serviceCategories.map((category) => (
              <div key={category.title} className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{category.title}</h3>
                <ul className="space-y-3">
                  {category.items.map((service) => (
                    <li key={service.slug}>
                      <Link
                        href={`/${service.urlSlug}/`}
                        className="flex items-center gap-2 text-gray-600 hover:text-[#00568c] transition-colors"
                      >
                        <svg className="h-4 w-4 text-[#88d2c7] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/commercial-pool-service-san-diego/"
              className="inline-flex items-center gap-2 text-[#00568c] font-semibold hover:text-[#00568c]/80 transition-colors"
            >
              Commercial Pool Services
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">
            Pool Service Areas in San Diego County
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            We proudly serve communities throughout greater San Diego County. Find pool service near you.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {cities.map((city) => (
              <Link
                key={city.slug}
                href={`/pool-service-${city.slug}/`}
                className="bg-white border border-gray-200 rounded-lg px-4 py-3 text-center text-sm font-medium text-gray-700 hover:border-[#00568c] hover:text-[#00568c] transition-colors"
              >
                {city.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredReviews.map((review) => (
              <div key={review.id} className="bg-white border border-gray-200 rounded-xl p-6">
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg
                      key={i}
                      className="h-5 w-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  &ldquo;{review.text}&rdquo;
                </p>
                <p className="font-semibold text-gray-900">{review.customerName}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/reviews/"
              className="inline-flex items-center gap-2 text-[#00568c] font-semibold hover:text-[#00568c]/80 transition-colors"
            >
              Read All {reviews.length} Reviews
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-[#00568c] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Get a free quote in under 2 minutes. See transparent pricing and schedule your first service online.
          </p>
          <DualCTA quoteText="See My Price" className="justify-center" />
        </div>
      </section>
    </>
  );
}
