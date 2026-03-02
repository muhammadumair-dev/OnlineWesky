import React, { useState, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

function CategoryDropdown({ selectname, name }) {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  const options = name || [];

  // Detect screen size
  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 1024); // lg breakpoint
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const closeTimer = React.useRef();

  const handleMouseEnter = () => {
    if (isMobile) return;
    clearTimeout(closeTimer.current);
    setOpen(true);
  };

  const handleMouseLeave = () => {
    if (isMobile) return;
    // delay hiding to allow moving into menu
    closeTimer.current = setTimeout(() => {
      setOpen(false);
      setHoveredItem(null);
    }, 500); // increased delay
  };

  return (
    <div
      className="relative  lg:inline xl:inline md:hidden w-fit mx-2"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Top Button */}
      <div
        className="flex items-center cursor-pointer border-b-2 border-transparent hover:border-yellow-500 transition-all"
        onClick={() => {
          if (isMobile) setOpen(!open);
          else navigate(`/${selectname.toLowerCase().replace(/\s+/g,'-')}`);
        }}
      >
        <h2 className="text-[14px] font-medium">{selectname}</h2>

        {options.length > 0 && (
          <FaChevronDown
            className={`text-[10px] text-gray-400 ml-1 transition-transform  duration-[1200ms]  ${
              open ? "rotate-180" : ""
            }`}
          />
        )}
      </div>

      {/* Dropdown Box */}
      {open && options.length > 0 && (
        <div className="absolute top-10 left-0 w-48 bg-gray-100 shadow-lg transition-opacity duration-200 rounded-md p-2 z-50">
          {options.map((item, index) => (
            <div
              key={index}
              className={`py-2 px-2 rounded-md cursor-pointer transition-colors  duration-[1200ms] 
              ${
                hoveredItem === item
                  ? "bg-yellow-100 text-yellow-600"
                  : "text-gray-800"
              }`}
              onMouseEnter={() => !isMobile && setHoveredItem(item)}
              onMouseLeave={() => !isMobile && setHoveredItem(null)}
              onClick={(e) => {
                e.stopPropagation();
                clearTimeout(closeTimer.current);
                setOpen(false);
                navigate(`/${item.toLowerCase().replace(/\s+/g,'-')}`);
              }}
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CategoryDropdown;