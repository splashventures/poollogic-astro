import { BlogPost } from '@/types/post';
import { poolCleaningPosts } from './pool-cleaning';
import { poolFilterPosts } from './pool-filter';
import { poolPumpPosts } from './pool-pump';
import { poolHeaterPosts } from './pool-heater';
import { poolAlgaePosts } from './pool-algae';
import { poolDrainPosts } from './pool-drain';
import { poolAutomationPosts } from './pool-automation';
import { poolLightPosts } from './pool-light';
import { hotTubPosts } from './hot-tub';
import { saltwaterPosts } from './saltwater';
import { localGuidesPosts } from './local-guides';
import { generalPosts } from './general';

export const topicGroups = [
  { slug: 'pool-cleaning', name: 'Pool Cleaning', posts: poolCleaningPosts },
  { slug: 'pool-filter', name: 'Pool Filters', posts: poolFilterPosts },
  { slug: 'pool-pump', name: 'Pool Pumps', posts: poolPumpPosts },
  { slug: 'pool-heater', name: 'Pool Heaters', posts: poolHeaterPosts },
  { slug: 'pool-algae', name: 'Algae Treatment', posts: poolAlgaePosts },
  { slug: 'pool-drain', name: 'Pool Draining', posts: poolDrainPosts },
  { slug: 'pool-automation', name: 'Pool Automation', posts: poolAutomationPosts },
  { slug: 'pool-light', name: 'Pool Lights', posts: poolLightPosts },
  { slug: 'hot-tub', name: 'Hot Tubs', posts: hotTubPosts },
  { slug: 'saltwater', name: 'Saltwater Pools', posts: saltwaterPosts },
  { slug: 'local-guides', name: 'Local Guides', posts: localGuidesPosts },
  { slug: 'general', name: 'General Pool Care', posts: generalPosts },
];

export const posts: BlogPost[] = topicGroups.flatMap((group) => group.posts);

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((post) => post.slug === slug);
}

export function getPostsByCategory(category: string): BlogPost[] {
  return posts.filter((post) => post.category === category);
}

export function getRelatedPosts(post: BlogPost, limit = 5): BlogPost[] {
  const related = post.relatedSlugs
    .map((slug) => posts.find((p) => p.slug === slug))
    .filter((p): p is BlogPost => p !== undefined);

  if (related.length >= limit) return related.slice(0, limit);

  // Fill remaining slots with posts from the same category
  const sameCategoryPosts = posts
    .filter((p) => p.category === post.category && p.slug !== post.slug && !post.relatedSlugs.includes(p.slug))
    .slice(0, limit - related.length);

  return [...related, ...sameCategoryPosts].slice(0, limit);
}
