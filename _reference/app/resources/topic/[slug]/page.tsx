import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { topicGroups } from '@/data/posts';
import { topicHubs, getTopicHub } from '@/data/topic-hubs';
import { services } from '@/data/services';
import { company } from '@/data/company';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { DualCTA } from '@/components/ui/DualCTA';

interface PageProps {
  params: Promise<{ slug: string }>;
}

const FALLBACK_IMAGE = '/images/pool/hero-pool.webp';

export async function generateStaticParams() {
  return topicHubs.map((hub) => ({ slug: hub.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const hub = getTopicHub(slug);
  if (!hub) return {};

  return {
    title: hub.metaTitle,
    description: hub.metaDescription,
    openGraph: {
      title: hub.metaTitle,
      description: hub.metaDescription,
      type: 'website',
      url: `${company.url}/resources/topic/${slug}/`,
      siteName: company.name,
    },
    alternates: {
      canonical: `${company.url}/resources/topic/${slug}/`,
    },
  };
}

export default async function TopicHubPage({ params }: PageProps) {
  const { slug } = await params;
  const hub = getTopicHub(slug);
  if (!hub) notFound();

  const group = topicGroups.find((g) => g.slug === slug);
  if (!group) notFound();

  const sortedPosts = [...group.posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const relatedServices = hub.relatedServiceSlugs
    .map((urlSlug) => services.find((s) => s.urlSlug === urlSlug))
    .filter((s): s is NonNullable<typeof s> => s !== undefined);

  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: hub.name,
    description: hub.metaDescription,
    url: `${company.url}/resources/topic/${slug}/`,
    isPartOf: {
      '@type': 'WebSite',
      '@id': `${company.url}/#website`,
      name: company.name,
    },
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: sortedPosts.length,
      itemListElement: sortedPosts.map((post, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        url: `${company.url}/resources/${post.slug}/`,
        name: post.title,
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />

      {/* Breadcrumbs */}
      <div className="py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { name: 'Home', url: '/' },
              { name: 'Resources', url: '/resources/' },
              { name: hub.name, url: `/resources/topic/${slug}/` },
            ]}
          />
        </div>
      </div>

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#00568c] to-[#00568c]/80 text-white py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">{hub.name} Guides & Tips</h1>
          <p className="text-xl text-blue-100 max-w-2xl">{hub.heroDescription}</p>
          <p className="text-blue-200 mt-4">{sortedPosts.length} articles</p>
        </div>
      </section>

      {/* Intro Content */}
      <section className="py-12 lg:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg text-gray-600">
            {hub.introContent.split('\n\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-12 lg:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            All {hub.name} Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/resources/${post.slug}/`}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow group"
              >
                <div className="relative w-full aspect-video">
                  <Image
                    src={post.image || FALLBACK_IMAGE}
                    alt={post.imageAlt || post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-[#00568c] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center gap-3 text-xs text-gray-500">
                    <span>{post.author}</span>
                    <span>&middot;</span>
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                      })}
                    </time>
                    <span>&middot;</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <section className="py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Related Services
            </h2>
            <p className="text-gray-600 mb-8">
              Need professional help? We offer these {hub.name.toLowerCase()}-related services across San Diego County.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedServices.map((service) => (
                <Link
                  key={service.slug}
                  href={`/${service.urlSlug}/`}
                  className="group bg-white rounded-xl border border-gray-200 p-6 hover:border-[#00568c]/30 hover:shadow-lg transition-all"
                >
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
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Browse Other Topics */}
      <section className="py-12 lg:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Explore Other Topics</h2>
          <div className="flex flex-wrap gap-3">
            {topicGroups
              .filter((g) => g.slug !== slug)
              .map((g) => (
                <Link
                  key={g.slug}
                  href={`/resources/topic/${g.slug}/`}
                  className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-2 text-sm font-medium text-gray-700 hover:border-[#00568c] hover:text-[#00568c] transition-colors"
                >
                  {g.name}
                  <span className="text-xs text-gray-400">{g.posts.length}</span>
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#88d2c7]/10 rounded-2xl p-8 lg:p-12 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Need Professional Pool Help?
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Whether you need weekly maintenance or a one-time repair, our CPO-certified technicians
              are ready to help. Serving 24 cities across San Diego County.
            </p>
            <DualCTA quoteText="Get a Free Quote" className="justify-center" />
          </div>
        </div>
      </section>

      {/* Back to Resources */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link
            href="/resources/"
            className="inline-flex items-center gap-2 text-[#00568c] font-semibold hover:text-[#00568c]/80 transition-colors"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to All Resources
          </Link>
        </div>
      </section>
    </>
  );
}
