import React from 'react';
import { IoChevronDown } from 'react-icons/io5';

const BrandSelect = () => {
  return (
    <div className="relative mt-4">
      <select className="w-full appearance-none border border-gray-300 rounded-sm py-2 px-3 text-[13px] text-gray-700 bg-white focus:outline-none">
        <option>Any Brand</option>
      </select>
      <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
        <IoChevronDown size={14} className="text-gray-500" />
      </div>
    </div>
  );
};

export default BrandSelect;