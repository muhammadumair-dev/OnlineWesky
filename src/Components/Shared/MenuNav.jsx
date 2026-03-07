import React, { useState } from "react";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import CategoryDropdown from "./CategoryDropdown";
import SearchBar from "../Widgets/SearchBar";
import { Link } from 'react-router-dom';

function MenuNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedId, setExpandedId] = useState(null);

  const drinks = [
    { id: 1, selectname: "Gift Ideas", options: ["Wine", "Special Packages", "Gift Card"] }
    ,
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
    <div className="lg:hidden ">

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
        <div className="flex justify-between items-center py-4 px-2 gap-5 border-b border-gray-300">
          <SearchBar mobile />
          <FaTimes
            className="text-xl cursor-pointer"
            onClick={() => setIsOpen(false)}
          />
        </div>

        {/* Menu Content */}
        <div className="p-4 space-y-4">
          {drinks.map((item) => (
            <div key={item.id} className="">
              <div
                className="flex justify-between items-center py-2"
              >
                <Link
                  to={`/${item.selectname.toLowerCase().replace(/\s+/g,'-')}`}
                  className="flex-1 font-medium text-gray-800 hover:text-gray-600"
                  onClick={() => setIsOpen(false)}
                >
                  {item.selectname}
                </Link>
                {item.options && item.options.length > 0 && (
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setExpandedId(expandedId === item.id ? null : item.id);
                    }}
                    className="ml-2 p-1 cursor-pointer"
                  >
                    <FaChevronDown
                      className={`text-sm text-gray-600 transition-transform duration-300 ${
                        expandedId === item.id ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                )}
              </div>

              {item.options && item.options.length > 0 && expandedId === item.id && (
                <div className="pl-4 space-y-2">
                  {item.options.map((opt, i) => (
                    <Link
                      key={i}
                      to={`/${opt.toLowerCase().replace(/\s+/g,'-')}`}
                      className="block py-1 text-sm text-gray-600 hover:text-gray-800"
                      onClick={() => setIsOpen(false)}
                    >
                      {opt}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default MenuNav;