import { useState, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";

function CategoryDropdown({ selectname, name }) {
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

  return (
    <div
      className="relative  lg:inline xl:inline md:hidden w-fit mx-2"
      onMouseEnter={() => !isMobile && setOpen(true)}
      onMouseLeave={() => !isMobile && (setOpen(false), setHoveredItem(null))}
    >
      {/* Top Button */}
      <div
        className="flex items-center cursor-pointer border-b-2 border-transparent hover:border-yellow-500 transition-all"
        onClick={() => isMobile && setOpen(!open)}
      >
        <h2 className="text-[14px] font-medium">{selectname}</h2>

        {options.length > 0 && (
          <FaChevronDown
            className={`text-[10px] text-gray-400 ml-1 transition-transform duration-300 ${
              open ? "rotate-180" : ""
            }`}
          />
        )}
      </div>

      {/* Dropdown Box */}
      {open && options.length > 0 && (
        <div className="absolute top-10 left-0 w-48 bg-gray-100 shadow-lg rounded-md p-2 z-50">
          {options.map((item, index) => (
            <div
              key={index}
              className={`py-2 px-2 rounded-md cursor-pointer transition-colors duration-200 
              ${
                hoveredItem === item
                  ? "bg-yellow-100 text-yellow-600"
                  : "text-gray-800"
              }`}
              onMouseEnter={() => !isMobile && setHoveredItem(item)}
              onMouseLeave={() => !isMobile && setHoveredItem(null)}
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