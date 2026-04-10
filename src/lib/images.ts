// Centralized image loading utility for Astro Image component
// Maps public paths to imported image assets from src/assets/

const imageModules = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/images/**/*.{webp,jpg,jpeg,png,avif}',
  { eager: true }
);

/**
 * Resolve a public image path to an imported ImageMetadata for use with <Image>.
 * Falls back to undefined if the image isn't found in src/assets/.
 *
 * @example
 * const img = getImage('/images/pool/hero-pool.webp');
 * // Returns ImageMetadata if /src/assets/images/pool/hero-pool.webp exists
 */
export function getImage(publicPath: string): ImageMetadata | undefined {
  const assetPath = `/src/assets${publicPath}`;
  return imageModules[assetPath]?.default;
}
