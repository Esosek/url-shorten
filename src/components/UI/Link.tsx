import type { ReactNode } from 'react';

type LinkProps = {
  children?: ReactNode;
  href?: string;
};

export default function Link({ children, href = '#' }: LinkProps) {
  return (
    <a href={href} className="text-base hover:text-neutral-700">
      {children}
    </a>
  );
}
