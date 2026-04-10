import { Metadata } from 'next';
import Link from 'next/link';
import { company } from '@/data/company';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { Button } from '@/components/ui/Button';
import { generateSimpleFAQSchema } from '@/lib/schema/faq';

const PAGE_URL = `${company.url}/emergency-pool-service-san-diego/`;

export const metadata: Metadata = {
  title: 'Emergency Pool Service San Diego | Same-Day Response | PoolLogic',
  description: `Emergency pool service in San Diego. Same-day response for green pools, equipment failures, leaks, and safety issues. Call ${company.phone} now. ${company.rating.count}+ 5-star reviews.`,
  keywords: [
    'emergency pool service san diego',
    'emergency pool repair san diego',
    'pool emergency near me',
    'green pool cleanup san diego',
    'pool pump emergency',
    'pool leak emergency',
    'same day pool service san diego',
  ],
  openGraph: {
    title: 'Emergency Pool Service San Diego | Same-Day Response',
    description: `Pool emergency? We respond same-day for equipment failures, green pools, leaks, and safety concerns. Call ${company.phone}.`,
    type: 'website',
    url: PAGE_URL,
    siteName: company.name,
  },
  alternates: { canonical: PAGE_URL },
};

const faqs = [
  {
    question: 'What counts as a pool emergency?',
    answer: 'A pool emergency includes any situation that poses a safety risk or will cause significant damage if not addressed quickly: equipment failures (pump, heater), major leaks, green/cloudy water from chemical imbalance, electrical issues with pool lights, broken drain covers, and structural damage.',
  },
  {
    question: 'How fast can you respond to a pool emergency in San Diego?',
    answer: 'We offer same-day response for pool emergencies during business hours (Mon-Sun, 8AM-5PM). For urgent calls, we prioritize scheduling and can often be on-site within hours. Call (619) 913-9335 for immediate assistance.',
  },
  {
    question: 'How much does emergency pool service cost?',
    answer: 'Emergency pool service pricing depends on the issue. We provide a diagnosis and quote before performing any work. There are no surprise fees — you approve the cost before we start. Current customers receive priority emergency scheduling.',
  },
  {
    question: 'Do you offer emergency pool service on weekends?',
    answer: 'Yes, we are open 7 days a week, 8AM-5PM, including weekends. Pool emergencies don\'t wait for Monday, and neither do we. Call (619) 913-9335 any day of the week.',
  },
  {
    question: 'What should I do while waiting for emergency pool service?',
    answer: 'For equipment failures: turn off the affected equipment at the breaker if safe to do so. For green pools: keep the pump running if it\'s working. For leaks: note the water level and mark it. For electrical issues: do NOT enter the water and turn off pool equipment at the main breaker.',
  },
];

const faqSchema = generateSimpleFAQSchema(faqs);

const emergencies = [
  {
    title: 'Equipment Failure',
    description: 'Pump not running, heater malfunction, filter system failure, or automation errors. We diagnose and repair all major brands.',
    urgent: true,
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: 'Green Pool / Algae Outbreak',
    description: 'Pool turned green overnight? Heavy algae growth needs immediate shock treatment before it gets worse and damages your equipment.',
    urgent: true,
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
  {
    title: 'Pool Leak',
    description: 'Losing water faster than evaporation? Leaks can cause structural damage and high water bills. We locate and repair pool and equipment leaks.',
    urgent: false,
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" />
      </svg>
    ),
  },
  {
    title: 'Electrical / Safety Issue',
    description: 'Tingling sensation near pool, tripped GFCI, sparking, or malfunctioning lights. Safety issues require immediate professional attention.',
    urgent: true,
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: 'Chemical Emergency',
    description: 'Extremely high or low chlorine, dangerous pH levels, or cloudy water making the pool unsafe for swimming. We restore safe water chemistry.',
    urgent: false,
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4.5c-.77-.833-2.694-.833-3.464 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
      </svg>
    ),
  },
  {
    title: 'Storm / Weather Damage',
    description: 'Santa Ana winds, rare rainstorms, or debris damage to your pool area. We handle cleanup, water rebalancing, and equipment checks.',
    urgent: false,
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
  },
];

export default function EmergencyPage() {
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
              { name: 'Emergency Pool Service', url: '/emergency-pool-service-san-diego/' },
            ]}
          />
        </div>
      </div>

      {/* Hero - Urgent feel */}
      <section className="bg-gradient-to-br from-red-700 to-red-900 text-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 mb-6">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-400"></span>
              </span>
              <span className="text-sm font-medium">Available Now &mdash; Open 7 Days a Week</span>
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Emergency Pool Service<br />in San Diego
            </h1>
            <p className="text-xl text-red-100 mb-8">
              Pool emergency? We respond same-day. Equipment failures, green pools, leaks,
              and safety issues — our CPO-certified technicians are ready to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href={`tel:${company.phoneRaw}`} size="lg" variant="secondary">
                <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                Call Now: {company.phone}
              </Button>
              <Button href={company.quoteUrl} external size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-red-700">
                Request Emergency Service
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What We Handle */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Pool Emergencies We Handle
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From equipment breakdowns to safety hazards, we have the expertise and parts
              to resolve your pool emergency quickly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {emergencies.map((emergency) => (
              <div
                key={emergency.title}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 ${emergency.urgent ? 'bg-red-50 text-red-600' : 'bg-amber-50 text-amber-600'}`}>
                    {emergency.icon}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-bold text-gray-900">{emergency.title}</h3>
                      {emergency.urgent && (
                        <span className="text-xs font-medium bg-red-100 text-red-700 px-2 py-0.5 rounded-full">Urgent</span>
                      )}
                    </div>
                    <p className="text-sm text-gray-600">{emergency.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to Do During Emergency */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            What to Do During a Pool Emergency
          </h2>

          <div className="space-y-6">
            {[
              {
                step: '1',
                title: 'Ensure Safety First',
                description: 'Keep everyone out of the pool. If there\'s an electrical issue, turn off pool equipment at the main breaker. Do not enter the water if you suspect any electrical problem.',
              },
              {
                step: '2',
                title: 'Call Us Immediately',
                description: `Call ${company.phone} and describe what's happening. Our team will assess the urgency and schedule the fastest possible response. We're available 7 days a week.`,
              },
              {
                step: '3',
                title: 'Document the Issue',
                description: 'Take photos or videos of the problem if it\'s safe to do so. Note any error codes on equipment displays. This helps our technician prepare the right parts and tools.',
              },
              {
                step: '4',
                title: 'We Arrive and Resolve',
                description: 'Our CPO-certified technician arrives with common replacement parts, tests and diagnoses the problem, provides a quote, and gets your approval before starting the repair.',
              },
            ].map((step) => (
              <div key={step.step} className="flex gap-6 bg-white rounded-xl p-6 border border-gray-200">
                <div className="w-10 h-10 bg-[#00568c] text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                  {step.step}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Why Choose PoolLogic for Emergency Service
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Same-Day Response', description: 'We prioritize emergencies and respond the same day during business hours.' },
              { title: 'Open 7 Days', description: `Available ${company.hoursDisplay}. Pool emergencies don't wait for Monday.` },
              { title: 'All Major Brands', description: 'Pentair, Hayward, Jandy, Raypak, Sta-Rite — we service and repair them all.' },
              { title: 'No Surprise Fees', description: 'We diagnose the issue and give you a clear quote before any work begins.' },
            ].map((item) => (
              <div key={item.title} className="text-center p-6">
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Emergency Pool Service FAQ
          </h2>
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

      {/* Service Area */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Emergency Pool Service Throughout San Diego County
          </h2>
          <p className="text-gray-600 mb-6">
            We provide emergency pool service in all cities we serve across San Diego County:
          </p>
          <div className="flex flex-wrap gap-3">
            {['San Diego', 'Chula Vista', 'Carlsbad', 'Oceanside', 'Escondido', 'El Cajon', 'La Jolla', 'La Mesa', 'Poway', 'Encinitas', 'San Marcos', 'Del Mar', 'Santee', 'National City'].map((city) => (
              <span
                key={city}
                className="px-4 py-2 bg-gray-100 rounded-full text-gray-700 text-sm"
              >
                {city}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 lg:py-28 bg-red-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Pool Emergency? Call Now.
          </h2>
          <p className="text-xl text-red-100 mb-8">
            Don&apos;t wait — the longer a pool emergency goes unaddressed, the more
            expensive it becomes. Our team is ready to help today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href={`tel:${company.phoneRaw}`} size="lg" variant="secondary">
              <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              {company.phone}
            </Button>
            <Button href={company.quoteUrl} external size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-red-700">
              Request Emergency Service
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
