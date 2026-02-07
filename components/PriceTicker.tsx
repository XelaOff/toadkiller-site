import React, { useEffect, useState } from 'react';

interface PriceData {
  bitcoin: { usd: number; usd_24h_change: number };
  ethereum: { usd: number; usd_24h_change: number };
}

const PriceTicker: React.FC = () => {
  const [prices, setPrices] = useState<PriceData | null>(null);

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const response = await fetch(
          'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd&include_24hr_change=true'
        );
        const data = await response.json();
        setPrices(data);
      } catch (error) {
        console.error('Failed to fetch prices:', error);
      }
    };

    fetchPrices();
    const interval = setInterval(fetchPrices, 60000); // Update every minute
    return () => clearInterval(interval);
  }, []);

  const formatPrice = (price: number) => {
    return price >= 1
      ? `$${price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
      : `$${price.toFixed(6)}`;
  };

  const formatChange = (change: number) => {
    const sign = change >= 0 ? '+' : '';
    return `${sign}${change.toFixed(2)}%`;
  };

  const tickerItems = [
    { symbol: 'BTC', price: prices?.bitcoin?.usd, change: prices?.bitcoin?.usd_24h_change },
    { symbol: 'ETH', price: prices?.ethereum?.usd, change: prices?.ethereum?.usd_24h_change },
  ];

  const TickerContent = () => (
    <>
      {tickerItems.map((item, i) => (
        <span key={i} className="inline-flex items-center gap-2 mx-6">
          <span className="font-bold text-yellow-400">{item.symbol}</span>
          {item.price ? (
            <>
              <span className="text-[#fefce8]">{formatPrice(item.price)}</span>
              <span className={item.change && item.change >= 0 ? 'text-green-400' : 'text-red-400'}>
                {item.change ? formatChange(item.change) : ''}
              </span>
            </>
          ) : (
            <span className="text-[#fefce8]/50">Loading...</span>
          )}
          <span className="text-[#fefce8]/30 mx-2">|</span>
        </span>
      ))}
    </>
  );

  return (
    <div className="w-full bg-[#166534]/80 backdrop-blur-sm overflow-hidden py-1.5">
      <div className="flex">
        <div className="flex shrink-0 animate-scroll">
          <TickerContent />
          <TickerContent />
          <TickerContent />
          <TickerContent />
          <TickerContent />
          <TickerContent />
        </div>
        <div className="flex shrink-0 animate-scroll">
          <TickerContent />
          <TickerContent />
          <TickerContent />
          <TickerContent />
          <TickerContent />
          <TickerContent />
        </div>
      </div>
    </div>
  );
};

export default PriceTicker;
