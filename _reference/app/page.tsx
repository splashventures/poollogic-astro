import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { company } from '@/data/company';
import { cities } from '@/data/cities';
import { Button } from '@/components/ui/Button';
import { TrustStats } from '@/components/ui/SocialProofBar';
import { HowItWorksSection } from '@/components/ui/HowItWorks';
import { TestimonialsSection } from '@/components/ui/Testimonials';
import { ComparisonSection } from '@/components/ui/Comparison';
import { GuaranteeSection } from '@/components/ui/Guarantee';
import { FAQSection } from '@/components/ui/FAQ';
import { PricingPreview } from '@/components/ui/PricingPreview';

// SEO-optimized metadata for homepage
export const metadata: Metadata = {
  title: 'Pool Service San Diego | #1 Pool Cleaning Company | PoolLogic',
  description: `San Diego pool service & cleaning. Serving San Diego, Chula Vista, Carlsbad & 20+ cities. All chemicals included. ${company.rating.count}+ 5-star reviews. Call ${company.phone}!`,
  keywords: [
    'pool service near me',
    'pool service san diego',
    'pool cleaning near me',
    'san diego pool service',
    'pool service san diego ca',
    'pool cleaning chula vista',
    'pool maintenance san diego',
    'pool company near me',
    'weekly pool service',
    'residential pool service',
    'pool service san diego county',
  ],
  openGraph: {
    title: 'Pool Service San Diego | #1 Pool Cleaning Company | PoolLogic',
    description: `Professional pool service for San Diego. Weekly cleaning, all chemicals included, CPO-certified technicians. ${company.rating.count}+ 5-star reviews.`,
    url: company.url,
    siteName: company.name,
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pool Service San Diego | PoolLogic Pool Service',
    description: `San Diego's #1 rated pool service. All chemicals included. Call ${company.phone}!`,
  },
  alternates: {
    canonical: company.url,
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    'geo.region': 'US-CA',
    'geo.placename': 'San Diego',
    'geo.position': `${company.coordinates.lat};${company.coordinates.lng}`,
  },
};

export default function HomePage() {
  return (
    <>
      {/* Hero Section - Full background image */}
      <section className="relative min-h-[600px] lg:min-h-[700px] overflow-hidden">
        {/* Background Image */}
        <Image
          src="/images/pool/hero-pool.webp"
          alt="Crystal clear swimming pool maintained by PoolLogic in San Diego"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-gray-900/60 to-gray-900/30" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 flex items-center min-h-[600px] lg:min-h-[700px]">
          <div className="max-w-[940px]">
            {/* Trust badge */}
            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <svg className="h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-white font-medium text-sm">
                Trusted by {company.poolsServed.toLocaleString()}+ San Diego Families
              </span>
            </div>

            {/* H1 - Primary keyword: "San Diego Pool Service" */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              San Diego Pool Service
              <span className="block text-[#88d2c7]">& Pool Cleaning</span>
            </h1>

            {/* Subheadline with keywords */}
            <p className="text-xl lg:text-2xl text-gray-200 mb-8 leading-relaxed">
              Professional pool service for San Diego, Chula Vista, Carlsbad, and 20+ San Diego County cities.
              Weekly pool cleaning by CPO-certified technicians - all chemicals included.
            </p>

            {/* Value props */}
            <div className="flex flex-wrap gap-x-6 gap-y-3 mb-6 text-white/90">
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5 text-[#88d2c7]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>All chemicals included</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5 text-[#88d2c7]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>CPO-certified technicians</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5 text-[#88d2c7]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Same technician weekly</span>
              </div>
            </div>

            {/* Trust signals */}
            <div className="flex flex-wrap gap-x-6 gap-y-3 mb-8">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="font-medium text-white">{company.rating.value}/5</span>
                <span className="text-gray-300">({company.rating.count}+ reviews)</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-200">Bonded & Insured</span>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href={company.quoteUrl} external size="lg" variant="secondary">
                Get Your Free Quote
              </Button>
              <Button href={`tel:${company.phoneRaw}`} variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-[#00568c]">
                <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                {company.phone}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Stats */}
      <section className="py-16 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <TrustStats />
        </div>
      </section>

      {/* Introduction Section - SEO content */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-xl overflow-hidden">
                  <Image
                    src="/images/pool/pool-tech-testing-chemicals.webp"
                    alt="PoolLogic technician testing pool water chemistry"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="rounded-xl overflow-hidden">
                  <Image
                    src="/images/pool/pool-tech-equipment.webp"
                    alt="PoolLogic technician with pool pump and filter equipment"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="rounded-xl overflow-hidden">
                  <Image
                    src="/images/pool/pool-tech-skimming.webp"
                    alt="PoolLogic technician skimming leaves from pool"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="rounded-xl overflow-hidden">
                  <Image
                    src="/images/pool/pool-tech-service-update.webp"
                    alt="PoolLogic technician sending digital service report"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Text Content */}
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                #1 Rated Pool Company in San Diego
              </h2>
              <div className="prose prose-lg text-gray-600">
                <p>
                  Looking for <strong>pool service near you</strong>? PoolLogic Pool Service has provided professional <strong>pool service in San Diego</strong> since 2020. Based in San Diego, we serve homeowners throughout <strong>San Diego County</strong> with weekly pool cleaning and maintenance.
                </p>
                <p>
                  Whether you need <strong>pool cleaning in Chula Vista</strong>, <strong>pool service in Carlsbad</strong>, or <strong>pool maintenance in La Jolla</strong> - we&apos;re your trusted local pool company. Our {company.rating.count}+ 5-star reviews speak for themselves.
                </p>
              </div>
              <div className="mt-8">
                <Button href={company.quoteUrl} external>
                  Get a Free Quote
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Point Section */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-[#00568c] font-semibold mb-3">WHY HIRE A POOL SERVICE?</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Pool Maintenance Shouldn&apos;t Be This Hard
            </h2>
            <p className="text-lg text-gray-600">
              Sound familiar?
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                pain: '"I spend every weekend testing water and adding chemicals"',
                solution: 'We handle all pool chemistry - you just swim',
              },
              {
                pain: '"My pool service never shows up when they say they will"',
                solution: 'Same day, same time, every single week',
              },
              {
                pain: '"I\'m always getting surprise charges for chemicals"',
                solution: 'All chemicals included - one simple price',
              },
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="text-red-500 mb-4">
                  <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="text-gray-700 font-medium mb-4 italic">{item.pain}</p>
                <div className="flex items-start gap-2 text-green-700">
                  <svg className="h-5 w-5 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-medium">{item.solution}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <HowItWorksSection />

      {/* Comparison */}
      <ComparisonSection />

      {/* Service Promise */}
      <PricingPreview />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Guarantee */}
      <GuaranteeSection />

      {/* Service Areas - Critical for local SEO */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#00568c] font-semibold mb-3">POOL SERVICE AREAS</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Pool Service Throughout San Diego County
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From San Diego to Oceanside, we provide professional pool cleaning and pool maintenance
              across San Diego County, California.
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 mb-12">
            <h3 className="text-xl font-bold text-gray-900 mb-2">San Diego County Pool Service</h3>
            <p className="text-gray-600 text-sm mb-6">Pool cleaning & maintenance in these San Diego County cities:</p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {cities.map((city) => (
                <Link
                  key={city.slug}
                  href={`/pool-service-${city.slug}/`}
                  className="text-gray-700 hover:text-[#00568c] transition-colors"
                >
                  {city.name} Pool Service
                </Link>
              ))}
            </div>
          </div>

          <div className="text-center">
            <p className="text-gray-600 mb-4">
              Don&apos;t see your city? We likely serve your area. Contact us for availability.
            </p>
            <Button href={company.quoteUrl} external>
              Check Service Availability
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection />

      {/* Final CTA */}
      <section className="py-20 lg:py-28 bg-[#00568c]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready for Professional Pool Service?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Get a free quote for pool service in San Diego. CPO-certified technicians, no hidden fees, just crystal-clear water.
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
            Serving San Diego County &middot; {company.rating.count}+ 5-star reviews &middot; Bonded & insured
          </p>
        </div>
      </section>
    </>
  );
}
