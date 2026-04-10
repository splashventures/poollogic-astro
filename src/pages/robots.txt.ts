import type { APIRoute } from 'astro';

export const GET: APIRoute = () => {
  const baseUrl = 'https://poollogicsd.com';
  const body = `User-agent: *
Allow: /
Disallow: /api/
Disallow: /admin/

Sitemap: ${baseUrl}/sitemap-index.xml
`;
  return new Response(body, {
    headers: { 'Content-Type': 'text/plain' },
  });
};
