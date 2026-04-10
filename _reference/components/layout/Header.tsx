'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { company } from '@/data/company';
import { formatPhoneLink } from '@/lib/utils';
import { Button } from '@/components/ui/Button';

const navigation = [
  { name: 'Services', href: '/services/' },
  { name: 'Service Areas', href: '#service-areas', hasDropdown: true },
  { name: 'Commercial', href: '/commercial-pool-service-san-diego/' },
  { name: 'About', href: '/about/' },
];

const serviceAreas = [
  { name: 'San Diego', href: '/pool-service-san-diego/' },
  { name: 'Chula Vista', href: '/pool-service-chula-vista/' },
  { name: 'La Jolla', href: '/pool-service-la-jolla/' },
  { name: 'Carlsbad', href: '/pool-service-carlsbad/' },
  { name: 'Escondido', href: '/pool-service-escondido/' },
  { name: 'Oceanside', href: '/pool-service-oceanside/' },
  { name: 'View All Cities', href: '/services/', isViewAll: true },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [serviceAreasOpen, setServiceAreasOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* Top bar with phone */}
      <div className="bg-[#00568c] text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <span className="hidden sm:inline">{company.hoursDisplay}</span>
            <span className="hidden md:inline">|</span>
            <span className="hidden md:inline">{company.serviceAreaDescription}</span>
          </div>
          <a
            href={formatPhoneLink(company.phone)}
            className="flex items-center gap-2 font-semibold hover:text-[#88d2c7] transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            {company.phone}
          </a>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center py-2">
            <Image
              src="/images/logos/poollogic-logo-header.png"
              alt="PoolLogic Pool Service"
              width={200}
              height={96}
              className="!h-[52px] w-auto"
              style={{ height: '52px', width: 'auto' }}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.hasDropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setServiceAreasOpen(true)}
                    onMouseLeave={() => setServiceAreasOpen(false)}
                  >
                    <button className="flex items-center gap-1 text-gray-700 hover:text-[#00568c] font-medium transition-colors">
                      {item.name}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`h-4 w-4 transition-transform ${serviceAreasOpen ? 'rotate-180' : ''}`}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                    {serviceAreasOpen && (
                      <div className="absolute top-full left-0 pt-2 w-56 z-50">
                        <div className="bg-white rounded-lg shadow-lg border border-gray-100 py-2">
                        {serviceAreas.map((area) => (
                          <Link
                            key={area.name}
                            href={area.href}
                            className={`block px-4 py-2 text-sm ${
                              area.isViewAll
                                ? 'text-[#00568c] font-semibold border-t border-gray-100 mt-2 pt-3'
                                : 'text-gray-700 hover:bg-[#88d2c7]/10 hover:text-[#00568c]'
                            }`}
                          >
                            {area.name}
                          </Link>
                        ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="text-gray-700 hover:text-[#00568c] font-medium transition-colors"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Button href={company.quoteUrl} external>
              Get Free Quote
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-[#00568c] hover:bg-gray-100"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {mobileMenuOpen ? (
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col gap-4">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.hasDropdown ? (
                    <div>
                      <button
                        onClick={() => setServiceAreasOpen(!serviceAreasOpen)}
                        className="flex items-center justify-between w-full text-gray-700 font-medium"
                      >
                        {item.name}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className={`h-4 w-4 transition-transform ${serviceAreasOpen ? 'rotate-180' : ''}`}
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                      {serviceAreasOpen && (
                        <div className="mt-2 ml-4 flex flex-col gap-2">
                          {serviceAreas.map((area) => (
                            <Link
                              key={area.name}
                              href={area.href}
                              className={`text-sm ${
                                area.isViewAll
                                  ? 'text-[#00568c] font-semibold'
                                  : 'text-gray-600 hover:text-[#00568c]'
                              }`}
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {area.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-gray-700 font-medium hover:text-[#00568c]"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-4 border-t border-gray-100">
                <Button href={company.quoteUrl} external className="w-full">
                  Get Free Quote
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
