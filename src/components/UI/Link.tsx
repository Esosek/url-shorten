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
    ? 'bg-cyan text-white py-2 px-4 rounded-full hover:bg-cyan/50 transition-colors'
    : 'hover:text-neutral-700';
  return (
    <a href={href} className={`text-base ${primaryClasses}`}>
      {children}
    </a>
  );
}
