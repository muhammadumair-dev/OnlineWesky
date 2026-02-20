import React, { useState } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";

function MenuNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative lg:hidden">
      {/* Hamburger Icon - Sirf Mobile (md:hidden) par dikhega */}
      <div 
        className=" text-2xl cursor-pointer" 
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Menu Links - Mobile par Toggle honge, Desktop par hamesha dikhenge (ya hidden rakh sakte hain) */}
      <div className={`
        fixed top-0 left-0 h-full w-[250px] bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full"} 
      
      `}>
        <ul className="flex flex-col gap-6 p-10 md:p-0 text-black">
          <li className="font-semibold cursor-pointer">Home</li>
          <li className="font-semibold cursor-pointer">Categories</li>
          <li className="font-semibold cursor-pointer">Deals</li>
        </ul>
      </div>

      {/* Overlay: Jab menu khule toh piche ka screen dark ho jaye (Mobile only) */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black opacity-50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </div>
  );
}

export default MenuNav;