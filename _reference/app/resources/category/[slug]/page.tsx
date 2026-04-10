import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getPostsByCategory } from '@/data/posts';
import { company } from '@/data/company';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { BlogPost } from '@/types/post';

interface PageProps {
  params: Promise<{ slug: string }>;
}

const categories: Record<string, { name: string; description: string }> = {
  'pool-care-tips': {
    name: 'Pool Care Tips',
    description: 'Expert advice on pool maintenance, cleaning, repairs, and equipment to keep your San Diego pool in perfect condition.',
  },
  'local-guides': {
    name: 'Local Guides',
    description: 'Discover San Diego attractions, landmarks, and local tips for pool owners in the San Diego area.',
  },
};

const FALLBACK_IMAGE = '/images/pool/hero-pool.webp';

export async function generateStaticParams() {
  return Object.keys(categories).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = categories[slug];
  if (!category) return {};

  return {
    title: `${category.name} | ${company.name} Resources`,
    description: category.description,
    openGraph: {
      title: `${category.name} | ${company.name}`,
      description: category.description,
      type: 'website',
      url: `${company.url}/resources/category/${slug}/`,
    },
  };
}

export default async function CategoryPage({ params }: PageProps) {
  const { slug } = await params;
  const category = categories[slug];
  if (!category) notFound();

  const categoryPosts = getPostsByCategory(slug);

  // Sort posts by date, newest first
  const sortedPosts = [...categoryPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: category.name,
    description: category.description,
    url: `${company.url}/resources/category/${slug}/`,
    isPartOf: {
      '@type': 'WebSite',
      '@id': `${company.url}/#website`,
      name: company.name,
    },
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: sortedPosts.length,
      itemListElement: sortedPosts.map((post: BlogPost, index: number) => ({
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
              { name: category.name, url: `/resources/category/${slug}/` },
            ]}
          />
        </div>
      </div>

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#00568c] to-[#00568c]/80 text-white py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">{category.name}</h1>
          <p className="text-xl text-blue-100 max-w-2xl">{category.description}</p>
          <p className="text-blue-200 mt-4">{sortedPosts.length} articles</p>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                  <h2 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-[#00568c] transition-colors">
                    {post.title}
                  </h2>
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
