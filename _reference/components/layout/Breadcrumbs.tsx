import Link from 'next/link';
import { generateBreadcrumbSchema } from '@/lib/schema/breadcrumb';

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  const schema = generateBreadcrumbSchema(items);

  return (
    <>
      {/* Schema markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Visual breadcrumbs */}
      <nav aria-label="Breadcrumb" className="text-xs">
        <ol className="flex items-center gap-1.5 text-gray-400">
          {items.map((item, index) => (
            <li key={item.url} className="flex items-center gap-1.5">
              {index > 0 && (
                <span className="text-gray-300">/</span>
              )}
              {index === items.length - 1 ? (
                <span className="text-gray-500">{item.name}</span>
              ) : (
                <Link
                  href={item.url}
                  className="hover:text-gray-600 transition-colors"
                >
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
