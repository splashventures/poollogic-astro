import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { company } from '@/data/company';
import { posts, topicGroups } from '@/data/posts';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { DualCTA } from '@/components/ui/DualCTA';

export const metadata: Metadata = {
  title: 'Pool Care Resources & Tips | PoolLogic Pool Service',
  description: 'Helpful pool care guides, maintenance tips, and expert advice from PoolLogic Pool Service. Learn how to keep your pool clean, safe, and beautiful.',
  openGraph: {
    title: 'Pool Care Resources & Tips | PoolLogic Pool Service',
    description: 'Helpful pool care guides, maintenance tips, and expert advice from PoolLogic Pool Service.',
    type: 'website',
    url: 'https://poollogicsd.com/resources/',
  },
};

const quickTips = [
  'Test your water chemistry at least once a week during swimming season.',
  'Run your pump 8-12 hours daily during summer, less in winter.',
  'Clean your filter every 3-6 months, depending on usage.',
  'Skim debris daily to prevent staining and clogged filters.',
  'Maintain water level at the middle of your skimmer opening.',
  'Shock your pool after heavy use or rain to restore chlorine levels.',
  'Check your pump basket weekly for debris that reduces circulation.',
  'Balance pH before adding other chemicals for best results.',
];

const categories = [
  {
    slug: 'pool-care-tips',
    name: 'Pool Care Tips',
    description: 'Expert maintenance advice, cleaning guides, and repair tips.',
  },
  {
    slug: 'local-guides',
    name: 'Local Guides',
    description: 'San Diego attractions, landmarks, and local tips.',
  },
];

const FALLBACK_IMAGE = '/images/pool/hero-pool.webp';

export default function ResourcesPage() {
  // Sort posts by date, newest first
  const sortedPosts = [...posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const latestPosts = sortedPosts.slice(0, 6);

  // Group remaining posts by category
  const poolCarePosts = sortedPosts.filter((p) => p.category === 'pool-care-tips').slice(0, 9);
  const localGuides = sortedPosts.filter((p) => p.category === 'local-guides').slice(0, 6);

  return (
    <>
      {/* Breadcrumbs */}
      <div className="py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { name: 'Home', url: '/' },
              { name: 'Resources', url: '/resources/' },
            ]}
          />
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#00568c] to-[#00568c]/80 text-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              Pool Care Resources
            </h1>
            <p className="text-xl text-blue-100">
              Expert guides, maintenance tips, and troubleshooting help from the pool professionals.
              Whether you DIY or use a service, these resources will help you understand pool care.
            </p>
          </div>
        </div>
      </section>

      {/* Categories + Topic Quick Links */}
      <section className="py-8 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 mb-4">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/resources/category/${cat.slug}/`}
                className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-5 py-2 text-sm font-medium text-gray-700 hover:border-[#00568c] hover:text-[#00568c] transition-colors"
              >
                {cat.name}
                <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            {topicGroups.map((group) => (
              <Link
                key={group.slug}
                href={`/resources/topic/${group.slug}/`}
                className="text-xs bg-gray-100 text-gray-600 px-3 py-1.5 rounded-full hover:bg-[#00568c]/10 hover:text-[#00568c] transition-colors"
              >
                {group.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Tips Banner */}
      <section className="py-8 bg-yellow-50 border-b border-yellow-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-lg font-semibold text-yellow-800 mb-4 flex items-center gap-2">
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            Quick Tips
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickTips.map((tip, index) => (
              <div key={index} className="flex items-start gap-2">
                <svg className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-yellow-800">{tip}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Latest Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {latestPosts.map((post) => (
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
                  <span className="text-xs font-medium text-[#00568c] uppercase tracking-wide">
                    {post.categoryName}
                  </span>
                  <h3 className="text-lg font-semibold text-gray-900 mt-2 mb-2 group-hover:text-[#00568c] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <span>{post.readTime}</span>
                    <span>&middot;</span>
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                      })}
                    </time>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Pool Care Tips */}
      <section className="py-12 lg:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Pool Care Tips</h2>
            <Link
              href="/resources/category/pool-care-tips/"
              className="text-[#00568c] font-semibold text-sm hover:text-[#00568c]/80 transition-colors"
            >
              View All
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {poolCarePosts.map((post) => (
              <Link
                key={post.slug}
                href={`/resources/${post.slug}/`}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow group"
              >
                <div className="relative w-full aspect-[16/9]">
                  <Image
                    src={post.image || FALLBACK_IMAGE}
                    alt={post.imageAlt || post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-[#00568c] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">{post.excerpt}</p>
                  <span className="text-sm text-gray-500">{post.readTime}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Local Guides */}
      {localGuides.length > 0 && (
        <section className="py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-gray-900">Local Guides</h2>
              <Link
                href="/resources/category/local-guides/"
                className="text-[#00568c] font-semibold text-sm hover:text-[#00568c]/80 transition-colors"
              >
                View All
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {localGuides.map((post) => (
                <Link
                  key={post.slug}
                  href={`/resources/${post.slug}/`}
                  className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow group"
                >
                  <div className="relative w-full aspect-[16/9]">
                    <Image
                      src={post.image || FALLBACK_IMAGE}
                      alt={post.imageAlt || post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-[#00568c] transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">{post.excerpt}</p>
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Browse All Articles */}
      <section className="py-12 lg:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Browse All Articles</h2>
          <p className="text-gray-600 mb-8">
            {posts.length} articles across {topicGroups.length} topics. Click a topic to explore.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {topicGroups.map((group) => {
              const sorted = [...group.posts].sort(
                (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
              );
              return (
                <details
                  key={group.slug}
                  id={`topic-${group.slug}`}
                  className="group bg-white border border-gray-200 rounded-xl overflow-hidden"
                >
                  <summary className="flex items-center justify-between p-5 cursor-pointer hover:bg-gray-50 transition-colors list-none [&::-webkit-details-marker]:hidden">
                    <div className="flex items-center gap-3">
                      <h3 className="font-semibold text-gray-900">{group.name}</h3>
                      <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                        {group.posts.length}
                      </span>
                      <span className="text-xs text-[#00568c] font-medium hover:underline">
                        <Link href={`/resources/topic/${group.slug}/`}>View all</Link>
                      </span>
                    </div>
                    <svg
                      className="h-5 w-5 text-gray-400 transition-transform group-open:rotate-180"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="border-t border-gray-100 divide-y divide-gray-50">
                    {sorted.map((post) => (
                      <Link
                        key={post.slug}
                        href={`/resources/${post.slug}/`}
                        className="flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
                      >
                        <span className="text-sm text-gray-900 hover:text-[#00568c] transition-colors pr-4">
                          {post.title}
                        </span>
                        <span className="text-xs text-gray-400 whitespace-nowrap flex-shrink-0">
                          {post.readTime}
                        </span>
                      </Link>
                    ))}
                  </div>
                </details>
              );
            })}
          </div>
        </div>
      </section>

      {/* DIY vs Professional Service */}
      <section className="py-16 lg:py-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">DIY vs Professional Pool Service</h2>
              <p className="text-gray-300 mb-6">
                Some pool owners enjoy maintaining their own pools. Others prefer to leave it to
                professionals. Here&apos;s how to decide what&apos;s right for you.
              </p>

              <div className="space-y-4 mb-8">
                <div>
                  <h3 className="font-semibold text-white mb-2">Consider DIY if you:</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
                      Enjoy hands-on maintenance tasks
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
                      Have time for weekly testing and cleaning
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
                      Are willing to learn proper chemistry
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-white mb-2">Consider professional service if you:</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[#88d2c7] rounded-full" />
                      Value your free time
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[#88d2c7] rounded-full" />
                      Want consistently balanced water
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[#88d2c7] rounded-full" />
                      Prefer expert eyes on your equipment
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[#88d2c7] rounded-full" />
                      Don&apos;t want to buy/store chemicals
                    </li>
                  </ul>
                </div>
              </div>

              <p className="text-gray-400 text-sm">
                Many pool owners start with DIY and later switch to professional service when they
                realize the time commitment. Either way, these resources help you understand what
                good pool care looks like.
              </p>
            </div>

            <div className="bg-gray-800 rounded-xl p-8">
              <h3 className="text-xl font-semibold mb-6">What Professional Service Provides</h3>
              <ul className="space-y-4">
                {[
                  'Weekly chemical testing and balancing',
                  'All chemicals included (no storage hassle)',
                  'Professional-grade equipment',
                  'Equipment monitoring and early problem detection',
                  'Consistent scheduling you can count on',
                  'Digital service reports after each visit',
                  'Priority scheduling for repairs',
                  'Expert knowledge on call when needed',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <svg className="h-5 w-5 text-[#88d2c7] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-6 border-t border-gray-700">
                <p className="text-lg font-semibold text-white mb-2">
                  Weekly service with all chemicals included
                </p>
                <p className="text-gray-400 text-sm">Get a free quote today</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Have Questions */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#88d2c7]/10 rounded-2xl p-8 lg:p-12 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Have a Pool Question?
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Can&apos;t find what you&apos;re looking for? Our team is happy to help.
              Whether you&apos;re a customer or just need advice, reach out and we&apos;ll
              point you in the right direction.
            </p>
            <DualCTA quoteText="Get a Free Quote" className="justify-center" />
          </div>
        </div>
      </section>

      {/* Services Link */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Explore Our Services
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            From weekly cleaning to equipment repairs, we offer complete pool care for
            San Diego homeowners.
          </p>
          <Link
            href="/services/"
            className="inline-flex items-center gap-2 bg-[#00568c] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#00568c]/90 transition-colors"
          >
            View All Services
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
