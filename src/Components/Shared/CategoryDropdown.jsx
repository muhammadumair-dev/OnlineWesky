import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

function CategoryDropdown({ selectname, name }) {
  const [open, setOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  // fallback to empty array if no options
  const options = name || [];

  return (
    <div 
      className="relative md:hidden w-fit mx-2"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => { setOpen(false); setHoveredItem(null); }}
    >
      {/* Top Button */}
      <div className="flex items-center cursor-pointer border-b-2 border-transparent hover:border-yellow-500 transition-all">
        <h2 className="text-[14px] font-medium">{selectname}</h2>
        {options.length > 0 && (
          <FaChevronDown 
            className={`text-[10px] text-gray-400 ml-1 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} 
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
                          ${hoveredItem === item ? 'bg-yellow-100 text-yellow-600' : 'text-gray-800'}`}
              onMouseEnter={() => setHoveredItem(item)}
              onMouseLeave={() => setHoveredItem(null)}
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
