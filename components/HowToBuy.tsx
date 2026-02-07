
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
    <div className={`flex flex-col md:flex-row items-center gap-6 md:gap-8 mb-12 md:mb-20 relative ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
      {/* Step Icon & Number */}
      <div className="relative group z-30 shrink-0">
        <div className="w-20 h-20 md:w-28 md:h-28 bg-[#fefce8] rounded-full border-[3px] md:border-[4px] border-[#166534] flex items-center justify-center float-anim shadow-xl relative">
            <img src={icon} alt={title} className={iconClassName || "w-12 h-12 md:w-16 md:h-16 object-contain transition-transform group-hover:scale-115"} />
            <div className="absolute -top-1 -right-1 md:-top-2 md:-right-2 w-8 h-8 md:w-10 md:h-10 bg-yellow-400 border-[2px] md:border-[3px] border-[#166534] rounded-full flex items-center justify-center font-cartoon text-lg md:text-xl text-[#166534] shadow-lg z-40">
              {number}
            </div>
        </div>
      </div>

      {/* Chat Balloon */}
      <div className={`relative flex-1 p-5 md:p-8 rounded-[1.5rem] md:rounded-[2rem] border-[3px] md:border-[4px] border-[#fefce8] balloon-shadow transition-all duration-500 hover:scale-[1.02] ${isLeft ? 'bg-[#166534]' : 'bg-yellow-400'}`}>
        <h3 className={`font-cartoon text-2xl md:text-3xl mb-3 md:mb-4 tracking-wide uppercase ${isLeft ? 'text-yellow-400' : 'text-[#166534]'}`}>
          {title}
        </h3>

        <p className={`text-base md:text-lg font-medium leading-relaxed ${isLeft ? 'text-[#fefce8]' : 'text-[#166534]'}`}>
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
      description: "Trade your ETH for $TOAD. We have ZERO taxes, so set your slippage low! Welcome to the pack, you're officially a hunter now.",
      icon: "/logo.png",
      align: "right" as const,
      iconClassName: "w-16 h-16 md:w-20 md:h-20 object-contain transition-transform group-hover:scale-115"
    }
  ];

  return (
    <section id="how-to-buy" className="container mx-auto px-4 py-12 md:py-20 relative">
      <div className="text-center mb-12 md:mb-20">
        <h2 className="font-cartoon text-5xl md:text-7xl text-[#fefce8] drop-shadow-[0_6px_0_#166534] md:drop-shadow-[0_8px_0_#166534] mb-4 md:mb-8 uppercase leading-none">
          How to Buy
        </h2>
        <div className="flex justify-center gap-2 md:gap-3">
            {[...Array(5)].map((_, i) => (
                <div key={i} className="w-3 h-3 md:w-4 md:h-4 bg-yellow-400 border-[2px] border-[#166534] rounded-full animate-bounce" style={{ animationDelay: `${i * 0.2}s` }}></div>
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
