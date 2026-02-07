
import React, { useState } from 'react';
import { CONTRACT_ADDRESS, Icons } from '../constants';

const ContractBox: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(CONTRACT_ADDRESS);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-2xl mx-auto mt-20 px-4 relative z-20">
      <div className="bg-[#fefce8] border-4 border-[#166534]/50 rounded-[2.5rem] p-8 shadow-[0_20px_0_rgba(22,101,52,0.6)] transform hover:scale-[1.02] transition-all duration-300">
        <h3 className="font-cartoon text-3xl text-[#166534] mb-4 text-center">SWAMP ADDRESS</h3>
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <div className="flex-1 bg-yellow-400/20 border-2 border-yellow-400/40 rounded-2xl px-6 py-4 font-mono text-sm break-all text-[#166534] font-bold select-all text-center sm:text-left">
            {CONTRACT_ADDRESS}
          </div>
          <button 
            onClick={handleCopy}
            className={`flex items-center gap-3 px-8 py-4 rounded-2xl font-cartoon text-2xl transition-all shadow-[0_6px_0_#166534] active:translate-y-1 active:shadow-none ${copied ? 'bg-green-500 text-white' : 'bg-[#166534] text-[#fefce8] hover:bg-[#1a8044]'}`}
          >
            {copied ? <Icons.Check /> : <Icons.Copy />}
            {copied ? 'DONE!' : 'COPY'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContractBox;
