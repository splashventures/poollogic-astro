'use client';

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const defaultFAQs: FAQItem[] = [
  {
    question: 'What does weekly pool service include?',
    answer: 'Every weekly visit includes complete water chemistry testing, chemical balancing (all chemicals included), surface skimming, brushing walls and tiles, vacuuming, emptying baskets, and a full equipment inspection. Your CPO-certified technician sends a digital service report after every visit. Request a free quote to get a custom plan for your pool.',
  },
  {
    question: 'Are chemicals included in the price?',
    answer: 'Yes! All chemicals needed to maintain your pool are included in your service price. You\'ll never get a surprise bill for chlorine, acid, or other treatments. We use professional-grade chemicals that keep your water perfectly balanced.',
  },
  {
    question: 'Do I have to sign a long-term contract?',
    answer: 'We earn your business every single visit. You can cancel anytime with no penalties or fees. All of our technicians are CPO-certified, so you always get expert-level care. Most of our customers stay with us for years - not because they have to, but because they want to.',
  },
  {
    question: 'How quickly can you start service?',
    answer: 'We can typically begin service within 3-5 business days of receiving your quote approval. For urgent situations, we often have same-week availability. Contact us and we\'ll work to accommodate your timeline.',
  },
  {
    question: 'What if I\'m not satisfied with a service visit?',
    answer: 'We stand behind our work with a 100% satisfaction guarantee. If you\'re not happy with any visit, we\'ll come back and make it right at no extra charge. If we still can\'t meet your expectations, we\'ll refund that service visit.',
  },
  {
    question: 'Will I have the same technician every week?',
    answer: 'Yes. We assign a dedicated technician to your pool who will service it every week. This means someone who knows your pool intimately - its quirks, its equipment, its history. Consistency is key to great pool care.',
  },
];

function FAQItem({ faq, isOpen, onClick }: { faq: FAQItem; isOpen: boolean; onClick: () => void }) {
  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        onClick={onClick}
        className="w-full py-6 flex items-center justify-between text-left hover:text-[#00568c] transition-colors"
      >
        <span className="font-semibold text-lg text-gray-900 pr-4">{faq.question}</span>
        <span className={`flex-shrink-0 w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center transition-transform ${isOpen ? 'rotate-180 bg-[#88d2c7]/20' : ''}`}>
          <svg className={`h-5 w-5 ${isOpen ? 'text-[#00568c]' : 'text-gray-500'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-6' : 'max-h-0'}`}>
        <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
      </div>
    </div>
  );
}

export function FAQSection({ faqs = defaultFAQs, title = 'Frequently asked questions' }: { faqs?: FAQItem[]; title?: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-[#00568c] font-semibold mb-3">FAQ</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            {title}
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="bg-white rounded-2xl border border-gray-200 px-8">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>

        {/* Contact prompt */}
        <p className="text-center text-gray-500 mt-8">
          Still have questions?{' '}
          <a href="/about/#contact" className="text-[#00568c] font-medium hover:text-[#00568c]">
            Get in touch
          </a>
        </p>
      </div>
    </section>
  );
}
