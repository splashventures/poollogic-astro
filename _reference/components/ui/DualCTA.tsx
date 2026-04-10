'use client';

import { company } from '@/data/company';
import { Button } from './Button';
import { formatPhoneLink } from '@/lib/utils';

interface DualCTAProps {
  quoteText?: string;
  phoneText?: string;
  variant?: 'default' | 'compact' | 'stacked';
  className?: string;
}

export function DualCTA({
  quoteText = 'Get Your Free Quote',
  phoneText,
  variant = 'default',
  className = '',
}: DualCTAProps) {
  const phoneDisplay = phoneText || company.phone;

  if (variant === 'stacked') {
    return (
      <div className={`flex flex-col gap-3 ${className}`}>
        <Button href={company.quoteUrl} external size="lg" className="w-full">
          {quoteText}
        </Button>
        <a
          href={formatPhoneLink(company.phone)}
          className="inline-flex items-center justify-center gap-2 text-[#00568c] font-semibold hover:text-[#00568c] transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
          </svg>
          or call: {phoneDisplay}
        </a>
      </div>
    );
  }

  if (variant === 'compact') {
    return (
      <div className={`flex flex-col sm:flex-row items-center gap-3 ${className}`}>
        <Button href={company.quoteUrl} external size="md">
          {quoteText}
        </Button>
        <span className="text-gray-500 hidden sm:inline">or</span>
        <a
          href={formatPhoneLink(company.phone)}
          className="inline-flex items-center gap-2 text-[#00568c] font-semibold hover:text-[#00568c]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
          </svg>
          {phoneDisplay}
        </a>
      </div>
    );
  }

  // Default variant
  return (
    <div className={`flex flex-col sm:flex-row items-center gap-4 ${className}`}>
      <Button href={company.quoteUrl} external size="lg">
        {quoteText}
      </Button>
      <div className="flex items-center gap-2 text-gray-600">
        <span className="hidden sm:inline">or call now:</span>
        <a
          href={formatPhoneLink(company.phone)}
          className="inline-flex items-center gap-2 text-[#00568c] font-bold text-lg hover:text-[#00568c] transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
          </svg>
          {phoneDisplay}
        </a>
      </div>
    </div>
  );
}

/**
 * Mobile-optimized dual CTA with equal prominence buttons
 */
export function MobileDualCTA({ className = '' }: { className?: string }) {
  return (
    <div className={`grid grid-cols-2 gap-3 ${className}`}>
      <a
        href={formatPhoneLink(company.phone)}
        className="inline-flex items-center justify-center gap-2 px-4 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
        </svg>
        Call Now
      </a>
      <a
        href={company.quoteUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 px-4 py-3 bg-[#00568c] text-white font-semibold rounded-lg hover:bg-[#00568c]/90 transition-colors"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z"
            clipRule="evenodd"
          />
        </svg>
        Get Quote
      </a>
    </div>
  );
}
