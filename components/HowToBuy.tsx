
import React from 'react';

interface BuyStepProps {
  number: string;
  title: string;
  description: string;
  icon: string;
  align: 'left' | 'right';
  iconClassName?: string;
}

const BuyStep: React.FC<BuyStepProps> = ({ number, title, description, icon, align, iconClassName }) => {
  const isLeft = align === 'left';

  return (
    <div className={`flex flex-col md:flex-row items-center gap-8 md:gap-12 mb-20 md:mb-36 relative ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
      {/* Step Icon & Number */}
      <div className="relative group z-30 shrink-0">
        <div className="w-28 h-28 md:w-40 md:h-40 bg-[#fefce8] rounded-full border-[4px] md:border-[6px] border-[#166534] flex items-center justify-center float-anim shadow-2xl relative">
            <img src={icon} alt={title} className={iconClassName || "w-16 h-16 md:w-24 md:h-24 object-contain transition-transform group-hover:scale-115"} />
            <div className="absolute -top-2 -right-2 md:-top-4 md:-right-4 w-10 h-10 md:w-14 md:h-14 bg-yellow-400 border-[3px] md:border-[4px] border-[#166534] rounded-full flex items-center justify-center font-cartoon text-xl md:text-3xl text-[#166534] shadow-xl z-40">
              {number}
            </div>
        </div>
      </div>

      {/* Chat Balloon */}
      <div className={`relative flex-1 p-8 md:p-14 rounded-[2.5rem] md:rounded-[4rem] border-[4px] md:border-[5px] border-[#fefce8] balloon-shadow transition-all duration-500 hover:scale-[1.02] ${isLeft ? 'bg-[#166534] rounded-bl-none' : 'bg-yellow-400 rounded-br-none'}`}>
        {/* Tail Connector */}
        <div className={`absolute bottom-[-5px] ${isLeft ? 'left-[-20px] md:left-[-30px]' : 'right-[-20px] md:right-[-30px]'} w-10 h-10 md:w-16 md:h-16`}>
           <svg viewBox="0 0 100 100" className="w-full h-full">
              {/* Tail Background */}
              <path 
                d={isLeft ? "M100 0 L0 100 L100 100 Z" : "M0 0 L100 100 L0 100 Z"} 
                fill={isLeft ? "#166534" : "#facc15"} 
              />
              {/* Tail Border */}
              <path 
                d={isLeft ? "M100 0 L0 100" : "M0 0 L100 100"} 
                stroke="#fefce8" 
                strokeWidth="10" 
                fill="none" 
              />
           </svg>
        </div>

        <h3 className={`font-cartoon text-3xl md:text-5xl mb-4 md:mb-6 tracking-wide uppercase ${isLeft ? 'text-yellow-400' : 'text-[#166534]'}`}>
          {title}
        </h3>
        
        <p className={`text-lg md:text-2xl font-medium leading-relaxed ${isLeft ? 'text-[#fefce8]' : 'text-[#166534]'}`}>
          {description}
        </p>
      </div>
    </div>
  );
};

const HowToBuy: React.FC = () => {
  const steps = [
    {
      number: "1",
      title: "Create a Wallet",
      description: "Download MetaMask or your preferred wallet. Desktop frogs: grab the Chrome extension. Mobile frogs: hit the App Store. Save your secret phrase in a dry place!",
      icon: "/meta.png",
      align: "left" as const
    },
    {
      number: "2",
      title: "Get Some ETH",
      description: "Fuel your wallet with ETH. Buy it directly inside your wallet, or transfer it from a CEX. You'll need this to swap for the legendary $TOAD.",
      icon: "https://upload.wikimedia.org/wikipedia/commons/0/05/Ethereum_logo_2014.svg",
      align: "right" as const
    },
    {
      number: "3",
      title: "Go to Uniswap",
      description: "Leap over to Uniswap. Connect your wallet and paste the $TOAD address. Ensure you're on the right lily pad before you jump!",
      icon: "https://cryptologos.cc/logos/uniswap-uni-logo.png",
      align: "left" as const
    },
    {
      number: "4",
      title: "Swap for $TOAD",
      description: "Trade your ETH for $TOAD. We have ZERO taxes, so set your slippage low! Welcome to the marsh, you're officially one of us now.",
      icon: "/logo.png",
      align: "right" as const,
      iconClassName: "w-24 h-24 md:w-32 md:h-32 object-contain transition-transform group-hover:scale-115"
    }
  ];

  return (
    <section id="how-to-buy" className="container mx-auto px-4 py-20 md:py-40 relative">
      <div className="text-center mb-20 md:mb-40">
        <h2 className="font-cartoon text-6xl md:text-[10rem] text-[#fefce8] drop-shadow-[0_8px_0_#166534] md:drop-shadow-[0_12px_0_#166534] mb-4 md:mb-8 uppercase leading-none">
          How to Buy
        </h2>
        <div className="flex justify-center gap-3 md:gap-4">
            {[...Array(5)].map((_, i) => (
                <div key={i} className="w-4 h-4 md:w-6 md:h-6 bg-yellow-400 border-[2px] md:border-[3px] border-[#166534] rounded-full animate-bounce" style={{ animationDelay: `${i * 0.2}s` }}></div>
            ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4">
        {steps.map((step, idx) => (
          <BuyStep key={idx} {...step} />
        ))}
      </div>
    </section>
  );
};

export default HowToBuy;
