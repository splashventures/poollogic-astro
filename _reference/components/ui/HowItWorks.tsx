'use client';

import Image from 'next/image';
import { company } from '@/data/company';
import { Button } from './Button';

const steps = [
  {
    number: '1',
    title: 'Get your free quote',
    description:
      "No two pools are the same, and your quote shouldn't be either. Tell us about your pool and we'll have a personalized estimate ready in minutes.",
    image: '/images/pool/phone.jpg',
    imageAlt: 'Smartphone with quote form, sunglasses and drink on sunny pool deck',
    highlight: '2-minute form',
  },
  {
    number: '2',
    title: 'We handle everything',
    description:
      'Your dedicated technician arrives weekly at the same time. We test, balance, clean, and inspect, then send you a detailed report.',
    image: '/images/pool/step-handle-everything.webp',
    imageAlt: 'Pool technician with pole servicing residential pool in San Diego',
    highlight: 'Same tech every week',
  },
  {
    number: '3',
    title: 'Enjoy your pool',
    description:
      'Spend your time swimming, not maintaining. Your pool stays crystal clear, safe, and ready whenever you want.',
    image: '/images/pool/step-enjoy-pool.webp',
    imageAlt: 'Beautiful crystal clear pool with floats and tropical landscaping',
    highlight: 'Crystal clear, always',
  },
];

export function HowItWorksSection() {
  return (
    <section className="py-20 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <p className="text-[#00568c] font-semibold tracking-wide uppercase text-sm mb-3">
            How It Works
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Professional pool care in 3 simple steps
          </h2>
          <p className="text-lg text-gray-600">
            CPO-certified technicians, no hassle. Just crystal-clear water and
            your weekends back.
          </p>
        </div>

        {/* Steps - alternating rows */}
        <div className="space-y-16 lg:space-y-24">
          {steps.map((step, index) => {
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
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    {/* Number badge */}
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

        {/* CTA */}
        <div className="text-center mt-16 lg:mt-20">
          <Button href={company.quoteUrl} external size="lg">
            Get Your Free Quote
          </Button>
          <p className="text-sm text-gray-500 mt-3">
            No commitment. No credit card. Just a quote.
          </p>
        </div>
      </div>
    </section>
  );
}
