import React from 'react';

const Card = ({ 
  children, 
  className = '', 
  gradient = '',
  hoverColor = '',
  size = 'normal',
  onClick
}) => {
  const sizeClasses = {
    small: 'p-4',
    normal: 'p-6',
    large: 'p-8'
  };

  return (
    <div
      onClick={onClick}
      className={`
        ${sizeClasses[size]}
        bg-white/5 
        backdrop-blur-sm 
        rounded-3xl 
        border 
        border-white/10 
        ${hoverColor ? `hover:border-${hoverColor}/50` : 'hover:border-white/20'}
        transition-all 
        group 
        ${onClick ? 'cursor-pointer' : ''}
        ${gradient ? `bg-gradient-to-br ${gradient}` : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default Card;