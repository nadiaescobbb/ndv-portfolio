import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const Button = ({ 
  children, 
  variant = 'primary', 
  href, 
  onClick,
  icon,
  className = ''
}) => {
  const variants = {
    primary: 'px-6 py-3 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full font-semibold hover:shadow-lg hover:shadow-violet-500/50 transition-all',
    secondary: 'px-6 py-3 border border-white/30 rounded-full font-semibold hover:bg-white/10 transition-all',
    ghost: 'px-6 py-3 hover:bg-white/5 rounded-full transition-all'
  };

  const content = (
    <>
      {children}
      {icon && <ArrowUpRight className="w-5 h-5 ml-2" />}
    </>
  );

  const baseClasses = `${variants[variant]} ${className} inline-flex items-center gap-2`;

  if (href) {
    return (
      <a href={href} className={baseClasses}>
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={baseClasses}>
      {content}
    </button>
  );
};

export default Button;