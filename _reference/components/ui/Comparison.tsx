'use client';

const comparisonData = [
  { feature: 'Consistent weekly scheduling', us: true, others: false },
  { feature: 'Same technician every visit', us: true, others: false },
  { feature: 'All chemicals included', us: true, others: false },
  { feature: 'Digital service reports with photos', us: true, others: false },
  { feature: 'CPO-certified technicians', us: true, others: false },
  { feature: '100% satisfaction guarantee', us: true, others: false },
  { feature: 'Transparent, upfront pricing', us: true, others: false },
];

export function ComparisonSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-[#00568c] font-semibold mb-3">WHY WE&apos;RE DIFFERENT</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Not all pool services are created equal
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We built PoolLogic to fix everything we hated about other pool services
          </p>
        </div>

        {/* Comparison Table */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
          {/* Header */}
          <div className="grid grid-cols-3 bg-gray-50 border-b border-gray-200">
            <div className="p-4 lg:p-6"></div>
            <div className="p-4 lg:p-6 text-center border-l border-gray-200">
              <div className="font-bold text-gray-900">PoolLogic</div>
              <div className="text-sm text-[#00568c] font-medium">What you get</div>
            </div>
            <div className="p-4 lg:p-6 text-center border-l border-gray-200">
              <div className="font-bold text-gray-500">Other Services</div>
              <div className="text-sm text-gray-400">What they offer</div>
            </div>
          </div>

          {/* Rows */}
          {comparisonData.map((row, index) => (
            <div
              key={row.feature}
              className={`grid grid-cols-3 ${index !== comparisonData.length - 1 ? 'border-b border-gray-100' : ''}`}
            >
              <div className="p-4 lg:p-5 text-gray-700 font-medium text-sm lg:text-base">
                {row.feature}
              </div>
              <div className="p-4 lg:p-5 flex justify-center items-center border-l border-gray-100 bg-green-50/50">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="h-5 w-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <div className="p-4 lg:p-5 flex justify-center items-center border-l border-gray-100">
                <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                  <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
