
import React from 'react';

interface LilyPadProps {
  className?: string;
  size?: number;
}

const LilyPad: React.FC<LilyPadProps> = ({ className, size = 120 }) => {
  return (
    <div className={`float-anim ${className}`} style={{ width: size, height: size * 0.7 }}>
      <svg viewBox="0 0 100 70" className="w-full h-full drop-shadow-lg">
        <path 
            d="M50 0 C20 0, 0 20, 0 35 C0 50, 20 70, 50 70 C80 70, 100 50, 100 35 C100 20, 80 0, 50 0 L50 20 L50 0 Z" 
            fill="#2d6a4f" 
            className="hover:fill-[#40916c] transition-colors cursor-pointer"
        />
        <path d="M50 20 L50 70" stroke="#1b4332" strokeWidth="1" />
        <path d="M50 35 L80 15" stroke="#1b4332" strokeWidth="1" />
        <path d="M50 35 L20 15" stroke="#1b4332" strokeWidth="1" />
      </svg>
    </div>
  );
};

export default LilyPad;
