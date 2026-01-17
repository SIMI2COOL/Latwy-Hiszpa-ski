import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
}

export const Logo: React.FC<LogoProps> = ({ className = '', size = 32 }) => {
  return (
    <div 
      className={`inline-flex items-center justify-center ${className}`}
      style={{ 
        width: `${size}px`, 
        height: `${size}px`,
      }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Circle border */}
        <circle 
          cx="100" 
          cy="100" 
          r="92" 
          fill="none" 
          stroke="#c8102e" 
          strokeWidth="16"
        />

        {/* Text ŁH */}
        <text 
          x="104" 
          y="97" 
          fontFamily="Arial, Helvetica, sans-serif" 
          fontSize="96" 
          fontWeight="bold" 
          fill="#c8102e" 
          textAnchor="middle" 
          dominantBaseline="central">
          ŁH
        </text>
      </svg>
    </div>
  );
};

export default Logo;
