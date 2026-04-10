import Link from 'next/link';
import Image from 'next/image';
import { company } from '@/data/company';
import { formatPhoneLink } from '@/lib/utils';

const serviceLinks = [
  { name: 'Weekly Pool Cleaning', href: '/pool-cleaning-service-san-diego/' },
  { name: 'Pool Filter Cleaning', href: '/pool-filter-cleaning-service-san-diego/' },
  { name: 'Pool Algae Removal', href: '/pool-algae-removal-service-san-diego/' },
  { name: 'Pool Heater Repair', href: '/pool-heater-repair-san-diego/' },
  { name: 'Pool Pump Repair', href: '/pool-pump-repair-san-diego/' },
  { name: 'Pool Automation', href: '/pool-automation-installation-san-diego/' },
];

const serviceAreaLinks = [
  { name: 'San Diego', href: '/pool-service-san-diego/' },
  { name: 'Chula Vista', href: '/pool-service-chula-vista/' },
  { name: 'Carlsbad', href: '/pool-service-carlsbad/' },
  { name: 'Oceanside', href: '/pool-service-oceanside/' },
  { name: 'Escondido', href: '/pool-service-escondido/' },
  { name: 'La Jolla', href: '/pool-service-la-jolla/' },
  { name: 'El Cajon', href: '/pool-service-el-cajon/' },
  { name: 'La Mesa', href: '/pool-service-la-mesa/' },
  { name: 'Poway', href: '/pool-service-poway/' },
  { name: 'Encinitas', href: '/pool-service-encinitas/' },
];

const companyLinks = [
  { name: 'About Us', href: '/about/' },
  { name: 'Reviews', href: '/reviews/' },
  { name: 'Commercial Services', href: '/commercial-pool-service-san-diego/' },
  { name: 'Resources', href: '/resources/' },
  { name: 'Contact', href: '/about/#contact' },
];

const legalLinks = [
  { name: 'Privacy Policy', href: '/privacy-policy/' },
  { name: 'Terms of Use', href: '/terms-of-use/' },
  { name: 'Sitemap', href: '/html-sitemap/' },
];

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Company info with NAP */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/images/logos/poollogic-logo-light.png"
                alt={`${company.name} - San Diego Pool Service`}
                width={140}
                height={100}
                className="h-16 w-auto"
              />
            </Link>

            <p className="text-gray-400 mb-4 max-w-md">
              Professional pool cleaning and maintenance services for greater San Diego County.
              Trusted by over 1,000 San Diego families.
            </p>

            {/* NAP - Must be identical to all other instances */}
            <div className="space-y-2 text-sm">
              <p className="font-semibold text-white">{company.name}</p>
              <p>{company.address.full}</p>
              <p>
                <a
                  href={formatPhoneLink(company.phone)}
                  className="hover:text-white transition-colors"
                >
                  {company.phone}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${company.email}`}
                  className="hover:text-white transition-colors"
                >
                  {company.email}
                </a>
              </p>
              <p className="text-gray-400">{company.hoursDisplay}</p>
            </div>

          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services/"
                  className="text-[#88d2c7] hover:text-[#88d2c7]/80 font-medium"
                >
                  View All Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-white font-semibold mb-4">Service Areas</h3>
            <ul className="space-y-2 text-sm">
              {serviceAreaLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Trust badges */}
            <div className="mt-6 space-y-2">
              {company.certifications.map((cert) => (
                <div
                  key={cert}
                  className="inline-flex items-center gap-2 text-xs text-gray-400"
                >
                  <svg
                    className="h-4 w-4 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {cert}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} {company.name}. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              {legalLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
