import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { company } from '@/data/company';
import { posts } from '@/data/posts';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { Button } from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Kyle Bowman | Founder & CPO-Certified Pool Expert | PoolLogic',
  description:
    'Kyle Bowman is the Founder of PoolLogic Pool Service, a CPO-certified pool expert with deep knowledge of pool service, water chemistry, and equipment repair in San Diego.',
  openGraph: {
    title: 'Kyle Bowman | PoolLogic Pool Service',
    description:
      'Founder of PoolLogic Pool Service. CPO-certified with deep expertise in pool service, water chemistry, and pool equipment repair.',
    type: 'profile',
    url: `${company.url}/about/kyle-bowman/`,
  },
  alternates: {
    canonical: `${company.url}/about/kyle-bowman/`,
  },
};

export default function KyleBowmanPage() {
  const recentPosts = [...posts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 6);

  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${company.url}/about/kyle-bowman/#person`,
    name: 'Kyle Bowman',
    jobTitle: 'Founder & CPO-Certified Pool Expert',
    url: `${company.url}/about/kyle-bowman/`,
    image: `${company.url}/images/pool/kyle-bowman.webp`,
    worksFor: {
      '@type': 'Organization',
      '@id': `${company.url}/#organization`,
      name: company.name,
    },
    knowsAbout: [
      'Pool Maintenance',
      'Water Chemistry',
      'Pool Equipment Repair',
      'Pool Cleaning',
      'San Diego Pool Service',
      'Pool Automation',
      'Salt Water Pool Maintenance',
    ],
    hasCredential: {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'Professional Certification',
      name: 'Certified Pool Operator (CPO)',
      recognizedBy: {
        '@type': 'Organization',
        name: 'National Swimming Pool Foundation',
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      {/* Breadcrumbs */}
      <div className="py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { name: 'Home', url: '/' },
              { name: 'About', url: '/about/' },
              { name: 'Kyle Bowman', url: '/about/kyle-bowman/' },
            ]}
          />
        </div>
      </div>

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#00568c] to-[#00568c]/80 text-white py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8">
            <div className="w-32 h-32 rounded-full overflow-hidden flex-shrink-0">
              <Image
                src="/images/pool/kyle-bowman.webp"
                alt="Kyle Bowman, Founder of PoolLogic Pool Service"
                width={256}
                height={256}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold mb-2">Kyle Bowman</h1>
              <p className="text-[#88d2c7] text-lg font-medium mb-4">
                Founder of PoolLogic Pool Service &middot; CPO-Certified
              </p>
              <p className="text-blue-100 text-lg leading-relaxed max-w-2xl">
                Kyle is the Founder of PoolLogic Pool Service and a Certified Pool Operator (CPO)
                with deep expertise in pool service, water chemistry, and pool equipment repair.
                He leads the PoolLogic team in delivering expert-level pool care to families
                across San Diego County.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bio */}
      <section className="py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-600">
            <h2>About Kyle</h2>
            <p>
              With over a decade of hands-on experience in the pool service industry, Kyle Bowman
              founded PoolLogic Pool Service with a simple mission: to bring honest, expert-level
              pool care to San Diego homeowners. His CPO certification reflects a commitment to
              staying at the forefront of pool science and best practices.
            </p>
            <p>
              Kyle&apos;s expertise spans every aspect of pool care - from water chemistry and
              sanitation to pump repair, filter systems, heater installation, and pool automation.
              He personally trains every PoolLogic technician to ensure the same high standards of
              service he set when he started the company.
            </p>

            <h2>Expertise</h2>
            <ul>
              <li><strong>Water Chemistry</strong> - Advanced knowledge of chlorine, pH, alkalinity, calcium hardness, and stabilizer management for San Diego&apos;s unique water conditions</li>
              <li><strong>Pool Equipment Repair</strong> - Expert diagnostics and repair for pumps, filters, heaters, salt systems, and automation controllers</li>
              <li><strong>Pool Service Operations</strong> - Building and managing a team of CPO-certified technicians across 20+ San Diego County cities</li>
              <li><strong>Equipment Installation</strong> - Hands-on experience with pool pump, filter, heater, lighting, and automation system installations</li>
            </ul>

            <h2>Certifications</h2>
            <ul>
              <li>Certified Pool Operator (CPO) - National Swimming Pool Foundation</li>
              <li>Licensed and insured for pool service in California</li>
            </ul>
          </div>

          <div className="mt-12 bg-[#88d2c7]/10 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Need Expert Pool Service?
            </h2>
            <p className="text-gray-600 mb-6">
              Kyle and the PoolLogic team provide professional pool cleaning, maintenance, and
              repair services throughout San Diego County.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href={company.quoteUrl} external>
                Get a Free Quote
              </Button>
              <Button href={`tel:${company.phoneRaw}`} variant="outline">
                Call {company.phone}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Articles */}
      <section className="py-12 lg:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Recent Articles by Kyle
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/resources/${post.slug}/`}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow group"
              >
                <span className="text-xs font-medium text-[#00568c] uppercase tracking-wide">
                  {post.categoryName}
                </span>
                <h3 className="text-lg font-semibold text-gray-900 mt-2 mb-2 group-hover:text-[#00568c] transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm line-clamp-2">{post.excerpt}</p>
                <div className="mt-3 text-sm text-gray-500">{post.readTime}</div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/resources/"
              className="inline-flex items-center gap-2 text-[#00568c] font-semibold hover:text-[#00568c]/80 transition-colors"
            >
              View All Articles
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
