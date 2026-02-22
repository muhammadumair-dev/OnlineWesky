import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

function CategoryDropdown({ selectname, name }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-[150px] flex  ">
      
      {/* Title */}
      <div
        onClick={() => setOpen(!open)}
        className="flex items-center gap-[10px] justify-between cursor-pointer py-2 border-b border-gray-300"
      >
        <h2 className="text-[14px]  font-medium">{selectname}</h2>

        {name && (
          <FaChevronDown
            className={`text-[12px] transition-transform duration-300 ${
              open ? "rotate-180" : ""
            }`}
          />
        )}
      </div>

      {/* Dropdown Items */}
      {open && name && (
        <div className="mt-2 bg-gray-100 rounded-md">
          {name.map((item, index) => (
            <div
              key={index}
              className="py-2 px-3 text-sm hover:bg-yellow-500 hover:text-black cursor-pointer transition-all"
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