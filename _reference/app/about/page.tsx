import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { company } from '@/data/company';
import { cities } from '@/data/cities';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { Button } from '@/components/ui/Button';

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${company.url}/#organization`,
  name: company.name,
  url: company.url,
  logo: `${company.url}/images/logos/poollogic-logo.png`,
  foundingDate: '2020',
  founder: {
    '@type': 'Person',
    '@id': `${company.url}/about/kyle-bowman/#person`,
    name: 'Kyle Bowman',
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: company.address.street,
    addressLocality: company.address.city,
    addressRegion: company.address.state,
    postalCode: company.address.zip,
    addressCountry: 'US',
  },
  telephone: company.phone,
  email: company.email,
  sameAs: [
    company.social.facebook,
    company.social.instagram,
    company.social.yelp,
    company.social.google,
  ],
  areaServed: {
    '@type': 'State',
    name: 'California',
  },
  numberOfEmployees: {
    '@type': 'QuantitativeValue',
    value: 12,
  },
};

export const metadata: Metadata = {
  title: 'About Us | San Diego Pool Service Experts | PoolLogic Pool Service',
  description: `Learn about PoolLogic Pool Service - ${company.yearsInBusiness}+ years serving San Diego. Locally operated pool service with ${company.rating.count}+ 5-star reviews. Based in San Diego, CA.`,
  openGraph: {
    title: 'About Us | San Diego Pool Service Experts | PoolLogic Pool Service',
    description: `Learn about PoolLogic Pool Service - ${company.yearsInBusiness}+ years serving San Diego.`,
    type: 'website',
    url: 'https://poollogicsd.com/about/',
  },
};

const values = [
  {
    title: 'Reliability',
    description: 'We show up when we say we will, every time. Consistent scheduling means you always know when to expect us.',
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Transparency',
    description: 'No hidden fees, no surprise charges. We explain what we do and why, and provide written estimates before any work.',
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
  },
  {
    title: 'Excellence',
    description: 'We take pride in our work. Every pool we service gets our full attention and best effort, every single visit.',
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    title: 'Community',
    description: 'We live here too. Supporting our neighbors and local businesses is part of who we are as a company.',
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
];

const milestones = [
  { year: '2020', event: 'PoolLogic Pool Service founded in San Diego, CA' },
  { year: '2021', event: 'Expanded service across San Diego County' },
  { year: '2022', event: 'Added commercial pool service division' },
  { year: '2023', event: 'Launched online quote system and digital service reports' },
  { year: '2024', event: 'Surpassed 1,000+ satisfied customers countywide' },
  { year: '2025', event: 'Partnered with Cabana to scale operations and reach more San Diego families' },
];

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      {/* Breadcrumbs */}
      <div className="py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { name: 'Home', url: '/' },
              { name: 'About Us', url: '/about/' },
            ]}
          />
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#00568c] to-[#00568c]/80 text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                Your Local Pool Care Experts
              </h1>
              <p className="text-xl text-blue-100 mb-6">
                For over {company.yearsInBusiness} years, PoolLogic Pool Service has been San Diego&apos;s
                trusted choice for pool cleaning, maintenance, and repair. We&apos;re proud to be
                a locally-operated business serving our community.
              </p>
              <div className="flex flex-wrap items-center gap-6">
                <div>
                  <div className="text-3xl font-bold">5.0 ★</div>
                  <div className="text-blue-200">Google Rating</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">{company.poolsServed.toLocaleString()}+</div>
                  <div className="text-blue-200">Happy Customers</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">{cities.length}+</div>
                  <div className="text-blue-200">Cities Served</div>
                </div>
              </div>
            </div>

            {/* Team Headshots Grid */}
            <div className="grid grid-cols-4 gap-3">
              {[
                { src: '/images/pool/kyle-bowman.webp', name: 'Kyle B.' },
                { src: '/images/team/jake.webp', name: 'Jake' },
                { src: '/images/team/ron.webp', name: 'Ron' },
                { src: '/images/team/cory.webp', name: 'Cory' },
                { src: '/images/team/david.webp', name: 'David' },
                { src: '/images/team/steve.webp', name: 'Steve' },
                { src: '/images/team/carter.webp', name: 'Carter' },
                { src: '/images/team/averie.webp', name: 'Averie' },
                { src: '/images/team/eric.webp', name: 'Eric' },
                { src: '/images/team/alfred.webp', name: 'Alfred' },
                { src: '/images/team/jeremy.webp', name: 'Jeremy' },
                { src: '/images/team/mikhail.webp', name: 'Mikhail' },
              ].map((member) => (
                <div key={member.name} className="text-center">
                  <div className="w-full aspect-square rounded-full overflow-hidden mb-1.5">
                    <Image
                      src={member.src}
                      alt={`${member.name} - PoolLogic team member`}
                      width={200}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-xs text-blue-200 font-medium">{member.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Our Story</h2>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p>
                In 2020, Kyle Bowman started PoolLogic with nothing more than a truck and a pool
                pole. He had one goal: provide pool service the way he&apos;d want it done on his own
                pool. That meant showing up when he said he would, doing thorough work every time,
                and treating every customer&apos;s pool like it was his own.
              </p>
              <p>
                Kyle built PoolLogic&apos;s reputation one pool at a time, right here in San Diego.
                Word spread fast - neighbors started recommending him to friends, and before long
                he was servicing pools across San Diego County. What started as a one-man operation
                grew into a full team of CPO-certified technicians who share Kyle&apos;s standards.
              </p>
              <p>
                Today, PoolLogic serves over {cities.length} cities across San Diego County.
                The team has grown, but Kyle&apos;s approach hasn&apos;t changed. He personally trains
                every technician and still holds the same commitment to reliability, transparency,
                and excellence that he had on day one.
              </p>
              <p>
                We&apos;re not the biggest pool company, and that&apos;s by design. We&apos;ve chosen to stay
                local because we believe the best service comes from people who know the community
                they serve. When you call PoolLogic, you&apos;re not getting a call center -
                you&apos;re getting neighbors who care about doing right by you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">What We Stand For</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title} className="bg-white rounded-xl p-6 shadow-sm text-center">
                <div className="w-14 h-14 bg-[#88d2c7]/20 rounded-full flex items-center justify-center text-[#00568c] mx-auto mb-4">
                  {value.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Journey</h2>
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[#88d2c7]/30" />

              {milestones.map((milestone, index) => (
                <div key={milestone.year} className="relative flex items-start mb-8 last:mb-0">
                  {/* Timeline dot */}
                  <div className="absolute left-8 -translate-x-1/2 w-4 h-4 bg-[#00568c] rounded-full border-4 border-white shadow" />

                  {/* Content */}
                  <div className="ml-16">
                    <div className="text-lg font-bold text-[#00568c]">{milestone.year}</div>
                    <div className="text-gray-600">{milestone.event}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Why San Diego Homeowners Choose Us
              </h2>
              <div className="space-y-4">
                {[
                  {
                    title: 'Local Knowledge',
                    description: 'We understand San Diego water conditions, climate patterns, and the specific challenges pools face in our area.',
                  },
                  {
                    title: 'All-Inclusive Pricing',
                    description: 'No surprise chemical charges. Our service price includes all chemicals needed to maintain your pool.',
                  },
                  {
                    title: 'Service Reports',
                    description: 'After every visit, receive a digital report with photos, chemistry readings, and notes about your pool.',
                  },
                  {
                    title: 'Consistent Technicians',
                    description: 'The same person services your pool each week, building familiarity with your specific pool and needs.',
                  },
                  {
                    title: 'Responsive Service',
                    description: 'When issues arise, we respond quickly. Existing customers get priority scheduling for repairs.',
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                        <svg className="h-5 w-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Reviews highlight */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-center gap-2 mb-6">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="h-6 w-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="font-semibold text-gray-900">{company.rating.value}/5</span>
                <span className="text-gray-500">({company.rating.count}+ reviews)</span>
              </div>

              <blockquote className="text-lg text-gray-700 mb-6">
                &ldquo;Pool Logic is by far the best pool servicing company we&apos;ve used! Believe me, after 30 plus years owning a pool, we&apos;ve had a number of scammers. PoolLogic is efficient, prompt, very knowledgeable and reasonably priced.&rdquo;
              </blockquote>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-gray-500">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Tracy Serrano</div>
                  <div className="text-gray-500 text-sm">San Diego</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Our Service Area</h2>
          <p className="text-lg text-gray-600 mb-8 text-center max-w-2xl mx-auto">
            Based in San Diego, we proudly serve homeowners and businesses throughout San Diego County.
          </p>
          <div className="bg-gray-50 rounded-xl p-6">
            <h3 className="font-semibold text-gray-900 mb-4">San Diego County</h3>
            <div className="flex flex-wrap gap-2">
              {cities.map((city) => (
                <Link
                  key={city.slug}
                  href={`/pool-service-${city.slug}/`}
                  className="px-3 py-1 bg-white rounded-full text-sm text-gray-700 hover:bg-[#88d2c7]/20 hover:text-[#00568c] transition-colors"
                >
                  {city.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-[#00568c] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Experience the Difference?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of San Diego homeowners who trust PoolLogic Pool Service for their pool care.
            Get a free quote today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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

          <p className="mt-6 text-blue-200 text-sm">
            CPO-certified technicians &bull; Cancel anytime &bull; Satisfaction guaranteed
          </p>
        </div>
      </section>
    </>
  );
}
