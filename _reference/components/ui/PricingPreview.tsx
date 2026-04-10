'use client';

import { company } from '@/data/company';
import { Button } from './Button';

export function PricingPreview() {
  return (
    <section className="py-20 lg:py-28 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Content */}
          <div>
            <p className="text-[#88d2c7] font-semibold mb-3">OUR SERVICE PROMISE</p>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              All-inclusive service.<br />No surprises.
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Your quote includes everything - all chemicals, all testing, all cleaning.
              No hidden fees, no surprise charges, no nickel-and-diming. Just expert
              pool care from CPO-certified technicians.
            </p>

            <div className="space-y-4 mb-8">
              {[
                'All chemicals included in your service',
                'CPO-certified technicians on every visit',
                'Equipment repairs quoted separately (no markups)',
                'Same dedicated technician every week',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="h-4 w-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-300">{item}</span>
                </div>
              ))}
            </div>

          </div>

          {/* Right: What's Included Card */}
          <div className="bg-white text-gray-900 rounded-2xl p-8 lg:p-10">
            <div className="text-center mb-8">
              <p className="text-gray-500 font-medium mb-2">Weekly Pool Service</p>
              <h3 className="text-2xl lg:text-3xl font-bold">Everything Included</h3>
              <p className="text-gray-500 text-sm mt-2">Cancel anytime · No hidden fees</p>
            </div>

            <div className="space-y-4 mb-8">
              <div className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
                Every visit includes:
              </div>
              {[
                'Complete water chemistry testing',
                'Chemical balancing (all chemicals included)',
                'Surface skimming & debris removal',
                'Brush walls, tiles & waterline',
                'Vacuum as needed',
                'Empty skimmer & pump baskets',
                'Equipment inspection',
                'Digital service report with photos',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <svg className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>

            <Button href={company.quoteUrl} external size="lg" className="w-full justify-center">
              Get Your Custom Quote
            </Button>

            <p className="text-center text-gray-500 text-sm mt-4">
              Customized to your pool size & condition
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
