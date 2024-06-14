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
  const primaryClasses =
    isPrimary &&
    'bg-cyan-400 text-white py-3 px-8 rounded-full hover:bg-cyan-200 transition-colors';
  return (
    <a
      href={href}
      className={`text-base text-center md:w-fit group ${primaryClasses} ${cssClass}`}
    >
      {children}
    </a>
  );
}
