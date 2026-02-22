import React, { useState } from 'react';

const PriceSlider = () => {
  const [range, setRange] = useState([10, 3400]);

  return (
    <div className="mt-6">
      <div className="relative h-1 bg-gray-300 rounded-full mt-8 mb-4">
        <div className="absolute h-full bg-gray-500 left-0 right-0 rounded-full"></div>
        <div className="absolute -top-1.5 left-0 w-4 h-4 bg-gray-600 rounded-full cursor-pointer"></div>
        <div className="absolute -top-1.5 right-0 w-4 h-4 bg-gray-600 rounded-full cursor-pointer"></div>
      </div>
      <div className="flex justify-between items-center mt-4">
        <button className="bg-[#666] text-white text-[10px] font-bold px-5 py-2 rounded-full uppercase tracking-widest hover:bg-black transition-colors">
          Filter
        </button>
        <span className="text-[12px] text-gray-700 font-medium">
          Price: €{range[0]} — €{range[1].toLocaleString()}
        </span>
      </div>
    </div>
  );
};

export default PriceSlider;