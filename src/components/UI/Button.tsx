import type { ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonProps = {
  children?: ReactNode;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
};

export default function Button({
  children,
  type = 'button',
  onClick,
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="bg-cyan-400 text-white py-3 px-6 rounded-md w-full hover:bg-cyan-200 transition-colors md:w-fit"
    >
      {children}
    </button>
  );
}
