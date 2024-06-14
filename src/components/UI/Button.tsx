import type { ReactNode } from 'react';

type ButtonProps = {
  children?: ReactNode;
  onClick?: () => void;
};

export default function Button({ children, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="bg-cyan-400 text-white py-2 px-6 rounded-md w-full hover:bg-cyan-200 transition-colors md:w-fit md:whitespace-nowrap"
    >
      {children}
    </button>
  );
}
