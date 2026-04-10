import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { cities, getCityBySlug, getNearbyCities, getPrimaryCities } from '@/data/cities';
import { services, getServiceBySlug, getServiceByUrlSlug } from '@/data/services';
import { company } from '@/data/company';
import { generateCityMetadata } from '@/lib/seo/generateCityMeta';
import { generateCityLocalBusinessSchema } from '@/lib/schema/localBusiness';
import { generateServiceSchema } from '@/lib/schema/service';
import { generateSimpleFAQSchema } from '@/lib/schema/faq';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { Button } from '@/components/ui/Button';
import { TrustStats } from '@/components/ui/SocialProofBar';
import { GuaranteeBadge, GuaranteeSection } from '@/components/ui/Guarantee';
import { posts } from '@/data/posts';
import { BlogPost } from '@/types/post';
import { City } from '@/types/city';
import { Service } from '@/types/service';
import { parseComboSlug, getAllComboParams, getServiceUrlSlugFromComboSlug, getComboUrlSlug, getComboIntro, getComboFAQs } from '@/data/city-service-combos';

// === Slug routing helpers ===

function parseCitySlug(slug: string): string | null {
  if (slug.startsWith('pool-service-')) {
    return slug.replace(/^pool-service-/, '');
  }
  return null;
}

function resolveSlug(slug: string): { type: 'city'; city: City } | { type: 'service'; service: Service } | { type: 'combo'; service: Service; city: City } | null {
  const citySlug = parseCitySlug(slug);
  if (citySlug) {
    const city = getCityBySlug(citySlug);
    if (city) return { type: 'city', city };
  }

  const service = getServiceByUrlSlug(slug);
  if (service) return { type: 'service', service };

  // Check for city+service combo pages (e.g. pool-cleaning-service-chula-vista)
  const combo = parseComboSlug(slug);
  if (combo) {
    const comboServiceUrl = getServiceUrlSlugFromComboSlug(combo.serviceSlug);
    const comboService = getServiceByUrlSlug(comboServiceUrl);
    const comboCity = getCityBySlug(combo.citySlug);
    if (comboService && comboCity) return { type: 'combo', service: comboService, city: comboCity };
  }

  return null;
}

// === Static params: both city and service slugs ===

export async function generateStaticParams() {
  const cityParams = cities.map((city) => ({
    slug: `pool-service-${city.slug}`,
  }));

  const serviceParams = services.map((service) => ({
    slug: service.urlSlug,
  }));

  const comboParams = getAllComboParams();

  return [...cityParams, ...serviceParams, ...comboParams];
}

// === Metadata dispatcher ===

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const resolved = resolveSlug(slug);

  if (!resolved) {
    return { title: 'Page Not Found' };
  }

  if (resolved.type === 'city') {
    return generateCityMetadata(resolved.city);
  }

  if (resolved.type === 'combo') {
    const { service: comboService, city: comboCity } = resolved;
    const comboSlug = getComboUrlSlug(comboService, comboCity);
    const comboTitle = `${comboService.name} in ${comboCity.name}, CA | ${company.name}`;
    const comboDesc = `Professional ${comboService.name.toLowerCase()} in ${comboCity.name}, San Diego County. CPO-certified technicians, ${company.rating.count}+ 5-star reviews. Call ${company.phone} for a free quote!`;
    return {
      title: comboTitle,
      description: comboDesc,
      keywords: [
        `${comboService.name.toLowerCase()} ${comboCity.name.toLowerCase()}`,
        `pool service ${comboCity.name.toLowerCase()}`,
        `${comboService.name.toLowerCase()} near me`,
        ...comboService.keywords.slice(0, 3),
      ],
      openGraph: { title: comboTitle, description: comboDesc, type: 'website', url: `${company.url}/${comboSlug}/`, siteName: company.name },
      alternates: { canonical: `${company.url}/${comboSlug}/` },
    };
  }

  // Service metadata
  const service = resolved.service;
  const title = `${service.name} | San Diego Pool Service | PoolLogic Pool Service`;
  const description = `Professional ${service.name} in San Diego. ${service.longDescription.slice(0, 100)}... ${company.rating.count}+ reviews. Call ${company.phone}!`;
  const keywords = [
    ...service.keywords,
    `${service.name.toLowerCase()} near me`,
    `${service.name.toLowerCase()} san diego`,
    `${service.name.toLowerCase()} chula vista`,
    `${service.name.toLowerCase()} carlsbad`,
    `pool ${service.category} service`,
  ];

  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      type: 'website',
      url: `${company.url}/${service.urlSlug}/`,
      siteName: company.name,
    },
    twitter: {
      card: 'summary',
      title,
      description,
    },
    alternates: {
      canonical: `${company.url}/${service.urlSlug}/`,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

// === City page FAQs ===

function getCityFAQs(city: City) {
  return city.faqs;
}

// === Service page FAQs ===

function getServiceFAQs(service: Service) {
  return [
    {
      question: `How much does ${service.name.toLowerCase()} cost?`,
      answer: `Contact us for a free, no-obligation quote. Final pricing depends on your specific pool and equipment. Every quote includes a detailed breakdown with no hidden fees.`,
    },
    {
      question: `How long does ${service.name.toLowerCase()} take?`,
      answer: `The duration depends on your pool's size and condition. Most ${service.category} services are completed in a single visit. We'll provide a time estimate when we assess your specific situation.`,
    },
    {
      question: `Do you offer ${service.name.toLowerCase()} in my area?`,
      answer: `We provide ${service.name.toLowerCase()} throughout San Diego County, including San Diego, Chula Vista, Carlsbad, La Jolla, Escondido, and 20+ other cities across greater San Diego.`,
    },
    {
      question: `Why should I choose PoolLogic for ${service.name.toLowerCase()}?`,
      answer: `With ${company.yearsInBusiness}+ years of experience and ${company.rating.count}+ 5-star reviews, we're San Diego's trusted pool service provider. We use quality parts, provide written estimates, and stand behind our work.`,
    },
    {
      question: `How do I schedule ${service.name.toLowerCase()}?`,
      answer: `Request a free quote online or call us at ${company.phone}. We'll discuss your needs, provide a custom quote, and schedule a convenient appointment.`,
    },
  ];
}

// === Main page component ===

export default async function SlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const resolved = resolveSlug(slug);

  if (!resolved) {
    notFound();
  }

  if (resolved.type === 'city') {
    return <CityPageContent city={resolved.city} />;
  }

  if (resolved.type === 'combo') {
    return <CityServicePageContent service={resolved.service} city={resolved.city} />;
  }

  return <ServicePageContent service={resolved.service} />;
}

// ============================================================
// CITY PAGE CONTENT
// ============================================================

function CityPageContent({ city }: { city: City }) {
  const nearbyCities = getNearbyCities(city.slug);
  const faqs = getCityFAQs(city);

  const localBusinessSchema = generateCityLocalBusinessSchema(city);
  const faqSchema = generateSimpleFAQSchema(faqs);

  return (
    <>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
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
              { name: `${city.name} Pool Service`, url: `/pool-service-${city.slug}/` },
            ]}
          />
        </div>
      </div>

      {/* Hero Section with SEO-optimized H1 */}
      <section className="relative bg-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#88d2c7]/10 via-white to-white" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="max-w-3xl">
            {/* Local badge with geo-signal */}
            <div className="inline-flex items-center gap-2 bg-[#88d2c7]/10 border border-[#88d2c7]/30 rounded-full px-4 py-2 mb-6">
              <svg className="h-5 w-5 text-[#00568c]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              <span className="text-[#00568c] font-medium text-sm">
                Local Pool Service in {city.name}, {city.state} · {city.distanceFromHQ} from HQ
              </span>
            </div>

            {/* H1 - Exact match for "[City] Pool Service" searches */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              {city.name} Pool Service
              <span className="block text-[#00568c]">& Pool Cleaning</span>
            </h1>

            {/* Subheadline with secondary keywords */}
            <p className="text-xl lg:text-2xl text-gray-600 mb-8 leading-relaxed">
              {city.heroDescription}
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
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-600">Licensed & Insured</span>
              </div>
            </div>

            {/* CTA with city name */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <Button href={company.quoteUrl} external size="lg">
                Get Free {city.name} Quote
              </Button>
              <Button href={`tel:${company.phoneRaw}`} variant="outline" size="lg">
                <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                {company.phone}
              </Button>
            </div>

            <p className="text-sm text-gray-500">
              Get a free, five minute quote · CPO-certified technicians · Cancel anytime
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 border-t border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <TrustStats />
        </div>
      </section>

      {/* Introduction with SEO content */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 text-center">
              #1 Rated Pool Cleaning Company in {city.name}, CA
            </h2>
            <div className="prose prose-lg text-gray-600 text-center">
              {city.introContent.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-[#00568c] font-semibold mb-3">WEEKLY {city.name.toUpperCase()} POOL SERVICE</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              What&apos;s Included in {city.name} Pool Cleaning
            </h2>
            <p className="text-lg text-gray-600">
              Complete pool care for {city.name} pools - one price, no hidden charges, all chemicals included.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              {
                title: 'Water Chemistry',
                items: ['Test pH, chlorine & alkalinity', 'Balance all chemicals', `Adjust for ${city.name} water`],
                icon: (
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                ),
              },
              {
                title: 'Surface Cleaning',
                items: ['Skim all debris', 'Brush walls & tiles', 'Vacuum pool floor'],
                icon: (
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                ),
              },
              {
                title: 'Equipment Check',
                items: ['Inspect pump & filter', 'Check for issues', 'Empty baskets'],
                icon: (
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ),
              },
              {
                title: 'Service Report',
                items: ['Photos & notes', 'Chemistry readings', 'Sent after each visit'],
                icon: (
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                ),
              },
            ].map((item) => (
              <div key={item.title} className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-[#88d2c7]/10 rounded-xl flex items-center justify-center text-[#00568c] mb-4">
                  {item.icon}
                </div>
                <h3 className="font-bold text-gray-900 mb-3">{item.title}</h3>
                <ul className="space-y-2">
                  {item.items.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-gray-600">
                      <svg className="h-4 w-4 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center">
            <GuaranteeBadge />
          </div>
        </div>
      </section>

      {/* Local Expertise - with neighborhood SEO */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#00568c] font-semibold mb-3">LOCAL {city.name.toUpperCase()} POOL EXPERTS</p>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Pool Service for Every {city.name} Neighborhood
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                {city.localExpertiseContent}
              </p>
              <p className="text-gray-600 mb-8">
                {city.climateNotes}
              </p>

              <div className="space-y-4">
                {[
                  `Just ${city.distanceFromHQ} from our San Diego headquarters`,
                  `Fast response for ${city.name} pool emergencies`,
                  `Technicians who know ${city.name} neighborhoods`,
                  `Service tailored to ${city.county} County water`,
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="h-4 w-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Neighborhoods served - important for local SEO */}
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-6 text-xl">
                {city.name} Neighborhoods We Service
              </h3>
              <div className="grid grid-cols-1 gap-4">
                {city.neighborhoods.map((neighborhood) => (
                  <div key={neighborhood.name} className="flex items-start gap-3">
                    <svg className="h-5 w-5 text-[#88d2c7] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <span className="font-medium text-gray-900">{neighborhood.name}</span>
                      <p className="text-sm text-gray-500">{neighborhood.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-500 mb-2">{city.name} ZIP codes we serve:</p>
                <p className="font-medium text-gray-700">{city.zipCodes.join(', ')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-20 lg:py-28 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#88d2c7] font-semibold mb-3">WHAT&apos;S INCLUDED IN {city.name.toUpperCase()} POOL SERVICE</p>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Complete Pool Care in {city.name} - No Hidden Fees
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                Your {city.name} pool service includes everything your pool needs - 
                all chemicals, all testing, all cleaning. One simple plan, no surprise charges.
              </p>
              <div className="space-y-4">
                {[
                  'All pool chemicals included in every visit',
                  'CPO-certified technicians - cancel anytime',
                  'Same technician each week for consistency',
                  'Equipment repairs quoted separately',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <svg className="h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white text-gray-900 rounded-2xl p-8">
              <div className="text-center mb-6">
                <p className="text-gray-500 font-medium mb-2">Weekly Pool Service in {city.name}, CA</p>
                <p className="text-2xl font-bold text-gray-900">Everything Your Pool Needs</p>
              </div>

              <ul className="space-y-3 mb-6">
                {[
                  'Weekly cleaning visits',
                  'All chemicals included',
                  'Water testing & balancing',
                  'Equipment inspection',
                  'Service reports after every visit',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-gray-600">
                    <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>

              <Button href={company.quoteUrl} external size="lg" className="w-full justify-center mb-4">
                Get Free {city.name} Pool Quote
              </Button>

              <p className="text-center text-gray-500 text-sm">
                Free custom quote · No commitment · Response within 24 hours
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Available in This City - Internal linking for local SEO */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#00568c] font-semibold tracking-wide uppercase text-sm mb-3">
              Our Services
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Pool Services Available in {city.name}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From weekly cleaning to equipment repairs, we provide complete pool care for {city.name} homeowners.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => {
              const categoryColors: Record<string, string> = {
                maintenance: 'bg-blue-50 text-blue-700',
                repair: 'bg-amber-50 text-amber-700',
                installation: 'bg-green-50 text-green-700',
              };
              return (
                <Link
                  key={service.slug}
                  href={`/${service.urlSlug}/`}
                  className="group bg-white rounded-xl border border-gray-200 p-6 hover:border-[#00568c]/30 hover:shadow-lg transition-all"
                >
                  <span className={`inline-block text-xs font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full mb-3 ${categoryColors[service.category] || 'bg-gray-50 text-gray-700'}`}>
                    {service.category}
                  </span>
                  <h3 className="font-bold text-gray-900 group-hover:text-[#00568c] transition-colors mb-2">
                    {service.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                    {service.shortDescription}
                  </p>
                  <span className="inline-flex items-center text-sm font-semibold text-[#00568c]">
                    Learn more
                    <svg className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#00568c] font-semibold mb-3">{city.name.toUpperCase()} POOL SERVICE REVIEWS</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              What {city.name} Pool Owners Say
            </h2>
            <p className="text-gray-600">
              See why {city.name} homeowners choose PoolLogic Pool Service for pool service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                name: 'Sarah M.',
                neighborhood: city.neighborhoods[0]?.name || city.name,
                text: `Best pool service in ${city.name}! They show up every week like clockwork, and our pool has never looked better. The service reports are great - I always know what was done.`,
              },
              {
                name: 'Michael T.',
                neighborhood: city.neighborhoods[1]?.name || city.name,
                text: `Finally found a reliable ${city.name} pool company. No more chasing down unreliable services. Worth every penny for the peace of mind. Highly recommend!`,
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-6">&ldquo;{testimonial.text}&rdquo;</p>
                <div className="font-semibold text-gray-900">
                  {testimonial.name}
                  <span className="font-normal text-gray-500"> - {testimonial.neighborhood}, {city.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section - Critical for local SEO */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#00568c] font-semibold mb-3">{city.name.toUpperCase()} POOL SERVICE FAQ</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Frequently Asked Questions About Pool Service in {city.name}
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby Cities - Internal linking */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            Pool Service Near {city.name}, California
          </h2>
          <p className="text-gray-600 mb-6">
            We also provide pool cleaning and pool maintenance in these nearby cities:
          </p>
          <div className="flex flex-wrap gap-3">
            {nearbyCities.map((nearbyCity) => (
              <Link
                key={nearbyCity.slug}
                href={`/pool-service-${nearbyCity.slug}/`}
                className="px-4 py-2 bg-gray-100 rounded-full text-gray-700 hover:bg-[#88d2c7]/20 hover:text-[#00568c] transition-colors"
              >
                {nearbyCity.name} Pool Service
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 lg:py-28 bg-[#00568c]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready for Professional Pool Service in {city.name}?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Get a free quote for {city.name} pool cleaning today. CPO-certified technicians, no hidden fees - just crystal-clear water.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Button href={company.quoteUrl} external size="lg" variant="secondary">
              Get Free {city.name} Quote
            </Button>
            <Button href={`tel:${company.phoneRaw}`} variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-[#00568c]">
              <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Call {company.phone}
            </Button>
          </div>

          <p className="text-blue-200 text-sm">
            Serving {city.name}, {city.state} and {city.county} County · {company.rating.count}+ 5-star reviews · Licensed & insured
          </p>
        </div>
      </section>
    </>
  );
}

// ============================================================
// SERVICE PAGE - HOW IT WORKS (per-service)
// ============================================================

interface HowItWorksStep {
  number: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  imageClassName?: string;
  highlight: string;
}

function getServiceSteps(service: Service): HowItWorksStep[] {
  const stepsBySlug: Record<string, HowItWorksStep[]> = {
    'weekly-pool-cleaning': [
      {
        number: '1', title: 'Tell Us About Your Pool',
        description: "Fill out our 2-minute form with your pool size, features, and any concerns. We'll send a customized weekly service quote within 24 hours.",
        image: '/images/pool/phone.jpg', imageAlt: 'Smartphone with pool service quote form on sunny pool deck',
        highlight: '2-minute form',
      },
      {
        number: '2', title: 'We Take Care of Everything',
        description: 'Your dedicated technician arrives at the same time each week to test water, balance chemicals, skim, brush, vacuum, and inspect equipment. You get a detailed digital report after every visit.',
        image: '/images/pool/step-handle-everything.webp', imageAlt: 'Pool technician skimming a residential pool in San Diego',

        highlight: 'Same tech every week',
      },
      {
        number: '3', title: 'Enjoy a Swim-Ready Pool',
        description: 'No more testing strips, chemical runs, or weekend scrubbing. Your pool stays crystal clear, perfectly balanced, and ready whenever you want.',
        image: '/images/pool/step-enjoy-pool.webp', imageAlt: 'Crystal clear pool with floats and tropical landscaping',
        highlight: 'Crystal clear, always',
      },
    ],
    'pool-filter-cleaning': [
      {
        number: '1', title: 'Request a Filter Cleaning',
        description: "Tell us your filter type (cartridge, sand, or DE) and when it was last cleaned. We'll schedule a deep cleaning at a time that works for you.",
        image: '/images/pool/phone.jpg', imageAlt: 'Scheduling a pool filter cleaning service',
        highlight: 'All filter types serviced',
      },
      {
        number: '2', title: 'We Deep-Clean Your Filter',
        description: 'Our tech fully disassembles your filter, chemically soaks and pressure-washes every element, inspects for wear, and reassembles, restoring full filtration capacity.',
        image: '/images/pool/step-handle-everything.webp', imageAlt: 'Pool technician performing filter maintenance',

        highlight: 'Complete disassembly & soak',
      },
      {
        number: '3', title: 'Better Water, Lower Bills',
        description: "A clean filter means crystal-clear water, better circulation, and lower energy costs. You'll notice the difference immediately.",
        image: '/images/pool/step-enjoy-pool.webp', imageAlt: 'Crystal clear pool water after professional filter cleaning',
        highlight: 'Restored filtration capacity',
      },
    ],
    'pool-drain-restart': [
      {
        number: '1', title: 'Tell Us About Your Pool',
        description: "Share your pool size, surface type, and any issues like cloudiness or scaling. We'll provide a detailed quote for a complete drain and restart.",
        image: '/images/pool/phone.jpg', imageAlt: 'Getting a quote for pool draining service',
        highlight: 'Free evaluation',
      },
      {
        number: '2', title: 'We Drain, Clean & Refill',
        description: 'We safely pump out all the old water, pressure-wash every surface, inspect the shell for damage, then refill with fresh water and balance the chemistry.',
        image: '/images/pool/step-handle-everything.webp', imageAlt: 'Pool technician performing drain and restart service',

        highlight: 'Complete surface cleaning',
      },
      {
        number: '3', title: 'A Fresh Start',
        description: "Your pool looks and feels brand new: bright surfaces, balanced water, and zero dissolved solids. It's like swimming in a new pool.",
        image: '/images/pool/step-enjoy-pool.webp', imageAlt: 'Freshly refilled crystal clear pool',
        highlight: 'Like a brand-new pool',
      },
    ],
    'pool-algae-removal': [
      {
        number: '1', title: 'Send Us Photos of the Algae',
        description: "Snap a few pictures of your green pool and fill out our quick form. We'll identify the type (green, mustard, or black algae) and quote a targeted treatment plan.",
        image: '/images/pool/phone.jpg', imageAlt: 'Taking photos of pool algae for treatment quote',
        highlight: 'Targeted treatment plan',
      },
      {
        number: '2', title: 'We Eliminate the Algae',
        description: "Our techs shock-treat, brush, and vacuum until every trace of algae is gone. We clean your filter during treatment and return for follow-up visits as needed. It's all included.",
        image: '/images/pool/step-handle-everything.webp', imageAlt: 'Pool technician treating algae in residential pool',

        highlight: 'Multiple visits included',
      },
      {
        number: '3', title: 'Crystal Clear Again',
        description: "Your pool goes from green to pristine. We rebalance the chemistry and give you a prevention plan so the algae doesn't come back.",
        image: '/images/pool/step-enjoy-pool.webp', imageAlt: 'Crystal clear pool after algae removal treatment',
        highlight: 'Prevention plan included',
      },
    ],
    'hot-tub-cleaning': [
      {
        number: '1', title: 'Tell Us About Your Spa',
        description: "Share your hot tub model, how often you use it, and any issues. We'll put together a maintenance plan tailored to your spa.",
        image: '/images/pool/phone.jpg', imageAlt: 'Getting a quote for hot tub cleaning service',
        highlight: 'Customized for your spa',
      },
      {
        number: '2', title: 'We Handle the Maintenance',
        description: 'Your tech tests and treats the water, cleans the filter, wipes the waterline, checks jets and drains, and verifies the heater and controls are working properly.',
        image: '/images/pool/step-handle-everything.webp', imageAlt: 'Technician maintaining a hot tub',

        highlight: 'Complete spa care',
      },
      {
        number: '3', title: 'Just Relax',
        description: 'Step into perfectly warm, clean, safe water any time you want. No more guessing at chemicals or worrying about bacteria.',
        image: '/images/pool/step-enjoy-pool.webp', imageAlt: 'Clean, inviting hot tub ready for use',
        highlight: 'Always soak-ready',
      },
    ],
    'pool-acid-washing': [
      {
        number: '1', title: 'Describe the Staining',
        description: "Tell us about your pool surface, the type of stains you're seeing, and when the pool was last acid-washed. We'll evaluate and quote the job.",
        image: '/images/pool/phone.jpg', imageAlt: 'Getting a quote for pool acid washing',
        highlight: 'Free stain evaluation',
      },
      {
        number: '2', title: 'We Drain & Acid Wash',
        description: 'We fully drain your pool, carefully apply muriatic acid to strip away stains and discoloration, scrub every surface, then neutralize, refill, and rebalance.',
        image: '/images/pool/step-handle-everything.webp', imageAlt: 'Technician acid washing pool plaster',

        highlight: 'Professional-grade results',
      },
      {
        number: '3', title: 'Bright, Clean Surfaces',
        description: "Your pool plaster looks years younger: bright, smooth, and free of stains. It's the most dramatic transformation in pool care.",
        image: '/images/pool/step-enjoy-pool.webp', imageAlt: 'Pool with bright clean plaster after acid washing',
        highlight: 'Like-new plaster finish',
      },
    ],
    'pool-heater-repair': [
      {
        number: '1', title: 'Describe the Problem',
        description: "Tell us what's happening: no heat, error codes, strange noises, or leaks. We'll schedule a diagnostic visit at your convenience.",
        image: '/images/pool/phone.jpg', imageAlt: 'Scheduling a pool heater repair diagnosis',
        highlight: 'Fast diagnostic scheduling',
      },
      {
        number: '2', title: 'We Diagnose & Fix It',
        description: 'Our technician pinpoints the exact issue (ignition, heat exchanger, thermostat, or controls) and repairs it, often in a single visit. All major brands serviced.',
        image: '/images/pool/step-handle-everything.webp', imageAlt: 'Technician repairing a pool heater',

        highlight: 'Most repairs same-day',
      },
      {
        number: '3', title: 'Warm Water Again',
        description: 'Your pool heater runs reliably again. We test thoroughly after every repair and back our work with a 90-day labor warranty.',
        image: '/images/pool/step-enjoy-pool.webp', imageAlt: 'Warm, inviting pool after heater repair',
        highlight: '90-day labor warranty',
      },
    ],
    'pool-pump-repair': [
      {
        number: '1', title: 'Tell Us What\'s Wrong',
        description: "Noisy motor? Leaking water? Not priming? Describe the symptoms and we'll get a technician to you fast.",
        image: '/images/pool/phone.jpg', imageAlt: 'Requesting pool pump repair service',
        highlight: 'Same-day available',
      },
      {
        number: '2', title: 'We Repair Your Pump',
        description: 'Our tech diagnoses the problem (motor, seal, impeller, or capacitor) and completes the repair with quality replacement parts.',
        image: '/images/pool/step-handle-everything.webp', imageAlt: 'Technician repairing a pool pump',

        highlight: 'Quality OEM parts',
      },
      {
        number: '3', title: 'Circulation Restored',
        description: "Your pump runs quietly and efficiently again. We also check if a variable-speed upgrade could save you money on energy.",
        image: '/images/pool/step-enjoy-pool.webp', imageAlt: 'Pool with proper water circulation after pump repair',
        highlight: '90-day labor warranty',
      },
    ],
    'pool-filter-repair': [
      {
        number: '1', title: 'Describe the Issue',
        description: "Cloudy water? High pressure reading? Leaking tank? Tell us what's going on and we'll schedule a repair visit.",
        image: '/images/pool/phone.jpg', imageAlt: 'Requesting pool filter repair service',
        highlight: 'Fast scheduling',
      },
      {
        number: '2', title: 'We Fix Your Filter',
        description: "Whether it's a cracked tank, failed multiport valve, or worn internal parts, we diagnose it and repair it. Cartridge, sand, and DE filters.",
        image: '/images/pool/step-handle-everything.webp', imageAlt: 'Technician repairing a pool filter system',

        highlight: 'All filter types',
      },
      {
        number: '3', title: 'Clear Water Again',
        description: "Proper filtration is restored, water clarity improves immediately, and your pump isn't straining against a broken filter anymore.",
        image: '/images/pool/step-enjoy-pool.webp', imageAlt: 'Clear pool water after filter repair',
        highlight: 'Flow verified after repair',
      },
    ],
    'pool-light-repair': [
      {
        number: '1', title: 'Tell Us About the Light',
        description: "Flickering, dim, or completely out? Let us know which lights are affected and we'll schedule a safe electrical diagnosis.",
        image: '/images/pool/phone.jpg', imageAlt: 'Requesting pool light repair service',
        highlight: 'Safe electrical testing',
      },
      {
        number: '2', title: 'We Repair or Upgrade',
        description: 'Our tech tests the bulb, fixture, transformer, and wiring, then makes the repair. We also offer energy-efficient LED upgrades.',
        image: '/images/pool/step-handle-everything.webp', imageAlt: 'Technician repairing underwater pool light',

        highlight: 'LED upgrades available',
      },
      {
        number: '3', title: 'Beautiful Nighttime Pool',
        description: 'Your pool glows again with bright, reliable lighting. Enjoy safe nighttime swims and stunning backyard ambiance.',
        image: '/images/pool/step-enjoy-pool.webp', imageAlt: 'Beautifully lit pool at night',
        highlight: 'GFCI safety verified',
      },
    ],
    'pool-automation-repair': [
      {
        number: '1', title: 'Describe the Issue',
        description: "App not connecting? Controller unresponsive? Valves not turning? Tell us what's happening with your automation system.",
        image: '/images/pool/phone.jpg', imageAlt: 'Requesting pool automation repair service',
        highlight: 'All major brands',
      },
      {
        number: '2', title: 'We Diagnose & Repair',
        description: 'Our automation specialists troubleshoot Pentair, Hayward, and Jandy systems: controllers, actuators, sensors, and app connectivity.',
        image: '/images/pool/step-handle-everything.webp', imageAlt: 'Technician repairing pool automation controller',

        highlight: 'Firmware updates included',
      },
      {
        number: '3', title: 'Full Control Restored',
        description: 'Manage your pump, heater, lights, and water features from your phone again. We verify every function and walk you through any changes.',
        image: '/images/pool/step-enjoy-pool.webp', imageAlt: 'Smart pool control from smartphone',
        highlight: 'User training included',
      },
    ],
    'salt-water-pool-repair': [
      {
        number: '1', title: 'Describe the Problem',
        description: "Low chlorine output? Error lights? Salt readings off? Tell us what your salt system is doing and we'll schedule a diagnosis.",
        image: '/images/pool/phone.jpg', imageAlt: 'Requesting salt water pool system repair',
        highlight: 'All salt system brands',
      },
      {
        number: '2', title: 'We Fix Your Salt System',
        description: 'Our tech inspects the salt cell for scaling, tests the control board and flow sensor, and makes the repair to restore automatic chlorination.',
        image: '/images/pool/step-handle-everything.webp', imageAlt: 'Technician servicing a salt chlorine generator',

        highlight: 'Cell cleaning included',
      },
      {
        number: '3', title: 'Auto Chlorination Restored',
        description: 'Your salt system generates chlorine reliably again. We verify output levels and give you tips to extend cell life.',
        image: '/images/pool/step-enjoy-pool.webp', imageAlt: 'Salt water pool with crystal clear water',
        highlight: 'Maintenance tips included',
      },
    ],
    'pool-heater-installation': [
      {
        number: '1', title: 'Tell Us Your Heating Needs',
        description: "Share your pool size, how warm you want the water, and your budget. We'll recommend the right heater (gas, heat pump, or solar) and provide a detailed quote.",
        image: '/images/pool/phone.jpg', imageAlt: 'Getting a quote for pool heater installation',
        highlight: 'Expert sizing consultation',
      },
      {
        number: '2', title: 'Professional Installation',
        description: 'We install your new heater to code, connect it to your plumbing and gas or electrical, integrate with existing automation, and test everything thoroughly.',
        image: '/images/pool/step-handle-everything.webp', imageAlt: 'Technician installing a new pool heater',

        highlight: 'Code-compliant installation',
      },
      {
        number: '3', title: 'Year-Round Swimming',
        description: 'Enjoy your pool in any season. Your new heater provides efficient, reliable warmth whenever you want it.',
        image: '/images/pool/step-enjoy-pool.webp', imageAlt: 'Warm inviting pool heated year-round',
        highlight: 'Manufacturer warranty included',
      },
    ],
    'pool-pump-installation': [
      {
        number: '1', title: 'Evaluate Your Current Setup',
        description: "We assess your existing pump, plumbing, and electrical to recommend the right variable-speed pump for your pool and check for utility rebates.",
        image: '/images/pool/phone.jpg', imageAlt: 'Getting a quote for pool pump installation',
        highlight: 'Rebate assistance included',
      },
      {
        number: '2', title: 'We Install & Program',
        description: 'Out with the old, in with the new. We install your energy-efficient pump, wire it properly, and program optimal speed schedules for your pool.',
        image: '/images/pool/step-handle-everything.webp', imageAlt: 'Technician installing a variable-speed pool pump',

        highlight: 'Proper speed programming',
      },
      {
        number: '3', title: 'Lower Bills, Quieter Pool',
        description: 'Your new variable-speed pump cuts energy use by up to 80% while running quieter and providing better filtration through longer, slower cycles.',
        image: '/images/pool/step-enjoy-pool.webp', imageAlt: 'Efficient pool with new variable-speed pump',
        highlight: 'Up to 80% energy savings',
      },
    ],
    'pool-filter-installation': [
      {
        number: '1', title: 'Tell Us Your Filtration Needs',
        description: "We evaluate your pool volume, usage, and water quality goals to recommend the right filter type (cartridge, sand, or DE) and provide a quote.",
        image: '/images/pool/phone.jpg', imageAlt: 'Getting a quote for pool filter installation',
        highlight: 'Right filter for your pool',
      },
      {
        number: '2', title: 'Professional Installation',
        description: 'We remove your old filter, install the new one with proper plumbing connections, and run the break-in procedure to ensure optimal performance.',
        image: '/images/pool/step-handle-everything.webp', imageAlt: 'Technician installing a new pool filter',

        highlight: 'Includes old filter removal',
      },
      {
        number: '3', title: 'Crystal Clear Water',
        description: "Your new filter provides superior filtration with less maintenance. You'll notice the difference in water clarity from the very first day.",
        image: '/images/pool/step-enjoy-pool.webp', imageAlt: 'Crystal clear pool water from new filter',
        highlight: 'Better clarity, less work',
      },
    ],
    'pool-automation-installation': [
      {
        number: '1', title: 'Design Your Smart Pool',
        description: "Tell us what you want to control (pump, heater, lights, water features) and we'll design a system with the right automation package for your setup.",
        image: '/images/pool/phone.jpg', imageAlt: 'Planning a smart pool automation system',
        highlight: 'Custom system design',
      },
      {
        number: '2', title: 'We Install & Configure',
        description: 'Our techs install the controller, wire every component, program schedules and scenes, set up the mobile app, and walk you through everything.',
        image: '/images/pool/step-handle-everything.webp', imageAlt: 'Technician installing pool automation system',

        highlight: 'App setup included',
      },
      {
        number: '3', title: 'Control From Anywhere',
        description: 'Adjust your pool from your phone, set schedules, and save energy, all from the couch or across the country. Works with Alexa and Google Home.',
        image: '/images/pool/step-enjoy-pool.webp', imageAlt: 'Controlling pool from smartphone app',
        highlight: 'Works with Alexa & Google',
      },
    ],
  };

  return stepsBySlug[service.slug] || [
    {
      number: '1', title: 'Request a Quote',
      description: `No two pools are the same, and your quote shouldn't be either. Tell us about your ${service.category === 'maintenance' ? 'pool' : 'pool equipment'} and we'll have a personalized estimate ready in minutes.`,
      image: '/images/pool/phone.jpg', imageAlt: 'Requesting a pool service quote',
      highlight: 'Free quote in 24 hours',
    },
    {
      number: '2', title: 'We Handle the Service',
      description: `Our CPO-certified technicians arrive on time and complete the ${service.name.toLowerCase()} professionally. We keep you updated every step of the way.`,
      image: '/images/pool/step-handle-everything.webp', imageAlt: 'Pool technician performing service',

      highlight: 'CPO-certified technicians',
    },
    {
      number: '3', title: 'Enjoy the Results',
      description: `Your ${service.category === 'maintenance' ? 'pool is clean, balanced, and swim-ready' : 'equipment works like new'}. We guarantee your satisfaction.`,
      image: '/images/pool/step-enjoy-pool.webp', imageAlt: 'Beautiful crystal clear pool',
      highlight: '100% satisfaction guaranteed',
    },
  ];
}

// ============================================================
// SERVICE PAGE CONTENT
// ============================================================

function ServicePageContent({ service }: { service: Service }) {
  const faqs = getServiceFAQs(service);
  const primaryCities = getPrimaryCities().slice(0, 12);
  const relatedServices = service.relatedServices
    ?.map((s) => getServiceBySlug(s))
    .filter(Boolean) as Service[];

  const serviceSchema = generateServiceSchema(service);
  const faqSchema = generateSimpleFAQSchema(faqs);

  const categoryConfig = {
    maintenance: {
      bg: 'bg-[#00568c]',
      light: 'bg-[#88d2c7]/20',
      text: 'text-[#00568c]',
      border: 'border-[#88d2c7]/30',
      label: 'Maintenance Service'
    },
    repair: {
      bg: 'bg-emerald-600',
      light: 'bg-emerald-50',
      text: 'text-emerald-600',
      border: 'border-emerald-200',
      label: 'Repair Service'
    },
    installation: {
      bg: 'bg-violet-600',
      light: 'bg-violet-50',
      text: 'text-violet-600',
      border: 'border-violet-200',
      label: 'Installation Service'
    },
  };
  const config = categoryConfig[service.category];

  return (
    <>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
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
              { name: 'Services', url: '/services/' },
              { name: service.name, url: `/${service.urlSlug}/` },
            ]}
          />
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-white" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="max-w-3xl">
            {/* Category badge */}
            <div className={`inline-flex items-center gap-2 ${config.light} ${config.border} border rounded-full px-4 py-2 mb-6`}>
              <svg className={`h-5 w-5 ${config.text}`} fill="currentColor" viewBox="0 0 20 20">
                {service.category === 'maintenance' && (
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                )}
                {service.category === 'repair' && (
                  <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                )}
                {service.category === 'installation' && (
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                )}
              </svg>
              <span className={`${config.text} font-medium text-sm`}>
                {config.label}
              </span>
            </div>

            {/* H1 */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              {service.name}
            </h1>

            {/* Value prop */}
            <p className="text-xl lg:text-2xl text-gray-600 mb-6 leading-relaxed">
              {service.shortDescription}
            </p>

            {/* Value badge */}
            <div className="inline-flex items-center gap-3 bg-gray-900 text-white rounded-full px-5 py-3 mb-8">
              <svg className="h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium">Free Custom Quote - CPO-Certified Technicians</span>
            </div>

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
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-600">Licensed & Insured</span>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
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

      {/* Problem/Solution Section */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-[#00568c] font-semibold mb-3">WHY THIS MATTERS</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              The problem we solve
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Problem */}
            <div className="bg-red-50 border border-red-100 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                  <svg className="h-6 w-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">The Problem</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">{service.problemStatement}</p>
            </div>

            {/* Solution */}
            <div className={`${config.light} ${config.border} border rounded-2xl p-8`}>
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-12 h-12 ${config.bg} rounded-xl flex items-center justify-center`}>
                  <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Our Solution</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">{service.solutionStatement}</p>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className={`${config.text} font-semibold mb-3`}>WHAT&apos;S INCLUDED</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Everything you get
            </h2>
            <p className="text-lg text-gray-600">
              {service.longDescription}
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {service.features.map((feature, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <div className={`w-10 h-10 ${config.light} rounded-xl flex items-center justify-center ${config.text} mb-4`}>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Includes List */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="font-bold text-gray-900 mb-6 text-center">Every Service Includes:</h3>
            <ul className="space-y-4">
              {service.includes.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className={`w-6 h-6 ${config.bg} rounded-full flex items-center justify-center flex-shrink-0 mt-0.5`}>
                    <svg className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center mt-12">
            <GuaranteeBadge />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 lg:py-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
            <p className="text-[#00568c] font-semibold tracking-wide uppercase text-sm mb-3">
              How It Works
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Simple process, great results
            </h2>
            <p className="text-lg text-gray-600">
              From quote to completion, we make {service.name.toLowerCase()} easy.
            </p>
          </div>

          <div className="space-y-16 lg:space-y-24">
            {getServiceSteps(service).map((step, index) => {
              const isReversed = index % 2 !== 0;
              return (
                <div
                  key={step.number}
                  className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-8 lg:gap-16`}
                >
                  {/* Image side */}
                  <div className="w-full lg:w-1/2">
                    <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
                      <Image
                        src={step.image}
                        alt={step.imageAlt}
                        fill
                        className={step.imageClassName || 'object-cover'}
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                      <div className="absolute top-5 left-5 flex items-center justify-center w-12 h-12 rounded-full bg-[#00568c] text-white text-xl font-bold shadow-lg">
                        {step.number}
                      </div>
                    </div>
                  </div>

                  {/* Content side */}
                  <div className="w-full lg:w-1/2">
                    <div className="max-w-lg">
                      <span className="inline-block text-xs font-semibold tracking-wider uppercase text-[#00568c] bg-[#00568c]/10 px-3 py-1 rounded-full mb-4">
                        Step {step.number}
                      </span>
                      <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 text-lg leading-relaxed mb-5">
                        {step.description}
                      </p>
                      <div className="flex items-center gap-2 text-[#00568c] font-semibold">
                        <svg
                          className="h-5 w-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {step.highlight}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-16 lg:mt-20">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href={company.quoteUrl} external size="lg">
                Get Your Free Quote
              </Button>
              <Button href={`tel:${company.phoneRaw}`} variant="outline" size="lg">
                <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                Call {company.phone}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-20 lg:py-28 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#88d2c7] font-semibold mb-3">WHAT&apos;S INCLUDED</p>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Know exactly what you&apos;re getting
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                No hidden fees, no surprise charges. We provide detailed written estimates
                before any work begins so you know exactly what to expect.
              </p>
              <div className="space-y-4">
                {[
                  'Free, no-obligation custom quotes',
                  'Written estimates before work begins',
                  'All chemicals and materials included',
                  'Quality parts with warranty',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <svg className="h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white text-gray-900 rounded-2xl p-8">
              <div className="text-center mb-6">
                <p className="text-gray-500 font-medium mb-2">{service.name}</p>
                <p className="text-2xl font-bold text-gray-900">Get a Free Custom Quote</p>
                <p className="text-gray-500 text-sm mt-2">Tailored to your pool and equipment</p>
              </div>

              <Button href={company.quoteUrl} external size="lg" className="w-full justify-center mb-4">
                Get Your Free Quote
              </Button>

              <p className="text-center text-gray-500 text-sm">
                Free quote · No commitment required
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <GuaranteeSection />

      {/* FAQ Section */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#00568c] font-semibold mb-3">FAQ</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Common questions about {service.name.toLowerCase()}
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6">
            {service.name} available in these areas
          </h2>
          <div className="flex flex-wrap gap-3">
            {primaryCities.map((city) => (
              <Link
                key={city.slug}
                href={`/pool-service-${city.slug}/`}
                className="px-4 py-2 bg-gray-100 rounded-full text-gray-700 hover:bg-[#88d2c7]/20 hover:text-[#00568c] transition-colors"
              >
                {city.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      {relatedServices && relatedServices.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl font-bold text-gray-900 mb-8">
              Related Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedServices.map((related) => {
                const relatedConfig = categoryConfig[related.category];
                return (
                  <Link
                    key={related.slug}
                    href={`/${related.urlSlug}/`}
                    className="group bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg hover:border-gray-300 transition-all"
                  >
                    <span className={`inline-block px-3 py-1 ${relatedConfig.light} ${relatedConfig.text} text-xs font-medium rounded-full mb-3 capitalize`}>
                      {related.category}
                    </span>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#00568c] transition-colors">
                      {related.name}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-2">{related.shortDescription}</p>
                    <div className="mt-4 text-sm font-medium text-[#00568c]">
                      Get a Free Quote
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Related Articles - Internal linking to blog content */}
      {(() => {
        const topicMap: Record<string, string[]> = {
          'weekly-pool-cleaning': ['pool-cleaning', 'general'],
          'pool-filter-cleaning': ['pool-filter'],
          'pool-drain-restart': ['pool-drain'],
          'pool-algae-removal': ['pool-algae'],
          'hot-tub-cleaning': ['hot-tub'],
          'pool-acid-washing': ['pool-cleaning', 'pool-algae'],
          'pool-heater-repair': ['pool-heater'],
          'pool-pump-repair': ['pool-pump'],
          'pool-filter-repair': ['pool-filter'],
          'pool-light-repair': ['pool-light'],
          'pool-automation-repair': ['pool-automation'],
          'salt-water-pool-repair': ['saltwater'],
          'pool-heater-installation': ['pool-heater'],
          'pool-pump-installation': ['pool-pump'],
          'pool-filter-installation': ['pool-filter'],
          'pool-automation-installation': ['pool-automation'],
        };
        const topics = topicMap[service.slug] || [];
        const keywords = service.slug.split('-').filter((w) => w !== 'pool' && w.length > 2);
        const relatedPosts = posts
          .filter((p) => {
            const slugMatch = topics.some((t) => p.slug.includes(t));
            const keywordMatch = keywords.some((k) => p.slug.includes(k) || p.title.toLowerCase().includes(k));
            return slugMatch || keywordMatch;
          })
          .sort((a, b) => parseInt(b.readTime) - parseInt(a.readTime))
          .slice(0, 4);

        if (relatedPosts.length === 0) return null;

        return (
          <section className="py-20 lg:py-28">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <p className="text-[#00568c] font-semibold tracking-wide uppercase text-sm mb-3">
                  Resources
                </p>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  Learn More About {service.name}
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Expert tips and guides from our CPO-certified technicians.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {relatedPosts.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/resources/${post.slug}/`}
                    className="group flex flex-col bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg hover:border-[#00568c]/30 transition-all"
                  >
                    {post.image && (
                      <div className="relative aspect-[2/1] overflow-hidden">
                        <Image
                          src={post.image}
                          alt={post.imageAlt || post.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                    )}
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
                        <span>{post.readTime} read</span>
                        <span className="text-gray-300">·</span>
                        <span>{post.categoryName}</span>
                      </div>
                      <h3 className="font-bold text-gray-900 group-hover:text-[#00568c] transition-colors mb-2 line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-sm text-gray-600 line-clamp-2 mb-4 flex-1">
                        {post.excerpt}
                      </p>
                      <span className="inline-flex items-center text-sm font-semibold text-[#00568c]">
                        Read article
                        <svg className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </Link>
                ))}
              </div>

              <div className="text-center mt-10">
                <Link
                  href="/resources/"
                  className="inline-flex items-center text-[#00568c] font-semibold hover:underline"
                >
                  View all articles
                  <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </section>
        );
      })()}

      {/* Final CTA */}
      <section className="py-20 lg:py-28 bg-[#00568c]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to get started?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Get a free, no-obligation quote for {service.name.toLowerCase()}.
            Most quotes provided within 24 hours.
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
            Bonded & insured · {company.rating.count}+ 5-star reviews · Serving San Diego County
          </p>
        </div>
      </section>
    </>
  );
}

// ============================================================
// CITY + SERVICE COMBO PAGE
// ============================================================

function CityServicePageContent({ service, city }: { service: Service; city: City }) {
  const comboSlug = getComboUrlSlug(service, city);
  const comboFaqs = getComboFAQs(service, city);
  const comboIntro = getComboIntro(service, city);
  const nearbyCities = getNearbyCities(city.slug);
  const serviceSchema = generateServiceSchema(service);
  const faqSchema = generateSimpleFAQSchema(comboFaqs);

  // Get related blog posts for this service topic
  const topicKeywords = service.name.toLowerCase().split(' ');
  const relatedBlogPosts = posts
    .filter((p: BlogPost) => topicKeywords.some((kw) => p.title.toLowerCase().includes(kw)))
    .slice(0, 3);

  return (
    <>
      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
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
              { name: `${city.name} Pool Service`, url: `/pool-service-${city.slug}/` },
              { name: service.name, url: `/${comboSlug}/` },
            ]}
          />
        </div>
      </div>

      {/* Hero */}
      <section className="relative bg-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#88d2c7]/10 via-white to-white" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[#88d2c7]/10 border border-[#88d2c7]/30 rounded-full px-4 py-2 mb-6">
              <svg className="h-5 w-5 text-[#00568c]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              <span className="text-[#00568c] font-medium text-sm">
                {service.name} in {city.name}, {city.state}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              {service.name}
              <span className="block text-[#00568c]">in {city.name}, CA</span>
            </h1>

            <p className="text-xl lg:text-2xl text-gray-600 mb-8 leading-relaxed">
              {service.shortDescription} Serving {city.name} and all of San Diego County.
            </p>

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

            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <Button href={company.quoteUrl} external size="lg">
                Get Free {city.name} Quote
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

      {/* Intro Content */}
      <section className="py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Professional {service.name} in {city.name}
          </h2>
          <p className="text-lg text-gray-600 text-center leading-relaxed">
            {comboIntro}
          </p>
        </div>
      </section>

      {/* Service Features */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            What&apos;s Included
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.features.map((feature) => (
              <div key={feature.title} className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Neighborhoods */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {service.name} Across {city.name}
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                We provide {service.name.toLowerCase()} to every neighborhood in {city.name}. Our technicians
                know the area and can reach you quickly for scheduled service or urgent repairs.
              </p>
              <p className="text-gray-600">
                {city.climateNotes}
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-6 text-xl">
                {city.name} Neighborhoods We Serve
              </h3>
              <div className="grid grid-cols-1 gap-3">
                {city.neighborhoods.map((n) => (
                  <div key={n.name} className="flex items-center gap-3">
                    <svg className="h-5 w-5 text-[#88d2c7] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{n.name}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-500 mb-1">ZIP codes we serve in {city.name}:</p>
                <p className="font-medium text-gray-700">{city.zipCodes.join(', ')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            {service.name} in {city.name} FAQ
          </h2>
          <div className="space-y-4">
            {comboFaqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Blog Posts */}
      {relatedBlogPosts.length > 0 && (
        <section className="py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {service.name} Resources
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedBlogPosts.map((post: BlogPost) => (
                <Link
                  key={post.slug}
                  href={`/resources/${post.slug}/`}
                  className="group bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow"
                >
                  <h3 className="font-semibold text-gray-900 group-hover:text-[#00568c] transition-colors mb-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-2 mb-3">{post.excerpt}</p>
                  <span className="text-xs text-gray-500">{post.readTime}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Other Services in This City */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Other Pool Services in {city.name}
          </h2>
          <div className="flex flex-wrap gap-3">
            <Link
              href={`/pool-service-${city.slug}/`}
              className="px-4 py-2 bg-white border border-gray-200 rounded-full text-gray-700 hover:border-[#00568c] hover:text-[#00568c] transition-colors text-sm"
            >
              All {city.name} Pool Services
            </Link>
            {services
              .filter((s) => s.slug !== service.slug)
              .slice(0, 8)
              .map((s) => (
                <Link
                  key={s.slug}
                  href={`/${s.urlSlug}/`}
                  className="px-4 py-2 bg-white border border-gray-200 rounded-full text-gray-700 hover:border-[#00568c] hover:text-[#00568c] transition-colors text-sm"
                >
                  {s.name}
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* Nearby Cities */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            {service.name} Near {city.name}
          </h2>
          <p className="text-gray-600 mb-6">
            We also provide {service.name.toLowerCase()} in nearby cities:
          </p>
          <div className="flex flex-wrap gap-3">
            {nearbyCities.map((nc) => (
              <Link
                key={nc.slug}
                href={`/pool-service-${nc.slug}/`}
                className="px-4 py-2 bg-gray-100 rounded-full text-gray-700 hover:bg-[#88d2c7]/20 hover:text-[#00568c] transition-colors"
              >
                {nc.name} Pool Service
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-[#00568c]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Get {service.name} in {city.name} Today
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Free quote, no commitment. CPO-certified technicians ready to serve your {city.name} pool.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href={company.quoteUrl} external size="lg" variant="secondary">
              Get Free {city.name} Quote
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
