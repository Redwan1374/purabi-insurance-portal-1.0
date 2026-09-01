import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../logo.png';

interface BrandLogoProps {
  variant?: 'dark' | 'light';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const BrandLogo: React.FC<BrandLogoProps> = ({ className = '', size = 'md' }) => {
  const heightClass = size === 'sm' ? 'h-10' : size === 'lg' ? 'h-16' : 'h-12';

  return (
    <Link to="/" className={`inline-flex items-center group select-none ${className}`}>
      <img
        src={logo}
        alt="Purabi General Insurance Company Limited"
        className={`${heightClass} w-auto object-contain transition-transform duration-200 group-hover:scale-105`}
      />
    </Link>
  );
};
