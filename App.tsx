// toadkiller
import React, { useEffect, useState } from 'react';
import Hero from './components/Hero';
import Sun from './components/Sun';
import ContractBox from './components/ContractBox';
import HowToBuy from './components/HowToBuy';
import LilyPad from './components/LilyPad';
import MarshFooter from './components/MarshFooter';
import PriceTicker from './components/PriceTicker';
import { LORE_TEXT, Icons } from './constants';

const App: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const calculateParallax = (factor: number) => {
    const x = (mousePos.x - window.innerWidth / 2) * factor;
    const y = (mousePos.y - window.innerHeight / 2) * factor;
    return `translate(${x}px, ${y}px)`;
  };

  return (
    <div className="min-h-screen relative flex flex-col overflow-x-hidden text-[#fefce8]">
      {/* Price Ticker */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <PriceTicker />
      </div>

      {/* Top Nav */}
      <div className="fixed top-10 left-4 right-4 z-50 flex justify-between items-center">
        {/* Logo - Left */}
        <a href="/" className="flex items-center">
          <img src="/logo.png" alt="Toad" className="w-10 h-10 md:w-12 md:h-12" />
        </a>

        {/* Social Links - Right */}
        <div className="flex gap-3">
          <a
            href="https://cafe.toadkiller.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-green-500 hover:bg-green-400 text-green-900 font-cartoon px-4 py-3 rounded-2xl flex items-center gap-2 transition-all hover:scale-105 shadow-[0_6px_0_#166534] active:translate-y-1 active:shadow-none"
          >
            <img src="/watermark_finger_large.png" alt="Cafe" className="w-6 h-6 object-contain brightness-0" />
            <span className="translate-y-0.5 hidden sm:inline">Cafe</span>
          </a>
          <a
            href="https://t.me/The_Toadkiller"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-green-500 hover:bg-green-400 text-green-900 font-cartoon px-4 py-3 rounded-2xl flex items-center gap-2 transition-all hover:scale-105 shadow-[0_6px_0_#166534] active:translate-y-1 active:shadow-none"
          >
            <Icons.Telegram className="w-6 h-6" />
            <span className="translate-y-0.5 hidden sm:inline">TELEGRAM</span>
          </a>
          <a
            href="https://x.com/toadkiller420"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-green-500 hover:bg-green-400 text-green-900 font-cartoon px-4 py-3 rounded-2xl flex items-center gap-2 transition-all hover:scale-105 shadow-[0_6px_0_#166534] active:translate-y-1 active:shadow-none"
          >
            <Icons.Twitter className="w-6 h-6" />
            <span className="translate-y-0.5 hidden sm:inline">X</span>
          </a>
        </div>
      </div>

      {/* Ambient Parallax Blobs */}
      <div className="fixed inset-0 z-[-1] pointer-events-none">
        <div 
          className="absolute top-[30%] left-[5%] w-[40vw] h-[40vw] bg-yellow-400/5 blur-[150px] rounded-full"
          style={{ transform: calculateParallax(0.01) }}
        ></div>
        <div 
          className="absolute bottom-[20%] right-[15%] w-[50vw] h-[50vw] bg-green-500/5 blur-[180px] rounded-full"
          style={{ transform: calculateParallax(-0.015) }}
        ></div>
      </div>

      <Sun />
      
      <main className="flex-grow">
        <Hero />
        
        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="glass-panel rounded-[3rem] md:rounded-[5rem] p-8 md:p-24 relative overflow-hidden group border-[4px] md:border-[6px] border-[#fefce8]/30">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
                <div className="relative z-10 order-2 md:order-1 text-center md:text-left">
                    <span className="font-marker text-yellow-400 text-2xl md:text-4xl block mb-4 md:mb-6 tracking-wide drop-shadow-[0_3px_0_#166534] md:drop-shadow-[0_4px_0_#166534]">The Prophecy</span>
                    <h2 className="font-cartoon text-6xl md:text-8xl text-[#fefce8] mb-6 md:mb-10 drop-shadow-[0_4px_0_#166534] md:drop-shadow-[0_6px_0_#166534] uppercase leading-none">Avcı Masalı</h2>
                    <p className="text-xl md:text-4xl text-[#fefce8] leading-relaxed md:leading-snug font-medium mb-8 md:mb-12 italic opacity-90">
                      {LORE_TEXT}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8">
                        <div className="bg-[#fefce8]/10 backdrop-blur-md border-[2px] md:border-[3px] border-yellow-400/30 p-6 md:p-8 rounded-2xl md:rounded-[3rem] text-center transform transition-all hover:bg-[#fefce8]/20">
                            <div className="font-cartoon text-4xl md:text-5xl text-yellow-400">420.69T</div>
                            <div className="text-xs md:text-sm font-bold text-[#fefce8] tracking-[0.1em] md:tracking-[0.2em] uppercase mt-2 md:mt-4">Total Supply</div>
                        </div>
                        <div className="bg-[#166534]/40 backdrop-blur-md border-[2px] md:border-[3px] border-[#166534]/50 p-6 md:p-8 rounded-2xl md:rounded-[3rem] text-center transform transition-all hover:bg-[#166534]/60">
                            <div className="font-cartoon text-4xl md:text-5xl text-green-400">0% TAX</div>
                            <div className="text-xs md:text-sm font-bold text-[#fefce8] tracking-[0.1em] md:tracking-[0.2em] uppercase mt-2 md:mt-4">Zero Cuts</div>
                        </div>
                    </div>
                </div>
                <div className="relative order-1 md:order-2">
                   <div className="bg-yellow-400 rounded-3xl md:rounded-[4rem] p-4 md:p-6 shadow-[0_15px_30px_rgba(0,0,0,0.5)] md:shadow-[0_25px_50px_rgba(0,0,0,0.5)] -rotate-2 md:-rotate-3 hover:rotate-0 transition-all duration-1000 ease-in-out">
                        <img
                            src="/banner.jpg"
                            alt="The Swamp Art"
                            className="rounded-2xl md:rounded-[3rem] border-4 md:border-8 border-[#166534]"
                        />
                   </div>
                   {/* Decorative Sticker */}
                   <div className="absolute -top-4 -right-4 md:-top-8 md:-right-8 bg-yellow-400 text-[#166534] font-cartoon text-2xl md:text-4xl py-2 md:py-4 px-6 md:px-10 rounded-xl md:rounded-[2rem] rotate-12 shadow-2xl border-[4px] md:border-[6px] border-[#166534]">
                     BULLISH!
                   </div>
                                   </div>
            </div>
          </div>
        </div>

        <ContractBox />

        <HowToBuy />
      </main>

      <MarshFooter />
    </div>
  );
};

export default App;
