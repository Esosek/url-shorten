import type { ReactNode } from 'react';

type LinkProps = {
  children?: ReactNode;
  href?: string;
  isPrimary?: boolean;
  cssClass?: string;
};

export default function Link({
  children,
  href = '#',
  isPrimary = false,
  cssClass,
}: LinkProps) {
  const primaryClasses = isPrimary
    ? 'bg-cyan text-white py-3 px-8 rounded-full hover:bg-cyan/50 transition-colors'
    : 'md:hover:text-neutral-700';
  return (
    <a
      href={href}
      className={`text-base block text-center md:w-fit ${primaryClasses} ${cssClass}`}
    >
      {children}
    </a>
  );
}
