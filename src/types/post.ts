export interface BlogPost {
  title: string;
  slug: string;
  author: string;
  date: string;
  dateModified?: string;
  category: string;
  categoryName: string;
  excerpt: string;
  readTime: string;
  content: string[];
  headings: string[];
  faqs: { question: string; answer: string }[];
  relatedSlugs: string[];
  image?: string;
  imageAlt?: string;
}
