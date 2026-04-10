import { Metadata } from 'next';
import Link from 'next/link';
import { company } from '@/data/company';
import { services } from '@/data/services';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { Button } from '@/components/ui/Button';
import { TrustStats } from '@/components/ui/SocialProofBar';
import { generateSimpleFAQSchema } from '@/lib/schema/faq';

const PAGE_URL = `${company.url}/pool-service-cost-san-diego/`;

export const metadata: Metadata = {
  title: 'Pool Service Cost in San Diego (2026 Pricing Guide) | PoolLogic',
  description: `How much does pool service cost in San Diego? Weekly cleaning $120-200/mo, repairs from $150+, equipment installation from $500+. Transparent pricing from ${company.name}. ${company.rating.count}+ 5-star reviews.`,
  keywords: [
    'pool service cost san diego',
    'pool cleaning price san diego',
    'how much does pool service cost',
    'weekly pool cleaning cost',
    'pool maintenance cost san diego',
    'pool repair cost san diego',
  ],
  openGraph: {
    title: 'Pool Service Cost in San Diego (2026 Pricing Guide)',
    description: 'Transparent pool service pricing for San Diego homeowners. Weekly cleaning, repairs, installations — see real cost ranges and what affects your price.',
    type: 'website',
    url: PAGE_URL,
    siteName: company.name,
  },
  alternates: { canonical: PAGE_URL },
};

const faqs = [
  {
    question: 'How much does weekly pool cleaning cost in San Diego?',
    answer: 'Weekly pool service in San Diego typically costs $120-200 per month, depending on pool size, features (spa, water features), and current condition. This usually includes all chemicals, testing, skimming, brushing, vacuuming, and equipment inspection.',
  },
  {
    question: 'What factors affect pool service pricing?',
    answer: 'The main factors are pool size (square footage and gallons), pool features (spa, fountains, slides), current condition, equipment age, and service frequency. Pools with heavy tree coverage or pets may cost slightly more due to extra debris.',
  },
  {
    question: 'Are chemicals included in weekly pool service?',
    answer: 'With PoolLogic, yes — all chemicals are included in your weekly service price. Some companies charge separately for chemicals, which can add $30-60 per month. Always ask if chemicals are included when comparing quotes.',
  },
  {
    question: 'Is it cheaper to clean my pool myself or hire a service?',
    answer: 'DIY pool care costs roughly $80-120/month for chemicals and supplies alone, plus your time (2-4 hours per week). Professional service costs $120-200/month with chemicals included. When you factor in equipment costs, learning curve, and time value, professional service is often comparable or better value.',
  },
  {
    question: 'How much do pool equipment repairs cost in San Diego?',
    answer: 'Pool pump repair typically costs $150-600, filter repair $100-400, heater repair $200-800, and light repair $150-500. Costs depend on the specific issue and parts needed. We provide free estimates before any repair work.',
  },
  {
    question: 'Do you offer free pool service quotes?',
    answer: 'Yes, we provide free, no-obligation quotes for all services. Fill out our online form or call (619) 913-9335. We typically respond within 24 hours with a detailed estimate.',
  },
];

const faqSchema = generateSimpleFAQSchema(faqs);

const serviceCategories = {
  maintenance: services.filter((s) => s.category === 'maintenance'),
  repair: services.filter((s) => s.category === 'repair'),
  installation: services.filter((s) => s.category === 'installation'),
};

export default function PricingPage() {
  return (
    <>
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      {/* Breadcrumbs */}
      <div className="py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { name: 'Home', url: '/' },
              { name: 'Pool Service Cost', url: '/pool-service-cost-san-diego/' },
            ]}
          />
        </div>
      </div>

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#00568c] to-[#00568c]/80 text-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Pool Service Cost in San Diego
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Transparent pricing for pool cleaning, repairs, and equipment installation.
              See what San Diego pool owners actually pay — no hidden fees, no surprises.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href={company.quoteUrl} external size="lg" variant="secondary">
                Get Your Free Quote
              </Button>
              <Button href={`tel:${company.phoneRaw}`} variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-[#00568c]">
                Call {company.phone}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Stats */}
      <section className="py-12 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <TrustStats />
        </div>
      </section>

      {/* Weekly Service Pricing */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#00568c] font-semibold mb-3">WEEKLY POOL CLEANING</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Weekly Pool Service Pricing
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              All chemicals included. No contracts required. Cancel anytime.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                name: 'Small Pool',
                size: 'Up to 10,000 gallons',
                range: '$120 - $150/mo',
                features: ['Weekly cleaning visits', 'All chemicals included', 'Water testing & balancing', 'Equipment inspection', 'Digital service reports'],
              },
              {
                name: 'Standard Pool',
                size: '10,000 - 20,000 gallons',
                range: '$150 - $180/mo',
                features: ['Everything in Small Pool', 'Larger chemical volume', 'Extended cleaning time', 'Filter monitoring', 'Priority scheduling'],
                featured: true,
              },
              {
                name: 'Large Pool / Pool + Spa',
                size: '20,000+ gallons or pool with spa',
                range: '$180 - $200+/mo',
                features: ['Everything in Standard', 'Spa water management', 'Extra equipment checks', 'Complex system monitoring', 'Same-day response'],
              },
            ].map((tier) => (
              <div
                key={tier.name}
                className={`rounded-2xl p-8 ${tier.featured ? 'bg-[#00568c] text-white ring-2 ring-[#00568c] scale-105' : 'bg-white border border-gray-200'}`}
              >
                <h3 className={`text-xl font-bold mb-1 ${tier.featured ? 'text-white' : 'text-gray-900'}`}>
                  {tier.name}
                </h3>
                <p className={`text-sm mb-4 ${tier.featured ? 'text-blue-200' : 'text-gray-500'}`}>
                  {tier.size}
                </p>
                <p className={`text-2xl font-bold mb-6 ${tier.featured ? 'text-white' : 'text-[#00568c]'}`}>
                  {tier.range}
                </p>
                <ul className="space-y-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <svg className={`h-5 w-5 flex-shrink-0 ${tier.featured ? 'text-[#88d2c7]' : 'text-green-500'}`} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className={`text-sm ${tier.featured ? 'text-blue-100' : 'text-gray-600'}`}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-500 text-sm mt-8">
            Exact pricing depends on pool size, features, and condition. Get a personalized quote in minutes.
          </p>
        </div>
      </section>

      {/* Repair & Installation Pricing */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#00568c] font-semibold mb-3">REPAIRS & INSTALLATIONS</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Pool Equipment Service Pricing
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Free estimates for all repairs. No diagnostic fees when you choose us for the repair.
            </p>
          </div>

          <div className="space-y-12">
            {[
              { title: 'Repair Services', services: serviceCategories.repair },
              { title: 'Installation Services', services: serviceCategories.installation },
              { title: 'Maintenance Services', services: serviceCategories.maintenance.filter(s => s.slug !== 'weekly-pool-cleaning') },
            ].map((category) => (
              <div key={category.title}>
                <h3 className="text-xl font-bold text-gray-900 mb-6">{category.title}</h3>
                <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                  <div className="divide-y divide-gray-100">
                    {category.services.map((service) => (
                      <Link
                        key={service.slug}
                        href={`/${service.urlSlug}/`}
                        className="flex items-center justify-between p-5 hover:bg-gray-50 transition-colors group"
                      >
                        <div className="flex-1 mr-4">
                          <h4 className="font-semibold text-gray-900 group-hover:text-[#00568c] transition-colors">
                            {service.name}
                          </h4>
                          <p className="text-sm text-gray-500 line-clamp-1">{service.shortDescription}</p>
                        </div>
                        <div className="text-right flex-shrink-0">
                          <p className="font-bold text-[#00568c]">
                            ${service.priceRange.min} - ${service.priceRange.max}
                          </p>
                          <p className="text-xs text-gray-400">per {service.priceRange.unit}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-[#88d2c7]/10 rounded-xl p-6 flex items-start gap-4">
            <svg className="h-6 w-6 text-[#00568c] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            <div>
              <p className="font-semibold text-gray-900 mb-1">Prices are estimates</p>
              <p className="text-sm text-gray-600">
                Final pricing depends on your specific pool, equipment brand, and condition. All quotes include a detailed
                breakdown with no hidden fees. We always get your approval before starting any work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Affects Cost */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            What Affects Pool Service Cost in San Diego?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { title: 'Pool Size', description: 'Larger pools require more chemicals, longer cleaning time, and bigger equipment. A 25,000-gallon pool costs more to maintain than a 10,000-gallon pool.' },
              { title: 'Pool Features', description: 'Spas, water features, slides, and infinity edges add complexity. Each feature needs additional attention during weekly service.' },
              { title: 'Current Condition', description: 'A neglected pool needs more initial work to bring it up to standard. Once stabilized, ongoing costs are consistent.' },
              { title: 'Equipment Age', description: 'Older equipment requires more frequent repairs and runs less efficiently. Modern equipment lowers long-term costs.' },
              { title: 'Landscaping', description: 'Trees, plants, and ground cover near the pool increase debris. More debris means longer cleaning time and more filter loads.' },
              { title: 'San Diego Climate', description: 'Year-round sunshine means year-round service needs. Higher UV and temperatures increase chlorine demand compared to seasonal climates.' },
            ].map((factor) => (
              <div key={factor.title} className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-2">{factor.title}</h3>
                <p className="text-sm text-gray-600">{factor.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIY vs Professional */}
      <section className="py-16 lg:py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">DIY vs Professional: Real Cost Comparison</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-800 rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-4">DIY Pool Care</h3>
              <div className="space-y-3 mb-6">
                {[
                  { item: 'Chemicals (monthly)', cost: '$40-80' },
                  { item: 'Test kit / strips', cost: '$15-30' },
                  { item: 'Equipment (net, brush, vacuum)', cost: '$100-300 one-time' },
                  { item: 'Your time (2-4 hrs/week)', cost: 'Priceless' },
                ].map((row) => (
                  <div key={row.item} className="flex justify-between text-gray-300">
                    <span>{row.item}</span>
                    <span className="font-medium text-white">{row.cost}</span>
                  </div>
                ))}
              </div>
              <div className="pt-4 border-t border-gray-700">
                <div className="flex justify-between text-lg font-bold">
                  <span>Monthly estimate</span>
                  <span>$80-120+</span>
                </div>
                <p className="text-gray-400 text-sm mt-2">Plus your time and risk of costly mistakes</p>
              </div>
            </div>

            <div className="bg-[#00568c] rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-4">Professional Service</h3>
              <div className="space-y-3 mb-6">
                {[
                  { item: 'Weekly cleaning visits', cost: 'Included' },
                  { item: 'All chemicals', cost: 'Included' },
                  { item: 'Water testing & balancing', cost: 'Included' },
                  { item: 'Equipment inspection', cost: 'Included' },
                  { item: 'Service reports', cost: 'Included' },
                ].map((row) => (
                  <div key={row.item} className="flex justify-between text-blue-100">
                    <span>{row.item}</span>
                    <span className="font-medium text-[#88d2c7]">{row.cost}</span>
                  </div>
                ))}
              </div>
              <div className="pt-4 border-t border-blue-400/30">
                <div className="flex justify-between text-lg font-bold">
                  <span>Monthly cost</span>
                  <span>$120-200</span>
                </div>
                <p className="text-blue-200 text-sm mt-2">Zero hassle, expert care, early problem detection</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Pool Service Cost FAQ
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-[#00568c]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Get Your Free Pool Service Quote
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Tell us about your pool and we&apos;ll send a personalized quote within 24 hours.
            No commitment, no pressure — just honest pricing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href={company.quoteUrl} external size="lg" variant="secondary">
              Get Free Quote
            </Button>
            <Button href={`tel:${company.phoneRaw}`} variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-[#00568c]">
              Call {company.phone}
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
