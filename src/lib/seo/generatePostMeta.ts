import { company } from '@/data/company';
import type { BlogPost } from '@/types/post';

export function generatePostMeta(post: BlogPost) {
  const postUrl = `${company.url}/resources/${post.slug}/`;

  return {
    title: `${post.title} | ${company.name}`,
    description: post.excerpt,
    keywords: [post.categoryName, 'pool service', 'San Diego', 'pool maintenance'],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      url: postUrl,
      publishedTime: post.date,
      modifiedTime: post.dateModified || post.date,
      authors: [post.author],
      siteName: company.name,
      images: [
        {
          url: post.image
            ? `${company.url}${post.image}`
            : `${company.url}/images/pool/hero-pool.webp`,
          width: 1200,
          height: 630,
          alt: post.imageAlt || post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [
        post.image
          ? `${company.url}${post.image}`
          : `${company.url}/images/pool/hero-pool.webp`,
      ],
    },
    alternates: {
      canonical: postUrl,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}
