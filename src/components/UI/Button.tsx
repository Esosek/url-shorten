import type { ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonProps = {
  children?: ReactNode;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  isPrimary?: boolean;
};

export default function Button({
  children,
  type = 'button',
  onClick,
  isPrimary = false,
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-cyan-400 text-white px-6 
       rounded-md w-full hover:bg-cyan-200
       transition-colors md:w-fit
       ${isPrimary ? 'py-3' : 'py-2 text-sm'}`}
    >
      {children}
    </button>
  );
}
