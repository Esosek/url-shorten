import type { ReactNode } from 'react';

type LinkProps = {
  children?: ReactNode;
  href?: string;
  isPrimary?: boolean;
};

export default function Link({
  children,
  href = '#',
  isPrimary = false,
}: LinkProps) {
  const primaryClasses = isPrimary
    ? 'bg-cyan text-white py-3 px-6 rounded-full hover:bg-cyan/50 transition-colors'
    : 'md:hover:text-neutral-700';
  return (
    <a
      href={href}
      className={`text-base w-full block text-center md:inline ${primaryClasses}`}
    >
      {children}
    </a>
  );
}
