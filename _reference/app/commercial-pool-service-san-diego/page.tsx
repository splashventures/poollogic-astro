import { Metadata } from 'next';
import Link from 'next/link';
import { company } from '@/data/company';
import { cities } from '@/data/cities';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { DualCTA, MobileDualCTA } from '@/components/ui/DualCTA';
import { generateSimpleFAQSchema } from '@/lib/schema/faq';

export const metadata: Metadata = {
  title: 'Commercial Pool Service | HOA, Hotel & Business Pools | PoolLogic Pool Service',
  description: `Professional commercial pool service for HOAs, hotels, apartments & businesses in San Diego County. Health dept compliance, flexible scheduling, 24/7 emergency service. Call ${company.phone}.`,
  openGraph: {
    title: 'Commercial Pool Service | HOA, Hotel & Business Pools | PoolLogic Pool Service',
    description: 'Professional commercial pool service for HOAs, hotels, apartments & businesses in San Diego County.',
    type: 'website',
    url: 'https://poollogicsd.com/commercial-pool-service-san-diego/',
  },
};

const commercialFAQs = [
  {
    question: 'What types of commercial properties do you service?',
    answer: 'We service all types of commercial pools including HOA and community pools, apartment complexes, hotels and resorts, fitness centers, country clubs, schools and universities, rehabilitation centers, and municipal pools.',
  },
  {
    question: 'How do you handle health department compliance?',
    answer: 'We maintain detailed service logs and water chemistry records required by local health departments. Our technicians are trained on commercial pool regulations, and we can provide documentation for health inspections.',
  },
  {
    question: 'Do you offer 24/7 emergency service?',
    answer: 'Yes, we offer 24/7 emergency service for commercial clients. Pool closures can be costly and inconvenient for your guests or residents, so we prioritize rapid response for urgent issues.',
  },
  {
    question: 'How is commercial pool service different from residential?',
    answer: 'Commercial pools have higher bather loads, stricter regulations, and more complex equipment. We service commercial pools more frequently (often daily), maintain detailed compliance records, and use commercial-grade chemicals and equipment.',
  },
  {
    question: 'Can you work around our business hours?',
    answer: 'We offer flexible scheduling to minimize disruption to your operations. Many commercial clients prefer early morning or late evening service. We work with you to find the ideal service schedule.',
  },
  {
    question: 'What does your commercial service include?',
    answer: 'Our commercial service includes water testing and treatment, surface cleaning, equipment inspection, chemical supply, detailed service reports, compliance documentation, and a dedicated account manager for your property.',
  },
];

const propertyTypes = [
  {
    title: 'HOA & Community Pools',
    description: 'Keep residents happy with pristine pool conditions. We handle everything from daily maintenance to seasonal openings and closings.',
    features: ['Board meeting reports', 'Budget planning assistance', 'Resident communication support'],
  },
  {
    title: 'Hotels & Resorts',
    description: 'First impressions matter. We ensure your pool is always guest-ready with reliable daily service and rapid response to issues.',
    features: ['Daily service available', '24/7 emergency support', 'Multi-pool discounts'],
  },
  {
    title: 'Apartment Complexes',
    description: 'Attract and retain tenants with a well-maintained pool amenity. We provide consistent, reliable service your residents can count on.',
    features: ['Property management integration', 'Tenant satisfaction focus', 'After-hours service'],
  },
  {
    title: 'Fitness Centers',
    description: 'High-traffic pools need extra attention. We provide the frequent service needed to keep water safe and clear despite heavy use.',
    features: ['High-frequency service', 'Locker room integration', 'Member safety priority'],
  },
  {
    title: 'Country Clubs',
    description: 'Your members expect the best. We deliver premium pool service that matches the quality of your club.',
    features: ['Premium service standards', 'Event preparation', 'Member relations awareness'],
  },
  {
    title: 'Schools & Universities',
    description: 'Student safety is paramount. We maintain proper chemistry and documentation for educational facility pools.',
    features: ['Strict safety protocols', 'Academic schedule flexibility', 'Coach/staff coordination'],
  },
];

export default function CommercialPoolServicePage() {
  const faqSchema = generateSimpleFAQSchema(commercialFAQs);

  return (
    <>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Breadcrumbs */}
      <div className="py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { name: 'Home', url: '/' },
              { name: 'Commercial Pool Service', url: '/commercial-pool-service-san-diego/' },
            ]}
          />
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-3 py-1 bg-[#00568c] rounded-full text-sm font-medium mb-4">
                Commercial Services
              </span>
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                Commercial Pool Service for San Diego County
              </h1>
              <p className="text-xl text-gray-300 mb-6">
                Professional pool maintenance for HOAs, hotels, apartments, fitness centers,
                and commercial properties. Health department compliant, fully insured, and
                available 24/7 for emergencies.
              </p>

              {/* Key benefits */}
              <div className="flex flex-wrap gap-4 mb-8">
                {[
                  'Health Dept Compliant',
                  'Fully Insured',
                  '24/7 Emergency Service',
                ].map((benefit) => (
                  <div key={benefit} className="flex items-center gap-2">
                    <svg className="h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>

              <DualCTA quoteText="Request Commercial Quote" className="justify-start" />
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { value: '100+', label: 'Commercial Clients' },
                { value: '24/7', label: 'Emergency Support' },
                { value: `${company.yearsInBusiness}+`, label: 'Years Experience' },
                { value: '100%', label: 'Compliance Rate' },
              ].map((stat) => (
                <div key={stat.label} className="bg-gray-800 rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-[#88d2c7] mb-1">{stat.value}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Commercial Needs Are Different */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Commercial Pools Require Specialized Care
            </h2>
            <p className="text-lg text-gray-600">
              Commercial pools face unique challenges that residential pools don&apos;t.
              Higher bather loads, stricter regulations, and the need for detailed documentation
              require a service provider who understands commercial requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Health Department Compliance',
                description: 'We maintain all required records and documentation. Our service logs meet health department standards for commercial pools.',
                icon: (
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
              },
              {
                title: 'Higher Service Frequency',
                description: 'Commercial pools need more frequent attention. We offer daily, 3x/week, or custom schedules to match your needs.',
                icon: (
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
              },
              {
                title: 'Detailed Reporting',
                description: 'Receive comprehensive reports suitable for board meetings, health inspections, and property management reviews.',
                icon: (
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                ),
              },
              {
                title: 'Dedicated Account Manager',
                description: 'A single point of contact who knows your property, your needs, and your schedule. No call center runaround.',
                icon: (
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                ),
              },
              {
                title: '24/7 Emergency Response',
                description: 'Pool closures cost money and frustrate guests or residents. We respond quickly when urgent issues arise.',
                icon: (
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
              },
              {
                title: 'Commercial Insurance',
                description: 'Full liability coverage that meets commercial property requirements. Certificates of insurance available on request.',
                icon: (
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
              },
            ].map((item) => (
              <div key={item.title} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-[#88d2c7]/20 rounded-lg flex items-center justify-center text-[#00568c] mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Property Types */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Properties We Serve
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We understand the unique needs of different commercial property types and
              tailor our service accordingly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {propertyTypes.map((type) => (
              <div key={type.title} className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{type.title}</h3>
                <p className="text-gray-600 mb-4">{type.description}</p>
                <ul className="space-y-2">
                  {type.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-gray-600">
                      <svg className="h-4 w-4 text-[#00568c]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Inclusions */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                What&apos;s Included in Commercial Service
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our comprehensive commercial service covers everything needed to keep your
                pool safe, clean, and compliant.
              </p>

              <div className="space-y-4">
                {[
                  'Water testing and chemical balancing (every visit)',
                  'Surface skimming and debris removal',
                  'Brushing walls, tiles, and waterline',
                  'Vacuuming as needed',
                  'Equipment inspection and monitoring',
                  'Chemical supply and delivery',
                  'Digital service reports after each visit',
                  'Health department compliance documentation',
                  'Monthly management summary reports',
                  'Direct technician phone access',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <svg className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-900 rounded-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Service Levels</h3>
              <div className="space-y-6">
                {[
                  {
                    name: 'Daily Service',
                    description: 'For high-traffic pools like hotels and fitness centers',
                    price: 'Custom pricing',
                  },
                  {
                    name: '3x Weekly',
                    description: 'Popular for apartment complexes and HOA pools',
                    price: 'Custom pricing',
                  },
                  {
                    name: 'Weekly Plus',
                    description: 'Enhanced weekly service with mid-week check',
                    price: 'Custom pricing',
                  },
                ].map((level) => (
                  <div key={level.name} className="border-b border-gray-700 pb-4 last:border-0">
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="font-semibold">{level.name}</h4>
                      <span className="text-[#88d2c7] text-sm">{level.price}</span>
                    </div>
                    <p className="text-gray-400 text-sm">{level.description}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-gray-700">
                <p className="text-gray-400 text-sm">
                  All pricing is customized based on pool size, condition, and service needs.
                  Contact us for a free, detailed quote.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Commercial Service Areas
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            We provide commercial pool service throughout San Diego County:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {cities.slice(0, 18).map((city) => (
              <Link
                key={city.slug}
                href={`/pool-service-${city.slug}/`}
                className="px-4 py-2 bg-white rounded-lg text-gray-700 hover:bg-[#88d2c7]/10 hover:text-[#00568c] transition-colors text-center text-sm"
              >
                {city.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Commercial Pool Service FAQs
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {commercialFAQs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 lg:py-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Let&apos;s Discuss Your Commercial Pool Needs
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Get a customized proposal for your commercial property. We&apos;ll assess your needs,
            explain our service, and provide transparent pricing.
          </p>

          {/* Desktop CTA */}
          <div className="hidden sm:block">
            <DualCTA quoteText="Request Commercial Quote" className="justify-center" />
          </div>

          {/* Mobile CTA */}
          <div className="sm:hidden">
            <MobileDualCTA />
          </div>

          <p className="mt-6 text-gray-400 text-sm">
            Free site assessment • Custom proposals • No obligation
          </p>
        </div>
      </section>
    </>
  );
}
