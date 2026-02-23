import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import CategoryDropdown from "./CategoryDropdown";
import SearchBar from "../Widgets/SearchBar";

function MenuNav() {
  const [isOpen, setIsOpen] = useState(false);

  const drinks = [
    { 
      id: 1, 
      selectname: "Gift Ideas", 
      options: ["Wine", "Champagne", "Sparkling Wine"] 
    },
    { 
      id: 2, 
      selectname: "New In"
    },
    { 
      id: 3, 
      selectname: "Whisky", 
      options: ["Gin", "Tonic", "Vodka"] 
    },
    { 
      id: 4, 
      selectname: "Gin & Tonic", 
      options: ["Red Wine", "White Wine", "Rose"] 
    },
    { 
      id: 5, 
      selectname: "Rum & Cachaca"
    },
    { 
      id: 6, 
      selectname: "Vodka"
    },
    { 
      id: 7, 
      selectname: "Wine & Champagne", 
      options: ["Gin", "Tonic", "Vodka"] 
    },
    { 
      id: 8, 
      selectname: "More", 
      options: ["Gin", "Tonic", "Vodka"] 
    }
  ];

  return (
    <div className="lg:hidden">

      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="text-[20px] sm:text-[28px]  text-gray-700"
      >
        <FaBars />
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/40 z-40"
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-[280px] bg-white text-black z-50 
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >

        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b border-gray-300">
          <SearchBar mobile />
          <FaTimes
            className="text-xl cursor-pointer"
            onClick={() => setIsOpen(false)}
          />
        </div>

        {/* Menu Content */}
        <div className="p-4 space-y-4">
          {drinks.map((item) => (
            <CategoryDropdown
              key={item.id}
              selectname={item.selectname}
              name={item.options}
            />
          ))}
        </div>

      </div>
    </div>
  );
}

export default MenuNav;