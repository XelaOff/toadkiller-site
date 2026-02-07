
import React, { useMemo } from 'react';
import { Icons } from '../constants';

const GrassBlade = ({ x, height, delay, color, opacity }: { x: number, height: number, delay: number, color: string, opacity: number }) => (
  <svg 
    className="absolute bottom-0 sway-anim" 
    style={{ left: `${x}%`, height: `${height}px`, animationDelay: `${delay}s`, opacity }}
    viewBox="0 0 20 100" 
    preserveAspectRatio="none"
  >
    <path d="M10 0 C15 30, 20 70, 20 100 L0 100 C0 70, 5 30, 10 0 Z" fill={color} />
  </svg>
);

const Cattail = ({ x, height, delay }: { x: number, height: number, delay: number }) => (
  <div 
    className="absolute bottom-0 group cursor-pointer sway-anim" 
    style={{ left: `${x}%`, height: `${height}px`, animationDelay: `${delay}s` }}
  >
    {/* Stem */}
    <div className="w-1 h-full bg-green-800 mx-auto rounded-full"></div>
    {/* Head */}
    <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-3 h-10 bg-yellow-600/80 rounded-full shadow-lg group-hover:scale-125 transition-transform"></div>
    {/* Tip */}
    <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-0.5 h-3 bg-green-900"></div>
  </div>
);

const MarshFooter: React.FC = () => {
  // Generate random grass blades
  const backgroundGrass = useMemo(() => Array.from({ length: 60 }).map((_, i) => ({
    x: Math.random() * 100,
    height: 40 + Math.random() * 60,
    delay: Math.random() * -5,
    color: '#1b4332',
    opacity: 0.6
  })), []);

  const foregroundGrass = useMemo(() => Array.from({ length: 40 }).map((_, i) => ({
    x: Math.random() * 100,
    height: 60 + Math.random() * 80,
    delay: Math.random() * -5,
    color: '#2d6a4f',
    opacity: 1
  })), []);

  const cattails = useMemo(() => Array.from({ length: 8 }).map((_, i) => ({
    x: 5 + (i * 12) + (Math.random() * 5),
    height: 120 + Math.random() * 80,
    delay: Math.random() * -4
  })), []);

  return (
    <footer className="relative">
      {/* Grass Layers */}
      <div className="relative h-32 pointer-events-none">
        {backgroundGrass.map((g, i) => <GrassBlade key={`bg-${i}`} {...g} />)}
        {cattails.map((c, i) => <Cattail key={`cat-${i}`} {...c} />)}
        {foregroundGrass.map((g, i) => <GrassBlade key={`fg-${i}`} {...g} />)}
      </div>

      {/* Main Footer Body */}
      <div className="bg-[#1a120b] pt-10 pb-8 relative border-t-4 border-[#1b4332]">
        {/* Bubbles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(10)].map((_, i) => (
            <div 
              key={i} 
              className="bubble absolute w-2 h-2 bg-white/10 rounded-full"
              style={{ left: `${Math.random() * 100}%`, bottom: '-20px', animationDelay: `${Math.random() * 5}s` }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {/* Left Column - Logo & Quote */}
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
                {/* <img src="/logo.png" alt="Toad" className="w-10 h-10 rounded-lg rotate-12 border-2 border-green-300 object-cover" /> */}
                <h3 className="font-cartoon text-4xl text-green-400">$TOAD</h3>
                <span className="font-marker text-xl text-yellow-400 drop-shadow-[0_2px_0_#166534] -rotate-6">Killer</span>
              </div>
              <p className="text-green-500/60 font-medium italic">
                "You know who we are. We already killed a dog"
              </p>
            </div>

            {/* Center Column - Disclaimer */}
            <div className="text-center max-w-md mx-auto">
              <p className="text-green-500/40 text-[10px] leading-relaxed">
                Disclaimer: No real frog has been harmed in this process. $TOAD is a MemeCoin with no intrinsic value or expectation of financial return. There is no formal team or roadmap. The coin is completely useless and for entertainment purposes only. Any comment is pure fiction, just like frog's dream of overtaking dog in the realm of memecoins.
              </p>
            </div>

            {/* Right Column - Copyright */}
            <div className="text-center md:text-right">
              <div className="flex items-center justify-center md:justify-end gap-2 text-green-500 font-bold text-sm uppercase tracking-widest">
                <span>&copy; 2026 Toad Killer</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MarshFooter;
