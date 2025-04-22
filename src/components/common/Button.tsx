import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
  href?: string;
  to?: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  className = '',
  href,
  to,
  type = 'button',
  onClick,
  disabled = false,
}) => {
  const baseClasses = variant === 'primary' 
    ? 'btn-primary' 
    : 'btn-secondary';
  
  const allClasses = `${baseClasses} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`;

  if (href) {
    return (
      <a href={href} className={allClasses}>
        {children}
      </a>
    );
  }

  if (to) {
    return (
      <Link to={to} className={allClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={allClasses}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;