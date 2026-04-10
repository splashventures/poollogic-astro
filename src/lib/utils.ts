import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Merge Tailwind CSS classes with clsx
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Format phone for tel: links
 */
export function formatPhoneLink(phone: string): string {
  const digits = phone.replace(/[^0-9+]/g, '');
  // Normalize to E.164 format (+1 prefix) for consistency
  if (digits.startsWith('+')) return `tel:${digits}`;
  if (digits.length === 10) return `tel:+1${digits}`;
  return `tel:+${digits}`;
}

/**
 * Format price range for display
 */
export function formatPriceRange(min: number, max: number, unit: string): string {
  if (unit === 'starting at') {
    return `From $${min}`;
  }
  return `$${min} - $${max} ${unit}`;
}

/**
 * Truncate text to a maximum length
 */
export function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + '...';
}

/**
 * Generate URL-friendly slug from text
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

/**
 * Capitalize first letter of each word
 */
export function titleCase(text: string): string {
  return text
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}
