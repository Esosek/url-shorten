import type { ReactNode } from 'react';

type ButtonProps = {
  children?: ReactNode;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  disabled?: boolean;
  isPrimary?: boolean;
  bgColor?: string;
  hoverBgColor?: string;
  extraClasses?: string;
};

export default function Button({
  children,
  type = 'button',
  onClick,
  disabled = false,
  isPrimary = false,
  bgColor = 'bg-cyan-400',
  hoverBgColor = 'hover:bg-cyan-200',
  extraClasses,
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${bgColor} ${hoverBgColor} ${extraClasses} text-white px-6 
       rounded-md w-full 
       transition-colors md:w-fit
       disabled:bg-cyan-200
       ${isPrimary ? 'py-3' : 'py-2 text-sm'}`}
    >
      {children}
    </button>
  );
}
