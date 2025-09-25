
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyles = 'px-6 py-3 font-bold rounded-full transition-transform duration-200 transform hover:scale-105 shadow-lg';
  
  const variantStyles = {
    primary: 'bg-primary text-white hover:bg-green-600 dark:hover:bg-primary-dark',
    secondary: 'bg-accent text-white hover:bg-orange-600 dark:hover:bg-accent-dark',
  };

  return (
    <button className={`${baseStyles} ${variantStyles[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
