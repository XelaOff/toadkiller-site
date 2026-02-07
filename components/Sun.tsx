
import React from 'react';

const Sun: React.FC = () => {
  return (
    <div className="absolute top-20 right-[-100px] md:right-20 z-0">
      <div className="relative">
        {/* Rays */}
        <div className="sun-rays absolute inset-0 w-64 h-64 md:w-96 md:h-96 flex items-center justify-center pointer-events-none">
            {[...Array(12)].map((_, i) => (
                <div 
                    key={i} 
                    className="absolute w-2 md:w-4 h-[400px] md:h-[600px] bg-yellow-400 opacity-20 blur-xl rounded-full"
                    style={{ transform: `rotate(${i * 30}deg)` }}
                />
            ))}
        </div>
        {/* Core */}
        <div className="w-48 h-48 md:w-80 md:h-80 bg-gradient-to-br from-yellow-200 via-yellow-400 to-orange-400 rounded-full shadow-[0_0_150px_rgba(253,224,71,0.5)] relative z-10">
          <div className="absolute top-1/4 left-1/4 w-12 h-12 bg-white/30 rounded-full blur-xl"></div>
        </div>
      </div>
    </div>
  );
};

export default Sun;
