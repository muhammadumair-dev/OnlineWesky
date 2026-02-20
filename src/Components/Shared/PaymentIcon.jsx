import React from 'react';

const PaymentIcon = ({ name, icon }) => {
  return (
    <div className="bg-[#f2f2f] px-3 rounded-md flex items-center justify-center grayscale hover:grayscale-0 transition-all cursor-pointer">
      {/* If using real SVGs/Images, replace the span with <img> */}
      <span className="text-[10px] font-bold text-[#555] uppercase tracking-tighter">
        {name}
      </span>
    </div>
  );
};

export default PaymentIcon;