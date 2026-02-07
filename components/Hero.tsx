
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative pt-20 pb-16 md:pb-24 px-4 overflow-hidden">
      {/* Moving Clouds */}
      <div className="absolute top-20 left-0 right-0 h-40 overflow-hidden pointer-events-none">
        <div className="cloud-1 absolute w-32 h-12 bg-white rounded-full opacity-30 blur-md"></div>
        <div className="cloud-2 absolute w-40 h-14 bg-white rounded-full opacity-25 blur-md" style={{ top: '60px' }}></div>
        <div className="cloud-3 absolute w-28 h-10 bg-white rounded-full opacity-20 blur-md" style={{ top: '30px' }}></div>
      </div>

      <div className="container mx-auto text-center relative z-10">
        <div className="relative inline-block mb-8 md:mb-12">
            <div className="relative group">
                <div className="absolute inset-0 bg-yellow-400 blur-[60px] opacity-30 rounded-full scale-110"></div>
                <img
                    src="/logo.png"
                    alt="The Toad King"
                    className="w-48 h-48 md:w-[380px] md:h-[380px] object-cover rounded-full border-[8px] md:border-[12px] border-[#166534] shadow-[0_15px_45px_rgba(0,0,0,0.3)] mx-auto relative z-10 block"
                />
            </div>
        </div>

        <h1 className="mb-4 md:mb-6 leading-none">
          <span className="font-cartoon text-6xl sm:text-7xl md:text-[9rem] text-[#166534] drop-shadow-[0_6px_0_#fefce8] md:drop-shadow-[0_10px_0_#fefce8] uppercase tracking-tighter">
            $TOAD
          </span>
          <span className="font-marker text-3xl sm:text-4xl md:text-6xl text-yellow-400 drop-shadow-[0_3px_0_#166534] md:drop-shadow-[0_4px_0_#166534] ml-2 md:ml-4 -rotate-6 inline-block">
            Killer
          </span>
        </h1>
        <p className="font-bungee text-lg md:text-3xl text-[#166534] mb-8 md:mb-12 max-w-3xl mx-auto leading-tight drop-shadow-sm px-4">
          You know who we <span className="text-[#fefce8] bg-[#166534] px-4 md:px-5 py-1 md:py-1.5 rounded-xl md:rounded-2xl -rotate-2 inline-block shadow-md">ARE</span>
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6 px-6">
            <a href="https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0x370a366f402e2e41CDBbE54EcEC12aaE0cce1955" target="_blank" rel="noopener noreferrer" className="bg-yellow-400 hover:bg-yellow-300 text-[#166534] font-cartoon text-2xl md:text-3xl px-10 md:px-12 py-4 md:py-5 rounded-xl md:rounded-[1.5rem] shadow-[0_6px_0_#166534] md:shadow-[0_8px_0_#166534] active:translate-y-1.5 active:shadow-none transition-all transform hover:scale-105">
                GET $TOAD
            </a>
            <a href="https://dexscreener.com/ethereum/0x370a366f402e2e41cdbbe54ecec12aae0cce1955" target="_blank" rel="noopener noreferrer" className="bg-[#fefce8] hover:bg-white text-[#166534] font-cartoon text-2xl md:text-3xl px-10 md:px-12 py-4 md:py-5 rounded-xl md:rounded-[1.5rem] border-[3px] border-[#166534] shadow-[0_6px_0_#166534] md:shadow-[0_8px_0_#166534] active:translate-y-1.5 active:shadow-none transition-all transform hover:scale-105">
                DEXSCREENER
            </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
