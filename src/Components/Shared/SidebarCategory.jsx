import React, { useState } from 'react';
import { IoChevronDown, IoChevronUp } from 'react-icons/io5';

const SidebarCategory = ({ label, count, subItems, isOpenInitial = false }) => {
  const [isOpen, setIsOpen] = useState(isOpenInitial);

  return (
    <div className="border-b border-gray-100 last:border-0 py-2">
      <div 
        className="flex justify-between items-center cursor-pointer group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-[13px] font-medium text-gray-800 group-hover:text-black transition-colors">
          {label}
        </span>
        <div className="flex items-center gap-2">
          <span className="text-[10px] text-gray-400">({count})</span>
          {subItems && (
            isOpen ? <IoChevronUp size={14} className="text-gray-400" /> : <IoChevronDown size={14} className="text-gray-400" />
          )}
        </div>
      </div>
      
      {isOpen && subItems && (
        <ul className="mt-2 ml-4 space-y-2">
          {subItems.map((item, index) => (
            <li key={index} className="text-[12px] text-gray-600 hover:text-black cursor-pointer flex justify-between items-center">
              <span className={item.bold ? "font-bold" : ""}>{item.name}</span>
              {item.hasSub && <IoChevronDown size={12} className="border border-gray-300 p-0.5" />}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SidebarCategory;