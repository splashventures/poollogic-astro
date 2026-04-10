'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: React.ReactNode;
  href?: string;
  external?: boolean;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  onClick?: () => void;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-[#00568c] text-white hover:bg-[#ffb12b] hover:text-gray-900 focus:ring-[#00568c] shadow-sm',
  secondary:
    'bg-[#ffb12b] text-gray-900 hover:bg-[#e9a025] focus:ring-[#ffb12b] shadow-sm font-bold',
  outline:
    'border-2 border-[#00568c] text-[#00568c] hover:bg-[#ffb12b] hover:border-[#ffb12b] hover:text-gray-900 focus:ring-[#00568c]',
  ghost:
    'text-[#00568c] hover:bg-[#ffb12b]/20 focus:ring-[#00568c]',
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-5 py-2.5 text-base',
  lg: 'px-8 py-3.5 text-lg',
};

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  href,
  external,
  type = 'button',
  disabled,
  onClick,
}: ButtonProps) {
  const baseStyles = cn(
    'inline-flex items-center justify-center font-semibold rounded-lg',
    'transition-all duration-200 ease-in-out',
    'focus:outline-none focus:ring-2 focus:ring-offset-2',
    'disabled:opacity-50 disabled:cursor-not-allowed',
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  // If href is provided, render as Link
  if (href) {
    if (external) {
      return (
        <a
          href={href}
          className={baseStyles}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={baseStyles}>
        {children}
      </Link>
    );
  }

  // Otherwise render as button
  return (
    <button
      type={type}
      className={baseStyles}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
